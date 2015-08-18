import authorsRaw from './authors.js'
import fs from 'fs-extra';
import r from 'ramda';
import assign from 'object-assign';
import moment from 'moment';
import twStats from 'tweets-stats';

let stats = authorsRaw
  .map(author => ({
    username: author.username,
    start: moment(author.start, 'DD MMM YYYY').unix()
  }))
  .sort((a, b) => a.start - b.start)
  .map((author, i) => ({ username: author.username, index: i + 1 }))
  .map((author, i, arr) => {
    const tweets = fs.readJsonSync(`./dump/${author.username}.json`).tweets;
    author.followers_count = fs.readJsonSync(`./dump/${author.username}-info.json`).followers_count;
    return assign({}, author, twStats(tweets));
  })
  .map((author, i, arr) => {
    author.gainedFollowers = arr[i-1] ? (author.followers_count - arr[i-1].followers_count) : author.followers_count;
    return author;
  });

r.maxBy(r.prop('tweets'),            stats).maxTweets = true;
r.maxBy(r.prop('gainedFollowers'),   stats).maxGainedFollowers = true;
r.maxBy(r.path('own.total'.split('.')), stats).maxOwn = true;
r.maxBy(r.path('replies.total'.split('.')),     stats).maxReplies  = true;
r.maxBy(r.path('retweets.total'.split('.')),    stats).maxRetweets = true;
r.maxBy(r.path('favorited.total'.split('.')),   stats).maxFavorited        = true;
r.maxBy(r.path('favorited.average'.split('.')), stats).maxFavoritedAverage = true;
r.maxBy(r.path('retweeted.total'.split('.')),   stats).maxRetweeted         = true;
r.maxBy(r.path('retweeted.average'.split('.')), stats).maxRetweetedAverage  = true;

fs.outputJson(`./final-stats.json`, { stats }, (err) => console.log(`done`));

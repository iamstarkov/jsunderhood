import fs from 'fs-extra';
import authors from './authors';

/*
  есть свои твиты
    прямо свои
    реплаи себе
  есть реплаи другим
  есть ретвиты

  Попадающие в таймлайн:
    свои

  В которых надо учитывать фавы и рт’ы
  В которых не надо учитывать
    в ретвитах
*/


const isOwn = (tweet)=> !isReply(tweet) && !isRetweet(tweet);
const isRetweet = (tweet)=> !!tweet.retweeted_status;
const isReplyToSelf = (tweet)=> tweet.in_reply_to_screen_name === 'jsunderhood';
const isReply = (tweet)=> !!tweet.in_reply_to_screen_name && !isReplyToSelf(tweet);

const sumRetweeted = (state, tweet)=> state + tweet.retweet_count;
const sumFavorited = (state, tweet)=> state + tweet.favorite_count;

const analyze = (author)=> {
  var rt = 0, fav = 0;
  const username = author.username;
  const _tweets = author.tweets;

  const tweets = _tweets.length;
  const _ownTweets = _tweets.filter(isOwn);

  const percent = tweets / 100;
  const ownTweets = _ownTweets.length;
  const ownTweetsPercentage = ownTweets / percent;
  const retweets = _tweets.filter(isRetweet).length;
  const retweetsPercentage = retweets / percent;
  const replies = _tweets.filter(isReply).length;
  const repliesPercentage = replies / percent;

  const retweeted = _ownTweets.reduce(sumRetweeted, 0);
  const favorited = _ownTweets.reduce(sumFavorited, 0);

  const retweetedKpi = Number((retweeted / ownTweets).toFixed(2));
  const favoritedKpi = Number((favorited / ownTweets).toFixed(2));

  fs.outputJson(`dump/${author.username}-stats.json`, {
    username, tweets,
    ownTweets, ownTweetsPercentage,
    retweets, retweetsPercentage,
    replies, repliesPercentage,
    retweeted, retweetedKpi,
    favorited, favoritedKpi
  }, (err)=> console.log(`${author.username} done`));
}

authors.forEach((item)=> {
  fs.readJson(`dump/${item.username}.json`, (err, author)=> analyze(author));
});

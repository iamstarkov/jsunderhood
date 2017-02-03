import authorsRaw from './authors.js'
import fs from 'fs-extra';
import r from 'ramda';
import assign from 'object-assign';
import moment from 'moment';
import gainedFollowers from './followers-stats.json'

const first = (arr)=> arr[0];
const last = (arr)=> arr[arr.length - 1];
const sortBy = (field)=> (a, b)=> a[field] - b[field];



let stats = authorsRaw
	.map((author)=> {
		return {
			username: author.username,
			start: moment(author.start, 'DD MMM YYYY').unix(),
		};
	})
	.sort((a, b)=> a.start - b.start)
	.map((author, i)=> {
		return { username: author.username, index: i+1 };
	})
	.map((author)=> {
		var stats = fs.readJsonSync(`./dump/${author.username}-stats.json`);
		delete stats.username;
		return assign({}, author, stats);
	})
	.map((author)=> {
		author.gainedFollowers = gainedFollowers[author.username];
		return author;
	});


r.maxBy(r.prop('tweets'), stats).maxTweets = true;
r.maxBy(r.prop('ownTweets'), stats).maxOwnTweets = true;
r.maxBy(r.prop('ownTweetsPercentage'), stats).maxOwnTweetsPercentage = true;
r.maxBy(r.prop('gainedFollowers'), stats).maxGainedFollowers = true;
r.maxBy(r.prop('retweets'), stats).maxRetweets = true;
r.maxBy(r.prop('retweetsPercentage'), stats).maxRetweetsPercentage = true;
r.maxBy(r.prop('replies'), stats).maxReplies = true;
r.maxBy(r.prop('repliesPercentage'), stats).maxRepliesPercentage = true;
r.maxBy(r.prop('favoritedKpi'), stats).maxFavoritedKpi = true;
r.maxBy(r.prop('retweetedKpi'), stats).maxRetweetedKpi = true;

fs.outputJson(`./final-stats.json`, {stats}, (err)=> console.log(`done`))

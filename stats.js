import fs from 'fs-extra';
import authors from './authors';

const isRetweet = (tweet)=> tweet.retweeted_status;
const isReply = (tweet)=> tweet.in_reply_to_screen_name;

const analyze = (author)=> {
	const username = author.username;
	const total = author.tweets.length;
	const retweets = author.tweets.filter(isRetweet).length;
	const replies = author.tweets.filter(isReply).length;
	const retweeted = author.tweets.reduce((state, tweet)=> state + tweet.retweet_count, 0);
	const favorited = author.tweets.reduce((state, tweet)=> state + tweet.favorite_count, 0);
	const retweetedPerTweet = (total / retweeted).toFixed(2);

	fs.outputJson(`dump/${author.username}-stats.json`, {
		username, total, retweets, replies, retweeted, favorited, retweetedPerTweet
	}, (err)=> console.log(`${author.username} done`));
}

authors.forEach((item)=> {
  fs.readJson(`dump/${item.username}.json`, (err, author)=> analyze(author));
});

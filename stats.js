import fs from 'fs-extra';
import authors from './authors';

const isRetweet = (tweet)=> tweet.retweeted_status;
const isReply = (tweet)=> tweet.in_reply_to_screen_name;

const analyze = (author)=> {
	const username = author.username;
	const tweets = {
		total: author.tweets.length,
		retweets: author.tweets.filter(isRetweet).length,
		replies: author.tweets.filter(isReply).length
	};
	const retweeted = author.tweets.reduce((state, tweet)=> state + tweet.retweet_count, 0);
	const favorited = author.tweets.reduce((state, tweet)=> state + tweet.favorite_count, 0);
	const retweetedPerTweet = (tweets.total / retweeted).toFixed(2);


	console.log(
`${username} wrote ${tweets.total} tweets, been retweeted ${retweeted} and favorited ${favorited} times. RTed/Tweet: ${retweetedPerTweet}`
	)
}

authors.forEach((item)=> {
  fs.readJson(`dump/${item.username}.json`, (err, author)=> analyze(author));
});

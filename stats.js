import fs from 'fs-extra';
import authors from './authors';
const debug = debug;

const isRetweet = (tweet)=> tweet.retweeted_status;
const isReply = (tweet)=> tweet.in_reply_to_screen_name;
const filterTimeline = (tweet)=> {
  return (tweet.text[0] !== '@') || (tweet.text.indexOf('@jsunderhood') === 0);
}

const analyze = (author)=> {
	var rt = 0, fav = 0;
	const username = author.username;
	const tweets = author.tweets.filter(filterTimeline).filter(tweet => !isRetweet(tweet));
	const total = tweets.length;
	const retweets = tweets.filter(isRetweet).length;
	const replies = tweets.filter(isReply).length;
	const retweeted = tweets.reduce((state, tweet)=> state + tweet.retweet_count, 0);
	const favorited = tweets.reduce((state, tweet)=> state + tweet.favorite_count, 0);
	const retweetedKpi = (retweeted / total).toFixed(2);
	const favoritedKpi = (favorited / total).toFixed(2);

	if (debug && username === 'filipovskii') {
		tweets.forEach((tweet)=> {
			rt += tweet.retweet_count;
			fav += tweet.favorite_count;
			console.log(`rt ${tweet.retweet_count}, fav: ${tweet.favorite_count}: ${tweet.text}`);
		});
		console.log(`rt: ${rt}`);
		console.log(`fav: ${fav}`);
		console.log(`total: ${total}`);
		console.log(`retweetedKpi: ${retweetedKpi}`);
		console.log(`favoritedKpi: ${favoritedKpi}`);
	}

	fs.outputJson(`dump/${author.username}-stats.json`, {
		username, total, retweets, replies,
		retweeted, favorited,
		retweetedKpi, favoritedKpi
	}, (err)=> console.log(`${author.username} done`));
}

authors.forEach((item)=> {
  fs.readJson(`dump/${item.username}.json`, (err, author)=> analyze(author));
});

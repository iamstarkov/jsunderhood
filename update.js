import fs from 'fs-extra';
import getTweets from 'get-tweets';
import tokens from './tokens';
import authors from './authors';

const author = authors[0];

getTweets(tokens, 'jsunderhood', author.first, (err, tweets, missed, info)=> {
	if (err) throw err;
	author.tweets = tweets;
	fs.outputJson(`./dump/${author.username}.json`, author, (err)=> console.log(`${author.username} done`))
	fs.outputJson(`./dump/${author.username}-info.json`, info, (err)=> console.log(`${author.username} info done`))
});

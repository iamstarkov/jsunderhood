import fs from 'fs-extra';
import getTweets from 'get-tweets';
import tokens from 'twitter-tokens';
import authors from './authors';
import loadMedia from './helpers/load-media';

const log = console.log.bind(null);
const author = authors[0];

loadMedia('jsunderhood', 'dump/images', author.username);

setTimeout(function() {
  getTweets(tokens, 'jsunderhood', author.first, (err, tweets, missed, info) => {
    if (err) throw err;
    author.tweets = tweets;
    fs.outputJson(`./dump/${author.username}.json`, author, err =>
      log(`${author.username} done`));
    fs.outputJson(`./dump/${author.username}-info.json`, info, err =>
      log(`${author.username} info done`));
    fs.outputJson(`./dump/latest-info.json`, info, err =>
      log(`latest info done`));
  });
}, 10000)

import fs from 'fs-extra';
import getTweets from 'get-tweets';
import d from './date-format';
import authors from './authors';

const tokens = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

const dump = (authors, dump)=> {
  // separate tweets
  authors.forEach((author)=> {
    const number = tweets.findIndex(item=> item.id_str === author.start) + 1;
    author.tweets = tweets.splice(0, number);
    return author;
  });

  // save tweets
  authors.forEach(author => fs.outputJson(`./dump/${author.username}.json`, author);
}

getTweets(tokens, 'jsunderhood').then(tweets => dump(authors, tweets.items));

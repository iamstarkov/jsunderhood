import fs from 'fs-extra';
import getTweets from 'get-tweets';
import authors from './authors';

const tokens = {
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
};

const dump = (authors, tweets)=> {
  // separate tweets
  authors.forEach((author)=> {
    const number = tweets.findIndex(item=> item.id_str === author.first) + 1;
    author.tweets = tweets.splice(0, number);
    return author;
  });

  // save tweets
  authors.forEach(author => {
    fs.outputJson(`./dump/${author.username}.json`, author, (err)=> console.log(`${author.username} done`))
  });
}

getTweets(tokens, 'jsunderhood').then(tweets => dump(authors, tweets.items));

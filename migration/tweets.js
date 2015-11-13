import log from '../helpers/log';
import authors from '../dump';
import { remove, outputJSON } from 'fs-extra';
import { reverse } from 'ramda';

const spaces = 2;

function reverseAndRenameTweets({ username, tweets: oldTweets }) {
  const tweets = reverse(oldTweets);
  outputJSON(`./dump/${username}-tweets.json`, { tweets }, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s reversed and renamed tweets`);
  });
  remove(`./dump/${username}.json`, rmErr => {
    log(`${rmErr ? '✗' : '✓'} ${username}’s old tweets removed`);
  });
}

authors.map(reverseAndRenameTweets);

import tokens from 'twitter-tokens';
import authors from './authors';
import log from './helpers/log';
import { outputJSON } from 'fs-extra';
import { head, prop } from 'ramda';

import saveMedia from './helpers/save-media';
import getTweets from 'get-tweets';
import getInfo from 'get-twitter-info';
import getFollowers from 'get-twitter-followers';

const username = prop('username', head(authors));
const first = prop('first', head(authors));

const spaces = 2;

saveMedia(tokens, 'jsunderhood', username, (err, media) => {
  if (err) throw err;
  outputJSON(`./dump/${username}-media.json`, media, { spaces }, err => {
    log(`${err ? '✗' : '✓'} ${username}’s media`);
  });
});

getTweets(tokens, 'jsunderhood', first, (err, tweets) => {
  if (err) throw err;
  outputJSON(`./dump/${username}.json`, tweets, { spaces }, err => {
    if (err) throw err;
    log(`${err ? '✗' : '✓'} ${username}’s tweets`);
  });
});

getInfo(tokens, 'jsunderhood', (err, info) => {
  if (err) throw err;
  outputJSON(`./dump/${username}-info.json`, info, { spaces }, err => {
    if (err) throw err;
    log(`${err ? '✗' : '✓'} ${username}’s info`);
  });
});

getFollowers(tokens, 'jsunderhood', (err, followers) => {
  if (err) throw err;
  outputJSON(`./dump/${username}-followers.json`, followers, { spaces }, err => {
    if (err) throw err;
    log(`${err ? '✗' : '✓'} ${username}’s followers`);
  });
});

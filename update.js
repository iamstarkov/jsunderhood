import tokens from 'twitter-tokens';
import authors from './authors';
import log from './helpers/log';
import moment from 'moment';
import { outputFile, outputJSON } from 'fs-extra';
import { dissoc, map, head, prop } from 'ramda';

import saveMedia from './helpers/save-media';
import getTweets from 'get-tweets';
import getInfo from 'get-twitter-info';
import getFollowers from 'get-twitter-followers';

const username = prop('username', head(authors));
const first = prop('first', head(authors));

const spaces = 2;

saveMedia(tokens, 'jsunderhood', username, (err, media) => {
  if (err) throw err;
  outputJSON(`./dump/${username}-media.json`, media, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s media`);
  });
});

getTweets(tokens, 'jsunderhood', first, (err, tweets) => {
  if (err) throw err;
  outputJSON(`./dump/${username}.json`, { tweets }, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s tweets`);
  });
});

getInfo(tokens, 'jsunderhood', (err, info) => {
  if (err) throw err;
  outputJSON(`./dump/${username}-info.json`, info, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s info`);
  });
});

getFollowers(tokens, 'jsunderhood', (err, followersWithStatuses) => {
  if (err) throw err;
  const followers = map(dissoc('status'), followersWithStatuses);
  outputJSON(`./dump/${username}-followers.json`, { followers }, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s followers`);
  });
});

outputFile('./dump/.timestamp', moment().unix(), () => {});

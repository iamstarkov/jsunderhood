import log from './helpers/log';
import { outputFile, outputJSON } from 'fs-extra';
import { concat, reverse, last, dissoc, map, head } from 'ramda';
import moment from 'moment';

import authors from './authors';

import tokens from 'twitter-tokens';
import getTweets from 'get-tweets';
import getInfo from 'get-twitter-info';
import saveMedia from './helpers/save-media';
import getFollowers from 'get-twitter-followers';
import twitterMentions from 'twitter-mentions';

const current = head(authors);
const { first, username } = current;

const spaces = 2;

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

saveMedia(tokens, 'jsunderhood', username, (err, media) => {
  if (err) throw err;
  outputJSON(`./dump/${username}-media.json`, media, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s media`);
  });
});

getFollowers(tokens, 'jsunderhood', (err, followersWithStatuses) => {
  if (err) throw err;
  const followers = map(dissoc('status'), followersWithStatuses);
  outputJSON(`./dump/${username}-followers.json`, { followers }, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s followers`);
  });
});

const firstTweet = last(currentAuthor.tweets);
const lastMention = last(currentAuthor.mentions);
const sinceId = (lastMention || firstTweet).id_str;
twitterMentions(tokens, sinceId, (err, mentionsRaw) => {
  if (err) throw err;
  const mentions = concat(currentAuthor.mentions, reverse(mentionsRaw));
  outputJSON(`./dump/${username}-mentions.json`, { mentions }, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s mentions`);
  });
});

outputFile('./dump/.timestamp', moment().unix(), err => {
  log(`${err ? '✗' : '✓'} timestamp`);
});

import authors from './authors.js'
import fs from 'fs-extra';

import assign from 'object-assign';
import twStats from 'tweets-stats';
import max from './max.js'

const statProps = [
  'tweets', 'gainedFollowers',
  'own.total', 'replies.total', 'retweets.total',
  'favorited.total', 'favorited.average',
  'retweeted.total', 'retweeted.average'
];

const getGainedFollowers = (author, i, arr) =>
  arr[i-1]
    ? (author.info.followers_count - arr[i-1].info.followers_count)
    : author.info.followers_count;

let getStatsPerAuthor = authors =>
  authors
    .reverse()
    .map((author, i, arr) => (assign({}, author, {
      gainedFollowers: getGainedFollowers(author, i, arr)
    })))
    .map(author => assign({}, author, twStats(author.tweets)));

const getStats = authors => max(getStatsPerAuthor(authors), statProps)


fs.outputJson(`./final-stats.json`, { stats: getStats(authors) }, err =>
  console.log(`done`));

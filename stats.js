import stats from 'tweets-stats';
import maxValues from 'max-values';
import { merge } from 'ramda';
import getGainedFollowers from './helpers/get-gained-followers';
import getDiffFollowers from './helpers/get-diff-followers';

function getStatsPerAuthor(authors) {
  return authors
    .map(author => merge(author, { gainedFollowers: getGainedFollowers(author.authorId) }))
    .map(author => merge(author, { diffFollowers: getDiffFollowers(author.authorId) }))
    .map(author => merge(author, stats(author.tweets)));
}

export default function getStats(authors) {
  if (!authors || authors.length === 0) return;
  return maxValues(getStatsPerAuthor(authors), [
    'tweets', 'gainedFollowers',
    'diffFollowers.gain', 'diffFollowers.loss',
    'own.total', 'replies.total', 'retweets.total',
    'favorited.total', 'favorited.average',
    'retweeted.total', 'retweeted.average',
  ]);
}

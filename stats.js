import stats from 'tweets-stats';
import maxValues from 'max-values';
import { merge } from 'ramda';

const getStatsPerAuthor = authors =>
  authors
    .map(author => merge(author, { followers: author.info.followers_count }))
    .map((author, i, arr) => merge(author, {
      gainedFollowers: arr[i + 1]
        ? (author.followers - arr[i + 1].followers)
        : author.followers,
    }))
    .map(author => merge(author, stats(author.tweets)));

export default function getStats(authors) {
  if (!authors || authors.length === 0) return;
  return maxValues(getStatsPerAuthor(authors), [
    'tweets', 'gainedFollowers',
    'own.total', 'replies.total', 'retweets.total',
    'favorited.total', 'favorited.average',
    'retweeted.total', 'retweeted.average',
  ]);
}

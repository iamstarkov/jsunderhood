import stats from 'tweets-stats';
import maxValues from 'max-values';
import { merge } from 'ramda';
import { difference } from 'underscore';

const getFollowerStats = (prevAuthor, curAuthor) => ({
  followersGained: difference(curAuthor, prevAuthor).length,
  followersLost: difference(prevAuthor, curAuthor).length
});

const getStatsPerAuthor = authors =>
  authors
    .map(author => merge(author, {
      followersCount: author.info.followers_count,
      followers: author.followers.map(follower => follower.id)
    }))
    .map((author, i, arr) => merge(author,
      arr[i + 1]
        ? merge({followersDiff: author.followersCount - arr[i + 1].followersCount},
        getFollowerStats(arr[i + 1].followers, author.followers))
        : {followersGained: author.followersCount, followersLost: 0, followersDiff: author.followersCount}
    ))
    .map(author => merge(author, {
      followersValid: Math.abs(author.followersGained - author.followersLost) === Math.abs(author.followersDiff)
    }))
    .map(author => merge(author, stats(author.tweets)));

export default function getStats(authors) {
  if (!authors || authors.length === 0) return;
  return maxValues(getStatsPerAuthor(authors), [
    'tweets', 'followersDiff', 'followersGained', 'followersLost', 'followersValid',
    'own.total', 'replies.total', 'retweets.total',
    'favorited.total', 'favorited.average',
    'retweeted.total', 'retweeted.average',
  ]);
}

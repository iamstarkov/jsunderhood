import moment from 'moment';
import {
  assoc,
  findIndex,
  concat,
  groupBy,
  map,
  merge,
  pick,
  pipe,
  prop,
  propEq,
  range,
  reduce,
  values,
} from 'ramda';
import authors from '../dump';

/**
 * Dry and transform tweet objects for D3.js processing
 * @param  {array} tweets Raw tweets
 * @return {array} Processed tweets
 */
const formatTweets = map(
  pipe(
    pick([
      'created_at',
      'favorite_count',
      'id_str',
      'in_reply_to_screen_name',
      'retweet_count',
      'retweeted_status',
    ]),
    tweet => {
      const date = moment(tweet.created_at).locale('ru');
      const weekday = Number(date.format('d'));
      const hour = Number(date.format('H'));

      const isMention = tweet.in_reply_to_screen_name === 'jsunderhood';

      return {
        id: tweet.id_str,
        weekday,
        hour,
        likes: tweet.favorite_count,
        retweets: tweet.retweet_count,
        isMention,
        isReply: Boolean(!isMention && tweet.in_reply_to_screen_name),
        isRetweet: Boolean(tweet.retweeted_status),
      };
    }
  )
);

/**
 * Get author’s stats
 * @param  {string} author Author id as seen in dump
 * @return {array} Stats splitted by weekdays
 */
function getStats(author) {
  const authorIndex = findIndex(propEq('username', author), authors);
  const {mentions, tweets} = authors[authorIndex];
  const data = values(
    merge(
      reduce(
        (initial, key) => assoc(key, [], initial),
        {},
        range(0, 7)
      ),
      groupBy(
        prop('weekday'),
        formatTweets(concat(mentions, tweets))
      )
    )
  );
  return data;
}

export default getStats;

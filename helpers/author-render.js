import moment from 'moment';
import { pipe, map, compose, reverse, filter, sort, flatten } from 'ramda';
import numd from 'numd';
import renderTweet from 'tweet.md';
import getLinks from './get-links';
import { html } from 'commonmark-helpers';


moment.locale('ru');

const getWeekday = date => moment(new Date(date)).format("dddd");
const tweetLink = (tweet) => `https://twitter.com/jsunderhood/status/${tweet.id_str}`;
const tweetTime = (tweet) => moment(new Date(tweet.created_at)).format('H:mm');

const separateByWeekdays = (state, item, i, arr) => {
  var weekday = getWeekday(item.created_at);
  if (!state.length) {
    state.push({ weekday, tweets: [], ref: [] });
  }
  if (state[state.length - 1].weekday !== weekday) {
    state.push({ weekday, tweets: [], ref: [] });
  }
  state[state.length - 1].tweets.push(item);
  return state;
};

const d = input => moment(new Date(input)).format("D MMMM YYYY");
const tweetsUnit = numd('твит', 'твита', 'твитов');
const capitalize = i => i.split('').map((item, i) => i === 0 ? item.toUpperCase() : item).join('');
const filterTimeline = item => (item.text[0] !== '@') || (item.text.indexOf('@jsunderhood') === 0);
const prepareTweets = compose(
  arr => arr.reduce(separateByWeekdays, []),
  filter(filterTimeline),
  reverse
);

export default {
  d,
  prepareTweets,
  capitalize,
  tweetsUnit,
  render: pipe(renderTweet, html),
  tweetTime, tweetLink,
  getLinks
};

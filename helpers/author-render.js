import moment from 'moment';
import { pipe, reverse, filter, groupBy, prop } from 'ramda';
import numd from 'numd';
import renderTweet from 'tweet.md';
import getLinks from './get-links';
import { html } from 'commonmark-helpers';
import ungroupInto from './ungroup-into';
import unidecode from 'unidecode';

moment.locale('ru');

const weekday = date => moment(new Date(date)).format('dddd');
const tweetLink = (tweet) => `https://twitter.com/jsunderhood/status/${tweet.id_str}`;
const tweetTime = (tweet) => moment(new Date(tweet.created_at)).format('H:mm');

const d = input => moment(new Date(input)).format('D MMMM YYYY');
const tweetsUnit = numd('твит', 'твита', 'твитов');
const capitalize = i => i.split('').map((item, i) => i === 0 ? item.toUpperCase() : item).join('');
const filterTimeline = item => (item.text[0] !== '@') || (item.text.indexOf('@jsunderhood') === 0);
const prepareTweets = pipe(
  reverse,
  filter(filterTimeline),
  groupBy(pipe(prop('created_at'), weekday)),
  ungroupInto('weekday', 'tweets'));

export default {
  d,
  prepareTweets,
  capitalize,
  tweetsUnit,
  unidecode,
  render: pipe(renderTweet, html),
  tweetTime, tweetLink,
  getLinks,
};

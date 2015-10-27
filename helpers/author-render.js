import moment from 'moment';
import { compose, reverse, filter } from 'ramda';
import numd from 'numd';
import renderTweet from 'tweet.md';
import urlRegexp from 'twitter-regexps/url';

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

// Collect urls
const collectUrlsFromTweet = (groups, urlData) => {
  const url = urlData.expanded_url;
  while (urlRegexp.exec(url)) {
    const domain = RegExp.$5;
    if (domain && 'twitter.com' !== domain) {
      if (!groups[domain]) {
        groups[domain] = [];
      }
      if (-1 === groups[domain].indexOf(url)) {
        groups[domain].push(url);
      }
    }
  }
  return groups;
}
const collectUrls = (groups, tweet) => tweet.entities.urls.reduce(collectUrlsFromTweet, groups);
const getLinks = author => {
  const links = author.tweets.reduce(collectUrls, {});
  const other = [];
  Object.keys(links).forEach(domain => {
    const urls = links[domain];
    if (urls.length < 5) {
      delete links[domain];
      Array.prototype.push.apply(other, urls);
    }
  });
  return { domain: links, other };
}
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
  renderTweet,
  tweetTime, tweetLink,
  getLinks
};

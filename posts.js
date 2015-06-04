import fs from 'fs-extra';
import authors from './authors';
import bake from 'tweet-baker';
import moment from 'moment';
import numd from 'numd';

moment.locale('ru');

const d = (input)=> moment(new Date(input)).format("DD MMMM YYYY");
const filterTimeline = (item)=> {
  return (item.text[0] !== '@') || (item.text.indexOf('@jsunderhood') === 0);
}
const getWeekday = (date) => moment(new Date(date)).format("dddd");
const capitalize = (i) => i.split('').map((item, i) => i === 0 ? item.toUpperCase() : item).join('');

const separateByWeekdays = (state, item, i, arr)=> {
  var weekday = getWeekday(item.created_at);
  if (!state.length) {
    state.push({ weekday, tweets: [], ref: [] });
  }
  if (state[state.length - 1].weekday !== weekday) {
    state.push({ weekday, tweets: [], ref: [] });
  }
  state[state.length-1].tweets.push(item);
  return state;
};

const tweetsUnit = numd('твит', 'твита', 'твитов');

const post = (author, post=true)=> {
  if (!post) { return; }

  author.tweets.reverse();
  author.tweets = author.tweets.filter(filterTimeline);

  const md = [
    `# ${author.username}`,
    `_${ d(author.tweets[author.tweets.length - 1].created_at) }_`,
    author.tweets.reduce(separateByWeekdays, []).map((weekday)=> {
      return [
        `## ${capitalize(weekday.weekday)} <small>${tweetsUnit(weekday.tweets.length)}</small>`,
        weekday.tweets.map(bake).join('\n\n'),
      ].join('\n\n');
    }).join('\n\n'),
  ].join('\n\n');

  fs.outputFile(`./posts/${author.username}.md`, md, (err)=> console.log(`${author.username} done`))
}

authors.forEach((item)=> {
  fs.readJson(`dump/${item.username}.json`, (err, author)=> post(author, item.post))
});

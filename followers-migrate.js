import fs from 'fs-extra';
import moment from 'moment';
import authorsRaw from './authors';
import { date as rawDump } from './followers-stats-raw.json';

const f = (input)=> new Date(input).getTime();

const first = (arr)=> arr[0];
const last = (arr)=> arr[arr.length - 1];

const dump = rawDump
  .map((point)=> {
    return {
      count: point.count,
      date: moment(point.value, 'YYYY-MM-DD').unix(),
      _date: point.value
    };
  })
  .sort((a, b)=> a.date - b.date);

const authors = authorsRaw
  .map((author)=> {
    return {
      username: author.username,
      start: moment(author.start, 'DD MMM YYYY').unix(),
      _start: author.start
    };
  })
  .sort((a, b)=> a.start - b.start)
  .map((author, i, arr)=> {
    author.startCount = last(dump.filter((point)=> point.date <= author.start)).count;
    return author;
  })
  .map((author, i, arr)=> {
    author.gainedCount = arr[i+1] ? (arr[i+1].startCount - author.startCount) : 0;
    return author;
  })
  .filter(author => author.username !== 'listochkin')
  .map((author, i, arr)=> {
    author.gainedSign = (author.gainedCount > 0) ? '+' : '';
    author.followers_count = author.startCount + author.gainedCount;
    return author;
  });


authors.forEach(author => {
  const followers_count = author.followers_count;
  fs.outputJson(`./dump/${author.username}-info.json`, { followers_count }, (err)=> console.log(`${author.username} done`))
})

import { readJsonSync } from 'fs-extra';
import { map, merge } from 'ramda';
import authors from '../authors';

const get = (username, area) =>
  readJsonSync(`./dump/${username}-${area}.json`, { throws: false });

const saturate = author => merge(author, {
  info: get(author.username, 'info'),
  tweets: get(author.username, 'tweets').tweets,
  media: get(author.username, 'media'),
  mentions: get(author.username, 'mentions').mentions,
});

export default map(saturate, authors);

import { ensureFileSync, readJsonSync } from 'fs-extra';
import { merge } from 'ramda';
import { authors } from '../authors';

function ensureFilesForFirstTime(author, index) {
  if (index === 0) {
    ['info', 'tweets', 'media', 'mentions'].map(area => {
      ensureFileSync(`./dump/${author.username}-${area}.json`);
    });
  }
  return author;
}

const getObject = (username, area) =>
  readJsonSync(`./dump/${username}-${area}.json`, { throws: false }) || {};

const getArray = (username, area) =>
  (readJsonSync(`./dump/${username}-${area}.json`, { throws: false }) || {})[area] || [];

const saturateAuthor = author => merge(author, {
  info: getObject(author.username, 'info'),
  tweets: getArray(author.username, 'tweets'),
  media: getObject(author.username, 'media'),
  mentions: getArray(author.username, 'mentions'),
});

export default (authors
  .map(ensureFilesForFirstTime)
  .map(saturateAuthor)
);

import { readdir } from 'fs';
import { curry, filter, map, pipe } from 'ramda';

const isMigration = filename => {
  const isIndex = filename === 'index.js';
  const isJs = /\.js$/.test(filename);
  return isJs && !isIndex;
};

const getMigrations = curry(filter)(isMigration);

const runMigrations = pipe(
  getMigrations,
  map(filename => require(`./${filename}`)),
  map(fn => void fn())
);

readdir(__dirname, (err, filenames) => {
  if (err) throw err;
  runMigrations(filenames);
});

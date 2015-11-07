import buildbranch from 'buildbranch';
import rimraf from 'rimraf';
import each from 'each-done';
import express from 'express';
import fs, { outputFile as output } from 'fs-extra';
import { html } from 'commonmark-helpers';
import numbers from 'typographic-numbers';
import numd from 'numd';
import RSS from 'rss';
import { pipe, prop, reverse, head, splitEvery } from 'ramda';
import sequence from 'run-sequence';
import renderTweet from 'tweet.md';

import gulp, { dest, src, start, task as gulpTask } from 'gulp';
import gulpJade from 'gulp-jade';
import rename from 'gulp-rename';
import watch from 'gulp-watch';
import { log } from 'gulp-util';
import jimp from 'gulp-jimp';

import articleData from 'article-data';
import authors from './authors.js';
import getStats from './stats.js';
import { site } from './package.json';

const latestInfo = head(authors).info;

import authorRender from './helpers/author-render';

const task = gulpTask.bind(gulp);

const jadeDefaults = {
  pretty: true,
  locals: {
    site,
    latestInfo,
    numbers: input => numbers(input, { locale: 'ru' }),
    people: numd('человек', 'человека', 'человек'),
  },
};

const getOptions = (opts = {}) =>
  Object.assign({}, jadeDefaults, opts, {
    locals: Object.assign({}, jadeDefaults.locals, opts.locals),
  });

const jade = opts => gulpJade(getOptions(opts));
const firstTweet = pipe(prop('tweets'), reverse, head);
const render = pipe(renderTweet, html);

/**
 * MAIN TASKS
 */
task('index', () => {
  const authorsToPost = authors.filter(author => author.post !== false);
  return src('layouts/index.jade')
    .pipe(jade({
      locals: {
        title: site.title,
        desc: site.description,
        authors: splitEvery(3, authorsToPost),
        helpers: { firstTweet, render },
      },
    }))
    .pipe(rename({ basename: 'index' }))
    .pipe(dest('dist'));
});

task('stats', () =>
  src('layouts/stats.jade')
    .pipe(jade({
      locals: {
        title: 'Статистика jsunderhood',
        url: 'stats/',
        desc: site.description,
        stats: getStats(authors),
      },
    }))
    .pipe(rename({ dirname: 'stats' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(dest('dist')));

task('about', () => {
  const readme = fs.readFileSync('./README.md', { encoding: 'utf8' });
  const article = articleData(readme);
  return src('layouts/article.jade')
    .pipe(jade({
      locals: Object.assign({}, article, {
        title: 'О проекте',
        url: 'about/',
      }),
    }))
    .pipe(rename({ dirname: 'about' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(dest('dist'));
});

task('rss', done => {
  const feed = new RSS(site);
  const authorsToPost = authors.filter(author => author.post !== false);
  authorsToPost.forEach(author => {
    feed.item({
      title: author.username,
      description: render(firstTweet(author)),
      url: `https://jsunderhood.ru/${author.username}/`,
      date: firstTweet(author).created_at,
    });
  });
  output('dist/rss.xml', feed.xml({ indent: true }), done);
});

task('authors', done => {
  const authorsToPost = authors.filter(author => author.post !== false);
  each(authorsToPost, author => {
    return src('./layouts/author.jade')
      .pipe(jade({
        pretty: true,
        locals: { author, helpers: authorRender },
      }))
      .pipe(rename({ dirname: author.username }))
      .pipe(rename({ basename: 'index' }))
      .pipe(dest('dist'));
  }, done);
});

task('userpics', () =>
  src('dump/images/*-image*')
    .pipe(jimp({ resize: { width: 96, height: 96 }}))
    .pipe(dest('dist/images')));

task('static', () =>
  src([
    'static/**',
    'node_modules/bootstrap/dist/**',
    'node_modules/tablesort/src/tablesort.js',
    'node_modules/tablesort/src/sorts/tablesort.numeric.js',
  ]).pipe(dest('dist')));

task('server', () => {
  const app = express();
  app.use(express.static('dist'));
  app.listen(4000);
  log('Server is running on http://localhost:4000');
});

/**
 * FLOW
 */
task('clean', done => rimraf('dist', done));

task('html', [ 'authors', 'index', 'rss', 'about']);
task('build', [ 'html', 'stats', 'static', 'userpics']);

task('default', done => sequence('clean', 'watch', done));

task('watch', ['server', 'build'], () => {
  watch(['**/*.jade'], () => start('html'));
  watch('static/**', () => start('static'));
});

task('deploy', ['build'], done =>
  buildbranch({ branch: 'gh-pages', folder: 'dist' }, done));

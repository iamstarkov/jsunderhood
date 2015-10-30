import buildbranch from 'buildbranch';
import rimraf from 'rimraf';
import each from 'each-done';
import express from 'express';
import fs, { outputFile as output } from 'fs-extra';
import { html } from 'commonmark-helpers';
import moment from 'moment';
import numbers from 'typographic-numbers';
import numd from 'numd';
import path from 'path';
import rss from 'rss';
import r, { head } from 'ramda';
import sequence from 'run-sequence';
import through from 'through2';
import renderTweet from 'tweet.md';

import gulp from 'gulp';
import data from 'gulp-data';
import debug from 'gulp-debug';
import gulpJade from 'gulp-jade';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import watch from 'gulp-watch';
import { log } from 'gulp-util';
import jimp from 'gulp-jimp';

import articleData from './article-data';
import authors from './authors.js';
import getStats from './stats.js';
import { site } from './package.json';

const d = input => moment(new Date(input)).format("DD MMMM YYYY");
const unix = input => moment(new Date(input)).unix();
const latestInfo = head(authors).info;
const getBasename = ({ relative }) => path.parse(relative).name;

import authorRender from './helpers/author-render';

const jadeDefaults = {
  pretty: true,
  locals: {
    site,
    latestInfo,
    numbers: input => numbers(input, { locale: 'ru' }),
    people: numd('человек', 'человека', 'человек'),
  }
};

const getOptions = (opts = {}) =>
  Object.assign({}, jadeDefaults, opts, {
    locals: Object.assign({}, jadeDefaults.locals, opts.locals)
  });

const jade = opts => gulpJade(getOptions(opts));
const firstTweet = r.pipe(r.prop('tweets'), r.reverse, r.head);
const render = r.pipe(renderTweet, html);

/**
 * MAIN TASKS
 */
gulp.task('index', () => {
  const authorsToPost = authors.filter(author => author.post !== false)
  return gulp.src('layouts/index.jade')
    .pipe(jade({
      locals: {
        title: site.title,
        siteURL: 'https://jsunderhood.ru',
        desc: site.description,
        authors: r.splitEvery(3, authorsToPost),
        helpers: { firstTweet, render }
      }
    }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('stats', () =>
  gulp.src('layouts/stats.jade')
    .pipe(jade({
      locals: {
        title: 'Статистика jsunderhood',
        url: 'stats/',
        desc: site.description,
        stats: getStats(authors)
      }
    }))
    .pipe(rename({ dirname: 'stats' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('dist')));

gulp.task('about', () => {
  const readme = fs.readFileSync('./README.md', { encoding: 'utf8' });
  const article = articleData(readme);
  return gulp.src('layouts/article.jade')
    .pipe(jade({
      locals: Object.assign({}, article, {
        title: 'О проекте',
        url: 'about/',
      })
    }))
    .pipe(rename({ dirname: 'about' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('rss', done => {
  const feed = new rss(site);
  const authorsToPost = authors.filter(author => author.post !== false)
  authorsToPost.forEach(author => {
    feed.item({
      title: author.username,
      description: render(firstTweet(author)),
      url: `https://jsunderhood.ru/${author.username}/`,
      date: firstTweet(author).created_at
    });
  });
  output('dist/rss.xml', feed.xml({ indent: true }), done);
});

gulp.task('authors', function(done) {
  const authorsToPost = authors.filter(author => author.post !== false)
  each(authorsToPost, author => {
    return gulp.src('./layouts/author.jade')
      .pipe(jade({
        pretty: true,
        locals: { author, helpers: authorRender }
      }))
      .pipe(rename({ dirname: author.username }))
      .pipe(rename({ basename: 'index' }))
      .pipe(gulp.dest('dist'));
  }, done);
});

gulp.task('userpics', () =>
  gulp.src('dump/images/*-image*')
    .pipe(jimp({ resize: { width: 96, height: 96 }}))
    .pipe(gulp.dest('dist/images')));

gulp.task('static', () =>
  gulp.src([
    'static/**',
    'node_modules/bootstrap/dist/**',
    'node_modules/tablesort/src/tablesort.js',
    'node_modules/tablesort/src/sorts/tablesort.numeric.js'
  ]).pipe(gulp.dest('dist')));

gulp.task('server', () => {
  const app = express();
  app.use(express.static('dist'));
  app.listen(4000);
  log('Server is running on http://localhost:4000');
});

/**
 * FLOW
 */
gulp.task('clean', done => rimraf('dist', done));
gulp.task('build', [
  'authors',
  'index',
  'rss',
  'about',
  'stats'
  'static',
  'userpics']));

gulp.task('default', done => sequence('clean', 'watch', done));

gulp.task('watch', ['server', 'build'], () => {
  watch(['**/*{jade,md,json,js,css}'], () => gulp.start('build'));
});

gulp.task('deploy', ['build'], done =>
  buildbranch({ branch: 'gh-pages', folder: 'dist' }, done));

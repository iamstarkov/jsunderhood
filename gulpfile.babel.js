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
import { head } from 'ramda';
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

let articles = [];

gulp.task('index-page', () => {
  const groupInGrid = (state, item, i) => {
    if (i % 3 === 0) { state.push([]); }
    state[state.length - 1].push(item);
    return state;
  };
  return gulp.src('layouts/index.jade')
    .pipe(jade({
      locals: {
        title: site.title,
        url: '',
        desc: site.description,
        list: articles.reduce(groupInGrid, []),
      }
    }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('stats-page', () =>
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

gulp.task('about-page', () => {
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

gulp.task('authors', function(done) {
  const authorsToPost = authors.filter(author => author.post !== false)
  each(authorsToPost, author => {
    // console.log(author.username);
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

gulp.task('articles-pages', done =>
  each(articles, article => {
    return gulp.src('layouts/article.jade')
      .pipe(jade({
        locals: article
      }))
      .pipe(rename({ dirname: article.url }))
      .pipe(rename({ basename: 'index' }))
      .pipe(gulp.dest('dist'));
  }, done));

gulp.task('rss', done => {
  const feed = new rss(site);
  articles.forEach(article => {
    feed.item(Object.assign({}, article, article.rss));
  });
  output('dist/rss.xml', feed.xml({ indent: true }), done);
});

gulp.task('default', done => sequence('clean', 'watch', done));

gulp.task('watch', ['express', 'build'], () => {
  watch(['**/*{jade,md,json,js}', '*.css'], () => gulp.start('build'));
});


gulp.task('clean', rimraf.bind(null, 'dist'));

gulp.task('build', done =>
  sequence(
    [
      'authors',
      // 'index-page',
      // 'articles-pages',
      // 'rss',
      // 'about-page',
      // 'stats-page'
    ],
    // 'cname',
    'css',
    // 'js',
    // 'userpics',
    // 'nojekyll',
  done));

gulp.task('cname', () =>
  gulp.src('CNAME')
    .pipe(gulp.dest('dist')));

gulp.task('css-bootstrap', () =>
  gulp.src('node_modules/bootstrap/dist/**')
    .pipe(gulp.dest('dist')));

gulp.task('userpics', () =>
  gulp.src('dump/images/*-image*')
    .pipe(jimp({ resize: { width: 96, height: 96 }}))
    .pipe(gulp.dest('dist/images')));

gulp.task('css', ['css-bootstrap'], () =>
  gulp.src('styles.css')
    .pipe(gulp.dest('dist/css')));

gulp.task('nojekyll', () =>
  gulp.src('.nojekyll')
    .pipe(gulp.dest('dist')));

gulp.task('js', () =>
  gulp.src([
    'node_modules/tablesort/src/tablesort.js',
    'node_modules/tablesort/src/sorts/tablesort.numeric.js'
  ])
    .pipe(gulp.dest('dist/js')));

gulp.task('gh', ['build'], done =>
  buildbranch({ branch: 'gh-pages', folder: 'dist' }, done));

gulp.task('express', () => {
  const app = express();
  app.use(express.static('dist'));
  app.listen(4000);

  log('Server is running on http://localhost:4000');
});

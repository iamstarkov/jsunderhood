'use strict';

import buildbranch from 'buildbranch';
import del from 'del';
import each from 'each-done';
import express from 'express';
import fs, { outputFile as output } from 'fs-extra';
import { html } from 'commonmark-helpers';
import moment from 'moment';
import numbers from 'typographic-numbers';
import numd from 'numd';
import path from 'path';
import rss from 'rss';
import sequence from 'run-sequence';
import through from 'through2';
import renderTweet from 'tweet.md';

import gulp from 'gulp';
import data from 'gulp-data';
import debug from 'gulp-debug';
import gm from 'gulp-gm';
import gulpJade from 'gulp-jade';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import watch from 'gulp-watch';
import { log } from 'gulp-util';

import articleData from './article-data';
import authors from './authors.js';
import getStats from './stats.js';

import latestInfo from './dump/latest-info.json';
import { site } from './package.json';

const d = input => moment(new Date(input)).format("DD MMMM YYYY");
const unix = input => moment(new Date(input)).unix();

const getBasename = ({ relative }) => path.parse(relative).name;

const jadeDefaults = {
  pretty: true,
  locals: {
    site,
    latestInfo,
    numbers: input => numbers(input, { locale: 'ru' }),
    people: numd('человек', 'человека', 'человек'),
  }
};

const getOptions = (opts = {}) => Object.assign({}, jadeDefaults, opts, {
  locals: Object.assign({}, jadeDefaults.locals, opts.locals)
});

const jade = opts => gulpJade(getOptions(opts));

let articles = [];

const articleHarvesting = () => {
  return through.obj((file, enc, cb) => {
    const article = articleData(file.contents.toString());
    const url = getBasename(file);
    const title = article.title;
    const author = fs.readJsonSync('./dump/' + title + '.json');
    const isReadme = getBasename(file) === 'README';

    articles.push({
      site: site,
      filename: file.relative,
      url: isReadme ? 'about/' : url + '/',
      title: isReadme ? 'О проекте' : title,
      image: article.image,
      desc: html(renderTweet(author.tweets[author.tweets.length - 1])),
      descText: author.tweets[author.tweets.length - 1].text,
      date: d(author.tweets[author.tweets.length - 1].created_at),
      content: article.content,
      latestInfo: latestInfo,
      rss: {
        url: site.site_url + getBasename(file) + '/',
        description: author.tweets[author.tweets.length - 1].text
      }
    });
    articles.sort((a, b) => unix(b.date) - unix(a.date));
    cb(null, file);
  });
};

gulp.task('articles-registry', () => {
  articles = [];
  return gulp.src(['./posts/*.md'])
    .pipe(replace('https://jsunderhood.ru', 'http://localhost:4000'))
    .pipe(articleHarvesting());
});

gulp.task('articles-registry-prod', () => {
  articles = [];
  return gulp.src(['./posts/*.md', '!./posts/*draft*.md'])
    .pipe(articleHarvesting());
});

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

gulp.task('stats-page', () => gulp.src('layouts/stats.jade')
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

gulp.task('articles-pages', done => each(articles, article => {
  gulp.src('layouts/article.jade')
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

gulp.task('default', ['watch']);

gulp.task('watch', ['express', 'build'], () => {
  watch(['**/*{jade,md,json,js}', '*.css'], () => gulp.start('build'));
});

gulp.task('clean', done => del('dist', done));


gulp.task('build-common', done => {
  sequence(['index-page', 'articles-pages', 'rss', 'about-page', 'stats-page'], 'cname', 'css', 'js', 'userpics', 'nojekyll', done);
});

gulp.task('build', done => {
  sequence('articles-registry', 'build-common', done);
});

gulp.task('build-prod', done => {
  sequence('clean', 'articles-registry-prod', 'build-common', done);
});

gulp.task('cname', () => gulp.src('CNAME')
  .pipe(gulp.dest('dist')));

gulp.task('css-bootstrap', () => gulp.src('node_modules/bootstrap/dist/**')
  .pipe(gulp.dest('dist')));

gulp.task('userpics', () => gulp.src('dump/images/*-image*')
  .pipe(gm(image => image.resize(96,96).setFormat('jpg'), {
    imageMagick: true
  }))
  .pipe(gulp.dest('dist/images')));

gulp.task('css', ['css-bootstrap'], () => gulp.src('styles.css')
  .pipe(gulp.dest('dist/css')));

gulp.task('nojekyll', () => gulp.src('.nojekyll')
  .pipe(gulp.dest('dist')));

gulp.task('js', () => gulp.src([
    'node_modules/tablesort/src/tablesort.js',
    'node_modules/tablesort/src/sorts/tablesort.numeric.js'
  ])
  .pipe(gulp.dest('dist/js')));

gulp.task('gh', ['build-prod'], done => {
  buildbranch({ branch: 'gh-pages', folder: 'dist' }, done);
});

gulp.task('express', () => {
  const app = express();
  app.use(express.static('dist'));
  app.listen(4000);

  log('Server is running on http://localhost:4000');
});

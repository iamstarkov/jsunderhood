'use strict';

var through = require('through2');
var gulp = require('gulp');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var data = require('gulp-data');
var gulpJade = require('gulp-jade');
var debug = require('gulp-debug');
var replace = require('gulp-replace');
var log = require('gulp-util').log;
var buildbranch = require('buildbranch');
var rss = require('rss');
var del = require('del');
var fs = require('fs-extra');
var output = require('fs-extra').outputFile;
var express = require('express');
var assign = require('object-assign');
var sequence = require('run-sequence');
var each = require('each-done');
var path = require('path');
var numd = require('numd');
var numbers = require('typographic-numbers');
var gm = require('gulp-gm');
var renderTweet = require('./helpers/tweet');

var latestInfo = fs.readJsonSync('./dump/latest-info.json');
var authors = require('./authors.js');
var getStats = require('./stats.js');

var moment = require('moment');
var d = function(input) { return moment(new Date(input)).format("DD MMMM YYYY"); };
var unix = function(text) { return moment(new Date(text)).unix(); }
var site = require('./package.json').site;

var getBasename = function(file) {
  return path.basename(file.relative, path.extname(file.relative));
};

var jadeDefaults = {
  pretty: true,
  locals: {
    site: site,
    latestInfo: latestInfo,
    numbers: input => numbers(input, { locale: 'ru' }),
    people: numd('человек', 'человека', 'человек'),
  }
};
const getOptions = (opts = {}) =>
  assign({}, jadeDefaults, opts, {
    locals: assign({}, jadeDefaults.locals, opts.locals)
  });

const jade = opts => gulpJade(getOptions(opts));

var articleData = require('./article-data');

var articles = [];
var articleHarvesting = function() {
  return through.obj(function(file, enc, cb) {
    var article = articleData(file.contents.toString());
    var url = getBasename(file);
    var title = article.title;

    if (getBasename(file) === 'README') {
      url = 'about';
      title = 'О проекте';
    }

    var author = fs.readJsonSync('./dump/' + title + '.json');

    articles.push({
      site: site,
      filename: file.relative,
      url: url + '/',
      title: title,
      image: article.image,
      desc: renderTweet(author.tweets[author.tweets.length - 1]),
      descText: author.tweets[author.tweets.length - 1].text,
      date: d(author.tweets[author.tweets.length - 1].created_at),
      content: article.content,
      latestInfo: latestInfo,
      rss: {
        url: site.site_url + getBasename(file) + '/',
        description: author.tweets[author.tweets.length - 1].text
      }
    });
    articles.sort(function(a, b) { return unix(b.date) - unix(a.date); });
    cb(null, file);
  });
};

gulp.task('articles-registry', function() {
  articles = [];
  return gulp.src(['./posts/*.md'])
    .pipe(replace('https://jsunderhood.ru', 'http://localhost:4000'))
    .pipe(articleHarvesting());
});

gulp.task('articles-registry-prod', function() {
  articles = [];
  return gulp.src(['./posts/*.md', '!./posts/*draft*.md'])
    .pipe(articleHarvesting());
});

gulp.task('index-page', function() {
  var groupInGrid = function(state, item, i) {
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



gulp.task('stats-page', function() {
  return gulp.src('layouts/stats.jade')
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
    .pipe(gulp.dest('dist'));
});

gulp.task('about-page', function() {
  var readme = fs.readFileSync('./README.md', { encoding: 'utf8' });
  var article = articleData(readme);

  return gulp.src('layouts/article.jade')
    .pipe(jade({
      locals: assign({}, article, {
        title: 'О проекте',
        url: 'about/',
      })
    }))
    .pipe(rename({ dirname: 'about' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('articles-pages', function(done) {
  each(articles, function(article) {
    return gulp.src('layouts/article.jade')
      .pipe(jade({
        locals: article
      }))
      .pipe(rename({ dirname: article.url }))
      .pipe(rename({ basename: 'index' }))
      .pipe(gulp.dest('dist'));
  }, done);
});

gulp.task('rss', function(done) {
  var feed = new rss(site);
  articles.forEach(function(article) {
    feed.item(assign({}, article, article.rss));
  });
  output('dist/rss.xml', feed.xml({ indent: true }), done);
});

gulp.task('default', ['watch']);

gulp.task('watch', ['express', 'build'], function() {
  watch(['**/*{jade,md,json,js}', '*.css'], function() { gulp.start('build'); });
});

gulp.task('clean', function(done) { del('dist', done); });


gulp.task('build-common', function(done) {
  sequence(['index-page', 'articles-pages', 'rss', 'about-page', 'stats-page'], 'cname', 'css', 'js', 'userpics', done);
});

gulp.task('build', function(done) {
  sequence('articles-registry', 'build-common', done);
});

gulp.task('build-prod', function(done) {
  sequence('clean', 'articles-registry-prod', 'build-common', done);
});

gulp.task('cname', function() {
  return gulp.src('CNAME').pipe(gulp.dest('dist'));
});

gulp.task('css-bootstrap', function() {
  return gulp.src('node_modules/bootstrap/dist/**').pipe(gulp.dest('dist'));
});

gulp.task('userpics', () =>
  gulp.src('dump/images/*-image*')
    .pipe(gm(image => image.resize(96,96).setFormat('jpg'), {
      imageMagick: true
    }))
    .pipe(gulp.dest('dist/images')));

gulp.task('css', ['css-bootstrap'], function() {
  return gulp.src('styles.css').pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src([
    'node_modules/tablesort/src/tablesort.js',
    'node_modules/tablesort/src/sorts/tablesort.numeric.js'
  ]).pipe(gulp.dest('dist/js'));
});

gulp.task('gh', ['build-prod'], function(done) {
  buildbranch({ branch: 'gh-pages', folder: 'dist' }, done);
});

gulp.task('express', function() {
  var app = express();
  app.use(express.static('dist'));
  app.listen(4000);

  log('Server is running on http://localhost:4000');
});

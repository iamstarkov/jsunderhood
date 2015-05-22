'use strict';

var through = require('through2');
var gulp = require('gulp');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var data = require('gulp-data');
var jade = require('gulp-jade');
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

var finalStats = fs.readJsonSync('./final-stats.json').stats;

var moment = require('moment');
var unix = function(text) { return moment(new Date(text)).unix(); }
var site = require('./package.json').site;

var getBasename = function(file) {
  return path.basename(file.relative, path.extname(file.relative));
};

var articleData = require('./article-data');

var articles = [];
var articleHarvesting = function() {
  return through.obj(function(file, enc, cb) {
    var article = articleData(file.contents.toString());
    articles.push({
      site: site,
      filename: file.relative,
      url: getBasename(file) + '/',
      title: article.title,
      image: article.image,
      desc: article.desc,
      date: article.date,
      content: article.content,
      rss: {
        url: site.site_url + getBasename(file) + '/',
        description: article.descRSS
      }
    });
    articles.sort(function(a, b) { return unix(b.date) - unix(a.date); });
    cb(null, file);
  });
};

gulp.task('articles-registry', function() {
  articles = [];
  return gulp.src(['./posts/*.md'])
    .pipe(debug())
    .pipe(replace('https://jsunderhood.ru', 'http://localhost:4000'))
    .pipe(articleHarvesting());
});

gulp.task('articles-registry-prod', function() {
  articles = [];
  return gulp.src(['./posts/*.md', '!./posts/*draft*.md'])
    .pipe(articleHarvesting());
});

gulp.task('index-page', function() {
  return gulp.src('layouts/index.jade')
    .pipe(jade({
      pretty: true,
      locals: { site: site, list: articles }
    }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('dist'));
});



gulp.task('stats-page', function() {
  var stats = [].concat(finalStats);
  stats.reverse();
  return gulp.src('layouts/stats.jade')
    .pipe(jade({
      pretty: true,
      locals: { site: site, stats: stats }
    }))
    .pipe(rename({ dirname: 'stats' }))
    .pipe(rename({ basename: 'index' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('articles-pages', function(done) {
  each(articles, function(article) {
    return gulp.src('layouts/article.jade')
      .pipe(data(function() { return article; }))
      .pipe(jade({ pretty: true }))
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
  sequence(['index-page', 'articles-pages', 'rss', 'stats-page'], 'cname', done);
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

gulp.task('gh', ['build-prod'], function(done) {
  buildbranch({ branch: 'master', folder: 'dist' }, done);
});

gulp.task('express', function() {
  var app = express();
  app.use(express.static('dist'));
  app.listen(4000);

  log('Server is running on http://localhost:4000');
});

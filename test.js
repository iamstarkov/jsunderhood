var assert = require('assert');
var fs = require('fs-extra');
var cheerio = require('cheerio');
var numbers = (input) => require('typographic-numbers')(input, { locale: 'ru' });

var latestInfo = fs.readJsonSync('./dump/latest-info.json');
var authors = require('./authors.js');

const make$ = (file) => cheerio.load(fs.readFileSync(file, { encoding: 'utf8' }));

describe('index page', function() {
  it('short authors info', function() {
    var $ = make$('dist/index.html');

    var pageAuthors = $('article .list__item-desc');
    var realAuthors = authors.filter((a) => a.post !== false);

    assert(pageAuthors.length == realAuthors.length);
  });
  it('header', function() {
    var $ = make$('dist/index.html');

    assert($('.page-header h1 small').text().length > 3);

    var followers = numbers(String(latestInfo.followers_count));
    assert($('.page-header p i').text().indexOf(followers) > 0);
  });
});

describe('stats page', function() {
  it('stats rows', function() {
    var $ = make$('dist/stats/index.html');

    var rows = $('.host-stats__row:not(.host-stats__row_head)');
    assert(rows.length == authors.length);
  });
});

describe('about page', function() {
  it('text', function() {
    var $ = make$('dist/about/index.html');

    assert($('article').text().length > 0 || $('article p').length > 0);
  });
});

describe('archive pages', function() {
  it('tweets list', function() {
    authors.forEach(function(author) {
      if(author.post === false) return;

      var $ = make$('dist/' + author.username + '/index.html');

      assert($('article p').length > 1);
      assert($('article h2 small').length > 1);
    });
  });
});

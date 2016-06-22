/* eslint-env mocha */

import assert from 'assert';
import { readFileSync } from 'fs-extra';
import cheerio from 'cheerio';
import typeNumbers from 'typographic-numbers';
import { head } from 'ramda';
import authors from './dump';
import authorId from './helpers/author-id';

const latestInfo = head(authors).info;
const numbers = input => typeNumbers(input, { locale: 'ru' });
const make$ = file => cheerio.load(readFileSync(file, { encoding: 'utf8' }));

import getGainedFollowers from './helpers/get-gained-followers';
import getDiffFollowers from './helpers/get-diff-followers';

describe('js', () => {
  it('getGainedFollowers ordinary', () => {
    assert.equal(getGainedFollowers('rstacruz'), 17);
  });
  it('getGainedFollowers first one', () => {
    assert.equal(getGainedFollowers('shuvalov_anton'), 115);
  });
  it('getDiffFollowers normal', () => {
    assert.deepEqual(getDiffFollowers('rstacruz'), { gain: 29, loss: 12 });
    assert.deepEqual(getDiffFollowers('touzoku'), { gain: 88, loss: 15 });
    assert.deepEqual(getDiffFollowers('milk_is_my_life'), { gain: 60, loss: 28 });
  });
  it('getDiffFollowers obsolete', () => {
    assert.equal(getDiffFollowers('ihorzenich'), undefined);
    assert.equal(getDiffFollowers('oleg008'), undefined);
  });
});

describe('html', () => {
  describe('index page', () => {
    it('short authors info', () => {
      const $ = make$('dist/index.html');
      const pageAuthors = $('article .list__item-desc');
      const realAuthors = authors.filter(a => a.post !== false);
      assert(pageAuthors.length === realAuthors.length);
    });
    it('don’t have subheading', () => {
      const $ = make$('dist/index.html');
      assert($('.page-header h1 small').length === 0);
    });
    it('followers count exists', () => {
      const $ = make$('dist/index.html');
      const followers = numbers(String(latestInfo.followers_count));
      assert($('.page-header p i').text().indexOf(followers) > 0);
    });
  });

  describe('stats page', () => {
    it('stats rows', () => {
      const $ = make$('dist/stats/index.html');
      const rows = $('.host-stats__row:not(.host-stats__row_head)');
      assert(rows.length === authors.length);
    });
  });

  describe('about page', () => {
    it('text', () => {
      const $ = make$('dist/about/index.html');
      assert($('article').text().length > 0);
    });
  });

  describe('archive pages', () => {
    it('tweets list', () => {
      authors.forEach( author => {
        if (author.post === false) return;
        const $ = make$(`dist/${author.username}/index.html`);
        assert($('article p').length > 1);
        assert($('article h2 small').length > 1);
      });
    });
  });

  describe('authorId', () => {
    const input = [
      { username: 'first' },
      { username: 'yolo' },
      { username: 'first' },
      { username: 'yolo' },
      { username: 'first' }
    ];

    it('should work', () => {
      const actual = authorId(input);
      const expected = [
        { username: 'first', authorId: 'first-3' },
        { username: 'yolo',  authorId: 'yolo-2' },
        { username: 'first', authorId: 'first-2' },
        { username: 'yolo',  authorId: 'yolo' },
        { username: 'first', authorId: 'first' }
      ];
      assert.deepEqual(actual, expected);
    });
  });
});

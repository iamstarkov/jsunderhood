import tweetLinks from 'tweet-links';
import { zipObj, values, sortBy, prop, head, apply, objOf, toPairs, pipe,
  length, mapObjIndexed, groupBy, map, filter, flatten, uniq } from 'ramda';
import { parse, format } from 'url';

const notTwitter = url => url.host !== 'twitter.com';
const obj2arr = pipe(toPairs, map(apply(objOf)));

const extractLinks = pipe(
  map(tweetLinks),
  flatten,
  uniq);

const filterTwitterLinks = pipe(
  map(parse),
  filter(notTwitter),
  map(format));

const groupByHost = pipe(
  groupBy(pipe(parse, prop('host'))),
  obj2arr,
  map(pipe(values, flatten)));

const moveMinorsToOther = pipe(
  groupBy( i => length(i) < 5 ? 'other' : parse(head(i)).host ),
  mapObjIndexed(flatten));

const hostAndLinksObj = pipe(
  toPairs,
  map(zipObj(['host', 'links'])));

const moveOtherToEnd = sortBy(group => group.host === 'other');

const getLinks = pipe(
  extractLinks,
  filterTwitterLinks,
  groupByHost,
  moveMinorsToOther,
  hostAndLinksObj,
  moveOtherToEnd);

export default getLinks;

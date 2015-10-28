import tweetLinks from 'tweet-links';
import { sortBy, nthArg, prop, head, keys, apply, objOf, toPairs, pipe, length, reduce, mapObjIndexed, groupBy, map, compose, reverse, filter, sort, flatten, uniq } from 'ramda';
import { parse, format } from 'url';

const initial = pipe(map(tweetLinks), flatten, uniq);
const notTwitter = url => url.host !== 'twitter.com';
const moveAllMinorsToOther = group => (length(group.links) < 5) ? 'other' : group.host;
const groupByHost = pipe(
  groupBy(prop('host')),
  mapObjIndexed((value, key) => ({ host: key, links: value })),
  compose(map(apply(objOf)), toPairs),
  map(i => prop(head(keys(i)), i))
);
const constructResultObject = pipe(
  mapObjIndexed(map(prop('links'))),
  mapObjIndexed(flatten),
  mapObjIndexed(map(format)), // format links
  toPairs,
  map(i => ({ host: i[0], links: i[1] }))
);

const getLinks = pipe(
  initial,
  map(parse), // parse links
  filter(notTwitter),
  groupByHost,
  groupBy(moveAllMinorsToOther),
  constructResultObject,
  sortBy(group => group.host === 'other')
);

export default getLinks;

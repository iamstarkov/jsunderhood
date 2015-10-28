import tweetLinks from 'tweet-links';
import author from '../dump/edjafarov.json'
import { map, compose, reverse, filter, sort, flatten } from 'ramda';

const log = input => {
  console.log(input);
  return input
}
const getLinks = compose(
  flatten,
  map(tweetLinks)
);

const res = getLinks(author.tweets);
// console.log(res);

export default getLinks;

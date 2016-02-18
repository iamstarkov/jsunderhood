import getAuthorArea from './get-author-area';
import authors from '../authors';
import R from 'ramda';

const prev = author => (authors[R.inc(R.findIndex(R.propEq('username', author), authors))] || {}).username;
const followers = author => getAuthorArea(author, 'info').followers_count || 0;

// getGainedFollowers :: String -> Number
export default function getGainedFollowers(author) {
  return followers(author) - followers(prev(author));
}

import getAuthorArea from './get-author-area';
import authors from '../authors';
import R from 'ramda';
import diff from 'lodash.difference';

const prev = author => (authors[R.inc(R.findIndex(R.propEq('username', author), authors))] || {}).username;
const followers = author => R.map(R.prop('id_str'), getAuthorArea(author, 'followers').followers);

// getDiffFollowers :: String -> Object
export default function getDiffFollowers(author) {
  const currentFollowers = followers(author);
  const previousFollowers = followers(prev(author));
  return {
    gain: R.length(diff(currentFollowers, previousFollowers)),
    loss: R.length(diff(previousFollowers, currentFollowers)),
  };
}

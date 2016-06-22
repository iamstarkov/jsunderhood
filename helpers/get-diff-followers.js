import getAuthorArea from './get-author-area';
import authors from '../authors';
import R from 'ramda';
import diff from 'lodash.difference';

const prev = authorId => (authors[R.inc(R.findIndex(R.propEq('authorId', authorId), authors))] || {}).authorId;
const followers = authorId => R.map(R.prop('id_str'), (getAuthorArea(authorId, 'followers').followers || []));

// getDiffFollowers :: String -> Object
export default function getDiffFollowers(authorId) {
  const currentFollowers = followers(authorId);
  const previousFollowers = followers(prev(authorId));
  if (R.length(previousFollowers) > 0) {
    return {
      gain: R.length(diff(currentFollowers, previousFollowers)),
      loss: R.length(diff(previousFollowers, currentFollowers)),
    };
  }
}

import { map, merge } from 'ramda';
import authors from '../authors';
import getAuthorArea from '../helpers/get-author-area';

const saturate = author => merge(author, {
  info: getAuthorArea(author.authorId, 'info') || {},
  followers: getAuthorArea(author.authorId, 'followers').followers || [],
  tweets: getAuthorArea(author.authorId, 'tweets').tweets || [],
  media: getAuthorArea(author.authorId, 'media') || {},
  mentions: getAuthorArea(author.authorId, 'mentions').mentions || [],
});

export default map(saturate, authors);

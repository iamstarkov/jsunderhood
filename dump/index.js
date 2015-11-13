import { map, merge } from 'ramda';
import authors from '../authors';
import getAuthorArea from '../helpers/get-author-area';

const saturate = author => merge(author, {
  info: getAuthorArea(author, 'info'),
  tweets: getAuthorArea(author, 'tweets').tweets,
  media: getAuthorArea(author, 'media'),
  mentions: getAuthorArea(author, 'mentions').mentions,
});

export default map(saturate, authors);

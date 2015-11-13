import { map, merge } from 'ramda';
import authors from '../authors';
import getAuthorArea from '../helpers/get-author-area';

const saturate = author => merge(author, {
  info: getAuthorArea(author.username, 'info'),
  tweets: getAuthorArea(author.username, 'tweets').tweets,
  media: getAuthorArea(author.username, 'media'),
  mentions: getAuthorArea(author.username, 'mentions').mentions,
});

export default map(saturate, authors);

import authors from './authors';
import loadMedia from './helpers/load-media';

authors
  .map(author => author.username)
  .forEach(author => { loadMedia(author, 'dump/images/original', author); });

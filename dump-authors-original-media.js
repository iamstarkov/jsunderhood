import authors from './authors';
import loadMedia from './helpers/load-media';

authors.forEach(author => { loadMedia(author.username, 'dump/images/original') });

import authors from '../authors';

import tokens from 'twitter-tokens';

import saveMedia from '../helpers/save-media';
import saveAuthorArea from '../helpers/save-author-area';

function initMedia({ username }) {
  saveMedia(tokens, username, username, (err, media) => {
    if (err) throw err;
    saveAuthorArea(username, 'media', media);
  });
}

authors.map(initMedia);

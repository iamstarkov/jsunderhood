import authors from '../authors';
import { merge } from 'ramda';

import tokens from 'twitter-tokens';
import getInfo from 'get-twitter-info';

import getAuthorArea from '../helpers/get-author-area';
import saveAuthorArea from '../helpers/save-author-area';

function initInfo({ username }) {
  getInfo(tokens, username, (err, info) => {
    if (err) throw err;
    const existing = getAuthorArea(username, 'info');
    const result = merge(info, existing);
    saveAuthorArea(username, 'info', result);
  });
}

authors.map(initInfo);

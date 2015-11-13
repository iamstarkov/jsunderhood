import log from '../helpers/log';
import authors from '../authors';
import { outputJSON } from 'fs-extra';

const spaces = 2;

function createEmptyMentions({ username }) {
  outputJSON(`./dump/${username}-mentions.json`, { mentions: [] }, { spaces }, saveErr => {
    log(`${saveErr ? '✗' : '✓'} ${username}’s empty mentions`);
  });
}

authors.map(createEmptyMentions);

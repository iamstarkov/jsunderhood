import log from '../helpers/log';
import { authors } from '../authors';
import { outputJSON, statSync } from 'fs-extra';

const spaces = 2;

function createEmptyMentions({ username }) {
  const filename = `./dump/${username}-mentions.json`;

  try {
    statSync(filename);
    log(`✓ Skip existing ${username}’s mentions`);
  } catch (err) {
    outputJSON(filename, { mentions: [] }, { spaces }, saveErr => {
      log(`${saveErr ? '✗' : '✓'} ${username}’s empty mentions`);
    });
  }
}

export default () => authors.forEach(createEmptyMentions);

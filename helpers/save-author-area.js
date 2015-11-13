import { outputJSON } from 'fs-extra';
import log from './log';

const spaces = 2;

export default function saveAuthorArea(username, area, content) {
  outputJSON(`./dump/${username}-${area}.json`, content, { spaces }, err => {
    log(`${err ? '✗' : '✓'} ${username}’s ${area}`);
  });
}

import { outputJSON } from 'fs-extra';
import log from './log';

const spaces = 2;

export default function saveAuthorArea(authorId, area, content) {
  outputJSON(`./dump/${authorId}-${area}.json`, content, { spaces }, err => {
    log(`${err ? '✗' : '✓'} ${authorId}’s ${area}`);
  });
}

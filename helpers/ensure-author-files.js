import { ensureFileSync } from 'fs-extra';

export default function ensureAuthorFiles(author) {
  ['info', 'tweets', 'media', 'mentions'].map(area => {
    ensureFileSync(`./dump/${author.username}-${area}.json`);
  });
}

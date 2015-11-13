import { ensureFileSync } from 'fs-extra';

export default function ensureAuthorFiles(username) {
  ['info', 'tweets', 'media', 'mentions'].map(area => {
    ensureFileSync(`./dump/${username}-${area}.json`);
  });
}

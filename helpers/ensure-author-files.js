import { ensureFileSync, ensureDirSync } from 'fs-extra';

export default function ensureAuthorFiles(username) {
  ensureDirSync('./dump/images');
  ['info', 'tweets', 'media', 'mentions'].map(area => {
    ensureFileSync(`./dump/${username}-${area}.json`);
  });
}

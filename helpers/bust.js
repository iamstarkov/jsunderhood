import { join } from 'path';
import { fromFileSync as getHash } from 'hasha';

const cwd = process.cwd();
const cache = {};

export default function bust(url) {
  if (!cache[url]) {
    cache[url] = getHash(join(cwd, 'dist', url), { algorithm: 'md5' });
  }
  return `${url}?${cache[url]}`;
}

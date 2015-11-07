import { join } from 'path';
import { fromFileSync as getHash } from 'hasha';
import { memoize } from 'ramda';

function bust(url) {
  const hash = getHash(join(process.cwd(), 'dist', url), { algorithm: 'md5' });
  return `${url}?${hash}`;
}

export default memoize(bust);

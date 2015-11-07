import { join as _join } from 'path';
import { fromFileSync as _hash } from 'hasha';
import { memoize } from 'ramda';

const join = _join.bind(null, process.cwd(), 'dist');
const hash = filepath => _hash(filepath, { algorithm: 'md5' });

export default memoize(url => `${url}?${hash(join(url))}`);

import { join as unCurriedJoin } from 'path';
import { fromFileSync as unCurriedHash } from 'hasha';
import { pipe, memoize, curryN, __ as _ } from 'ramda';

const join = curryN(3, unCurriedJoin);
const hash = curryN(2, unCurriedHash);

const hashPath = pipe(
  join(process.cwd(), 'dist'),
  hash(_, { algorithm: 'md5' }));

const bust = path => `${path}?${hashPath(path)}`;

export default memoize(bust);

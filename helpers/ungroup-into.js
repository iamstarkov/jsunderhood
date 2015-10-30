import { pipe, toPairs, map, zipObj } from 'ramda';

const ungroupInto = (first, second) => pipe(
  toPairs,
  map(zipObj([first, second])));

export default ungroupInto;

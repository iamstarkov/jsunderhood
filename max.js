import { maxBy, path, split } from 'ramda';
import camelcase from 'camelcase';

const splitByDot = split('.');

export default function max(arr, values) {
  values.forEach(prop => {
    const maxByProp = maxBy(path(splitByDot(prop)));
    const camelCaseMaxProp = camelcase('max', prop);
    maxByProp(arr)[camelCaseMaxProp] = true;
  });
  return arr;
};

import got from 'got';
import { writeFile } from 'fs';
import type from 'file-type';

const cb = (err) => {
  if (err) throw err;
  console.log('It\'s saved!');
}

export default function load(imageUrl, targetName, cb) {
  got(imageUrl, { encoding: null })
    .then(({ body } = res) => ({ body, ext: type(body).ext }))
    .then(({ body, ext } = res) => writeFile(`${targetName}.${ext}`, body, cb))
    .catch(cb)
}

import { createWriteStream } from 'fs-extra';
import got from 'got';

export default function load(imageUrl, targetFilename) {
  return got.stream(imageUrl, { encoding: null })
    .pipe(createWriteStream(targetFilename))
    .on('finish', () => { console.log(`${targetFilename} finish`) });
}

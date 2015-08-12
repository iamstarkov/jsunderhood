import got from 'got';
import fs from 'fs'
import bdsm from 'bdsm';
import { profile_banner_url as bg } from './dump/23ydobemos-info.json';

const options = { encoding: null };

got.stream(bg, options)
  .pipe(fs.createWriteStream('some.jpeg'))
  .on('finish', () => {
    bdsm.findDominantColors('some.jpeg')
      .then(colors => console.log(colors));
  });

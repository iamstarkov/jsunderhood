import fs from 'fs-extra'
import got from 'got';
import media from 'twitter-profile-media';
import tokens from 'twitter-tokens';
import authors from './authors';

const load = (imageUrl, targetFilename) =>
  got.stream(imageUrl, { encoding: null })
    .pipe(fs.createWriteStream(targetFilename))
    .on('finish', () => { console.log(`${targetFilename} finish`) });

authors
  .map(author => author.username)
  .forEach(author => {
    media(tokens, author, (err, { image, banner }) => {
      if (err) throw err;
      image &&  load(image,  `dump/images/original/${author}-image.jpg`);
      banner && load(banner, `dump/images/original/${author}-banner.png`);
    });
  })

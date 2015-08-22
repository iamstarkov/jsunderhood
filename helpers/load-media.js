import { mkdirs } from 'fs-extra';
import load from './load';
import tokens from 'twitter-tokens';
import media from 'twitter-profile-media';

export default function loadMedia(author) {
  mkdirs('dump/images/original', (err) => {
    if (err) throw err;
    media(tokens, author, (err, { image, banner }) => {
      if (err) throw err;
      image &&  load(image,  `dump/images/original/${author}-image.jpg`);
      banner && load(banner, `dump/images/original/${author}-banner.png`);
    });
  });
}

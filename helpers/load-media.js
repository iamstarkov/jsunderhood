import { mkdirs } from 'fs-extra';
import load from './load';
import tokens from 'twitter-tokens';
import media from 'twitter-profile-media';

export default function loadMedia(author, path, authorNameForSave, cb) {
  mkdirs('dump/images/original', (err) => {
    if (err) throw err;
    media(tokens, author, (err, { image, banner }={}) => {
      if (err) throw err;

      if (image && banner) {
        load(image, `${path}/${authorNameForSave}-image`, (err) => {
          if (err) throw err;
          load(banner, `${path}/${authorNameForSave}-banner`, cb);
        });
      } else {
        image &&  load(image,  `${path}/${authorNameForSave}-image`, cb);
        banner && load(banner, `${path}/${authorNameForSave}-banner`, cb);
      }

    });
  });
}

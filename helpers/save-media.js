import save from './save';
import profileMedia from 'twitter-profile-media';
import { ensureDirSync } from 'fs-extra';

const saveMedia = (tokens, underhood, authorId, cb) => {
  profileMedia(tokens, underhood, (err, { image: imageURL, banner: bannerURL }) => {
    if (err) throw err;
    ensureDirSync('./dump/images/');
    save(imageURL, `./images/${authorId}-image`, (imageErr, image) => {
      save(bannerURL, `./images/${authorId}-banner`, (bannerErr, banner) => {
        cb(null, { image, banner });
      });
    });
  });
};

export default saveMedia;

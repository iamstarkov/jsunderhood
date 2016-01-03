import save from './save';
import profileMedia from 'twitter-profile-media';
import { ensureDirSync } from 'fs-extra';

const saveMedia = (tokens, underhood, username, cb) => {
  profileMedia(tokens, underhood, (err, { image: imageURL, banner: bannerURL }) => {
    if (err) throw err;
    ensureDirSync('./dump/images/');
    save(imageURL, `./images/${username}-image`, (imageErr, image) => {
      save(bannerURL, `./images/${username}-banner`, (bannerErr, banner) => {
        cb(null, { image, banner });
      });
    });
  });
};

export default saveMedia;

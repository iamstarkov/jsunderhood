import save from './save';
import profileMedia from 'twitter-profile-media';

const saveMedia = (tokens, underhood, username, cb) => {
  profileMedia(tokens, underhood, (err, { image: imageURL, banner: bannerURL }) => {
    if (err) return cb(err);
    save(imageURL, `./images/${username}-image`, (imageErr, image) => {
      if (imageErr) return cb(err);
      save(bannerURL, `./images/${username}-banner`, (bannerErr, banner) => {
        if (bannerErr) return cb(err);
        cb(null, { image, banner });
      });
    });
  });
};

export default saveMedia;

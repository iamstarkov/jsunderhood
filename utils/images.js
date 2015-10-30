import { open } from 'fs';
import { partial, forEach, pipe, prop } from 'ramda';
import authors from '../authors';
import { outputJSON } from 'fs-extra';

const spaces = 2;

const check = (username, type, cb) =>
  open('./dump/images/${usename}-${type}.png', 'r', pngErr =>
    open('./dump/images/${usename}-${type}.jpg', 'r', () =>
      cb(`${username}-${type}.` + (!pngErr ? 'png' : 'jpg'))));

const formats = (username, cb) => {
  const checkImage = partial(check, [username, 'image']);
  const checkBanner = partial(check, [username, 'banner']);
  checkImage(image => checkBanner(banner => cb({ image, banner })));
};

const saveImagesFormats = username => {
  formats(username, images => {
    outputJSON(`./dump/${username}-images.json`, images, { spaces }, (err) => {
      console.log(`${err ? '✗' : '✓'} ${username}’s images`);
    });
  });
};

forEach(
  pipe(prop('username'), saveImagesFormats),
  authors
);

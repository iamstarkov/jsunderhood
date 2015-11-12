import { open } from 'fs';
import { partial, forEach, pipe, prop } from 'ramda';
import populateAuthors from '../authors';
import { outputJSON } from 'fs-extra';

const authors = populateAuthors();

const spaces = 2;

const log = console.log.bind(console);

const check = (username, type, cb) => {
  open(`./dump/images/${username}-${type}.png`, 'r', pngErr => {
    open(`./dump/images/${username}-${type}.jpg`, 'r', () => {
      cb(`./images/${username}-${type}.` + (!pngErr ? 'png' : 'jpg'));
    });
  });
};

const formats = (username, cb) => {
  const checkImage = partial(check, [username, 'image']);
  const checkBanner = partial(check, [username, 'banner']);
  checkImage(image => checkBanner(banner => cb({ image, banner })));
};

const saveImagesFormats = username => {
  formats(username, images => {
    outputJSON(`./dump/${username}-media.json`, images, { spaces }, err => {
      log(`${err ? '✗' : '✓'} ${username}’s media`);
    });
  });
};

forEach(
  pipe(prop('username'), saveImagesFormats),
  authors
);

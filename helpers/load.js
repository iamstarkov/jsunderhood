import { createWriteStream } from 'fs-extra';
import got from 'got';
import mime from 'mime';
import magic from 'stream-mmmagic';

export default function load(imageUrl, targetName, cb) {
  got.stream(imageUrl, { encoding: null })
  .on('response', response => {
    if (response.statusCode >= 400) {
      return cb(new Error(`✖ Error ${response.statusCode} for ${targetName}`));
    }
    magic(response, (err, { type }, output) => {
      // `mime` uses `jpeg` as extension for `image/jpeg`
      const targetExt = (type === 'image/jpeg') ? 'jpg' : mime.extension(type);
      const targetFilename = `${targetName}.${targetExt}`;
      output.pipe(createWriteStream(targetFilename))
      .on('finish', () => {
        console.log(`✔ ${targetFilename} finish`);
        cb();
      });
    });
  });
}

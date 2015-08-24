import http from 'http';
import https from 'https';
import { parse as parseUrl } from 'url';
import { createWriteStream } from 'fs-extra';
import mime from 'mime';
import magic from 'stream-mmmagic';

export default function load(imageUrl, targetName, cb) {
  const proto = parseUrl(imageUrl).protocol === 'https:' ? https : http;
  proto.get(imageUrl, res => {
    if (res.statusCode > 399) {
      return cb(new Error(`✖ Error ${res.statusCode} for ${targetName}`));
    }
    magic(res, (err, { type }, output) => {
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

import assert from 'assert';
import fs from 'fs-extra';
import path from 'path';

import render from '../helpers/tweet';

describe('Tweet renderer', () => {

  fs.readdirSync(path.resolve(__dirname, 'tweet')).forEach(datapath => {

    it(datapath, () => {
      const data = fs.readJsonSync(path.resolve(__dirname, 'tweet', datapath));

      assert.equal(render(data), data.output);
    });

  });

});

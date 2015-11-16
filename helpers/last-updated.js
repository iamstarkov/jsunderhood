import { readFileSync } from 'fs';
import moment from 'moment';

const cwd = process.cwd();
const timestamp = (() => {
  try {
    parseInt(readFileSync(`${cwd}/dump/.timestamp`, `utf8`), 10);
  } catch (e) {
    return parseInt(moment.unix(), 10);
  }
})();

const date = moment.unix(timestamp);

function lastUpdated() {
  return date.locale('ru').format('D MMMM в H:mm');
}

lastUpdated.raw = timestamp;

export default lastUpdated;

import { readFileSync } from 'fs';
import { unix } from 'moment';

const cwd = process.cwd();
const timestamp = parseInt(readFileSync(`${cwd}/dump/.timestamp`, `utf8`), 10);
const date = unix(timestamp);

function lastUpdated() {
  return date.locale('ru').format('D MMMM в H:mm');
}

lastUpdated.raw = timestamp;

export default lastUpdated;

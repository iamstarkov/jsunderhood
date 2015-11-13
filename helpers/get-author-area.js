import { readJsonSync } from 'fs-extra';

export default function getAuthorArea(username, area) {
  return readJsonSync(`./dump/${username}-${area}.json`, { throws: false });
}

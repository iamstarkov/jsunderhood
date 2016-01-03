import { readJsonSync } from 'fs-extra';

export default function getAuthorArea(username, area) {
  try {
    return readJsonSync(`./dump/${username}${area ? '-' + area : ''}.json`);
  } catch (e) {
    return {};
  }
}

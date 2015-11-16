import { readJsonSync } from 'fs-extra';

export default function getAuthorArea(username, area) {
  try {
    return readJsonSync(`./dump/${username}-${area}.json`);
  } catch (e) {
    return {};
  }
}

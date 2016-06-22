import { readJsonSync } from 'fs-extra';

export default function getAuthorArea(authorId, area) {
  try {
    return readJsonSync(`./dump/${authorId}${area ? '-' + area : ''}.json`);
  } catch (e) {
    return {};
  }
}

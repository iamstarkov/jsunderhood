import { head, pipe, prop } from 'ramda';
import moment from 'moment';

const getDate = pipe(head, prop('tweets'), head, prop('created_at'));

export default function lastUpdated(authors) {
  return moment(getDate(authors)).locale('ru').format('D MMMM в H:mm');
}

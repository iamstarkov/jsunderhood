import moment from 'moment';

export default function lastUpdated() {
  return moment().locale('ru').format('D MMMM в H:mm');
}

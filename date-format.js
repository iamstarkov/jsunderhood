import moment from 'moment';

export default (input)=> moment(new Date(input)).format("DD MMM YYYY");

import fs from 'fs-extra';
import moment from 'moment';
import authors from './authors';
import { date as rawDump } from './followers-dump.json';

const log = console.log.bind(console);
const f = (input)=> new Date(input).getTime();

const dump = rawDump.map((point)=> {
	return { count: point.count, date: moment(point.value, 'YYYY-MM-DD').unix() };
}).sort((a, b)=> a.date - b.date);

authors.forEach((author)=> {
	author.start = moment(author.start, 'DD MMM YYYY').unix();
	const startPoint = dump.find((point) => point.date === author.start);

	log(author.username, startPoint);
});

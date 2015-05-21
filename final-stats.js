import authorsRaw from './authors.js'
import fs from 'fs-extra';
import assign from 'object-assign';
import moment from 'moment';
import gainedFollowers from './followers-stats.json'

const log = console.log.bind(console);

const stats = authorsRaw
	.map((author)=> {
		return {
			username: author.username,
			start: moment(author.start, 'DD MMM YYYY').unix(),
		};
	})
	.sort((a, b)=> a.start - b.start)
	.map((author, i)=> {
		return { username: author.username, index: i+1 };
	})
	.map((author)=> {
		var stats = fs.readJsonSync(`./dump/${author.username}-stats.json`);
		delete stats.username;
		return assign({}, author, stats);
	})
	.map((author)=> {
		author.gainedFollowers = gainedFollowers[author.username];
		return author;
	});

fs.outputJson(`./final-stats.json`, {stats}, (err)=> console.log(`done`))

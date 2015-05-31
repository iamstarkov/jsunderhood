import { stats as data } from './final-stats.json';

// TODO: replace getMin with lodash/underscore
const getMin = (arr, prop)=> {
	if (!prop) {
		throw 'Undefined is not a `prop`';
	}

	return arr.reduce((pv, cv)=> {
		pv = Number(pv[prop]) || Number(pv) || Infinity;
		cv = Number(cv[prop]) || Infinity;
		return Number(cv < pv ? cv : pv);
	});
};

// TODO: replace getMax with lodash/underscore
const getMax = (arr, prop)=> {
	if (!prop) {
		throw 'Undefined is not a `prop`';
	}

	return arr.reduce((pv, cv)=> {
		pv = Number(pv[prop]) || Number(pv) || -Infinity;
		cv = Number(cv[prop]) || -Infinity;
		return Number(cv > pv ? cv : pv);
	});
};

const params = [
	{
		name: 'gainedFollowers',
		weight: 18
	}, {
		name: 'tweets',
		weight: 16
	}, {
		name: 'retweets',
		weight: 10
	}, {
		name: 'replies',
		weight: 16
	}, {
		name: 'retweetedKpi',
		weight: 22
	}, {
		name: 'favoritedKpi',
		weight: 18
	}
];

const stats = params.map((param)=> ({
	name: param.name,
	weight: param.weight / 100,
	min: getMin(data, param.name),
	max: getMax(data, param.name)
}));

const getEvaluation = (host, stat)=> (host[stat.name] - stat.min) / (stat.max - stat.min);

const getRating = (host, stats)=> {
	const rawRating = stats
		.map((stat)=> getEvaluation(host, stat) * stat.weight)
		.reduce((sum, stat)=> (sum || 0) + stat);

	return Math.round(rawRating * 100) / 10;
};

data.forEach((host)=> {
	const rating = getRating(host, stats);
	console.log(host.username, rating);
});

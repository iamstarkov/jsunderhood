import d3 from 'd3';
import {
  assoc,
  countBy,
  filter,
  flatten,
  merge,
  range,
  reduce,
  values,
} from 'ramda';

const WIDTH = 723;
const HEIGHT = 300;
const COLORS = {
  likes: 'rgb(226,38,77)',
  mentions: 'rgb(157,210,219)',
  retweets: 'rgb(92,145,59)',
};

function renderWeekStats() {
  const initial = reduce(
    (obj, key) => assoc(key, 0, obj),
    {},
    range(0, 24 * 7)
  );

  const authorStats = flatten(window.AUTHOR_STATS);

  const dataset = {
    tweets: values(
      merge(
        initial,
        countBy(
          ({hour, weekday}) => weekday * 24 + hour,
          filter(
            tweet => !tweet.isMention,
            authorStats
          )
        )
      )
    ),
    likes: values(
      merge(
        initial,
        countBy(
          ({hour, weekday}) => weekday * 24 + hour,
          filter(
            tweet => tweet.likes,
            authorStats
          )
        )
      )
    ),
    mentions: values(
      merge(
        initial,
        countBy(
          ({hour, weekday}) => weekday * 24 + hour,
          filter(
            tweet => tweet.isMention,
            authorStats
          )
        )
      )
    ),
    retweets: values(
      merge(
        initial,
        countBy(
          ({hour, weekday}) => weekday * 24 + hour,
          filter(
            tweet => tweet.retweets,
            authorStats
          )
        )
      )
    ),
  };

  console.log(authorStats);

  const container = d3.select('.js-author-stats');
  const graph = container.select('.js-graph').append('svg');

  graph
    .attr('width', WIDTH)
    .attr('height', HEIGHT + 1);

  const domainValues = flatten([
    dataset.likes,
    dataset.mentions,
    dataset.retweets,
    dataset.tweets,
  ]);

  const count = d3.scale.linear()
    .domain(d3.extent(domainValues))
    .range([1, HEIGHT / 2]);

  // const opacity = d3.scale.linear()
  //   .domain(d3.extent(domainValues))
  //   .range([0.5, 1]);

  const redrawBars = function _redrawBars(target, type) {
    const elements = target.selectAll('rect').data(dataset[type]);

    return elements
      .transition()
      .duration(300)
      .delay((data, key) => key * 3)
      .attr('height', data => Math.round(count(data)))
      .attr('y', HEIGHT / 2 + 1)
      .attr('fill', COLORS[type]);
  };

  const actions = graph.append('g');

  const actionBars = actions
    .selectAll('rect.bar')
    .data(dataset.tweets)
    .enter()
    .append('rect')
    .classed('bar', true);

  actionBars
    .attr('fill', 'rgb(255,255,255)')
    .attr('width', 3)
    .attr('height', 0)
    .attr('x', (data, key) => (key + Math.floor(key / 12)) * 4)
    .attr('y', HEIGHT / 2 + 1)
    .transition()
    .duration(300)
    .delay((data, key) => key * 3)
    .attr('fill', 'rgb(51,122,183)')
    .attr('height', data => count(data))
    .attr('y', data => Math.round(HEIGHT / 2 - count(data)));

  const reactions = graph.append('g');

  const reactionBars = reactions
    .selectAll('rect')
    .data(dataset.likes)
    .enter()
    .append('rect');

  reactionBars
    .attr('fill', 'rgb(255,255,255)')
    .attr('width', 3)
    .attr('height', 0)
    .attr('x', (data, key) => (key + Math.floor(key / 12)) * 4)
    .attr('y', HEIGHT / 2 + 1)
    .transition()
    .duration(300)
    .delay((data, key) => key * 3)
    .attr('fill', 'rgb(226,38,77)')
    .attr('height', data => Math.round(count(data)));

  container
    .select('.js-switch-reactions')
    .on(
      'change',
      () => redrawBars(reactions, d3.event.target.value)
    );
}

export default renderWeekStats;

import { initate as likely } from 'ilyabirman-likely';

likely();

const d = document; // eslint-disable-line id-length
const $ = d.querySelector.bind(d); // eslint-disable-line id-length

if ($('.js-stats')) {
  require([
    'moment',
    'tablesort',
    'imports?Tablesort=tablesort!tablesort/src/sorts/tablesort.number',
  ], (moment, tablesort) => {
    tablesort($('.host-stats'), { descending: true });

    const lastUpdated = $('.js-last-updated');
    const timestamp = lastUpdated.getAttribute('data-timestamp');
    lastUpdated.textContent = moment.unix(timestamp).locale('ru').fromNow();
  });
}

// Easter egg: random strings on hover of subscribers count

const $easterEgg = $('#easter-egg');
const easterEggText = $easterEgg.textContent;

const funStrings = [
  'NaN',
  'undefined',
  'Infinity',
  '[]',
  '{}',
  'false',
  'true',
  'Math.random()'
];

$easterEgg.addEventListener('mouseover', function () {
  const randomString = funStrings[Math.floor(Math.random() * funStrings.length)];
  
  this.innerText = 'Уже ' + randomString + ' человек в теме.';
});

$easterEgg.addEventListener('mouseout', function () {
  this.innerText = easterEggText;
});

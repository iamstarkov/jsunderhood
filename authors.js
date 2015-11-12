import fs from 'fs-extra';

export const authors = [
  // post: false
  { username: 'mr_mig_by',       start: '09 Nov 2015', first: '663647143966691328', post: false },
  { username: 'milk_is_my_life', start: '02 Nov 2015', first: '661084286976675840' },
  { username: 'oleg008',         start: '26 Oct 2015', first: '658570842847248384' },
  { username: 'boriscoder',      start: '19 Oct 2015', first: '656082486569627648' },
  { username: 'Lik04ka',         start: '12 Oct 2015', first: '653591753300275200' },
  { username: 'flackus',         start: '05 Oct 2015', first: '650964589706874880' },
  { username: 'edjafarov',       start: '28 Sep 2015', first: '648376762624278528' },
  { username: 'azproduction',    start: '21 Sep 2015', first: '645888589822324736' },
  { username: 'delaz',           start: '14 Sep 2015', first: '643314256180584449' },
  { username: '__fro',           start: '07 Sep 2015', first: '640793415169536000' },
  { username: 'RReverser',       start: '31 Aug 2015', first: '638181485497991168' },
  { username: 'neonick',         start: '24 Aug 2015', first: '635790657156685824' },
  { username: 'pepelsbey',       start: '17 Aug 2015', first: '633203477540380672' },
  { username: '23ydobemos',      start: '10 Aug 2015', first: '630656499514220544' },
  { username: 'freiksenet',      start: '03 Aug 2015', first: '628081863953915904' },
  { username: 'pixelscommander', start: '27 Jul 2015', first: '625584002137751553' },
  { username: 'deepsweet',       start: '20 Jul 2015', first: '622957132221038592' },
  { username: 'andreypopp',      start: '13 Jul 2015', first: '620510502179868673' },
  { username: 'mistakster',      start: '06 Jul 2015', first: '617956881777184768' },
  { username: 'floatdrop',       start: '29 Jun 2015', first: '615413162981097472' },
  { username: 'dan_abramov',     start: '22 Jun 2015', first: '612922873452318720' },
  { username: 'asktwi',          start: '15 Jun 2015', first: '610294906653904896' },
  { username: 'alekseykulikov_', start: '08 Jun 2015', first: '607804952778575872' },
  { username: 'i_komarov',       start: '01 Jun 2015', first: '605316466565623808' },
  { username: 'listochkin',      start: '25 May 2015', first: '602825789478969344' },
  { username: 'subzey',          start: '18 May 2015', first: '600095365254270976' },
  { username: 'bashmish',        start: '11 May 2015', first: '597653605315977216' },
  { username: 'sudodoki',        start: '27 Apr 2015', first: '592841474334658560' },
  { username: 'pukhalski',       start: '20 Apr 2015', first: '590058545422409728' },
  { username: 'lomakin',         start: '13 Apr 2015', first: '587596754524188672' },
  { username: 'mraleph',         start: '06 Apr 2015', first: '584858429212258304' },
  { username: 'awinogradov',     start: '30 Mar 2015', first: '582443238063251456' },
  { username: 'veged',           start: '23 Mar 2015', first: '579986868487512064' },
  { username: 'korochinskiy',    start: '16 Mar 2015', first: '577403514445500416' },
  { username: 'toivonens',       start: '09 Mar 2015', first: '574884457691418624' },
  { username: 'roman01la',       start: '02 Mar 2015', first: '572341652246945792' },
  { username: 'iamstarkov',      start: '23 Feb 2015', first: '569802366297493505' },
  { username: 'filipovskii',     start: '09 Feb 2015', first: '564697062378594304' },
  { username: 'shuvalov_anton',  start: '03 Feb 2015', first: '562516792753811456' },
];

export default () => authors.map(author => {
  const info     = `./dump/${author.username}-info.json`;
  const tweets   = `./dump/${author.username}.json`;
  const media    = `./dump/${author.username}-media.json`;
  const mentions = `./dump/${author.username}-mentions.json`;

  fs.ensureFileSync(info);
  fs.ensureFileSync(tweets);
  fs.ensureFileSync(media);
  fs.ensureFileSync(mentions);

  author.info     = fs.readJsonSync(info, { throws: false }) || {};
  author.tweets   = (fs.readJsonSync(tweets, { throws: false }) || {}).tweets || [];
  author.media    = fs.readJsonSync(media, { throws: false }) || {};
  author.mentions = (fs.readJsonSync(mentions, { throws: false }) || {}).mentions || [];

  return author;
});

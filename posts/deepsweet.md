# deepsweet

_26 июля 2015_

## Понедельник <small>67 твитов</small>

<div class="tweet">

всем привет, эту неделю с вами будет [@deepsweet](https://twitter.com/deepsweet " k i r"). меня зовут Кир, кто-то может помнить меня по Яндексу, для остальных я просто JS-разработчик
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622957132221038592">2:32</a>

</div>

<div class="tweet">

т.к. у меня GMT+7 и вы скорей всего спите, я пока поспамлю темами, на которые мне было бы интересно поговорить :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622957439860604928">2:33</a>

</div>

<div class="tweet">

webpack, Babel, React, Flux, BEM \(в хорошем смысле\), изоморфность, фотки тупых людей, иммутабельность, парное программирование, Вьетнам.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622958640392089600">2:38</a>

</div>

<div class="tweet">

RT [@ivan\_krivonos](https://twitter.com/ivan_krivonos "Иван Кривонос"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") GMT +7 это какой город?\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622959643493437440">2:42</a>

</div>

<div class="tweet">

.[@ivan\_krivonos](https://twitter.com/ivan_krivonos "Иван Кривонос") Хошимин
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622959659633127424">2:42</a>

</div>

<div class="tweet">

на текущей работе есть всё из этого списка, очень красиво переплетённое. да-да, React + BEM :\) с наследованием по уровням переопределения.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622961547636142080">2:49</a>

</div>

<div class="tweet">

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") уже смотрели в сторону CSS Modules? Может ли этот концепт заменить BEM? Насколько вообще оно практично?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622969099958665216">3:19</a>

</div>

<div class="tweet">

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") да, смотрели ещё с первых коммитов в css-loader – сама идея уникального локального скоупа для стилей компонента заманчивая.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622970061276360705">3:23</a>

</div>

<div class="tweet">

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") но лично мне совсем не нравится подход к внедрению этого в React – [github.com/css-modules/cs…](https://t.co/tekip9QFqk "https://github.com/css-modules/css-modules/blob/master/examples/theming.md#theming") – когда компонент думает о теме.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622970214653673472">3:24</a>

</div>

<div class="tweet">

для всех – тема CSS Modules началась примерно отсюда [github.com/webpack/css-lo…](https://t.co/I9nbsCi5Dm "https://github.com/webpack/css-loader#local-scope"), и развивается дальше здесь [github.com/css-modules](https://t.co/Ivf0SsyjZx "https://github.com/css-modules")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622970389778427904">3:24</a>

</div>

<div class="tweet">

идея в чём-то гениальна: css-loader для webpack превращает классы из стилей в хэши, которые потом экспортируются как из обычного js-модуля.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622971745436172292">3:30</a>

</div>

<div class="tweet">

дальше где-то, где эти стили нужны \(в том же react-компоненте\), они импортируются, и появляется доступ к маппингу "класс -&gt; хэш".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622972267828416512">3:32</a>

</div>

<div class="tweet">

но для уникальных хэшей всё равно нужны уникальные классы, и для этого внутри стилей вполне можно использовать то же BEM-именование.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622973851731779584">3:38</a>

</div>

<div class="tweet">

в итоге получается такая себе автоматизированная связка BEM + &lt;style scoped&gt; без лишней боли по поводу конфликтов и пересечений.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622975103114960896">3:43</a>

</div>

<div class="tweet">

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") разве уникальные? Можно использовать одни и те же имена в разных файлах и они будут разруливаться без конф…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622975419310944256">3:44</a>

</div>

<div class="tweet">

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") я имею в виду, что внутри файлов стилей всё равно нужно как-то именовать классы, и идея BEM \(например\) здесь очень подходит
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622975711389745153">3:45</a>

</div>

<div class="tweet">

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") я ведь правильно понял, что одни и те же селекторы из разных файлов будут иметь одни и те же одинаковые хэши?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622976199376048128">3:47</a>

</div>

<div class="tweet">

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нет, разные. В это вся фишка — никакого конфликта имен между файлами
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622977340352561152">3:52</a>

</div>

<div class="tweet">

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") а если у меня стили для одного компонента находятся в разных файлах? судя по докам берётся хэш от внутренностей :local\(\)…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622978193612386304">3:55</a>

</div>

<div class="tweet">

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У вас есть где-то снаружи project-stub или мини-проект, где можно увидеть как именно это красиво переплетено?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622994109066792960">4:59</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") "стаба" нет, мы слишком ленивые и занятые. есть только все нужные технологии [github.com/yummies/yummies](https://t.co/JfwnUFvEeX "https://github.com/yummies/yummies") + [github.com/yummies/babel-…](https://t.co/TpvMzn8asB "https://github.com/yummies/babel-plugin-yummies")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622994409571905538">5:00</a>

</div>

<div class="tweet">

кстати, как вам затея с эмоджи в коммитах? [github.com/yummies/genera…](https://t.co/8RB2j8G8Os "https://github.com/yummies/generator-yummies-repo/blob/master/app/templates/CONTRIBUTING.md#commit-emojis") 😼
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622994885264678915">5:02</a>

</div>

<div class="tweet">

RT [@kompotium](https://twitter.com/kompotium "Anton Fedchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") мне вот этот стартер кит понравился из последних [github.com/cdebotton/reac…](https://t.co/QJxzy1fkNs "https://github.com/cdebotton/react-universal") там есть css modules
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622995603417657345">5:05</a>

</div>

<div class="tweet">

собственно, основная идея React + BEM в том, что JSX – говно, а BEMJSON – добро [github.com/yummies/yummie…](https://t.co/tXgceVaD8Y "https://github.com/yummies/yummies#overview")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622997185458753536">5:11</a>

</div>

<div class="tweet">

дальше – наследование [github.com/yummies/core-c…](https://t.co/wJBZRIWcSP "https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6"), ещё дальше – "уровни переопределения" или, как мы их называем, "слои" [github.com/yummies/babel-…](https://t.co/TpvMzn8asB "https://github.com/yummies/babel-plugin-yummies")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622997382507163648">5:12</a>

</div>

<div class="tweet">

BEM-модификатор – это класс, который \(автоматически\) наследуется от класса react-компонента и до/переопределяет BEMJSON из его render\(\)'а.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622998229924364288">5:15</a>

</div>

<div class="tweet">

про это всё определённо нужна отдельная статья + отдельный стартер-кит, но я уже даже не решаюсь давать обещания, всё тянется уже с мая.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/622998800144171009">5:17</a>

</div>

<div class="tweet">

самое крутое, что это в принципе никак не отменяет ни компоненты высшего порядка, ни декораторы, ни прочие подходы. очень удачно уложилось.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623000029062631424">5:22</a>

</div>

<div class="tweet">

уже в черновиках статья. в целом – Flux может быть абсолютно любым. RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на чью реализацию похож ваш [#flux](https://twitter.com/search?q=%23flux) ?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623009123655811072">5:58</a>

</div>

<div class="tweet">

завтра будет день Flux: иммутабельные деревья, единое состояние, курсоры, GraphQL-like декларативность, префетчинг на сервере, изоморфность.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623010253341261824">6:03</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как вы относитесь к [@WebComponents](https://twitter.com/WebComponents "Web Components")  ? Правда ли что появление [#react](https://twitter.com/search?q=%23react) есть следствие провала компонентов ?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623012114718834688">6:10</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") личное моё мнение – это мертворожденная технология, которую зря пытаются форсить. React появился из-за общей убогости DOM.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623012968905596928">6:14</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") с другой стороны, возможно ещё просто не пришло время, и появление "shady DOM" вместо полноценного Shadow DOM тому пример.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623015099628847104">6:22</a>

</div>

<div class="tweet">

RT [@operatino](https://twitter.com/operatino "Robert Haritonov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как уровни переопределения работают в этой связке? В html.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623018632117760001">6:36</a>

</div>

<div class="tweet">

.[@operatino](https://twitter.com/operatino "Robert Haritonov") в конечном итоге импортируется фабрика уже собранного и склеенного по всем уровням реакт-компонента.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623018998096007168">6:37</a>

</div>

<div class="tweet">

.[@operatino](https://twitter.com/operatino "Robert Haritonov") можно до/переопределять что угодно, как в BEMHTML, хоть тэг, хоть внутренности.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623019173317210112">6:38</a>

</div>

<div class="tweet">

довольно интересная концепция получилась с "темами" – тема просто является отдельным слоем, начиная с темы "reset" [github.com/yummies/theme-…](https://t.co/PBHDgGzA5J "https://github.com/yummies/theme-reset")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623019793067552768">6:41</a>

</div>

<div class="tweet">

RT [@operatino](https://twitter.com/operatino "Robert Haritonov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") То есть это кастомная реализация сборки с мерджем компонентов? Без БЭМ шаблонизаторов? Какие тулзы замешаны?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623020038375628800">6:42</a>

</div>

<div class="tweet">

.[@operatino](https://twitter.com/operatino "Robert Haritonov") основа – webpack + Babel, кастомной сборки как таковой нет, всё нужное уже есть в webpack + немного магии через babel-плагин.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623020144286003200">6:42</a>

</div>

<div class="tweet">

пример корневого \`.yummies.yml\` из внутреннего проекта [gist.github.com/deepsweet/15c8…](https://t.co/rm2jmteBMg "https://gist.github.com/deepsweet/15c8f2eb3a85004adad0")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623021183584198656">6:46</a>

</div>

<div class="tweet">

видимо эта неделя наконец-то заставит нас с [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") сделать starter-kit.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623021436194545665">6:47</a>

</div>

<div class="tweet">

магия заключается в спец. \#-импорте:  
  
import Example from '[#example](https://twitter.com/search?q=%23example)';  
import ExampleTypeTestSizeBig from '[#example](https://twitter.com/search?q=%23example)?\_type=test&amp;\_size=big';
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623022087859384320">6:50</a>

</div>

<div class="tweet">

Babel-плагин матчится на символ \`\#\` в импорте и начинает искать файлы по слоям из конфига. находит – включает в цепочку наследований.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623022388989394945">6:51</a>

</div>

<div class="tweet">

в конечном итоге в Example попадает обычная фабрика реактового компонента, который отнаследован по очереди от класса каждого слоя.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623022714589085696">6:52</a>

</div>

<div class="tweet">

↓ [github.com/yummies/babel-…](https://t.co/MGoroGYIrb "https://github.com/yummies/babel-plugin-yummies#mods")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623022837226278912">6:53</a>

</div>

<div class="tweet">

пример модификатора [github.com/yummies/core-c…](https://t.co/wJBZRIEBuf "https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6") – \`super.render\(\)\`
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623023346578382849">6:55</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") много времени уже прошло, не сожалеешь? :\)  
1. что ушел из яндексов 2. что переехал во Вьетнам
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623025917011456001">7:05</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") 1\) не сожалею, по-моему я ушёл очень вовремя 2\) уже жалею :\) но опыт жизни в Азии всё равно очень интересный и бесценный.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623026580978151425">7:08</a>

</div>

<div class="tweet">

RT [@verkholantsev](https://twitter.com/verkholantsev "billy shears"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Почему жалеешь? Что не так с Вьетнамом?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623027034185334784">7:09</a>

</div>

<div class="tweet">

.[@verkholantsev](https://twitter.com/verkholantsev "billy shears") это страна, в которой уровень экономического развития слишком резко и быстро обогнал уровень сознания. со всеми вытекающими.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623027216448761856">7:10</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что думаешь про redux?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623027432270893056">7:11</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") Redux – крутой, но меня не покидает ощущение, что это какой-то мимолётный промежуточный этап, как и webpack HMR в целом.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623027928381587456">7:13</a>

</div>

<div class="tweet">

RT [@thought\_sync](https://twitter.com/thought_sync "Vyacheslav"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@silentroach](https://twitter.com/silentroach "Игорь") а как быть тогда, какую flux либу использовать?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623051239740170240">8:46</a>

</div>

<div class="tweet">

.[@thought\_sync](https://twitter.com/thought_sync "Vyacheslav") [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@silentroach](https://twitter.com/silentroach "Игорь") сегодня – Redux :\) мой ответ был немного не о том, что Redux не надо использовать.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623051438298566656">8:46</a>

</div>

<div class="tweet">

Flux хорош именно тем, что это сначала концепция, а уже потом – реализация. мы на первом проекте делали с нуля руками, чтобы прочувствовать.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623051934816047104">8:48</a>

</div>

<div class="tweet">

главное сильно и навсегда не залипнуть на "каноническом" Flux, это лишь начало :\) завтра будут стримы, а послезавтра одно лишь телевидение.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623052517371351040">8:51</a>

</div>

<div class="tweet">

RT [@bagadim](https://twitter.com/bagadim "Baga"): [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") смотря что называть мимолетным. Для кого-то - 5 лет. Для фронтенда год-два быть в топе - очень кру…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623052615299940352">8:51</a>

</div>

<div class="tweet">

RT [@beshur](https://twitter.com/beshur "Shu Buznik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему Въетнам? Как там ощущения вне офиса \(или где вы работаете\)? Долго там уже?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623058038853742593">9:13</a>

</div>

<div class="tweet">

.[@beshur](https://twitter.com/beshur "Shu Buznik") почему – без понятия, просто было интересно :\) вне офиса круглый год душное и влажное лето лето. вот уже почти год как живём.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623058452768669697">9:14</a>

</div>

<div class="tweet">

.[@beshur](https://twitter.com/beshur "Shu Buznik") почему – без понятия, просто было интересно :\) вне офиса круглый год душное и влажное лето. вот уже почти год как живём.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623058547685785600">9:15</a>

</div>

<div class="tweet">

быстро набросал кое-какой Starter Kit [github.com/yummies/starte…](https://t.co/JIgzFXDRrE "https://github.com/yummies/starter-kit") 🔥
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623070872719392768">10:04</a>

</div>

<div class="tweet">

уже не представляю как можно жить без "Object Rest/Spread Properties" [github.com/sebmarkbage/ec…](https://t.co/6LE8zf15HF "https://github.com/sebmarkbage/ecmascript-rest-spread") – даже если не войдёт в ES7, буду юзать плагин
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623087075252768768">11:08</a>

</div>

<div class="tweet">

вообще, колонка Stage в ES7+ пока выглядит довольно печально [github.com/tc39/ecma262](https://t.co/0acCGQDJtu "https://github.com/tc39/ecma262")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623087864067194880">11:11</a>

</div>

<div class="tweet">

Create random JSON objects using json-spawn and Chance.js [github.com/luisfarzati/js…](https://t.co/Ndkl8Z1uOv "https://github.com/luisfarzati/json-chance")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623108047817158657">12:31</a>

</div>

<div class="tweet">

Awesome list of Redux examples and middlewares [github.com/xgrommx/awesom…](https://t.co/on4zf6Rq1l "https://github.com/xgrommx/awesome-redux")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623134066741788672">14:15</a>

</div>

<div class="tweet">

совсем забыл, со мной можно говорить про Diablo 2.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623134775000207360">14:18</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Еще вот мои наработки по коллекционировании ресурсов об реактивности [xgrommx.github.io/rx-book/conten…](http://t.co/AQWwqrqEeE "http://xgrommx.github.io/rx-book/content/similar_libraries/index.html") также тут есть видео,…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623138067684065280">14:31</a>

</div>

## Вторник <small>92 твита</small>

<div class="tweet">

доброе утро. вчера спрашивали какое Flux решение мы используем… начну немного издалека, а закончу постом в медиум со ссылкой на репозиторий.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623342701744779264">4:04</a>

</div>

<div class="tweet">

хорошее интро в Immutable Data на примере Immutable.js всё от того же фейсбука [youtube.com/watch?v=I7IdS-…](https://t.co/7VC2rhvHPv "https://www.youtube.com/watch?v=I7IdS-PbEgI")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623343231548297216">4:06</a>

</div>

<div class="tweet">

а что если представить одно большое дерево данных, в котором хранится всё состояние приложения, от нажатости чекбокса до запрошенных данных.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623344339754717185">4:10</a>

</div>

<div class="tweet">

это дерево иммутабельное, т.е. каждое изменение влечёт за собой новую версию дерева, отличную от старой.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623344712489922560">4:12</a>

</div>

<div class="tweet">

в типичном приложении в дереве будет не так много основных явных веток, типа products list, product info и т.п.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623345383549173763">4:14</a>

</div>

<div class="tweet">

"курсор" – это своеобразная ссылка на ветку данных в дереве. простой пример на основе всё того же Immutable.js [github.com/facebook/immut…](https://t.co/cS1qCJDOjm "https://github.com/facebook/immutable-js/tree/master/contrib/cursor")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623345614957314048">4:15</a>

</div>

<div class="tweet">

"cursor path" – это путь к этой ветке или к конечным данным. обычно представляется в виде массива, \[ 'products', ID, 'details', 'price' \].
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623346044391178240">4:17</a>

</div>

<div class="tweet">

для дерева и курсоров мы используем Baobab [github.com/Yomguithereal/…](https://t.co/9Iv0xmAWnK "https://github.com/Yomguithereal/baobab") – ничего лишнего, всё довольно просто и прозрачно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623346531656052736">4:19</a>

</div>

<div class="tweet">

дерево эмитит событие \`update\`, на основе которого можно и нужно обновлять, например, курсоры, т.к. дерево уже новое, а ссылки старые.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623347532026916865">4:23</a>

</div>

<div class="tweet">

событие \`update\` есть и у самих курсоров – изменились данные по конкретному пути в дереве.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623348594242752512">4:27</a>

</div>

<div class="tweet">

сначала мы делали так: всё дерево помещается в локальный стэйт корневого компонента. по подписке на update стэйт обновляется новый деревом.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623348891862237185">4:28</a>

</div>

<div class="tweet">

от корневого компонента прямо через пропсы в рендере детям разливались курсоры на ветки данных, которые им нужны.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623349257920081920">4:30</a>

</div>

<div class="tweet">

это было очень удобно: каждый нвоый рендер самообновлял курсоры. получался такой водопад данных сверху вниз, который ещё и саморазливался.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623349516087857152">4:31</a>

</div>

<div class="tweet">

из минусов: жёсткая связанность компонентов через иерархию: компонент C зависел от курсора, который ему даст B, а тот в свою очередь от A.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623349708279316480">4:32</a>

</div>

<div class="tweet">

"лишние" рендеры довольно легко отсекались через shouldComponentUpdate\(\), как и было завещано.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623350088178380801">4:33</a>

</div>

<div class="tweet">

но потом моё внимание привлекла очень интересная особенность Baobab: есть событие \`get\` – были запрошены данные по такому-то пути. геттер.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623350398548508674">4:34</a>

</div>

<div class="tweet">

т.е. в теории можно было узнать, что запрошены данные, которых ещё нет в ветке. и сделать замозаполняющееся дерево :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623350795430264832">4:36</a>

</div>

<div class="tweet">

Declarative data fetching in React components with Baobab [medium.com/@mistadikay/de…](https://t.co/URslHl1nKD "https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623351004059144192">4:37</a>

</div>

<div class="tweet">

компоненты – максимально тупые. они просто рисуют данные как будто эти есть и всегда были. почти каждый компонент сам знает свой cursor path
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623351195474620416">4:38</a>

</div>

<div class="tweet">

в рутовом компоненте идёт подписка на геттер из дерева – если данных, которые запрошены отрисовкой компонента ещё нет, то дёргается экшн…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623351402186698752">4:38</a>

</div>

<div class="tweet">

…который, как в самом обычном Flux, диспатчит событие, которое ловит стор, который складывает эти данные по нужному cursor path в дерево.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623351752876687360">4:40</a>

</div>

<div class="tweet">

компонент по событию \`update\` от своего курсора самообновляется и перерисовывается. profit.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623351987904512001">4:41</a>

</div>

<div class="tweet">

по ссылке ниже есть более подробное описание и даже тестовый репозиторий с простым, но в том же время полноценным примером.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623352458916421632">4:43</a>

</div>

<div class="tweet">

самый жир затеи – [github.com/mistadikay/rea…](https://t.co/x5jdxNDdJa "https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23") – декларативный "запрос" данных. что-то вроде того же GraphQL, только поверх обычного Rest.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623353004947673088">4:45</a>

</div>

<div class="tweet">

т.е. компонент просто декларативно описывает откуда в дереве брать данные. а как, когда и почему они там оказались – не важно. просто рисуй.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623353232518066176">4:46</a>

</div>

<div class="tweet">

ещё одна интересная особенность – в дереве есть две осовных ветки – data и ui. в data собственно данные, а в ui – визуальные состояния…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623354056656842752">4:49</a>

</div>

<div class="tweet">

типа выбранного пункта, нажатости чекбокса и т.д. это позволяет практически забесплатно сделать "историю" – отматывание всего состояния.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623354295207882752">4:50</a>

</div>

<div class="tweet">

т.к. иммутабельное дерево создаёт новую версию на каждое изменение, ни что не мешает сохранять эти версии и сделать историю как в фотошопе.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623354549575643136">4:51</a>

</div>

<div class="tweet">

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Правда про CLJS, но отлично про иммутабельность, историю из оной и вообще. [youtube.com/watch?v=lDkrXT…](http://t.co/GTF7FpEm1M "http://www.youtube.com/watch?v=lDkrXTDwbJQ") [youtube.com/watch?v=tUtLe1…](http://t.co/d1dsnvNQ9n "http://www.youtube.com/watch?v=tUtLe1VlkYc")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623355729085214720">4:56</a>

</div>

<div class="tweet">

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А в вашем случае "дерево" — это BEMJSON или ещё над ним абстракция?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623358318887612416">5:06</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") нет, не BEMJSON, произвольная структура данных, в ветки которой чаще всего складываются данные от сервера as is.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623358489008541696">5:06</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") но твою идею я понял :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623358528594378755">5:07</a>

</div>

<div class="tweet">

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Просто ты упоминал до этого BEMJSON, и я пытаюсь понять, куда вы его там встроили.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623358759235026945">5:08</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") это никак не связано с Yummies и BEM. пример в репозитории специально написан на JSX :\) просто концепция, применимая везде.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623358999077916676">5:09</a>

</div>

<div class="tweet">

RT [@talgautb](https://twitter.com/talgautb "Талга УтБ"): кажется ведущий [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") отпросился от работы на неделю :\) столько твиттов, хотя только вторник!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623359508534788096">5:11</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не могу избавиться от ощущения что что-то с GraphQL и подобными решениями не так. Rest более лучше, конечно, …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623381164447772673">6:37</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") мы \(пока\) взяли только ту часть GraphQL, которая про декларативность в компоненте. а вот бэкендовый кусок – да, необычный.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623381388301959168">6:37</a>

</div>

<div class="tweet">

два поста в тему: Your First GraphQL Server [medium.com/@clayallsopp/y…](https://t.co/WeYrVib6py "https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2") / Moving from REST to GraphQL [medium.com/@frikille/movi…](https://t.co/GQF6ept3DB "https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623381532154048512">6:38</a>

</div>

<div class="tweet">

на данном этапе меня смущает даже сам синтаксис graphQL Query, но это просто с непривычки. с самой идеей по-моему всё в порядке.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623381951248871424">6:40</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как у вас дела с бэкендом? прослойка на ноде между клиентом и бэкендом на чем-то богомерзком? :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623382773265383428">6:43</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") обычный богомерзкий PHP, одни и те же REST-ручки которого "изоморфно" дёргаются нодой на сервере и аяксом на клиенте.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623383075272024065">6:44</a>

</div>

<div class="tweet">

RT [@markbaraban](https://twitter.com/markbaraban "Mark"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вопрос из зала: что лучше использовать Angular 2.0alpha \(es6\) или же React + ...\) или есть еще хорошие альтер…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623384229498372096">6:49</a>

</div>

<div class="tweet">

RT [@\_cloudo](https://twitter.com/_cloudo "Cloudo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") интересно. как насчет отдельных констант типа pretty\_name =&gt; path\_in\_tree, чтобы компонент не знал о структуре де…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623384499108196354">6:50</a>

</div>

<div class="tweet">

.[@\_cloudo](https://twitter.com/_cloudo "Cloudo") можно чуть подробнее? не совсем уловил.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623384575742349312">6:50</a>

</div>

<div class="tweet">

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на самом деле, если разобраться - баобаб тянет кучу всего лишнего. свой апи, курсоры, кучи методов \(push,…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623384600945909760">6:50</a>

</div>

<div class="tweet">

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну и основная идея - чистые функции, невозможна, set не возвращает новое дерево - он меняет текущее.даже …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623384614971637760">6:50</a>

</div>

<div class="tweet">

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") а какие альтернативы? меня Baobab не смущает вообще ни чем. has есть в виде exist в [@V2](https://twitter.com/V2 "R")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623384899689381888">6:51</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как относишься к сорхусу и его идее на каждую мелочь создавать по модулю?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623384932342038528">6:52</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") :\) забавный персонаж. в идее модульности нет ничего плохого, даже в таком, доведённом до абсурда виде. я даже что-то юзал.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623385228564787201">6:53</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") но я примерно понимаю почему это может раздражать.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623385435016859648">6:54</a>

</div>

<div class="tweet">

\(речь о [github.com/sindresorhus](https://t.co/rlWHh7Mqt8 "https://github.com/sindresorhus") и его модулях типа [github.com/sindresorhus/c…](https://t.co/i1id2VHz6R "https://github.com/sindresorhus/cat-names")\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623386446313840640">6:58</a>

</div>

<div class="tweet">

RT [@\_cloudo](https://twitter.com/_cloudo "Cloudo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") идея - заменить путь к данным в дереве более семантичной константой
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623386790934646784">6:59</a>

</div>

<div class="tweet">

.[@\_cloudo](https://twitter.com/_cloudo "Cloudo") вполне нормальная идея :\) импортировать это из тех же constants, по аналогии с именами событий.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623386979565056002">7:00</a>

</div>

<div class="tweet">

.[@\_cloudo](https://twitter.com/_cloudo "Cloudo") но это не работает с динамическими путями типа [github.com/mistadikay/rea…](https://t.co/XYqlzClwl5 "https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L14-L16")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623387138382540800">7:00</a>

</div>

<div class="tweet">

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") буквально вчера об это спросил [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") оказалось сделать это самому гораздо проще, чем кажется https[github.com/gaearon/redux/…](https://t.co/jip3DUtMKO "https://github.com/gaearon/redux/blob/improve-docs/docs/store.md")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623387188382662657">7:01</a>

</div>

<div class="tweet">

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") в моём мире set и не должен напрямую возвращать новое дерево, всё летает по кругу почти как в каноническом Flux.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623388140753960960">7:04</a>

</div>

<div class="tweet">

RT [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ещё вопрос. Для бем дерева вы данные подготавливаете прямо в шаблоне или где-то раньше? \(что-то типа своего…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623391538614145025">7:18</a>

</div>

<div class="tweet">

.[@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev") а нет как такового бем-дерева, как и шаблона :\) сырые данные идут напрямую в ветку дерева, оттуда компонент рисует как хочет
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623392146674991104">7:20</a>

</div>

<div class="tweet">

.[@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev") в смысле нет одного большого BEMTREE -&gt; BEMJSON, всё немного иначе.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623392335078887424">7:21</a>

</div>

<div class="tweet">

а какое Flux решение используете вы и какие у него основные минусы и сложности?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623403408683200517">8:05</a>

</div>

<div class="tweet">

RT [@d1b](https://twitter.com/d1b "Dmitriy Budnik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [alt.js.org](http://t.co/8AjxA3I7bF "http://alt.js.org") всё чётко
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623405617613438976">8:14</a>

</div>

<div class="tweet">

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Пробовал Альт; теперь хочу попробовать Редакс.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623413565442015232">8:45</a>

</div>

<div class="tweet">

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@sapegin](https://twitter.com/sapegin "Artem Sapegin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тоже используюем alt.js. попробовать redux интересно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623416299897511937">8:56</a>

</div>

<div class="tweet">

RT [@lapanoid](https://twitter.com/lapanoid "Lapin Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") делал в свое время анализ флаксов для заказщика, в результате и перешел на redux [docs.google.com/spreadsheets/d…](https://t.co/erVnaIYUyP "https://docs.google.com/spreadsheets/d/1TZPdUYDx6D1NWBXp_6NNtJ-NeVW6pudx3C9SkYSXI18/edit#gid=0")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623419514919612416">9:09</a>

</div>

<div class="tweet">

RT [@lapanoid](https://twitter.com/lapanoid "Lapin Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если у кого есть комментарии, критика к документу - это крайне желательно. Буду править\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623420186884845568">9:12</a>

</div>

<div class="tweet">

RT [@pomidore](https://twitter.com/pomidore "Александр Лунев"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") использовал reflux, alt, flummox и теперь пробую redux
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623425849967009794">9:34</a>

</div>

<div class="tweet">

RT [@pomidore](https://twitter.com/pomidore "Александр Лунев"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") reflux — дурацкие экшены, нет единого диспатчера, alt — странный api, flummox — все ок, но есть redux :-\), redux…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623425873518002177">9:34</a>

</div>

<div class="tweet">

RT [@stigmat4j](https://twitter.com/stigmat4j "Антонихин Максим"): [@pomidore](https://twitter.com/pomidore "Александр Лунев") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") только flux, только классика, только хардкор.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623426554694008832">9:37</a>

</div>

<div class="tweet">

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") понравилось использовать baobab вместо сторов.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623428026999574528">9:43</a>

</div>

<div class="tweet">

brace yourself, завтра изоморфность.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623443963341467648">10:46</a>

</div>

<div class="tweet">

о да. жду адептов секты правильных слов :\) RT [@lapanoid](https://twitter.com/lapanoid "Lapin Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") универсальность ;\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623444261481025536">10:47</a>

</div>

<div class="tweet">

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") vanilla js + свои сторы [github.com/alexeyraspopov…](https://t.co/oGdQX8rKWt "https://github.com/alexeyraspopov/flux-stateful")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623444315344220161">10:48</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У вас есть i18n? Кто как решает эту задачу с React?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623445051666903041">10:50</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") использовал [github.com/yahoo/react-in…](https://t.co/JNQY0cK3fb "https://github.com/yahoo/react-intl") все ок.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623445587791233024">10:53</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@dimchez](https://twitter.com/dimchez "Dmitry Demyankov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") метод translate прокидывался в компоненты как props.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623468903969062912">12:25</a>

</div>

<div class="tweet">

RT [@olebedev](https://twitter.com/olebedev "Oleg Lebedev"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") использую [github.com/piranha/puttext](https://t.co/rjdrniZ79a "https://github.com/piranha/puttext"):  
парсинг вызовов -&gt; \*.po -&gt; \*.json -&gt; puttext\(require\('\*.json'\)\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623472431244578816">12:39</a>

</div>

<div class="tweet">

RT [@suevalov](https://twitter.com/suevalov "Alexander Suevalov"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Polyglot.js от airbnb + своя привязка к Redux
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623496620131291136">14:15</a>

</div>

<div class="tweet">

RT [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko"): [@olebedev](https://twitter.com/olebedev "Oleg Lebedev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") +1 к puttext, просто и сердито
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623496651596939264">14:16</a>

</div>

<div class="tweet">

RT [@prbigbrother](https://twitter.com/prbigbrother "Alexandru Capatina"): Фронтаны, а может кто поможет найти решение или лучшие практики для smooth parallax scrolling? кто как делает [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623503302156660737">14:42</a>

</div>

<div class="tweet">

коллеги на работе подходят с вопросами потому что нагуглили мои модули. удобно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623507892247748608">15:00</a>

</div>

<div class="tweet">

RT [@temrdm](https://twitter.com/temrdm "Artem Pogrebnoy"): Все что обсуждал с [@ir4y\_ix](https://twitter.com/ir4y_ix "ilya beda") и планировал запилить на прошлых выходных, сегодня рассказывает [@deepsweet](https://twitter.com/deepsweet " k i r") в [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"). Супер!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623513502129352708">15:22</a>

</div>

<div class="tweet">

ооок, в CSS есть outline-offset [codepen.io/SitePoint/pen/…](http://t.co/rH8z8S0ncJ "http://codepen.io/SitePoint/pen/VLXyZw")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623516204095832064">15:33</a>

</div>

<div class="tweet">

RT [@subzey](https://twitter.com/subzey "subzey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А ещё он может быть отрицательным! В опере удобно было вёрстку так отлаживать, пока нормальный дебаггер не появился
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623517580439871488">15:39</a>

</div>

<div class="tweet">

минутка ванильной вёрстки закончилась.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623518471729459200">15:42</a>

</div>

<div class="tweet">

какое название вашей должности/профессии наиболее полно отражает реальность и в целом вас устраивает?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623520709701074945">15:51</a>

</div>

<div class="tweet">

моё "Senior Front-End Developer" уже явно вносит больше путаницы в головы менеджеров, чем что-либо проясняет.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623520985912709120">15:52</a>

</div>

<div class="tweet">

RT [@mr\_skriming](https://twitter.com/mr_skriming "Fast Cat"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") яжпрограммист
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623521028468158464">15:52</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") просто js web dev, без аутсорсной энтерпрайзной софтверной инженерии 😤
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623532615715287040">16:38</a>

</div>

<div class="tweet">

RT [@Borovikov](https://twitter.com/Borovikov "Денис Боровиков"): [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня устраивает классическое software engineer.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623532626821799936">16:38</a>

</div>

<div class="tweet">

RT [@d3head](https://twitter.com/d3head "Олег"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") JavaScript Engineer
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623532638205186049">16:39</a>

</div>

<div class="tweet">

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") разработчик интерфейсов
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623532656735551488">16:39</a>

</div>

<div class="tweet">

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Frontend Developer или разработчик интерфейсов. не люблю деление на Junior/Senior — оно искусственное.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623534198221967360">16:45</a>

</div>

## Среда <small>81 твит</small>

<div class="tweet">

A modular, progressive, and beautiful Markdown and HTML editor [github.com/bevacqua/woofm…](https://t.co/XXEtPx50Cx "https://github.com/bevacqua/woofmark")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623693138708684800">3:16</a>

</div>

<div class="tweet">

могу расписать по шагам идею изоморфности на примере того же реакта, начиная со сборки. интересно/актуально?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623699486938824708">3:42</a>

</div>

<div class="tweet">

готовых starter kit'ов и прочих стабов хватает, например [github.com/RickWong/react…](https://t.co/mxnKbZ4ggE "https://github.com/RickWong/react-isomorphic-starterkit") / [github.com/webpack/react-…](https://t.co/R3l6Qa8iL2 "https://github.com/webpack/react-starter") / [github.com/DavidWells/iso…](https://t.co/9LAAv0Pow7 "https://github.com/DavidWells/isomorphic-react-example")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623723887704936448">5:18</a>

</div>

<div class="tweet">

суть одна: один и тот же "изоморфный" код должен строить начальный HTML на сервере и продолжать работать дальше на клиенте.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623724396654407680">5:20</a>

</div>

<div class="tweet">

в React для этого предусмотрены обычный DOM \`render\(\)\` и "серверные" \`renderToString\(\)\` / \`renderToStaticMarkup\(\)\` [facebook.github.io/react/docs/top…](https://t.co/0MFvlUVJk0 "https://facebook.github.io/react/docs/top-level-api.html")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623725101989498880">5:23</a>

</div>

<div class="tweet">

к слову, в react@0.14 их даже разнесут по разным модулям [facebook.github.io/react/blog/201…](https://t.co/nSzVgYDxtO "https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623725240011501568">5:24</a>

</div>

<div class="tweet">

обычно webpack'ом делают одновременно два билда с двумя наборами бандлов на выходе: серверный и клиентский.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623725930062589952">5:27</a>

</div>

<div class="tweet">

точками входа в каждый из бандлов являются своеобразные конструкторы роутеров, которые ждут текущий запрощенный URL в виде аргумента.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623726713483059200">5:30</a>

</div>

<div class="tweet">

на сервере это обычный \`request.url\` из Express / Koa \([koajs.com](http://t.co/nOSN4i1JNR "http://koajs.com/"), наш выбор\) / whatever, на клиенте – HTML5 History API.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623727023941267456">5:31</a>

</div>

<div class="tweet">

стандартом де-факто является react-router [github.com/rackt/react-ro…](https://t.co/plmj29aAMm "https://github.com/rackt/react-router")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623727233232863232">5:32</a>

</div>

<div class="tweet">

на сервере:
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623728334279606273">5:36</a>

</div>

<div class="tweet">

грубо говоря, роутер по переданному URL через таблицу роутов определяет, какой именно компонент нужно рендерить.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623728956953329665">5:39</a>

</div>

<div class="tweet">

через renderToStaticMarkup\(\) \(чтобы не было лишних атрибутов data-reactid, "чистый" HTML\) строится руками доктайп, &lt;head&gt; и &lt;body&gt;.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623729395652386816">5:40</a>

</div>

<div class="tweet">

через renderToString\(\) вытягивается строка HTML из компонента, который решил рендерить роутер, и dangerouslySetInnerHTML вставляется в body.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623729880203526145">5:42</a>

</div>

<div class="tweet">

вся эта портянка отправляется обратно в Express в виде ответа на запрошенный URL. казалось бы всё, наш HTML jт сервера готов.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623730060982226944">5:43</a>

</div>

<div class="tweet">

но 1\) чаще всего ваше приложение не статическое, и рутовый компонент и всё последующее строится на основе данных, запрашиваемых с бэкенда.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623730596565487617">5:45</a>

</div>

<div class="tweet">

а render\(\) у реакта синхронный, и сам по себе ждать каких-то там экшенов и сторов не может и не будет.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623731043833491456">5:47</a>

</div>

<div class="tweet">

для решения этой задачи мы выбрали способ, в котором данные запрашиваются после осознания нужного роута, но до фактического рендера.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623731360247615488">5:48</a>

</div>

<div class="tweet">

придумали маппинг соответствия роута и экшна\(ов\) – серверный роутер дёргает нужный экшн и ждёт ответа от стора, пока тот не заполнится.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623731986805358593">5:51</a>

</div>

<div class="tweet">

пришёл ответ – рендерим. передав данные через пропсы, или просто тупо, если всё построено на дереве, из которого компонент возьмёт всё сам.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623732371825672192">5:52</a>

</div>

<div class="tweet">

Ajax with less suck - \(and node.js HTTP client to match\)   
[visionmedia.github.com/superagent/](http://t.co/6x3UQks4Zp "http://visionmedia.github.com/superagent/") – чуть не забыл, "изоморфный ajax".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623733029240856577">5:55</a>

</div>

<div class="tweet">

RT [@lyxdenv](https://twitter.com/lyxdenv "Alexander Gorbunov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И все это быстро?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623733096370712576">5:55</a>

</div>

<div class="tweet">

.[@lyxdenv](https://twitter.com/lyxdenv "Alexander Gorbunov") ни чем не должно отличаться от похода за данными на бэкенд в любой другой системе.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623733222073958400">5:56</a>

</div>

<div class="tweet">

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему Koa?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623733235395104768">5:56</a>

</div>

<div class="tweet">

.[@vladimore](https://twitter.com/vladimore "Waldemar") because we can :\) генераторы, вот это всё. судя по стресс-тестам распределение нагрузки более равномерное.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623736565664083968">6:09</a>

</div>

<div class="tweet">

очень важно для осознания: componentDidMount\(\) не происходит "на сервере", т.к. ничего никуда не маунтится.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623737003603963904">6:11</a>

</div>

<div class="tweet">

поэтому подписки на обновление сторов или дёргание каких-нибудь экшнов в этом методе будут проигнорированы renderToString\(\)'ом.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623737304952078336">6:12</a>

</div>

<div class="tweet">

и ровно из-за этого же использовать условия с \`typeof window\` или, прости господи, process.env.BROWSER и пр. – плохо.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623737890019807232">6:14</a>

</div>

<div class="tweet">

весь чистый client-side компонента должен быть описан исключительно в его componentDidMount\(\).
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623738013319864320">6:15</a>

</div>

<div class="tweet">

итак. на сервере теперь для нужного роута дёргаются нужные данные и вытягивается HTML-строка из нужных компонентов.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623738298414989312">6:16</a>

</div>

<div class="tweet">

когда на клиенте активируется наш собранный клиентский бандл, он \(как я представляю\) построит VDOM и начнёт матчить с HTML по \`data-reactid\`
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623739019889762304">6:19</a>

</div>

<div class="tweet">

т.к. никаких данных, которые были запрошены на сервере, у клиента нет, то React просто построит diff относительно пустых данных и всё сотрёт
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623739209581355008">6:19</a>

</div>

<div class="tweet">

отсюда интересная проблема: даже если на клиенте заново дёрнуть такие же экшны по роуту, как и на сервере, не факт, что они будут идентичны.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623739458974674944">6:20</a>

</div>

<div class="tweet">

это будет два разных несвязанных друг с другом запроса, пусть даже за одним и тем же. мало ли там какой timestamp или другая уникальность.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623739603153883138">6:21</a>

</div>

<div class="tweet">

мы не придумали ничего лучше \(а затем нашли подтверждение правильности своей идеи в других Flux рещениях\), чем передать данные в HTML.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623739857035132928">6:22</a>

</div>

<div class="tweet">

ведь если подумать, то между сервером и клиентом нет абсолютно никакой связи, кроме как HTML, и только так можно связать "сессию".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623740196408836096">6:23</a>

</div>

<div class="tweet">

RT [@olebedev](https://twitter.com/olebedev "Oleg Lebedev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а почему нельзя:  
React.render\(&lt;Handler /&gt;, document\);  
?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623740337312264192">6:24</a>

</div>

<div class="tweet">

.[@olebedev](https://twitter.com/olebedev "Oleg Lebedev") можно и нужно, вот только сторы пустые.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623740520540454912">6:25</a>

</div>

<div class="tweet">

т.е. при серверном рендеринге, куда-нибудь в &lt;body&gt;:  
  
&lt;script id="\_bootstrap" type="application/json"&gt;{ ololo: true }&lt;/script&gt;
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623741001320914944">6:26</a>

</div>

<div class="tweet">

для клиентского бандла точкой входа является клиентский конструктор роутера, который, если есть "bootstrap", возьмёт оттуда данные.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623741575357599744">6:29</a>

</div>

<div class="tweet">

сложит их в стор и сделает самый обычный React.render\(…\). в этой точке всё дальнейшнее управление роутами уходит в клиентский react-router.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623741831893757952">6:30</a>

</div>

<div class="tweet">

теперь строка HTML от сервера полностью идентична тому, что построит реакт на клиенте. нулевой diff, profit.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623742165496168448">6:31</a>

</div>

<div class="tweet">

дальнейший переход на другую страницу будет перехвачен роутером и выполнен только на клиенте. только в этом случае будет дёрнут экшн…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623742435890298880">6:32</a>

</div>

<div class="tweet">

т.к. данных для другой страницы в "boostrap" нет, ведь сервер рендерил только текущую страницу. начинается обычный Flux data flow.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623742801889464320">6:34</a>

</div>

<div class="tweet">

если очень кратко: самые начальные данные клиент берёт из HTML, а дальше всё как обычно, никаких ограничений.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623743672480239616">6:37</a>

</div>

<div class="tweet">

грабли, на которые мы наткнулись практически сразу: неучтённые синглтоны и \`on\`-подписки вместо \`once\` на сервере.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623744277609234433">6:39</a>

</div>

<div class="tweet">

результат: расшаренные сессии и сторы между разными клиентами :\) следите за этим.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623744533671493632">6:41</a>

</div>

<div class="tweet">

извиняюсь за возможную сумбурность, старался излагать максимально последовательно. вопросы?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623744781613596672">6:41</a>

</div>

<div class="tweet">

RT [@olebedev](https://twitter.com/olebedev "Oleg Lebedev"): ~[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") как то говорил в чате что нельзя так, так как экстеншены могут мjдифицировать DOM.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623744833039904768">6:42</a>

</div>

<div class="tweet">

.[@olebedev](https://twitter.com/olebedev "Oleg Lebedev") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") буду очень рад узнать альтернативное решение
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623744870729912320">6:42</a>

</div>

<div class="tweet">

RT [@subzey](https://twitter.com/subzey "subzey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как по мне, тут чейнинг используется только ради чейнинга. Какой профит по сравнению с window.fetch\(url, {…}\)?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623744954167267328">6:42</a>

</div>

<div class="tweet">

.[@subzey](https://twitter.com/subzey "subzey") [github.com/matthew-andrew…](https://t.co/z4XwG3cRB4 "https://github.com/matthew-andrews/isomorphic-fetch") для любителей.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623745076464783361">6:43</a>

</div>

<div class="tweet">

RT [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на клиенте используете тот же маппинг или другой подход к работе с данными?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623745200330969088">6:43</a>

</div>

<div class="tweet">

.[@snejink](https://twitter.com/snejink "Aleksei Krasnoperov") абсолютно тот же расшаренный маппинг роут -&gt; экшн\(ы\).
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623745345609072640">6:44</a>

</div>

<div class="tweet">

я в целом большой поклонник метода "сделай с нуля, или не поймёшь до конца". но это не значит, что не нужно использовать готовые решения.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623745710287011841">6:45</a>

</div>

<div class="tweet">

хотя бы издалека понимать принцип работы такой не самой простой штуки уже полезно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623745841673605120">6:46</a>

</div>

<div class="tweet">

RT [@kra1g0](https://twitter.com/kra1g0 "Крайго"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть react native для андроида?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623745962805104640">6:46</a>

</div>

<div class="tweet">

.[@kra1g0](https://twitter.com/kra1g0 "Крайго") afaik нет, но они очень обещают. без чётких сроков, как обычно у Facebook.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623746056505835520">6:47</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") данные для render нужно заранее готовить и в отдельном от React месте. Я вот для этого либу написал [bit.ly/1TPnKSn](http://t.co/hCRILB9ZGg "http://bit.ly/1TPnKSn")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623746338862186496">6:48</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") можно в двух словах основной принцип?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623746370617278464">6:48</a>

</div>

<div class="tweet">

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В твитере всё равно поток сознания получается :-\) Но в целом всё понятно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623746432684527617">6:48</a>

</div>

<div class="tweet">

разница между серверным и клиентским webpack-бандлами небольшая: разные точки входа, и упрощённый процессинг на сервере, без стилей и т.п.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623747751709274113">6:53</a>

</div>

<div class="tweet">

в серверный бандл так же можно не включать всё вендорное, чтобы мучать зря файл на пару мегабайт – [webpack.github.io/docs/library-a…](https://t.co/duEhtH6nuW "https://webpack.github.io/docs/library-and-externals.html")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623748469384044544">6:56</a>

</div>

<div class="tweet">

[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") НЕ мучать, идиот.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623749170856222720">6:59</a>

</div>

<div class="tweet">

RT [@sbmaxx](https://twitter.com/sbmaxx "Roma Rozhdestvenskiy"): Надо будет взять кофейку и перечитать [@deepsweet](https://twitter.com/deepsweet " k i r") в роли [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") . Не будет какой-нибудь ссылочно-резюмешечного текста по и…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623750382875840512">7:04</a>

</div>

<div class="tweet">

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@sbmaxx](https://twitter.com/sbmaxx "Roma Rozhdestvenskiy") [@deepsweet](https://twitter.com/deepsweet " k i r") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В профиле аккаунта же есть ссылка [jsunderhood.ru](https://t.co/PbeRmSYiDR "https://jsunderhood.ru/")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623750407735480320">7:04</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ого, какая печалька \(почитал дальше\). Какая-то так себе изоморфность получается. Неужто более лучше ничего не…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623755747042553856">7:25</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") [github.com/facebook/react…](https://t.co/cWPkS5i2Bh "https://github.com/facebook/react/issues/3009") когда-нибудь…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623755794983469056">7:25</a>

</div>

<div class="tweet">

этот наш роут -&gt; экшн\(ы\) маппинг плюс ко всему позволяет довольно легко решить, какой компонент рендерить на сервере, а какой на клиенте.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623756260341448704">7:27</a>

</div>

<div class="tweet">

если для чисто клиентского компонента не дёргается экшн в серверном роутере, то он просто отрисуется пустым.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623756475026935808">7:28</a>

</div>

<div class="tweet">

на клиенте в своём componentDidMount\(\) компонент посмотрит, что данных в сторе \(от бутстрапа\) нет, и сам дёрнет свой экшн. даже изящно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623756670728933376">7:29</a>

</div>

<div class="tweet">

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): Вопрос к залу: поддон для посудомойки обязательно нужен? Как подобрать подходящий, какие у них параметры? Забыла заказать вм…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623758174416273408">7:35</a>

</div>

<div class="tweet">

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@kra1g0](https://twitter.com/kra1g0 "Крайго") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") стоит ли вообще инвестировать время в него сейчас? есть ли серьезные разработки на нем?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623762587876917248">7:52</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@kra1g0](https://twitter.com/kra1g0 "Крайго") У фейсбука два приложения нативных \(ads и groups\) - react native. Все очень серьезно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623764037759729664">7:58</a>

</div>

<div class="tweet">

RT [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Читаю ваши твиты про реакт и не двупляю почти ничего.  Чем крут реакт? Киллерфича перед ангуларом? ☺️
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623776524831821828">8:48</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фича в том, что ты можнешь думать о приложении, как о функции. В математическом смысле слова.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623776961945415680">8:49</a>

</div>

<div class="tweet">

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин") [facebook.github.io/react/docs/why…](https://t.co/7TsswDl7Fs "https://facebook.github.io/react/docs/why-react.html") + [jlongster.com/Removing-User-…](http://t.co/bz8u9ZYUzF "http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623779058921312256">8:58</a>

</div>

<div class="tweet">

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а если таких компонента два? оба дернут?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623793369681018880">9:55</a>

</div>

<div class="tweet">

.[@slonoed](https://twitter.com/slonoed "Dmitry M.") мы сделали isRequesting на уровне экшна, чтобы одновременно не было двух одинаковых. всё равно в стор попадёт в одно и то же место
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623793674971844609">9:56</a>

</div>

<div class="tweet">

.[@slonoed](https://twitter.com/slonoed "Dmitry M.") компонент не должен о таком думать
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623793788268326912">9:56</a>

</div>

<div class="tweet">

а у кого сейчас какой pet project? :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/623894836123336704">16:38</a>

</div>

## Четверг <small>69 твитов</small>

<div class="tweet">

появились подвижки в мёрдже isparta в istanbul [github.com/douglasduteil/…](https://t.co/RnGnXJqPGI "https://github.com/douglasduteil/isparta/issues/31#issuecomment-123894638") – покрытие оригинального ES6 кода через sourcemaps от Babel.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624087991028355072">5:25</a>

</div>

<div class="tweet">

к слову, лоадеры к вебпаку для обоих – [github.com/deepsweet/ista…](https://t.co/1NmkG1Y2mE "https://github.com/deepsweet/istanbul-instrumenter-loader") / [github.com/deepsweet/ispa…](https://t.co/sE2uc4rVfc "https://github.com/deepsweet/isparta-loader")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624088520643117056">5:27</a>

</div>

<div class="tweet">

Approaches to testing React components [reactkungfu.com/2015/07/approa…](http://t.co/BV2bwDC1DP "http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/") – а как вы тестируете реакт-приложения?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624088913750024192">5:29</a>

</div>

<div class="tweet">

у нас \(пока\) jsdom [github.com/tmpvar/jsdom](https://t.co/pRKh62245N "https://github.com/tmpvar/jsdom") + старая добрая mocha [github.com/rstacruz/mocha…](https://t.co/IcRYH52hhZ "https://github.com/rstacruz/mocha-jsdom") + TestUtils [facebook.github.io/react/docs/tes…](https://t.co/LHa51Lo8ej "https://facebook.github.io/react/docs/test-utils.html")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624089593411809280">5:32</a>

</div>

<div class="tweet">

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") используя Shallow Rendering [facebook.github.io/react/docs/tes…](https://t.co/rF299uL4MS "https://facebook.github.io/react/docs/test-utils.html")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624114157835546624">7:09</a>

</div>

<div class="tweet">

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") такой же набор + sinon
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624114171118927872">7:09</a>

</div>

<div class="tweet">

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну а дальше mocha, chai с параметром —compilers js:babel/register
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624115385881595905">7:14</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему не Karma? Для браузера же пишете, jsdom - читерство
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624126410873946112">7:58</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") а какие именно браузерные отличия ты хочешь тестировать кармой? то, как работает сам реакт? :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624126730916093953">7:59</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") правда. но что это меняет? внутри Flux тоже нечего такого специфичного тестировать… приведи пример, я не могу придумать :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624127358367215616">8:02</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") мы начали с кармы, и на первом проекте она даже до сих пор крутится. даже под Sauce Labs. а потом подумали "а зачем?".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624127617411608576">8:03</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") :\) хороший довод. Но проект же состоит не только из реакт-компонентов, правда же?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624128306137333760">8:05</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так любой js-код. Все же js в ноде от того, что есть в chrome и ff разных версий отличается. Дело же не тольк…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624128314022596608">8:06</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") смотрю на проект и пытаюсь найти что-нибудь такое :\) я понимаю о чём ты, но одновременно не попускают мои доводы.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624128762922139649">8:07</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тот же babel спокойно может зарелизить версию с косяками и зафиксить только через пару часов, какое тут довер…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624129447222841344">8:10</a>

</div>

<div class="tweet">

.[@silentroach](https://twitter.com/silentroach "Игорь") по-моему это путь в ад, тестировать "не свой" код. так можно тестировать правильно ли вебпак реквайрит модули, например.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624129819391856640">8:11</a>

</div>

<div class="tweet">

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а это тестировать и не надо, надо тестировать работоспособность своего проекта :\) которая может быть сломана …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624130315255050240">8:13</a>

</div>

<div class="tweet">

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") насколько я понял и подход и даже частично реализация совпадает с вот этим примером: [github.com/erikras/react-…](https://t.co/0gLUqMpLNr "https://github.com/erikras/react-redux-universal-hot-example"), в…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624131716815327232">8:19</a>

</div>

<div class="tweet">

.[@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin") очень может быть, конкретно на это я не смотрел. идея у всех плюс-минус одна.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624131924047466496">8:20</a>

</div>

<div class="tweet">

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") получение данных на серверной стороне \(наполнение стора\) там изящно реализовано, рекомендую обратить на него вн…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624133121785491457">8:25</a>

</div>

<div class="tweet">

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так можно же локально тестировать через jsdom, а в CI запускать те же тесты в браузере
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624133831444951040">8:27</a>

</div>

<div class="tweet">

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") а как тестировать e2e? Хочу, чтобы перед деплоем основные сценарии проверялись: лог…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624156633526964228">9:58</a>

</div>

<div class="tweet">

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@subzey](https://twitter.com/subzey "subzey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для fetch получается слишком много лишнего кода типа установки хедеров и тд, в итоге я пришёл к sup…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624157047211188224">10:00</a>

</div>

<div class="tweet">

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мы начинаем прикручивать [pioneerjs.com](http://t.co/R4yqJBCKNj "http://pioneerjs.com/") посмотрим ,…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624157067939479552">10:00</a>

</div>

<div class="tweet">

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk") [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") я не понял, чем он лучше cucumber.js?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624159762590994432">10:10</a>

</div>

<div class="tweet">

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") немного опоздал, но вот небольшой пример isomorphic app \([github.com/ShpuntiK/isomo…](https://t.co/vYFzqqIwJE "https://github.com/ShpuntiK/isomorphic-app-sample")\) с идеями, которые ты опис…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624160140049035264">10:12</a>

</div>

<div class="tweet">

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [shpuntik.github.io/isomorphic-app…](http://t.co/LuV2uSclSO "http://shpuntik.github.io/isomorphic-apps-presentation") - и презентация на основе этого кода \(2/2\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624160318814445568">10:13</a>

</div>

<div class="tweet">

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") про синглотоны очень верно :\) сам долго осознавал эту проблему
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624161538769682432">10:18</a>

</div>

<div class="tweet">

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") так и тестировать — писать e2e тесты, локально запускають через jsdom, на сервере ч…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624161578175168512">10:18</a>

</div>

<div class="tweet">

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko") [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") хороший вопрос, я пока не знаю. по зависимостям pioneer ссылается на фор…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624162051854700544">10:20</a>

</div>

<div class="tweet">

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk") [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") понял, это враппер над ним, с e2e API. Но мне больше нравится http://t.c[webdriver.io](http://t.co/A0mUtDcGhX "http://webdriver.io")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624163061289455616">10:24</a>

</div>

<div class="tweet">

Babylon is a JavaScript parser used in Babel [github.com/babel/babel/tr…](https://t.co/nopJz2X1Cy "https://github.com/babel/babel/tree/master/packages/babylon")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624167114002182144">10:40</a>

</div>

<div class="tweet">

кажется решились на babel-plugin-typecheck, по крайней мере простые вещи. ненавижу JSDoc. [github.com/codemix/babel-…](https://t.co/90obOQPQKU "https://github.com/codemix/babel-plugin-typecheck") + [flowtype.org/docs/quick-ref…](http://t.co/9wllD3YRnF "http://flowtype.org/docs/quick-reference.html")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624169300274753536">10:48</a>

</div>

<div class="tweet">

хочется как в Babel – [github.com/babel/babel/bl…](https://t.co/FRjrfxxaVN "https://github.com/babel/babel/blob/master/packages/babel/src/util.js") – комменты комментами, а типы через flow type annotations.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624169790773395456">10:50</a>

</div>

<div class="tweet">

\(TypeScript для бедных\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624169906800455680">10:51</a>

</div>

<div class="tweet">

Turn flow type annotations into comments [github.com/babel-plugins/…](https://t.co/9BfMaYJN52 "https://github.com/babel-plugins/babel-plugin-flow-comments")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624173908036431872">11:07</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Все задаю вопрос почему flow? Почему не typescript?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624189944156676096">12:10</a>

</div>

<div class="tweet">

.[@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") а TypeScript уже разве полностью синхронизировался с ES6?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624191363848892416">12:16</a>

</div>

<div class="tweet">

пруф или не было :\) RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") уже и с ES7
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624191680686587904">12:17</a>

</div>

<div class="tweet">

на сегодня так [github.com/mistadikay/rea…](https://t.co/x5jdxNDdJa "https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23"), мы над этим работает. RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У вас своя реализация query в компонентах?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624192072044560384">12:19</a>

</div>

<div class="tweet">

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") о-да! Суперагент очень крутой! Я даже написал для него REST-моккер который работает прямо в браузере https[github.com/rambler-digita…](https://t.co/l8ZggpQ7y8 "https://github.com/rambler-digital-solutions/superagent-mocker")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624192112834129920">12:19</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вот их roadmap [github.com/Microsoft/Type…](https://t.co/7D5mvtEAiX "https://github.com/Microsoft/TypeScript/wiki/Roadmap")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624192128038498304">12:19</a>

</div>

<div class="tweet">

хм, ок. тогда почему не TypeScript?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624192285316481024">12:20</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") он умеет искать по полям в объектах? типа: хочу объект из массива в котором id: 5
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624192934762549248">12:22</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") да, стандартными средствами Baobab. мы когда осознали, кажется взвизгнули.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624192997547061248">12:23</a>

</div>

<div class="tweet">

[github.com/Yomguithereal/…](https://t.co/L4r5MG0pom "https://github.com/Yomguithereal/baobab/wiki/Select-state") RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ану покаж!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624193356160110593">12:24</a>

</div>

<div class="tweet">

btw, скоро Baobab@v2 [github.com/Yomguithereal/…](https://t.co/oTIBUpR0Xz "https://github.com/Yomguithereal/baobab/tree/v2")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624193982881361920">12:26</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Круто! А как быть с динамическими query? Например листы. Как вы расширяете query?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624194267926368256">12:28</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") по ссылке на наш пример видно, что query – это функция, принимающая props и state :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624194418162053120">12:28</a>

</div>

<div class="tweet">

RT [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я написал новый ридми для Redux: [github.com/gaearon/redux/…](https://t.co/s0q28MdIX3 "https://github.com/gaearon/redux/tree/rewrite-docs"). Фидбэк вэлкам! \(Доки пока не готовы\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624194447182401536">12:28</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") А что о [github.com/mquan/cortex](https://t.co/7ajTIaDBak "https://github.com/mquan/cortex") скажете?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624194466392354816">12:28</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") Вообще есть целый список [github.com/enaqx/awesome-…](https://t.co/FRdVOypIDe "https://github.com/enaqx/awesome-react#data-managing")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624195346474733569">12:32</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Хм, вижу. А что, если часть динамического query зависит от данных из глобального состояния?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624195753179807744">12:33</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") ммм… в общем случае оно может быть в пропсах, мы так ID из роута протягивали. ещё вариант – context. есть конкретный пример?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624196326503268352">12:36</a>

</div>

<div class="tweet">

на сегодня это тянется в пропсах, но уже есть кое-какие намёки. RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот я про роут и id как раз и хотел сказать :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624196786186424320">12:38</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это не ломает проверку SCU? Или у вас и пропсы и данные по курсору сравниваются в SCU?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624197780953657344">12:42</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") не совсем понял как тут сломается SCU. мы сравниваем ID в componentWillReceiveProps и при отличии обновляем свои курсоры.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624198045987528704">12:43</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") т.е. данные компонента обновляются на новую ветку с новым ID.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624198170118000640">12:43</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") query-функция вызывается заново с новыми пропсами, и получается новый cursor path. ну ты наверное уже понял :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624198809778679808">12:46</a>

</div>

<div class="tweet">

немного забегая вперёд скажу, что мы уже всё чуть переосмыслили и оформляем в виде небольшого модуля на декораторах. для своих нужд.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624200111673860097">12:51</a>

</div>

<div class="tweet">

а скиньте примеры своего кода на ES6 с JSDoc.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624200599832113152">12:53</a>

</div>

<div class="tweet">

хохма последней недели – "самовозбуждающийся стор"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624201140100435968">12:55</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а почему бы это состояние не хранить в самом tree? \)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624203558049591296">13:05</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") именно это мы и собираемся попробовать. в каком-то виде :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624203622289575941">13:05</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") глянул, очень круто \). А это [github.com/tonsky/datascr…](https://t.co/ZuDwn9KmEd "https://github.com/tonsky/datascript") - следующая итерация идеи [@nikitonsky](https://twitter.com/nikitonsky "Nikita Prokopov")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624203954163838976">13:06</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я это в своем slt как раз имел ввиду \). Короче, состояние целостно только в случае, когда все причины хранятся в не…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624204490149748736">13:08</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и тут основаная моя претензия к flux.Вызов экшена никак не фиксируется,теряются причины.В [#redux](https://twitter.com/search?q=%23redux) такая же проблема [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624217527451684865">14:00</a>

</div>

<div class="tweet">

↓ и дальше по реплаям.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624217622230372352">14:00</a>

</div>

<div class="tweet">

JSCity is an implementation of the Code City metaphor for visualizing source code [github.com/aserg-ufmg/JSC…](https://t.co/1nk6M643H3 "https://github.com/aserg-ufmg/JSCity/wiki/JSCITY") 😻
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624224982483075072">14:30</a>

</div>

## Пятница <small>40 твитов</small>

<div class="tweet">

RT [@bashmish](https://twitter.com/bashmish "Misha Bashkirov"): Пс, парень, немного рекурсии не желаешь? [pic.twitter.com/tw4p65bqnB](http://t.co/tw4p65bqnB)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624385235673714688">1:06</a>

</div>

<div class="tweet">

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") расскажи вот что про реакт. Как люди валидируют пользовательский ввод в формах, трансформируют его и так далее?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624406084669734912">2:29</a>

</div>

<div class="tweet">

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ибо формы, по-моему, это головная боль на реакте в отличие от того же ангуляря. В ангуляре это прям великолепно с…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624406092328538112">2:29</a>

</div>

<div class="tweet">

.[@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") мы не придумали ничего лучше, чем заюзать validator [github.com/chriso/validat…](https://t.co/rl3IkwPVMa "https://github.com/chriso/validator.js") с кастомным выводом ошибок.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624406998180704257">2:33</a>

</div>

<div class="tweet">

.[@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") пробовали даже нативную HTML5 валидацию [html5rocks.com/en/tutorials/f…](http://t.co/igxQPCEYNJ "http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/"), но это просто ад. более невменяемого API я не помню.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624407148949143552">2:33</a>

</div>

<div class="tweet">

тема лично для меня всё ещё актуальная, может есть что-то очевидное и крутое?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624407274233053184">2:34</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что по поводу [github.com/gcanti/tcomb-f…](https://t.co/5oeiGckltc "https://github.com/gcanti/tcomb-form") и [github.com/insin/newforms](https://t.co/A6hjUPfn3G "https://github.com/insin/newforms")?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624411368133820417">2:50</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") tcomb интересный, был небольшой опыт, но newforms поддерживают isomorphic
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624411971866132480">2:53</a>

</div>

<div class="tweet">

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А еще в ангуляре есть великолепнейшая либа [angular-formly.com](http://t.co/CIGnyZMRLG "http://angular-formly.com")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624415508243152896">3:07</a>

</div>

<div class="tweet">

coveralls в read-only, ну круто [status.coveralls.io](http://t.co/Zk2biV4ydi "http://status.coveralls.io/") – видимо с этим же связаны последние затупы с pending очередью /[@toivonens](https://twitter.com/toivonens "var ya; // ru")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624425338945171456">3:46</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") первая попытка, по-моему получилось круто [github.com/mistadikay/rea…](https://t.co/i0Ebulcgl9 "https://github.com/mistadikay/react-auto-fetching-example/blob/doob/src/components/product/index.es6#L8-L17") – cursor path как часть другого cursor path
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624428600368873472">3:59</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") до того как делать баобабовый select мы подготавливаем cursor path через рекурсивный поиск вложенных массивов.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624429240331603970">4:01</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") на любой глубине как и раньше могут быть части props/state из функции, в скоупе которой это всё происходит.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624429422725062657">4:02</a>

</div>

<div class="tweet">

RT [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А тогда скажи, форма для тебя должна быть smart- \(с внутренним состоянием\) или dumb-компонентом \(с состоянием в с…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624429615398830080">4:03</a>

</div>

<div class="tweet">

.[@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov") у нас получилось что-то между: у формы есть своё внутреннее состояние, которое можно менять внешними пропсами.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624430567522566144">4:07</a>

</div>

<div class="tweet">

RT [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для валидации форм использую [github.com/christianalfon…](https://t.co/zcPK0e7JeR "https://github.com/christianalfoni/formsy-react")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624462345431965697">6:13</a>

</div>

<div class="tweet">

RT [@cssunderhood](https://twitter.com/cssunderhood "HTML, CSS, BDSM"): Всем привет \) Меня зовут Денис [@denisfedosov](https://twitter.com/denisfedosov "Denis FL") и люблю верстать. Работаю удаленно в ⚑ Passenger.me.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624462415229399041">6:13</a>

</div>

<div class="tweet">

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а поделись годными материалами про spa \(на стек пофиг\) :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624466133131726848">6:28</a>

</div>

<div class="tweet">

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну ок, кастомный вывод ошибок нормальная тема. А что на счет модификации пользовательского ввода onkeyup? Как $fi[$filter](https://twitter.com/search?q=%23filter&src=ctag)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624477499850797057">7:13</a>

</div>

<div class="tweet">

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") могу сделать простенький gist для поля ввода номера кредитки, там все очень просто
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624479482347282432">7:21</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") вроде норм. А в чем смысл использовать state вместо props?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624480982385586176">7:27</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") просто на всякий случай :\) у нас такого примера нет, но локальный стэйт компонета всё равно пробрасывается. мало ли.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624481107912712192">7:27</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") а, кажется ты про другое. мы не делали через higher-order component по некоторым причинам, но в целом можно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624481475950284800">7:29</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") как раз сейчас пишем довольно подробный README. всё будет.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624481582821158912">7:29</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") да не, я имел ввиду что вообще нафиг state не нужен \). То есть ну вообще \).
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624483349407502336">7:36</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") в идеальном случае – да, согласен. он просто удобен "в виде хранилища" тем, что при обновлении дёргает рендер сам.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624483604639301633">7:37</a>

</div>

<div class="tweet">

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") собственно вот: [gist.github.com/afitiskin/a65c…](https://t.co/SZy9WMURov "https://gist.github.com/afitiskin/a65c26ff923d13788980")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624483675074269188">7:38</a>

</div>

<div class="tweet">

RT [@Chudesnov](https://twitter.com/Chudesnov "散厦知"): [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin") [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") onchange в Реакте - это только change, или он другие какие-то события подмешивает?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624486242080550912">7:48</a>

</div>

<div class="tweet">

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@Chudesnov](https://twitter.com/Chudesnov "散厦知") [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") любое изменение в input триггерит реактовский onchange, на мобилках должно работать так же
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624486253329690624">7:48</a>

</div>

<div class="tweet">

оформили наш подход к работе со стэйтом в реакте [github.com/mistadikay/doob](https://t.co/0BqgLIOpbq "https://github.com/mistadikay/doob"), по мотивам поста [medium.com/@mistadikay/de…](https://t.co/URslHl1nKD "https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852") 🔥
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624488227974438912">7:56</a>

</div>

<div class="tweet">

горячий тред :\) RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov") [twitter.com/isnifer/status…](https://t.co/zGkq4zTHTC "https://twitter.com/isnifer/status/624512816599441408") , не? \)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624518046762209280">9:54</a>

</div>

<div class="tweet">

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это все какие-то библиотеки, которые подменяют привычное написание элементов форм. Фу на такое
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624518774700404736">9:57</a>

</div>

<div class="tweet">

.[@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") покажи уже ангуларовый рай для создания и валидации форм
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624518911468244992">9:58</a>

</div>

<div class="tweet">

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") ща покажу, как раз взялся зафиксировать это
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624519291048603648">9:59</a>

</div>

<div class="tweet">

совсем забыл про важную фишку иммутабельности – сохранение ссылок на объекты. простейший shouldComponentUpdate без shallow-equal костылей.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624524928801337344">10:22</a>

</div>

<div class="tweet">

в том же Baobab два курсора на одни и те же данные будут равны через \`===\`, как и результат их \`.get\(\)\`а.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624525069444747264">10:22</a>

</div>

<div class="tweet">

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну просто, для ясности :\) вообще да, идея с баобабом заразительна. Особенно то, как это на флакс ложится.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624528338099441666">10:35</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да не нужен тебе флакс е-мае \)\). Там же можно на изменения данных подписываться \)\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624528344323719168">10:35</a>

</div>

<div class="tweet">

извините, у вас есть минутка поговорить о баобабе? RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") точно, не заметил. нафиг флакс, всем по баобабу!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624529992303554560">10:42</a>

</div>

<div class="tweet">

A Virtual DOM based AngularJS view renderer designed to be used with immutable data structures [github.com/teropa/angular…](https://t.co/JpyZCe7Nph "https://github.com/teropa/angular-virtual-dom")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624582903305998336">14:12</a>

</div>

## Суббота <small>53 твита</small>

<div class="tweet">

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): So true [twitter.com/fioroco/status…](https://t.co/qRMrtK97oD "https://twitter.com/fioroco/status/624321843755814913")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624766832205893632">2:23</a>

</div>

<div class="tweet">

в ESLint@1.0.0-rc-3 наконец-то сделали reset по умолчанию [eslint.org/blog/2015/07/e…](http://t.co/79RjU2U6h7 "http://eslint.org/blog/2015/07/eslint-1.0.0-rc-3-released/#reset-is-now-the-default"), т.е. нужно заполнять конфиг с нуля вдумчиво и руками.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624775130187632640">2:56</a>

</div>

<div class="tweet">

если вы по какой-то странной причине всё ещё используете JSHint, то самое время перейти с выходом ESLint@1.0.0.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624775650365190144">2:58</a>

</div>

<div class="tweet">

+ [github.com/babel/babel-es…](https://t.co/AgmTtRFXgI "https://github.com/babel/babel-eslint") + [github.com/babel/eslint-p…](https://t.co/pypDE5iXSu "https://github.com/babel/eslint-plugin-babel")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624776200104247300">3:00</a>

</div>

<div class="tweet">

+ [github.com/yannickcr/esli…](https://t.co/QTmYB7ydBf "https://github.com/yannickcr/eslint-plugin-react")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624777919643029504">3:07</a>

</div>

<div class="tweet">

у инструмента, который связан с парсингом ES6, нет практически никаких шансов выжить без Babel. Себастиан не просто так выделил Babylon.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624779041371877376">3:11</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Так что выжить без Babel для парсинга ES6 очень даже легко \(и он будет скорее оверкиллом\).
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624810001081565184">5:14</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") расскажи это какому-нибудь JSCS
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624810023441403908">5:14</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Esprima, собственно, тоже уже догоняет, тем более что общую спецификацию мы уже написали.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624810195076526081">5:15</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") на ES7 уйдёт ещё год догонов [github.com/estree/estree](https://t.co/fPhadJCVhc "https://github.com/estree/estree"). парсер Babel хорош именно тем, что он bleeding edge.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624810513512296448">5:16</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И тем же одновременно и плох, так как использует внутренние типы нод, которые внешние либы могут принять за ста…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624810771562692608">5:17</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") но на его основе потом и обсуждается формат для ESTree. кому-то нравится теория, а мне нужно использовать ещё вчера.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624810967013003264">5:18</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") я начал говорить о конкретных инструментах типа ESLint/JSCS, а ты про глобальное. совершенно очевидно, что есть эсприма и акорн.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624811425865728000">5:20</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") про esprima-fb нужно напоминать? :\) да, оно когда-нибудь будет стабильное и покрывающее всё-всё. но не сегодня.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624811875557965824">5:22</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") вот тебе факты: 1\) от JSCS я отказался на следующий день после осознания отсутствия поддержки всего, что мне нужно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812114591399936">5:23</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") 2\) если бы не появился babel-eslint, я бы жил вообще без линтера.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812168353964037">5:23</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") На чьем формате? Бабеля? Нет. Он в этой сфере относительно недавний игрок, и больше консьюмер чем задающий прав…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812489042046976">5:24</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это не о теории, а о стабильности тулз и фич. Тем более, что все эти ES7 штуки легко реализовать как плагины дл…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812495748775936">5:24</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я тоже очень даже о конкретных. ESLint \(Espree\) мы вон тоже потихоньку на Акорн переводим.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812504116375553">5:24</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Не понял посыла про esprima-fb. В том-то и суть, что стабильным оно может и не стать, и быть по-тихому удалено …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812515331981312">5:24</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это основная политика Бабеля - можно экспериментировать с новыми фичами, но мы их в любой момент можем убрать.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812522181300224">5:24</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") ты снова про какую-то абстрактную теорию. у тебя есть живой проект на ES6/ES7, который нужно, например, линтить? похоже, что нет
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812712317419521">5:25</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") можно сколько угодно обсуждать инструмент в вакууме, но если бы не появился babel-eslint, ваш "ESPree" до сих пор бы тужился.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812942442151937">5:26</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ладно, это бессмысленно :\( В который раз описываю как конкретно это работает прям сейчас изнутри, а ты называеш…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624812983181426688">5:26</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") babel-eslint - временный хак, в том числе Себ это признает и хочет изменить в сторону стандартов. Он крут, но в…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624813527832748032">5:28</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") я ни разу это не отрицал, если ты не заметил. временный, НО АКТУАЛЬНЫЙ. это куда важнее для проекта, который УЖЕ ЕСТЬ.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624813638642040832">5:29</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") Esprima и Acorn без сомнений сделают полную поддержку ES6 и даже ES7. но когда? сколько месяцев мне ещё не использовать тулзы?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624813830367883264">5:30</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Прочти первый свой твит из которого собственно все началось :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624814084865703938">5:31</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") сегодня у инструментов всё ещё мало шансов. что не так-то? JSCS переводят на babel-jscs просто так?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624814274670559232">5:31</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") как итог – у тебя бомбануло не по теме :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624814616506318848">5:33</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Аргументировал достаточно, и почему ES6 тулзам Babel как парсер вообще не критичен, а ты в ответ начал мне про …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624815215377383424">5:35</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") дай мне рабочие ESLint и JSCS без Babel. аргументировал он :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624815279961288704">5:35</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ммм... я среди тех, кто это в том числе строит в тимке Babel-а.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624815442645811200">5:36</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") такие аргументы никогда не волновали и не будут меня волновать вообще никак :\) будь ты хоть Крокфордом.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624815544332455936">5:36</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Очень рад, что человек, использующий тулзы, обясняет, как надо строить эти самые тулзы :\) Удачи!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624816041911160832">5:38</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") когда придумаешь ответ на мои доводы про ESLint и JSCS, приходи. я как не мог их толком использовать полгода назад,так и не могу
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624816256445607936">5:39</a>

</div>

<div class="tweet">

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") пока ты скатился только "а я авторитет, и кажется знаю, о чём говорю"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624816367682740224">5:40</a>

</div>

<div class="tweet">

спор математика и инженера, блин.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624819457265831937">5:52</a>

</div>

<div class="tweet">

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Та да. Причем, почему-то кажется, каждый из нас видит математика в другом :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624820653758091265">5:57</a>

</div>

<div class="tweet">

RT [@tvii](https://twitter.com/tvii "Vladimir Varankin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а в чем принципиальные отличия, чтобы прям взять все бросить с перейти?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624879370360918016">9:50</a>

</div>

<div class="tweet">

.[@tvii](https://twitter.com/tvii "Vladimir Varankin") нормальная архитектура, нормальные названия правил, выбор между предупреждением и ошибкой, бурное развитие, плагины, сообщество.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624881004574998528">9:56</a>

</div>

<div class="tweet">

.[@tvii](https://twitter.com/tvii "Vladimir Varankin") всё бросать сразу точно не стоит, но попробовать – однозначно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624881419391643648">9:58</a>

</div>

<div class="tweet">

RT [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а есть смысл переходить, если пишешь на es5 и не на react? мне это видится переходом ради перехода
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624887772243857408">10:23</a>

</div>

<div class="tweet">

.[@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") помимо ES6 и прочих JSX смысл есть уже просто потому, что это новое поколение знакомого инструмента [eslint.org/docs/rules/](http://t.co/Z3Gr8BHixJ "http://eslint.org/docs/rules/")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624890628371931136">10:35</a>

</div>

<div class="tweet">

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") можно новое начать писать на ES6
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624890903279218688">10:36</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А причём тут React?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624890924741492736">10:36</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") заметили, как мощно React/JSX зафорсили ES6, что иногда даже одно без другого уже кажется странным? :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624891126701387776">10:37</a>

</div>

<div class="tweet">

\(по большому счёту и JSCS не нужен, codestyle-правил в ESLint по крайней мере для меня уже достаточно\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624892715088543744">10:43</a>

</div>

<div class="tweet">

\(с одной стороны, разделение обязанностей это хорошо, с другой – два разных инструмента это слишком\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624893131398385664">10:45</a>

</div>

<div class="tweet">

btw, husky – "Prevents bad commit or push \(git hooks, pre-commit, pre-push and all that stuff…\)" [github.com/typicode/husky](https://t.co/bgUmZ60heP "https://github.com/typicode/husky")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624893853871411200">10:47</a>

</div>

<div class="tweet">

когда кто-то всерьёз говорит "ES2015" вместо "ES6" \[gif\] [replygif.net/i/100.gif](http://t.co/eqUGi0qO89 "http://replygif.net/i/100.gif")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624895571216564224">10:54</a>

</div>

<div class="tweet">

перестал следить за Node.js + io.js с момента анонса "foundation". что там? мёрдж? роадмапы?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624941181395308544">13:56</a>

</div>

<div class="tweet">

homebrew-rmtree – remove a formula and its unused dependencies [github.com/beeftornado/ho…](https://t.co/lC2JMjZDyC "https://github.com/beeftornado/homebrew-rmtree")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/624948557666086912">14:25</a>

</div>

## Воскресенье <small>116 твитов</small>

<div class="tweet">

RT [@alexfedoseev](https://twitter.com/alexfedoseev "Alex"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") привет! вы проверяете в компонентах propTypes? если да, то есть какой-то регламент \(что проверять, насколько…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625125455763386368">2:08</a>

</div>

<div class="tweet">

.[@alexfedoseev](https://twitter.com/alexfedoseev "Alex") привет. по-хорошему конечно нужно проверять :\) это даже ни столько для валидации, сколько для наглядного представления данных
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625129544169566208">2:24</a>

</div>

<div class="tweet">

.[@alexfedoseev](https://twitter.com/alexfedoseev "Alex") но если у тебя компонент напрямую рисует глубокую структуру данных, то такой компонет явно стоит разбить на несколько.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625129783345545216">2:25</a>

</div>

<div class="tweet">

\(мы даже сделали в Yummies безумный экстенд отдельных файлов с propTypes по слоям, но пока так ни разу не воспользовались\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625130073759203328">2:26</a>

</div>

<div class="tweet">

был хороший issue в тему [github.com/facebook/flow/…](https://t.co/hTKSXRQj1F "https://github.com/facebook/flow/issues/277#event-338421297") – propTypes на фоне нормальной типизации кажется костылём, хоть в нём и есть свои фишки.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625130970316849152">2:30</a>

</div>

<div class="tweet">

\(Flow, конечно, хорош, но он статический "типизатор". по поводу динамической типизации я всё ещё верю в штуки типа [github.com/codemix/babel-…](https://t.co/90obOQPQKU "https://github.com/codemix/babel-plugin-typecheck")\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625133872712323072">2:41</a>

</div>

<div class="tweet">

RT [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сон не нужен? \(:
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625134213969281024">2:43</a>

</div>

<div class="tweet">

.[@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов") у меня уже почти 10 утра
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625134293103194112">2:43</a>

</div>

<div class="tweet">

+ [github.com/gcanti/flowche…](https://t.co/0vBqsGI7Rc "https://github.com/gcanti/flowcheck") + [github.com/gaearon/flowch…](https://t.co/o21PpXTKcn "https://github.com/gaearon/flowcheck-loader")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625134795547279360">2:45</a>

</div>

<div class="tweet">

задумка простая: перед тем как удалять, превращать все flow types annotations в инлайновые ассерты. только в dev-режиме, конечно же.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625135378777804800">2:47</a>

</div>

<div class="tweet">

RT [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и да, typescript тащит!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625135803119710213">2:49</a>

</div>

<div class="tweet">

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rubyunderhood](https://twitter.com/rubyunderhood "Ruby Разработчик") думаю, картинка будет полезна [pic.twitter.com/6tkRlf8CqN](http://t.co/6tkRlf8CqN)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625140747201687553">3:09</a>

</div>

<div class="tweet">

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 1/6 A young developer approached me after a conf talk and said, “You must feel really bad about the failure of object-oriented p…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625208011393400832">7:36</a>

</div>

<div class="tweet">

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 2/6 I was confused. I said, “What do you mean that object-orient programming was a failure. Why do you think that?”
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625208022743126017">7:36</a>

</div>

<div class="tweet">

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 3/6 He said, “OOP was supposed to fix all of our software engineering problems and it clearly hasn’t."
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625208041743343616">7:36</a>

</div>

<div class="tweet">

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 4/6 He continued: "Building software today is just as hard as it was before OOP. came along.”
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625208058084372480">7:36</a>

</div>

<div class="tweet">

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 5/6 I said: “Have you ever look at the programs we were building in the early 1980s? At how limited their functionality and UIs …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625208073439739904">7:36</a>

</div>

<div class="tweet">

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 6/6 OOP has been an incredible success. It enabled us to manage complexity as we grew from 100KB applications to today’s 100MB a…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625208085607387136">7:36</a>

</div>

<div class="tweet">

промежуток времени, через который собственный код уже кажется корявым, стал измеряться не годом, а месяцем. мозг постоянно нагрет.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625210100857225216">7:44</a>

</div>

<div class="tweet">

это точно устаканится в каком-то своём правильном балансе, но хотелось бы, чтобы сам процесс в целом не останавливался никогда.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625210365056397312">7:45</a>

</div>

<div class="tweet">

хуже всего, это когда ты явно застрял, но этого не осознаешь и даже отрицаешь. со стороны обычно очень явно видно, но это редко помогает.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625212236051513344">7:53</a>

</div>

<div class="tweet">

\(я разлогинюсь где-то в 19 по МСК, если осталось что обсудить или спросить – самое время\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625212942955315200">7:55</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда месяц - это хорошо или плохо?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625212989444980736">7:56</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") "минус" – постоянная тяга к рефакторингу. если откровенно запустить, то будет плохо, и не только тебе самому.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625213227484352512">7:57</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") если подойти осознанно и извлечь из этого свои плюсы, то можно действительно улучшить код не просто ради факта переписывания.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625213464366092288">7:58</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну ведь принцип "работает не трогай" всегда останавливает от преждевременного рефакторинга.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625213522557861888">7:58</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") как я заметил, это довольно сильно зависит от проекта. есть такие, где даже думать о рефакторинге нельзя, чтобы не сломать.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625213822765117441">7:59</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") "преждевременный рефакторинг" – это подростковость :\) и рано или поздно проходит, сам таким был ещё недавно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625214066248691712">8:00</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня под это определение попадает любой рабочий и приносящий доход проект
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625214095432617985">8:00</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") именно поэтому я и говорю, что зависит от проекта. можно сопротивляться сколь угодно, то всё равно придётся разделять \[…\]
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625214307341504512">8:01</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") \[…\] "бизнес" и "гик". на каком-то этапе стартапа может показаться, что это одно и то же, но это ловушка.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625214430087745536">8:01</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") согласен. Но ту точку где рефакторинг необходим, нам надо как-то обозначить в этом треде
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625214574757679104">8:02</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") для меня такой точкой часто является факт "блин, надо поправить казалось бы мелочь, но всё так плохо, что даже это страшно".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625214761458765824">8:03</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") если ОЧЕНЬ сложно вносить изменения в работающий проект, то нужно хотя бы подумать о том, чего будет стоить новая архитекрута
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625214997652594689">8:04</a>

</div>

<div class="tweet">

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") \*иногда\* в это удачно можно вплести "бизнес", аргументировав тем, что затраты на поддержку в текущем виде дороже рефакторинга
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625215183858700288">8:04</a>

</div>

<div class="tweet">

учусь определять зрелость разработчика \(как человека в том числе\) по его код-стайлу. в этом есть свои отчётливые закономерности.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625215935440261120">8:07</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот здесь полностью согласен. Рефакторинг ценен только тогда когда ты вносишь требуемые изменения в проект.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625215971045715969">8:07</a>

</div>

<div class="tweet">

это отражение внутреннего состояния, как если бы вы рисовали картины для психолога. и программиста-подростка,которому уже за 30, сразу видно
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625216217284915204">8:08</a>

</div>

<div class="tweet">

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Какие?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625216368011423745">8:09</a>

</div>

<div class="tweet">

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") умение думать о других. не тупо "специально" писать слишком вербозный код, а иметь как личное качество на привычном обычном уровне
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625216991922536448">8:12</a>

</div>

<div class="tweet">

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") обилие вложенных тернарных операторов и прочие однострочники от тех, кто не наигрался в своё время на [140byt.es](http://t.co/XWWuT4tUXU "http://www.140byt.es/")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625217314015686656">8:13</a>

</div>

<div class="tweet">

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") отсутствие даже единственной строчки с комментарием под предлогом "нормальный программист и так поймёт".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625217478650494976">8:13</a>

</div>

<div class="tweet">

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") однажды я добавлял на страницу кнопку больше недели.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625217515778543618">8:14</a>

</div>

<div class="tweet">

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А как от такого избавляться?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625217669805948928">8:14</a>

</div>

<div class="tweet">

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") научиться допускать, что если ты слышишь о своей проблеме более, чем от одного человека, то возможно в этом что-то есть.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625217757840183296">8:15</a>

</div>

<div class="tweet">

самый треш – "кто не понял как работают мои выглядящие как перл три строчки кода, тот тупой и просто не дотягивает до моего уровня".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625218187039109124">8:16</a>

</div>

<div class="tweet">

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как объяснили это заказчикам, если это был enterprise ?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625218286045650946">8:17</a>

</div>

<div class="tweet">

ультрагиком хорошо быть, когда ты мальчишка, и все вокруг тебя тоже мальчишки, и вы меряетесь странными для обычных людей письками.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625218651411476480">8:18</a>

</div>

<div class="tweet">

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это был крупный соцсервис, с миллионом а/б тестов, из за них это и произошло, и из за отсутств…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625219046972112896">8:20</a>

</div>

<div class="tweet">

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кнопочку то я вставил быстро, неделю я делал так что бы она одинаково везде работала
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625219445619716096">8:21</a>

</div>

<div class="tweet">

чаще всего такие люди физически не способны доводить начатые проекты до конца, т.к. одно дело набросать прототип с однострочными while \[...\]
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625219684573384705">8:22</a>

</div>

<div class="tweet">

\[…\] циклами без "лишних скобок", а другое дело жить с этим, думать про внешний API и т.п… быть ответственным, вот.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625219851603193856">8:23</a>

</div>

<div class="tweet">

вспомните своих коллег, у каждого такой есть :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625220048211312640">8:24</a>

</div>

<div class="tweet">

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ха. у нас на поддержке старый гос. интерпрайз. Кнопочку туда месяц как-то вставляли.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625220127970078722">8:24</a>

</div>

<div class="tweet">

Я КНОПОЧКУ ДО СИХ ПОР ВСТАВЛЯЮ, УЖЕ 30 ЛЕТ ЖИВУ.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625220197285105664">8:24</a>

</div>

<div class="tweet">

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если рефакторинг снижает стоимость владения продуктом в дальнейшем, то вот и точка.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625230661876494336">9:06</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот глянул код полугодовалой давности..
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625230681396752384">9:06</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") даже не знаю, у меня такого нет, причины почему код был написан так или иначе мне как-то понятны..
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625230689122697216">9:06</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Причем всегда известно, какие есть опции по улучшению/изменению. Но чаще объективных причин менять нет.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625230696554958848">9:06</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") код должен быть выразительным и без мусора.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625230901845168128">9:07</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Даже очень краткий код может быть хорошо понимаем без комментариев \(при достаточной квалификации\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625230910292557824">9:07</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") может, когда это действительно искусное владение. а может и нет, когда это 1\) самоцель 2\) ЧСВ
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625231135530860544">9:08</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") причины-то понятны. я наверное больше про то, что я пока ещё явно не постиг все паттерны и не всегда умею писать сразу "правильно".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625231742438260737">9:10</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и такое бывает \)\). По себе знаю, иногда приходится бороться с порывами повыпендриваться \).
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625231815381401600">9:10</a>

</div>

<div class="tweet">

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") иногда нужно просто отложить вставлялку в сторону и отпустить в продакшен.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625231827159007232">9:10</a>

</div>

<div class="tweet">

RT [@mr\_apt](https://twitter.com/mr_apt "TOMAT"): [@vladimore](https://twitter.com/vladimore "Waldemar") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если любишь отпусти
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625232245620523008">9:12</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") надо перестать заморачиваться, оно само придет \). Главное грамотная постановка задачи \(тесты\), а способ найдется.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625232422729293824">9:13</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") вот трушный TDD – пока мечта. это явный показатель очень высокого уровня.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625232553679519744">9:13</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") Вот да, всегда уважаю людей которые могут понять задачу до написания кода, чтобы на неё написать тесты.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625233531065667585">9:17</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это и есть итеративный подход. Нет идеальной схемы, это как лепка из пластилина \)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625234897125289984">9:23</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну вот похоже скилл программиста это сколько тебе надо итераций, чтобы сделать правильно какую-то фичу.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625234906218565633">9:23</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Правильно - это чтобы соответствовало внешним требованиям и не сгнило после того как они совсем поменял…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625235031372361728">9:23</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") к сожалению, в коммерческой разработке инженеру не доносят задачу цельно. Поэтому и цель размывается. И качество ст…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625235178084917248">9:24</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А вот те, кто не мыслит итерациями, на самом деле они находятся внутри одной бесконечной итерации \)\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625236872168472576">9:31</a>

</div>

<div class="tweet">

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@freiksenet](https://twitter.com/freiksenet "freiksenet") так, у нас тут один словил МакКонахи, вызывайте помощь.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625237040431415296">9:31</a>

</div>

<div class="tweet">

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") то есть профессионалу нужно смириться со своим несовершенством и только тогда выйдет что-то стоящее
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625237180013645824">9:32</a>

</div>

<div class="tweet">

а как вам такое – "преждевременный отказ от копипасты"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625239695111229440">9:42</a>

</div>

<div class="tweet">

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мне помогли в этом книги о физиологии мозга. Ошибки - обязательная часть обучения.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625241132788682752">9:47</a>

</div>

<div class="tweet">

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") преждевременный отказ от говнокода
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625244082793660420">9:59</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@vladimore](https://twitter.com/vladimore "Waldemar") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Да меня не пугают мои ошибки, меня восхищают люди которые их делают меньше чем я при схожей …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625244109662367744">9:59</a>

</div>

<div class="tweet">

.[@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") оттягивание коммита "it just works"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625246277672939520">10:08</a>

</div>

<div class="tweet">

RT [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") проблема большинства программистов - инфантелизм. Отсюда и бескончные размышления о коде как о высшей ценности.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625249654356049920">10:21</a>

</div>

<div class="tweet">

[pic.twitter.com/6uDrgh3c4Y](http://t.co/6uDrgh3c4Y)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625250682501632001">10:25</a>

</div>

<div class="tweet">

RT [@int16h](https://twitter.com/int16h "⠀KØLIBABCHUK"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [pic.twitter.com/AoqHwjWsKr](http://t.co/AoqHwjWsKr)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625250782292512768">10:26</a>

</div>

<div class="tweet">

RT [@apostololeg](https://twitter.com/apostololeg "^_^"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда N обработчиков с 80% копипаста лучше, чем один обработчик c декларацией параметров для них ?  
https://t.[jsfiddle.net/trnt/savrdygy/](https://t.co/rk1bR3lDXo "https://jsfiddle.net/trnt/savrdygy/")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625259021474238468">10:59</a>

</div>

<div class="tweet">

.[@apostololeg](https://twitter.com/apostololeg "^_^") когда один обработчик становится слишком полиморфным и сложным
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625259181482774529">10:59</a>

</div>

<div class="tweet">

RT [@arik0n](https://twitter.com/arik0n "Sergey Belov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мастерство, это когда не только сам пишешь хорошо, но когда ты senior, и все в команде пишут как надо \(пусть не с …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625259262424412160">10:59</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как делать TDD на фронтенде? И вообще как хорошо тестировать фронтенд?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625259298952589312">11:00</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") karma + mocha + chai + sinon
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625259406821715968">11:00</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") + istanbul. dev-режим с вотчером в карме прекрасен, как раз для вывода на отдельный монитор при TDD.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625259678247710720">11:01</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну технологии я знаю. Меня интересует процесс, как сделать тест не имея ещё, например, реакт компонента.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625260121338155008">11:03</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Насколько полезно мерить code coverage? Мы не меряем, хотя и стараемся хорошо тестировать и требовать тесты в …
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625262661991661568">11:13</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Что нам даст code coverage?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625262669851787264">11:13</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") даст понимание, какие условия, циклы и даже целые методы не покрыты тестами вообще никак.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625262827784175616">11:14</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") без визуального представления связь тестов с реальным кодом слабовата даже у автора кода. сложно представить каждую мелочь.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625263094168551425">11:15</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") задрачивать покрытие на 100% рационально разве что на небольших проектах. задача №1 – убедиться, что покрыто то, что должно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625263550592741376">11:17</a>

</div>

<div class="tweet">

ну или если это действительно критично [github.com/babel/babel/is…](https://t.co/PYU2JY836v "https://github.com/babel/babel/issues/1851")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625264302786658304">11:20</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") код Babel довольно сильно меняется, отсюда потребность сразу видеть то, что из нового или переделанного старого не покрыто.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625266202508554241">11:27</a>

</div>

<div class="tweet">

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") т.е. тесты после рефакторинга могут и не валиться, но это ещё не идеальный результат.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625266410978017284">11:28</a>

</div>

<div class="tweet">

прикрутить покрытие тестов к нормальному проекту можно и за полчаса, а \*потенциальный\* профит куда круче.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625266913820577792">11:30</a>

</div>

<div class="tweet">

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Когда у тебя очевидный ввод и вывод в программе, как в babel, то тестировать не так сложно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625267440033755137">11:32</a>

</div>

<div class="tweet">

чем умнее программист, тем тупее его функции [pic.twitter.com/Fw3a6BSZqk](http://t.co/Fw3a6BSZqk)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625268617047703552">11:37</a>

</div>

<div class="tweet">

RT [@superv1s0r](https://twitter.com/superv1s0r "Александр Коротков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нормальному?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625268963614724096">11:38</a>

</div>

<div class="tweet">

.[@superv1s0r](https://twitter.com/superv1s0r "Александр Коротков") ну в смысле прикрутить к проекту новый инструмент не составляет труда :\) бывает же всякое.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625269103062683648">11:39</a>

</div>

<div class="tweet">

RT [@illbullet](https://twitter.com/illbullet "Ill Bullet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@freiksenet](https://twitter.com/freiksenet "freiksenet")  что про tape думаете/знаете?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625276692475424768">12:09</a>

</div>

<div class="tweet">

.[@illbullet](https://twitter.com/illbullet "Ill Bullet") [@freiksenet](https://twitter.com/freiksenet "freiksenet") знал, что он есть, и что это в каком-то смысле альтернатива mocha. вот пошёл читать подробно [medium.com/javascript-sce…](https://t.co/qjN6O5iJyy "https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625276886717894656">12:10</a>

</div>

<div class="tweet">

.[@illbullet](https://twitter.com/illbullet "Ill Bullet") [@freiksenet](https://twitter.com/freiksenet "freiksenet") а можно преимущества в своих двух словах?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625276999339085824">12:10</a>

</div>

<div class="tweet">

RT [@mostolovista](https://twitter.com/mostolovista "Georgiy Mostolovitsa"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") помню, как один БЭМ-разработчик, слово в слово такое выдавал.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625277144680103937">12:11</a>

</div>

<div class="tweet">

.[@mostolovista](https://twitter.com/mostolovista "Georgiy Mostolovitsa") потом его конечно в дурку забрали?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625277170055692289">12:11</a>

</div>

<div class="tweet">

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") о, да! Однажды я решил что ифы не нужны — есть же тернарки. Потом правда одумался, но 2 проекта так написа[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625278023156170752">12:14</a>

</div>

<div class="tweet">

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") [pic.twitter.com/mXDcV16Huk](http://t.co/mXDcV16Huk)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625278133470564353">12:14</a>

</div>

<div class="tweet">

эту забавную неделю с вами был [@deepsweet](https://twitter.com/deepsweet " k i r"). надеюсь, что было интересно, спасибо всем за общение :\) логи будут здесь [jsunderhood.ru/deepsweet](https://t.co/mwSBEsyWtI "https://jsunderhood.ru/deepsweet")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625301987110731776">13:49</a>

</div>

<div class="tweet">

часто говоря "мы" я имел в виду себя и [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") – моего коллегу, напарника по парному программированию и просто хорошего трансгендера.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625302262269620224">13:50</a>

</div>

<div class="tweet">

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в штанах у тебя трансгендер
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625302696560476164">13:52</a>

</div>

<div class="tweet">

так и живём :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625302740449624064">13:52</a>

</div>

<div class="tweet">

ещё увидимся в каком-нибудь cljsunderhood. логаут.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/625303784055439360">13:56</a>

</div>

## Ссылки

### github.com  
<a href="https://github.com/css-modules/css-modules/blob/master/examples/theming.md#theming" target="_blank">https://github.com/css-modules/css-modules/blob/master/examples/theming.md#theming</a>  
<a href="https://github.com/webpack/css-loader#local-scope" target="_blank">https://github.com/webpack/css-loader#local-scope</a>  
<a href="https://github.com/css-modules" target="_blank">https://github.com/css-modules</a>  
<a href="https://github.com/yummies/yummies" target="_blank">https://github.com/yummies/yummies</a>  
<a href="https://github.com/yummies/babel-plugin-yummies" target="_blank">https://github.com/yummies/babel-plugin-yummies</a>  
<a href="https://github.com/yummies/generator-yummies-repo/blob/master/app/templates/CONTRIBUTING.md#commit-emojis" target="_blank">https://github.com/yummies/generator-yummies-repo/blob/master/app/templates/CONTRIBUTING.md#commit-emojis</a>  
<a href="https://github.com/cdebotton/react-universal" target="_blank">https://github.com/cdebotton/react-universal</a>  
<a href="https://github.com/yummies/yummies#overview" target="_blank">https://github.com/yummies/yummies#overview</a>  
<a href="https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6" target="_blank">https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6</a>  
<a href="https://github.com/yummies/theme-reset" target="_blank">https://github.com/yummies/theme-reset</a>  
<a href="https://github.com/yummies/babel-plugin-yummies#mods" target="_blank">https://github.com/yummies/babel-plugin-yummies#mods</a>  
<a href="https://github.com/yummies/starter-kit" target="_blank">https://github.com/yummies/starter-kit</a>  
<a href="https://github.com/sebmarkbage/ecmascript-rest-spread" target="_blank">https://github.com/sebmarkbage/ecmascript-rest-spread</a>  
<a href="https://github.com/tc39/ecma262" target="_blank">https://github.com/tc39/ecma262</a>  
<a href="https://github.com/luisfarzati/json-chance" target="_blank">https://github.com/luisfarzati/json-chance</a>  
<a href="https://github.com/xgrommx/awesome-redux" target="_blank">https://github.com/xgrommx/awesome-redux</a>  
<a href="https://github.com/facebook/immutable-js/tree/master/contrib/cursor" target="_blank">https://github.com/facebook/immutable-js/tree/master/contrib/cursor</a>  
<a href="https://github.com/Yomguithereal/baobab" target="_blank">https://github.com/Yomguithereal/baobab</a>  
<a href="https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23" target="_blank">https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23</a>  
<a href="https://github.com/sindresorhus" target="_blank">https://github.com/sindresorhus</a>  
<a href="https://github.com/sindresorhus/cat-names" target="_blank">https://github.com/sindresorhus/cat-names</a>  
<a href="https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L14-L16" target="_blank">https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L14-L16</a>  
<a href="https://github.com/gaearon/redux/blob/improve-docs/docs/store.md" target="_blank">https://github.com/gaearon/redux/blob/improve-docs/docs/store.md</a>  
<a href="https://github.com/alexeyraspopov/flux-stateful" target="_blank">https://github.com/alexeyraspopov/flux-stateful</a>  
<a href="https://github.com/yahoo/react-intl" target="_blank">https://github.com/yahoo/react-intl</a>  
<a href="https://github.com/piranha/puttext" target="_blank">https://github.com/piranha/puttext</a>  
<a href="https://github.com/bevacqua/woofmark" target="_blank">https://github.com/bevacqua/woofmark</a>  
<a href="https://github.com/RickWong/react-isomorphic-starterkit" target="_blank">https://github.com/RickWong/react-isomorphic-starterkit</a>  
<a href="https://github.com/webpack/react-starter" target="_blank">https://github.com/webpack/react-starter</a>  
<a href="https://github.com/DavidWells/isomorphic-react-example" target="_blank">https://github.com/DavidWells/isomorphic-react-example</a>  
<a href="https://github.com/rackt/react-router" target="_blank">https://github.com/rackt/react-router</a>  
<a href="https://github.com/matthew-andrews/isomorphic-fetch" target="_blank">https://github.com/matthew-andrews/isomorphic-fetch</a>  
<a href="https://github.com/facebook/react/issues/3009" target="_blank">https://github.com/facebook/react/issues/3009</a>  
<a href="https://github.com/douglasduteil/isparta/issues/31#issuecomment-123894638" target="_blank">https://github.com/douglasduteil/isparta/issues/31#issuecomment-123894638</a>  
<a href="https://github.com/deepsweet/istanbul-instrumenter-loader" target="_blank">https://github.com/deepsweet/istanbul-instrumenter-loader</a>  
<a href="https://github.com/deepsweet/isparta-loader" target="_blank">https://github.com/deepsweet/isparta-loader</a>  
<a href="https://github.com/tmpvar/jsdom" target="_blank">https://github.com/tmpvar/jsdom</a>  
<a href="https://github.com/rstacruz/mocha-jsdom" target="_blank">https://github.com/rstacruz/mocha-jsdom</a>  
<a href="https://github.com/erikras/react-redux-universal-hot-example" target="_blank">https://github.com/erikras/react-redux-universal-hot-example</a>  
<a href="https://github.com/ShpuntiK/isomorphic-app-sample" target="_blank">https://github.com/ShpuntiK/isomorphic-app-sample</a>  
<a href="https://github.com/babel/babel/tree/master/packages/babylon" target="_blank">https://github.com/babel/babel/tree/master/packages/babylon</a>  
<a href="https://github.com/codemix/babel-plugin-typecheck" target="_blank">https://github.com/codemix/babel-plugin-typecheck</a>  
<a href="https://github.com/babel/babel/blob/master/packages/babel/src/util.js" target="_blank">https://github.com/babel/babel/blob/master/packages/babel/src/util.js</a>  
<a href="https://github.com/babel-plugins/babel-plugin-flow-comments" target="_blank">https://github.com/babel-plugins/babel-plugin-flow-comments</a>  
<a href="https://github.com/rambler-digital-solutions/superagent-mocker" target="_blank">https://github.com/rambler-digital-solutions/superagent-mocker</a>  
<a href="https://github.com/Microsoft/TypeScript/wiki/Roadmap" target="_blank">https://github.com/Microsoft/TypeScript/wiki/Roadmap</a>  
<a href="https://github.com/Yomguithereal/baobab/wiki/Select-state" target="_blank">https://github.com/Yomguithereal/baobab/wiki/Select-state</a>  
<a href="https://github.com/Yomguithereal/baobab/tree/v2" target="_blank">https://github.com/Yomguithereal/baobab/tree/v2</a>  
<a href="https://github.com/gaearon/redux/tree/rewrite-docs" target="_blank">https://github.com/gaearon/redux/tree/rewrite-docs</a>  
<a href="https://github.com/mquan/cortex" target="_blank">https://github.com/mquan/cortex</a>  
<a href="https://github.com/enaqx/awesome-react#data-managing" target="_blank">https://github.com/enaqx/awesome-react#data-managing</a>  
<a href="https://github.com/tonsky/datascript" target="_blank">https://github.com/tonsky/datascript</a>  
<a href="https://github.com/aserg-ufmg/JSCity/wiki/JSCITY" target="_blank">https://github.com/aserg-ufmg/JSCity/wiki/JSCITY</a>  
<a href="https://github.com/chriso/validator.js" target="_blank">https://github.com/chriso/validator.js</a>  
<a href="https://github.com/gcanti/tcomb-form" target="_blank">https://github.com/gcanti/tcomb-form</a>  
<a href="https://github.com/insin/newforms" target="_blank">https://github.com/insin/newforms</a>  
<a href="https://github.com/mistadikay/react-auto-fetching-example/blob/doob/src/components/product/index.es6#L8-L17" target="_blank">https://github.com/mistadikay/react-auto-fetching-example/blob/doob/src/components/product/index.es6#L8-L17</a>  
<a href="https://github.com/christianalfoni/formsy-react" target="_blank">https://github.com/christianalfoni/formsy-react</a>  
<a href="https://github.com/mistadikay/doob" target="_blank">https://github.com/mistadikay/doob</a>  
<a href="https://github.com/teropa/angular-virtual-dom" target="_blank">https://github.com/teropa/angular-virtual-dom</a>  
<a href="https://github.com/babel/babel-eslint" target="_blank">https://github.com/babel/babel-eslint</a>  
<a href="https://github.com/babel/eslint-plugin-babel" target="_blank">https://github.com/babel/eslint-plugin-babel</a>  
<a href="https://github.com/yannickcr/eslint-plugin-react" target="_blank">https://github.com/yannickcr/eslint-plugin-react</a>  
<a href="https://github.com/estree/estree" target="_blank">https://github.com/estree/estree</a>  
<a href="https://github.com/typicode/husky" target="_blank">https://github.com/typicode/husky</a>  
<a href="https://github.com/beeftornado/homebrew-rmtree" target="_blank">https://github.com/beeftornado/homebrew-rmtree</a>  
<a href="https://github.com/facebook/flow/issues/277#event-338421297" target="_blank">https://github.com/facebook/flow/issues/277#event-338421297</a>  
<a href="https://github.com/gcanti/flowcheck" target="_blank">https://github.com/gcanti/flowcheck</a>  
<a href="https://github.com/gaearon/flowcheck-loader" target="_blank">https://github.com/gaearon/flowcheck-loader</a>  
<a href="https://github.com/babel/babel/issues/1851" target="_blank">https://github.com/babel/babel/issues/1851</a>

### Другие

<a href="https://gist.github.com/deepsweet/15c8f2eb3a85004adad0" target="_blank">https://gist.github.com/deepsweet/15c8f2eb3a85004adad0</a>  
<a href="https://gist.github.com/afitiskin/a65c26ff923d13788980" target="_blank">https://gist.github.com/afitiskin/a65c26ff923d13788980</a>  
<a href="http://xgrommx.github.io/rx-book/content/similar_libraries/index.html" target="_blank">http://xgrommx.github.io/rx-book/content/similar_libraries/index.html</a>  
<a href="https://www.youtube.com/watch?v=I7IdS-PbEgI" target="_blank">https://www.youtube.com/watch?v=I7IdS-PbEgI</a>  
<a href="http://www.youtube.com/watch?v=lDkrXTDwbJQ" target="_blank">http://www.youtube.com/watch?v=lDkrXTDwbJQ</a>  
<a href="http://www.youtube.com/watch?v=tUtLe1VlkYc" target="_blank">http://www.youtube.com/watch?v=tUtLe1VlkYc</a>  
<a href="https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852" target="_blank">https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852</a>  
<a href="https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2" target="_blank">https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2</a>  
<a href="https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247" target="_blank">https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247</a>  
<a href="https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4" target="_blank">https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4</a>  
<a href="http://alt.js.org" target="_blank">http://alt.js.org</a>  
<a href="https://docs.google.com/spreadsheets/d/1TZPdUYDx6D1NWBXp_6NNtJ-NeVW6pudx3C9SkYSXI18/edit#gid=0" target="_blank">https://docs.google.com/spreadsheets/d/1TZPdUYDx6D1NWBXp_6NNtJ-NeVW6pudx3C9SkYSXI18/edit#gid=0</a>  
<a href="http://codepen.io/SitePoint/pen/VLXyZw" target="_blank">http://codepen.io/SitePoint/pen/VLXyZw</a>  
<a href="https://facebook.github.io/react/docs/top-level-api.html" target="_blank">https://facebook.github.io/react/docs/top-level-api.html</a>  
<a href="https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html" target="_blank">https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html</a>  
<a href="https://facebook.github.io/react/docs/why-react.html" target="_blank">https://facebook.github.io/react/docs/why-react.html</a>  
<a href="https://facebook.github.io/react/docs/test-utils.html" target="_blank">https://facebook.github.io/react/docs/test-utils.html</a>  
<a href="http://koajs.com/" target="_blank">http://koajs.com/</a>  
<a href="http://visionmedia.github.com/superagent/" target="_blank">http://visionmedia.github.com/superagent/</a>  
<a href="http://bit.ly/1TPnKSn" target="_blank">http://bit.ly/1TPnKSn</a>  
<a href="https://webpack.github.io/docs/library-and-externals.html" target="_blank">https://webpack.github.io/docs/library-and-externals.html</a>  
<a href="https://jsunderhood.ru/" target="_blank">https://jsunderhood.ru/</a>  
<a href="https://jsunderhood.ru/deepsweet" target="_blank">https://jsunderhood.ru/deepsweet</a>  
<a href="http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome" target="_blank">http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome</a>  
<a href="http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/" target="_blank">http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/</a>  
<a href="http://pioneerjs.com/" target="_blank">http://pioneerjs.com/</a>  
<a href="http://shpuntik.github.io/isomorphic-apps-presentation" target="_blank">http://shpuntik.github.io/isomorphic-apps-presentation</a>  
<a href="http://webdriver.io" target="_blank">http://webdriver.io</a>  
<a href="http://flowtype.org/docs/quick-reference.html" target="_blank">http://flowtype.org/docs/quick-reference.html</a>  
<a href="http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/" target="_blank">http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/</a>  
<a href="http://angular-formly.com" target="_blank">http://angular-formly.com</a>  
<a href="http://status.coveralls.io/" target="_blank">http://status.coveralls.io/</a>  
<a href="http://eslint.org/blog/2015/07/eslint-1.0.0-rc-3-released/#reset-is-now-the-default" target="_blank">http://eslint.org/blog/2015/07/eslint-1.0.0-rc-3-released/#reset-is-now-the-default</a>  
<a href="http://eslint.org/docs/rules/" target="_blank">http://eslint.org/docs/rules/</a>  
<a href="http://replygif.net/i/100.gif" target="_blank">http://replygif.net/i/100.gif</a>  
<a href="http://www.140byt.es/" target="_blank">http://www.140byt.es/</a>  
<a href="https://jsfiddle.net/trnt/savrdygy/" target="_blank">https://jsfiddle.net/trnt/savrdygy/</a>
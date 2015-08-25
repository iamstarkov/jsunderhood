# deepsweet

_26 июля 2015_

## Понедельник <small>67 твитов</small>

всем привет, эту неделю с вами будет [@deepsweet](https://twitter.com/deepsweet " k i r"). меня зовут Кир, кто-то может помнить меня по Яндексу, для остальных я просто JS-разработчик

т.к. у меня GMT+7 и вы скорей всего спите, я пока поспамлю темами, на которые мне было бы интересно поговорить :\)

webpack, Babel, React, Flux, BEM \(в хорошем смысле\), изоморфность, фотки тупых людей, иммутабельность, парное программирование, Вьетнам.

RT [@ivan\_krivonos](https://twitter.com/ivan_krivonos "Иван Кривонос"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") GMT +7 это какой город?\)

.[@ivan\_krivonos](https://twitter.com/ivan_krivonos "Иван Кривонос") Хошимин

на текущей работе есть всё из этого списка, очень красиво переплетённое. да-да, React + BEM :\) с наследованием по уровням переопределения.

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") уже смотрели в сторону CSS Modules? Может ли этот концепт заменить BEM? Насколько вообще оно практично?

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") да, смотрели ещё с первых коммитов в css-loader – сама идея уникального локального скоупа для стилей компонента заманчивая.

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") но лично мне совсем не нравится подход к внедрению этого в React – [github.com\/css-modules\/cs…](https://t.co/tekip9QFqk "https://github.com/css-modules/css-modules/blob/master/examples/theming.md#theming") – когда компонент думает о теме.

для всех – тема CSS Modules началась примерно отсюда [github.com\/webpack\/css-lo…](https://t.co/I9nbsCi5Dm "https://github.com/webpack/css-loader#local-scope"), и развивается дальше здесь [github.com\/css-modules](https://t.co/Ivf0SsyjZx "https://github.com/css-modules")

идея в чём-то гениальна: css-loader для webpack превращает классы из стилей в хэши, которые потом экспортируются как из обычного js-модуля.

дальше где-то, где эти стили нужны \(в том же react-компоненте\), они импортируются, и появляется доступ к маппингу "класс -&gt; хэш".

но для уникальных хэшей всё равно нужны уникальные классы, и для этого внутри стилей вполне можно использовать то же BEM-именование.

в итоге получается такая себе автоматизированная связка BEM + &lt;style scoped&gt; без лишней боли по поводу конфликтов и пересечений.

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") разве уникальные? Можно использовать одни и те же имена в разных файлах и они будут разруливаться без конф…

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") я имею в виду, что внутри файлов стилей всё равно нужно как-то именовать классы, и идея BEM \(например\) здесь очень подходит

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") я ведь правильно понял, что одни и те же селекторы из разных файлов будут иметь одни и те же одинаковые хэши?

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нет, разные. В это вся фишка — никакого конфликта имен между файлами

.[@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") а если у меня стили для одного компонента находятся в разных файлах? судя по докам берётся хэш от внутренностей :local\(\)…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У вас есть где-то снаружи project-stub или мини-проект, где можно увидеть как именно это красиво переплетено?

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") "стаба" нет, мы слишком ленивые и занятые. есть только все нужные технологии [github.com\/yummies\/yummies](https://t.co/JfwnUFvEeX "https://github.com/yummies/yummies") + [github.com\/yummies\/babel-…](https://t.co/TpvMzn8asB "https://github.com/yummies/babel-plugin-yummies")

кстати, как вам затея с эмоджи в коммитах? [github.com\/yummies\/genera…](https://t.co/8RB2j8G8Os "https://github.com/yummies/generator-yummies-repo/blob/master/app/templates/CONTRIBUTING.md#commit-emojis") 😼

RT [@kompotium](https://twitter.com/kompotium "Anton Fedchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") мне вот этот стартер кит понравился из последних [github.com\/cdebotton\/reac…](https://t.co/QJxzy1fkNs "https://github.com/cdebotton/react-universal") там есть css modules

собственно, основная идея React + BEM в том, что JSX – говно, а BEMJSON – добро [github.com\/yummies\/yummie…](https://t.co/tXgceVaD8Y "https://github.com/yummies/yummies#overview")

дальше – наследование [github.com\/yummies\/core-c…](https://t.co/wJBZRIWcSP "https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6"), ещё дальше – "уровни переопределения" или, как мы их называем, "слои" [github.com\/yummies\/babel-…](https://t.co/TpvMzn8asB "https://github.com/yummies/babel-plugin-yummies")

BEM-модификатор – это класс, который \(автоматически\) наследуется от класса react-компонента и до\/переопределяет BEMJSON из его render\(\)'а.

про это всё определённо нужна отдельная статья + отдельный стартер-кит, но я уже даже не решаюсь давать обещания, всё тянется уже с мая.

самое крутое, что это в принципе никак не отменяет ни компоненты высшего порядка, ни декораторы, ни прочие подходы. очень удачно уложилось.

уже в черновиках статья. в целом – Flux может быть абсолютно любым. RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на чью реализацию похож ваш [flux](https://twitter.com/search?q=%23flux) ?

завтра будет день Flux: иммутабельные деревья, единое состояние, курсоры, GraphQL-like декларативность, префетчинг на сервере, изоморфность.

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как вы относитесь к [@WebComponents](https://twitter.com/WebComponents "Web Components")  ? Правда ли что появление [react](https://twitter.com/search?q=%23react) есть следствие провала компонентов ?

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") личное моё мнение – это мертворожденная технология, которую зря пытаются форсить. React появился из-за общей убогости DOM.

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") с другой стороны, возможно ещё просто не пришло время, и появление "shady DOM" вместо полноценного Shadow DOM тому пример.

RT [@operatino](https://twitter.com/operatino "Robert Haritonov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как уровни переопределения работают в этой связке? В html.

.[@operatino](https://twitter.com/operatino "Robert Haritonov") в конечном итоге импортируется фабрика уже собранного и склеенного по всем уровням реакт-компонента.

.[@operatino](https://twitter.com/operatino "Robert Haritonov") можно до\/переопределять что угодно, как в BEMHTML, хоть тэг, хоть внутренности.

довольно интересная концепция получилась с "темами" – тема просто является отдельным слоем, начиная с темы "reset" [github.com\/yummies\/theme-…](https://t.co/PBHDgGzA5J "https://github.com/yummies/theme-reset")

RT [@operatino](https://twitter.com/operatino "Robert Haritonov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") То есть это кастомная реализация сборки с мерджем компонентов? Без БЭМ шаблонизаторов? Какие тулзы замешаны?

.[@operatino](https://twitter.com/operatino "Robert Haritonov") основа – webpack + Babel, кастомной сборки как таковой нет, всё нужное уже есть в webpack + немного магии через babel-плагин.

пример корневого \`.yummies.yml\` из внутреннего проекта [gist.github.com\/deepsweet\/15c8…](https://t.co/rm2jmteBMg "https://gist.github.com/deepsweet/15c8f2eb3a85004adad0")

видимо эта неделя наконец-то заставит нас с [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") сделать starter-kit.

магия заключается в спец. \#-импорте:

import Example from '[example](https://twitter.com/search?q=%23example)';
import ExampleTypeTestSizeBig from '[example](https://twitter.com/search?q=%23example)?\_type=test&amp;\_size=big';

Babel-плагин матчится на символ \`\#\` в импорте и начинает искать файлы по слоям из конфига. находит – включает в цепочку наследований.

в конечном итоге в Example попадает обычная фабрика реактового компонента, который отнаследован по очереди от класса каждого слоя.

↓ [github.com\/yummies\/babel-…](https://t.co/MGoroGYIrb "https://github.com/yummies/babel-plugin-yummies#mods")

пример модификатора [github.com\/yummies\/core-c…](https://t.co/wJBZRIEBuf "https://github.com/yummies/core-components/blob/master/components/input/_type/search/index.es6") – \`super.render\(\)\`

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") много времени уже прошло, не сожалеешь? :\)
1. что ушел из яндексов 2. что переехал во Вьетнам

.[@silentroach](https://twitter.com/silentroach "Игорь") 1\) не сожалею, по-моему я ушёл очень вовремя 2\) уже жалею :\) но опыт жизни в Азии всё равно очень интересный и бесценный.

RT [@verkholantsev](https://twitter.com/verkholantsev "billy shears"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Почему жалеешь? Что не так с Вьетнамом?

.[@verkholantsev](https://twitter.com/verkholantsev "billy shears") это страна, в которой уровень экономического развития слишком резко и быстро обогнал уровень сознания. со всеми вытекающими.

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что думаешь про redux?

.[@silentroach](https://twitter.com/silentroach "Игорь") Redux – крутой, но меня не покидает ощущение, что это какой-то мимолётный промежуточный этап, как и webpack HMR в целом.

RT [@thought\_sync](https://twitter.com/thought_sync "Vyacheslav"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@silentroach](https://twitter.com/silentroach "Игорь") а как быть тогда, какую flux либу использовать?

.[@thought\_sync](https://twitter.com/thought_sync "Vyacheslav") [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@silentroach](https://twitter.com/silentroach "Игорь") сегодня – Redux :\) мой ответ был немного не о том, что Redux не надо использовать.

Flux хорош именно тем, что это сначала концепция, а уже потом – реализация. мы на первом проекте делали с нуля руками, чтобы прочувствовать.

главное сильно и навсегда не залипнуть на "каноническом" Flux, это лишь начало :\) завтра будут стримы, а послезавтра одно лишь телевидение.

RT [@bagadim](https://twitter.com/bagadim "Baga"): [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") смотря что называть мимолетным. Для кого-то - 5 лет. Для фронтенда год-два быть в топе - очень кру…

RT [@beshur](https://twitter.com/beshur "Shu Buznik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему Въетнам? Как там ощущения вне офиса \(или где вы работаете\)? Долго там уже?

.[@beshur](https://twitter.com/beshur "Shu Buznik") почему – без понятия, просто было интересно :\) вне офиса круглый год душное и влажное лето лето. вот уже почти год как живём.

.[@beshur](https://twitter.com/beshur "Shu Buznik") почему – без понятия, просто было интересно :\) вне офиса круглый год душное и влажное лето. вот уже почти год как живём.

быстро набросал кое-какой Starter Kit [github.com\/yummies\/starte…](https://t.co/JIgzFXDRrE "https://github.com/yummies/starter-kit") 🔥

уже не представляю как можно жить без "Object Rest\/Spread Properties" [github.com\/sebmarkbage\/ec…](https://t.co/6LE8zf15HF "https://github.com/sebmarkbage/ecmascript-rest-spread") – даже если не войдёт в ES7, буду юзать плагин

вообще, колонка Stage в ES7+ пока выглядит довольно печально [github.com\/tc39\/ecma262](https://t.co/0acCGQDJtu "https://github.com/tc39/ecma262")

Create random JSON objects using json-spawn and Chance.js [github.com\/luisfarzati\/js…](https://t.co/Ndkl8Z1uOv "https://github.com/luisfarzati/json-chance")

Awesome list of Redux examples and middlewares [github.com\/xgrommx\/awesom…](https://t.co/on4zf6Rq1l "https://github.com/xgrommx/awesome-redux")

совсем забыл, со мной можно говорить про Diablo 2.

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Еще вот мои наработки по коллекционировании ресурсов об реактивности [xgrommx.github.io\/rx-book\/conten…](http://t.co/AQWwqrqEeE "http://xgrommx.github.io/rx-book/content/similar_libraries/index.html") также тут есть видео,…

## Вторник <small>92 твита</small>

доброе утро. вчера спрашивали какое Flux решение мы используем… начну немного издалека, а закончу постом в медиум со ссылкой на репозиторий.

хорошее интро в Immutable Data на примере Immutable.js всё от того же фейсбука [youtube.com\/watch?v=I7IdS-…](https://t.co/7VC2rhvHPv "https://www.youtube.com/watch?v=I7IdS-PbEgI")

а что если представить одно большое дерево данных, в котором хранится всё состояние приложения, от нажатости чекбокса до запрошенных данных.

это дерево иммутабельное, т.е. каждое изменение влечёт за собой новую версию дерева, отличную от старой.

в типичном приложении в дереве будет не так много основных явных веток, типа products list, product info и т.п.

"курсор" – это своеобразная ссылка на ветку данных в дереве. простой пример на основе всё того же Immutable.js [github.com\/facebook\/immut…](https://t.co/cS1qCJDOjm "https://github.com/facebook/immutable-js/tree/master/contrib/cursor")

"cursor path" – это путь к этой ветке или к конечным данным. обычно представляется в виде массива, \[ 'products', ID, 'details', 'price' \].

для дерева и курсоров мы используем Baobab [github.com\/Yomguithereal\/…](https://t.co/9Iv0xmAWnK "https://github.com/Yomguithereal/baobab") – ничего лишнего, всё довольно просто и прозрачно.

дерево эмитит событие \`update\`, на основе которого можно и нужно обновлять, например, курсоры, т.к. дерево уже новое, а ссылки старые.

событие \`update\` есть и у самих курсоров – изменились данные по конкретному пути в дереве.

сначала мы делали так: всё дерево помещается в локальный стэйт корневого компонента. по подписке на update стэйт обновляется новый деревом.

от корневого компонента прямо через пропсы в рендере детям разливались курсоры на ветки данных, которые им нужны.

это было очень удобно: каждый нвоый рендер самообновлял курсоры. получался такой водопад данных сверху вниз, который ещё и саморазливался.

из минусов: жёсткая связанность компонентов через иерархию: компонент C зависел от курсора, который ему даст B, а тот в свою очередь от A.

"лишние" рендеры довольно легко отсекались через shouldComponentUpdate\(\), как и было завещано.

но потом моё внимание привлекла очень интересная особенность Baobab: есть событие \`get\` – были запрошены данные по такому-то пути. геттер.

т.е. в теории можно было узнать, что запрошены данные, которых ещё нет в ветке. и сделать замозаполняющееся дерево :\)

Declarative data fetching in React components with Baobab [medium.com\/@mistadikay\/de…](https://t.co/URslHl1nKD "https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852")

компоненты – максимально тупые. они просто рисуют данные как будто эти есть и всегда были. почти каждый компонент сам знает свой cursor path

в рутовом компоненте идёт подписка на геттер из дерева – если данных, которые запрошены отрисовкой компонента ещё нет, то дёргается экшн…

…который, как в самом обычном Flux, диспатчит событие, которое ловит стор, который складывает эти данные по нужному cursor path в дерево.

компонент по событию \`update\` от своего курсора самообновляется и перерисовывается. profit.

по ссылке ниже есть более подробное описание и даже тестовый репозиторий с простым, но в том же время полноценным примером.

самый жир затеи – [github.com\/mistadikay\/rea…](https://t.co/x5jdxNDdJa "https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23") – декларативный "запрос" данных. что-то вроде того же GraphQL, только поверх обычного Rest.

т.е. компонент просто декларативно описывает откуда в дереве брать данные. а как, когда и почему они там оказались – не важно. просто рисуй.

ещё одна интересная особенность – в дереве есть две осовных ветки – data и ui. в data собственно данные, а в ui – визуальные состояния…

типа выбранного пункта, нажатости чекбокса и т.д. это позволяет практически забесплатно сделать "историю" – отматывание всего состояния.

т.к. иммутабельное дерево создаёт новую версию на каждое изменение, ни что не мешает сохранять эти версии и сделать историю как в фотошопе.

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Правда про CLJS, но отлично про иммутабельность, историю из оной и вообще. [youtube.com\/watch?v=lDkrXT…](http://t.co/GTF7FpEm1M "http://www.youtube.com/watch?v=lDkrXTDwbJQ") [youtube.com\/watch?v=tUtLe1…](http://t.co/d1dsnvNQ9n "http://www.youtube.com/watch?v=tUtLe1VlkYc")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А в вашем случае "дерево" — это BEMJSON или ещё над ним абстракция?

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") нет, не BEMJSON, произвольная структура данных, в ветки которой чаще всего складываются данные от сервера as is.

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") но твою идею я понял :\)

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Просто ты упоминал до этого BEMJSON, и я пытаюсь понять, куда вы его там встроили.

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") это никак не связано с Yummies и BEM. пример в репозитории специально написан на JSX :\) просто концепция, применимая везде.

RT [@talgautb](https://twitter.com/talgautb "Талга УтБ"): кажется ведущий [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") отпросился от работы на неделю :\) столько твиттов, хотя только вторник!

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не могу избавиться от ощущения что что-то с GraphQL и подобными решениями не так. Rest более лучше, конечно, …

.[@silentroach](https://twitter.com/silentroach "Игорь") мы \(пока\) взяли только ту часть GraphQL, которая про декларативность в компоненте. а вот бэкендовый кусок – да, необычный.

два поста в тему: Your First GraphQL Server [medium.com\/@clayallsopp\/y…](https://t.co/WeYrVib6py "https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2") \/ Moving from REST to GraphQL [medium.com\/@frikille\/movi…](https://t.co/GQF6ept3DB "https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247")

на данном этапе меня смущает даже сам синтаксис graphQL Query, но это просто с непривычки. с самой идеей по-моему всё в порядке.

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как у вас дела с бэкендом? прослойка на ноде между клиентом и бэкендом на чем-то богомерзком? :\)

.[@silentroach](https://twitter.com/silentroach "Игорь") обычный богомерзкий PHP, одни и те же REST-ручки которого "изоморфно" дёргаются нодой на сервере и аяксом на клиенте.

RT [@markbaraban](https://twitter.com/markbaraban "Mark"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вопрос из зала: что лучше использовать Angular 2.0alpha \(es6\) или же React + ...\) или есть еще хорошие альтер…

RT [@\_cloudo](https://twitter.com/_cloudo "Cloudo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") интересно. как насчет отдельных констант типа pretty\_name =&gt; path\_in\_tree, чтобы компонент не знал о структуре де…

.[@\_cloudo](https://twitter.com/_cloudo "Cloudo") можно чуть подробнее? не совсем уловил.

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на самом деле, если разобраться - баобаб тянет кучу всего лишнего. свой апи, курсоры, кучи методов \(push,…

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну и основная идея - чистые функции, невозможна, set не возвращает новое дерево - он меняет текущее.даже …

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") а какие альтернативы? меня Baobab не смущает вообще ни чем. has есть в виде exist в [@V2](https://twitter.com/V2 "R")

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как относишься к сорхусу и его идее на каждую мелочь создавать по модулю?

.[@silentroach](https://twitter.com/silentroach "Игорь") :\) забавный персонаж. в идее модульности нет ничего плохого, даже в таком, доведённом до абсурда виде. я даже что-то юзал.

.[@silentroach](https://twitter.com/silentroach "Игорь") но я примерно понимаю почему это может раздражать.

\(речь о [github.com\/sindresorhus](https://t.co/rlWHh7Mqt8 "https://github.com/sindresorhus") и его модулях типа [github.com\/sindresorhus\/c…](https://t.co/i1id2VHz6R "https://github.com/sindresorhus/cat-names")\)

RT [@\_cloudo](https://twitter.com/_cloudo "Cloudo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") идея - заменить путь к данным в дереве более семантичной константой

.[@\_cloudo](https://twitter.com/_cloudo "Cloudo") вполне нормальная идея :\) импортировать это из тех же constants, по аналогии с именами событий.

.[@\_cloudo](https://twitter.com/_cloudo "Cloudo") но это не работает с динамическими путями типа [github.com\/mistadikay\/rea…](https://t.co/XYqlzClwl5 "https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L14-L16")

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") буквально вчера об это спросил [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") оказалось сделать это самому гораздо проще, чем кажется https[github.com\/gaearon\/redux\/…](https://t.co/jip3DUtMKO "https://github.com/gaearon/redux/blob/improve-docs/docs/store.md")

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") в моём мире set и не должен напрямую возвращать новое дерево, всё летает по кругу почти как в каноническом Flux.

RT [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ещё вопрос. Для бем дерева вы данные подготавливаете прямо в шаблоне или где-то раньше? \(что-то типа своего…

.[@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev") а нет как такового бем-дерева, как и шаблона :\) сырые данные идут напрямую в ветку дерева, оттуда компонент рисует как хочет

.[@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev") в смысле нет одного большого BEMTREE -&gt; BEMJSON, всё немного иначе.

а какое Flux решение используете вы и какие у него основные минусы и сложности?

RT [@d1b](https://twitter.com/d1b "Dmitriy Budnik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [alt.js.org](http://t.co/8AjxA3I7bF "http://alt.js.org") всё чётко

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Пробовал Альт; теперь хочу попробовать Редакс.

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@sapegin](https://twitter.com/sapegin "Artem Sapegin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тоже используюем alt.js. попробовать redux интересно.

RT [@lapanoid](https://twitter.com/lapanoid "Lapin Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") делал в свое время анализ флаксов для заказщика, в результате и перешел на redux [docs.google.com\/spreadsheets\/d…](https://t.co/erVnaIYUyP "https://docs.google.com/spreadsheets/d/1TZPdUYDx6D1NWBXp_6NNtJ-NeVW6pudx3C9SkYSXI18/edit#gid=0")

RT [@lapanoid](https://twitter.com/lapanoid "Lapin Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если у кого есть комментарии, критика к документу - это крайне желательно. Буду править\)

RT [@pomidore](https://twitter.com/pomidore "Александр Лунев"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") использовал reflux, alt, flummox и теперь пробую redux

RT [@pomidore](https://twitter.com/pomidore "Александр Лунев"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") reflux — дурацкие экшены, нет единого диспатчера, alt — странный api, flummox — все ок, но есть redux :-\), redux…

RT [@stigmat4j](https://twitter.com/stigmat4j "Антонихин Максим"): [@pomidore](https://twitter.com/pomidore "Александр Лунев") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") только flux, только классика, только хардкор.

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") понравилось использовать baobab вместо сторов.

brace yourself, завтра изоморфность.

о да. жду адептов секты правильных слов :\) RT [@lapanoid](https://twitter.com/lapanoid "Lapin Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") универсальность ;\)

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") vanilla js + свои сторы [github.com\/alexeyraspopov…](https://t.co/oGdQX8rKWt "https://github.com/alexeyraspopov/flux-stateful")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У вас есть i18n? Кто как решает эту задачу с React?

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") использовал [github.com\/yahoo\/react-in…](https://t.co/JNQY0cK3fb "https://github.com/yahoo/react-intl") все ок.

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@dimchez](https://twitter.com/dimchez "Dmitry Demyankov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") метод translate прокидывался в компоненты как props.

RT [@olebedev](https://twitter.com/olebedev "Oleg Lebedev"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") использую [github.com\/piranha\/puttext](https://t.co/rjdrniZ79a "https://github.com/piranha/puttext"):
парсинг вызовов -&gt; \*.po -&gt; \*.json -&gt; puttext\(require\('\*.json'\)\)

RT [@suevalov](https://twitter.com/suevalov "Alexander Suevalov"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Polyglot.js от airbnb + своя привязка к Redux

RT [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko"): [@olebedev](https://twitter.com/olebedev "Oleg Lebedev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") +1 к puttext, просто и сердито

RT [@prbigbrother](https://twitter.com/prbigbrother "Alexandru Capatina"): Фронтаны, а может кто поможет найти решение или лучшие практики для smooth parallax scrolling? кто как делает [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

коллеги на работе подходят с вопросами потому что нагуглили мои модули. удобно.

RT [@temrdm](https://twitter.com/temrdm "Artem Pogrebnoy"): Все что обсуждал с [@ir4y\_ix](https://twitter.com/ir4y_ix "ilya beda") и планировал запилить на прошлых выходных, сегодня рассказывает [@deepsweet](https://twitter.com/deepsweet " k i r") в [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"). Супер!

ооок, в CSS есть outline-offset [codepen.io\/SitePoint\/pen\/…](http://t.co/rH8z8S0ncJ "http://codepen.io/SitePoint/pen/VLXyZw")

RT [@subzey](https://twitter.com/subzey "subzey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А ещё он может быть отрицательным! В опере удобно было вёрстку так отлаживать, пока нормальный дебаггер не появился

минутка ванильной вёрстки закончилась.

какое название вашей должности\/профессии наиболее полно отражает реальность и в целом вас устраивает?

моё "Senior Front-End Developer" уже явно вносит больше путаницы в головы менеджеров, чем что-либо проясняет.

RT [@mr\_skriming](https://twitter.com/mr_skriming "Fast Cat"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") яжпрограммист

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") просто js web dev, без аутсорсной энтерпрайзной софтверной инженерии 😤

RT [@Borovikov](https://twitter.com/Borovikov "Денис Боровиков"): [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня устраивает классическое software engineer.

RT [@d3head](https://twitter.com/d3head "Олег"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") JavaScript Engineer

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") разработчик интерфейсов

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Frontend Developer или разработчик интерфейсов. не люблю деление на Junior\/Senior — оно искусственное.

## Среда <small>81 твит</small>

A modular, progressive, and beautiful Markdown and HTML editor [github.com\/bevacqua\/woofm…](https://t.co/XXEtPx50Cx "https://github.com/bevacqua/woofmark")

могу расписать по шагам идею изоморфности на примере того же реакта, начиная со сборки. интересно\/актуально?

готовых starter kit'ов и прочих стабов хватает, например [github.com\/RickWong\/react…](https://t.co/mxnKbZ4ggE "https://github.com/RickWong/react-isomorphic-starterkit") \/ [github.com\/webpack\/react-…](https://t.co/R3l6Qa8iL2 "https://github.com/webpack/react-starter") \/ [github.com\/DavidWells\/iso…](https://t.co/9LAAv0Pow7 "https://github.com/DavidWells/isomorphic-react-example")

суть одна: один и тот же "изоморфный" код должен строить начальный HTML на сервере и продолжать работать дальше на клиенте.

в React для этого предусмотрены обычный DOM \`render\(\)\` и "серверные" \`renderToString\(\)\` \/ \`renderToStaticMarkup\(\)\` [facebook.github.io\/react\/docs\/top…](https://t.co/0MFvlUVJk0 "https://facebook.github.io/react/docs/top-level-api.html")

к слову, в react@0.14 их даже разнесут по разным модулям [facebook.github.io\/react\/blog\/201…](https://t.co/nSzVgYDxtO "https://facebook.github.io/react/blog/2015/07/03/react-v0.14-beta-1.html")

обычно webpack'ом делают одновременно два билда с двумя наборами бандлов на выходе: серверный и клиентский.

точками входа в каждый из бандлов являются своеобразные конструкторы роутеров, которые ждут текущий запрощенный URL в виде аргумента.

на сервере это обычный \`request.url\` из Express \/ Koa \([koajs.com](http://t.co/nOSN4i1JNR "http://koajs.com/"), наш выбор\) \/ whatever, на клиенте – HTML5 History API.

стандартом де-факто является react-router [github.com\/rackt\/react-ro…](https://t.co/plmj29aAMm "https://github.com/rackt/react-router")

на сервере:

грубо говоря, роутер по переданному URL через таблицу роутов определяет, какой именно компонент нужно рендерить.

через renderToStaticMarkup\(\) \(чтобы не было лишних атрибутов data-reactid, "чистый" HTML\) строится руками доктайп, &lt;head&gt; и &lt;body&gt;.

через renderToString\(\) вытягивается строка HTML из компонента, который решил рендерить роутер, и dangerouslySetInnerHTML вставляется в body.

вся эта портянка отправляется обратно в Express в виде ответа на запрошенный URL. казалось бы всё, наш HTML jт сервера готов.

но 1\) чаще всего ваше приложение не статическое, и рутовый компонент и всё последующее строится на основе данных, запрашиваемых с бэкенда.

а render\(\) у реакта синхронный, и сам по себе ждать каких-то там экшенов и сторов не может и не будет.

для решения этой задачи мы выбрали способ, в котором данные запрашиваются после осознания нужного роута, но до фактического рендера.

придумали маппинг соответствия роута и экшна\(ов\) – серверный роутер дёргает нужный экшн и ждёт ответа от стора, пока тот не заполнится.

пришёл ответ – рендерим. передав данные через пропсы, или просто тупо, если всё построено на дереве, из которого компонент возьмёт всё сам.

Ajax with less suck - \(and node.js HTTP client to match\) 
[visionmedia.github.com\/superagent\/](http://t.co/6x3UQks4Zp "http://visionmedia.github.com/superagent/") – чуть не забыл, "изоморфный ajax".

RT [@lyxdenv](https://twitter.com/lyxdenv "Alexander Gorbunov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И все это быстро?

.[@lyxdenv](https://twitter.com/lyxdenv "Alexander Gorbunov") ни чем не должно отличаться от похода за данными на бэкенд в любой другой системе.

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему Koa?

.[@vladimore](https://twitter.com/vladimore "Waldemar") because we can :\) генераторы, вот это всё. судя по стресс-тестам распределение нагрузки более равномерное.

очень важно для осознания: componentDidMount\(\) не происходит "на сервере", т.к. ничего никуда не маунтится.

поэтому подписки на обновление сторов или дёргание каких-нибудь экшнов в этом методе будут проигнорированы renderToString\(\)'ом.

и ровно из-за этого же использовать условия с \`typeof window\` или, прости господи, process.env.BROWSER и пр. – плохо.

весь чистый client-side компонента должен быть описан исключительно в его componentDidMount\(\).

итак. на сервере теперь для нужного роута дёргаются нужные данные и вытягивается HTML-строка из нужных компонентов.

когда на клиенте активируется наш собранный клиентский бандл, он \(как я представляю\) построит VDOM и начнёт матчить с HTML по \`data-reactid\`

т.к. никаких данных, которые были запрошены на сервере, у клиента нет, то React просто построит diff относительно пустых данных и всё сотрёт

отсюда интересная проблема: даже если на клиенте заново дёрнуть такие же экшны по роуту, как и на сервере, не факт, что они будут идентичны.

это будет два разных несвязанных друг с другом запроса, пусть даже за одним и тем же. мало ли там какой timestamp или другая уникальность.

мы не придумали ничего лучше \(а затем нашли подтверждение правильности своей идеи в других Flux рещениях\), чем передать данные в HTML.

ведь если подумать, то между сервером и клиентом нет абсолютно никакой связи, кроме как HTML, и только так можно связать "сессию".

RT [@olebedev](https://twitter.com/olebedev "Oleg Lebedev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а почему нельзя:
React.render\(&lt;Handler \/&gt;, document\);
?

.[@olebedev](https://twitter.com/olebedev "Oleg Lebedev") можно и нужно, вот только сторы пустые.

т.е. при серверном рендеринге, куда-нибудь в &lt;body&gt;:

&lt;script id="\_bootstrap" type="application\/json"&gt;{ ololo: true }&lt;\/script&gt;

для клиентского бандла точкой входа является клиентский конструктор роутера, который, если есть "bootstrap", возьмёт оттуда данные.

сложит их в стор и сделает самый обычный React.render\(…\). в этой точке всё дальнейшнее управление роутами уходит в клиентский react-router.

теперь строка HTML от сервера полностью идентична тому, что построит реакт на клиенте. нулевой diff, profit.

дальнейший переход на другую страницу будет перехвачен роутером и выполнен только на клиенте. только в этом случае будет дёрнут экшн…

т.к. данных для другой страницы в "boostrap" нет, ведь сервер рендерил только текущую страницу. начинается обычный Flux data flow.

если очень кратко: самые начальные данные клиент берёт из HTML, а дальше всё как обычно, никаких ограничений.

грабли, на которые мы наткнулись практически сразу: неучтённые синглтоны и \`on\`-подписки вместо \`once\` на сервере.

результат: расшаренные сессии и сторы между разными клиентами :\) следите за этим.

извиняюсь за возможную сумбурность, старался излагать максимально последовательно. вопросы?

RT [@olebedev](https://twitter.com/olebedev "Oleg Lebedev"): ~[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") как то говорил в чате что нельзя так, так как экстеншены могут мjдифицировать DOM.

.[@olebedev](https://twitter.com/olebedev "Oleg Lebedev") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") буду очень рад узнать альтернативное решение

RT [@subzey](https://twitter.com/subzey "subzey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как по мне, тут чейнинг используется только ради чейнинга. Какой профит по сравнению с window.fetch\(url, {…}\)?

.[@subzey](https://twitter.com/subzey "subzey") [github.com\/matthew-andrew…](https://t.co/z4XwG3cRB4 "https://github.com/matthew-andrews/isomorphic-fetch") для любителей.

RT [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на клиенте используете тот же маппинг или другой подход к работе с данными?

.[@snejink](https://twitter.com/snejink "Aleksei Krasnoperov") абсолютно тот же расшаренный маппинг роут -&gt; экшн\(ы\).

я в целом большой поклонник метода "сделай с нуля, или не поймёшь до конца". но это не значит, что не нужно использовать готовые решения.

хотя бы издалека понимать принцип работы такой не самой простой штуки уже полезно.

RT [@kra1g0](https://twitter.com/kra1g0 "Крайго"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть react native для андроида?

.[@kra1g0](https://twitter.com/kra1g0 "Крайго") afaik нет, но они очень обещают. без чётких сроков, как обычно у Facebook.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") данные для render нужно заранее готовить и в отдельном от React месте. Я вот для этого либу написал [bit.ly\/1TPnKSn](http://t.co/hCRILB9ZGg "http://bit.ly/1TPnKSn")

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") можно в двух словах основной принцип?

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В твитере всё равно поток сознания получается :-\) Но в целом всё понятно.

разница между серверным и клиентским webpack-бандлами небольшая: разные точки входа, и упрощённый процессинг на сервере, без стилей и т.п.

в серверный бандл так же можно не включать всё вендорное, чтобы мучать зря файл на пару мегабайт – [webpack.github.io\/docs\/library-a…](https://t.co/duEhtH6nuW "https://webpack.github.io/docs/library-and-externals.html")

[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") НЕ мучать, идиот.

RT [@sbmaxx](https://twitter.com/sbmaxx "Roma Rozhdestvenskiy"): Надо будет взять кофейку и перечитать [@deepsweet](https://twitter.com/deepsweet " k i r") в роли [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") . Не будет какой-нибудь ссылочно-резюмешечного текста по и…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@sbmaxx](https://twitter.com/sbmaxx "Roma Rozhdestvenskiy") [@deepsweet](https://twitter.com/deepsweet " k i r") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В профиле аккаунта же есть ссылка [jsunderhood.ru](https://t.co/PbeRmSYiDR "https://jsunderhood.ru/")

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ого, какая печалька \(почитал дальше\). Какая-то так себе изоморфность получается. Неужто более лучше ничего не…

.[@silentroach](https://twitter.com/silentroach "Игорь") [github.com\/facebook\/react…](https://t.co/cWPkS5i2Bh "https://github.com/facebook/react/issues/3009") когда-нибудь…

этот наш роут -&gt; экшн\(ы\) маппинг плюс ко всему позволяет довольно легко решить, какой компонент рендерить на сервере, а какой на клиенте.

если для чисто клиентского компонента не дёргается экшн в серверном роутере, то он просто отрисуется пустым.

на клиенте в своём componentDidMount\(\) компонент посмотрит, что данных в сторе \(от бутстрапа\) нет, и сам дёрнет свой экшн. даже изящно.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): Вопрос к залу: поддон для посудомойки обязательно нужен? Как подобрать подходящий, какие у них параметры? Забыла заказать вм…

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@kra1g0](https://twitter.com/kra1g0 "Крайго") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") стоит ли вообще инвестировать время в него сейчас? есть ли серьезные разработки на нем?

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@kra1g0](https://twitter.com/kra1g0 "Крайго") У фейсбука два приложения нативных \(ads и groups\) - react native. Все очень серьезно.

RT [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Читаю ваши твиты про реакт и не двупляю почти ничего.  Чем крут реакт? Киллерфича перед ангуларом? ☺️

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фича в том, что ты можнешь думать о приложении, как о функции. В математическом смысле слова.

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин") [facebook.github.io\/react\/docs\/why…](https://t.co/7TsswDl7Fs "https://facebook.github.io/react/docs/why-react.html") + [jlongster.com\/Removing-User-…](http://t.co/bz8u9ZYUzF "http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а если таких компонента два? оба дернут?

.[@slonoed](https://twitter.com/slonoed "Dmitry M.") мы сделали isRequesting на уровне экшна, чтобы одновременно не было двух одинаковых. всё равно в стор попадёт в одно и то же место

.[@slonoed](https://twitter.com/slonoed "Dmitry M.") компонент не должен о таком думать

а у кого сейчас какой pet project? :\)

## Четверг <small>69 твитов</small>

появились подвижки в мёрдже isparta в istanbul [github.com\/douglasduteil\/…](https://t.co/RnGnXJqPGI "https://github.com/douglasduteil/isparta/issues/31#issuecomment-123894638") – покрытие оригинального ES6 кода через sourcemaps от Babel.

к слову, лоадеры к вебпаку для обоих – [github.com\/deepsweet\/ista…](https://t.co/1NmkG1Y2mE "https://github.com/deepsweet/istanbul-instrumenter-loader") \/ [github.com\/deepsweet\/ispa…](https://t.co/sE2uc4rVfc "https://github.com/deepsweet/isparta-loader")

Approaches to testing React components [reactkungfu.com\/2015\/07\/approa…](http://t.co/BV2bwDC1DP "http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/") – а как вы тестируете реакт-приложения?

у нас \(пока\) jsdom [github.com\/tmpvar\/jsdom](https://t.co/pRKh62245N "https://github.com/tmpvar/jsdom") + старая добрая mocha [github.com\/rstacruz\/mocha…](https://t.co/IcRYH52hhZ "https://github.com/rstacruz/mocha-jsdom") + TestUtils [facebook.github.io\/react\/docs\/tes…](https://t.co/LHa51Lo8ej "https://facebook.github.io/react/docs/test-utils.html")

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") используя Shallow Rendering [facebook.github.io\/react\/docs\/tes…](https://t.co/rF299uL4MS "https://facebook.github.io/react/docs/test-utils.html")

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") такой же набор + sinon

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну а дальше mocha, chai с параметром —compilers js:babel\/register

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему не Karma? Для браузера же пишете, jsdom - читерство

.[@silentroach](https://twitter.com/silentroach "Игорь") а какие именно браузерные отличия ты хочешь тестировать кармой? то, как работает сам реакт? :\)

.[@silentroach](https://twitter.com/silentroach "Игорь") правда. но что это меняет? внутри Flux тоже нечего такого специфичного тестировать… приведи пример, я не могу придумать :\)

.[@silentroach](https://twitter.com/silentroach "Игорь") мы начали с кармы, и на первом проекте она даже до сих пор крутится. даже под Sauce Labs. а потом подумали "а зачем?".

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") :\) хороший довод. Но проект же состоит не только из реакт-компонентов, правда же?

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так любой js-код. Все же js в ноде от того, что есть в chrome и ff разных версий отличается. Дело же не тольк…

.[@silentroach](https://twitter.com/silentroach "Игорь") смотрю на проект и пытаюсь найти что-нибудь такое :\) я понимаю о чём ты, но одновременно не попускают мои доводы.

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тот же babel спокойно может зарелизить версию с косяками и зафиксить только через пару часов, какое тут довер…

.[@silentroach](https://twitter.com/silentroach "Игорь") по-моему это путь в ад, тестировать "не свой" код. так можно тестировать правильно ли вебпак реквайрит модули, например.

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а это тестировать и не надо, надо тестировать работоспособность своего проекта :\) которая может быть сломана …

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") насколько я понял и подход и даже частично реализация совпадает с вот этим примером: [github.com\/erikras\/react-…](https://t.co/0gLUqMpLNr "https://github.com/erikras/react-redux-universal-hot-example"), в…

.[@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin") очень может быть, конкретно на это я не смотрел. идея у всех плюс-минус одна.

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") получение данных на серверной стороне \(наполнение стора\) там изящно реализовано, рекомендую обратить на него вн…

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так можно же локально тестировать через jsdom, а в CI запускать те же тесты в браузере

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") а как тестировать e2e? Хочу, чтобы перед деплоем основные сценарии проверялись: лог…

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@subzey](https://twitter.com/subzey "subzey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для fetch получается слишком много лишнего кода типа установки хедеров и тд, в итоге я пришёл к sup…

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мы начинаем прикручивать [pioneerjs.com](http://t.co/R4yqJBCKNj "http://pioneerjs.com/") посмотрим ,…

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk") [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") я не понял, чем он лучше cucumber.js?

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") немного опоздал, но вот небольшой пример isomorphic app \([github.com\/ShpuntiK\/isomo…](https://t.co/vYFzqqIwJE "https://github.com/ShpuntiK/isomorphic-app-sample")\) с идеями, которые ты опис…

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [shpuntik.github.io\/isomorphic-app…](http://t.co/LuV2uSclSO "http://shpuntik.github.io/isomorphic-apps-presentation") - и презентация на основе этого кода \(2\/2\)

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") про синглотоны очень верно :\) сам долго осознавал эту проблему

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") так и тестировать — писать e2e тесты, локально запускають через jsdom, на сервере ч…

RT [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk"): [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko") [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") хороший вопрос, я пока не знаю. по зависимостям pioneer ссылается на фор…

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@adaniliuk](https://twitter.com/adaniliuk "Andrei Daniliuk") [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@silentroach](https://twitter.com/silentroach "Игорь") понял, это враппер над ним, с e2e API. Но мне больше нравится http:\/\/t.c[webdriver.io](http://t.co/A0mUtDcGhX "http://webdriver.io")

Babylon is a JavaScript parser used in Babel [github.com\/babel\/babel\/tr…](https://t.co/nopJz2X1Cy "https://github.com/babel/babel/tree/master/packages/babylon")

кажется решились на babel-plugin-typecheck, по крайней мере простые вещи. ненавижу JSDoc. [github.com\/codemix\/babel-…](https://t.co/90obOQPQKU "https://github.com/codemix/babel-plugin-typecheck") + [flowtype.org\/docs\/quick-ref…](http://t.co/9wllD3YRnF "http://flowtype.org/docs/quick-reference.html")

хочется как в Babel – [github.com\/babel\/babel\/bl…](https://t.co/FRjrfxxaVN "https://github.com/babel/babel/blob/master/packages/babel/src/util.js") – комменты комментами, а типы через flow type annotations.

\(TypeScript для бедных\)

Turn flow type annotations into comments [github.com\/babel-plugins\/…](https://t.co/9BfMaYJN52 "https://github.com/babel-plugins/babel-plugin-flow-comments")

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Все задаю вопрос почему flow? Почему не typescript?

.[@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") а TypeScript уже разве полностью синхронизировался с ES6?

пруф или не было :\) RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") уже и с ES7

на сегодня так [github.com\/mistadikay\/rea…](https://t.co/x5jdxNDdJa "https://github.com/mistadikay/react-auto-fetching-example/blob/master/src/components/products-list/index.es6#L9-L23"), мы над этим работает. RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У вас своя реализация query в компонентах?

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") о-да! Суперагент очень крутой! Я даже написал для него REST-моккер который работает прямо в браузере https[github.com\/rambler-digita…](https://t.co/l8ZggpQ7y8 "https://github.com/rambler-digital-solutions/superagent-mocker")

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вот их roadmap [github.com\/Microsoft\/Type…](https://t.co/7D5mvtEAiX "https://github.com/Microsoft/TypeScript/wiki/Roadmap")

хм, ок. тогда почему не TypeScript?

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") он умеет искать по полям в объектах? типа: хочу объект из массива в котором id: 5

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") да, стандартными средствами Baobab. мы когда осознали, кажется взвизгнули.

[github.com\/Yomguithereal\/…](https://t.co/L4r5MG0pom "https://github.com/Yomguithereal/baobab/wiki/Select-state") RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ану покаж!

btw, скоро Baobab@v2 [github.com\/Yomguithereal\/…](https://t.co/oTIBUpR0Xz "https://github.com/Yomguithereal/baobab/tree/v2")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Круто! А как быть с динамическими query? Например листы. Как вы расширяете query?

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") по ссылке на наш пример видно, что query – это функция, принимающая props и state :\)

RT [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я написал новый ридми для Redux: [github.com\/gaearon\/redux\/…](https://t.co/s0q28MdIX3 "https://github.com/gaearon/redux/tree/rewrite-docs"). Фидбэк вэлкам! \(Доки пока не готовы\)

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") А что о [github.com\/mquan\/cortex](https://t.co/7ajTIaDBak "https://github.com/mquan/cortex") скажете?

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") Вообще есть целый список [github.com\/enaqx\/awesome-…](https://t.co/FRdVOypIDe "https://github.com/enaqx/awesome-react#data-managing")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Хм, вижу. А что, если часть динамического query зависит от данных из глобального состояния?

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") ммм… в общем случае оно может быть в пропсах, мы так ID из роута протягивали. ещё вариант – context. есть конкретный пример?

на сегодня это тянется в пропсах, но уже есть кое-какие намёки. RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот я про роут и id как раз и хотел сказать :\)

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это не ломает проверку SCU? Или у вас и пропсы и данные по курсору сравниваются в SCU?

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") не совсем понял как тут сломается SCU. мы сравниваем ID в componentWillReceiveProps и при отличии обновляем свои курсоры.

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") т.е. данные компонента обновляются на новую ветку с новым ID.

.[@roman01la](https://twitter.com/roman01la "Roman Liutikov") query-функция вызывается заново с новыми пропсами, и получается новый cursor path. ну ты наверное уже понял :\)

немного забегая вперёд скажу, что мы уже всё чуть переосмыслили и оформляем в виде небольшого модуля на декораторах. для своих нужд.

а скиньте примеры своего кода на ES6 с JSDoc.

хохма последней недели – "самовозбуждающийся стор"

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а почему бы это состояние не хранить в самом tree? \)

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") именно это мы и собираемся попробовать. в каком-то виде :\)

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") глянул, очень круто \). А это [github.com\/tonsky\/datascr…](https://t.co/ZuDwn9KmEd "https://github.com/tonsky/datascript") - следующая итерация идеи [@nikitonsky](https://twitter.com/nikitonsky "Nikita Prokopov")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я это в своем slt как раз имел ввиду \). Короче, состояние целостно только в случае, когда все причины хранятся в не…

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и тут основаная моя претензия к flux.Вызов экшена никак не фиксируется,теряются причины.В [redux](https://twitter.com/search?q=%23redux) такая же проблема [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov")

↓ и дальше по реплаям.

JSCity is an implementation of the Code City metaphor for visualizing source code [github.com\/aserg-ufmg\/JSC…](https://t.co/1nk6M643H3 "https://github.com/aserg-ufmg/JSCity/wiki/JSCITY") 😻

## Пятница <small>40 твитов</small>

RT [@bashmish](https://twitter.com/bashmish "Misha Bashkirov"): Пс, парень, немного рекурсии не желаешь? [pic.twitter.com\/tw4p65bqnB](http://t.co/tw4p65bqnB)

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") расскажи вот что про реакт. Как люди валидируют пользовательский ввод в формах, трансформируют его и так далее?

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ибо формы, по-моему, это головная боль на реакте в отличие от того же ангуляря. В ангуляре это прям великолепно с…

.[@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") мы не придумали ничего лучше, чем заюзать validator [github.com\/chriso\/validat…](https://t.co/rl3IkwPVMa "https://github.com/chriso/validator.js") с кастомным выводом ошибок.

.[@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") пробовали даже нативную HTML5 валидацию [html5rocks.com\/en\/tutorials\/f…](http://t.co/igxQPCEYNJ "http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/"), но это просто ад. более невменяемого API я не помню.

тема лично для меня всё ещё актуальная, может есть что-то очевидное и крутое?

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что по поводу [github.com\/gcanti\/tcomb-f…](https://t.co/5oeiGckltc "https://github.com/gcanti/tcomb-form") и [github.com\/insin\/newforms](https://t.co/A6hjUPfn3G "https://github.com/insin/newforms")?

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") tcomb интересный, был небольшой опыт, но newforms поддерживают isomorphic

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А еще в ангуляре есть великолепнейшая либа [angular-formly.com](http://t.co/CIGnyZMRLG "http://angular-formly.com")

coveralls в read-only, ну круто [status.coveralls.io](http://t.co/Zk2biV4ydi "http://status.coveralls.io/") – видимо с этим же связаны последние затупы с pending очередью \/[@toivonens](https://twitter.com/toivonens "var ya; // ru")

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") первая попытка, по-моему получилось круто [github.com\/mistadikay\/rea…](https://t.co/i0Ebulcgl9 "https://github.com/mistadikay/react-auto-fetching-example/blob/doob/src/components/product/index.es6#L8-L17") – cursor path как часть другого cursor path

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") до того как делать баобабовый select мы подготавливаем cursor path через рекурсивный поиск вложенных массивов.

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") на любой глубине как и раньше могут быть части props\/state из функции, в скоупе которой это всё происходит.

RT [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А тогда скажи, форма для тебя должна быть smart- \(с внутренним состоянием\) или dumb-компонентом \(с состоянием в с…

.[@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov") у нас получилось что-то между: у формы есть своё внутреннее состояние, которое можно менять внешними пропсами.

RT [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для валидации форм использую [github.com\/christianalfon…](https://t.co/zcPK0e7JeR "https://github.com/christianalfoni/formsy-react")

RT [@cssunderhood](https://twitter.com/cssunderhood "HTML, CSS, BDSM"): Всем привет \) Меня зовут Денис [@denisfedosov](https://twitter.com/denisfedosov "Denis FL") и люблю верстать. Работаю удаленно в ⚑ Passenger.me.

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а поделись годными материалами про spa \(на стек пофиг\) :\)

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну ок, кастомный вывод ошибок нормальная тема. А что на счет модификации пользовательского ввода onkeyup? Как $fi

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") могу сделать простенький gist для поля ввода номера кредитки, там все очень просто

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") вроде норм. А в чем смысл использовать state вместо props?

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") просто на всякий случай :\) у нас такого примера нет, но локальный стэйт компонета всё равно пробрасывается. мало ли.

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") а, кажется ты про другое. мы не делали через higher-order component по некоторым причинам, но в целом можно.

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") как раз сейчас пишем довольно подробный README. всё будет.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") да не, я имел ввиду что вообще нафиг state не нужен \). То есть ну вообще \).

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") в идеальном случае – да, согласен. он просто удобен "в виде хранилища" тем, что при обновлении дёргает рендер сам.

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") собственно вот: [gist.github.com\/afitiskin\/a65c…](https://t.co/SZy9WMURov "https://gist.github.com/afitiskin/a65c26ff923d13788980")

RT [@Chudesnov](https://twitter.com/Chudesnov "散厦知"): [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin") [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") onchange в Реакте - это только change, или он другие какие-то события подмешивает?

RT [@afitiskin](https://twitter.com/afitiskin "Alex Fitiskin"): [@Chudesnov](https://twitter.com/Chudesnov "散厦知") [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") любое изменение в input триггерит реактовский onchange, на мобилках должно работать так же

оформили наш подход к работе со стэйтом в реакте [github.com\/mistadikay\/doob](https://t.co/0BqgLIOpbq "https://github.com/mistadikay/doob"), по мотивам поста [medium.com\/@mistadikay\/de…](https://t.co/URslHl1nKD "https://medium.com/@mistadikay/declarative-data-fetching-in-react-components-with-baobab-e43184c43852") 🔥

горячий тред :\) RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov") [twitter.com\/isnifer\/status…](https://t.co/zGkq4zTHTC "https://twitter.com/isnifer/status/624512816599441408") , не? \)

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это все какие-то библиотеки, которые подменяют привычное написание элементов форм. Фу на такое

.[@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") покажи уже ангуларовый рай для создания и валидации форм

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") ща покажу, как раз взялся зафиксировать это

совсем забыл про важную фишку иммутабельности – сохранение ссылок на объекты. простейший shouldComponentUpdate без shallow-equal костылей.

в том же Baobab два курсора на одни и те же данные будут равны через \`===\`, как и результат их \`.get\(\)\`а.

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну просто, для ясности :\) вообще да, идея с баобабом заразительна. Особенно то, как это на флакс ложится.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да не нужен тебе флакс е-мае \)\). Там же можно на изменения данных подписываться \)\)

извините, у вас есть минутка поговорить о баобабе? RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") точно, не заметил. нафиг флакс, всем по баобабу!

A Virtual DOM based AngularJS view renderer designed to be used with immutable data structures [github.com\/teropa\/angular…](https://t.co/JpyZCe7Nph "https://github.com/teropa/angular-virtual-dom")

## Суббота <small>53 твита</small>

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): So true [twitter.com\/fioroco\/status…](https://t.co/qRMrtK97oD "https://twitter.com/fioroco/status/624321843755814913")

в ESLint@1.0.0-rc-3 наконец-то сделали reset по умолчанию [eslint.org\/blog\/2015\/07\/e…](http://t.co/79RjU2U6h7 "http://eslint.org/blog/2015/07/eslint-1.0.0-rc-3-released/#reset-is-now-the-default"), т.е. нужно заполнять конфиг с нуля вдумчиво и руками.

если вы по какой-то странной причине всё ещё используете JSHint, то самое время перейти с выходом ESLint@1.0.0.

+ [github.com\/babel\/babel-es…](https://t.co/AgmTtRFXgI "https://github.com/babel/babel-eslint") + [github.com\/babel\/eslint-p…](https://t.co/pypDE5iXSu "https://github.com/babel/eslint-plugin-babel")

+ [github.com\/yannickcr\/esli…](https://t.co/QTmYB7ydBf "https://github.com/yannickcr/eslint-plugin-react")

у инструмента, который связан с парсингом ES6, нет практически никаких шансов выжить без Babel. Себастиан не просто так выделил Babylon.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Так что выжить без Babel для парсинга ES6 очень даже легко \(и он будет скорее оверкиллом\).

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") расскажи это какому-нибудь JSCS

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Esprima, собственно, тоже уже догоняет, тем более что общую спецификацию мы уже написали.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") на ES7 уйдёт ещё год догонов [github.com\/estree\/estree](https://t.co/fPhadJCVhc "https://github.com/estree/estree"). парсер Babel хорош именно тем, что он bleeding edge.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И тем же одновременно и плох, так как использует внутренние типы нод, которые внешние либы могут принять за ста…

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") но на его основе потом и обсуждается формат для ESTree. кому-то нравится теория, а мне нужно использовать ещё вчера.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") я начал говорить о конкретных инструментах типа ESLint\/JSCS, а ты про глобальное. совершенно очевидно, что есть эсприма и акорн.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") про esprima-fb нужно напоминать? :\) да, оно когда-нибудь будет стабильное и покрывающее всё-всё. но не сегодня.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") вот тебе факты: 1\) от JSCS я отказался на следующий день после осознания отсутствия поддержки всего, что мне нужно.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") 2\) если бы не появился babel-eslint, я бы жил вообще без линтера.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") На чьем формате? Бабеля? Нет. Он в этой сфере относительно недавний игрок, и больше консьюмер чем задающий прав…

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это не о теории, а о стабильности тулз и фич. Тем более, что все эти ES7 штуки легко реализовать как плагины дл…

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я тоже очень даже о конкретных. ESLint \(Espree\) мы вон тоже потихоньку на Акорн переводим.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Не понял посыла про esprima-fb. В том-то и суть, что стабильным оно может и не стать, и быть по-тихому удалено …

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это основная политика Бабеля - можно экспериментировать с новыми фичами, но мы их в любой момент можем убрать.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") ты снова про какую-то абстрактную теорию. у тебя есть живой проект на ES6\/ES7, который нужно, например, линтить? похоже, что нет

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") можно сколько угодно обсуждать инструмент в вакууме, но если бы не появился babel-eslint, ваш "ESPree" до сих пор бы тужился.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ладно, это бессмысленно :\( В который раз описываю как конкретно это работает прям сейчас изнутри, а ты называеш…

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") babel-eslint - временный хак, в том числе Себ это признает и хочет изменить в сторону стандартов. Он крут, но в…

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") я ни разу это не отрицал, если ты не заметил. временный, НО АКТУАЛЬНЫЙ. это куда важнее для проекта, который УЖЕ ЕСТЬ.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") Esprima и Acorn без сомнений сделают полную поддержку ES6 и даже ES7. но когда? сколько месяцев мне ещё не использовать тулзы?

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Прочти первый свой твит из которого собственно все началось :\)

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") сегодня у инструментов всё ещё мало шансов. что не так-то? JSCS переводят на babel-jscs просто так?

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") как итог – у тебя бомбануло не по теме :\)

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Аргументировал достаточно, и почему ES6 тулзам Babel как парсер вообще не критичен, а ты в ответ начал мне про …

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") дай мне рабочие ESLint и JSCS без Babel. аргументировал он :\)

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ммм... я среди тех, кто это в том числе строит в тимке Babel-а.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") такие аргументы никогда не волновали и не будут меня волновать вообще никак :\) будь ты хоть Крокфордом.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Очень рад, что человек, использующий тулзы, обясняет, как надо строить эти самые тулзы :\) Удачи!

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") когда придумаешь ответ на мои доводы про ESLint и JSCS, приходи. я как не мог их толком использовать полгода назад,так и не могу

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") пока ты скатился только "а я авторитет, и кажется знаю, о чём говорю"

спор математика и инженера, блин.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Та да. Причем, почему-то кажется, каждый из нас видит математика в другом :\)

RT [@tvii](https://twitter.com/tvii "Vladimir Varankin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а в чем принципиальные отличия, чтобы прям взять все бросить с перейти?

.[@tvii](https://twitter.com/tvii "Vladimir Varankin") нормальная архитектура, нормальные названия правил, выбор между предупреждением и ошибкой, бурное развитие, плагины, сообщество.

.[@tvii](https://twitter.com/tvii "Vladimir Varankin") всё бросать сразу точно не стоит, но попробовать – однозначно.

RT [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а есть смысл переходить, если пишешь на es5 и не на react? мне это видится переходом ради перехода

.[@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") помимо ES6 и прочих JSX смысл есть уже просто потому, что это новое поколение знакомого инструмента [eslint.org\/docs\/rules\/](http://t.co/Z3Gr8BHixJ "http://eslint.org/docs/rules/")

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") можно новое начать писать на ES6

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А причём тут React?

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") заметили, как мощно React\/JSX зафорсили ES6, что иногда даже одно без другого уже кажется странным? :\)

\(по большому счёту и JSCS не нужен, codestyle-правил в ESLint по крайней мере для меня уже достаточно\)

\(с одной стороны, разделение обязанностей это хорошо, с другой – два разных инструмента это слишком\)

btw, husky – "Prevents bad commit or push \(git hooks, pre-commit, pre-push and all that stuff…\)" [github.com\/typicode\/husky](https://t.co/bgUmZ60heP "https://github.com/typicode/husky")

когда кто-то всерьёз говорит "ES2015" вместо "ES6" \[gif\] [replygif.net\/i\/100.gif](http://t.co/eqUGi0qO89 "http://replygif.net/i/100.gif")

перестал следить за Node.js + io.js с момента анонса "foundation". что там? мёрдж? роадмапы?

homebrew-rmtree – remove a formula and its unused dependencies [github.com\/beeftornado\/ho…](https://t.co/lC2JMjZDyC "https://github.com/beeftornado/homebrew-rmtree")

## Воскресенье <small>116 твитов</small>

RT [@alexfedoseev](https://twitter.com/alexfedoseev "Alex"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") привет! вы проверяете в компонентах propTypes? если да, то есть какой-то регламент \(что проверять, насколько…

.[@alexfedoseev](https://twitter.com/alexfedoseev "Alex") привет. по-хорошему конечно нужно проверять :\) это даже ни столько для валидации, сколько для наглядного представления данных

.[@alexfedoseev](https://twitter.com/alexfedoseev "Alex") но если у тебя компонент напрямую рисует глубокую структуру данных, то такой компонет явно стоит разбить на несколько.

\(мы даже сделали в Yummies безумный экстенд отдельных файлов с propTypes по слоям, но пока так ни разу не воспользовались\)

был хороший issue в тему [github.com\/facebook\/flow\/…](https://t.co/hTKSXRQj1F "https://github.com/facebook/flow/issues/277#event-338421297") – propTypes на фоне нормальной типизации кажется костылём, хоть в нём и есть свои фишки.

\(Flow, конечно, хорош, но он статический "типизатор". по поводу динамической типизации я всё ещё верю в штуки типа [github.com\/codemix\/babel-…](https://t.co/90obOQPQKU "https://github.com/codemix/babel-plugin-typecheck")\)

RT [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сон не нужен? \(:

.[@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов") у меня уже почти 10 утра

+ [github.com\/gcanti\/flowche…](https://t.co/0vBqsGI7Rc "https://github.com/gcanti/flowcheck") + [github.com\/gaearon\/flowch…](https://t.co/o21PpXTKcn "https://github.com/gaearon/flowcheck-loader")

задумка простая: перед тем как удалять, превращать все flow types annotations в инлайновые ассерты. только в dev-режиме, конечно же.

RT [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и да, typescript тащит!

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rubyunderhood](https://twitter.com/rubyunderhood "Ruby Разработчик") думаю, картинка будет полезна [pic.twitter.com\/6tkRlf8CqN](http://t.co/6tkRlf8CqN)

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 1\/6 A young developer approached me after a conf talk and said, “You must feel really bad about the failure of object-oriented p…

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 2\/6 I was confused. I said, “What do you mean that object-orient programming was a failure. Why do you think that?”

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 3\/6 He said, “OOP was supposed to fix all of our software engineering problems and it clearly hasn’t."

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 4\/6 He continued: "Building software today is just as hard as it was before OOP. came along.”

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 5\/6 I said: “Have you ever look at the programs we were building in the early 1980s? At how limited their functionality and UIs …

RT [@awbjs](https://twitter.com/awbjs "Allen Wirfs-Brock"): 6\/6 OOP has been an incredible success. It enabled us to manage complexity as we grew from 100KB applications to today’s 100MB a…

промежуток времени, через который собственный код уже кажется корявым, стал измеряться не годом, а месяцем. мозг постоянно нагрет.

это точно устаканится в каком-то своём правильном балансе, но хотелось бы, чтобы сам процесс в целом не останавливался никогда.

хуже всего, это когда ты явно застрял, но этого не осознаешь и даже отрицаешь. со стороны обычно очень явно видно, но это редко помогает.

\(я разлогинюсь где-то в 19 по МСК, если осталось что обсудить или спросить – самое время\)

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда месяц - это хорошо или плохо?

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") "минус" – постоянная тяга к рефакторингу. если откровенно запустить, то будет плохо, и не только тебе самому.

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") если подойти осознанно и извлечь из этого свои плюсы, то можно действительно улучшить код не просто ради факта переписывания.

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну ведь принцип "работает не трогай" всегда останавливает от преждевременного рефакторинга.

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") как я заметил, это довольно сильно зависит от проекта. есть такие, где даже думать о рефакторинге нельзя, чтобы не сломать.

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") "преждевременный рефакторинг" – это подростковость :\) и рано или поздно проходит, сам таким был ещё недавно.

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня под это определение попадает любой рабочий и приносящий доход проект

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") именно поэтому я и говорю, что зависит от проекта. можно сопротивляться сколь угодно, то всё равно придётся разделять \[…\]

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") \[…\] "бизнес" и "гик". на каком-то этапе стартапа может показаться, что это одно и то же, но это ловушка.

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") согласен. Но ту точку где рефакторинг необходим, нам надо как-то обозначить в этом треде

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") для меня такой точкой часто является факт "блин, надо поправить казалось бы мелочь, но всё так плохо, что даже это страшно".

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") если ОЧЕНЬ сложно вносить изменения в работающий проект, то нужно хотя бы подумать о том, чего будет стоить новая архитекрута

.[@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") \*иногда\* в это удачно можно вплести "бизнес", аргументировав тем, что затраты на поддержку в текущем виде дороже рефакторинга

учусь определять зрелость разработчика \(как человека в том числе\) по его код-стайлу. в этом есть свои отчётливые закономерности.

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот здесь полностью согласен. Рефакторинг ценен только тогда когда ты вносишь требуемые изменения в проект.

это отражение внутреннего состояния, как если бы вы рисовали картины для психолога. и программиста-подростка,которому уже за 30, сразу видно

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Какие?

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") умение думать о других. не тупо "специально" писать слишком вербозный код, а иметь как личное качество на привычном обычном уровне

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") обилие вложенных тернарных операторов и прочие однострочники от тех, кто не наигрался в своё время на [140byt.es](http://t.co/XWWuT4tUXU "http://www.140byt.es/")

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") отсутствие даже единственной строчки с комментарием под предлогом "нормальный программист и так поймёт".

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") однажды я добавлял на страницу кнопку больше недели.

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А как от такого избавляться?

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") научиться допускать, что если ты слышишь о своей проблеме более, чем от одного человека, то возможно в этом что-то есть.

самый треш – "кто не понял как работают мои выглядящие как перл три строчки кода, тот тупой и просто не дотягивает до моего уровня".

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как объяснили это заказчикам, если это был enterprise ?

ультрагиком хорошо быть, когда ты мальчишка, и все вокруг тебя тоже мальчишки, и вы меряетесь странными для обычных людей письками.

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это был крупный соцсервис, с миллионом а\/б тестов, из за них это и произошло, и из за отсутств…

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кнопочку то я вставил быстро, неделю я делал так что бы она одинаково везде работала

чаще всего такие люди физически не способны доводить начатые проекты до конца, т.к. одно дело набросать прототип с однострочными while \[...\]

\[…\] циклами без "лишних скобок", а другое дело жить с этим, думать про внешний API и т.п… быть ответственным, вот.

вспомните своих коллег, у каждого такой есть :\)

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ха. у нас на поддержке старый гос. интерпрайз. Кнопочку туда месяц как-то вставляли.

Я КНОПОЧКУ ДО СИХ ПОР ВСТАВЛЯЮ, УЖЕ 30 ЛЕТ ЖИВУ.

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если рефакторинг снижает стоимость владения продуктом в дальнейшем, то вот и точка.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот глянул код полугодовалой давности..

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") даже не знаю, у меня такого нет, причины почему код был написан так или иначе мне как-то понятны..

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Причем всегда известно, какие есть опции по улучшению\/изменению. Но чаще объективных причин менять нет.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") код должен быть выразительным и без мусора.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Даже очень краткий код может быть хорошо понимаем без комментариев \(при достаточной квалификации\)

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") может, когда это действительно искусное владение. а может и нет, когда это 1\) самоцель 2\) ЧСВ

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") причины-то понятны. я наверное больше про то, что я пока ещё явно не постиг все паттерны и не всегда умею писать сразу "правильно".

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и такое бывает \)\). По себе знаю, иногда приходится бороться с порывами повыпендриваться \).

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") иногда нужно просто отложить вставлялку в сторону и отпустить в продакшен.

RT [@mr\_apt](https://twitter.com/mr_apt "TOMAT"): [@vladimore](https://twitter.com/vladimore "Waldemar") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если любишь отпусти

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") надо перестать заморачиваться, оно само придет \). Главное грамотная постановка задачи \(тесты\), а способ найдется.

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") вот трушный TDD – пока мечта. это явный показатель очень высокого уровня.

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") Вот да, всегда уважаю людей которые могут понять задачу до написания кода, чтобы на неё написать тесты.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это и есть итеративный подход. Нет идеальной схемы, это как лепка из пластилина \)

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну вот похоже скилл программиста это сколько тебе надо итераций, чтобы сделать правильно какую-то фичу.

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Правильно - это чтобы соответствовало внешним требованиям и не сгнило после того как они совсем поменял…

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") к сожалению, в коммерческой разработке инженеру не доносят задачу цельно. Поэтому и цель размывается. И качество ст…

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А вот те, кто не мыслит итерациями, на самом деле они находятся внутри одной бесконечной итерации \)\)

.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@freiksenet](https://twitter.com/freiksenet "freiksenet") так, у нас тут один словил МакКонахи, вызывайте помощь.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") то есть профессионалу нужно смириться со своим несовершенством и только тогда выйдет что-то стоящее

а как вам такое – "преждевременный отказ от копипасты"

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@freiksenet](https://twitter.com/freiksenet "freiksenet") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мне помогли в этом книги о физиологии мозга. Ошибки - обязательная часть обучения.

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") преждевременный отказ от говнокода

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@vladimore](https://twitter.com/vladimore "Waldemar") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Да меня не пугают мои ошибки, меня восхищают люди которые их делают меньше чем я при схожей …

.[@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") оттягивание коммита "it just works"

RT [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") проблема большинства программистов - инфантелизм. Отсюда и бескончные размышления о коде как о высшей ценности.

[pic.twitter.com\/6uDrgh3c4Y](http://t.co/6uDrgh3c4Y)

RT [@int16h](https://twitter.com/int16h "⠀KØLIBABCHUK"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [pic.twitter.com\/AoqHwjWsKr](http://t.co/AoqHwjWsKr)

RT [@apostololeg](https://twitter.com/apostololeg "^_^"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда N обработчиков с 80% копипаста лучше, чем один обработчик c декларацией параметров для них ?
https:\/\/t.[jsfiddle.net\/trnt\/savrdygy\/](https://t.co/rk1bR3lDXo "https://jsfiddle.net/trnt/savrdygy/")

.[@apostololeg](https://twitter.com/apostololeg "^_^") когда один обработчик становится слишком полиморфным и сложным

RT [@arik0n](https://twitter.com/arik0n "Sergey Belov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мастерство, это когда не только сам пишешь хорошо, но когда ты senior, и все в команде пишут как надо \(пусть не с …

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как делать TDD на фронтенде? И вообще как хорошо тестировать фронтенд?

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") karma + mocha + chai + sinon

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") + istanbul. dev-режим с вотчером в карме прекрасен, как раз для вывода на отдельный монитор при TDD.

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну технологии я знаю. Меня интересует процесс, как сделать тест не имея ещё, например, реакт компонента.

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Насколько полезно мерить code coverage? Мы не меряем, хотя и стараемся хорошо тестировать и требовать тесты в …

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Что нам даст code coverage?

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") даст понимание, какие условия, циклы и даже целые методы не покрыты тестами вообще никак.

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") без визуального представления связь тестов с реальным кодом слабовата даже у автора кода. сложно представить каждую мелочь.

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") задрачивать покрытие на 100% рационально разве что на небольших проектах. задача №1 – убедиться, что покрыто то, что должно.

ну или если это действительно критично [github.com\/babel\/babel\/is…](https://t.co/PYU2JY836v "https://github.com/babel/babel/issues/1851")

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") код Babel довольно сильно меняется, отсюда потребность сразу видеть то, что из нового или переделанного старого не покрыто.

.[@freiksenet](https://twitter.com/freiksenet "freiksenet") т.е. тесты после рефакторинга могут и не валиться, но это ещё не идеальный результат.

прикрутить покрытие тестов к нормальному проекту можно и за полчаса, а \*потенциальный\* профит куда круче.

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Когда у тебя очевидный ввод и вывод в программе, как в babel, то тестировать не так сложно.

чем умнее программист, тем тупее его функции [pic.twitter.com\/Fw3a6BSZqk](http://t.co/Fw3a6BSZqk)

RT [@superv1s0r](https://twitter.com/superv1s0r "Александр Коротков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нормальному?

.[@superv1s0r](https://twitter.com/superv1s0r "Александр Коротков") ну в смысле прикрутить к проекту новый инструмент не составляет труда :\) бывает же всякое.

RT [@illbullet](https://twitter.com/illbullet "Ill Bullet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@freiksenet](https://twitter.com/freiksenet "freiksenet")  что про tape думаете\/знаете?

.[@illbullet](https://twitter.com/illbullet "Ill Bullet") [@freiksenet](https://twitter.com/freiksenet "freiksenet") знал, что он есть, и что это в каком-то смысле альтернатива mocha. вот пошёл читать подробно [medium.com\/javascript-sce…](https://t.co/qjN6O5iJyy "https://medium.com/javascript-scene/why-i-use-tape-instead-of-mocha-so-should-you-6aa105d8eaf4")

.[@illbullet](https://twitter.com/illbullet "Ill Bullet") [@freiksenet](https://twitter.com/freiksenet "freiksenet") а можно преимущества в своих двух словах?

RT [@mostolovista](https://twitter.com/mostolovista "Georgiy Mostolovitsa"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") помню, как один БЭМ-разработчик, слово в слово такое выдавал.

.[@mostolovista](https://twitter.com/mostolovista "Georgiy Mostolovitsa") потом его конечно в дурку забрали?

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") о, да! Однажды я решил что ифы не нужны — есть же тернарки. Потом правда одумался, но 2 проекта так написа[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov")

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") [pic.twitter.com\/mXDcV16Huk](http://t.co/mXDcV16Huk)

эту забавную неделю с вами был [@deepsweet](https://twitter.com/deepsweet " k i r"). надеюсь, что было интересно, спасибо всем за общение :\) логи будут здесь [jsunderhood.ru\/deepsweet](https://t.co/mwSBEsyWtI "https://jsunderhood.ru/deepsweet")

часто говоря "мы" я имел в виду себя и [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") – моего коллегу, напарника по парному программированию и просто хорошего трансгендера.

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в штанах у тебя трансгендер

так и живём :\)

ещё увидимся в каком-нибудь cljsunderhood. логаут.

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
# andreypopp

_17 июля 2015_

## Понедельник <small>47 твитов</small>

Привет! На этой неделе с вами [@andreypopp](https://twitter.com/andreypopp "Andrey Popp"). Занимаюсь разработкой на JS/Python. С недавнего времени живу в Санкт-Петербурге.

Давайте поговорим о ФП в разработке интерфейсов. От концептов и языков программирования до библиотек и фрэймворков.

FRP: все о нём говорят, но мне до сих пор непонятна его ценность, хотя очень интересно. Кто-нибудь расскажет?

PureScript интересен тем, что позволяет судить об “эффектах” в приложении. Например: “пусть эта функция не пишет в DOM”, “тут нет I/O"

React: "опиши UI один раз как функцию от данных, не надо описывать миллион способов изменить UI при изменении данных”

Пришел в JS только после появления React.js. Кроме JS и Python применял на практике Erlang и Scala. Пробовал ещё много функциональщины...

Из интересного для меня на эту тему: Immediate mode UI (React, …), стат. типизация (PureScript, OCaml, …), FRP.

К сожалению не знаю такой. Были бы добровольцы перевести офиц. документацию… Перевод на китайский идет полным ходом. [twitter.com/pvlpvs/status/…](https://t.co/GmNB6ZPY5B "https://twitter.com/pvlpvs/status/620511990361026560")

Разговор про Elm: Да, но у того же PureScript система типов и FFI объективно лучше. Биндинги для React есть. [twitter.com/aluuu/status/6…](https://t.co/0yOkGnosmE "https://twitter.com/aluuu/status/620512479219744769")

Согласен! Вот, как пример, PR для добавления перевода части документации на китайский. [github.com/facebook/react…](https://t.co/icmqMqGFuF "https://github.com/facebook/react/pull/2877") [twitter.com/talgautb/statu…](https://t.co/4iom9CpJR1 "https://twitter.com/talgautb/status/620512734958882816")

Однозначно Петроградская сторона, но у меня предвзятое мнение, я закончил ИТМО. [twitter.com/listochkin/sta…](https://t.co/Wg5iRzagoE "https://twitter.com/listochkin/status/620513872424779776")

RT [@aluuu](https://twitter.com/aluuu "Alexander Dinu"): .[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ого, в purescript даже typeclasses запилены, крутяк.

RT [@aluuu](https://twitter.com/aluuu "Усиление и Манатан"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [elm-lang.org/blog/blazing-f…](http://t.co/8DZnNsqrmJ "http://elm-lang.org/blog/blazing-fast-html")

. [@aluuu](https://twitter.com/aluuu "Alexander Dinu") когда я смотрел Elm этого еще не было. Но и теперь непонятно что мне даст FRP. По-моему сложно постоянно брать “время” в расчет.

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ФП в UI ничем не отличается от ФП на бекенде, в консоли или еще где-то.

. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") согласен, но есть же какие-то специфичные штуки: immediate mode ui тот же

RT [@is_ruslan](https://twitter.com/is_ruslan "Ruslan  Ismagilov"): Awesome Elm: [bit.ly/1M5EeV2](http://t.co/SHG8ixP1iA "http://bit.ly/1M5EeV2") список ресурсов, статей и примеров для Elm. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [pic.twitter.com/HawBQ07MH2](http://t.co/HawBQ07MH2)

Не думаю что это хайп, просто функциональный подход работает [twitter.com/_cloudo/status…](https://t.co/DDmcXkWGvt "https://twitter.com/_cloudo/status/620526653698019328")

Хороший список книг/материалов на русском [alexott.net/ru/fp/books/](http://t.co/aV9T3Cj1pA "http://alexott.net/ru/fp/books/") от [@alexott](https://twitter.com/alexott "Alex Ott") книги Харрисона неплохи  [twitter.com/bagadim/status…](https://t.co/wtXJ57mlTO "https://twitter.com/bagadim/status/620521558608642048")

Действительно интересно почитать. Кстати gist от создателя [cycle.js.org](http://t.co/3We0KJKI4F "http://cycle.js.org/") [@andrestaltz](https://twitter.com/andrestaltz "André Staltz")  [twitter.com/__fro/status/6…](https://t.co/5ddxvzp3IJ "https://twitter.com/__fro/status/620597355130261504")

Но даже в простейших примерах FRP прослеживается главный его недостаток: необходимость учитывать время, даже там где это не нужно.

Поэтому "FRP как архитектура всего приложения" не очень хорошая идея на мой взгляд. Для анимаций, наверное, самое-то.

Хорошие абстракции должны изолировать время и асинхронность.

В React/Flux архитектуре время изолируется в хранилищах вместо того, чтобы утекать в UI. UI — отображение определенного момента времени.

Redux от [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov") реализует управление состоянием лучше чем Flux: вместо изменяющегося состояния есть "рецепт как изменить состояние"

Что, кстати, уже снова близко к FRP, но есть чувство что там это оправдано: где-то время нужно учиывать. Главное делать это контролируемо.

Возможно последний твит это все-же результат моего непонимания FRP (или понимания? :-)

Следующий шаг в управлении изменяющемся состоянии это CRDT структуры данных где порядок операций значения не имеет. Прячет время ещё дальше

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, смотрел недавно, круто, но пока не одуплил, нужно покурить paper . За счет чего там игнорится время?

. [@__fro](https://twitter.com/__fro "Alexey Frolov") операции над данными можно менять местами и в какой-то момент у всех (сервер, клиент, другой клиент, ...) будет одна картина мира

. [@__fro](https://twitter.com/__fro "Alexey Frolov") вот кстати классный понятный paper на тему CRDT: [gsd.di.uminho.pt/members/cbm/ps…](http://t.co/sFhLmdHBgS "http://gsd.di.uminho.pt/members/cbm/ps/crdtOpsMiddleware.pdf") (осторожно PDF)

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и что будет, если, скажем, у нас googledocs и оба юзера одновременно вставили разные символы в одно и тоже место?

. [@__fro](https://twitter.com/__fro "Alexey Frolov") оба юзера увидят оба символа в одном и том же порядке, непонятно в каком, главное что порядок будет одним для всех

Кто ещё не видел есть реализация CRDT на JS (работает конечно же и в браузерах): [swarmjs.github.io](http://t.co/PQVjQuzDvB "http://swarmjs.github.io/") от [@gritzko](https://twitter.com/gritzko "Victor Grishchenko")

RT [@gritzko](https://twitter.com/gritzko "Victor Grishchenko"): [@__fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") оно не игнорится, оно явно учитывается; все операции помечены timestamp; каждое состояние - это версия.

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@gritzko](https://twitter.com/gritzko "Victor Grishchenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это часть CRDT или надстройка?

RT [@gritzko](https://twitter.com/gritzko "Victor Grishchenko"): [@__fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это CRDT в [@swarm_js](https://twitter.com/swarm_js "Swarm.js"), op-based с lamport timestamps; CRDT в целом это очень широкое определение

RT [@gritzko](https://twitter.com/gritzko "Victor Grishchenko"): [@__fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати, статья в WP очень хорошего качества [en.wikipedia.org/wiki/Conflict-…](https://t.co/eNMZoY5d3f "https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type"), вариант Swarm: [swarmjs.github.io/articles/lampo…](http://t.co/qCHlTHQKyF "http://swarmjs.github.io/articles/lamport/")

On FRP: [twitter.com/andrestaltz/st…](https://t.co/jx57cTywXI "https://twitter.com/andrestaltz/status/620632774509219840")

RT [@andrestaltz](https://twitter.com/andrestaltz "André Staltz"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") and declare dependencies between phenomena, and that's it. A Cycle.js app is fully declarative.

RT [@Semenov](https://twitter.com/Semenov "Бодхисаттва Семенов"): .[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Давайте обудим тестирование. Кто, что и как теститует. У кого какое покрытие.

У нас тонкая “запускалка” поверх webpack для Jasmine спек: [github.com/prometheusrese…](https://t.co/FW9kCdaXzl "https://github.com/prometheusresearch/webtest")

в этом суть React [twitter.com/__fro/status/6…](https://t.co/M2g4BLNUek "https://twitter.com/__fro/status/620637952692088832")

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") mocha + react в нодовом окружении для юнитов. Еще где то в моем идеальном мире должен быть селениум, но пока увы

RT [@ebronnik](https://twitter.com/ebronnik "Evgeny"): [@Semenov](https://twitter.com/Semenov "Бодхисаттва Семенов") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тестировать должны пользователи и сообщать об ошибках разработчику.

Отличная статья: “UI как функция без побочных эффектов” /cc [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") есть примеры к нашей недавней дискуссии [twitter.com/AndryRochev/st…](https://t.co/XHxceQ6Yfh "https://twitter.com/AndryRochev/status/620698640982519808")

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А на чем нынче модно/удобно делать REST API на Node?

## Вторник <small>28 твитов</small>

Создатель [@babeljs](https://twitter.com/babeljs "Babel") присоединяется к команде FB — хорошо когда за таким полезным проектом целая компания.

Вчера ночью чуть-чуть обсуждали REST API. Интересно, появление GraphQL/Relay и Falcor вытеснит классический REST или нет?

У нас есть своя похожая штука:  HTSQL [htsql.org/doc/overview.h…](http://t.co/JkQt6yMcZZ "http://htsql.org/doc/overview.html#what-is-htsql"), более близка к полноценному языку запросов, но у нас и требования другие

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Для внутренних API - вытеснит 100%.

. [@freiksenet](https://twitter.com/freiksenet "freiksenet") почему только для внутренних? Когда участвовал в хакатонах всегда хотелось чего-то подобного GraphQL

. [@freiksenet](https://twitter.com/freiksenet "freiksenet") если бы еще в одном запросе и разные источники можно было запрашивать — вообще класс. Идея для стартапа — GraphQL Mashups ;-)

Коммент от участника TC39 про то почему ваши любимые фичи [@babeljs](https://twitter.com/babeljs "Babel") не попадут в ES2016…  [twitter.com/RReverser/stat…](https://t.co/fhIxlXyfKi "https://twitter.com/RReverser/status/620872737213427712")

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А, ну сделай схему и resolve. GraphQL только систему типов дает, он нейтрален в плане источника(ов).

. [@freiksenet](https://twitter.com/freiksenet "freiksenet") ага, об этом и речь, был бы SaaS, где я эту схему составлю и который мне обеспечит кэширования для датасетов и т.д.

. [@freiksenet](https://twitter.com/freiksenet "freiksenet") расскажи про reindex.io в паре твитов? BaaS? Какие фичи? Прайс? Как-то связаны с FB?

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если коротко - мы как Firebase или Parse но с GraphQL API. BaaS. Прайс еще не уверены, но думаю как у конкурен…

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") С FB напрямую не связаны, но активно с ними дальнейшее развитие GraphQL обсуждаем. Мы до этого свою реализация…

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Сейчас переходим на graphql-js, у нас там другой подход в плане выполнения запросов и мы обсуждаем как сделать…

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") По-моему REST легче контроллировать в плане потребления ресурсов. GraphQL можно сразу все запросить, сложнее д…

. [@freiksenet](https://twitter.com/freiksenet "freiksenet") можно брать деньги за переходы в графе

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я бы ставил на Datomic

. [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R") Datomic хорош, но это БД. GraphQL/Falcor не заботятся о хранении данных, думаю их легче начать использовать

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так ведь [docs.datomic.com/query.html](http://t.co/lLeMl1S6on "http://docs.datomic.com/query.html") считай тот же GraphQL. Уже есть тонна реализаций для JS

. [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R") ок, это про Datalog, а что за реализации для JS? Я видел DataScript для CLJS

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ALF_er](https://twitter.com/ALF_er "Illia Segeda") стоит немного подождать, Datomic и его инфраструктура достаточно молоды, но IMHO это гораздо перспекти…

RT [@sergtitov](https://twitter.com/sergtitov "Sergey Titov"): [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ALF_er](https://twitter.com/ALF_er "Illia Segeda") not sure who from [graphql](https://twitter.com/search?q=%23graphql)/Datomic/Falcor group will win, but definitely not REST. It will …

RT [@sergtitov](https://twitter.com/sergtitov "Sergey Titov"): [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ALF_er](https://twitter.com/ALF_er "Illia Segeda") using REST for apps dev always felt awkward, http was never designed for apps and has are t…

RT [@sergtitov](https://twitter.com/sergtitov "Sergey Titov"): [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ALF_er](https://twitter.com/ALF_er "Illia Segeda") I don't want to solve countless sync problems, I just want to work with data and code biz l[Firebase](https://twitter.com/search?q=%23Firebase)

Отличный стартер-кит (React, ESLint, Mocha, Babel, Webpack) от [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov"). Но я бы заменил npm скрипты на Makefile [twitter.com/dan_abramov/st…](https://t.co/PmpkunlctV "https://twitter.com/dan_abramov/status/621012736193994752")

Кто-нибудь должен сделать фрэймворк для shell скриптов, чтобы подтягивать функции с npm. Я с удовольствием буду его использовать.

RT [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ты просто старый

"Makefile это JSX командной строки” — пока не попробуешь не поймешь в чем польза

Вот пример тонкого Makefile для JS проекта: [github.com/andreypopp/aut…](https://t.co/Dbnpg99Ldr "https://github.com/andreypopp/autobind-decorator/blob/master/Makefile") на мой взгляд приятнее чем npm скрипты + директория scripts/

## Среда <small>37 твитов</small>

Поэкспериментировал с темингом для React компонент [github.com/andreypopp/ret…](https://t.co/ussnTSA7Jm "https://github.com/andreypopp/rethemeable") Идея: протокол для компонент, которым можно изменять внешний вид

Можно использовать с inline styles, css modules, … Как вам API? Чего не хватает?

RT [@olebedev](https://twitter.com/olebedev "Oleg Lebedev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вероятно разработчик столкнется с тем что для другой темы нужна другая разметка. Такое было два раза из двух, в …

. [@olebedev](https://twitter.com/olebedev "Oleg Lebedev") можно передавать функции/компоненты как часть темы для компонента — так можно заменять часть разметки

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Но при этом в самом компоненте должно быть предусмотрено заранее, что вот такую-то часть можно заменять? [@olebedev](https://twitter.com/olebedev "Oleg Lebedev")

. [@toivonens](https://twitter.com/toivonens "var ya; // ru") да, это контролируется компонентом, никакой магии

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В случае теминга, может будет проще трансформировать дерево компонентов при запуске или изменении темы?

. [@__fro](https://twitter.com/__fro "Alexey Frolov") дерево не реализуется в один момент, оно ленивое (через вызовы render()), поэтому нужен способ изнутри чтобы инжектит тему

Альтернатива: делать теминг на уровне системы модулей, так можно инжектить нужные стили статически (нужен webpack-loader какой-нибудь)

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Компонент должен знать обо всех своих темах заранее :-) В БЭМ можно что угодно доопределить, но больше нигде та…

. [@toivonens](https://twitter.com/toivonens "var ya; // ru") я бы сказал что он должен определить контракт для своих тем, мне кажется это хорошо

Кто еще не знаком с CSS modules [github.com/css-modules/cs…](https://t.co/PkmczUu0lU "https://github.com/css-modules/css-modules") компонентный подход к стилям

RT [@andrey_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") хочу заметить, что первый компонентный подход — БЭМ. CSS Modules интересны тем, что он автоматический.

. [@andrey_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") я хотел сказать первый компонентный подход который работает :-)

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вообще,как вариант, можно сделать фабрику фабрик компонентов, которая бы возвращала themed фабрики.Их и использоват…

Подсказали классную утилиту для демок React компонент [github.com/insin/react-he…](https://t.co/D82bvIxnjz "https://github.com/insin/react-heatpack") — heatpack ./WidgetDemo.js

Идея: плагин для webpack который позволяет редактировать props компонент прямо в браузере. Сохраняет обратно в исходники.

Наводишь мышкой на экране на элемент и открываешь диалог с редакторов свойств. Прямо в приложении.

Для этого нужно будет аннотировать все вызовы React.createElement позицией каждого prop в исходниках

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так плагин для Chrome DevTools такое позволяет делать

. [@__fro](https://twitter.com/__fro "Alexey Frolov") Значит можно попробовать добавить ему возможность сохранять изменения

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как браузер будет работать с fs?

. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") через webpack-dev-server, нужен плагин именно к нему

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") эмм.. А куда? ) Куда сохранять? Ты имеешь ввиду defaults?

. [@__fro](https://twitter.com/__fro "Alexey Frolov") прямо в том место где создаётся React элемент. Это можно будет делать только свойств переданных как литералы a=“…”, a={1}, a={{…}}

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ChromeDevTools](https://twitter.com/ChromeDevTools "Chrome DevTools") таки умеет маппить сорцы на fs )

RT [@__fro](https://twitter.com/__fro "Alexey Frolov"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ChromeDevTools](https://twitter.com/ChromeDevTools "Chrome DevTools") не знаю, но я могу запилить. Я могу править из CDT, идет сохранение в FS и происходит h…

Альтернатива Chrome Workspaces от FB [twitter.com/RReverser/stat…](https://t.co/yRUylyIN2R "https://twitter.com/RReverser/status/621283973176672257")

Есть мнение что devtools должны быть не в отдельной панели UI, а частью самого приложения. //cc [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov") как эксперта по DX

DX — developer experience, аналог UX.

RT [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov"): [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мы их «вытащим» в remote потом. Первый этап — сделать их мощными, а не мучаться с…

RT [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov"): [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Цель в том числе чтобы они не были привязаны к Хрому. Например чтобы можно было и…

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и я о том же. Для девелопера важно, что инструмент умеет, а не как работает или г…

. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov") согласен, просто chrome devtools это “прошлое" когда интроспекцию можно было делать только на DOM/BOM уровне

Сейчас когда интроспекцию можно делать на уровне приложения (React, Redux) можно экспериментировать с новыми видами, интерфейсами devtools

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") с моей точки зрения CDT - это удобная панелька с табиками, куда можно добавить ништяков. Каких? - дело фантази[@dan_abramov](https://twitter.com/dan_abramov "Dan Abramov")

В сочетании с Babel-ESLint это просто замечательный инструмент. Появился 1.0-RC [twitter.com/geteslint/stat…](https://t.co/zAnRkWEgS5 "https://twitter.com/geteslint/status/621410300042960896")

## Четверг <small>4 твита</small>

Дискуссия про Babel и нестандартные расширения языка (JSX):   [reddit.com/r/javascript/c…](https://t.co/5vxEbanMqx "https://www.reddit.com/r/javascript/comments/3df2qm/interested_in_babel_with_nonstandard_features/")

Не люблю работать из дома [twitter.com/MarkAgee/statu…](https://t.co/Uew2XEQY8M "https://twitter.com/MarkAgee/status/620990471720992768")

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Из DOMа.

RT [@Kern_0](https://twitter.com/Kern_0 "Арсений Максимов"): Кстати, [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), тут была идейка у меня и [@Rukomoynikov](https://twitter.com/Rukomoynikov "Maksim Rukomoynikov"), покататься где-нибудь на выходных по Москве. Кто с нами?

## Пятница <small>13 твитов</small>

Действительно, let, const или var? В es6 я использую let, так меньше набирать да и читается отлично. [twitter.com/_ericelliott/s…](https://t.co/mquZChOabh "https://twitter.com/_ericelliott/status/621863257633103872")

. [@marinintim](https://twitter.com/marinintim "Tim Marinin") в es6 выбор фактически между const и let, var сломан

RT [@andrey_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как я понимаю, популярность const идёт из функциональных кругов

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@marinintim](https://twitter.com/marinintim "Tim Marinin") а можно подробнее, почему var сломан?

. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@marinintim](https://twitter.com/marinintim "Tim Marinin") let биндинги более локальны (внутри блока а не внутри функции как var). Меньше шанса на ошибки.

RT [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин"): [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@marinintim](https://twitter.com/marinintim "Tim Marinin") Нет задач под var. Есть let (который к тому-же избавляет от лишних замыканий) и const для …

RT [@_nezed](https://twitter.com/_nezed "Дмитрий Наумов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") врывающийся в студию вопрос (прощу прощения)
Ребята, есть идеи как описывать JS Doc на props в React классах/компо…

RT [@freiksenet](https://twitter.com/freiksenet "freiksenet"): [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@marinintim](https://twitter.com/marinintim "Tim Marinin") Я бы вообще сделал что var = let, а let = const.

. [@freiksenet](https://twitter.com/freiksenet "freiksenet") насчёт let = const наверное соглашусь, нужен плагин для Babel.js

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@_nezed](https://twitter.com/_nezed "Дмитрий Наумов") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Оригинальный вариант — использовать propTypes

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): const - normal
let - code smell
var - legacy

/cc [@_ericelliott](https://twitter.com/_ericelliott "Eric Elliott")  [twitter.com/jsunderhood/st…](https://t.co/Ik8CRI9QN8 "https://twitter.com/jsunderhood/status/621989667005669376")

RT [@mista_k](https://twitter.com/mista_k "Vladimir Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Расскажи, пожалуйста, про своё рабочее окружение, IDE, какие-нибудь полезные инстументы, которыми ты часто пользу…

. [@mista_k](https://twitter.com/mista_k "Vladimir Kuznetsov") vim

## Ссылки

### github.com  
<a href="https://github.com/facebook/react/pull/2877" target="_blank">https://github.com/facebook/react/pull/2877</a>  
<a href="https://github.com/prometheusresearch/webtest" target="_blank">https://github.com/prometheusresearch/webtest</a>  
<a href="https://github.com/andreypopp/autobind-decorator/blob/master/Makefile" target="_blank">https://github.com/andreypopp/autobind-decorator/blob/master/Makefile</a>  
<a href="https://github.com/andreypopp/rethemeable" target="_blank">https://github.com/andreypopp/rethemeable</a>  
<a href="https://github.com/css-modules/css-modules" target="_blank">https://github.com/css-modules/css-modules</a>  
<a href="https://github.com/insin/react-heatpack" target="_blank">https://github.com/insin/react-heatpack</a>

### Другие

<a href="http://elm-lang.org/blog/blazing-fast-html" target="_blank">http://elm-lang.org/blog/blazing-fast-html</a>  
<a href="http://bit.ly/1M5EeV2" target="_blank">http://bit.ly/1M5EeV2</a>  
<a href="http://alexott.net/ru/fp/books/" target="_blank">http://alexott.net/ru/fp/books/</a>  
<a href="http://cycle.js.org/" target="_blank">http://cycle.js.org/</a>  
<a href="http://gsd.di.uminho.pt/members/cbm/ps/crdtOpsMiddleware.pdf" target="_blank">http://gsd.di.uminho.pt/members/cbm/ps/crdtOpsMiddleware.pdf</a>  
<a href="http://swarmjs.github.io/" target="_blank">http://swarmjs.github.io/</a>  
<a href="http://swarmjs.github.io/articles/lamport/" target="_blank">http://swarmjs.github.io/articles/lamport/</a>  
<a href="https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type" target="_blank">https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type</a>  
<a href="http://htsql.org/doc/overview.html#what-is-htsql" target="_blank">http://htsql.org/doc/overview.html#what-is-htsql</a>  
<a href="http://docs.datomic.com/query.html" target="_blank">http://docs.datomic.com/query.html</a>  
<a href="https://www.reddit.com/r/javascript/comments/3df2qm/interested_in_babel_with_nonstandard_features/" target="_blank">https://www.reddit.com/r/javascript/comments/3df2qm/interested_in_babel_with_nonstandard_features/</a>
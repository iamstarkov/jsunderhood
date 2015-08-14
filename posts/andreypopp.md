# andreypopp

_17 июля 2015_

## Понедельник <small>47 твитов</small>

Привет! На этой неделе с вами <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a>. Занимаюсь разработкой на JS/Python. С недавнего времени живу в Санкт-Петербурге.

Давайте поговорим о ФП в разработке интерфейсов. От концептов и языков программирования до библиотек и фрэймворков.

FRP: все о нём говорят, но мне до сих пор непонятна его ценность, хотя очень интересно. Кто-нибудь расскажет?

PureScript интересен тем, что позволяет судить об “эффектах” в приложении. Например: “пусть эта функция не пишет в DOM”, “тут нет I/O"

React: "опиши UI один раз как функцию от данных, не надо описывать миллион способов изменить UI при изменении данных”

Пришел в JS только после появления React.js. Кроме JS и Python применял на практике Erlang и Scala. Пробовал ещё много функциональщины...

Из интересного для меня на эту тему: Immediate mode UI (React, …), стат. типизация (PureScript, OCaml, …), FRP.

К сожалению не знаю такой. Были бы добровольцы перевести офиц. документацию… Перевод на китайский идет полным ходом. <a href="https://t.co/GmNB6ZPY5B">twitter.com/pvlpvs/status/…</a>

Разговор про Elm: Да, но у того же PureScript система типов и FFI объективно лучше. Биндинги для React есть. <a href="https://t.co/0yOkGnosmE">twitter.com/aluuu/status/6…</a>

Согласен! Вот, как пример, PR для добавления перевода части документации на китайский. <a href="https://t.co/icmqMqGFuF">github.com/facebook/react…</a> <a href="https://t.co/4iom9CpJR1">twitter.com/talgautb/statu…</a>

Однозначно Петроградская сторона, но у меня предвзятое мнение, я закончил ИТМО. <a href="https://t.co/Wg5iRzagoE">twitter.com/listochkin/sta…</a>

RT <a href="https://twitter.com/aluuu" title="Alexander Dinu">@aluuu</a>: .<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ого, в purescript даже typeclasses запилены, крутяк.

RT <a href="https://twitter.com/aluuu" title="Усиление и Манатан">@aluuu</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/8DZnNsqrmJ">elm-lang.org/blog/blazing-f…</a>

. <a href="https://twitter.com/aluuu" title="Alexander Dinu">@aluuu</a> когда я смотрел Elm этого еще не было. Но и теперь непонятно что мне даст FRP. По-моему сложно постоянно брать “время” в расчет.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ФП в UI ничем не отличается от ФП на бекенде, в консоли или еще где-то.

. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> согласен, но есть же какие-то специфичные штуки: immediate mode ui тот же

RT <a href="https://twitter.com/is_ruslan" title="Ruslan  Ismagilov">@is_ruslan</a>: Awesome Elm: <a href="http://t.co/SHG8ixP1iA">bit.ly/1M5EeV2</a> список ресурсов, статей и примеров для Elm. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/HawBQ07MH2">pic.twitter.com/HawBQ07MH2</a>

Не думаю что это хайп, просто функциональный подход работает <a href="https://t.co/DDmcXkWGvt">twitter.com/_cloudo/status…</a>

Хороший список книг/материалов на русском <a href="http://t.co/aV9T3Cj1pA">alexott.net/ru/fp/books/</a> от <a href="https://twitter.com/alexott" title="Alex Ott">@alexott</a> книги Харрисона неплохи  <a href="https://t.co/wtXJ57mlTO">twitter.com/bagadim/status…</a>

Действительно интересно почитать. Кстати gist от создателя <a href="http://t.co/3We0KJKI4F">cycle.js.org</a> <a href="https://twitter.com/andrestaltz" title="André Staltz">@andrestaltz</a>  <a href="https://t.co/5ddxvzp3IJ">twitter.com/__fro/status/6…</a>

Но даже в простейших примерах FRP прослеживается главный его недостаток: необходимость учитывать время, даже там где это не нужно.

Поэтому "FRP как архитектура всего приложения" не очень хорошая идея на мой взгляд. Для анимаций, наверное, самое-то.

Хорошие абстракции должны изолировать время и асинхронность.

В React/Flux архитектуре время изолируется в хранилищах вместо того, чтобы утекать в UI. UI — отображение определенного момента времени.

Redux от <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> реализует управление состоянием лучше чем Flux: вместо изменяющегося состояния есть "рецепт как изменить состояние"

Что, кстати, уже снова близко к FRP, но есть чувство что там это оправдано: где-то время нужно учиывать. Главное делать это контролируемо.

Возможно последний твит это все-же результат моего непонимания FRP (или понимания? :-)

Следующий шаг в управлении изменяющемся состоянии это CRDT структуры данных где порядок операций значения не имеет. Прячет время ещё дальше

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да, смотрел недавно, круто, но пока не одуплил, нужно покурить paper . За счет чего там игнорится время?

. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> операции над данными можно менять местами и в какой-то момент у всех (сервер, клиент, другой клиент, ...) будет одна картина мира

. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> вот кстати классный понятный paper на тему CRDT: <a href="http://t.co/sFhLmdHBgS">gsd.di.uminho.pt/members/cbm/ps…</a> (осторожно PDF)

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и что будет, если, скажем, у нас googledocs и оба юзера одновременно вставили разные символы в одно и тоже место?

. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> оба юзера увидят оба символа в одном и том же порядке, непонятно в каком, главное что порядок будет одним для всех

Кто ещё не видел есть реализация CRDT на JS (работает конечно же и в браузерах): <a href="http://t.co/PQVjQuzDvB">swarmjs.github.io</a> от <a href="https://twitter.com/gritzko" title="Victor Grishchenko">@gritzko</a>

RT <a href="https://twitter.com/gritzko" title="Victor Grishchenko">@gritzko</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> оно не игнорится, оно явно учитывается; все операции помечены timestamp; каждое состояние - это версия.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/gritzko" title="Victor Grishchenko">@gritzko</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это часть CRDT или надстройка?

RT <a href="https://twitter.com/gritzko" title="Victor Grishchenko">@gritzko</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это CRDT в <a href="https://twitter.com/swarm_js" title="Swarm.js">@swarm_js</a>, op-based с lamport timestamps; CRDT в целом это очень широкое определение

RT <a href="https://twitter.com/gritzko" title="Victor Grishchenko">@gritzko</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кстати, статья в WP очень хорошего качества <a href="https://t.co/eNMZoY5d3f">en.wikipedia.org/wiki/Conflict-…</a>, вариант Swarm: <a href="http://t.co/qCHlTHQKyF">swarmjs.github.io/articles/lampo…</a>

On FRP: <a href="https://t.co/jx57cTywXI">twitter.com/andrestaltz/st…</a>

RT <a href="https://twitter.com/andrestaltz" title="André Staltz">@andrestaltz</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> and declare dependencies between phenomena, and that's it. A Cycle.js app is fully declarative.

RT <a href="https://twitter.com/Semenov" title="Бодхисаттва Семенов">@Semenov</a>: .<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Давайте обудим тестирование. Кто, что и как теститует. У кого какое покрытие.

У нас тонкая “запускалка” поверх webpack для Jasmine спек: <a href="https://t.co/FW9kCdaXzl">github.com/prometheusrese…</a>

в этом суть React <a href="https://t.co/M2g4BLNUek">twitter.com/__fro/status/6…</a>

RT <a href="https://twitter.com/slonoed" title="Dmitry M.">@slonoed</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> mocha + react в нодовом окружении для юнитов. Еще где то в моем идеальном мире должен быть селениум, но пока увы

RT <a href="https://twitter.com/ebronnik" title="Evgeny">@ebronnik</a>: <a href="https://twitter.com/Semenov" title="Бодхисаттва Семенов">@Semenov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тестировать должны пользователи и сообщать об ошибках разработчику.

Отличная статья: “UI как функция без побочных эффектов” /cc <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> есть примеры к нашей недавней дискуссии <a href="https://t.co/XHxceQ6Yfh">twitter.com/AndryRochev/st…</a>

RT <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А на чем нынче модно/удобно делать REST API на Node?

## Вторник <small>28 твитов</small>

Создатель <a href="https://twitter.com/babeljs" title="Babel">@babeljs</a> присоединяется к команде FB — хорошо когда за таким полезным проектом целая компания.

Вчера ночью чуть-чуть обсуждали REST API. Интересно, появление GraphQL/Relay и Falcor вытеснит классический REST или нет?

У нас есть своя похожая штука:  HTSQL <a href="http://t.co/JkQt6yMcZZ">htsql.org/doc/overview.h…</a>, более близка к полноценному языку запросов, но у нас и требования другие

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Для внутренних API - вытеснит 100%.

. <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> почему только для внутренних? Когда участвовал в хакатонах всегда хотелось чего-то подобного GraphQL

. <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> если бы еще в одном запросе и разные источники можно было запрашивать — вообще класс. Идея для стартапа — GraphQL Mashups ;-)

Коммент от участника TC39 про то почему ваши любимые фичи <a href="https://twitter.com/babeljs" title="Babel">@babeljs</a> не попадут в ES2016…  <a href="https://t.co/fhIxlXyfKi">twitter.com/RReverser/stat…</a>

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А, ну сделай схему и resolve. GraphQL только систему типов дает, он нейтрален в плане источника(ов).

. <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> ага, об этом и речь, был бы SaaS, где я эту схему составлю и который мне обеспечит кэширования для датасетов и т.д.

. <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> расскажи про reindex.io в паре твитов? BaaS? Какие фичи? Прайс? Как-то связаны с FB?

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Если коротко - мы как Firebase или Parse но с GraphQL API. BaaS. Прайс еще не уверены, но думаю как у конкурен…

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> С FB напрямую не связаны, но активно с ними дальнейшее развитие GraphQL обсуждаем. Мы до этого свою реализация…

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Сейчас переходим на graphql-js, у нас там другой подход в плане выполнения запросов и мы обсуждаем как сделать…

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> По-моему REST легче контроллировать в плане потребления ресурсов. GraphQL можно сразу все запросить, сложнее д…

. <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> можно брать деньги за переходы в графе

RT <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я бы ставил на Datomic

. <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a> Datomic хорош, но это БД. GraphQL/Falcor не заботятся о хранении данных, думаю их легче начать использовать

RT <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> так ведь <a href="http://t.co/lLeMl1S6on">docs.datomic.com/query.html</a> считай тот же GraphQL. Уже есть тонна реализаций для JS

. <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a> ок, это про Datalog, а что за реализации для JS? Я видел DataScript для CLJS

RT <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> стоит немного подождать, Datomic и его инфраструктура достаточно молоды, но IMHO это гораздо перспекти…

RT <a href="https://twitter.com/sergtitov" title="Sergey Titov">@sergtitov</a>: <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> not sure who from <a href="https://twitter.com/search?q=%23graphql">#graphql</a>/Datomic/Falcor group will win, but definitely not REST. It will …

RT <a href="https://twitter.com/sergtitov" title="Sergey Titov">@sergtitov</a>: <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> using REST for apps dev always felt awkward, http was never designed for apps and has are t…

RT <a href="https://twitter.com/sergtitov" title="Sergey Titov">@sergtitov</a>: <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> I don't want to solve countless sync problems, I just want to work with data and code biz l<a href="https://twitter.com/search?q=%23Firebase">#Firebase</a>

Отличный стартер-кит (React, ESLint, Mocha, Babel, Webpack) от <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>. Но я бы заменил npm скрипты на Makefile <a href="https://t.co/PmpkunlctV">twitter.com/dan_abramov/st…</a>

Кто-нибудь должен сделать фрэймворк для shell скриптов, чтобы подтягивать функции с npm. Я с удовольствием буду его использовать.

RT <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ты просто старый

"Makefile это JSX командной строки” — пока не попробуешь не поймешь в чем польза

Вот пример тонкого Makefile для JS проекта: <a href="https://t.co/Dbnpg99Ldr">github.com/andreypopp/aut…</a> на мой взгляд приятнее чем npm скрипты + директория scripts/

## Среда <small>37 твитов</small>

Поэкспериментировал с темингом для React компонент <a href="https://t.co/ussnTSA7Jm">github.com/andreypopp/ret…</a> Идея: протокол для компонент, которым можно изменять внешний вид

Можно использовать с inline styles, css modules, … Как вам API? Чего не хватает?

RT <a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вероятно разработчик столкнется с тем что для другой темы нужна другая разметка. Такое было два раза из двух, в …

. <a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a> можно передавать функции/компоненты как часть темы для компонента — так можно заменять часть разметки

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Но при этом в самом компоненте должно быть предусмотрено заранее, что вот такую-то часть можно заменять? <a href="https://twitter.com/olebedev" title="Oleg Lebedev">@olebedev</a>

. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> да, это контролируется компонентом, никакой магии

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В случае теминга, может будет проще трансформировать дерево компонентов при запуске или изменении темы?

. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> дерево не реализуется в один момент, оно ленивое (через вызовы render()), поэтому нужен способ изнутри чтобы инжектит тему

Альтернатива: делать теминг на уровне системы модулей, так можно инжектить нужные стили статически (нужен webpack-loader какой-нибудь)

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Компонент должен знать обо всех своих темах заранее :-) В БЭМ можно что угодно доопределить, но больше нигде та…

. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> я бы сказал что он должен определить контракт для своих тем, мне кажется это хорошо

Кто еще не знаком с CSS modules <a href="https://t.co/PkmczUu0lU">github.com/css-modules/cs…</a> компонентный подход к стилям

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> хочу заметить, что первый компонентный подход — БЭМ. CSS Modules интересны тем, что он автоматический.

. <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> я хотел сказать первый компонентный подход который работает :-)

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вообще,как вариант, можно сделать фабрику фабрик компонентов, которая бы возвращала themed фабрики.Их и использоват…

Подсказали классную утилиту для демок React компонент <a href="https://t.co/D82bvIxnjz">github.com/insin/react-he…</a> — heatpack ./WidgetDemo.js

Идея: плагин для webpack который позволяет редактировать props компонент прямо в браузере. Сохраняет обратно в исходники.

Наводишь мышкой на экране на элемент и открываешь диалог с редакторов свойств. Прямо в приложении.

Для этого нужно будет аннотировать все вызовы React.createElement позицией каждого prop в исходниках

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> так плагин для Chrome DevTools такое позволяет делать

. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> Значит можно попробовать добавить ему возможность сохранять изменения

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как браузер будет работать с fs?

. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> через webpack-dev-server, нужен плагин именно к нему

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> эмм.. А куда? ) Куда сохранять? Ты имеешь ввиду defaults?

. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> прямо в том место где создаётся React элемент. Это можно будет делать только свойств переданных как литералы a=“…”, a={1}, a={{…}}

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ChromeDevTools" title="Chrome DevTools">@ChromeDevTools</a> таки умеет маппить сорцы на fs )

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ChromeDevTools" title="Chrome DevTools">@ChromeDevTools</a> не знаю, но я могу запилить. Я могу править из CDT, идет сохранение в FS и происходит h…

Альтернатива Chrome Workspaces от FB <a href="https://t.co/yRUylyIN2R">twitter.com/RReverser/stat…</a>

Есть мнение что devtools должны быть не в отдельной панели UI, а частью самого приложения. //cc <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> как эксперта по DX

DX — developer experience, аналог UX.

RT <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>: <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Мы их «вытащим» в remote потом. Первый этап — сделать их мощными, а не мучаться с…

RT <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>: <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Цель в том числе чтобы они не были привязаны к Хрому. Например чтобы можно было и…

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и я о том же. Для девелопера важно, что инструмент умеет, а не как работает или г…

. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> согласен, просто chrome devtools это “прошлое" когда интроспекцию можно было делать только на DOM/BOM уровне

Сейчас когда интроспекцию можно делать на уровне приложения (React, Redux) можно экспериментировать с новыми видами, интерфейсами devtools

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> с моей точки зрения CDT - это удобная панелька с табиками, куда можно добавить ништяков. Каких? - дело фантази<a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>

В сочетании с Babel-ESLint это просто замечательный инструмент. Появился 1.0-RC <a href="https://t.co/zAnRkWEgS5">twitter.com/geteslint/stat…</a>

## Четверг <small>4 твита</small>

Дискуссия про Babel и нестандартные расширения языка (JSX):   <a href="https://t.co/5vxEbanMqx">reddit.com/r/javascript/c…</a>

Не люблю работать из дома <a href="https://t.co/Uew2XEQY8M">twitter.com/MarkAgee/statu…</a>

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Из DOMа.

RT <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a>: Кстати, <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>, тут была идейка у меня и <a href="https://twitter.com/Rukomoynikov" title="Maksim Rukomoynikov">@Rukomoynikov</a>, покататься где-нибудь на выходных по Москве. Кто с нами?

## Пятница <small>13 твитов</small>

Действительно, let, const или var? В es6 я использую let, так меньше набирать да и читается отлично. <a href="https://t.co/mquZChOabh">twitter.com/_ericelliott/s…</a>

. <a href="https://twitter.com/marinintim" title="Tim Marinin">@marinintim</a> в es6 выбор фактически между const и let, var сломан

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как я понимаю, популярность const идёт из функциональных кругов

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/marinintim" title="Tim Marinin">@marinintim</a> а можно подробнее, почему var сломан?

. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/marinintim" title="Tim Marinin">@marinintim</a> let биндинги более локальны (внутри блока а не внутри функции как var). Меньше шанса на ошибки.

RT <a href="https://twitter.com/ymatuhin" title="Юрий Матюхин">@ymatuhin</a>: <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/marinintim" title="Tim Marinin">@marinintim</a> Нет задач под var. Есть let (который к тому-же избавляет от лишних замыканий) и const для …

RT <a href="https://twitter.com/_nezed" title="Дмитрий Наумов">@_nezed</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> врывающийся в студию вопрос (прощу прощения)
Ребята, есть идеи как описывать JS Doc на props в React классах/компо…

RT <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>: <a href="https://twitter.com/ymatuhin" title="Юрий Матюхин">@ymatuhin</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/marinintim" title="Tim Marinin">@marinintim</a> Я бы вообще сделал что var = let, а let = const.

. <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a> насчёт let = const наверное соглашусь, нужен плагин для Babel.js

RT <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a>: <a href="https://twitter.com/_nezed" title="Дмитрий Наумов">@_nezed</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Оригинальный вариант — использовать propTypes

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: const - normal
let - code smell
var - legacy

/cc <a href="https://twitter.com/_ericelliott" title="Eric Elliott">@_ericelliott</a>  <a href="https://t.co/Ik8CRI9QN8">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Расскажи, пожалуйста, про своё рабочее окружение, IDE, какие-нибудь полезные инстументы, которыми ты часто пользу…

. <a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a> vim

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
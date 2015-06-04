# roman01la

_06 марта 2015_

## Понедельник <small>68 твитов</small>

Привет. На этой неделе здесь я — <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>. Будем говорить о парном программировании, функциональном JS, о доступности и других штуках.

Кто-нибудь практикует парное программирование? Какие, по вашему мнению, плюсы/минусы в таком подходе?

У нас на проекте это нормальный процесс. Поначалу было странно, но уже скоро стали очевидны преимущества.

Так вот, работать в паре веселее, хотя, в целом, процесс идет медленнее.

В то же время растет качество кода, если хотя бы один из пары достаточно опытен. Обмен опытом — еще одно неизбежное преимущество.

Для новых людей на проекте работа парами — это возможность быстрее разобраться в коде и познакомится с командой.

Важно постоянно менять партнера, например раз в пару месяцев. Партнера по коду, конечно же :)

RT <a href="https://twitter.com/veged" title="Sergey Berezhnoy">@veged</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот пара моих рассказов про парное программирование: <a href="https://t.co/rtwtfwMj6h">events.yandex.ru/lib/talks/559/</a> и <a href="https://t.co/yPXxAg8Vzm">events.yandex.ru/lib/talks/1447/</a>

Если чувствуете себя некомфортно с новым партнером, важно не промолчать и высказаться. Вам еще работать вместе.

Ну или сменить партнера, в крайнем случае. Умение ладить с людьми работая парами всегда пригодится.

Только что менялись парами: стали в круг, разбираем задания и, по желанию, меняемся. Тимлид всегда помогает в этом процессе.

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> попросила написать о сообществе разработчиков здесь, во Львове.

Львов — один из центров аутсорса в Украине. Поэтому большинство митапов проводятся в стенах таких компаний.

Но, на самом деле, есть и более интересные вещи. За почти полтора года, что я здесь живу, успел побывать на паре таких митапов.

Например на прошлых выходных, на территории горнолыжного курорта Буковель, прошла конференция WeBukovel <a href="http://t.co/aQYYbhNvsQ">webukovel.org.ua</a>

Спасибо ее организатору <a href="https://twitter.com/ArtyomTrityak" title="Artyom Trityak">@ArtyomTrityak</a>. Я был рядом, но, к сожалению, не было возможности зайти.

Еще во Львове есть <a href="https://twitter.com/LvivJS" title="LvivJS">@LvivJS</a> — конференция фронтенд разработчиков <a href="http://t.co/pYSDurNbFa">lvivjs.org.ua</a> Был там в прошлом году, очень понравилось.

Может кто-нибудь из Львовских расскажет больше о местных митапах?

RT <a href="https://twitter.com/denswor" title="denswor">@denswor</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> фраза о важности выбора партнера по парному программированию звучит грозно по соседству с такими твитами http://t<a href="http://t.co/fPwnIdfB1D">pic.twitter.com/fPwnIdfB1D</a>

Пытался достучаться до местной JS юзер группы <a href="http://t.co/RLFLnmcqtc">jsug-lviv.blogspot.com</a> Судя по блогу ребята давно не собирались.

Вообще удивительно, что, при таком количестве разработчиков в городе, не возникают новые митапы. Или я чего-то не знаю.

Многие посещают конференции и воркшопы в Европе. Большой аутсорс может позволить себе отправлять разработчиков по всему миру.

Нужно только суметь убедить заказчика в пользе для проекта от посещения таких событий.

А что бы убедить в необходимости посещения события, практически все митапы дают такой мануал <a href="http://t.co/vjbE62eIZ4">fluentconf.com/fluent2014/pub…</a>

Дальше по плану функциональный JS и немного FRP. Сейчас эта тема особенно активно обсуждается вокруг сообщества React.

Уже есть полно библиотек для написания кода в функциональном стиле, а на Хабре постоянно размещают посты на эту тему <a href="http://t.co/tbjk4G9ed3">habrahabr.ru/hub/funcprog/</a>

Популярные библиотеки: <a href="https://t.co/P7Ke19Kutz">baconjs.github.io</a> <a href="https://t.co/ro7sYDvtvE">github.com/cujojs/most</a> <a href="http://t.co/7LDAkEfggn">reactive-extensions.github.io/RxJS/</a> <a href="http://t.co/hoGn7JJ8av">ramdajs.com</a>

Кто-нибудь практикует функциональный JS? Было бы интересно услышать впечатление от работы с JS пришедших из функциональных языков.

RT <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> попиарь мою либу <a href="https://t.co/A3Me4UDtYj">github.com/idmitriev/hypr</a>

В целом функциональный подход интересен хотя бы тем, что это альтернатива привычному ООП.

Одной из характеристик функционального ЯП являются функции высшего порядка и функции первого класса.

Проще говоря — функции оперирующие другими функциями.

И любые операции представляются как функции. Например: `2 + 2` в JS и `(+ 2 2)` в Clojure.

По сути в JS математические операции — это функции с неявной записью. Поэтому их нужно адаптировать, оборачивать в явные функции.

`let add = x =&gt; x + x;`

Кстати, синтаксис fat arrow function из ES6 отлично подходит для описания таких базовых функций, короткая запись, ничего лишнего.

Имея набор таких базовых функций, можно воспользоваться одним из преимуществ функционального программирования — композицией.

`capitalize(trim(string))` — композиция двух операций.

Каждая из операций возвращает результат своего выполнения, таким образом можно создавать более сложные операции.

Но запись через вкладывание неудобна, поэтому нам понадобиться функция высшего порядка для миксования других функций в новую операцию.

Такую функцию часто называют `compose`. Вот пример ее реализации <a href="http://t.co/eZxAyLbFLK">jsbin.com/finiziyulo/1/</a>

Теперь новые операции можно создавать так: `let convert = compose(trim, capitalize);`.

И тут я осознал еще одно преимущество функционального подхода: ваш код говорит ЧТО делать, а не КАК, в случае с императивным подходом.

Для этого в JS нужно отказаться от циклов в пользу `.map()`, `.filter()` и т.д.

В одном из своих докладов <a href="https://twitter.com/jhusain" title="Jafar Husain">@jhusain</a> из Netflix рассказывает о функциональщине в JS <a href="https://t.co/XeEg9p6kdM">youtube.com/channel/UCGGRR…</a>

Еще у них есть классный интерактивный курс по основам <a href="http://t.co/IPlJ9N9GI4">jhusain.github.io/learnrx/</a>

Если используете Underscore.js, то ура — в библиотеке есть набор функциональных инструментов, которые вы тоже наверняка уже использовали.

Хотя <a href="https://twitter.com/drboolean" title="Brian Lonsdorf">@drboolean</a> считает, что Underscore делает это неправильно <a href="https://t.co/Znwb7uNE1i">youtube.com/watch?v=m3svKO…</a>

У этого парня есть шестичасовой курс по ФП в JS «Hardcore Functional Programming in JavaScript» <a href="https://t.co/iDY6xi8TN0">frontendmasters.com/courses/functi…</a>

RT <a href="https://twitter.com/deepwalker" title="Кривушин Михаил">@deepwalker</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> бро, заканчивай эту тоску, пжалста. Или давай сразу про эндофункторы и стрелки и точки неподвижные в разрезе т…

А если хочется теории, то на том же Хабре есть что почитать. Например Теория катеогрий <a href="http://t.co/B5c5mMaahU">habrahabr.ru/search/?q=%D1%…</a>

Больше всего понравилась серия переводов «Теория категорий для программистов» <a href="http://t.co/WrvfmpkNEx">habrahabr.ru/post/245797/</a> Очень доходчиво.

Хотя на практике польза от этого сомнительна. Возможно стоит начать изучать Haskell?

Если нет времени читать статьи, вот отличные слайды <a href="http://t.co/0pasncCV1X">yogsototh.github.io/Category-Theor…</a>

Пожалуйста поправляйте, если с чем-то не согласны.

RT <a href="https://twitter.com/KSDaemon" title="Konstantin Burkalev">@KSDaemon</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на недавнем 19-м <a href="https://twitter.com/moscowjs" title="MoscowJS">@moscowjs</a> выступал Трдат с докладом про FRP. Скоро будет видео! ;)

RT <a href="https://twitter.com/deepwalker" title="Кривушин Михаил">@deepwalker</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну вот например <a href="http://t.co/YfLckXBvBU">thedeemon.livejournal.com/87320.html</a>

Мне кажется, что для лучшего понимания ФП нужно попробовать функциональный язык. Например Clojure и в частности ClojureScript.

А выбрал я ClojureScript потому, что для него есть Om — cljs интерфейс для React <a href="https://t.co/6sCWvkGrW3">github.com/omcljs/om</a>

В cljs данные всегда неизменяемые (immutable) и вот почему это хорошо...

С точки зрения CPU намного быстрее создать, обработать и выбросить, чем создать, обработать, положить в память, запросить, обработать и т.д.

К сожалению быстро это работает для многопотоковой архитектуры. Но не отменяет того факта, что с неизменяемыми данными работать проще.

Это был краткий пересказ слов <a href="https://twitter.com/jhusain" title="Jafar Husain">@jhusain</a>

RT <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>: <a href="https://twitter.com/veged" title="Sergey Berezhnoy">@veged</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/VKASbi6cOl">mattgreer.org/articles/pair-…</a>

А в сочетании с более медленными абстракциями над циклами типа `.map()` функциональный код в JS будет еще медленнее.

Так что, в ближайшем будущем, тяжелые приложения на функциональном JS лучше обходить стороной.

Например игры, где каждую секунду по 60 раз выполняются сотни функций.

На интерфейсы это не распространяется, железо уже достаточно производительно.

## Вторник <small>21 твит</small>

Еще немного о ФП

Реализация неизменяемых структур данных в JS: Immutable.js <a href="http://t.co/V91KzFxqHH">facebook.github.io/immutable-js/</a> и mori <a href="http://t.co/NOeLoDUWKS">swannodette.github.io/mori/</a>

Паттерны ФП <a href="https://t.co/yDZWVxEwXO">youtube.com/watch?v=AvgwKj…</a>

Скринкаст по Haskell <a href="https://t.co/YiU0cYxDFr">youtube.com/watch?v=mtVk8R…</a> что бы понять, как ФП работает в функциональных языках.

И очень крутая лекция про монады <a href="https://t.co/6e01jMQ5bE">youtube.com/watch?v=ZhuHCt…</a> Крокфорд так не объясняет :)

Теперь немного о функциональном реактивном программировании...

ФРП — это ФП + потоки.

Поток — это данные поступающие со временем.

На практике это может выглядеть как преобразование событий DOM в поток таких событий и их обработка инструментами ФП.

Например как это делает RxJS <a href="https://t.co/o6GmtO4MaK">github.com/Reactive-Exten…</a>

Используя базовый набор операций над потоками можно облегчить себе жизнь в создании интерфейсов.

Об этом хорошо рассказывает все тот же техлид из Netflix в докладе «Async JavaScript with Reactive Extensions» <a href="https://t.co/CctMO3GOB2">youtube.com/watch?v=FAZJsx…</a>

Вот еще неплохо написано о реактивном программировании в JS <a href="https://t.co/PaFNOockba">gist.github.com/staltz/868e7e9…</a>

Короткий и информативный доклад <a href="https://twitter.com/swannodette" title="David Nolen">@swannodette</a> о неизменяемых структурах данных <a href="https://t.co/Qdx5terHDa">youtube.com/watch?v=SiFwRt…</a> /cc <a href="https://twitter.com/rdvornov" title="Roman Dvornov">@rdvornov</a>

На React.js Conf <a href="https://twitter.com/jlongster" title="James Long">@jlongster</a> рассказал о другом подходе в работе с асинхронным JS пришедшем из Clojure и Go — это CSP <a href="https://t.co/nKtzLF2uCF">youtube.com/watch?v=W2DgDN…</a>

Communicating sequential processes представляет концепцию процессов и каналов, по которым общаются эти процессы.

Один процесс забрасывает данные в канал, другой достает их.

js-csp <a href="https://t.co/SUXRo9Duqb">github.com/ubolonton/js-c…</a>

Рядом с CSP всегда упоминаются трансдьюсеры. На Хабре было несколько постов о них. А в этом автор создает их с нуля <a href="http://t.co/jtbaABinsz">phuu.net/2014/08/31/csp…</a>

Если просто, то трансдьюсер — это способ трансформирования данных через композицию.

А это пятая серия «Better Call Saul» <a href="https://t.co/vMBLXXn5ZU">youtube.com/watch?v=tt2iU2…</a>

## Среда <small>23 твита</small>

На <a href="http://t.co/I4PzXF2Fzy">wiki.ecmascript.org</a> можно почитать об интересных штуках которые не стали частью ES6 и о возможных изменениях в JS в далеком будущем.

Например чтсла SIMD (single instruction, multiple data) <a href="https://t.co/LVoU8xzPx2">ru.wikipedia.org/wiki/SIMD</a>

На самом деле SIMD перенесли в ES7 и эта спека уже частично реализованна в FF Nightly.

SIMD инструкции обеспечивают параллелизм на уровне данных.

Такая оптимизация даст прирост в производительности например в графике, где данные представлены в виде векторов.

Например: в JS нету векторов, обычно представляют в виде массива или объекта, тогда операции над такими векторами выполняются почленно...

Поэтому [1,2,3] + [1,2,3] выполнится в три процессорных такта, а с SIMD всего в один такт.

Спеку можно почитать здесь <a href="https://t.co/xAz7zZ5vi6">github.com/johnmccutchan/…</a>

Наглядный пример оптимизации рендеринга фракталов в asm.js <a href="http://t.co/CuKXLQEdPL">peterjensen.github.io/mandelbrot/js/…</a> только FF Nightly

Кстати, о графике в вебе. Посмотрите на эти примеры физически правильного рендеринга в WebGL <a href="http://t.co/9gQPcioQmE">blog.sketchfab.com/post/112612737…</a> Очень круто!

Другая интересная спека — Typed Objects <a href="http://t.co/GKuAEblB2J">wiki.ecmascript.org/doku.php?id=ha…</a> тоже не попала в ES6, но реализована в FF Nightly

Типизированные структуры данных `new StructType({ x: uint32, y: uint32 });`.

В ночной сборке FF все типы находятся в глобальном объекте TypedObject <a href="http://t.co/LyudFyhtfM">pic.twitter.com/LyudFyhtfM</a>

Или вот предложенный в ES7 оператор `.=` batch assignment для объектов <a href="http://t.co/UAsrNX3J8B">wiki.ecmascript.org/doku.php?id=st…</a>

И guards, как в Haskell <a href="http://t.co/iJBeBwD680">wiki.ecmascript.org/doku.php?id=st…</a>

Вот еще несколько интересных спек: короткий синтаксис для function expression <a href="http://t.co/BqC8plU9f9">wiki.ecmascript.org/doku.php?id=st…</a>

Иммутабельные структуры типа объект <a href="http://t.co/jQHaYwxbSw">wiki.ecmascript.org/doku.php?id=st…</a>

И иммутабельные последовательности (массивы, листы) <a href="http://t.co/lwfRY2n3JV">wiki.ecmascript.org/doku.php?id=st…</a>

Параллельно с Atom пробую Light Table <a href="http://t.co/mO6K7qUrF5">lighttable.com</a> Особой популярностью не отличается, но есть крутые штуки.

Например результат выполнения кода, который пишешь, возникает в той же строке. Наблюдение за значением переменных, тоже круто.

Похоже на то, что делает <a href="http://t.co/OcRKEGTdRp">wallabyjs.com</a> с тестами.

Перед тем, как заняться фронтендом, делал веб-дизайн. Сейчас вкус к красивым интерфейсам практически пропал. Все свелось к минимализму.

Вы поддерживаете свои дизайнерские способности? Если да, то каким образом?

## Четверг <small>14 твитов</small>

RT <a href="https://twitter.com/kinday" title="Леонард Киндай">@kinday</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>, минимализм не отменяет красоту интерфейса, а наоборот обнажает истинную красоту, скрытую в его логике.

RT <a href="https://twitter.com/vvvlado" title="Владо">@vvvlado</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> перечитываю «Кради как художник»

Джависты недоумевают почему `array === $(array) // false`

Это можно объяснить как неявное приведение типов.

Еще джавистам сложно понять ООП в JS, что уже говорить о React. Поэтому берут Angular.

Fat arrow не единственный новый тип функции в ES6, еще есть tag function: fn `Hello ${name}!`. Вызов без скобок, принимает template string.

Используется для чтения исходных данных из строки: значения и части строки <a href="http://t.co/mUlFJ9hFop">tc39wiki.calculist.org/es6/template-s…</a>

С ES6 Proxy можно делать method missing, как в Ruby <a href="http://t.co/2LcUqI4mI6">soft.vub.ac.be/~tvcutsem/prox…</a>

Но такую штуку можно сделать и без Proxy, через нестандартный метод `__noSuchMethod__`, который вызывается если вызываемого метода нету.

А вы стримили в /r/WatchPeopleCode/ ? Или может наблюдали за процессом разработки <a href="http://t.co/rsP5bSruFo">reddit.com/r/WatchPeopleC…</a>

Можно залипнуть на вечер и узнать что-нибудь новое для себя. Подходы, техники.

<a href="https://t.co/peumYmg1rK">angular.io</a>

React + CoffeeScript <a href="http://t.co/8Th6A4QmpY">habrahabr.ru/post/251835/</a> <a href="http://t.co/VZrQrTIoN9">pic.twitter.com/VZrQrTIoN9</a>

Даже простым +1 в комментариях к обсуждению желаемой фичи вы можете повлиять на ее реализацию.

## Пятница <small>10 твитов</small>

Добавил иконку React в плагин file-icons, для подсветки .jsx файлов, в Atom <a href="https://t.co/Ik2RFa8vcC">github.com/DanBrooker/fil…</a> <a href="http://t.co/ZTPnKibkml">pic.twitter.com/ZTPnKibkml</a>

Заодно получил опыт создания иконочного шрифта в Inkscape.

Суперский инструмент для экспорта набора иконок в шрифт <a href="https://t.co/HZjUuuMsDk">icomoon.io/app/</a>

RT <a href="https://twitter.com/prbigbrother" title="Alexandru Capatina">@prbigbrother</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/nbBSYMYaO4">fontello.com</a> с более простым, но схожим функционалом

А существует ли логотип закрепленный за картами кода?

Видео со вчерашней ng-conf <a href="https://t.co/pAAvtfeVzL">youtube.com/user/ngconfvid…</a>

И итоги EmberConf 2015 <a href="https://t.co/P1dEWcjlhJ">github.com/poteto/emberco…</a>

<a href="https://t.co/RNte7I6djx">livecoding.tv</a>

Добротный туториал об npm модулях на ES6 <a href="http://t.co/heBIbXlyw2">habrahabr.ru/post/252389/</a>

Библиотека функций высшего порядка для итераторов из ES6 <a href="https://t.co/47t0qUJsky">fitzgen.github.io/wu.js/</a>
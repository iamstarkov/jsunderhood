# roman01la

_06 марта 2015_

## Понедельник <small>68 твитов</small>

Привет. На этой неделе здесь я — [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"). Будем говорить о парном программировании, функциональном JS, о доступности и других штуках.

Кто-нибудь практикует парное программирование? Какие, по вашему мнению, плюсы/минусы в таком подходе?

У нас на проекте это нормальный процесс. Поначалу было странно, но уже скоро стали очевидны преимущества.

Так вот, работать в паре веселее, хотя, в целом, процесс идет медленнее.

В то же время растет качество кода, если хотя бы один из пары достаточно опытен. Обмен опытом — еще одно неизбежное преимущество.

Для новых людей на проекте работа парами — это возможность быстрее разобраться в коде и познакомится с командой.

Важно постоянно менять партнера, например раз в пару месяцев. Партнера по коду, конечно же :\)

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот пара моих рассказов про парное программирование: [events.yandex.ru/lib/talks/559/](https://t.co/rtwtfwMj6h "https://events.yandex.ru/lib/talks/559/") и [events.yandex.ru/lib/talks/1447/](https://t.co/yPXxAg8Vzm "https://events.yandex.ru/lib/talks/1447/")

Если чувствуете себя некомфортно с новым партнером, важно не промолчать и высказаться. Вам еще работать вместе.

Ну или сменить партнера, в крайнем случае. Умение ладить с людьми работая парами всегда пригодится.

Только что менялись парами: стали в круг, разбираем задания и, по желанию, меняемся. Тимлид всегда помогает в этом процессе.

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") попросила написать о сообществе разработчиков здесь, во Львове.

Львов — один из центров аутсорса в Украине. Поэтому большинство митапов проводятся в стенах таких компаний.

Но, на самом деле, есть и более интересные вещи. За почти полтора года, что я здесь живу, успел побывать на паре таких митапов.

Например на прошлых выходных, на территории горнолыжного курорта Буковель, прошла конференция WeBukovel [webukovel.org.ua](http://t.co/aQYYbhNvsQ "http://webukovel.org.ua/")

Спасибо ее организатору [@ArtyomTrityak](https://twitter.com/ArtyomTrityak "Artyom Trityak"). Я был рядом, но, к сожалению, не было возможности зайти.

Еще во Львове есть [@LvivJS](https://twitter.com/LvivJS "LvivJS") — конференция фронтенд разработчиков [lvivjs.org.ua](http://t.co/pYSDurNbFa "http://www.lvivjs.org.ua/") Был там в прошлом году, очень понравилось.

Может кто-нибудь из Львовских расскажет больше о местных митапах?

RT [@denswor](https://twitter.com/denswor "denswor"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фраза о важности выбора партнера по парному программированию звучит грозно по соседству с такими твитами http://t[pic.twitter.com/fPwnIdfB1D](http://t.co/fPwnIdfB1D)

Пытался достучаться до местной JS юзер группы [jsug-lviv.blogspot.com](http://t.co/RLFLnmcqtc "http://jsug-lviv.blogspot.com/") Судя по блогу ребята давно не собирались.

Вообще удивительно, что, при таком количестве разработчиков в городе, не возникают новые митапы. Или я чего-то не знаю.

Многие посещают конференции и воркшопы в Европе. Большой аутсорс может позволить себе отправлять разработчиков по всему миру.

Нужно только суметь убедить заказчика в пользе для проекта от посещения таких событий.

А что бы убедить в необходимости посещения события, практически все митапы дают такой мануал [fluentconf.com/fluent2014/pub…](http://t.co/vjbE62eIZ4 "http://fluentconf.com/fluent2014/public/content/convince-manager")

Дальше по плану функциональный JS и немного FRP. Сейчас эта тема особенно активно обсуждается вокруг сообщества React.

Уже есть полно библиотек для написания кода в функциональном стиле, а на Хабре постоянно размещают посты на эту тему [habrahabr.ru/hub/funcprog/](http://t.co/tbjk4G9ed3 "http://habrahabr.ru/hub/funcprog/")

Популярные библиотеки: [baconjs.github.io](https://t.co/P7Ke19Kutz "https://baconjs.github.io/") [github.com/cujojs/most](https://t.co/ro7sYDvtvE "https://github.com/cujojs/most") [reactive-extensions.github.io/RxJS/](http://t.co/7LDAkEfggn "http://reactive-extensions.github.io/RxJS/") [ramdajs.com](http://t.co/hoGn7JJ8av "http://ramdajs.com/")

Кто-нибудь практикует функциональный JS? Было бы интересно услышать впечатление от работы с JS пришедших из функциональных языков.

RT [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") попиарь мою либу [github.com/idmitriev/hypr](https://t.co/A3Me4UDtYj "https://github.com/idmitriev/hypr")

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

Такую функцию часто называют `compose`. Вот пример ее реализации [jsbin.com/finiziyulo/1/](http://t.co/eZxAyLbFLK "http://jsbin.com/finiziyulo/1/")

Теперь новые операции можно создавать так: `let convert = compose(trim, capitalize);`.

И тут я осознал еще одно преимущество функционального подхода: ваш код говорит ЧТО делать, а не КАК, в случае с императивным подходом.

Для этого в JS нужно отказаться от циклов в пользу `.map()`, `.filter()` и т.д.

В одном из своих докладов [@jhusain](https://twitter.com/jhusain "Jafar Husain") из Netflix рассказывает о функциональщине в JS [youtube.com/channel/UCGGRR…](https://t.co/XeEg9p6kdM "https://www.youtube.com/channel/UCGGRRqAjPm6sL3-WGBDnKJA/videos")

Еще у них есть классный интерактивный курс по основам [jhusain.github.io/learnrx/](http://t.co/IPlJ9N9GI4 "http://jhusain.github.io/learnrx/")

Если используете Underscore.js, то ура — в библиотеке есть набор функциональных инструментов, которые вы тоже наверняка уже использовали.

Хотя [@drboolean](https://twitter.com/drboolean "Brian Lonsdorf") считает, что Underscore делает это неправильно [youtube.com/watch?v=m3svKO…](https://t.co/Znwb7uNE1i "https://www.youtube.com/watch?v=m3svKOdZijA")

У этого парня есть шестичасовой курс по ФП в JS «Hardcore Functional Programming in JavaScript» [frontendmasters.com/courses/functi…](https://t.co/iDY6xi8TN0 "https://frontendmasters.com/courses/functional-javascript/")

RT [@deepwalker](https://twitter.com/deepwalker "Кривушин Михаил"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") бро, заканчивай эту тоску, пжалста. Или давай сразу про эндофункторы и стрелки и точки неподвижные в разрезе т…

А если хочется теории, то на том же Хабре есть что почитать. Например Теория катеогрий [habrahabr.ru/search/?q=%D1%…](http://t.co/B5c5mMaahU "http://habrahabr.ru/search/?q=%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%8F+%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B9")

Больше всего понравилась серия переводов «Теория категорий для программистов» [habrahabr.ru/post/245797/](http://t.co/WrvfmpkNEx "http://habrahabr.ru/post/245797/") Очень доходчиво.

Хотя на практике польза от этого сомнительна. Возможно стоит начать изучать Haskell?

Если нет времени читать статьи, вот отличные слайды [yogsototh.github.io/Category-Theor…](http://t.co/0pasncCV1X "http://yogsototh.github.io/Category-Theory-Presentation/")

Пожалуйста поправляйте, если с чем-то не согласны.

RT [@KSDaemon](https://twitter.com/KSDaemon "Konstantin Burkalev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на недавнем 19-м [@moscowjs](https://twitter.com/moscowjs "MoscowJS") выступал Трдат с докладом про FRP. Скоро будет видео! ;\)

RT [@deepwalker](https://twitter.com/deepwalker "Кривушин Михаил"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну вот например [thedeemon.livejournal.com/87320.html](http://t.co/YfLckXBvBU "http://thedeemon.livejournal.com/87320.html")

Мне кажется, что для лучшего понимания ФП нужно попробовать функциональный язык. Например Clojure и в частности ClojureScript.

А выбрал я ClojureScript потому, что для него есть Om — cljs интерфейс для React [github.com/omcljs/om](https://t.co/6sCWvkGrW3 "https://github.com/omcljs/om")

В cljs данные всегда неизменяемые \(immutable\) и вот почему это хорошо...

С точки зрения CPU намного быстрее создать, обработать и выбросить, чем создать, обработать, положить в память, запросить, обработать и т.д.

К сожалению быстро это работает для многопотоковой архитектуры. Но не отменяет того факта, что с неизменяемыми данными работать проще.

Это был краткий пересказ слов [@jhusain](https://twitter.com/jhusain "Jafar Husain")

RT [@voischev](https://twitter.com/voischev "Ваня Воищев"): [@veged](https://twitter.com/veged "Sergey Berezhnoy") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [mattgreer.org/articles/pair-…](http://t.co/VKASbi6cOl "http://www.mattgreer.org/articles/pair-programming-is-not-a-panacea/")

А в сочетании с более медленными абстракциями над циклами типа `.map()` функциональный код в JS будет еще медленнее.

Так что, в ближайшем будущем, тяжелые приложения на функциональном JS лучше обходить стороной.

Например игры, где каждую секунду по 60 раз выполняются сотни функций.

На интерфейсы это не распространяется, железо уже достаточно производительно.

## Вторник <small>21 твит</small>

Еще немного о ФП

Реализация неизменяемых структур данных в JS: Immutable.js [facebook.github.io/immutable-js/](http://t.co/V91KzFxqHH "http://facebook.github.io/immutable-js/") и mori [swannodette.github.io/mori/](http://t.co/NOeLoDUWKS "http://swannodette.github.io/mori/")

Паттерны ФП [youtube.com/watch?v=AvgwKj…](https://t.co/yDZWVxEwXO "https://www.youtube.com/watch?v=AvgwKjTPMmM")

Скринкаст по Haskell [youtube.com/watch?v=mtVk8R…](https://t.co/YiU0cYxDFr "https://www.youtube.com/watch?v=mtVk8RjvP_U") что бы понять, как ФП работает в функциональных языках.

И очень крутая лекция про монады [youtube.com/watch?v=ZhuHCt…](https://t.co/6e01jMQ5bE "https://www.youtube.com/watch?v=ZhuHCtR3xq8") Крокфорд так не объясняет :\)

Теперь немного о функциональном реактивном программировании...

ФРП — это ФП + потоки.

Поток — это данные поступающие со временем.

На практике это может выглядеть как преобразование событий DOM в поток таких событий и их обработка инструментами ФП.

Например как это делает RxJS [github.com/Reactive-Exten…](https://t.co/o6GmtO4MaK "https://github.com/Reactive-Extensions/RxJS#why-rxjs")

Используя базовый набор операций над потоками можно облегчить себе жизнь в создании интерфейсов.

Об этом хорошо рассказывает все тот же техлид из Netflix в докладе «Async JavaScript with Reactive Extensions» [youtube.com/watch?v=FAZJsx…](https://t.co/CctMO3GOB2 "https://www.youtube.com/watch?v=FAZJsxcykPs")

Вот еще неплохо написано о реактивном программировании в JS [gist.github.com/staltz/868e7e9…](https://t.co/PaFNOockba "https://gist.github.com/staltz/868e7e9bc2a7b8c1f754")

Короткий и информативный доклад [@swannodette](https://twitter.com/swannodette "David Nolen") о неизменяемых структурах данных [youtube.com/watch?v=SiFwRt…](https://t.co/Qdx5terHDa "https://www.youtube.com/watch?v=SiFwRtCnxv4") /cc [@rdvornov](https://twitter.com/rdvornov "Roman Dvornov")

На React.js Conf [@jlongster](https://twitter.com/jlongster "James Long") рассказал о другом подходе в работе с асинхронным JS пришедшем из Clojure и Go — это CSP [youtube.com/watch?v=W2DgDN…](https://t.co/nKtzLF2uCF "https://www.youtube.com/watch?v=W2DgDNQZOwo")

Communicating sequential processes представляет концепцию процессов и каналов, по которым общаются эти процессы.

Один процесс забрасывает данные в канал, другой достает их.

js-csp [github.com/ubolonton/js-c…](https://t.co/SUXRo9Duqb "https://github.com/ubolonton/js-csp")

Рядом с CSP всегда упоминаются трансдьюсеры. На Хабре было несколько постов о них. А в этом автор создает их с нуля [phuu.net/2014/08/31/csp…](http://t.co/jtbaABinsz "http://phuu.net/2014/08/31/csp-and-transducers.html")

Если просто, то трансдьюсер — это способ трансформирования данных через композицию.

А это пятая серия «Better Call Saul» [youtube.com/watch?v=tt2iU2…](https://t.co/vMBLXXn5ZU "https://www.youtube.com/watch?v=tt2iU2TebBM")

## Среда <small>23 твита</small>

На [wiki.ecmascript.org](http://t.co/I4PzXF2Fzy "http://wiki.ecmascript.org/") можно почитать об интересных штуках которые не стали частью ES6 и о возможных изменениях в JS в далеком будущем.

Например чтсла SIMD \(single instruction, multiple data\) [ru.wikipedia.org/wiki/SIMD](https://t.co/LVoU8xzPx2 "https://ru.wikipedia.org/wiki/SIMD")

На самом деле SIMD перенесли в ES7 и эта спека уже частично реализованна в FF Nightly.

SIMD инструкции обеспечивают параллелизм на уровне данных.

Такая оптимизация даст прирост в производительности например в графике, где данные представлены в виде векторов.

Например: в JS нету векторов, обычно представляют в виде массива или объекта, тогда операции над такими векторами выполняются почленно...

Поэтому \[1,2,3\] + \[1,2,3\] выполнится в три процессорных такта, а с SIMD всего в один такт.

Спеку можно почитать здесь [github.com/johnmccutchan/…](https://t.co/xAz7zZ5vi6 "https://github.com/johnmccutchan/ecmascript_simd")

Наглядный пример оптимизации рендеринга фракталов в asm.js [peterjensen.github.io/mandelbrot/js/…](http://t.co/CuKXLQEdPL "http://peterjensen.github.io/mandelbrot/js/mandelbrot-asm.html") только FF Nightly

Кстати, о графике в вебе. Посмотрите на эти примеры физически правильного рендеринга в WebGL [blog.sketchfab.com/post/112612737…](http://t.co/9gQPcioQmE "http://blog.sketchfab.com/post/112612737009/physically-based-rendering-is-here") Очень круто!

Другая интересная спека — Typed Objects [wiki.ecmascript.org/doku.php?id=ha…](http://t.co/GKuAEblB2J "http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects") тоже не попала в ES6, но реализована в FF Nightly

Типизированные структуры данных `new StructType({ x: uint32, y: uint32 });`.

В ночной сборке FF все типы находятся в глобальном объекте TypedObject [pic.twitter.com/LyudFyhtfM](http://t.co/LyudFyhtfM)

Или вот предложенный в ES7 оператор `.=` batch assignment для объектов [wiki.ecmascript.org/doku.php?id=st…](http://t.co/UAsrNX3J8B "http://wiki.ecmascript.org/doku.php?id=strawman:batch_assignment_operator")

И guards, как в Haskell [wiki.ecmascript.org/doku.php?id=st…](http://t.co/iJBeBwD680 "http://wiki.ecmascript.org/doku.php?id=strawman:guards")

Вот еще несколько интересных спек: короткий синтаксис для function expression [wiki.ecmascript.org/doku.php?id=st…](http://t.co/BqC8plU9f9 "http://wiki.ecmascript.org/doku.php?id=strawman:shorter_function_syntax")

Иммутабельные структуры типа объект [wiki.ecmascript.org/doku.php?id=st…](http://t.co/jQHaYwxbSw "http://wiki.ecmascript.org/doku.php?id=strawman:records")

И иммутабельные последовательности \(массивы, листы\) [wiki.ecmascript.org/doku.php?id=st…](http://t.co/lwfRY2n3JV "http://wiki.ecmascript.org/doku.php?id=strawman:tuples")

Параллельно с Atom пробую Light Table [lighttable.com](http://t.co/mO6K7qUrF5 "http://lighttable.com/") Особой популярностью не отличается, но есть крутые штуки.

Например результат выполнения кода, который пишешь, возникает в той же строке. Наблюдение за значением переменных, тоже круто.

Похоже на то, что делает [wallabyjs.com](http://t.co/OcRKEGTdRp "http://wallabyjs.com/") с тестами.

Перед тем, как заняться фронтендом, делал веб-дизайн. Сейчас вкус к красивым интерфейсам практически пропал. Все свелось к минимализму.

Вы поддерживаете свои дизайнерские способности? Если да, то каким образом?

## Четверг <small>14 твитов</small>

RT [@kinday](https://twitter.com/kinday "Леонард Киндай"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), минимализм не отменяет красоту интерфейса, а наоборот обнажает истинную красоту, скрытую в его логике.

RT [@vvvlado](https://twitter.com/vvvlado "Владо"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") перечитываю «Кради как художник»

Джависты недоумевают почему `array === $(array) // false`

Это можно объяснить как неявное приведение типов.

Еще джавистам сложно понять ООП в JS, что уже говорить о React. Поэтому берут Angular.

Fat arrow не единственный новый тип функции в ES6, еще есть tag function: fn `Hello ${name}!`. Вызов без скобок, принимает template string.

Используется для чтения исходных данных из строки: значения и части строки [tc39wiki.calculist.org/es6/template-s…](http://t.co/mUlFJ9hFop "http://tc39wiki.calculist.org/es6/template-strings/")

С ES6 Proxy можно делать method missing, как в Ruby [soft.vub.ac.be/~tvcutsem/prox…](http://t.co/2LcUqI4mI6 "http://soft.vub.ac.be/~tvcutsem/proxies/")

Но такую штуку можно сделать и без Proxy, через нестандартный метод `__noSuchMethod__`, который вызывается если вызываемого метода нету.

А вы стримили в /r/WatchPeopleCode/ ? Или может наблюдали за процессом разработки [reddit.com/r/WatchPeopleC…](http://t.co/rsP5bSruFo "http://www.reddit.com/r/WatchPeopleCode/")

Можно залипнуть на вечер и узнать что-нибудь новое для себя. Подходы, техники.

[angular.io](https://t.co/peumYmg1rK "https://angular.io/")

React + CoffeeScript [habrahabr.ru/post/251835/](http://t.co/8Th6A4QmpY "http://habrahabr.ru/post/251835/") [pic.twitter.com/VZrQrTIoN9](http://t.co/VZrQrTIoN9)

Даже простым +1 в комментариях к обсуждению желаемой фичи вы можете повлиять на ее реализацию.

## Пятница <small>10 твитов</small>

Добавил иконку React в плагин file-icons, для подсветки .jsx файлов, в Atom [github.com/DanBrooker/fil…](https://t.co/Ik2RFa8vcC "https://github.com/DanBrooker/file-icons/pull/124") [pic.twitter.com/ZTPnKibkml](http://t.co/ZTPnKibkml)

Заодно получил опыт создания иконочного шрифта в Inkscape.

Суперский инструмент для экспорта набора иконок в шрифт [icomoon.io/app/](https://t.co/HZjUuuMsDk "https://icomoon.io/app/")

RT [@prbigbrother](https://twitter.com/prbigbrother "Alexandru Capatina"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [fontello.com](http://t.co/nbBSYMYaO4 "http://fontello.com") с более простым, но схожим функционалом

А существует ли логотип закрепленный за картами кода?

Видео со вчерашней ng-conf [youtube.com/user/ngconfvid…](https://t.co/pAAvtfeVzL "https://www.youtube.com/user/ngconfvideos/videos")

И итоги EmberConf 2015 [github.com/poteto/emberco…](https://t.co/P1dEWcjlhJ "https://github.com/poteto/emberconf-2015")

[livecoding.tv](https://t.co/RNte7I6djx "https://www.livecoding.tv/")

Добротный туториал об npm модулях на ES6 [habrahabr.ru/post/252389/](http://t.co/heBIbXlyw2 "http://habrahabr.ru/post/252389/")

Библиотека функций высшего порядка для итераторов из ES6 [fitzgen.github.io/wu.js/](https://t.co/47t0qUJsky "https://fitzgen.github.io/wu.js/")

## Ссылки

### github.com  
<a href="https://github.com/cujojs/most" target="_blank">https://github.com/cujojs/most</a>  
<a href="https://github.com/idmitriev/hypr" target="_blank">https://github.com/idmitriev/hypr</a>  
<a href="https://github.com/omcljs/om" target="_blank">https://github.com/omcljs/om</a>  
<a href="https://github.com/Reactive-Extensions/RxJS#why-rxjs" target="_blank">https://github.com/Reactive-Extensions/RxJS#why-rxjs</a>  
<a href="https://github.com/ubolonton/js-csp" target="_blank">https://github.com/ubolonton/js-csp</a>  
<a href="https://github.com/johnmccutchan/ecmascript_simd" target="_blank">https://github.com/johnmccutchan/ecmascript_simd</a>  
<a href="https://github.com/DanBrooker/file-icons/pull/124" target="_blank">https://github.com/DanBrooker/file-icons/pull/124</a>  
<a href="https://github.com/poteto/emberconf-2015" target="_blank">https://github.com/poteto/emberconf-2015</a>  
### habrahabr.ru  
<a href="http://habrahabr.ru/hub/funcprog/" target="_blank">http://habrahabr.ru/hub/funcprog/</a>  
<a href="http://habrahabr.ru/search/?q=%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%8F+%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B9" target="_blank">http://habrahabr.ru/search/?q=%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D1%8F+%D0%BA%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D0%B9</a>  
<a href="http://habrahabr.ru/post/245797/" target="_blank">http://habrahabr.ru/post/245797/</a>  
<a href="http://habrahabr.ru/post/251835/" target="_blank">http://habrahabr.ru/post/251835/</a>  
<a href="http://habrahabr.ru/post/252389/" target="_blank">http://habrahabr.ru/post/252389/</a>  
### wiki.ecmascript.org  
<a href="http://wiki.ecmascript.org/" target="_blank">http://wiki.ecmascript.org/</a>  
<a href="http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects" target="_blank">http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects</a>  
<a href="http://wiki.ecmascript.org/doku.php?id=strawman:batch_assignment_operator" target="_blank">http://wiki.ecmascript.org/doku.php?id=strawman:batch_assignment_operator</a>  
<a href="http://wiki.ecmascript.org/doku.php?id=strawman:guards" target="_blank">http://wiki.ecmascript.org/doku.php?id=strawman:guards</a>  
<a href="http://wiki.ecmascript.org/doku.php?id=strawman:shorter_function_syntax" target="_blank">http://wiki.ecmascript.org/doku.php?id=strawman:shorter_function_syntax</a>  
<a href="http://wiki.ecmascript.org/doku.php?id=strawman:records" target="_blank">http://wiki.ecmascript.org/doku.php?id=strawman:records</a>  
<a href="http://wiki.ecmascript.org/doku.php?id=strawman:tuples" target="_blank">http://wiki.ecmascript.org/doku.php?id=strawman:tuples</a>  
### www.youtube.com  
<a href="https://www.youtube.com/channel/UCGGRRqAjPm6sL3-WGBDnKJA/videos" target="_blank">https://www.youtube.com/channel/UCGGRRqAjPm6sL3-WGBDnKJA/videos</a>  
<a href="https://www.youtube.com/watch?v=m3svKOdZijA" target="_blank">https://www.youtube.com/watch?v=m3svKOdZijA</a>  
<a href="https://www.youtube.com/watch?v=AvgwKjTPMmM" target="_blank">https://www.youtube.com/watch?v=AvgwKjTPMmM</a>  
<a href="https://www.youtube.com/watch?v=mtVk8RjvP_U" target="_blank">https://www.youtube.com/watch?v=mtVk8RjvP_U</a>  
<a href="https://www.youtube.com/watch?v=ZhuHCtR3xq8" target="_blank">https://www.youtube.com/watch?v=ZhuHCtR3xq8</a>  
<a href="https://www.youtube.com/watch?v=FAZJsxcykPs" target="_blank">https://www.youtube.com/watch?v=FAZJsxcykPs</a>  
<a href="https://www.youtube.com/watch?v=SiFwRtCnxv4" target="_blank">https://www.youtube.com/watch?v=SiFwRtCnxv4</a>  
<a href="https://www.youtube.com/watch?v=W2DgDNQZOwo" target="_blank">https://www.youtube.com/watch?v=W2DgDNQZOwo</a>  
<a href="https://www.youtube.com/watch?v=tt2iU2TebBM" target="_blank">https://www.youtube.com/watch?v=tt2iU2TebBM</a>  
<a href="https://www.youtube.com/user/ngconfvideos/videos" target="_blank">https://www.youtube.com/user/ngconfvideos/videos</a>

### Другие

<a href="https://events.yandex.ru/lib/talks/559/" target="_blank">https://events.yandex.ru/lib/talks/559/</a>  
<a href="https://events.yandex.ru/lib/talks/1447/" target="_blank">https://events.yandex.ru/lib/talks/1447/</a>  
<a href="http://webukovel.org.ua/" target="_blank">http://webukovel.org.ua/</a>  
<a href="http://www.lvivjs.org.ua/" target="_blank">http://www.lvivjs.org.ua/</a>  
<a href="http://jsug-lviv.blogspot.com/" target="_blank">http://jsug-lviv.blogspot.com/</a>  
<a href="http://fluentconf.com/fluent2014/public/content/convince-manager" target="_blank">http://fluentconf.com/fluent2014/public/content/convince-manager</a>  
<a href="https://baconjs.github.io/" target="_blank">https://baconjs.github.io/</a>  
<a href="http://reactive-extensions.github.io/RxJS/" target="_blank">http://reactive-extensions.github.io/RxJS/</a>  
<a href="http://ramdajs.com/" target="_blank">http://ramdajs.com/</a>  
<a href="http://jsbin.com/finiziyulo/1/" target="_blank">http://jsbin.com/finiziyulo/1/</a>  
<a href="http://jhusain.github.io/learnrx/" target="_blank">http://jhusain.github.io/learnrx/</a>  
<a href="https://frontendmasters.com/courses/functional-javascript/" target="_blank">https://frontendmasters.com/courses/functional-javascript/</a>  
<a href="http://yogsototh.github.io/Category-Theory-Presentation/" target="_blank">http://yogsototh.github.io/Category-Theory-Presentation/</a>  
<a href="http://thedeemon.livejournal.com/87320.html" target="_blank">http://thedeemon.livejournal.com/87320.html</a>  
<a href="http://www.mattgreer.org/articles/pair-programming-is-not-a-panacea/" target="_blank">http://www.mattgreer.org/articles/pair-programming-is-not-a-panacea/</a>  
<a href="http://facebook.github.io/immutable-js/" target="_blank">http://facebook.github.io/immutable-js/</a>  
<a href="http://swannodette.github.io/mori/" target="_blank">http://swannodette.github.io/mori/</a>  
<a href="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754" target="_blank">https://gist.github.com/staltz/868e7e9bc2a7b8c1f754</a>  
<a href="http://phuu.net/2014/08/31/csp-and-transducers.html" target="_blank">http://phuu.net/2014/08/31/csp-and-transducers.html</a>  
<a href="https://ru.wikipedia.org/wiki/SIMD" target="_blank">https://ru.wikipedia.org/wiki/SIMD</a>  
<a href="http://peterjensen.github.io/mandelbrot/js/mandelbrot-asm.html" target="_blank">http://peterjensen.github.io/mandelbrot/js/mandelbrot-asm.html</a>  
<a href="http://blog.sketchfab.com/post/112612737009/physically-based-rendering-is-here" target="_blank">http://blog.sketchfab.com/post/112612737009/physically-based-rendering-is-here</a>  
<a href="http://lighttable.com/" target="_blank">http://lighttable.com/</a>  
<a href="http://wallabyjs.com/" target="_blank">http://wallabyjs.com/</a>  
<a href="http://tc39wiki.calculist.org/es6/template-strings/" target="_blank">http://tc39wiki.calculist.org/es6/template-strings/</a>  
<a href="http://soft.vub.ac.be/~tvcutsem/proxies/" target="_blank">http://soft.vub.ac.be/~tvcutsem/proxies/</a>  
<a href="http://www.reddit.com/r/WatchPeopleCode/" target="_blank">http://www.reddit.com/r/WatchPeopleCode/</a>  
<a href="https://angular.io/" target="_blank">https://angular.io/</a>  
<a href="https://icomoon.io/app/" target="_blank">https://icomoon.io/app/</a>  
<a href="http://fontello.com" target="_blank">http://fontello.com</a>  
<a href="https://www.livecoding.tv/" target="_blank">https://www.livecoding.tv/</a>  
<a href="https://fitzgen.github.io/wu.js/" target="_blank">https://fitzgen.github.io/wu.js/</a>
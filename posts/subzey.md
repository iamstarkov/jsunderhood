# subzey

_24 мая 2015_

## Понедельник <small>40 твитов</small>

-~/-~/-~/-~/-~/-~/

Доброй ночи, дамы и господа! На этой неделе этот аккаунт буду вести я, Антон [@subzey](https://twitter.com/subzey "subzey") Хлыновский. Я JS-кодер в одном финансовом стартапе

Моя излюбленная тема — «сырой» JS, т.е., всё что ниже уровнем, чем фреймворки и библиотеки, в том числе code golf и демосцена

Кстати, вот эта штука в начале [twitter.com/jsunderhood/st…](https://t.co/rCdD7SFGgi "https://twitter.com/jsunderhood/status/600095365254270976?s=09") — это не просто сепаратор, а вполне валидный js-код, попробуйте в консоли :\)

Никто не расскажет про code golf на js лучше, чем [@aemkei](https://twitter.com/aemkei "Martin Kleppe") [m.ustream.tv/recorded/62250…](http://t.co/MTd3ecM018 "http://m.ustream.tv/recorded/62250630") \(начало где-то на 1:00:00\)

Когда я начнал ковырять ES6, Google Traceur эмулировал `let x` через try-throw-catch\(x\). После такого адового трэша я надолго на него забил

… в новых версиях try-throw нет, но и код генерится неправильный [goo.gl/VyOVbL](https://t.co/olzv40GH1x "https://goo.gl/VyOVbL") Вот то же самое на Babel: [goo.gl/a3wrou](https://t.co/Pyr92O9cdc "https://goo.gl/a3wrou")

А вы уже пользуетесь транспилерами из ES6? В продакшне, или для развлечения?

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в проде во внутренних проектах вроде CMS пишу на ES6 \(babel\).

RT [@morhetz](https://twitter.com/morhetz "Pavel Pertsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Пока только на pet-side проектах, планируем переводить прод на babel в ближайшие полгода.

RT [@morhetz](https://twitter.com/morhetz "Pavel Pertsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") На каком стэке работаете? Как в целом среда в компании \(фин. темы обычно клонятся в сторону костенелого энтерпрай…

.[@morhetz](https://twitter.com/morhetz "Pavel Pertsev") JS+Python \(Django\)+Erlang. Подробнее есть видео от моего коллеги [youtu.be/l1lr2ckSrTo](https://t.co/HNjHWyAL6t "https://youtu.be/l1lr2ckSrTo") При разработке используем Канбан

RT [@morhetz](https://twitter.com/morhetz "Pavel Pertsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Какого работать в Ростове? Есть ли мотивация уезжать за более интересными проектами или удаленная разработка реша…

.[@morhetz](https://twitter.com/morhetz "Pavel Pertsev") В Ростове норм :\) Проект мне по душе, почти чистый JS, и географию менять смысла нет. Единственное — местных конф мало проводится

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я очень хочу Typescript + ES6 :-\( Но Typescript мало кто желает использовать в продакшне. А траспилеры ES6 и п…

RT [@greybax](https://twitter.com/greybax "Aleksandr Filatov"): [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") юзаем TS во всю на продакшене, но и место это называется MS :\)

.[@greybax](https://twitter.com/greybax "Aleksandr Filatov") А в вижл-студии есть какие-то особые плюшки для TS? Ну там, рефакторинг в один клик или что-то подобное?

RT [@greybax](https://twitter.com/greybax "Aleksandr Filatov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в VS синтаксис подсвечивается, а по рефакторингу юзаю Resharper, а там есть довольно много [blog.jetbrains.com/dotnet/2014/12…](http://t.co/R4Ahx0YC4D "http://blog.jetbrains.com/dotnet/2014/12/15/improved-typescript-support-in-resharper-9/")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ни для прода, и ни для развлечения. Все свои новые npm-модули пишу в es6

Похоже, early adopter'ов ES6 довольно много. Больше, чем я ожидал. Или менее авантюрные люди просто стесняются ответить?

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") “или” ;-\)

RT [@an4ger](https://twitter.com/an4ger "an4 ger"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну блочный скоуп убирается, если перед блоком действительно обьявить переменную x, тогда все работает правильно.

.[@an4ger](https://twitter.com/an4ger "an4 ger") Но это же «затмит» глобальную переменную. Да даже и не глобальную, а просто из внешнего скопа [goo.gl/W13kdd](https://t.co/ovGzLeB9qe "https://goo.gl/W13kdd")

.[@an4ger](https://twitter.com/an4ger "an4 ger") let же вроде специально сделан, чтобы упростить жизнь и не запоминать все глобалы \(как в руби\). А тут, как по мне, явный баг.

А может быть среди читателей есть такие, кто фигачит на кофескрипте, и им всё равно, во какой там ES это всё скомпилится? :\)

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У меня есть некоторые проекты на кофескрипт. Мне не нравится. Кажется, они что-то не то пытаются оптимизировать.

RT [@gouffre](https://twitter.com/gouffre "Almaz"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фигачим на coffee, мне нормально. Если будет следующий проект, то скорее всего на ES6

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") выгода в возрастании «читабельности» и сокращении объема кода [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Быть фронтендером — это не только писать чистенький код на языках будущего. Иногда приходится уныло подпиливать IE9+ код под IE8

Уважаемые js-кодеры, а как вы используете "use strict"? По одному на файл? В каждой функции? Вообще никак?

\(Я уже спрашивал об этом на основном аккаунте, но астрологи объявили мне неделю jsunderhood и прирост аудитории, думаю, не грех повторить\)

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") никак

.[@veged](https://twitter.com/veged "Sergey Berezhnoy") А как контролируете пропущенные var и протечки в глобал? /\*jshint undef:true\*/?

RT [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") по одному на модуль \(он же файл, но внутри define\)

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") никак, потому что babel. До этого юзал strict-loader, чтобы вручную не писать [github.com/mistadikay/str…](https://t.co/NBDL6F1FbG "https://github.com/mistadikay/strict-loader")

RT [@lolmaus](https://twitter.com/lolmaus "Pussy Monster"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я обожаю CoffeeScript и пишу только на нем, несмотря на наличие Babel в пайплайне проекта. Могу обосновать, но не…

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, линтеры всё равно нужны и спасают от большего

У Python и JS больше общего, чем может показаться. Например, не поверите, модель наследования [repl.it/oZV](http://t.co/Y7Q8dzgAiE "http://repl.it/oZV") [repl.it/ozU](http://t.co/Lc5x4Kkswx "http://repl.it/ozU")

[js13kGames.com](http://t.co/jwx1cppAki "http://js13kGames.com/") — интересное ежегодное компо. Цель создать за месяц игру на js и уложиться в 13кб \(в .zip\) со всей графикой и звуками

В прошлом году в js13k на конкурс было отправлено 129 игр. Но все они в zip-архиве уместились на одну дискетку 1.44

## Вторник <small>52 твита</small>

Начнём утро, если не возражаете, с музыкальной паузы: [js1k.com/2313](http://t.co/1aXg41asvk "http://js1k.com/2313") Как по мне, эта интра была самой крутой на js1k 2015

…хотя бы потому что в ней используется Web Audio API и WebGL, что, в общем-то, не характерно для килобайтных интро.

Ух! Впервые применил по назначению фронтальную камеру. Оказывается, превью на экране как ты видишь себя в зеркале, а фото — как видят другие

…говорят, этот эффект применяют фотографы для выпускных виньеток, чтобы учительница не говорила, что выглядит как-то не так, как в зеркале

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не применяют

Почти все демки на js1k запакованы RegPack'ом \([github.com/Siorki/RegPack/](https://t.co/vmVWQdBncK "https://github.com/Siorki/RegPack/")\), он заменяет длинные повторяющиеся строки на один символ

RegPack не просто взялся с неба, он основан на [iteral.com/jscrush/](http://t.co/48wsv7ZNGf "http://www.iteral.com/jscrush/"), если захотите разобраться в принципе работы, лучше начать с JsCrush

Код под RegPack пишется не так, как «обычный» гольферский код: цель не минимальный размер, а минимальная энтропия \([goo.gl/RS3FNF](https://t.co/iUNzYiCbJw "https://goo.gl/RS3FNF")\)

…иными словами, как можно больше повторяющихся строк и как можно меньше набор символов. Вплоть по повторного использования переменных

Но задротские демосценерские подходы неожиданно близки к реальности. [goo.gl/xY4Suu](http://t.co/DTnCilWV9d "http://goo.gl/xY4Suu") тут ryry.min.js явно больше, чем dry.min.js

Но после сжатия GZIP \(все современные браузеры так делают\) dry.min.js.gz 70 байт, а ryry.min.js.gz — 64.  Тут всё дело в энтропии :\)

UglifyJS может заменять имена переменных на однобуквенные. Он тоже не берёт их с потолка, а использует самые частые [pic.twitter.com/xTMXN4Q5zl](http://t.co/xTMXN4Q5zl)

Наконец, Closure Compiler может даже повторно использовать переменные: [goo.gl/HG8vFn](https://t.co/206LWcgSOb "https://goo.gl/HG8vFn") \(Uglify, похоже, не умеет\)

Яркий пример «переоптимизации»: [github.com/cowboy/jquery-…](https://t.co/zhyFNf269f "https://github.com/cowboy/jquery-resize/blob/master/jquery.ba-resize.js"). Если выкинуть трюк с  Reused strings, вес js.min.gz уменьшится с 468 байт до 451

Не всегда стоит стараться перехитрить свой компилятор

Прошу прощения за битую ссылку, спасибо [@ru\_rodweb](https://twitter.com/ru_rodweb "Igor Deryabin")  [twitter.com/ru\_rodweb/stat…](https://t.co/jngoNfR6Cf "https://twitter.com/ru_rodweb/status/600636243697868801")

[microjs.com](http://t.co/csOJEQ3Nyf "http://microjs.com/") — россыпь маленьких полезных билиотек. Пожалуй, то место, где мир гольфо-сценеров соприкасается с миром «продакшна»

Шах и мат, функциональщики! [pic.twitter.com/Ej3X4teDKm](http://t.co/Ej3X4teDKm)

Кстати, часто ли вас на собеседованиях просили написать функцию для подсчёта чисел Фибонначи, факториалов или прочей математики?

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ни разу\)

RT [@bashmish](https://twitter.com/bashmish "Misha Bashkirov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") дважды

RT [@dosyara](https://twitter.com/dosyara "Sergey Maksimov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сам на собеседованиях спрашивал. Такое интересно? :\)

.[@dosyara](https://twitter.com/dosyara "Sergey Maksimov") Ещё бы! Интересно то, стоит ли вообще кандидата спрашивать какую-то математику из младших классов или FizzBuzz

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что, в рнд на js-кодера могут задать такой вопрос?\)  а то у меня в тгн есть перспективный товарищ по js, я…

.[@\_sashashakun](https://twitter.com/_sashashakun "Alexander") В нашей конторе он точно фибонначей на интервью не отделается :\) Но где-нибудь в РнД наверняка спрашивают

.[@\_sashashakun](https://twitter.com/_sashashakun "Alexander") Сам работал в такой конторе, где если занешь циклы, то уже кодер. Никто не приходит в вебдев сразу супер-стар-ниндзя.

RT [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@\_sashashakun](https://twitter.com/_sashashakun "Alexander") А что еще интересного вы спрашиваете на интервью?

.[@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") Фибы как раз не спрашиваем :\) Интересуют тривиальные вещи — прототипы, замыкания и событийная петля. Про них и спрашиваем

Один раз оказалось, что к нам приходил на собеседование чувак чисто ради острых ощущений и опыта интервью. Работать он у нас не собирался.

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а ещё не дорос до проведения интервью\) но как отвечающему интересно когда дают кусок кода и …

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 2/2 по не у рассказать. В мой небольшой практике были и достойные ответы и знатные фейлы\)

RT [@dosyara](https://twitter.com/dosyara "Sergey Maksimov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не всегда просто по таким задачам сделать вывод. Часто фронтендщики пугаются "математики".

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")   
- Я слышал ты любишь опасных парней? Я хожу на собеседования ради острых ощущений!

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а потом двигаешь пиксели и центруешь по вертикали

Вот это интересный пойнт:  
RT [@SelenIT2](https://twitter.com/SelenIT2 "SelenIT"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") отлавливают любителей неуместной рекурсии?

RT [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А по событийной петле есть примеры вопросов? :\)

.[@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") Раскрою карты — вопрос на ивентлуп у нас один :\) «[gist.github.com/subzey/47d7720…](https://t.co/EZXEKEhpmd "https://gist.github.com/subzey/47d772020089b6e41cab") — как будет работать этот код?»

RT [@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на собеседовании в яндекс.екатеринбург просили что-то с числами Фибонначи. Я провалился к счастью.

За статью о событийной петле, кстати, я получил \(зачёркнуто: диплом\) инвайт на Хабре. Вот она, если интересно: [habrahabr.ru/company/tradin…](http://t.co/TwothmHY1G "http://habrahabr.ru/company/tradingview/blog/178261/")

А диплом я так и не получил

RT [@fliptheweb](https://twitter.com/fliptheweb "Artur Kornakov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот еще отличный доклад по этой теме [youtube.com/watch?v=8aGhZQ…](https://t.co/iuxdWfpv1M "https://www.youtube.com/watch?v=8aGhZQkoFbQ")

Я же надеюсь, никого не отпугнёт то, что у меня из образования 4 курса «1205 00 3 Оборудование и технология сварочного производства»? :D

И сразу вопрос проводящим собеседование: а вы спрашиваете диплом у кандидатов-программистов?

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Только если юридически нужен \(такое бывает, если нанимать из за границы\)

RT [@denysbutenko](https://twitter.com/denysbutenko "Denys Butenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") несколько раз.

RT [@pomidore](https://twitter.com/pomidore "Александр Лунев"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [twitter.com/iamdevloper/st…](https://t.co/3GVx8IJQeH "https://twitter.com/iamdevloper/status/560081615221972992")

RT [@oshibka404](https://twitter.com/oshibka404 "Andrey Ozornin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Был за последние пару лет примерно на двадцати собеседованиях, про образование спросили дважды, и то исключите…

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") событийная петля? Event loop что-ли?

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") Да, прошу прощения, правильно-то «событийный цикл»

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня сразу ассоциации - черная дыра, теория относительности. А асинхронный вызов - горизонт событий :\)

Хм, действительно, по запросу «событийная петля» гуглится какая-то атсральная ересь. Пора завязывать с жаргонизмами [pic.twitter.com/xTJP2QfMJh](http://t.co/xTJP2QfMJh)

RT [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") спроси лучше, у многих ли тут есть образование :\)

## Среда <small>67 твитов</small>

Предлагаю ещё одну музыкальную паузу: [pouet.net/prod.php?which…](http://t.co/27KBFmEF5G "http://www.pouet.net/prod.php?which=59403") \(1 место на DemoJS'12 в категории 1K\), в ней ещё нет ни Web Audio, ни WebGL

Зато есть ручное псевдо-3d, хитрая генерация звука \([p01.org/releases/140by…](http://t.co/c8tYTtUMDh "http://www.p01.org/releases/140bytes_music_softSynth/")\) и ещё более хитрая упаковка JS в PNG \([pouet.net/prod.php?which…](http://t.co/7bB7rSLdx4 "http://www.pouet.net/prod.php?which=59298")\)

Но лучше давайте послушаем автора этого интро, великого и ужасного [@p01](https://twitter.com/p01 "Mathieu 'p01' Henri"): [2014.jsconf.eu/speakers/mathi…](http://t.co/5zRK53iaSn "http://2014.jsconf.eu/speakers/mathieu-p01-henri-monster-audiovisual-demos-in-a-tcp-packet.html")

Если вы рисуете на канвасе, вот вам хинт: между определением кривой и её обводкой/заливкой можно менять трансформации [jsfiddle.net/subzey/phb4976…](http://t.co/WuMD1PhzcM "http://jsfiddle.net/subzey/phb49762/")

…в продакшне этот приём нужен нечасто, но вот в приглашении на js1k'15 \([pouet.net/prod.php?which…](http://t.co/mxYuwo01QG "http://www.pouet.net/prod.php?which=64966")\) я его применял более чем активно

Получил массу приятных эмоций всего за полчаса: штраф за переход на красный, мудаки в РЖД и слоупочный общественный транспорт

RT [@serebro](https://twitter.com/serebro "Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") интересно кто в вебдеве с каким образованием работает. Я инженер электромеханник хим.производства.

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@serebro](https://twitter.com/serebro "Sergey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") без образования :\( 11 классов средней школы

RT [@gryzzly](https://twitter.com/gryzzly "gryzzly"): [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@serebro](https://twitter.com/serebro "Sergey") ушел из школы еще в 10м классе, но уже сам читал лекцию в универе!

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@serebro](https://twitter.com/serebro "Sergey") 9 классов, + 1,5 курса "программирования" местячкового техникума

RT [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@serebro](https://twitter.com/serebro "Sergey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [twitter.com/dan\_abramov/st…](https://t.co/svf9lsH77j "https://twitter.com/dan_abramov/status/593874112323411968")

Этот ответ я специально приберёг [twitter.com/le0\_nik/status…](https://t.co/YLHa8Yd00l "https://twitter.com/le0_nik/status/600624286462832640")

Использутете ли вы модули? Много ли было проблем при переводе legacy-кода на модули?

С новыми проектами-то всё просто: берём и сразу пилим на модулях, как взрослые дяди и тёти. :\)

RT [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") С legacy-кодом неплохо управляется browserify + browserify-shim. В пятницу упомяну это в докладе [frontendconf.ru/2015/abstracts…](http://t.co/tdF3xZw2RE "http://frontendconf.ru/2015/abstracts/1724")

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть некоторый монолит который как швейцарский нож. умеет все но не очень плохо. сущий легаси. сейчас делаю е…

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@serebro](https://twitter.com/serebro "Sergey") 4 курса «программирования в компьютерных системах» [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") А потом чего? Ну, понятно, чего химики и связисты бросали, а «тыж-программист»?

RT [@iggerman](https://twitter.com/iggerman "Igor German"): [@serebro](https://twitter.com/serebro "Sergey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") техник по телекоммуникациям\) проще говоря, связист

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@serebro](https://twitter.com/serebro "Sergey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 4 курса «Комплексное обеспечение информационной безопасности автоматизированных систем»

.[@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") Хочу тебя тоже попросить рассказать, почему ты ушел с программерской специальности

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это заочка, и перспектива госов на паскале меня не радовала. Ворд, пеинт, диаграммы эйлера-вейна, VBA… А я…

.[@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") А, или имеется в виду, что остановится на бакалавре?

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 1. Уверенно осознал, чем хочу заниматься и от чего получаю удовольствие — веб. 2. Объёмы лишней и устаревшей …

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@serebro](https://twitter.com/serebro "Sergey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 2 курса компьютерной безопасности и 1 курс прикладной математики, без диплома — забрал документы

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 3. Несмотря, что это IT-специальность, всё равно практического опыта, применимого в разработке очень мало.

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), поэтому я решил не тратить время и деньги в пустую, и заняться приятным мне делом.

.[@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") Аналогичная фигня. Даже верстать в «оппа-говносайт» мне понравилось больше, чем непонятно зачем чертить редукторы и эвольвенты

RT [@ru\_rodweb](https://twitter.com/ru_rodweb "Igor Deryabin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") отучился 5 лет на математика-программиста. Математике научили, а программировать — нет :-\(

RT [@tommy\_diaver](https://twitter.com/tommy_diaver "Aнтoн Kапycтин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") лично знаю ентерпрайз сеньёра который по образованию философ

RT [@serebro](https://twitter.com/serebro "Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что можете сказать по поводу js фреймворка [aurelia.io](http://t.co/jyOKUkmNdM "http://aurelia.io") и на чем сейчас имеет смысл начинать большие пр…

.[@serebro](https://twitter.com/serebro "Sergey") Фреймворки и их особенности, увы, не моя сильная сторона, я сразу в этом и признался [twitter.com/jsunderhood/st…](https://t.co/wbA8eagyoG "https://twitter.com/jsunderhood/status/600099312031408128?s=09") Беру помощь зала :\)

.[@serebro](https://twitter.com/serebro "Sergey") Но с виду ничего так. Хотя и ничего революционно нового. А про то, какой ф/в выбрать — it depends, серебряной пули не существует

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@serebro](https://twitter.com/serebro "Sergey") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если речь идет о фронтенде, то я бы предложил ember.js

Признаться, для меня фреймворки — скорее «необходимое зло»

RT [@instanceofpro](https://twitter.com/instanceofpro "abrosimov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фреймворк это просто инструмент, как молоток или отвертка. Отвертка для тебя тоже необходимое зло?

.[@instanceofpro](https://twitter.com/instanceofpro "abrosimov") Если проводить аналогии, отвёртка, как по-моему, — это либа. Ей можно закручивать и саморезы в стену и винты обшивки ракеты

.[@instanceofpro](https://twitter.com/instanceofpro "abrosimov") а фреймворк — это самолёт. Всё включено, заранее продумано и отлично летает, но на работу по городу на нём не поездишь

.[@instanceofpro](https://twitter.com/instanceofpro "abrosimov") На эту тему есть хорошая статья, [frontender.info/zero\_framework…](http://t.co/7u40TqHn6z "http://frontender.info/zero_framework_manifesto/") Автор несколько экстремален, но кое в чём я с ним согласен

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если бы единственная доступная отвертка была с анально-педальным приводом, то я бы определнно считал её «необхо…

RT [@\_elergy\_](https://twitter.com/_elergy_ "Elergy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@instanceofpro](https://twitter.com/instanceofpro "abrosimov") сейчас все без разбора называют и либами и фреймворками. А разница лишь в размере отвертки и кол-…

.[@\_elergy\_](https://twitter.com/_elergy_ "Elergy") Как говорилось в «Осторожно, Модерн!», разница — коrенная! [pbs.twimg.com/media/Bt8NEveI…](https://t.co/zOMUDDjPok "https://pbs.twimg.com/media/Bt8NEveIcAEsTqH.png")

RT [@dmitry\_dok](https://twitter.com/dmitry_dok "dmitry"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@instanceofpro](https://twitter.com/instanceofpro "abrosimov") отверткой можно чай размешивать

RT [@\_elergy\_](https://twitter.com/_elergy_ "Elergy"): [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@instanceofpro](https://twitter.com/instanceofpro "abrosimov") если либа зависит от других либ и диктует,как тебе структурировать код-стоит ли назы…

.[@\_elergy\_](https://twitter.com/_elergy_ "Elergy") Зависимости — это просто замечательно. Но то, что заставляет определённым образом писать код — фреймворк

Например, e.stopImmediatePropagation\(\) в jquery — фреймворковая замашка. Он не будет работать с хэндлерами, установленными не через jquery

RT [@oshibka404](https://twitter.com/oshibka404 "Andrey Ozornin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") По-моему, разница между библиотекой и фреймворком - в том, что ты вызываешь функции библиотеки, а фреймворк вы…

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@\_elergy\_](https://twitter.com/_elergy_ "Elergy") а вы тут о Фреймворки vs Либы или что обсуждается? [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@instanceofpro](https://twitter.com/instanceofpro "abrosimov")

.[@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") похоже, уже да

RT [@cakeinpanic](https://twitter.com/cakeinpanic "Katerina Tort"): [@\_elergy\_](https://twitter.com/_elergy_ "Elergy") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") [@instanceofpro](https://twitter.com/instanceofpro "abrosimov") ох не люба мне либа, люб – фреймворк\)

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [jsfiddle.net/92ewxh6k/](http://t.co/n4LgbAjlGP "http://jsfiddle.net/92ewxh6k/")

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") Спасибо! Вот это очень важная поправка, не знал, прошу прощения

RT [@instanceofpro](https://twitter.com/instanceofpro "abrosimov"): После реплая [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вся лента засрана холиварами, а я совсем не о том писал.

Раз уж зашёл разговор. А не кажется ли вам, что e.stopPropagation\(\) слишком авторитарен? Не лучше ли, если бы каждый хэндлер решал за себя…

…исполняться ему или нет на основе e.defaultPrevented? \(Поддержку этого свойства оставим за скобками\)

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для себя по опыту пришел к тому, что он нужен в каких-то очень особых случаях. Приводит к неожиданным неудобс…

RT [@ap\_savin](https://twitter.com/ap_savin "Alexander Savin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у нас разрешается использовать stopPropagation, только если докажешь, что по-другому нельзя. Не помню, чтобы ком…

.[@ap\_savin](https://twitter.com/ap_savin "Alexander Savin") А можно мне ознакомиться с вашим стайлгайдом? Кажется, он мне уже нравится

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@ap\_savin](https://twitter.com/ap_savin "Alexander Savin") останавливать баблинг свайпа на элементах с горизонтальным скролом на мобильных, если по свайпу открывается меню? [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") В обработчике жеста для меню проверять scrollWidth и scrollLeft у e.target? Не знаю. Не уверен, что правильно понял

Вот юзкейс. Есть открытое меню и какой-то блок с кнопкой внутри. При клике куда-нибудь вовне выпадалка скрывается [pic.twitter.com/rkC0lOJzin](http://t.co/rkC0lOJzin)

…кликаем на кнопку внутри. Обработчик на самом блоке нам вызывать нельзя, мы глушим событие через stopPropagation\(\)…

…но заглушенное событие не долетает до body/documentElement, и выпадалка не знает, что ей надо закрыться. Проблема.

RT [@likhter](https://twitter.com/likhter "Konstantin Likhter"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") странное условие не вызывать обработчик на блоке. Тогда блок должен смотреть, что клик не в кнопку. Тогда не буде…

.[@likhter](https://twitter.com/likhter "Konstantin Likhter") к примеру, кнопка удаления пункта ToDo-листа. А ещё внутри могут быть и другие кнопки, на все мыслимые случаи `if` не поставишь

RT [@likhter](https://twitter.com/likhter "Konstantin Likhter"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Кейс имеет право на жизнь :\) В моем понимании контейнер должен заботиться о том, что происходит у него внутри, а …

.[@likhter](https://twitter.com/likhter "Konstantin Likhter") трудно не согласиться\) Я лишь о том, что блок не должен делать stopP, а то в этом случае он решает вообще за всю страницу

## Четверг <small>60 твитов</small>

Когда я в конторе служил версталём,  
Ко мне постучался сеньор девелопер.  
И глядя на код мой в открытом окне,  
Он усмехнулся мне.

…это вам сегодня вместо музыкальной паузы :\) Всем доброго утра!

RT [@dmitryshimkin](https://twitter.com/dmitryshimkin "Dmitry Shimkin"): [@likhter](https://twitter.com/likhter "Konstantin Likhter") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот пример проблемы: [jsfiddle.net/wbvyz17h/](http://t.co/3awU39CYck "http://jsfiddle.net/wbvyz17h/") Решение: capture phase или stopPropagation.

Сейчас проходит крупный ивент [#FrontConfMsk](https://twitter.com/search?q=%23FrontConfMsk), на [@webstandards\_up](https://twitter.com/webstandards_up "Веб-стандарты") вы можете почитать текстовую трансляцию [pic.twitter.com/cuPPylhCiQ](http://t.co/cuPPylhCiQ)

RT [@Eisenhoden](https://twitter.com/Eisenhoden "Пухлина Путіна"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@huigovnomuravei](https://twitter.com/huigovnomuravei "Хуй Говно и Муравей") он рассказал, как плачет QA

Писать сейчас про фронтенд, пока идёт масштабная конфа, это как транслировать местный матч во время финала кубка чемпионов. Или нет? :\)

[habrahabr.ru/post/258449/](http://t.co/7eOxwK9nKu "http://habrahabr.ru/post/258449/") — весьма интересная статья. И показательная. А сообщали ли вы когда-нибудь об уязвимостях, и что вам за это было?

Свою первую «нормальную» уязвимость я нашёл 9 лет назад в одной браузерной игрушке. Отрепортил. Получил бан на четыре года.

С другой стороны, недавно в наш стартапчик обратился белый хакер и рассказал об XSS. Поблагодарили и ещё $100 ему дали

RT [@naorunaoru](https://twitter.com/naorunaoru "рома"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так и становятся блэкхэтами

А, может, у вас есть private bugs? Не обязательно говорить, где и каких масштабов, достаточно намекнуть ;\)

RT [@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") private bugs? Это мандавошки, что ли?

.[@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin") :D Упс! Я имел в виду нераскрытые уязвимости для личного пользования

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как вы это представляете? можно пример?

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") Да хоть бы и как в статье после хитрых манипуляций из ниоткуда берутся деньги. Можно сообщить, а можно сохранить в тайне и юзать

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и сесть за мошенничество? Как бы коммиты в репозиторий именные, верно? Или предполагается, что клиент идиот?

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") Не на своём проекте, разумеется, закладки делать. Это как минимум саботаж. Я про найденные уязвимости на чужих проектах

Прямым текстом, чтобы не было кривотолков. Я НЕ призываю делать закладки в коде. Обманывать работодателя — плохо и за это положен 9 круг ада

Но если вы обнаружили, что кофейный автомат \(который кодили не вы!\) выдаёт латте по цене чая — вы будете этим пользоваться, или сообщите?

RT [@chemikadze](https://twitter.com/chemikadze "Nick Sokolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А статья не положена?

.[@chemikadze](https://twitter.com/chemikadze "Nick Sokolov") И статья, наверняка

RT [@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Думаю качественный код дает больше профита \(как минимум денег\), чем экономия на латте.

.[@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin") Хм… а зачем заботиться о качестве кода чужого, никак не связанного с тобой кофейного аппарата?

RT [@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") добавляешь в резюме - пофиксил кофеварку =\)

.[@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin") Ну, фиксить-то другие будут. А вот на вакансию QA «нашел багу в кофейном автомате» весьма достойно.

Once again. Давайте говорить о багах, которые вы сами честно нашли \(НЕ имея доступа к исходникам даже на чтение\).

RT [@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мне кажется, или ты пытаешься вычленить "хакеров" среди программистов?

.[@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin") гхм… не хакеров, а добровольных аудиторов безопасности

.[@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin") …чтобы найти SQL-инъекцию в поиске на Джумле, не нужно иметь особых хакерских талантов

Окей, видимо, никто не хочет рассказывать, это нормально. Тогда расскажу о своих курьёзах. Один раз я нашёл SQL-инъекцию на сайте РГУ…

…это вуз, выпускающий программистов. Сам по себе факт нахождения SQL-inj не ахти какое достижение, конечно. Но порадовала реакция…

…говорю им, чуваки, у вас SQL-inj. Они: нее, не может быть, потому что не может быть. Поверили только когда скинул им логин подключения к БД

Люди отрицали очевидное. Зачем — мне непонятно.

Для меня сообщить об уязвимости — это как сказать «а у вас ширинка расстёгнута». Кто-то скажет спасибо. Кто-то расценит как домогательство

Ошибки бывают у всех. По невнимательности или по незнанию. Но если не знать, как искать уязвимости, то как научиться их не делать?

RT [@provorov](https://twitter.com/provorov "Проворов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@valerypopoff](https://twitter.com/valerypopoff "Валера Попов") в Вышке два месяца стоял автомат, который готовил капучино за 20 копеек, а ещё давал три рубля сда…

Меня обвинили в аморальности и саботаже, потом в хвастовстве. Или я поднял не ту тему, или не умею изъясняться. В любом случае — извините.

RT [@teardrop\_lisa](https://twitter.com/teardrop_lisa "Lisa Katorgina "): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а еще у тебя фотка страшная. ты там как будто с адского похмела. я же видела тебя в жизни - ты не такой!

.[@teardrop\_lisa](https://twitter.com/teardrop_lisa "Lisa Katorgina ") Ты же меня видела после полудня, да?

RT [@teardrop\_lisa](https://twitter.com/teardrop_lisa "Lisa Katorgina "): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот и фотографируйся после полудня!

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@teardrop\_lisa](https://twitter.com/teardrop_lisa "Lisa Katorgina ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, фотография эпически прекрасна. Под капотом AlcoScript от Кошерного Клошара.

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@teardrop\_lisa](https://twitter.com/teardrop_lisa "Lisa Katorgina ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я любя. Просто воздаю фото должное.

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@teardrop\_lisa](https://twitter.com/teardrop_lisa "Lisa Katorgina ") У меня вообще морда нефотогигиеничная. Но что поделать, Кодекс Ведущего Подкапотного требует фото на аватарке.

Прямо какой-то месяц мержев [github.com/jashkenas/unde…](https://t.co/rJQfWPOcpp "https://github.com/jashkenas/underscore/issues/2182")

Интересно, что дальше? Grulp? Emberbone? Npmower?

RT [@twokul](https://twitter.com/twokul "Alex Navasardyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Embularactymerbone

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") bower был не нужен с самого начала. npm вполне мог работать с css/html и тд, Grulp был планом Gulpовцев на мом…

.[@listochkin](https://twitter.com/listochkin "Андрей Листочкин") про bower — в самую точку! Мне кажется, fat написал его не потому что он нужен, а потому что хипстер

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") мне безумно нравится управлять пакетами при помощи nuget, когда "прилетает" только то, что нужно

.[@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") Но никто же не мешает подключать только то, что нужно, а остальное — нехай лежит, много места не займёт [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") да, но бывает так, что автор меняет директорию/название/etc., приходится подстраиваться.

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") или вспомните истории, когда автор внезапно удаляет свою библиотеку с гитхаба, с корнями.

.[@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") Если одолевают сомнения, можно же всегда форкнуть репу и выставить путь к ней в депсах package.json

RT [@iSalem100](https://twitter.com/iSalem100 "Valentin Banshchikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нам в универе начальник СБ с гордость рассказывал, как завели дело на нашедшего уязвимость на их сайте, а на ды…

Вообще, интересно, зачем удалять свой код если им пользуются? У меня есть проект, страшный как смерть, но я его храню, ради трёх калек

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда мне грустно и плохо я чищу жесткий диск и репозитории. И репозиториев все меньше.

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") Ну что же так, сплеча? Можно сначала добавить опечаток, чтобы не запускалось. А если за месяц ни одного ишью или форка — удалять

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") можно открепить форк в свой самостоятельный проект, написав в поддержку и обосновав за…

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну как мне кажется, это большое дело. Мердж давно напрашивался. Это всегда интересно,когда форк становится популя…

RT [@Krivlenia](https://twitter.com/Krivlenia "Константин"): [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У bower есть одно преимущество ему не важно наличие meta.jsonЧто полезно при проверке библиотек. Не…

## Пятница <small>89 твитов</small>

Bret Victor круто рассказывает о «so meta». Особенно хорош его доклад Inventing on a Principle [youtu.be/a-OyoVcbwWE](http://t.co/LBooJg2a9f "http://youtu.be/a-OyoVcbwWE") Всем доброго утра!

Предлагаю сегодня и поговорить о всяких мета-штуках. Не о том, как пилить фронтенд, а почему именно вы фронтендеры?

Возвращаясь к вышесказнному, я выбрал для себя кодинг осознанно, даже бросил универ. Мне нравится в нём то, что это всё-таки инженерное дело

Но в отличие от железячных инженеров, тут обратная свзять приходит значительно раньше. Большая часть ошибок аукается максимум через месяц

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Можно ещё почему программисты

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") Ну, я имею в виду и версталей и даже немного «фронтовых» админов. Да и «нативщики»  вряд ли будут читать jsUnderHood

Мой хороший друг работает фронтендером. И честно признался, что он ненавидит айти, но больше ничего не умеет делать.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мне нравится разработка и круг общения, который она предполагает. С людьми всегда можно договориться, и они пос…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Но в другой стороны сложно пользоваться сервисами людей других профессий, тк везде видишь косяки и плохую орган…

Если какая-то тема уже раньше поднималась другими сессионными ведущими этого аккаунта, вы же говорите, ок? Чего одно и то же мусолить?

RT [@sc0rp1d](https://twitter.com/sc0rp1d "Mark Langovoi"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") потому что в 11 лет я увидел на полке книжного книгу по HTML. После этого я пробовал себя в разном программинге, …

Странно. Точно помню, что на работе лежала книжка по HTML где-то 2000 года. Наверное, её всё-таки сожгли, чтобы не дай бог никто не прочитал

RT [@talgautb](https://twitter.com/talgautb "Талга УтБ"): Мой друг хотел срубить бабла по легкому в интернете, всё началось с порносайта :D  
так вот я попал в веб \)\) [twitter.com/jsunderhood/st…](https://t.co/GKJxDUwQv2 "https://twitter.com/jsunderhood/status/601672130883952641")

RT [@green343](https://twitter.com/green343 "Rogozhkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в айти приходится "переучиваться" каждые 3 года; странно слышать "не умею"; программист может освоить много проф…

Мне кажется, программисту важно знать не только его круг обязанностей, но и хотя бы иметь представление о том, что уровнем абстракции ниже

Вам же приходилось слышать вопросы «как получить в php результат из функции js на странице», да? Такие люди не понимают, что происходит

Чтобы уверенно работать с клиентским js, нужно хотя бы иметь представление о http и, желательно, о tcp/ip

RT [@akrekotun](https://twitter.com/akrekotun "Alexey Krekotun"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В библиотеке нашел книгу "Сам себе WEB программист". Пожалуй, последняя книга, с которой надо было начинать зна…

RT [@kuzvac](https://twitter.com/kuzvac "Vasiliy Kuzmenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") всё банально. В детстве я нажал не тот пункт в меню на сайте и открылся исходный код :\) меня это поразило до глуби…

.[@kuzvac](https://twitter.com/kuzvac "Vasiliy Kuzmenko") У меня примерно так же. Ради любопытства посмотрел в сгенерированный HTML, и — ба! — да там же просто текст. И пошло-поехало

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") к сожалению, в реальности все иначе. Очень часто человек использует нечто, не понимая или не зная как оно рабо…

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") имхо, хороший программист должен понимать КАКИМ ОБРАЗОМ это работет в первую очередь

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А я в 11 начал с советских калькуляторов, потом C++ писал 4 года, а потом понял, что он никому не нужен, и свалил…

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") страш.бро писал на джаве. я хотел писать лучше него.начал с HTML :\). сейчас брат преподает математику, а я пи…

RT [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") рисовал говнодизайны, позже стал брать еще за верстку. Потом верстал чужие говнодизайны. Далее стал прогать интерф…

.[@VovanR](https://twitter.com/VovanR "Vladimir Rodkin") Хм, мой коллега ушёл из труъ-вебдизайна в хардкорный JS. А вот случаев перехода из кодеров в дизайнеры я не знаю

Отлично! Это же чертовски простой план, как привлекать в нашу отрасль новые кадры :\) [twitter.com/safrankov/stat…](https://t.co/EmZx4i2kNP "https://twitter.com/safrankov/status/601687402428702720")

RT [@soider](https://twitter.com/soider "Michael Sakhnov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin") знаю одного дизайнера бывшего админа. Не эникейщика, а вполне нормального сетевика в провайдере.

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@green343](https://twitter.com/green343 "Rogozhkin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") освоил какие нибудь профессии еще?

.[@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") Что до меня, я верстаю для полиграфии, в меру фотошоплю, сисадминю, знаю основы UI/UX и перевожу для [frontender.info](http://t.co/eJDFpM7P5u "http://frontender.info") :\)

.[@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") …это, конечно, скорее, навыки, а не профессии. Но когда диз забухал, а надо оконтурить иконки в svg, и Jack of all trades сойдёт

RT [@IZhylenko](https://twitter.com/IZhylenko "Igor Zhylenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") всю жизнь был уверен, что айти не мое, хоть и учился в этой сфере. Потом нашел работу разрабом и не представляю…

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а есть желание попробовать новые профессии? Какие?

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я подумываю о психологии, урбанистике, градостроительстве

.[@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") моё откровенно слабое место — коммуникации с людьми. Думаю, это надо подтянуть. Но все книжки, что я видел — какая-то хрень

.[@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") психология — дело хорошее. В UX и производственных процессах точно пригодится. Но, опять же, трудно найти адекватную литературу

.[@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") Кстати, «Thinking Fast and Slow» Даниеля Канеман — просто великолепная книга и очень легко читается

RT [@green343](https://twitter.com/green343 "Rogozhkin"): [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") плитку умею, электрику\(3 года назад научился\); после ряда внедрений могу работать менеджером в некото…

Ещё из книг очень хвалили [amazon.ca/Field-Guide-Un…](http://t.co/FXmQrE3P6U "http://www.amazon.ca/Field-Guide-Understanding-Human-Error/dp/0754648265")

Иногда, когда мне очень грустно, я хочу бросить вебдев и стать водителем маршрутки

RT [@lisovskyvlad](https://twitter.com/lisovskyvlad "Влад Лисовский"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня тоже к машинам тянет, хочу их чинить

Ну давате ещё по книгам. «Вы, наверное, шутите, мистер Фейнман» — это маст-рид для каждого человека с техническим складом ума

RT [@Dmiterko\_Roman](https://twitter.com/Dmiterko_Roman "Рома"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а я почему-то таксистом.

RT [@evlogii](https://twitter.com/evlogii "Evlogiy Sutormin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") книга очень средняя на троечку

На [twitter.com/jsunderhood/st…](https://t.co/y0vmHQN3cE "https://twitter.com/jsunderhood/status/601700901796065281") много интересных ответов

RT [@arik0n](https://twitter.com/arik0n "Sergey Belov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У этого вопроса есть ответ, отличный от «никак»

RT [@lapynow](https://twitter.com/lapynow "Дмитрий Ляпунов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Когда мне стало грустно продвать краску, я пошел в вебдев. Теперь когда мне грустно, я думаю о краске и становитс…

Продолжая мета-тему: Занимаетесь ли вы фротендом после работы, как хобби, и как ваши вторые половинки относятся к этому?

Моя, например, не всегда понимает, почему я до трёх ночи пытаюсь уменшить код на один байт при том, что не получу с этого никакой выгоды :\)

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") просто программирую в свободное время, когда оно есть. но приоритет идет на половинок. времени хватает на все…

RT [@sc0rp1d](https://twitter.com/sc0rp1d "Mark Langovoi"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это уже зависимость 😂

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати о мета-темах. я знаю что [@veged](https://twitter.com/veged "Sergey Berezhnoy") такое любит обсуждать. и давайте еще про парное программирование потом…

.[@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") Давайте! Как по мне, парное программирование — утопия. Лучше хорошее, но краткое, ревью и включённые линтеры

RT [@kojoru](https://twitter.com/kojoru "Konstantin Yakushev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") после работы - только бэкендом

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня это хобби, поэтому занимаюсь после работы. А как к этому должны относиться половинки? у каждого есть хо…

Вообще, самая лучшая работа — это хобби, за которое почему-то платят деньги

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не согласен, вдвоем некоторые проблемы решаются гораздо быстрей. Просто оно должно быть таргетированным на кон…

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") там, где проседает один программист, подхватывает другой и наоборот — получается довольно эффективно

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [youtube.com/watch?v=F\_cD6X…](https://t.co/yjkLKKv65M "https://www.youtube.com/watch?v=F_cD6XOrfAc") вот кстати достаточно подробная лекция на тему

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а есть такие? \(из дева\) :\)

.[@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") тут жеж как. Если чувствуешь, что дев не приносит тебе удовольствия, значит твоя настоящая привязанность какая-то другая

.[@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin") Само собой, не может быть так, чтобы вообще всегда всё офигенно. Я имею в виду некое усреднённое значение «довольности»

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В России занималась, сейчас нет. На работе хватает времени на все что меня интересует.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@sc0rp1d](https://twitter.com/sc0rp1d "Mark Langovoi") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Привет, меня зовут Александр и я программирую дома уже 12 лет…\*всхлипывает\*

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): Только вряд ли у кого-то есть хобби "фиксить баги" или "разбирать чужой говнокод". А это приходится тоже делать https://t.c[twitter.com/jsunderhood/st…](https://t.co/02rpsJPhn6 "https://twitter.com/jsunderhood/status/601756042897285120")

.[@rusgautama](https://twitter.com/rusgautama "Rus Buddha") С адским говнокодом я — тьфу-тьфу — уже сталкиваюсь нечасто. А правка багов — это медитативный процесс, улучшение Вселенной

.[@rusgautama](https://twitter.com/rusgautama "Rus Buddha") …правка багов — это как уход за садом. Там смотришь, листочек неправильно — чик! Там заборчик покосился — шлеп! Красота!

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") представь что ты оказался на огромной куче радиоактивных отходов и говна с задачей привести сад в порядок.  [@rusgautama](https://twitter.com/rusgautama "Rus Buddha")

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") берешь лопату и начинаешь искать сад. А за спиной стоит черный властелин с секундомером и страпоном. [@rusgautama](https://twitter.com/rusgautama "Rus Buddha")

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это больше напоминает реальный багфиксинг. И процесс не медитативен. Совсем. [@rusgautama](https://twitter.com/rusgautama "Rus Buddha")

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") Надо думать, по условиям задачи я сам же разложил эту атомную диарею? Если да, то так мне и надо. [@rusgautama](https://twitter.com/rusgautama "Rus Buddha")

RT [@SelenIT2](https://twitter.com/SelenIT2 "SelenIT"): [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") есть вещи хуже багфиксинга. Писать документацию к чужому коду, например:\)

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нет, в одиночку такое не осилить. Всегда есть легаси код и тот, другой, чувак. [@rusgautama](https://twitter.com/rusgautama "Rus Buddha")

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") Я каждый день работаю с легаси, 7Мб JS, начнали писать в 2011 C++ники, но у меня нет анального таймера, и это сильно меняет дело

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") Если манагер не вынимает душу, то есть вера в светлое будущее и то, что будут на Марсе яблони цвести

RT [@okertanov](https://twitter.com/okertanov "Oleg Kertanov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") идиотизм

Cheers! [pic.twitter.com/lXkOX9TYe9](http://t.co/lXkOX9TYe9)

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") тогда я с коллегами работаю в утопии ;-\) у нас уже триплпрограммирование работает, пробуем квадропрогр…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В Финляндии любят тоже вдвоём засесть, или коллективные технические брейнштормы [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr")

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") занимаюсь бэкендом. Какие вторые половинки? :\)

RT [@unel86](https://twitter.com/unel86 "Peter Jah (0-)"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, но вторая половинка и отпочковавшиеся четвертинки не очень готовы мириться с этим фактом\)\)

RT [@unel86](https://twitter.com/unel86 "Peter Jah (0-)"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") парное программирование позволяет пресекать ересь, которая может пройти, если задача срочносрочная

.[@unel86](https://twitter.com/unel86 "Peter Jah (0-)") если задача юберсрочная, то, конечно, можно хоть всем отделом её пилить. Но это же не постоянно

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@okertanov](https://twitter.com/okertanov "Oleg Kertanov") ну, вы не правы, время от времени стоит переключится. Но [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему именно водителем?

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня вот всегда больше тянуло попробовать себя в качестве маленькой лошадки, баристы или стриптизера в гей-клуб[@okertanov](https://twitter.com/okertanov "Oleg Kertanov")

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  Так как свою работу стоит любить, то это для меня вполне логичный выбор.

RT [@Barlog\_M](https://twitter.com/Barlog_M "Barlog (18+)"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я пилю фронтент потому что ненавижу людей, а стать врачом помешала гемофобия.

RT [@tommy\_diaver](https://twitter.com/tommy_diaver "Aнтoн Kапycтин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") к чёрту фронтенд. Кому он нужен\)

.[@tommy\_diaver](https://twitter.com/tommy_diaver "Aнтoн Kапycтин") Пральна! Только telnet, только хардкор

## Суббота <small>75 твитов</small>

Одна из моих излюбленных «дисциплин» js-гольфа — злоупотребление DOM и BOM. Например,  
var escapedHTML = new Option\(”&lt;"\).innerHTML; // "&amp;lt;"

В том же [jsfuck.com](http://t.co/CT444OU1Mp "http://jsfuck.com/") символ "&lt;" добывается весьма изощрённым способом: ““.italics\(\)\[0\]

Что интересно, код выше будет работать даже в nodejs, в нём тоже есть нестандартные String.prototype.italics, .link, .anchor, .big и другие

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, жена только рада, что я развиваюсь профессионально\) но до трёх не сидел, максимум пару часов после работы

RT [@KSDaemon](https://twitter.com/KSDaemon "Konstantin Burkalev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мне кажется что настоящие айтишники — они до мозга костей. И, конечно, же прогят/админят/изучают/читают во вне р…

RT [@KSDaemon](https://twitter.com/KSDaemon "Konstantin Burkalev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") → но жены/подруги, если они не айтишницы, обычно смотрят на это не очень воодушевленно. У меня так.

Вопрос читателям:  
Есть строка с таким содержимым: текст в UTF-8, закодированный в base64. Как его оттуда вытащить на клиенте?

RT [@vkurchatkin](https://twitter.com/vkurchatkin "vkurchatkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему нестандартные-то? Annex B: [people.mozilla.org/~jorendorff/es…](https://t.co/Ktf3ovwli9 "https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-properties-of-the-string.prototype-object")

.[@vkurchatkin](https://twitter.com/vkurchatkin "vkurchatkin") Забавно, похоже их уже «легализовали». В es5 их не было

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") функции btoa или atob

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Близко. Но atob вернёт не utf-8, а строку псевдо-8bit-ascii \(символы с charCodeAt от 0 до 255\)

RT [@vkurchatkin](https://twitter.com/vkurchatkin "vkurchatkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") такой еще есть стандарт: [javascript.spec.whatwg.org](https://t.co/WwCA4WjzaW "https://javascript.spec.whatwg.org/")

RT [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [developer.mozilla.org/en-US/docs/Web…](https://t.co/5h0Et9xVLt "https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22") Solution 1, функция b64\_to\_utf8. Работает в IE10+ и остальных браузерах.

.[@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko") Йеп! Это как раз тот случай, когда два метода со странным поведением дают ровно то, что нужно

RT [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") sublime или atom?

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") Пока что саблайм 3. Атом хорош, но остаётся смутное чувство недопиленности

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") Хайповый Slack тоже на атом-шелле \(его ещё вроде в electron переименовали?\), и тоже вызывает чувство недопиленности

RT [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пользуешься  easymotion под саблайм? Или как то по другому перебегаешь по коду?

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") неа, я не большой любитель вима \(хотя и говорят, что это удобно\). Ctrl-G, Ctrl-F, Ctrl-D и Ctrl-F мне достаточно

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") \*поправочка, вместо одного из Ctrl-F я имел в виду Ctrl-R

RT [@Vitalliumm](https://twitter.com/Vitalliumm "Vitaly Slobodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") атом имеет склонность к зависанию :\(

[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") напоминает: Don't code and drive! ;\)

Непонятно, зачем надо было форкать не-очень-стабильный nwjs в не-очень-стабильный electron

RT [@Sullenor](https://twitter.com/Sullenor "Литвинов Алексей"): [@KSDaemon](https://twitter.com/KSDaemon "Konstantin Burkalev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") голове отдыхать тоже нужно давать :\)

RT [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") расскажешь про свой топ плагинов для саблайма?\)

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") Всё достаточно ванильно: hayaku, jshint, trailing spaces и схемы для подсветки less и шаблонизатора django.

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") с hayaku гораздо проще писать css, но его киллер-фича для меня — Ctrl-Alt-⇅

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") в emmet есть тоже самое

.[@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") Наверняка ещё и больше. Но мне все равно, какой именно плагин обеспечивает мне эту функциональность

.[@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") Раньше я мог потратить три дня, чтобы отконфигать и вылизать Миранду или Тотал с нуля. Но уже как-то надоело

Вот ещё загадка на смекалку: как проще всего  в браузере редиректнуть на другой домен, то тот же uri? Скажем с foo.сom/bar/ на baz.сom/bar/

RT [@mostolovista](https://twitter.com/mostolovista "Georgiy Mostolovitsa"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [location.host](http://t.co/GSGtnluwR7 "http://location.host") = ‘[baz.com](http://t.co/kXSBBgdItq "http://baz.com")’?

.[@mostolovista](https://twitter.com/mostolovista "Georgiy Mostolovitsa") В точку!

Ещё задачка для скучающих джаваскриптстеров \(если ещё не надоело\), какая строка будет соостветствовать регулярке: /\(\\cb\)\\1\\2/

Самый «завальный» вопрос, который можно задать на собеседовании, это не про равно-равно и сложение строк с числами…

…вот кто уверен, что знает, что вернёт такая функция?  
function foo\(\){  
try { return 1}  
finally { return 2}  
}

RT [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 2 она всегда вернет. Инфа 100%

Уважаемые Знатоки, внимание, ответ: "\\x02\\x02\\x02"

… \\cb — это Ctrl-b, т.е, \\x02. \\1 — ссылка на первую скобку, которая явно равна \\x02. А второй скобки нет, поэтому \\2 парсистся как \\002

Вот ещё кусочек «адокода»:  
with\({foo: 42}\){  
  var foo = 33;  
}  
Как оно отработает?

RT [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") правильный ответ - кинет ошибку, т.к. должен быть 'use strict', блеат. А вообще в объекте foo станет равным 33.

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [pic.twitter.com/TQCS1O8Jj5](http://t.co/TQCS1O8Jj5)

.[@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko") тут можно ещё дополнить, что переменная foo всё же объявится \(= undefined\)

RT [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") верно, во внешнем скоупе объявится, но без значения.

Приходилось ли вам работать с кодом с js как с AST?

RT [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") было дело - для автоматизации перехода на другую систему интернационализации \(она же i18n\)

Вдогонку: что больше понравилось, Esprima или ast uglify \(или что-то другое\)?

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") с ним только так и надо работать!… жаль нет нормальных редакторов :-\(

Желание поработать с AST появилось после ужасного хака, где код парсился регуляркой. И вылилось в [npmjs.com/package/rhubarb](https://t.co/ZqgZbwC62O "https://www.npmjs.com/package/rhubarb")

На всякий случай: никогда, слышите, никогда! не парсите js регулярками!

Главная проблема в парсе js регулярками — это… регулярки. Точнее RegexpLiteral, начало которого трудно отличить от деления и начала коммента

RT [@\_elergy\_](https://twitter.com/_elergy_ "Elergy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ничего кроме Esprima не использовал, но впечатления положительные

Я сейчас не могу найти тот твит, но буквально недавно оказалось, что для одной и той же задачи эсприма работает ещё и быстрее, чем регулярки

В Эсприме больше всего не понравилось, что Identifier может быть как varname, так и propertyname, отличить можно только по родительской ноде

RT [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вопрос возникает когда js надо не только распарсить, но и изменить и, желательно, еще и сохранить.

RT [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот тогда уже ast выглядит менее предпочтительным вариантом

.[@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev") да, есть такое дело. Распарсить — но проблемо, собрать обратно целый гемор. Да ещё ж и с сорцмэпами надо \(иначе уже не принято\)

.[@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev") Говорят, в jscs именно это долгое время мешало не просто выдавать ошибки, но и править их автоматически

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так а вроде есть estraverse и еще какая-то либа, которая ast "сериализует" обратно.

RT [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я в итоге в другую сторону пересобирал регэкспами - повезло, что довольно простые паттерны были

.[@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev") Я полагался на индекс вхождения и длину токена. И замены в обратном порядке: с конца в начало. Зато это сохраняет ориг. отступы

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev") esprima плоха?

.[@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") Из имеющегося Эсприма чертовски хороша [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev")

Кто-нибудь может посоветовать REPL джаваскрипта под андроид? Для проверки чего-нибудь в полевых условиях пользуюсь repl.it, не очень удобно

RT [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/jxcore/jxcore](https://t.co/W52mh9p0Op "https://github.com/jxcore/jxcore") + repl его, мб?

.[@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон") Выглядит очень многообещающе, особенно после полуживого anode \([github.com/paddybyers/ano…](https://t.co/3l1BqSS4Ay "https://github.com/paddybyers/anode")\)

Джаваскипт со скрипом, медленно, но верно расползается по платформам и скоро будет в вашем холодильнике. Если его ещё там нет, конечно

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот этот доклад гляньте, там пример реальный. [abstract.properties/jsconfbp-2015/](http://t.co/CNOiCBw0Fk "http://abstract.properties/jsconfbp-2015/")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") йеп  
The JS World Domination [medium.com/@slsoftworks/j…](https://t.co/T3mvR15hwc "https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070")  
и The Birth &amp; Death of JS [destroyallsoftware.com/talks/the-birt…](https://t.co/1QfrPtj7Tw "https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript") http://t[pic.twitter.com/7qOsUUz4d8](http://t.co/7qOsUUz4d8)

Тащемта, даже Рендалл Манро не обошёл это явление стороной [xkcd.com/1508/](https://t.co/kb6nfwqZ5T "https://xkcd.com/1508/")

RT [@Moroz\_v](https://twitter.com/Moroz_v "Moroz_v"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") конкуренты: Python или Go, близки или далеки от js в этом деле ?

.[@Moroz\_v](https://twitter.com/Moroz_v "Moroz_v") Python и так уже на всех платформах, даже на Symbian. Но вокруг него уже нет хайпа, и на микроволновки его портировать не станут

.[@Moroz\_v](https://twitter.com/Moroz_v "Moroz_v") Как обстоят дела с Go увы, не знаю. О Go или Dart я слышу только когда собирается очередной митап по Go или Dart

.[@Moroz\_v](https://twitter.com/Moroz_v "Moroz_v") Весьма вероятно, JS как таковой ни при чём, и любой браузерный язык был бы так же популярен. Снова Ренделл [xkcd.com/1367/](https://t.co/lQJVdCJ182 "https://xkcd.com/1367/")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня вот ещё один вопрос интересует у Python или Go есть такое же сообщество и пакетный менеджер, как у JS?

## Воскресенье <small>107 твитов</small>

Вопрос [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") превратился в интересное обсуждение пакетных менеджеров [twitter.com/iamstarkov/sta…](https://t.co/jwX1jCEVvA "https://twitter.com/iamstarkov/status/602219793945653248?s=09")

Похоже, и в других языках наметился переход от глобальной установки модулей к локальной \(у каждого проекта своё собственное окружение\)

RT [@sagrenite](https://twitter.com/sagrenite "Konstantin Sazonov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") например, в каких?\)

.[@sagrenite](https://twitter.com/sagrenite "Konstantin Sazonov") в дискассе \(ссылка чуть выше\) шле речь про Python, да и про php я что-то такое слышал

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") даже у PHP уже давно есть Composer.

RT [@sagrenite](https://twitter.com/sagrenite "Konstantin Sazonov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почитал дискасс, интересно\) когда я учил питон - сразу рекомендовали юзать virtualenv. В особенности для Django

.[@sagrenite](https://twitter.com/sagrenite "Konstantin Sazonov") А когда ты учил питон? Ну хотя бы примерно, мне для общей картины

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") composer в PHP по-моему не умеет то что озвучено. Там одна свалка зависимостей, как в bower

RT [@sagrenite](https://twitter.com/sagrenite "Konstantin Sazonov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") учил его в 2011, но virtualenv появился ещё в 2008

.[@sagrenite](https://twitter.com/sagrenite "Konstantin Sazonov") Примерно в одно время со мной. Жаль, мне тогда никто не сказал For great justice использовать virtualenv

float: left;  
display: inline;  
Кто-нибудь ещё помнит, зачем эти два CSS-свойства применяются вместе? :\)

RT [@Denis\_dp](https://twitter.com/Denis_dp "Denis Sergeevich"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что за дичь?\)

RT [@langolf](https://twitter.com/langolf "Aleksandr Langolf"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фикс для дабл маржинлв в ие6?

RT [@denisov](https://twitter.com/denisov "Денис Денисов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") забудешь эти двойные маргины в IE, как же.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") [@denisov](https://twitter.com/denisov "Денис Денисов") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это не нужно читать, у нас уже есть флексбоксы, и уже слава богу нет IE6

RT [@rainrb](https://twitter.com/rainrb "rainrb"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@sagrenite](https://twitter.com/sagrenite "Konstantin Sazonov") в разных других языках есть инструменты для проектного управления завмсимостями 100 лет как;\)

Последний раз я верстал шаблон email года четыре назад. В то время приходилось использовать чуть ли махровый html 3.0. Как там дела сейчас?

RT [@xufocoder](https://twitter.com/xufocoder "Sergey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") tables, inline-css :\(

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вот таблица, полная боли: [templates.mailchimp.com/resources/emai…](http://t.co/DsuBaF5Ccy "http://templates.mailchimp.com/resources/email-client-css-support/")

RT [@bashmish](https://twitter.com/bashmish "Misha Bashkirov"): Специально для подписчиков [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), которые просили больше ада и шуток - твиттер [@horse\_js](https://twitter.com/horse_js "Horse JS")!

.[@bashmish](https://twitter.com/bashmish "Misha Bashkirov") Я оттуда новости узнаю. :\) Если КоньJS пишет «underDash»,  то как бы понятно, что-то происходит

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@bashmish](https://twitter.com/bashmish "Misha Bashkirov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@horse\_js](https://twitter.com/horse_js "Horse JS")  [javascript.horse](http://t.co/XiRy6YOkvh "http://javascript.horse/") !

Чуть больше девяти часов остаётся мне на подкапотном посту. Пожалуй, я уже спросил и рассказал всё, что хотел.

Что не рассказал, можете почитать тут [gist.github.com/subzey](https://t.co/ntqiAfVTpL "https://gist.github.com/subzey") или тут [habrahabr.ru/users/subzey/t…](http://t.co/y4yqkPXe1p "http://habrahabr.ru/users/subzey/topics/")

В оставшееся время я поотвечаю на ваши вопросы. Задавайте любые, даже не связанные с вебдевом

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Может, спрашивали, но я не видел. Какой у тебя опыт разработки?

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") В свою первую контору я пошёл работать около 9 лет назад

RT [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на каких ещё языках ты программируешь? Какой опыт на них?

.[@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов") Раньше хорошо умел php \(ок. 5 лет стажа\). Питон около 3-4 лет. Знаю, с какой стороны держать C и Asm

.[@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов") Но js — моя первая любовь \(после бейсиков\). Подкупило тогда то, что ничего не надо ни ставить, ни компилировать :\)

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что насчет 420?

.[@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") Не, 420 не прёт, чувствую себя тупым и вялым. Старый-добрый алкоголь лучше

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") какие у тебя музыкальные пристрастия?

.[@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor") По большей части Industrial rock/metal, IDM, ambient и chiptune

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я — джуниор, читавший Code Complete и учивший JS по MDN. Что мне стоит почитать?

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") Почитай «The Good Parts», и айда фигачить код! Только практика, только хардкор, а там по ходу и сам поймёшь, что ещё почитать

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну и вдогонку: какие книги/ресурсы/навыки/etc тебе больше всего помогли в карьере и развитии?

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") javascript.ru и как ни странно, стандарт ES5 в переводе Д. Сошникова. Ну и остальное по мелочи, уже не помню

.[@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") Ах, да, код сам по себе хорошая книга. Можно открыть сорц какого-нибудь jquery или underscore и изучать, как пишут маститые кодеры

RT [@xufocoder](https://twitter.com/xufocoder "Sergey"): [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Пробовал на досуге как-то пособирать gist получился небольшой [gist.github.com/ufocoder/13eb3…](https://t.co/Oct0mivIXe "https://gist.github.com/ufocoder/13eb354d9463850d654b")

RT [@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") jQuery скорее учебник того, как не надо писать. По крайней мере в 2015 году.

.[@mkazantsev](https://twitter.com/mkazantsev "Maxim Kazantsev") если ты про API, согласен, апи jquery — то ещё нагромождение легаси

RT [@gryzzly](https://twitter.com/gryzzly "gryzzly"): [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Professional JavaScript for Web Developers by Nicholas C. Zakas, чувак дотошнейший и практичнейший.

jQuery можно поблагодарить за популяризацию чейнинга. Но в самой джеквере местами чейнинг сделан только ради чейнинга

Например, метод .end\(\). Используется чуть чаще, чем никогда. А ссылку на предыдущий объект держит, отличное место для утечки памяти

…в каком-то из плагинов было что-то вроде setInterval\(fn\(\){  
$a = $a.closest\(".foo"\);  
}  
Ух, как оно текло!

Или вот: в ноде .emit\(\) возвращает то, было ли обработано событие. В DOM dispatchEvent — то, был ли он defaultPrevented…

В jquery $\(…\).trigger\(\) возвращает this. А зачем нам знать, было обработано событие или нет? Чейнинг-то важнее

RT [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") помимо JS, на чем разрабатываешь/что изучаешь и почему? Нравится ли?

.[@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko") ответил чуть выше, [twitter.com/jsunderhood/st…](https://t.co/aSlHk9NK1b "https://twitter.com/jsunderhood/status/602444280716734464?s=09") Сейчас изучаю Open/WebGL, без фреймворков WebGL — злая вещь, но пока не унываю\)

RT [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что ты думаешь на счёт раскладок ? Дворака и тд?

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") кому как удобнее. Если у тебя один ноут, с которым ты везде, то вообще нет препятствий. Сам пользую Бирмановскую Qwerty

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko") Кстати в этом году вышла первая книжка по WebGL на русском

RT [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что на WebGL разрабатываешь?

.[@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko") Пока ничего. Изучать начал потому что заметил в демосценерской теме заметный дрейф в его сторону

RT [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сколько символов набираешь в минуту на англ раскладке?\)

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") Не знаю. Когда кодю, я думаю с «меньшим рейтом», чем печатаю. А в скайпе сильно не разгонишься

RT [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я сейчас верстаю письмо. Это как и прежде ужас: таблицы, inline CSS. Только Premailer немного упрощает жизнь.

Кстати, разработчики, как у вас с английским языком? Общаетесь ли вы с иностранными коллегами в скайпе/слэке/чем-нибудь ещё?

Я частенько переписываюсь с французами, они говорят, что у них английский знают практически все

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для реддита хватает\)

RT [@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov"): .[@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  ладно. Самый технический вопрос этой недели : как думаешь, если сразится акула и медведь, кто победит?

.[@DimkaSerov](https://twitter.com/DimkaSerov "Dmitry Serov") Ха! Конечно же медведь! Этж машина для убийства, когти — во!, зубы — во! А черно-белая раскраска и тёмная шерсть под глазами…

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на работе все общение на английском языке, 95% всей информации из англоязычных источников, ну и общение с комм…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Общаюсь только на англ, но с сообществом из России/Украины/Беларуси - по русски

RT [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan"): [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") есть такой how-to по верстке писем [habrahabr.ru/company/pechki…](http://t.co/nDRvfNBJ9u "http://habrahabr.ru/company/pechkin/blog/255819/") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") можно было сразу ссылку дать на профиль [@DmitrySoshnikov](https://twitter.com/DmitrySoshnikov "Dmitry Soshnikov") :\)

RT [@Krivlenia](https://twitter.com/Krivlenia "Константин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если в целом говорить в рамках event drivent development, то нам действительно не нужно знать обработалось ли с…

Вы наверняка видели выступление Вадима Макишвили «36» [youtu.be/xPPCzryZK44](http://t.co/BaEqqrLIcU "http://youtu.be/xPPCzryZK44"). Делюсь ссылкой на его новое выступление [youtu.be/iBHr8gKc5L8](http://t.co/4UUtW1t3pF "http://youtu.be/iBHr8gKc5L8")

RT [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") отличная идея про this [gist.github.com/subzey/8115612](https://t.co/PHEJ17fmjJ "https://gist.github.com/subzey/8115612") Еще нигде не встречал до этого

.[@VovanR](https://twitter.com/VovanR "Vladimir Rodkin") Рад, что понравилось!

RT [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") хватает только на чтение и написание комментариев к коду. Разговаривать не с кем, так как никто не знает английски…

Я всё думаю, в coffescript же нельзя принудительно объявить переменную как локальную \([coffeescript.org/\#try:%23%20%D1…](http://t.co/SQzSG0G1gA "http://coffeescript.org/#try:%23%20%D1%83%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%20%D0%B3%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%0Astate%20%3D%20%7B%7D%0A%0A%23%20...%20100%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%20%D1%81%D0%BF%D1%83%D1%81%D1%82%D1%8F%0A%0Apluck%20%3D%20(arr)-%3E%0A%20%20state.foo%20for%20state%20in%20arr%0A%0A")\) и нет неймспейсов…

…товарищи кофескриптеры, вы что, все имена глобальных \(или в общем случае из внешних скопов\) переменных запоминаете?

RT [@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в частности поэтому и забил на coffeescript. Да сейчас он уже и не актуален. ES6 + Babel FTW.

.[@le0\_nik](https://twitter.com/le0_nik "Leonid Nikiforenko") просто именно «вывернутые наизнанку» объявления переменных меня в своё время и оттолкнули от кофе. Но вдруг я чего-то не понял

Вдогонку признаюсь, у нас на проекте в .jshintrc выставлен "-W004": true, разрешающий несколько объявлений одной переменной \(пока пилим es5\)

…не очень красиво, но зато легко добавлять-удалять циклы, при условии, что var используется де-факто как «типа-let» с блочным скопом

А вы, когда редактируете код, думаете о том, какой гит-дифф получится? Пытаетесь ли избегать мерж-конфликтов, или пофигу?

RT [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") иногда, зависит от обстоятельств. Точно нет если я - один разработчик на проекте :\) И да, стараюсь не делать вай…

Я считаю, singlevar — плохая практика. После мержа может остаться  
var a=1,  
b=2;  
c=3;  
«Одна переменная — один var» в этом железобетонно.

…да и замена ; на , меняет строку и делает тебя последним в блейме :\)

RT [@ixth](https://twitter.com/ixth "Ихтч"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Всегда делаю git add -p и иногда редактирую в нем чанки. Стараюсь раскидывать функциональные правки по разным коммит…

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") гит вообще меняет мышление о процессе разработки, приходится разбивать правки на разные коммиты в зависимости…

.[@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@ixth](https://twitter.com/ixth "Ихтч") А-аналогично. Атомарные правки проще отследить и при необходимости откатить. git-revert-driven development, хехе.

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") поэтому, отвечая на твой вопрос: да, стараюсь задумываться обо всём, что делаю

RT [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что есть из годных программ периодические перерывы/нотификейшены делать под мак?

.[@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон") Я на работе под виндами. Подсказка зала?

Эксперимента ради использовал в одной строчке let, стрелочную функцию, дестр. присваивание и аргументы по умолчанию: [babeljs.io/repl/\#?experim…](https://t.co/bbnTn6CB8S "https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=let%20foo%20%3D%20(%7Bbar%20%3D%2042%2C%20baz%7D%20%3D%20%7B%7D)%20%3D%3E%20console.log(bar%2C%20baz)%20%20%0A%0Afoo()%3B%0Afoo(%7B%7D)%0Afoo(%7Bbar%3A%2033%7D)%0A")

…Тото, мне кажется, мы больше не в Канзасе.

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") из-за несовершенства контроля версий? Пфф

RT [@denisx](https://twitter.com/denisx "denisx"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") первая же проверка отвалиться, что ж такого. Хотя я - за

.[@denisx](https://twitter.com/denisx "denisx") Хорошо, если есть линтер на он-коммит хуке. А то «чего там проверять, одну очевидную строчку?»

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если весь новый код вливать через PR с continuous integration, этой проблемы не существует.

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") Для проектов размером с баржу — безусловно! А кто будет каждый раз делать CI для библиотечки npm в 50 строк?

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@denisx](https://twitter.com/denisx "denisx")  препуш-хуки лучше, меньше отвлекают

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@ixth](https://twitter.com/ixth "Ихтч") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вы задроты просто, я бы вам не доверил организовать пьянку, например. ;\)

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") я для своих однострочников тренис поднимаю и норм

RT [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") думаю об этом перед коммитом. Но обычно не парюсь и в один коммит может попасть несколько тикетов. Или попутно исп…

RT [@eljusto](https://twitter.com/eljusto "Роган Борн"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") атомарные коммиты стараюсь делать. Если много форматирования и прочих стайл-фиксов -&gt; отдельная ветка и прошу все…

RT [@iPoplava](https://twitter.com/iPoplava "Igor Poplavsky"): [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") аналогично считаю идею плохой. Давно юзаю bind и других заставляю:\)

Что ж, моё время подходит к концу. Спасибо вам, коллеги, я узнал много новых вещей и услышал много самых разных мнений

Надеюсь, вам тоже понравилось, и вы тоже открыли для себя что-то новое

Вот вам на прощание микроскопическая демка:

eval\(unescape\(escape\('𬱥𭁉𫡴𩑲𭡡𫀨𡡵𫡣𭁩𫱮𚀧𚁥👣𫱮𬱯𫁥𚐮𨱬𩑡𬠦𙡥𛡣𫁥𨑲𚀩𛁥𛡬𫱧𚀧𚰨𨰽𙰢𧁜𫠢𚰧𚐫𚁡🐧𠑲𬡡𮐨𜐶𚐮𪡯𪑮𚁩🰢𘂷𘠺𘢷𘀢𚐫𙰩𚱣𚰨𨠽𙰢𛡜𙰢𦱩𙠱𧐫𙰩𚰧𚁩🐡𪐬𘠠𥁨𨑮𪰠𮑯𭐡𘀭𛐠𠁪𬱕𫡤𩑲𢁯𫱤𘀢𚐫𙰫𨠫𨰫𨐫𙰢𘠩𙰩𛁩🐱𩐳𚐠'\).replace\(/uD./g,''\)\)\)

…да, это тоже исполняемый код, не бойтесь, скопируйте и запустите его в консоли браузера или ноды :\)

На этой неделе с вами был Антон [@subzey](https://twitter.com/subzey "subzey") Хлыновский.  
Для меня это было очень новым, необычайно интересным впечатлением. Вы офигенные!

## Ссылки

### github.com  
<a href="https://github.com/mistadikay/strict-loader" target="_blank">https://github.com/mistadikay/strict-loader</a>  
<a href="https://github.com/Siorki/RegPack/" target="_blank">https://github.com/Siorki/RegPack/</a>  
<a href="https://github.com/cowboy/jquery-resize/blob/master/jquery.ba-resize.js" target="_blank">https://github.com/cowboy/jquery-resize/blob/master/jquery.ba-resize.js</a>  
<a href="https://github.com/jashkenas/underscore/issues/2182" target="_blank">https://github.com/jashkenas/underscore/issues/2182</a>  
<a href="https://github.com/jxcore/jxcore" target="_blank">https://github.com/jxcore/jxcore</a>  
<a href="https://github.com/paddybyers/anode" target="_blank">https://github.com/paddybyers/anode</a>  
### goo.gl  
<a href="https://goo.gl/VyOVbL" target="_blank">https://goo.gl/VyOVbL</a>  
<a href="https://goo.gl/a3wrou" target="_blank">https://goo.gl/a3wrou</a>  
<a href="https://goo.gl/W13kdd" target="_blank">https://goo.gl/W13kdd</a>  
<a href="https://goo.gl/RS3FNF" target="_blank">https://goo.gl/RS3FNF</a>  
<a href="http://goo.gl/xY4Suu" target="_blank">http://goo.gl/xY4Suu</a>  
<a href="https://goo.gl/HG8vFn" target="_blank">https://goo.gl/HG8vFn</a>

### Другие

<a href="http://m.ustream.tv/recorded/62250630" target="_blank">http://m.ustream.tv/recorded/62250630</a>  
<a href="https://youtu.be/l1lr2ckSrTo" target="_blank">https://youtu.be/l1lr2ckSrTo</a>  
<a href="http://youtu.be/a-OyoVcbwWE" target="_blank">http://youtu.be/a-OyoVcbwWE</a>  
<a href="http://youtu.be/xPPCzryZK44" target="_blank">http://youtu.be/xPPCzryZK44</a>  
<a href="http://youtu.be/iBHr8gKc5L8" target="_blank">http://youtu.be/iBHr8gKc5L8</a>  
<a href="http://blog.jetbrains.com/dotnet/2014/12/15/improved-typescript-support-in-resharper-9/" target="_blank">http://blog.jetbrains.com/dotnet/2014/12/15/improved-typescript-support-in-resharper-9/</a>  
<a href="http://repl.it/oZV" target="_blank">http://repl.it/oZV</a>  
<a href="http://repl.it/ozU" target="_blank">http://repl.it/ozU</a>  
<a href="http://js13kGames.com/" target="_blank">http://js13kGames.com/</a>  
<a href="http://js1k.com/2313" target="_blank">http://js1k.com/2313</a>  
<a href="http://www.iteral.com/jscrush/" target="_blank">http://www.iteral.com/jscrush/</a>  
<a href="http://microjs.com/" target="_blank">http://microjs.com/</a>  
<a href="https://gist.github.com/subzey/47d772020089b6e41cab" target="_blank">https://gist.github.com/subzey/47d772020089b6e41cab</a>  
<a href="https://gist.github.com/subzey" target="_blank">https://gist.github.com/subzey</a>  
<a href="https://gist.github.com/ufocoder/13eb354d9463850d654b" target="_blank">https://gist.github.com/ufocoder/13eb354d9463850d654b</a>  
<a href="https://gist.github.com/subzey/8115612" target="_blank">https://gist.github.com/subzey/8115612</a>  
<a href="http://habrahabr.ru/company/tradingview/blog/178261/" target="_blank">http://habrahabr.ru/company/tradingview/blog/178261/</a>  
<a href="http://habrahabr.ru/post/258449/" target="_blank">http://habrahabr.ru/post/258449/</a>  
<a href="http://habrahabr.ru/users/subzey/topics/" target="_blank">http://habrahabr.ru/users/subzey/topics/</a>  
<a href="http://habrahabr.ru/company/pechkin/blog/255819/" target="_blank">http://habrahabr.ru/company/pechkin/blog/255819/</a>  
<a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank">https://www.youtube.com/watch?v=8aGhZQkoFbQ</a>  
<a href="https://www.youtube.com/watch?v=F_cD6XOrfAc" target="_blank">https://www.youtube.com/watch?v=F_cD6XOrfAc</a>  
<a href="http://www.pouet.net/prod.php?which=59403" target="_blank">http://www.pouet.net/prod.php?which=59403</a>  
<a href="http://www.pouet.net/prod.php?which=59298" target="_blank">http://www.pouet.net/prod.php?which=59298</a>  
<a href="http://www.pouet.net/prod.php?which=64966" target="_blank">http://www.pouet.net/prod.php?which=64966</a>  
<a href="http://www.p01.org/releases/140bytes_music_softSynth/" target="_blank">http://www.p01.org/releases/140bytes_music_softSynth/</a>  
<a href="http://2014.jsconf.eu/speakers/mathieu-p01-henri-monster-audiovisual-demos-in-a-tcp-packet.html" target="_blank">http://2014.jsconf.eu/speakers/mathieu-p01-henri-monster-audiovisual-demos-in-a-tcp-packet.html</a>  
<a href="http://jsfiddle.net/subzey/phb49762/" target="_blank">http://jsfiddle.net/subzey/phb49762/</a>  
<a href="http://jsfiddle.net/92ewxh6k/" target="_blank">http://jsfiddle.net/92ewxh6k/</a>  
<a href="http://jsfiddle.net/wbvyz17h/" target="_blank">http://jsfiddle.net/wbvyz17h/</a>  
<a href="http://frontendconf.ru/2015/abstracts/1724" target="_blank">http://frontendconf.ru/2015/abstracts/1724</a>  
<a href="http://aurelia.io" target="_blank">http://aurelia.io</a>  
<a href="http://frontender.info/zero_framework_manifesto/" target="_blank">http://frontender.info/zero_framework_manifesto/</a>  
<a href="http://frontender.info" target="_blank">http://frontender.info</a>  
<a href="https://pbs.twimg.com/media/Bt8NEveIcAEsTqH.png" target="_blank">https://pbs.twimg.com/media/Bt8NEveIcAEsTqH.png</a>  
<a href="http://www.amazon.ca/Field-Guide-Understanding-Human-Error/dp/0754648265" target="_blank">http://www.amazon.ca/Field-Guide-Understanding-Human-Error/dp/0754648265</a>  
<a href="http://jsfuck.com/" target="_blank">http://jsfuck.com/</a>  
<a href="https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-properties-of-the-string.prototype-object" target="_blank">https://people.mozilla.org/~jorendorff/es6-draft.html#sec-additional-properties-of-the-string.prototype-object</a>  
<a href="https://javascript.spec.whatwg.org/" target="_blank">https://javascript.spec.whatwg.org/</a>  
<a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22" target="_blank">https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_.22Unicode_Problem.22</a>  
<a href="http://location.host" target="_blank">http://location.host</a>  
<a href="http://baz.com" target="_blank">http://baz.com</a>  
<a href="https://www.npmjs.com/package/rhubarb" target="_blank">https://www.npmjs.com/package/rhubarb</a>  
<a href="http://abstract.properties/jsconfbp-2015/" target="_blank">http://abstract.properties/jsconfbp-2015/</a>  
<a href="https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070" target="_blank">https://medium.com/@slsoftworks/javascript-world-domination-af9ca2ee5070</a>  
<a href="https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript" target="_blank">https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript</a>  
<a href="https://xkcd.com/1508/" target="_blank">https://xkcd.com/1508/</a>  
<a href="https://xkcd.com/1367/" target="_blank">https://xkcd.com/1367/</a>  
<a href="http://templates.mailchimp.com/resources/email-client-css-support/" target="_blank">http://templates.mailchimp.com/resources/email-client-css-support/</a>  
<a href="http://javascript.horse/" target="_blank">http://javascript.horse/</a>  
<a href="http://coffeescript.org/#try:%23%20%D1%83%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%20%D0%B3%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%0Astate%20%3D%20%7B%7D%0A%0A%23%20...%20100%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%20%D1%81%D0%BF%D1%83%D1%81%D1%82%D1%8F%0A%0Apluck%20%3D%20(arr)-%3E%0A%20%20state.foo%20for%20state%20in%20arr%0A%0A" target="_blank">http://coffeescript.org/#try:%23%20%D1%83%D0%BC%D1%8B%D1%88%D0%BB%D0%B5%D0%BD%D0%BD%D0%BE%20%D0%B3%D0%BB%D0%BE%D0%B1%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F%0Astate%20%3D%20%7B%7D%0A%0A%23%20...%20100%20%D1%81%D1%82%D1%80%D0%BE%D0%BA%20%D1%81%D0%BF%D1%83%D1%81%D1%82%D1%8F%0A%0Apluck%20%3D%20(arr)-%3E%0A%20%20state.foo%20for%20state%20in%20arr%0A%0A</a>  
<a href="https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=let%20foo%20%3D%20(%7Bbar%20%3D%2042%2C%20baz%7D%20%3D%20%7B%7D)%20%3D%3E%20console.log(bar%2C%20baz)%20%20%0A%0Afoo()%3B%0Afoo(%7B%7D)%0Afoo(%7Bbar%3A%2033%7D)%0A" target="_blank">https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=let%20foo%20%3D%20(%7Bbar%20%3D%2042%2C%20baz%7D%20%3D%20%7B%7D)%20%3D%3E%20console.log(bar%2C%20baz)%20%20%0A%0Afoo()%3B%0Afoo(%7B%7D)%0Afoo(%7Bbar%3A%2033%7D)%0A</a>
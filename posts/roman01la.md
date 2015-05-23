# @roman01la

_02 Mar 2015_

Привет. На этой неделе здесь я — @roman01la. Будем говорить о парном программировании, функциональном JS, о доступности и других штуках. [0][0]

Кто-нибудь практикует парное программирование? Какие, по вашему мнению, плюсы/минусы в таком подходе? [1][1]

У нас на проекте это нормальный процесс. Поначалу было странно, но уже скоро стали очевидны преимущества. [2][2]

Так вот, работать в паре веселее, хотя, в целом, процесс идет медленнее. [3][3]

В то же время растет качество кода, если хотя бы один из пары достаточно опытен. Обмен опытом — еще одно неизбежное преимущество. [4][4]

Для новых людей на проекте работа парами — это возможность быстрее разобраться в коде и познакомится с командой. [5][5]

Важно постоянно менять партнера, например раз в пару месяцев. Партнера по коду, конечно же :) [6][6]

RT @veged: @jsunderhood вот пара моих рассказов про парное программирование: https://t.co/rtwtfwMj6h и https://t.co/yPXxAg8Vzm [7][7]

Если чувствуете себя некомфортно с новым партнером, важно не промолчать и высказаться. Вам еще работать вместе. [8][8]

Ну или сменить партнера, в крайнем случае. Умение ладить с людьми работая парами всегда пригодится. [9][9]

Только что менялись парами: стали в круг, разбираем задания и, по желанию, меняемся. Тимлид всегда помогает в этом процессе. [10][10]

.@toivonens попросила написать о сообществе разработчиков здесь, во Львове. [11][11]

Львов — один из центров аутсорса в Украине. Поэтому большинство митапов проводятся в стенах таких компаний. [12][12]

Но, на самом деле, есть и более интересные вещи. За почти полтора года, что я здесь живу, успел побывать на паре таких митапов. [13][13]

Например на прошлых выходных, на территории горнолыжного курорта Буковель, прошла конференция WeBukovel http://t.co/aQYYbhNvsQ [14][14]

Спасибо ее организатору @ArtyomTrityak. Я был рядом, но, к сожалению, не было возможности зайти. [15][15]

Еще во Львове есть @LvivJS — конференция фронтенд разработчиков http://t.co/pYSDurNbFa Был там в прошлом году, очень понравилось. [16][16]

Может кто-нибудь из Львовских расскажет больше о местных митапах? [17][17]

RT @denswor: @jsunderhood фраза о важности выбора партнера по парному программированию звучит грозно по соседству с такими твитами http://t… [18][18]

Пытался достучаться до местной JS юзер группы http://t.co/RLFLnmcqtc Судя по блогу ребята давно не собирались. [19][19]

Вообще удивительно, что, при таком количестве разработчиков в городе, не возникают новые митапы. Или я чего-то не знаю. [20][20]

Многие посещают конференции и воркшопы в Европе. Большой аутсорс может позволить себе отправлять разработчиков по всему миру. [21][21]

Нужно только суметь убедить заказчика в пользе для проекта от посещения таких событий. [22][22]

А что бы убедить в необходимости посещения события, практически все митапы дают такой мануал http://t.co/vjbE62eIZ4 [23][23]

Дальше по плану функциональный JS и немного FRP. Сейчас эта тема особенно активно обсуждается вокруг сообщества React. [24][24]

Уже есть полно библиотек для написания кода в функциональном стиле, а на Хабре постоянно размещают посты на эту тему http://t.co/tbjk4G9ed3 [25][25]

Популярные библиотеки: https://t.co/P7Ke19Kutz https://t.co/ro7sYDvtvE http://t.co/7LDAkEfggn http://t.co/hoGn7JJ8av [26][26]

Кто-нибудь практикует функциональный JS? Было бы интересно услышать впечатление от работы с JS пришедших из функциональных языков. [27][27]

RT @somerandstring: @jsunderhood попиарь мою либу https://t.co/A3Me4UDtYj [28][28]

В целом функциональный подход интересен хотя бы тем, что это альтернатива привычному ООП. [29][29]

Одной из характеристик функционального ЯП являются функции высшего порядка и функции первого класса. [30][30]

Проще говоря — функции оперирующие другими функциями. [31][31]

И любые операции представляются как функции. Например: `2 + 2` в JS и `(+ 2 2)` в Clojure. [32][32]

По сути в JS математические операции — это функции с неявной записью. Поэтому их нужно адаптировать, оборачивать в явные функции. [33][33]

`let add = x =&gt; x + x;` [34][34]

Кстати, синтаксис fat arrow function из ES6 отлично подходит для описания таких базовых функций, короткая запись, ничего лишнего. [35][35]

Имея набор таких базовых функций, можно воспользоваться одним из преимуществ функционального программирования — композицией. [36][36]

`capitalize(trim(string))` — композиция двух операций. [37][37]

Каждая из операций возвращает результат своего выполнения, таким образом можно создавать более сложные операции. [38][38]

Но запись через вкладывание неудобна, поэтому нам понадобиться функция высшего порядка для миксования других функций в новую операцию. [39][39]

Такую функцию часто называют `compose`. Вот пример ее реализации http://t.co/eZxAyLbFLK [40][40]

Теперь новые операции можно создавать так: `let convert = compose(trim, capitalize);`. [41][41]

И тут я осознал еще одно преимущество функционального подхода: ваш код говорит ЧТО делать, а не КАК, в случае с императивным подходом. [42][42]

Для этого в JS нужно отказаться от циклов в пользу `.map()`, `.filter()` и т.д. [43][43]

В одном из своих докладов @jhusain из Netflix рассказывает о функциональщине в JS https://t.co/XeEg9p6kdM [44][44]

Еще у них есть классный интерактивный курс по основам http://t.co/IPlJ9N9GI4 [45][45]

Если используете Underscore.js, то ура — в библиотеке есть набор функциональных инструментов, которые вы тоже наверняка уже использовали. [46][46]

Хотя @drboolean считает, что Underscore делает это неправильно https://t.co/Znwb7uNE1i [47][47]

У этого парня есть шестичасовой курс по ФП в JS «Hardcore Functional Programming in JavaScript» https://t.co/iDY6xi8TN0 [48][48]

RT @deepwalker: @jsunderhood бро, заканчивай эту тоску, пжалста. Или давай сразу про эндофункторы и стрелки и точки неподвижные в разрезе т… [49][49]

А если хочется теории, то на том же Хабре есть что почитать. Например Теория катеогрий http://t.co/B5c5mMaahU [50][50]

Больше всего понравилась серия переводов «Теория категорий для программистов» http://t.co/WrvfmpkNEx Очень доходчиво. [51][51]

Хотя на практике польза от этого сомнительна. Возможно стоит начать изучать Haskell? [52][52]

Если нет времени читать статьи, вот отличные слайды http://t.co/0pasncCV1X [53][53]

Пожалуйста поправляйте, если с чем-то не согласны. [54][54]

RT @KSDaemon: @jsunderhood на недавнем 19-м @MoscowJS выступал Трдат с докладом про FRP. Скоро будет видео! ;) [55][55]

RT @deepwalker: @jsunderhood ну вот например http://t.co/YfLckXBvBU [56][56]

Мне кажется, что для лучшего понимания ФП нужно попробовать функциональный язык. Например Clojure и в частности ClojureScript. [57][57]

А выбрал я ClojureScript потому, что для него есть Om — cljs интерфейс для React https://t.co/6sCWvkGrW3 [58][58]

В cljs данные всегда неизменяемые (immutable) и вот почему это хорошо... [59][59]

С точки зрения CPU намного быстрее создать, обработать и выбросить, чем создать, обработать, положить в память, запросить, обработать и т.д. [60][60]

К сожалению быстро это работает для многопотоковой архитектуры. Но не отменяет того факта, что с неизменяемыми данными работать проще. [61][61]

Это был краткий пересказ слов @jhusain [62][62]

RT @voischev: @veged @jsunderhood http://t.co/VKASbi6cOl [63][63]

А в сочетании с более медленными абстракциями над циклами типа `.map()` функциональный код в JS будет еще медленнее. [64][64]

Так что, в ближайшем будущем, тяжелые приложения на функциональном JS лучше обходить стороной. [65][65]

Например игры, где каждую секунду по 60 раз выполняются сотни функций. [66][66]

На интерфейсы это не распространяется, железо уже достаточно производительно. [67][67]

Еще немного о ФП [68][68]

Реализация неизменяемых структур данных в JS: Immutable.js http://t.co/V91KzFxqHH и mori http://t.co/NOeLoDUWKS [69][69]

Паттерны ФП https://t.co/yDZWVxEwXO [70][70]

Скринкаст по Haskell https://t.co/YiU0cYxDFr что бы понять, как ФП работает в функциональных языках. [71][71]

И очень крутая лекция про монады https://t.co/6e01jMQ5bE Крокфорд так не объясняет :) [72][72]

Теперь немного о функциональном реактивном программировании... [73][73]

ФРП — это ФП + потоки. [74][74]

Поток — это данные поступающие со временем. [75][75]

На практике это может выглядеть как преобразование событий DOM в поток таких событий и их обработка инструментами ФП. [76][76]

Например как это делает RxJS https://t.co/o6GmtO4MaK [77][77]

Используя базовый набор операций над потоками можно облегчить себе жизнь в создании интерфейсов. [78][78]

Об этом хорошо рассказывает все тот же техлид из Netflix в докладе «Async JavaScript with Reactive Extensions» https://t.co/CctMO3GOB2 [79][79]

Вот еще неплохо написано о реактивном программировании в JS https://t.co/PaFNOockba [80][80]

Короткий и информативный доклад @swannodette о неизменяемых структурах данных https://t.co/Qdx5terHDa /cc @rdvornov [81][81]

На React.js Conf @jlongster рассказал о другом подходе в работе с асинхронным JS пришедшем из Clojure и Go — это CSP https://t.co/nKtzLF2uCF [82][82]

Communicating sequential processes представляет концепцию процессов и каналов, по которым общаются эти процессы. [83][83]

Один процесс забрасывает данные в канал, другой достает их. [84][84]

js-csp https://t.co/SUXRo9Duqb [85][85]

Рядом с CSP всегда упоминаются трансдьюсеры. На Хабре было несколько постов о них. А в этом автор создает их с нуля http://t.co/jtbaABinsz [86][86]

Если просто, то трансдьюсер — это способ трансформирования данных через композицию. [87][87]

А это пятая серия «Better Call Saul» https://t.co/vMBLXXn5ZU [88][88]

На http://t.co/I4PzXF2Fzy можно почитать об интересных штуках которые не стали частью ES6 и о возможных изменениях в JS в далеком будущем. [89][89]

Например чтсла SIMD (single instruction, multiple data) https://t.co/LVoU8xzPx2 [90][90]

На самом деле SIMD перенесли в ES7 и эта спека уже частично реализованна в FF Nightly. [91][91]

SIMD инструкции обеспечивают параллелизм на уровне данных. [92][92]

Такая оптимизация даст прирост в производительности например в графике, где данные представлены в виде векторов. [93][93]

Например: в JS нету векторов, обычно представляют в виде массива или объекта, тогда операции над такими векторами выполняются почленно... [94][94]

Поэтому [1,2,3] + [1,2,3] выполнится в три процессорных такта, а с SIMD всего в один такт. [95][95]

Спеку можно почитать здесь https://t.co/xAz7zZ5vi6 [96][96]

Наглядный пример оптимизации рендеринга фракталов в asm.js http://t.co/CuKXLQEdPL только FF Nightly [97][97]

Кстати, о графике в вебе. Посмотрите на эти примеры физически правильного рендеринга в WebGL http://t.co/9gQPcioQmE Очень круто! [98][98]

Другая интересная спека — Typed Objects http://t.co/GKuAEblB2J тоже не попала в ES6, но реализована в FF Nightly [99][99]

Типизированные структуры данных `new StructType({ x: uint32, y: uint32 });`. [100][100]

В ночной сборке FF все типы находятся в глобальном объекте TypedObject http://t.co/LyudFyhtfM [101][101]

Или вот предложенный в ES7 оператор `.=` batch assignment для объектов http://t.co/UAsrNX3J8B [102][102]

И guards, как в Haskell http://t.co/iJBeBwD680 [103][103]

Вот еще несколько интересных спек: короткий синтаксис для function expression http://t.co/BqC8plU9f9 [104][104]

Иммутабельные структуры типа объект http://t.co/jQHaYwxbSw [105][105]

И иммутабельные последовательности (массивы, листы) http://t.co/lwfRY2n3JV [106][106]

Параллельно с Atom пробую Light Table http://t.co/mO6K7qUrF5 Особой популярностью не отличается, но есть крутые штуки. [107][107]

Например результат выполнения кода, который пишешь, возникает в той же строке. Наблюдение за значением переменных, тоже круто. [108][108]

Похоже на то, что делает http://t.co/OcRKEGTdRp с тестами. [109][109]

Перед тем, как заняться фронтендом, делал веб-дизайн. Сейчас вкус к красивым интерфейсам практически пропал. Все свелось к минимализму. [110][110]

Вы поддерживаете свои дизайнерские способности? Если да, то каким образом? [111][111]

RT @kinday: @jsunderhood, минимализм не отменяет красоту интерфейса, а наоборот обнажает истинную красоту, скрытую в его логике. [112][112]

RT @vvvlado: @jsunderhood перечитываю «Кради как художник» [113][113]

Джависты недоумевают почему `array === $(array) // false` [114][114]

Это можно объяснить как неявное приведение типов. [115][115]

Еще джавистам сложно понять ООП в JS, что уже говорить о React. Поэтому берут Angular. [116][116]

Fat arrow не единственный новый тип функции в ES6, еще есть tag function: fn `Hello ${name}!`. Вызов без скобок, принимает template string. [117][117]

Используется для чтения исходных данных из строки: значения и части строки http://t.co/mUlFJ9hFop [118][118]

С ES6 Proxy можно делать method missing, как в Ruby http://t.co/2LcUqI4mI6 [119][119]

Но такую штуку можно сделать и без Proxy, через нестандартный метод `__noSuchMethod__`, который вызывается если вызываемого метода нету. [120][120]

А вы стримили в /r/WatchPeopleCode/ ? Или может наблюдали за процессом разработки http://t.co/rsP5bSruFo [121][121]

Можно залипнуть на вечер и узнать что-нибудь новое для себя. Подходы, техники. [122][122]

https://t.co/peumYmg1rK [123][123]

React + CoffeeScript http://t.co/8Th6A4QmpY http://t.co/VZrQrTIoN9 [124][124]

Даже простым +1 в комментариях к обсуждению желаемой фичи вы можете повлиять на ее реализацию. [125][125]

Добавил иконку React в плагин file-icons, для подсветки .jsx файлов, в Atom https://t.co/Ik2RFa8vcC http://t.co/ZTPnKibkml [126][126]

Заодно получил опыт создания иконочного шрифта в Inkscape. [127][127]

Суперский инструмент для экспорта набора иконок в шрифт https://t.co/HZjUuuMsDk [128][128]

RT @prbigbrother: @jsunderhood http://t.co/nbBSYMYaO4 с более простым, но схожим функционалом [129][129]

А существует ли логотип закрепленный за картами кода? [130][130]

Видео со вчерашней ng-conf https://t.co/pAAvtfeVzL [131][131]

И итоги EmberConf 2015 https://t.co/P1dEWcjlhJ [132][132]

https://t.co/RNte7I6djx [133][133]

Добротный туториал об npm модулях на ES6 http://t.co/heBIbXlyw2 [134][134]

Библиотека функций высшего порядка для итераторов из ES6 https://t.co/47t0qUJsky [135][135]

[0]: https://twitter.com/jsunderhood/status/572341652246945792
[1]: https://twitter.com/jsunderhood/status/572349235376607232
[2]: https://twitter.com/jsunderhood/status/572349949192626176
[3]: https://twitter.com/jsunderhood/status/572358452544200704
[4]: https://twitter.com/jsunderhood/status/572359294223577089
[5]: https://twitter.com/jsunderhood/status/572361000437075968
[6]: https://twitter.com/jsunderhood/status/572362641949245440
[7]: https://twitter.com/jsunderhood/status/572362772056547328
[8]: https://twitter.com/jsunderhood/status/572365142790418432
[9]: https://twitter.com/jsunderhood/status/572368738235883521
[10]: https://twitter.com/jsunderhood/status/572370543921516544
[11]: https://twitter.com/jsunderhood/status/572374949559721984
[12]: https://twitter.com/jsunderhood/status/572375955823583233
[13]: https://twitter.com/jsunderhood/status/572376269511372800
[14]: https://twitter.com/jsunderhood/status/572377283153022976
[15]: https://twitter.com/jsunderhood/status/572378224279347200
[16]: https://twitter.com/jsunderhood/status/572378960983691264
[17]: https://twitter.com/jsunderhood/status/572380894109028352
[18]: https://twitter.com/jsunderhood/status/572381857809076224
[19]: https://twitter.com/jsunderhood/status/572383301148774402
[20]: https://twitter.com/jsunderhood/status/572385855437967361
[21]: https://twitter.com/jsunderhood/status/572389650028990464
[22]: https://twitter.com/jsunderhood/status/572390081375408128
[23]: https://twitter.com/jsunderhood/status/572394145664385024
[24]: https://twitter.com/jsunderhood/status/572423064094420992
[25]: https://twitter.com/jsunderhood/status/572425917127118848
[26]: https://twitter.com/jsunderhood/status/572426467424018433
[27]: https://twitter.com/jsunderhood/status/572429730286333955
[28]: https://twitter.com/jsunderhood/status/572431444871667713
[29]: https://twitter.com/jsunderhood/status/572432546509815808
[30]: https://twitter.com/jsunderhood/status/572435933003427841
[31]: https://twitter.com/jsunderhood/status/572436323329572865
[32]: https://twitter.com/jsunderhood/status/572438132110561280
[33]: https://twitter.com/jsunderhood/status/572439953885548544
[34]: https://twitter.com/jsunderhood/status/572440333402947584
[35]: https://twitter.com/jsunderhood/status/572441106685792256
[36]: https://twitter.com/jsunderhood/status/572442627813060608
[37]: https://twitter.com/jsunderhood/status/572444133740179457
[38]: https://twitter.com/jsunderhood/status/572444692014604288
[39]: https://twitter.com/jsunderhood/status/572445649213501440
[40]: https://twitter.com/jsunderhood/status/572449010264510465
[41]: https://twitter.com/jsunderhood/status/572449517917888512
[42]: https://twitter.com/jsunderhood/status/572459243997175808
[43]: https://twitter.com/jsunderhood/status/572460728671719424
[44]: https://twitter.com/jsunderhood/status/572461951223250944
[45]: https://twitter.com/jsunderhood/status/572462310775775232
[46]: https://twitter.com/jsunderhood/status/572463372773539841
[47]: https://twitter.com/jsunderhood/status/572463814391832577
[48]: https://twitter.com/jsunderhood/status/572464423887081473
[49]: https://twitter.com/jsunderhood/status/572464594146467840
[50]: https://twitter.com/jsunderhood/status/572464892277608448
[51]: https://twitter.com/jsunderhood/status/572465901288751104
[52]: https://twitter.com/jsunderhood/status/572467226609098753
[53]: https://twitter.com/jsunderhood/status/572467557862670336
[54]: https://twitter.com/jsunderhood/status/572469133864017920
[55]: https://twitter.com/jsunderhood/status/572469163660337152
[56]: https://twitter.com/jsunderhood/status/572475277122674690
[57]: https://twitter.com/jsunderhood/status/572479171148058624
[58]: https://twitter.com/jsunderhood/status/572482544568033281
[59]: https://twitter.com/jsunderhood/status/572483147507638273
[60]: https://twitter.com/jsunderhood/status/572484954120179712
[61]: https://twitter.com/jsunderhood/status/572485664698195968
[62]: https://twitter.com/jsunderhood/status/572486074792062977
[63]: https://twitter.com/jsunderhood/status/572486471892013057
[64]: https://twitter.com/jsunderhood/status/572487050714353664
[65]: https://twitter.com/jsunderhood/status/572487938094845952
[66]: https://twitter.com/jsunderhood/status/572488456435318784
[67]: https://twitter.com/jsunderhood/status/572488467793494017
[68]: https://twitter.com/jsunderhood/status/572690809042157569
[69]: https://twitter.com/jsunderhood/status/572691107655643136
[70]: https://twitter.com/jsunderhood/status/572691816962756608
[71]: https://twitter.com/jsunderhood/status/572692992907206656
[72]: https://twitter.com/jsunderhood/status/572694121820893184
[73]: https://twitter.com/jsunderhood/status/572765327718662146
[74]: https://twitter.com/jsunderhood/status/572766215946444801
[75]: https://twitter.com/jsunderhood/status/572766530645041152
[76]: https://twitter.com/jsunderhood/status/572766798136807424
[77]: https://twitter.com/jsunderhood/status/572767058456272896
[78]: https://twitter.com/jsunderhood/status/572771320166948864
[79]: https://twitter.com/jsunderhood/status/572771706118414338
[80]: https://twitter.com/jsunderhood/status/572772123053146112
[81]: https://twitter.com/jsunderhood/status/572821524882825217
[82]: https://twitter.com/jsunderhood/status/572836657763880960
[83]: https://twitter.com/jsunderhood/status/572837862481264641
[84]: https://twitter.com/jsunderhood/status/572839012202913792
[85]: https://twitter.com/jsunderhood/status/572839098223878145
[86]: https://twitter.com/jsunderhood/status/572850262764888065
[87]: https://twitter.com/jsunderhood/status/572850782304915456
[88]: https://twitter.com/jsunderhood/status/572852129691410432
[89]: https://twitter.com/jsunderhood/status/573086845296230400
[90]: https://twitter.com/jsunderhood/status/573087540233678851
[91]: https://twitter.com/jsunderhood/status/573087798082711553
[92]: https://twitter.com/jsunderhood/status/573088416524455936
[93]: https://twitter.com/jsunderhood/status/573089276100939778
[94]: https://twitter.com/jsunderhood/status/573090340145504256
[95]: https://twitter.com/jsunderhood/status/573090902811414530
[96]: https://twitter.com/jsunderhood/status/573091003164336128
[97]: https://twitter.com/jsunderhood/status/573092512987938816
[98]: https://twitter.com/jsunderhood/status/573096917627883521
[99]: https://twitter.com/jsunderhood/status/573102159031484418
[100]: https://twitter.com/jsunderhood/status/573102895706472449
[101]: https://twitter.com/jsunderhood/status/573110567558242305
[102]: https://twitter.com/jsunderhood/status/573125444091953153
[103]: https://twitter.com/jsunderhood/status/573130444880797697
[104]: https://twitter.com/jsunderhood/status/573144468100005888
[105]: https://twitter.com/jsunderhood/status/573144615294918657
[106]: https://twitter.com/jsunderhood/status/573145434476060674
[107]: https://twitter.com/jsunderhood/status/573219979903934465
[108]: https://twitter.com/jsunderhood/status/573220607585755136
[109]: https://twitter.com/jsunderhood/status/573220857692086272
[110]: https://twitter.com/jsunderhood/status/573252181484281858
[111]: https://twitter.com/jsunderhood/status/573252427983552512
[112]: https://twitter.com/jsunderhood/status/573418401340788736
[113]: https://twitter.com/jsunderhood/status/573418413470584832
[114]: https://twitter.com/jsunderhood/status/573447166724833280
[115]: https://twitter.com/jsunderhood/status/573448705409343489
[116]: https://twitter.com/jsunderhood/status/573476815995457536
[117]: https://twitter.com/jsunderhood/status/573478905090174976
[118]: https://twitter.com/jsunderhood/status/573479288348934145
[119]: https://twitter.com/jsunderhood/status/573487462493724674
[120]: https://twitter.com/jsunderhood/status/573487768241725440
[121]: https://twitter.com/jsunderhood/status/573496865116704769
[122]: https://twitter.com/jsunderhood/status/573497196240183296
[123]: https://twitter.com/jsunderhood/status/573536071255912448
[124]: https://twitter.com/jsunderhood/status/573575069735251968
[125]: https://twitter.com/jsunderhood/status/573586908007243776
[126]: https://twitter.com/jsunderhood/status/573758545612697600
[127]: https://twitter.com/jsunderhood/status/573758793626030080
[128]: https://twitter.com/jsunderhood/status/573759480959254528
[129]: https://twitter.com/jsunderhood/status/573776032169222144
[130]: https://twitter.com/jsunderhood/status/573782067755945984
[131]: https://twitter.com/jsunderhood/status/573786864403906560
[132]: https://twitter.com/jsunderhood/status/573787023007354881
[133]: https://twitter.com/jsunderhood/status/573840386340188160
[134]: https://twitter.com/jsunderhood/status/573910376682799104
[135]: https://twitter.com/jsunderhood/status/573922680308637696
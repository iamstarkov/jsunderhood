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

@veged Спасибо, обязательно посмотрю! [8][8]

@toivonens У нас так часто пересаживают новичков. Чем дальше, тем реже. [9][9]

Если чувствуете себя некомфортно с новым партнером, важно не промолчать и высказаться. Вам еще работать вместе. [10][10]

Ну или сменить партнера, в крайнем случае. Умение ладить с людьми работая парами всегда пригодится. [11][11]

Только что менялись парами: стали в круг, разбираем задания и, по желанию, меняемся. Тимлид всегда помогает в этом процессе. [12][12]

.@toivonens попросила написать о сообществе разработчиков здесь, во Львове. [13][13]

Львов — один из центров аутсорса в Украине. Поэтому большинство митапов проводятся в стенах таких компаний. [14][14]

Но, на самом деле, есть и более интересные вещи. За почти полтора года, что я здесь живу, успел побывать на паре таких митапов. [15][15]

Например на прошлых выходных, на территории горнолыжного курорта Буковель, прошла конференция WeBukovel http://t.co/aQYYbhNvsQ [16][16]

Спасибо ее организатору @ArtyomTrityak. Я был рядом, но, к сожалению, не было возможности зайти. [17][17]

Еще во Львове есть @LvivJS — конференция фронтенд разработчиков http://t.co/pYSDurNbFa Был там в прошлом году, очень понравилось. [18][18]

Может кто-нибудь из Львовских расскажет больше о местных митапах? [19][19]

RT @denswor: @jsunderhood фраза о важности выбора партнера по парному программированию звучит грозно по соседству с такими твитами http://t… [20][20]

Пытался достучаться до местной JS юзер группы http://t.co/RLFLnmcqtc Судя по блогу ребята давно не собирались. [21][21]

Вообще удивительно, что, при таком количестве разработчиков в городе, не возникают новые митапы. Или я чего-то не знаю. [22][22]

Многие посещают конференции и воркшопы в Европе. Большой аутсорс может позволить себе отправлять разработчиков по всему миру. [23][23]

Нужно только суметь убедить заказчика в пользе для проекта от посещения таких событий. [24][24]

А что бы убедить в необходимости посещения события, практически все митапы дают такой мануал http://t.co/vjbE62eIZ4 [25][25]

Дальше по плану функциональный JS и немного FRP. Сейчас эта тема особенно активно обсуждается вокруг сообщества React. [26][26]

Уже есть полно библиотек для написания кода в функциональном стиле, а на Хабре постоянно размещают посты на эту тему http://t.co/tbjk4G9ed3 [27][27]

Популярные библиотеки: https://t.co/P7Ke19Kutz https://t.co/ro7sYDvtvE http://t.co/7LDAkEfggn http://t.co/hoGn7JJ8av [28][28]

Кто-нибудь практикует функциональный JS? Было бы интересно услышать впечатление от работы с JS пришедших из функциональных языков. [29][29]

RT @somerandstring: @jsunderhood попиарь мою либу https://t.co/A3Me4UDtYj [30][30]

@somerandstring Можешь рассказать о ее преимуществах перед другими библиотеками? [31][31]

В целом функциональный подход интересен хотя бы тем, что это альтернатива привычному ООП. [32][32]

Одной из характеристик функционального ЯП являются функции высшего порядка и функции первого класса. [33][33]

Проще говоря — функции оперирующие другими функциями. [34][34]

И любые операции представляются как функции. Например: `2 + 2` в JS и `(+ 2 2)` в Clojure. [35][35]

По сути в JS математические операции — это функции с неявной записью. Поэтому их нужно адаптировать, оборачивать в явные функции. [36][36]

`let add = x =&gt; x + x;` [37][37]

Кстати, синтаксис fat arrow function из ES6 отлично подходит для описания таких базовых функций, короткая запись, ничего лишнего. [38][38]

@somerandstring Это больше о React, чем о преимуществах перед другими библиотеками. [39][39]

Имея набор таких базовых функций, можно воспользоваться одним из преимуществ функционального программирования — композицией. [40][40]

`capitalize(trim(string))` — композиция двух операций. [41][41]

Каждая из операций возвращает результат своего выполнения, таким образом можно создавать более сложные операции. [42][42]

Но запись через вкладывание неудобна, поэтому нам понадобиться функция высшего порядка для миксования других функций в новую операцию. [43][43]

Такую функцию часто называют `compose`. Вот пример ее реализации http://t.co/eZxAyLbFLK [44][44]

Теперь новые операции можно создавать так: `let convert = compose(trim, capitalize);`. [45][45]

@matmuchrapna На самом деле дебаг кода в императивном стиле то же самое, разве что меньше вхождений. Зато читается быстро и понятно. [46][46]

И тут я осознал еще одно преимущество функционального подхода: ваш код говорит ЧТО делать, а не КАК, в случае с императивным подходом. [47][47]

Для этого в JS нужно отказаться от циклов в пользу `.map()`, `.filter()` и т.д. [48][48]

В одном из своих докладов @jhusain из Netflix рассказывает о функциональщине в JS https://t.co/XeEg9p6kdM [49][49]

Еще у них есть классный интерактивный курс по основам http://t.co/IPlJ9N9GI4 [50][50]

Если используете Underscore.js, то ура — в библиотеке есть набор функциональных инструментов, которые вы тоже наверняка уже использовали. [51][51]

Хотя @drboolean считает, что Underscore делает это неправильно https://t.co/Znwb7uNE1i [52][52]

У этого парня есть шестичасовой курс по ФП в JS «Hardcore Functional Programming in JavaScript» https://t.co/iDY6xi8TN0 [53][53]

RT @deepwalker: @jsunderhood бро, заканчивай эту тоску, пжалста. Или давай сразу про эндофункторы и стрелки и точки неподвижные в разрезе т… [54][54]

А если хочется теории, то на том же Хабре есть что почитать. Например Теория катеогрий http://t.co/B5c5mMaahU [55][55]

Больше всего понравилась серия переводов «Теория категорий для программистов» http://t.co/WrvfmpkNEx Очень доходчиво. [56][56]

Хотя на практике польза от этого сомнительна. Возможно стоит начать изучать Haskell? [57][57]

Если нет времени читать статьи, вот отличные слайды http://t.co/0pasncCV1X [58][58]

Пожалуйста поправляйте, если с чем-то не согласны. [59][59]

RT @KSDaemon: @jsunderhood на недавнем 19-м @MoscowJS выступал Трдат с докладом про FRP. Скоро будет видео! ;) [60][60]

@KSDaemon @moscowjs Ждем! [61][61]

RT @deepwalker: @jsunderhood ну вот например http://t.co/YfLckXBvBU [62][62]

Мне кажется, что для лучшего понимания ФП нужно попробовать функциональный язык. Например Clojure и в частности ClojureScript. [63][63]

@ixth Здравая мысль, согласен. Многие ЯП, и ОО и ФП одновременно, тот же JS. [64][64]

@ixth Мне кажется здесь плохо работает даже вариант с выбором подхода в зависимости от задачи, это просто другой способ достижения цели. [65][65]

А выбрал я ClojureScript потому, что для него есть Om — cljs интерфейс для React https://t.co/6sCWvkGrW3 [66][66]

В cljs данные всегда неизменяемые (immutable) и вот почему это хорошо... [67][67]

С точки зрения CPU намного быстрее создать, обработать и выбросить, чем создать, обработать, положить в память, запросить, обработать и т.д. [68][68]

К сожалению быстро это работает для многопотоковой архитектуры. Но не отменяет того факта, что с неизменяемыми данными работать проще. [69][69]

Это был краткий пересказ слов @jhusain [70][70]

RT @voischev: @veged @jsunderhood http://t.co/VKASbi6cOl [71][71]

@voischev Хороший пост, читал. @veged [72][72]

А в сочетании с более медленными абстракциями над циклами типа `.map()` функциональный код в JS будет еще медленнее. [73][73]

Так что, в ближайшем будущем, тяжелые приложения на функциональном JS лучше обходить стороной. [74][74]

Например игры, где каждую секунду по 60 раз выполняются сотни функций. [75][75]

На интерфейсы это не распространяется, железо уже достаточно производительно. [76][76]

@rdvornov Эффективен, но преимущество есть всегда, хоть в определенных случаях и небольшое. http://t.co/3HwyP5INDh [77][77]

@rdvornov Насколько я понимаю, блокировки еще дороже. Речь идет именно о многопотоковости http://t.co/CoBLLxAjzG [78][78]

@rdvornov С этим сложно не согласиться. Мне думается, что неизменяемые данные дают возможность делать предположения для оптимизаций. [79][79]

@ilya_belsky я вот думаю в ближайшее время попробовать [80][80]

@ilya_belsky В синтаксисе ES6 выглядит еще интереснее http://t.co/doMOn1Ius4 :) @matmuchrapna [81][81]

@_elergy_ Это о поддержке кода? [82][82]

Еще немного о ФП [83][83]

Реализация неизменяемых структур данных в JS: Immutable.js http://t.co/V91KzFxqHH и mori http://t.co/NOeLoDUWKS [84][84]

Паттерны ФП https://t.co/yDZWVxEwXO [85][85]

Скринкаст по Haskell https://t.co/YiU0cYxDFr что бы понять, как ФП работает в функциональных языках. [86][86]

И очень крутая лекция про монады https://t.co/6e01jMQ5bE Крокфорд так не объясняет :) [87][87]

@_elergy_ я думаю, если вся команда придерживается какого-то одного подхода, то проблем не будет. С новичками здесь будет сложнее, согласен. [88][88]

@matmuchrapna @ilya_belsky Y combinator по-моему следует использовать как базовую операцию, то есть принимать его как единое целое. [89][89]

@rdvornov @rdvornov Возвращаясь к этой теме: пообщался с более осведомленными людьми, чем я, в этом вопросе... [90][90]

@rdvornov и могу сказать, что до фрагментации дело не доходит потому, что память не выделяется. Все просиходит в регистрах CPU. [91][91]

@rdvornov То есть как я и говорил: создал, обработал, выбросил. Это в случае с локальными переменными. [92][92]

@rdvornov Поэтому и говорят, что в ФП корнем зла является общее изменяемое состояние. [93][93]

Теперь немного о функциональном реактивном программировании... [94][94]

ФРП — это ФП + потоки. [95][95]

Поток — это данные поступающие со временем. [96][96]

На практике это может выглядеть как преобразование событий DOM в поток таких событий и их обработка инструментами ФП. [97][97]

Например как это делает RxJS https://t.co/o6GmtO4MaK [98][98]

Используя базовый набор операций над потоками можно облегчить себе жизнь в создании интерфейсов. [99][99]

Об этом хорошо рассказывает все тот же техлид из Netflix в докладе «Async JavaScript with Reactive Extensions» https://t.co/CctMO3GOB2 [100][100]

Вот еще неплохо написано о реактивном программировании в JS https://t.co/PaFNOockba [101][101]

@rdvornov Насколько я понимаю, то трюк в том, что оперируемые данные не попадают в память, точнее только атомарные значения. [102][102]

@rdvornov И их неизменяемость освобождает систему от предположений о зависимостях. [103][103]

@rdvornov Думаю лучше спросить об этом инженеров, которые утверждают, что иммутабельность всегда лучше. [104][104]

Короткий и информативный доклад @swannodette о неизменяемых структурах данных https://t.co/Qdx5terHDa /cc @rdvornov [105][105]

На React.js Conf @jlongster рассказал о другом подходе в работе с асинхронным JS пришедшем из Clojure и Go — это CSP https://t.co/nKtzLF2uCF [106][106]

Communicating sequential processes представляет концепцию процессов и каналов, по которым общаются эти процессы. [107][107]

Один процесс забрасывает данные в канал, другой достает их. [108][108]

js-csp https://t.co/SUXRo9Duqb [109][109]

Рядом с CSP всегда упоминаются трансдьюсеры. На Хабре было несколько постов о них. А в этом автор создает их с нуля http://t.co/jtbaABinsz [110][110]

Если просто, то трансдьюсер — это способ трансформирования данных через композицию. [111][111]

А это пятая серия «Better Call Saul» https://t.co/vMBLXXn5ZU [112][112]

На http://t.co/I4PzXF2Fzy можно почитать об интересных штуках которые не стали частью ES6 и о возможных изменениях в JS в далеком будущем. [113][113]

Например чтсла SIMD (single instruction, multiple data) https://t.co/LVoU8xzPx2 [114][114]

На самом деле SIMD перенесли в ES7 и эта спека уже частично реализованна в FF Nightly. [115][115]

SIMD инструкции обеспечивают параллелизм на уровне данных. [116][116]

Такая оптимизация даст прирост в производительности например в графике, где данные представлены в виде векторов. [117][117]

Например: в JS нету векторов, обычно представляют в виде массива или объекта, тогда операции над такими векторами выполняются почленно... [118][118]

Поэтому [1,2,3] + [1,2,3] выполнится в три процессорных такта, а с SIMD всего в один такт. [119][119]

Спеку можно почитать здесь https://t.co/xAz7zZ5vi6 [120][120]

Наглядный пример оптимизации рендеринга фракталов в asm.js http://t.co/CuKXLQEdPL только FF Nightly [121][121]

Кстати, о графике в вебе. Посмотрите на эти примеры физически правильного рендеринга в WebGL http://t.co/9gQPcioQmE Очень круто! [122][122]

Другая интересная спека — Typed Objects http://t.co/GKuAEblB2J тоже не попала в ES6, но реализована в FF Nightly [123][123]

Типизированные структуры данных `new StructType({ x: uint32, y: uint32 });`. [124][124]

В ночной сборке FF все типы находятся в глобальном объекте TypedObject http://t.co/LyudFyhtfM [125][125]

Или вот предложенный в ES7 оператор `.=` batch assignment для объектов http://t.co/UAsrNX3J8B [126][126]

И guards, как в Haskell http://t.co/iJBeBwD680 [127][127]

Вот еще несколько интересных спек: короткий синтаксис для function expression http://t.co/BqC8plU9f9 [128][128]

Иммутабельные структуры типа объект http://t.co/jQHaYwxbSw [129][129]

И иммутабельные последовательности (массивы, листы) http://t.co/lwfRY2n3JV [130][130]

@rdvornov Да, но fat arrow не может быть использован для function declaration, в отличии от  #. [131][131]

@shuvalov_anton ну эти спеки в разделе strawman, а там все, что не попало в ES6 и уже вряд ли куда-то попадет. [132][132]

@shuvalov_anton Хотя есть async/await http://t.co/JRK32HwHVg [133][133]

Параллельно с Atom пробую Light Table http://t.co/mO6K7qUrF5 Особой популярностью не отличается, но есть крутые штуки. [134][134]

Например результат выполнения кода, который пишешь, возникает в той же строке. Наблюдение за значением переменных, тоже круто. [135][135]

Похоже на то, что делает http://t.co/OcRKEGTdRp с тестами. [136][136]

@rdvornov Мне все больше по душе минимализм, так что я был бы рад. Но для этого всегда есть транспайлеры. [137][137]

@kotchuprik LT? Только начал присматриваться, сложно сказать. [138][138]

Перед тем, как заняться фронтендом, делал веб-дизайн. Сейчас вкус к красивым интерфейсам практически пропал. Все свелось к минимализму. [139][139]

Вы поддерживаете свои дизайнерские способности? Если да, то каким образом? [140][140]

@kinday Красиво сказано, соглашусь. Но когда смотришь на все эти мигающие штуки и необычное поведение, то кажется, что сам ты где-то позади. [141][141]

RT @kinday: @jsunderhood, минимализм не отменяет красоту интерфейса, а наоборот обнажает истинную красоту, скрытую в его логике. [142][142]

RT @vvvlado: @jsunderhood перечитываю «Кради как художник» [143][143]

Джависты недоумевают почему `array === $(array) // false` [144][144]

Это можно объяснить как неявное приведение типов. [145][145]

Еще джавистам сложно понять ООП в JS, что уже говорить о React. Поэтому берут Angular. [146][146]

Fat arrow не единственный новый тип функции в ES6, еще есть tag function: fn `Hello ${name}!`. Вызов без скобок, принимает template string. [147][147]

Используется для чтения исходных данных из строки: значения и части строки http://t.co/mUlFJ9hFop [148][148]

С ES6 Proxy можно делать method missing, как в Ruby http://t.co/2LcUqI4mI6 [149][149]

Но такую штуку можно сделать и без Proxy, через нестандартный метод `__noSuchMethod__`, который вызывается если вызываемого метода нету. [150][150]

А вы стримили в /r/WatchPeopleCode/ ? Или может наблюдали за процессом разработки http://t.co/rsP5bSruFo [151][151]

Можно залипнуть на вечер и узнать что-нибудь новое для себя. Подходы, техники. [152][152]

https://t.co/peumYmg1rK [153][153]

@akozlov75 alpha [154][154]

React + CoffeeScript http://t.co/8Th6A4QmpY http://t.co/VZrQrTIoN9 [155][155]

Даже простым +1 в комментариях к обсуждению желаемой фичи вы можете повлиять на ее реализацию. [156][156]

@krvital @shuvalov_anton Большинство стримят ежедневный рабочий процесс, даже не обращая внимания на включенную камеру :) [157][157]

Добавил иконку React в плагин file-icons, для подсветки .jsx файлов, в Atom https://t.co/Ik2RFa8vcC http://t.co/ZTPnKibkml [158][158]

Заодно получил опыт создания иконочного шрифта в Inkscape. [159][159]

Суперский инструмент для экспорта набора иконок в шрифт https://t.co/HZjUuuMsDk [160][160]

RT @prbigbrother: @jsunderhood http://t.co/nbBSYMYaO4 с более простым, но схожим функционалом [161][161]

А существует ли логотип закрепленный за картами кода? [162][162]

Видео со вчерашней ng-conf https://t.co/pAAvtfeVzL [163][163]

И итоги EmberConf 2015 https://t.co/P1dEWcjlhJ [164][164]

https://t.co/RNte7I6djx [165][165]

Добротный туториал об npm модулях на ES6 http://t.co/heBIbXlyw2 [166][166]

Библиотека функций высшего порядка для итераторов из ES6 https://t.co/47t0qUJsky [167][167]

[0]: https://twitter.com/jsunderhood/status/572341652246945792
[1]: https://twitter.com/jsunderhood/status/572349235376607232
[2]: https://twitter.com/jsunderhood/status/572349949192626176
[3]: https://twitter.com/jsunderhood/status/572358452544200704
[4]: https://twitter.com/jsunderhood/status/572359294223577089
[5]: https://twitter.com/jsunderhood/status/572361000437075968
[6]: https://twitter.com/jsunderhood/status/572362641949245440
[7]: https://twitter.com/jsunderhood/status/572362772056547328
[8]: https://twitter.com/jsunderhood/status/572362955616071680
[9]: https://twitter.com/jsunderhood/status/572364099478278145
[10]: https://twitter.com/jsunderhood/status/572365142790418432
[11]: https://twitter.com/jsunderhood/status/572368738235883521
[12]: https://twitter.com/jsunderhood/status/572370543921516544
[13]: https://twitter.com/jsunderhood/status/572374949559721984
[14]: https://twitter.com/jsunderhood/status/572375955823583233
[15]: https://twitter.com/jsunderhood/status/572376269511372800
[16]: https://twitter.com/jsunderhood/status/572377283153022976
[17]: https://twitter.com/jsunderhood/status/572378224279347200
[18]: https://twitter.com/jsunderhood/status/572378960983691264
[19]: https://twitter.com/jsunderhood/status/572380894109028352
[20]: https://twitter.com/jsunderhood/status/572381857809076224
[21]: https://twitter.com/jsunderhood/status/572383301148774402
[22]: https://twitter.com/jsunderhood/status/572385855437967361
[23]: https://twitter.com/jsunderhood/status/572389650028990464
[24]: https://twitter.com/jsunderhood/status/572390081375408128
[25]: https://twitter.com/jsunderhood/status/572394145664385024
[26]: https://twitter.com/jsunderhood/status/572423064094420992
[27]: https://twitter.com/jsunderhood/status/572425917127118848
[28]: https://twitter.com/jsunderhood/status/572426467424018433
[29]: https://twitter.com/jsunderhood/status/572429730286333955
[30]: https://twitter.com/jsunderhood/status/572431444871667713
[31]: https://twitter.com/jsunderhood/status/572431810115866624
[32]: https://twitter.com/jsunderhood/status/572432546509815808
[33]: https://twitter.com/jsunderhood/status/572435933003427841
[34]: https://twitter.com/jsunderhood/status/572436323329572865
[35]: https://twitter.com/jsunderhood/status/572438132110561280
[36]: https://twitter.com/jsunderhood/status/572439953885548544
[37]: https://twitter.com/jsunderhood/status/572440333402947584
[38]: https://twitter.com/jsunderhood/status/572441106685792256
[39]: https://twitter.com/jsunderhood/status/572441380913598464
[40]: https://twitter.com/jsunderhood/status/572442627813060608
[41]: https://twitter.com/jsunderhood/status/572444133740179457
[42]: https://twitter.com/jsunderhood/status/572444692014604288
[43]: https://twitter.com/jsunderhood/status/572445649213501440
[44]: https://twitter.com/jsunderhood/status/572449010264510465
[45]: https://twitter.com/jsunderhood/status/572449517917888512
[46]: https://twitter.com/jsunderhood/status/572450836237950976
[47]: https://twitter.com/jsunderhood/status/572459243997175808
[48]: https://twitter.com/jsunderhood/status/572460728671719424
[49]: https://twitter.com/jsunderhood/status/572461951223250944
[50]: https://twitter.com/jsunderhood/status/572462310775775232
[51]: https://twitter.com/jsunderhood/status/572463372773539841
[52]: https://twitter.com/jsunderhood/status/572463814391832577
[53]: https://twitter.com/jsunderhood/status/572464423887081473
[54]: https://twitter.com/jsunderhood/status/572464594146467840
[55]: https://twitter.com/jsunderhood/status/572464892277608448
[56]: https://twitter.com/jsunderhood/status/572465901288751104
[57]: https://twitter.com/jsunderhood/status/572467226609098753
[58]: https://twitter.com/jsunderhood/status/572467557862670336
[59]: https://twitter.com/jsunderhood/status/572469133864017920
[60]: https://twitter.com/jsunderhood/status/572469163660337152
[61]: https://twitter.com/jsunderhood/status/572469419395457024
[62]: https://twitter.com/jsunderhood/status/572475277122674690
[63]: https://twitter.com/jsunderhood/status/572479171148058624
[64]: https://twitter.com/jsunderhood/status/572481016805384192
[65]: https://twitter.com/jsunderhood/status/572481336839159808
[66]: https://twitter.com/jsunderhood/status/572482544568033281
[67]: https://twitter.com/jsunderhood/status/572483147507638273
[68]: https://twitter.com/jsunderhood/status/572484954120179712
[69]: https://twitter.com/jsunderhood/status/572485664698195968
[70]: https://twitter.com/jsunderhood/status/572486074792062977
[71]: https://twitter.com/jsunderhood/status/572486471892013057
[72]: https://twitter.com/jsunderhood/status/572486554867933185
[73]: https://twitter.com/jsunderhood/status/572487050714353664
[74]: https://twitter.com/jsunderhood/status/572487938094845952
[75]: https://twitter.com/jsunderhood/status/572488456435318784
[76]: https://twitter.com/jsunderhood/status/572488467793494017
[77]: https://twitter.com/jsunderhood/status/572489754182361088
[78]: https://twitter.com/jsunderhood/status/572497519466446849
[79]: https://twitter.com/jsunderhood/status/572516978268774400
[80]: https://twitter.com/jsunderhood/status/572517471036579840
[81]: https://twitter.com/jsunderhood/status/572527614646202369
[82]: https://twitter.com/jsunderhood/status/572527911082840064
[83]: https://twitter.com/jsunderhood/status/572690809042157569
[84]: https://twitter.com/jsunderhood/status/572691107655643136
[85]: https://twitter.com/jsunderhood/status/572691816962756608
[86]: https://twitter.com/jsunderhood/status/572692992907206656
[87]: https://twitter.com/jsunderhood/status/572694121820893184
[88]: https://twitter.com/jsunderhood/status/572696950790864896
[89]: https://twitter.com/jsunderhood/status/572758084570886144
[90]: https://twitter.com/jsunderhood/status/572762086587039744
[91]: https://twitter.com/jsunderhood/status/572762580646678528
[92]: https://twitter.com/jsunderhood/status/572762789195862016
[93]: https://twitter.com/jsunderhood/status/572763727440707584
[94]: https://twitter.com/jsunderhood/status/572765327718662146
[95]: https://twitter.com/jsunderhood/status/572766215946444801
[96]: https://twitter.com/jsunderhood/status/572766530645041152
[97]: https://twitter.com/jsunderhood/status/572766798136807424
[98]: https://twitter.com/jsunderhood/status/572767058456272896
[99]: https://twitter.com/jsunderhood/status/572771320166948864
[100]: https://twitter.com/jsunderhood/status/572771706118414338
[101]: https://twitter.com/jsunderhood/status/572772123053146112
[102]: https://twitter.com/jsunderhood/status/572783355294433280
[103]: https://twitter.com/jsunderhood/status/572783777904123905
[104]: https://twitter.com/jsunderhood/status/572784239017500673
[105]: https://twitter.com/jsunderhood/status/572821524882825217
[106]: https://twitter.com/jsunderhood/status/572836657763880960
[107]: https://twitter.com/jsunderhood/status/572837862481264641
[108]: https://twitter.com/jsunderhood/status/572839012202913792
[109]: https://twitter.com/jsunderhood/status/572839098223878145
[110]: https://twitter.com/jsunderhood/status/572850262764888065
[111]: https://twitter.com/jsunderhood/status/572850782304915456
[112]: https://twitter.com/jsunderhood/status/572852129691410432
[113]: https://twitter.com/jsunderhood/status/573086845296230400
[114]: https://twitter.com/jsunderhood/status/573087540233678851
[115]: https://twitter.com/jsunderhood/status/573087798082711553
[116]: https://twitter.com/jsunderhood/status/573088416524455936
[117]: https://twitter.com/jsunderhood/status/573089276100939778
[118]: https://twitter.com/jsunderhood/status/573090340145504256
[119]: https://twitter.com/jsunderhood/status/573090902811414530
[120]: https://twitter.com/jsunderhood/status/573091003164336128
[121]: https://twitter.com/jsunderhood/status/573092512987938816
[122]: https://twitter.com/jsunderhood/status/573096917627883521
[123]: https://twitter.com/jsunderhood/status/573102159031484418
[124]: https://twitter.com/jsunderhood/status/573102895706472449
[125]: https://twitter.com/jsunderhood/status/573110567558242305
[126]: https://twitter.com/jsunderhood/status/573125444091953153
[127]: https://twitter.com/jsunderhood/status/573130444880797697
[128]: https://twitter.com/jsunderhood/status/573144468100005888
[129]: https://twitter.com/jsunderhood/status/573144615294918657
[130]: https://twitter.com/jsunderhood/status/573145434476060674
[131]: https://twitter.com/jsunderhood/status/573217676153118720
[132]: https://twitter.com/jsunderhood/status/573219246039171072
[133]: https://twitter.com/jsunderhood/status/573219371255914496
[134]: https://twitter.com/jsunderhood/status/573219979903934465
[135]: https://twitter.com/jsunderhood/status/573220607585755136
[136]: https://twitter.com/jsunderhood/status/573220857692086272
[137]: https://twitter.com/jsunderhood/status/573221897837494272
[138]: https://twitter.com/jsunderhood/status/573231814321442816
[139]: https://twitter.com/jsunderhood/status/573252181484281858
[140]: https://twitter.com/jsunderhood/status/573252427983552512
[141]: https://twitter.com/jsunderhood/status/573255786140471298
[142]: https://twitter.com/jsunderhood/status/573418401340788736
[143]: https://twitter.com/jsunderhood/status/573418413470584832
[144]: https://twitter.com/jsunderhood/status/573447166724833280
[145]: https://twitter.com/jsunderhood/status/573448705409343489
[146]: https://twitter.com/jsunderhood/status/573476815995457536
[147]: https://twitter.com/jsunderhood/status/573478905090174976
[148]: https://twitter.com/jsunderhood/status/573479288348934145
[149]: https://twitter.com/jsunderhood/status/573487462493724674
[150]: https://twitter.com/jsunderhood/status/573487768241725440
[151]: https://twitter.com/jsunderhood/status/573496865116704769
[152]: https://twitter.com/jsunderhood/status/573497196240183296
[153]: https://twitter.com/jsunderhood/status/573536071255912448
[154]: https://twitter.com/jsunderhood/status/573546171395784704
[155]: https://twitter.com/jsunderhood/status/573575069735251968
[156]: https://twitter.com/jsunderhood/status/573586908007243776
[157]: https://twitter.com/jsunderhood/status/573750271836356608
[158]: https://twitter.com/jsunderhood/status/573758545612697600
[159]: https://twitter.com/jsunderhood/status/573758793626030080
[160]: https://twitter.com/jsunderhood/status/573759480959254528
[161]: https://twitter.com/jsunderhood/status/573776032169222144
[162]: https://twitter.com/jsunderhood/status/573782067755945984
[163]: https://twitter.com/jsunderhood/status/573786864403906560
[164]: https://twitter.com/jsunderhood/status/573787023007354881
[165]: https://twitter.com/jsunderhood/status/573840386340188160
[166]: https://twitter.com/jsunderhood/status/573910376682799104
[167]: https://twitter.com/jsunderhood/status/573922680308637696
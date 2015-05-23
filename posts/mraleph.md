# @mraleph

_06 Apr 2015_

всем привет! меня зовут Вячеслав и эту неделю я вещаю из под капота JS - здесь темно и повсюду C++... отвечаю на вопросы про V8 и перформанс [0][0]

утро понедельника начинается с чтения LLVM Weekly - на прошлой неделе ничего интересного, впрочем, не случилось http://t.co/pwYE9sH0wx [1][1]

RT @GrantedN: @jsunderhood появились ли какие-то отпимизации в V8, связанные с defineProperty? Почему U*Array (UInt32) не содержит всех методов из Array? [2][2]

. @GrantedN typedarrays исторически не были array, поэтому у них другой прототип; в ES6 все методы типа map будут  https://t.co/aHzphLndYT [3][3]

. @GrantedN про defineProperty: зависит от того, что именно вас интересует: сам defineProperty или проперти им созданные? [4][4]

.@GrantedN если сам defineProperty то он как был медленный и печальный, так примерно пока и остается [5][5]

.@GrantedN с другой стороны если определять им non-writable свойство на прототипе какого-нибудь объекта то это используется в оптимизациях [6][6]

а вот демка скрытой проблемы с производительностью при использовании accessors http://t.co/csgOqPM7gA / https://t.co/Eh40zPeg8f [7][7]

... смотреть надо что заинлайнилось во вкладке Source http://t.co/lZpppn1cY2 [8][8]

на работе сегодня выходной, тут в твиттере - тоже. чувствую себя героем фантастического рассказа "Позвоните!" http://t.co/FS75JrG7ne [9][9]

обнаружил у себя в рюкзаке распечатку статьи "Common Compiler Optimisations are Invalid in the C11 Memory Model" https://t.co/ZbinSfue8v [10][10]

казалось бы при чем тут JS? а вот при чем: https://t.co/IUSSwZcNwO [11][11]

RT @milk_is_my_life: @jsunderhood Вячеслав, немного не по теме, но всё же... Что вы думаете о реализациях виртуального дома в js? Есть ли за этим будущее? [12][12]

.@milk_is_my_life на мой взгляд за ними есть настоящее, 

кто знает, что будет в будущем? может веб умрет, может DOM станет легковесным [13][13]

.@milk_is_my_life а тема у нас JS и все-все-все, так что любой вопрос по теме, даже если я на него ответа не знаю :) [14][14]

RT @roman01la: @jsunderhood тогда как JS стать лучше/быстрее? В чем слабые места современных движков? [15][15]

.@roman01la я бы сказал, что самое слабое место современных движков это непредсказуемость производительности [16][16]

.@roman01la классический пример был с Object.freeze: долгое время в V8 замороженные объекты неожиданно были значительно медленнее обычных [17][17]

.@roman01la Object.freeze починили, но он хорошо подчеркивает суть - что в бенчмарках не встречается, то имеет случайную производительность [18][18]

.@roman01la поэтому я считаю, что JS движки нынче должны развиваться в ширину, а не продолжать копать яму, стоя на одном месте [19][19]

.@roman01la вот допустим forEach очень медленный по сравнению с обычным for-loop. почему медленный? "потому что гладиолус". [20][20]

RT @roman01la: @jsunderhood можно немного подробнее про ширину?) [21][21]

.@roman01la или пример с accessors который я вчера твитнул - можно сделать Clash случай таким же быстрым как NoClash. [22][22]

.@roman01la или Object.defineProperty / Object.prototype.hasOwnProperty они не очень-то быстрые, а можно сделать быстрыми [23][23]

в JS сообществе очень популярно изобретать велосипеды, вот и для меня это самый удобный способ добраться до работы http://t.co/UqqXgBfnKc [24][24]

RT @roman01la: @jsunderhood реализация forEach внутри отличается от for-loop? Почему бы JIT не инлайнить forEach в for-loop. [25][25]

.@roman01la forEach реализован через for-loop https://t.co/cVodtJAkdb [26][26]

.@roman01la проблема как раз в том, что никто пока не озаботился тем, чтобы forEach инлайнился и все лишнее оптимизировалось в никуда [27][27]

.@roman01la я для этого как раз написал тулзу -&gt; http://t.co/pHZEWPybDb, там флаги и инструкции на первой странице [28][28]

RT @roman01la: @jsunderhood Как можно посмотреть оптимизированный код в рантайме? [29][29]

RT @shuvalov_anton: @jsunderhood есть будущее у компиляции LLVM-кода под браузеры, asm.js — как нового ассемблера и js на уровне железа? https://t.co/W7KlmcAEM8 [30][30]

.@shuvalov_anton asm.js - весьма неполноценный. и мне кажется весьма странным решение "прятать" байткод внутри JSкода [31][31]

.@shuvalov_anton все мое отношение к нему было выражено 2 года назад http://t.co/Qq1paUkVvf и почти не изменилось с тех пор. [32][32]

.@shuvalov_anton однако веб достаточно странная штука. тут часто побеждает популизм и политика, а не нормальные технические решения. [33][33]

RT @dosyara: @jsunderhood интересно, какие термины используют англоязычные разработчики для велосипеда, костыля и всякой упячки? [34][34]

.@dosyara костыль можно так и переводить "crutch". "изобретать велосипед" ~ "reinvent the wheel", все универсальное :) [35][35]

.@dosyara еще близкий аналог русского "костыля", это "kludge" (a workaround or quick-and-dirty solution that is clumsy, inelegant) [36][36]

RT @roman01la: @jsunderhood В FF Nightly реализованы типизированные объекты http://t.co/l0Gtje43ik Нужна ли в JS статическая типизация? [37][37]

.@roman01la типизированные объекты не привносят статической типизации в язык, поэтому вопрос не совсем понятен [38][38]

.@roman01la еще не совсем понятен смысл слова "нужна", кому нужна? у мощных статических систем типов есть свои преимущества. [39][39]

.@roman01la но если я сейчас начну о них рассуждать, то я неизбежно скачусь в рассуждения о вкусе и личных предпочтениях. [40][40]

RT @roman01la: @jsunderhood Добавление typed objects и других типизированных структур как-то повлияет на ежедневную разработку?.. [41][41]

.@roman01la повлияет, если ваша ежедневная разработка требует оптимизаций на уровне object layout &amp; memory locality :) [42][42]

.@roman01la в остальных случаях JS VMных собственных оптимизаций, которые случаются сами по себе, должно хватать. [43][43]

RT @roman01la: @jsunderhood То есть веб-разработчику не стоит заморачиваться о таких вещах, а лучше исправлять свой обычный JS код? :) [44][44]

.@roman01la прежде всего нужно писать нормальный код (не пренебрегая простейшими знаниями об алгоритмах) и continuous performance tracking [45][45]

.@roman01la ... а не так что фигачить код скажем год, а потом спохватиться и начать бегать вокруг него пытаясь оптимизировать [46][46]

RT @kanterov: @jsunderhood есть ли в Dart AOT компиляция при компиляции в JS? Почему? [47][47]

. @kanterov Dart в JS компиляция по определению AOT, потому что она проиходит один раз во время сборки проекта. [48][48]

. @kanterov если эту компиляцию делать не AOT, а "JIT" на стороне клиента то получается нужно весь Dart код посылать с зависимостями [49][49]

. @kanterov выглядит не очень эффективно. [50][50]

.@kanterov хотя этот подход было бы интересно попробовать и написать такой JIT, у думаю пиковую производительньсть было бы проще достичь [51][51]

.@kanterov но и прогревать его пришлось бы паяльной лампой. хороший пример - это pypy.js http://t.co/XxZ2zfmnh5 [52][52]

.@kanterov [впрочем у pypy.js большой overhead как раз из-за того, что они используют pypy скомпилированный emscripten] [53][53]

. @kanterov [руками бы писать было дольше и сложнее, но и overhead был бы меньше] [54][54]

RT @raxpost: @jsunderhood Rust или Go? Что тебе больше нравится и что станет мейнстримом (и станет ли)? [55][55]

.@raxpost о обоих языков есть прикольные фичи и недостатки, например, у Go бедная система типов - а у Rust сильно уж замороченная. [56][56]

.@raxpost я вообще к языкам программирования (за исключением русского языка) отношусь без особого фанатизма. молоток он нужен чтобы стучать [57][57]

.@raxpost поэтому если стоит выбор в вакууме между Rust и Go, то я предпочту съесть еще мягких французских булок и выпить чаю [58][58]

.@raxpost в будущем число языков программирования только продолжит расти поэтому понятие mainstream станет размываться [59][59]

.@raxpost я думаю вместо mainstream нужно рассуждать о "самоподдерживаемости" [60][60]

.@raxpost достаточен ли размер языкового community для обеспечения всех потребностей оного в велосипедах и прочих фреймворках [61][61]

.@raxpost есть ли кому подхватить флаг, если разработчики компилятора попадут под автобус дружно? [62][62]

.@raxpost мне кажется и Go, и Rust хоть и имеют большие растущие community, все еще уязвимы перед оным автобусом-языконенавистником. [63][63]

RT @GrantedN: @jsunderhood что по поводу оптимизаций в V8 для apply, bind или call. Раньше видел что call быстрее, потом apply, а потом bind, а сейчас? [64][64]

.@GrantedN зависит от ситуации. но bind действительно самый медленный из всех, потому что его никто не разгоняет :( [65][65]

.@GrantedN для foo.call() были не так давно реализованы оптимизации в Crankshaft, поэтому в теории он сейчас должен быть самым быстрым [66][66]

.@GrantedN паттерн foo.apply(x, arguments) внутри оптимизируемых функций тоже быстрый. [67][67]

.@GrantedN в неоптимизированном случае call быстрее за счет того, что нет нужды выделять временный массив аргументов [68][68]

еще случайный факт об о мне: в моем "музыка для программирования" плейлисте https://t.co/HC4sJzK4Hx соседствует с https://t.co/o2j7IAUDAM [69][69]

RT @roman01la: @jsunderhood а что с иммутабельными данными в движках? Они используют преимущества неизменяемости для оптимизаций? [70][70]

.@roman01la V8 не особо использует, могла бы и лучше. я уже приводил, пример с non-writable свойством на прототипе  https://t.co/zjVhLXC6mu [71][71]

. @roman01la с другой стороны если написать вот такой цикл https://t.co/VW3wBz4rdm, то там o.x не будет вынесено за цикл, хотя могло бы. [72][72]

. @roman01la одновременно в этом примере hidden class check будет убран - т.е. вроде как V8 понимает что объект immutable но вроде как и нет [73][73]

.@roman01la числа, строки, булевы значения, замороженные объекты - больше ничего вроде нет иммутабельного [74][74]

.@roman01la если объект "ускользает" из области компиляции, то компилятор обычно сдается и предполагает любые побочные эффекты [75][75]

.@roman01la с другой стороны компиляторы пытаются отслеживать все это делать, escape analysis и т.д. т.е. это возможно в опр. пределах [76][76]

RT @ALF_er: @jsunderhood @roman01la как объект может оттуда ускользнуть? Ведь весь код всёравно проходит через компилятор? [77][77]

. @ALF_er код обычно проходит через компилятор не весь сразу (это было бы слишком долго) а "кусками" @roman01la [78][78]

. @ALF_er плюс в современных JS VM несколько компиляторов - все начинается с тупого, который почти ничего не оптимизирует @roman01la [79][79]

. @ALF_er а оптимизирующий компилятор приходит позже и оптимизирует только то "горячие" фрагменты  @roman01la [80][80]

. @ALF_er в современных JS VM эти фрагменты = функции, т.е. оптимизирующий компилятор оптимизирует ф-ии отдельно друг от друга  @roman01la [81][81]

. @ALF_er например в https://t.co/VW3wByMPOM он придет оптимизировать foo и не сможет заинлайнить вызов bar   @roman01la [82][82]

. @ALF_er поэтому вызов bar будет для него непрозрачен @roman01la [83][83]

. @ALF_er поэтому если мы бы в bar передаваем что-то, то непонятно что bar  там с ним делает. @roman01la [84][84]

RT @ALF_er: @jsunderhood компиляторы не движутся в сторону оптимизации на более высоких уровнях? Вообще куда сейчас движутся компиляторы? к чему? [85][85]

. @ALF_er да это как-то давно изученная тема intraprocedural vs interprocedural analysis и interprocedural - медленно и память кушает [86][86]

. @ALF_er поэтому надо взвешивать стоимость и какой выхлоп получается. поэтому пока в JS мире intraprocedural + inlining работает ОК [87][87]

. @ALF_er тот же asm.js и Strong Mode https://t.co/pFTvLGmy0R у них ноги растут от нежелания делать interprocedural analysis [88][88]

RT @roman01la: @jsunderhood вот здесь https://t.co/PRrbihqVVA для оптимизации предлагают выносить try-catch в отдельную функцию, это правда поможет? [89][89]

.@roman01la Crankshaft не поддерживает try-catch по историческим причинам, поэтому горячим функциям это помогает быть оптимизированными. [90][90]

.@roman01la но у них должно быть нетривиальное тело (циклы там всякие), что бы прирост производительности был хорошо заметен [91][91]

адаптивная оптимизация одной картинкой http://t.co/t3KiTwWaNO [92][92]

RT @milk_is_my_life: @jsunderhood а я опять о насущном :)
Вячеслав, что вы думаете о реактивном подходе в построении сложных spa приложений?Имею ввиду rxjs,bacon [93][93]

.@milk_is_my_life я думаю, что это функциональненько, и больше ничего :) [94][94]

.@milk_is_my_life я UI практически не делаю =&gt; нет опыта для сравнения. а когда делаю, то тяп-ляп на коленке (e.g. http://t.co/YdcYuNI7TC ) [95][95]

RT @roman01la: @jsunderhood Если бы это была основная архитектура, какими были бы современные ЯП? Или это не влияет? [96][96]

.@roman01la насколько я знаю многие экспериментальные clockless CPU имели достаточно классические системы комманд [97][97]

.@roman01la Charles Moore вон выпускает сейчас clockless CPU который по сути дела реализует Forth. ничего необычного :) [98][98]

.@roman01la с другой стороны я стал сейчас искать последние новости --- оказывается IBM сделала http://t.co/P3Rw2ccJN2 [99][99]

.@roman01la я сомневаюсь что этот TrueNorth "a neuromorphic CMOS chip" программируется на каком-нибудь С++ или JS [100][100]

.@roman01la нашел я, как они его программируют http://t.co/Df8vH3tOQn вообщем это из другой реальности все. [101][101]

.@roman01la лучше уж посмотреть на Chuck Moore с его 144 core Forth CPU http://t.co/aZsC7BpmVL это как-то ближе и понятнее [102][102]

начнем утро головоломкой из разряда "и на старуху бывает проруха" http://t.co/Ca3uOLbNL9 [103][103]

... напихали в объект кучу свойств obj[keys[i]] = i и почему-то читать эти свойства быстрее c ключами из Object.keys(obj), а не из keys [104][104]

RT @vecmezoni: @jsunderhood пользуешься ли ты IDE для C++? Xcode? [105][105]

.@vecmezoni нет, я пишу код в Sublime Text - основная рабочая машина у меня на Linux. [106][106]

никто что-то не спешит отгадывать мою головоломку, а я меж тем пью кофе из своей любимой JS-кружки http://t.co/mA61kNUbSs [107][107]

RT @23ydobemos: @jsunderhood о, расскажи про kinesis, как тебе? [108][108]

.@23ydobemos спас меня от боли в запястьях - пять лет использую, только радость :) [109][109]

отгадка на загадку: дело в том, что obj[key] быстрее всего работает когда key - это интернализованная строка. [110][110]

... массив keys содержит строки результаты конкатенации, которые в V8 не интернализованы, а objectKeys содержит интернализованные строки. [111][111]

... потому что имена свойств внутри объекта V8 хранит в интернализованных виде -&gt; Object.keys(obj) возвращает массив интернализованных строк [112][112]

RT @roman01la: @jsunderhood Что такое интернализованные строки? Без этого не понятно, откуда берется оптимизация. [113][113]

.@roman01la если A и B две интернализованные строки, то A === B только в том случае если A и B это один и тот же объект. [114][114]

.@roman01la иными словами интернализация строки - это поиск посимвольно равной ей строки в некотором глобальной таблице. [115][115]

.@roman01la подробнее: http://t.co/GQgeiFgqnK [116][116]

.@roman01la некоторые реализации некотрых языков, наприер, Lua интернализуют все строки [117][117]

.@roman01la V8 интернализует только некоторые, поэтому возможно ситуация что две посимвольно равные строки представлены разными объектами [118][118]

.@roman01la здесь под "объектом" понимается объект уровня реализации, а не языка. из JavaScript это заметить нельзя [119][119]

RT @roman01la: @jsunderhood Выходит, что V8 тогда не сравнивает посимвольно, а по внутреннему объекту, которому принадлежит строка? [120][120]

. @roman01la разумеется где-то далеко внутри операции obj[key] V8 сравнивает строки посимвольно (иначе это была бы неправильная реализация) [121][121]

.@roman01la но в начале, на fast path, она пробует найти ключ в словаре простым сравнением указателей. [122][122]

.@roman01la и вот как раз случай obj[objectKeys[i]] всегда попадает на этот fast path и никогда не идет в slowPath. [123][123]

в сорцах chromium есть прикольные тулзы: вот, например, одна раскладывает бинарник на части и рисует с помощью d3 http://t.co/LK50ttKymi [124][124]

... можно кликая найти из какого файла пришла куча кода в бинарник, сама тулза здесь -&gt; https://t.co/tv1F2GsHhD [125][125]

RT @reklatsmasters: @jsunderhood @roman01la Получается V8 копирует строки? Крайне не экономное расходование памяти.можно же владеть указателем на один объект [126][126]

.@reklatsmasters зависит от того, что вы вкладываете в понятие "копирует" и при каких условиях. допустим вы сложили две строки A + B [127][127]

.@reklatsmasters если бы V8 всегда интернила результат конкатенации ей надо было бы ее выполнить и пойти искать равную строку в таблице [128][128]

.@reklatsmasters вместо этого V8 на самом деле производит аналог rope - Const String фактически пару указателей (A, B) и не копирует ничего [129][129]

.@reklatsmasters таким образом экономится и память и время на копирование и интернинг. [130][130]

.@reklatsmasters конечно возможно такая ситуация, что вы производите много копий одной и той же строки "aaaa" + "bbbb" и храните их все [131][131]

.@reklatsmasters в этом случае интернинг бы существенно сэкономил память. но не ясно насколько это частный случай? скорее всего не очень. [132][132]

.@reklatsmasters поэтому ухудшать общий случай операции со строками - ради оптимизации частного не стоит. [133][133]

.@reklatsmasters программист может попрофилировать потребление памяти и сделать руками interning [134][134]

.@reklatsmasters вот какая-то такая логика стоит за не интернингом всех подряд строк. строковые литералы "a" и ключи всегда интернятся. [135][135]

про строки (я от этих картинок даже прослезился, вспомнив как конспекты одногрупниц ксерил) http://t.co/bDzh96Kvkx [136][136]

RT @oelifantiev: @jsunderhood flatten-строка быстрее? Может какие-то конкретные операции? Стоит игра свеч? @roman01la [137][137]

.@oelifantiev из flatten строки очевидно быстрее брать по индексу. этим чаще всего заморачиваться *не* надо - V8 сама их плющит [138][138]

RT @oelifantiev: @jsunderhood после какого объема ключей деградирует производительность объекта? [139][139]

.@oelifantiev на этот вопрос простого ответа нет - зависит от того как объект создан и что понимается под "производительностью объекта" [140][140]

.@oelifantiev эвристики для перехода в словарное представление периодиечески меняются, поэтому конкретными цифрами заморачиваться нет смысла [141][141]

RT @dmitryshimkin: @jsunderhood насколько возможно и целесообразно заранее "прогревать" JIT для некого кода, который вероятно скоро будет вызван? [142][142]

.@dmitryshimkin прогревать можно, но для больших приложений сложно - и если у вас этот код горячий он и сам постепенно прогреется. [143][143]

сегодня был самый безвопросый день - все JS программисты видимо готовятся к выходным [144][144]

RT @roman01la: @jsunderhood Правду пишут? https://t.co/XPSvqp14uE [145][145]

.@roman01la да [146][146]

внезапно натолкнулся на вопрос про таинственное замедление JS кода в Chrome http://t.co/Jmmgjn5dWZ [147][147]

... глянул на это дело в IRHydra по быстрому: оказывается это связано с тем, что сломалась одна оптимизация, которую я делал 3 года назад [148][148]

... карма. вот так сделаешь оптимизацию, уйдешь в другой проект - а оптимизация все живет и живет своей жизнью и периодически ломается [149][149]

... отгадка - что сломалось и как чинить, будет через час :) [150][150]

добрался до написания ответа на утренний вопрос http://t.co/i2i5ofCsKH и фикса этого бага https://t.co/vu1nCV2yin [151][151]

чем короче фикс, тем сложнее объяснить почему что-то в оптимизаторе не работает без него [152][152]

выходные надвигаются, пора закоммитить что-нибудь и убежать. [153][153]

не знаю как вас, а меня расстраивает, что я не могу написать [1,2,3,4].reduce(Math.max) в JS [154][154]

ну т.е. я, конечно, могу написать, но толку с этого особо не будет. [155][155]

окей сегодня последний день моего задумчивого молчания в этом твиттере [156][156]

я мог бы набросить под конец, признавшись, что я не особо-то люблю JavaScript, ну да всем это и так известно :) [157][157]

тут как-то купил пельмени в магазине; вот покупные пельмени - это как готовый язык программирования, а самодельные - это когда сам написал [158][158]

... хочу самодельных пельменей и свой язык программирования - но времени нет [159][159]

RT @aod_toxic: @jsunderhood не встречал людей в зравом рассудке, которые его любят. Он объективно очень плох. [160][160]

продолжая тему пельменей - у покупных пельменей внутри сплошной NaM (Not-a-Meat), он получается если сложить говядину с undefined. [161][161]

стоит ли сделать digest из всех технических вопросов, на которые я ответил? (исключая секретные рецепты моей любимой еды) [162][162]

http://t.co/VMNURsiyrq &lt;- скоро все смогут писать быстрые виртуальные машины на коленке, поэтому надо рубить бабло пока эта тема горячая [163][163]

я думаю если устану писать код, напишу книгу "Еда и Программирование" [164][164]

вот допустим гречка, столь любимая на просторах нашей необъятной родины, это очевидная метафора на Pascal. [165][165]

на тебя одинаково странно смотрят, когда ты говоришь "я ем гречку" и "я пишу на Паскале" [166][166]

RT @shuvalov_anton: @jsunderhood а что насчёт C++ и Go? [167][167]

.@shuvalov_anton C++ - это Доширак, ты его заварил - все вокруг умерли, а ты один счастливый сидишь и кушаешь обжигаясь [168][168]

.@shuvalov_anton а Go... овсянная каша? очень просто и полезно для желудка, если от С++ у тебя язва. [169][169]

окей, всех с прошедшей неделей, поднимаю бокал за вас, пишущих на JS без страха и сомнений http://t.co/wBI9t4bDxP [170][170]

вот краткое содержание недели http://t.co/mtCaGVM1Am, ловите меня на http://t.co/8NGUcgwQ1w и в основном твиттере @mraleph. всем пока! [171][171]

и еще, смотрите на языки программирования за пределами JS: C++, Haskell, Rust, Go, C#, Lua, Dart, OCaml, Clojure, Agda, всёвсёвсё [172][172]

это не особо-то полезно в рамках тотальной тирании JS в вебе, но чего тираны всегда боятся? ЗНАНИЙ. [173][173]

знания расширяют угол обзора... кто видел Erlang, тот на колбэки смотрит косо, хоть Erlang в остальном и как-то пффффф [174][174]

а когда угол обзора расширяется - то это можно и к тому языку на котором пишешь применить. вот. [175][175]

RT @beshkenadze: @jsunderhood java, php, python, ruby :) [176][176]

.@beshkenadze да, на все надо смотреть. на PHP надо смотреть, чтобы понять как не надо делать :) *набросил и убежал* [177][177]

на часах 11. хочу еще набросить - пока не пробило 12 и пароль не отобрали. многие думают, что в программировании главное - писать код. [178][178]

мне же кажется, что в программировании главное - это хорошо подумать и ничего не написать... ненаписанный код = несломанные тесты, ляпота! [179][179]

вот еще интересный вопрос: есть сериалы про агентов FBI, есть сериалы про врачей, а есть ли сериалы про программистов? [180][180]

последний сериал про программистов, который я видел выглядел как-то так (главный программист в центре \o/) http://t.co/DU16J3yTsH [181][181]

всё, 12:07, мой пароль превратился в тыкву. вот вам стихотворение Фернандо Пессоа напоследок http://t.co/M5RlwAJLYW [182][182]

[0]: https://twitter.com/jsunderhood/status/584858429212258304
[1]: https://twitter.com/jsunderhood/status/585009057179762688
[2]: https://twitter.com/jsunderhood/status/585077550956859392
[3]: https://twitter.com/jsunderhood/status/585078076368879617
[4]: https://twitter.com/jsunderhood/status/585078375229878273
[5]: https://twitter.com/jsunderhood/status/585078522236035072
[6]: https://twitter.com/jsunderhood/status/585078802616819712
[7]: https://twitter.com/jsunderhood/status/585088192937857024
[8]: https://twitter.com/jsunderhood/status/585088480717500420
[9]: https://twitter.com/jsunderhood/status/585115093924458497
[10]: https://twitter.com/jsunderhood/status/585162278842081280
[11]: https://twitter.com/jsunderhood/status/585162708095520769
[12]: https://twitter.com/jsunderhood/status/585185217276698624
[13]: https://twitter.com/jsunderhood/status/585185250671726592
[14]: https://twitter.com/jsunderhood/status/585185669208768514
[15]: https://twitter.com/jsunderhood/status/585352376363651073
[16]: https://twitter.com/jsunderhood/status/585352716467085314
[17]: https://twitter.com/jsunderhood/status/585353122115117056
[18]: https://twitter.com/jsunderhood/status/585353433529589760
[19]: https://twitter.com/jsunderhood/status/585353784555077632
[20]: https://twitter.com/jsunderhood/status/585372287077081089
[21]: https://twitter.com/jsunderhood/status/585372308040245248
[22]: https://twitter.com/jsunderhood/status/585372716599005184
[23]: https://twitter.com/jsunderhood/status/585373015292178432
[24]: https://twitter.com/jsunderhood/status/585375856207515648
[25]: https://twitter.com/jsunderhood/status/585382093485637632
[26]: https://twitter.com/jsunderhood/status/585382174658056192
[27]: https://twitter.com/jsunderhood/status/585382719770783744
[28]: https://twitter.com/jsunderhood/status/585382973274460160
[29]: https://twitter.com/jsunderhood/status/585382984011935745
[30]: https://twitter.com/jsunderhood/status/585383152044105728
[31]: https://twitter.com/jsunderhood/status/585383779117727744
[32]: https://twitter.com/jsunderhood/status/585383955274268673
[33]: https://twitter.com/jsunderhood/status/585384248804245504
[34]: https://twitter.com/jsunderhood/status/585387467580305409
[35]: https://twitter.com/jsunderhood/status/585388423449595904
[36]: https://twitter.com/jsunderhood/status/585388811246501888
[37]: https://twitter.com/jsunderhood/status/585390833127596033
[38]: https://twitter.com/jsunderhood/status/585391092452982784
[39]: https://twitter.com/jsunderhood/status/585391478245031936
[40]: https://twitter.com/jsunderhood/status/585391742230335488
[41]: https://twitter.com/jsunderhood/status/585395079998758912
[42]: https://twitter.com/jsunderhood/status/585395443393294336
[43]: https://twitter.com/jsunderhood/status/585395797400952832
[44]: https://twitter.com/jsunderhood/status/585396489524006912
[45]: https://twitter.com/jsunderhood/status/585396866545807360
[46]: https://twitter.com/jsunderhood/status/585397145806733314
[47]: https://twitter.com/jsunderhood/status/585405172949590016
[48]: https://twitter.com/jsunderhood/status/585405429657776129
[49]: https://twitter.com/jsunderhood/status/585405783627665408
[50]: https://twitter.com/jsunderhood/status/585405859263569920
[51]: https://twitter.com/jsunderhood/status/585406097365868544
[52]: https://twitter.com/jsunderhood/status/585406608102072322
[53]: https://twitter.com/jsunderhood/status/585406970087215104
[54]: https://twitter.com/jsunderhood/status/585407217316290560
[55]: https://twitter.com/jsunderhood/status/585416925972422656
[56]: https://twitter.com/jsunderhood/status/585417500659179520
[57]: https://twitter.com/jsunderhood/status/585417749595303936
[58]: https://twitter.com/jsunderhood/status/585418489999024131
[59]: https://twitter.com/jsunderhood/status/585418910255738880
[60]: https://twitter.com/jsunderhood/status/585419593604325376
[61]: https://twitter.com/jsunderhood/status/585419754275524608
[62]: https://twitter.com/jsunderhood/status/585419931220635648
[63]: https://twitter.com/jsunderhood/status/585420434000195584
[64]: https://twitter.com/jsunderhood/status/585431632670236673
[65]: https://twitter.com/jsunderhood/status/585431640522018817
[66]: https://twitter.com/jsunderhood/status/585431910689693696
[67]: https://twitter.com/jsunderhood/status/585432038653693952
[68]: https://twitter.com/jsunderhood/status/585432515621613568
[69]: https://twitter.com/jsunderhood/status/585434816952270848
[70]: https://twitter.com/jsunderhood/status/585434997999407104
[71]: https://twitter.com/jsunderhood/status/585436073217634304
[72]: https://twitter.com/jsunderhood/status/585436636206465024
[73]: https://twitter.com/jsunderhood/status/585436845858807808
[74]: https://twitter.com/jsunderhood/status/585437564322115585
[75]: https://twitter.com/jsunderhood/status/585437855767519232
[76]: https://twitter.com/jsunderhood/status/585438100480008193
[77]: https://twitter.com/jsunderhood/status/585438280365305857
[78]: https://twitter.com/jsunderhood/status/585438482593644545
[79]: https://twitter.com/jsunderhood/status/585438686365491200
[80]: https://twitter.com/jsunderhood/status/585438864275275776
[81]: https://twitter.com/jsunderhood/status/585439161311764482
[82]: https://twitter.com/jsunderhood/status/585439464803049474
[83]: https://twitter.com/jsunderhood/status/585439712174833664
[84]: https://twitter.com/jsunderhood/status/585439847667671040
[85]: https://twitter.com/jsunderhood/status/585440023606099968
[86]: https://twitter.com/jsunderhood/status/585440504701186048
[87]: https://twitter.com/jsunderhood/status/585440875938877441
[88]: https://twitter.com/jsunderhood/status/585441550391451648
[89]: https://twitter.com/jsunderhood/status/585441871494774784
[90]: https://twitter.com/jsunderhood/status/585442072955641856
[91]: https://twitter.com/jsunderhood/status/585442258524233728
[92]: https://twitter.com/jsunderhood/status/585443020692160512
[93]: https://twitter.com/jsunderhood/status/585563493132345345
[94]: https://twitter.com/jsunderhood/status/585563902605418497
[95]: https://twitter.com/jsunderhood/status/585564472116436993
[96]: https://twitter.com/jsunderhood/status/585570067116593152
[97]: https://twitter.com/jsunderhood/status/585570463088308224
[98]: https://twitter.com/jsunderhood/status/585570810615750656
[99]: https://twitter.com/jsunderhood/status/585571941626556417
[100]: https://twitter.com/jsunderhood/status/585572318887411712
[101]: https://twitter.com/jsunderhood/status/585573890379882497
[102]: https://twitter.com/jsunderhood/status/585574267833704448
[103]: https://twitter.com/jsunderhood/status/585709511563993088
[104]: https://twitter.com/jsunderhood/status/585710907935891456
[105]: https://twitter.com/jsunderhood/status/585710956744990720
[106]: https://twitter.com/jsunderhood/status/585711115440676864
[107]: https://twitter.com/jsunderhood/status/585759429003497472
[108]: https://twitter.com/jsunderhood/status/585767449334784000
[109]: https://twitter.com/jsunderhood/status/585767838884958208
[110]: https://twitter.com/jsunderhood/status/585805213082202113
[111]: https://twitter.com/jsunderhood/status/585805502782840833
[112]: https://twitter.com/jsunderhood/status/585806069903032321
[113]: https://twitter.com/jsunderhood/status/585810594697240576
[114]: https://twitter.com/jsunderhood/status/585811101411106817
[115]: https://twitter.com/jsunderhood/status/585811432119345153
[116]: https://twitter.com/jsunderhood/status/585811505834283008
[117]: https://twitter.com/jsunderhood/status/585811636595863553
[118]: https://twitter.com/jsunderhood/status/585811786768715777
[119]: https://twitter.com/jsunderhood/status/585812094613909504
[120]: https://twitter.com/jsunderhood/status/585813829562540032
[121]: https://twitter.com/jsunderhood/status/585814091962445824
[122]: https://twitter.com/jsunderhood/status/585814325144727553
[123]: https://twitter.com/jsunderhood/status/585814529268916224
[124]: https://twitter.com/jsunderhood/status/585827870813073408
[125]: https://twitter.com/jsunderhood/status/585828162497552384
[126]: https://twitter.com/jsunderhood/status/585849574939566081
[127]: https://twitter.com/jsunderhood/status/585850196304781312
[128]: https://twitter.com/jsunderhood/status/585850545677676547
[129]: https://twitter.com/jsunderhood/status/585850749575389184
[130]: https://twitter.com/jsunderhood/status/585851001086865408
[131]: https://twitter.com/jsunderhood/status/585851278338695168
[132]: https://twitter.com/jsunderhood/status/585851495205175296
[133]: https://twitter.com/jsunderhood/status/585851663971385344
[134]: https://twitter.com/jsunderhood/status/585851862462640128
[135]: https://twitter.com/jsunderhood/status/585852214704533505
[136]: https://twitter.com/jsunderhood/status/585861134709829634
[137]: https://twitter.com/jsunderhood/status/585873020993961985
[138]: https://twitter.com/jsunderhood/status/585873238301024256
[139]: https://twitter.com/jsunderhood/status/585873680325947392
[140]: https://twitter.com/jsunderhood/status/585873837520265216
[141]: https://twitter.com/jsunderhood/status/585874118739943424
[142]: https://twitter.com/jsunderhood/status/585874236880846848
[143]: https://twitter.com/jsunderhood/status/585874469673107457
[144]: https://twitter.com/jsunderhood/status/586254038091575296
[145]: https://twitter.com/jsunderhood/status/586297300022124545
[146]: https://twitter.com/jsunderhood/status/586297385468502016
[147]: https://twitter.com/jsunderhood/status/586448824744312833
[148]: https://twitter.com/jsunderhood/status/586449268954701824
[149]: https://twitter.com/jsunderhood/status/586449579756822528
[150]: https://twitter.com/jsunderhood/status/586449939825201152
[151]: https://twitter.com/jsunderhood/status/586514391656435712
[152]: https://twitter.com/jsunderhood/status/586515351208329217
[153]: https://twitter.com/jsunderhood/status/586572257302052864
[154]: https://twitter.com/jsunderhood/status/586612093190860800
[155]: https://twitter.com/jsunderhood/status/586612295847018497
[156]: https://twitter.com/jsunderhood/status/587225199801667584
[157]: https://twitter.com/jsunderhood/status/587226268829147136
[158]: https://twitter.com/jsunderhood/status/587233817628401664
[159]: https://twitter.com/jsunderhood/status/587234010209853441
[160]: https://twitter.com/jsunderhood/status/587238680663879681
[161]: https://twitter.com/jsunderhood/status/587262826307280896
[162]: https://twitter.com/jsunderhood/status/587266372230639616
[163]: https://twitter.com/jsunderhood/status/587267141885374465
[164]: https://twitter.com/jsunderhood/status/587270596519665664
[165]: https://twitter.com/jsunderhood/status/587271003920818177
[166]: https://twitter.com/jsunderhood/status/587271190575714304
[167]: https://twitter.com/jsunderhood/status/587271475318693888
[168]: https://twitter.com/jsunderhood/status/587271873244831744
[169]: https://twitter.com/jsunderhood/status/587272345976451072
[170]: https://twitter.com/jsunderhood/status/587278063509106691
[171]: https://twitter.com/jsunderhood/status/587334589988868096
[172]: https://twitter.com/jsunderhood/status/587338839573794816
[173]: https://twitter.com/jsunderhood/status/587339131577065472
[174]: https://twitter.com/jsunderhood/status/587339527796166656
[175]: https://twitter.com/jsunderhood/status/587339960086323201
[176]: https://twitter.com/jsunderhood/status/587340016197705728
[177]: https://twitter.com/jsunderhood/status/587340211098628096
[178]: https://twitter.com/jsunderhood/status/587357844715999232
[179]: https://twitter.com/jsunderhood/status/587358322371747841
[180]: https://twitter.com/jsunderhood/status/587361729874677760
[181]: https://twitter.com/jsunderhood/status/587362894683201536
[182]: https://twitter.com/jsunderhood/status/587376973791498241
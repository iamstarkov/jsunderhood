# mraleph

_12 апреля 2015_

## Воскресенье <small>1 твит</small>

всем привет! меня зовут Вячеслав и эту неделю я вещаю из под капота JS - здесь темно и повсюду C++... отвечаю на вопросы про V8 и перформанс

## Понедельник <small>14 твитов</small>

утро понедельника начинается с чтения LLVM Weekly - на прошлой неделе ничего интересного, впрочем, не случилось [llvmweekly.org/issue/66](http://t.co/pwYE9sH0wx "http://llvmweekly.org/issue/66")

RT [@GrantedN](https://twitter.com/GrantedN "Alex Grand"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") появились ли какие-то отпимизации в V8, связанные с defineProperty? Почему U\*Array \(UInt32\) не содержит всех мет…

. [@GrantedN](https://twitter.com/GrantedN "Alex Grand") typedarrays исторически не были array, поэтому у них другой прототип; в ES6 все методы типа map будут  [people.mozilla.org/~jorendorff/es…](https://t.co/aHzphLndYT "https://people.mozilla.org/~jorendorff/es6-draft.html#sec-%typedarray%.prototype")

. [@GrantedN](https://twitter.com/GrantedN "Alex Grand") про defineProperty: зависит от того, что именно вас интересует: сам defineProperty или проперти им созданные?

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") если сам defineProperty то он как был медленный и печальный, так примерно пока и остается

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") с другой стороны если определять им non-writable свойство на прототипе какого-нибудь объекта то это используется в оптимизациях

а вот демка скрытой проблемы с производительностью при использовании accessors [mrale.ph/irhydra/2/\#gis…](http://t.co/csgOqPM7gA "http://mrale.ph/irhydra/2/#gist:88ef8e9f7d8b17090777") / [gist.github.com/mraleph/88ef8e…](https://t.co/Eh40zPeg8f "https://gist.github.com/mraleph/88ef8e9f7d8b17090777")

... смотреть надо что заинлайнилось во вкладке Source [pic.twitter.com/lZpppn1cY2](http://t.co/lZpppn1cY2)

на работе сегодня выходной, тут в твиттере - тоже. чувствую себя героем фантастического рассказа "Позвоните!" [fantlab.ru/work65898](http://t.co/FS75JrG7ne "http://fantlab.ru/work65898")

обнаружил у себя в рюкзаке распечатку статьи "Common Compiler Optimisations are Invalid in the C11 Memory Model" [mpi-sws.org/~viktor/papers…](https://t.co/ZbinSfue8v "https://mpi-sws.org/~viktor/papers/popl2015-c11comp.pdf")

казалось бы при чем тут JS? а вот при чем: [docs.google.com/document/d/1ND…](https://t.co/IUSSwZcNwO "https://docs.google.com/document/d/1NDGA_gZJ7M7w1Bh8S0AoDyEqwDdRh4uSoTPSNn77PFk/view")

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вячеслав, немного не по теме, но всё же... Что вы думаете о реализациях виртуального дома в js? Есть ли з…

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") на мой взгляд за ними есть настоящее,   
  
кто знает, что будет в будущем? может веб умрет, может DOM станет легковесным

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") а тема у нас JS и все-все-все, так что любой вопрос по теме, даже если я на него ответа не знаю :\)

## Вторник <small>88 твитов</small>

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тогда как JS стать лучше/быстрее? В чем слабые места современных движков?

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") я бы сказал, что самое слабое место современных движков это непредсказуемость производительности

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") классический пример был с Object.freeze: долгое время в V8 замороженные объекты неожиданно были значительно медленнее обычных

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Object.freeze починили, но он хорошо подчеркивает суть - что в бенчмарках не встречается, то имеет случайную производительность

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") поэтому я считаю, что JS движки нынче должны развиваться в ширину, а не продолжать копать яму, стоя на одном месте

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") вот допустим forEach очень медленный по сравнению с обычным for-loop. почему медленный? "потому что гладиолус".

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") можно немного подробнее про ширину?\)

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") или пример с accessors который я вчера твитнул - можно сделать Clash случай таким же быстрым как NoClash.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") или Object.defineProperty / Object.prototype.hasOwnProperty они не очень-то быстрые, а можно сделать быстрыми

в JS сообществе очень популярно изобретать велосипеды, вот и для меня это самый удобный способ добраться до работы [pic.twitter.com/UqqXgBfnKc](http://t.co/UqqXgBfnKc)

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") реализация forEach внутри отличается от for-loop? Почему бы JIT не инлайнить forEach в for-loop.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") forEach реализован через for-loop [github.com/v8/v8-git-mirr…](https://t.co/cVodtJAkdb "https://github.com/v8/v8-git-mirror/blob/ba41489da55a3484ceb5ac84c07de546578a2161/src/array.js#L1176-L1205")

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") проблема как раз в том, что никто пока не озаботился тем, чтобы forEach инлайнился и все лишнее оптимизировалось в никуда

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") я для этого как раз написал тулзу -&gt; [mrale.ph/irhydra/2/](http://t.co/pHZEWPybDb "http://mrale.ph/irhydra/2/"), там флаги и инструкции на первой странице

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как можно посмотреть оптимизированный код в рантайме?

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть будущее у компиляции LLVM-кода под браузеры, asm.js — как нового ассемблера и js на уровне железа? ht[destroyallsoftware.com/talks/the-birt…](https://t.co/W7KlmcAEM8 "https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript")

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") asm.js - весьма неполноценный. и мне кажется весьма странным решение "прятать" байткод внутри JSкода

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") все мое отношение к нему было выражено 2 года назад [mrale.ph/blog/2013/03/2…](http://t.co/Qq1paUkVvf "http://mrale.ph/blog/2013/03/28/why-asmjs-bothers-me.html") и почти не изменилось с тех пор.

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") однако веб достаточно странная штука. тут часто побеждает популизм и политика, а не нормальные технические решения.

RT [@dosyara](https://twitter.com/dosyara "Sergey Maksimov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") интересно, какие термины используют англоязычные разработчики для велосипеда, костыля и всякой упячки?

.[@dosyara](https://twitter.com/dosyara "Sergey Maksimov") костыль можно так и переводить "crutch". "изобретать велосипед" ~ "reinvent the wheel", все универсальное :\)

.[@dosyara](https://twitter.com/dosyara "Sergey Maksimov") еще близкий аналог русского "костыля", это "kludge" \(a workaround or quick-and-dirty solution that is clumsy, inelegant\)

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В FF Nightly реализованы типизированные объекты [wiki.ecmascript.org/doku.php?id=ha…](http://t.co/l0Gtje43ik "http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects") Нужна ли в JS статическая типизация?

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") типизированные объекты не привносят статической типизации в язык, поэтому вопрос не совсем понятен

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") еще не совсем понятен смысл слова "нужна", кому нужна? у мощных статических систем типов есть свои преимущества.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") но если я сейчас начну о них рассуждать, то я неизбежно скачусь в рассуждения о вкусе и личных предпочтениях.

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Добавление typed objects и других типизированных структур как-то повлияет на ежедневную разработку?..

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") повлияет, если ваша ежедневная разработка требует оптимизаций на уровне object layout &amp; memory locality :\)

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") в остальных случаях JS VMных собственных оптимизаций, которые случаются сами по себе, должно хватать.

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") То есть веб-разработчику не стоит заморачиваться о таких вещах, а лучше исправлять свой обычный JS код? :\)

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") прежде всего нужно писать нормальный код \(не пренебрегая простейшими знаниями об алгоритмах\) и continuous performance tracking

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") ... а не так что фигачить код скажем год, а потом спохватиться и начать бегать вокруг него пытаясь оптимизировать

RT [@kanterov](https://twitter.com/kanterov "Gleb Kanterov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть ли в Dart AOT компиляция при компиляции в JS? Почему?

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") Dart в JS компиляция по определению AOT, потому что она проиходит один раз во время сборки проекта.

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") если эту компиляцию делать не AOT, а "JIT" на стороне клиента то получается нужно весь Dart код посылать с зависимостями

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") выглядит не очень эффективно.

.[@kanterov](https://twitter.com/kanterov "Gleb Kanterov") хотя этот подход было бы интересно попробовать и написать такой JIT, у думаю пиковую производительньсть было бы проще достичь

.[@kanterov](https://twitter.com/kanterov "Gleb Kanterov") но и прогревать его пришлось бы паяльной лампой. хороший пример - это pypy.js [arewepythonyet.com](http://t.co/XxZ2zfmnh5 "http://arewepythonyet.com/")

.[@kanterov](https://twitter.com/kanterov "Gleb Kanterov") \[впрочем у pypy.js большой overhead как раз из-за того, что они используют pypy скомпилированный emscripten\]

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") \[руками бы писать было дольше и сложнее, но и overhead был бы меньше\]

RT [@raxpost](https://twitter.com/raxpost "Роман Роман"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Rust или Go? Что тебе больше нравится и что станет мейнстримом \(и станет ли\)?

.[@raxpost](https://twitter.com/raxpost "Роман Роман") о обоих языков есть прикольные фичи и недостатки, например, у Go бедная система типов - а у Rust сильно уж замороченная.

.[@raxpost](https://twitter.com/raxpost "Роман Роман") я вообще к языкам программирования \(за исключением русского языка\) отношусь без особого фанатизма. молоток он нужен чтобы стучать

.[@raxpost](https://twitter.com/raxpost "Роман Роман") поэтому если стоит выбор в вакууме между Rust и Go, то я предпочту съесть еще мягких французских булок и выпить чаю

.[@raxpost](https://twitter.com/raxpost "Роман Роман") в будущем число языков программирования только продолжит расти поэтому понятие mainstream станет размываться

.[@raxpost](https://twitter.com/raxpost "Роман Роман") я думаю вместо mainstream нужно рассуждать о "самоподдерживаемости"

.[@raxpost](https://twitter.com/raxpost "Роман Роман") достаточен ли размер языкового community для обеспечения всех потребностей оного в велосипедах и прочих фреймворках

.[@raxpost](https://twitter.com/raxpost "Роман Роман") есть ли кому подхватить флаг, если разработчики компилятора попадут под автобус дружно?

.[@raxpost](https://twitter.com/raxpost "Роман Роман") мне кажется и Go, и Rust хоть и имеют большие растущие community, все еще уязвимы перед оным автобусом-языконенавистником.

RT [@GrantedN](https://twitter.com/GrantedN "Alex Grand"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что по поводу оптимизаций в V8 для apply, bind или call. Раньше видел что call быстрее, потом apply, а потом bin…

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") зависит от ситуации. но bind действительно самый медленный из всех, потому что его никто не разгоняет :\(

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") для foo.call\(\) были не так давно реализованы оптимизации в Crankshaft, поэтому в теории он сейчас должен быть самым быстрым

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") паттерн foo.apply\(x, arguments\) внутри оптимизируемых функций тоже быстрый.

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") в неоптимизированном случае call быстрее за счет того, что нет нужды выделять временный массив аргументов

еще случайный факт об о мне: в моем "музыка для программирования" плейлисте [youtube.com/watch?v=\_2xa46…](https://t.co/HC4sJzK4Hx "https://www.youtube.com/watch?v=_2xa46ytiSs") соседствует с [youtube.com/watch?v=foGkU6…](https://t.co/o2j7IAUDAM "https://www.youtube.com/watch?v=foGkU6x3eSE")

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что с иммутабельными данными в движках? Они используют преимущества неизменяемости для оптимизаций?

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") V8 не особо использует, могла бы и лучше. я уже приводил, пример с non-writable свойством на прототипе  [twitter.com/jsunderhood/st…](https://t.co/zjVhLXC6mu "https://twitter.com/jsunderhood/status/585078802616819712")

. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") с другой стороны если написать вот такой цикл [gist.github.com/mraleph/141f0e…](https://t.co/VW3wBz4rdm "https://gist.github.com/mraleph/141f0ed76bd24fb28243"), то там o.x не будет вынесено за цикл, хотя могло бы.

. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") одновременно в этом примере hidden class check будет убран - т.е. вроде как V8 понимает что объект immutable но вроде как и нет

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") числа, строки, булевы значения, замороженные объекты - больше ничего вроде нет иммутабельного

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") если объект "ускользает" из области компиляции, то компилятор обычно сдается и предполагает любые побочные эффекты

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") с другой стороны компиляторы пытаются отслеживать все это делать, escape analysis и т.д. т.е. это возможно в опр. пределах

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") как объект может оттуда ускользнуть? Ведь весь код всёравно проходит через компилятор?

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") код обычно проходит через компилятор не весь сразу \(это было бы слишком долго\) а "кусками" [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") плюс в современных JS VM несколько компиляторов - все начинается с тупого, который почти ничего не оптимизирует [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") а оптимизирующий компилятор приходит позже и оптимизирует только то "горячие" фрагменты  [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") в современных JS VM эти фрагменты = функции, т.е. оптимизирующий компилятор оптимизирует ф-ии отдельно друг от друга  [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") например в [gist.github.com/mraleph/141f0e…](https://t.co/VW3wByMPOM "https://gist.github.com/mraleph/141f0ed76bd24fb28243") он придет оптимизировать foo и не сможет заинлайнить вызов bar   [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") поэтому вызов bar будет для него непрозрачен [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") поэтому если мы бы в bar передаваем что-то, то непонятно что bar  там с ним делает. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") компиляторы не движутся в сторону оптимизации на более высоких уровнях? Вообще куда сейчас движутся компиляторы? к…

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") да это как-то давно изученная тема intraprocedural vs interprocedural analysis и interprocedural - медленно и память кушает

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") поэтому надо взвешивать стоимость и какой выхлоп получается. поэтому пока в JS мире intraprocedural + inlining работает ОК

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") тот же asm.js и Strong Mode [developers.google.com/v8/experiments](https://t.co/pFTvLGmy0R "https://developers.google.com/v8/experiments") у них ноги растут от нежелания делать interprocedural analysis

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот здесь [github.com/babel/babel/is…](https://t.co/PRrbihqVVA "https://github.com/babel/babel/issues/1176") для оптимизации предлагают выносить try-catch в отдельную функцию, это правда…

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Crankshaft не поддерживает try-catch по историческим причинам, поэтому горячим функциям это помогает быть оптимизированными.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") но у них должно быть нетривиальное тело \(циклы там всякие\), что бы прирост производительности был хорошо заметен

адаптивная оптимизация одной картинкой [pic.twitter.com/t3KiTwWaNO](http://t.co/t3KiTwWaNO)

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а я опять о насущном :\)  
Вячеслав, что вы думаете о реактивном подходе в построении сложных spa приложений…

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") я думаю, что это функциональненько, и больше ничего :\)

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") я UI практически не делаю =&gt; нет опыта для сравнения. а когда делаю, то тяп-ляп на коленке \(e.g. [mrale.ph/saga/](http://t.co/YdcYuNI7TC "http://mrale.ph/saga/") \)

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если бы это была основная архитектура, какими были бы современные ЯП? Или это не влияет?

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") насколько я знаю многие экспериментальные clockless CPU имели достаточно классические системы комманд

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Charles Moore вон выпускает сейчас clockless CPU который по сути дела реализует Forth. ничего необычного :\)

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") с другой стороны я стал сейчас искать последние новости --- оказывается IBM сделала [en.wikipedia.org/wiki/TrueNorth](http://t.co/P3Rw2ccJN2 "http://en.wikipedia.org/wiki/TrueNorth")

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") я сомневаюсь что этот TrueNorth "a neuromorphic CMOS chip" программируется на каком-нибудь С++ или JS

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") нашел я, как они его программируют [dl1.frz.ir/FREE/papers-we…](http://t.co/Df8vH3tOQn "http://dl1.frz.ir/FREE/papers-we-love/new_paradigms/cognitive-computing-programming-paradigm-corelet-language.pdf") вообщем это из другой реальности все.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") лучше уж посмотреть на Chuck Moore с его 144 core Forth CPU [infoq.com/presentations/…](http://t.co/aZsC7BpmVL "http://www.infoq.com/presentations/power-144-chip") это как-то ближе и понятнее

## Среда <small>41 твит</small>

начнем утро головоломкой из разряда "и на старуху бывает проруха" [jsperf.com/es6-map-vs-obj…](http://t.co/Ca3uOLbNL9 "http://jsperf.com/es6-map-vs-object-lookup")

... напихали в объект кучу свойств obj\[keys\[i\]\] = i и почему-то читать эти свойства быстрее c ключами из Object.keys\(obj\), а не из keys

RT [@vecmezoni](https://twitter.com/vecmezoni "Alexander Inozemtsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пользуешься ли ты IDE для C++? Xcode?

.[@vecmezoni](https://twitter.com/vecmezoni "Alexander Inozemtsev") нет, я пишу код в Sublime Text - основная рабочая машина у меня на Linux.

никто что-то не спешит отгадывать мою головоломку, а я меж тем пью кофе из своей любимой JS-кружки [pic.twitter.com/mA61kNUbSs](http://t.co/mA61kNUbSs)

RT [@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") о, расскажи про kinesis, как тебе?

.[@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats") спас меня от боли в запястьях - пять лет использую, только радость :\)

отгадка на загадку: дело в том, что obj\[key\] быстрее всего работает когда key - это интернализованная строка.

... массив keys содержит строки результаты конкатенации, которые в V8 не интернализованы, а objectKeys содержит интернализованные строки.

... потому что имена свойств внутри объекта V8 хранит в интернализованных виде -&gt; Object.keys\(obj\) возвращает массив интернализованных строк

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Что такое интернализованные строки? Без этого не понятно, откуда берется оптимизация.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") если A и B две интернализованные строки, то A === B только в том случае если A и B это один и тот же объект.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") иными словами интернализация строки - это поиск посимвольно равной ей строки в некотором глобальной таблице.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") подробнее: [en.wikipedia.org/wiki/String\_in…](http://t.co/GQgeiFgqnK "http://en.wikipedia.org/wiki/String_interning")

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") некоторые реализации некотрых языков, наприер, Lua интернализуют все строки

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") V8 интернализует только некоторые, поэтому возможно ситуация что две посимвольно равные строки представлены разными объектами

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") здесь под "объектом" понимается объект уровня реализации, а не языка. из JavaScript это заметить нельзя

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Выходит, что V8 тогда не сравнивает посимвольно, а по внутреннему объекту, которому принадлежит строка?

. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") разумеется где-то далеко внутри операции obj\[key\] V8 сравнивает строки посимвольно \(иначе это была бы неправильная реализация\)

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") но в начале, на fast path, она пробует найти ключ в словаре простым сравнением указателей.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") и вот как раз случай obj\[objectKeys\[i\]\] всегда попадает на этот fast path и никогда не идет в slowPath.

в сорцах chromium есть прикольные тулзы: вот, например, одна раскладывает бинарник на части и рисует с помощью d3 [pic.twitter.com/LK50ttKymi](http://t.co/LK50ttKymi)

... можно кликая найти из какого файла пришла куча кода в бинарник, сама тулза здесь -&gt; [chromium.googlesource.com/chromium/src/+…](https://t.co/tv1F2GsHhD "https://chromium.googlesource.com/chromium/src/+/master/tools/binary_size")

RT [@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Получается V8 копирует строки? Крайне не экономное расходование памяти.можно же владеть указате…

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") зависит от того, что вы вкладываете в понятие "копирует" и при каких условиях. допустим вы сложили две строки A + B

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") если бы V8 всегда интернила результат конкатенации ей надо было бы ее выполнить и пойти искать равную строку в таблице

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") вместо этого V8 на самом деле производит аналог rope - Const String фактически пару указателей \(A, B\) и не копирует ничего

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") таким образом экономится и память и время на копирование и интернинг.

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") конечно возможно такая ситуация, что вы производите много копий одной и той же строки "aaaa" + "bbbb" и храните их все

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") в этом случае интернинг бы существенно сэкономил память. но не ясно насколько это частный случай? скорее всего не очень.

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") поэтому ухудшать общий случай операции со строками - ради оптимизации частного не стоит.

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") программист может попрофилировать потребление памяти и сделать руками interning

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") вот какая-то такая логика стоит за не интернингом всех подряд строк. строковые литералы "a" и ключи всегда интернятся.

про строки \(я от этих картинок даже прослезился, вспомнив как конспекты одногрупниц ксерил\) [pic.twitter.com/bDzh96Kvkx](http://t.co/bDzh96Kvkx)

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") flatten-строка быстрее? Может какие-то конкретные операции? Стоит игра свеч? [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") из flatten строки очевидно быстрее брать по индексу. этим чаще всего заморачиваться \*не\* надо - V8 сама их плющит

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") после какого объема ключей деградирует производительность объекта?

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") на этот вопрос простого ответа нет - зависит от того как объект создан и что понимается под "производительностью объекта"

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") эвристики для перехода в словарное представление периодиечески меняются, поэтому конкретными цифрами заморачиваться нет смысла

RT [@dmitryshimkin](https://twitter.com/dmitryshimkin "Dmitry Shimkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") насколько возможно и целесообразно заранее "прогревать" JIT для некого кода, который вероятно скоро будет в…

.[@dmitryshimkin](https://twitter.com/dmitryshimkin "Dmitry Shimkin") прогревать можно, но для больших приложений сложно - и если у вас этот код горячий он и сам постепенно прогреется.

## Четверг <small>3 твита</small>

сегодня был самый безвопросый день - все JS программисты видимо готовятся к выходным

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Правду пишут? [twitter.com/roman01la/stat…](https://t.co/XPSvqp14uE "https://twitter.com/roman01la/status/586294394275389441")

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") да

## Пятница <small>9 твитов</small>

внезапно натолкнулся на вопрос про таинственное замедление JS кода в Chrome [stackoverflow.com/questions/2942…](http://t.co/Jmmgjn5dWZ "http://stackoverflow.com/questions/29424013/strange-javascript-performance")

... глянул на это дело в IRHydra по быстрому: оказывается это связано с тем, что сломалась одна оптимизация, которую я делал 3 года назад

... карма. вот так сделаешь оптимизацию, уйдешь в другой проект - а оптимизация все живет и живет своей жизнью и периодически ломается

... отгадка - что сломалось и как чинить, будет через час :\)

добрался до написания ответа на утренний вопрос [stackoverflow.com/questions/2942…](http://t.co/i2i5ofCsKH "http://stackoverflow.com/questions/29424013/strange-javascript-performance/29562128#29562128") и фикса этого бага [codereview.chromium.org/1077113002/](https://t.co/vu1nCV2yin "https://codereview.chromium.org/1077113002/")

чем короче фикс, тем сложнее объяснить почему что-то в оптимизаторе не работает без него

выходные надвигаются, пора закоммитить что-нибудь и убежать.

не знаю как вас, а меня расстраивает, что я не могу написать \[1,2,3,4\].reduce\(Math.max\) в JS

ну т.е. я, конечно, могу написать, но толку с этого особо не будет.

## Воскресенье <small>27 твитов</small>

окей сегодня последний день моего задумчивого молчания в этом твиттере

я мог бы набросить под конец, признавшись, что я не особо-то люблю JavaScript, ну да всем это и так известно :\)

тут как-то купил пельмени в магазине; вот покупные пельмени - это как готовый язык программирования, а самодельные - это когда сам написал

... хочу самодельных пельменей и свой язык программирования - но времени нет

RT [@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не встречал людей в зравом рассудке, которые его любят. Он объективно очень плох.

продолжая тему пельменей - у покупных пельменей внутри сплошной NaM \(Not-a-Meat\), он получается если сложить говядину с undefined.

стоит ли сделать digest из всех технических вопросов, на которые я ответил? \(исключая секретные рецепты моей любимой еды\)

[stefan-marr.de/papers/pldi-ma…](http://t.co/VMNURsiyrq "http://stefan-marr.de/papers/pldi-marr-et-al-zero-overhead-metaprogramming/") &lt;- скоро все смогут писать быстрые виртуальные машины на коленке, поэтому надо рубить бабло пока эта тема горячая

я думаю если устану писать код, напишу книгу "Еда и Программирование"

вот допустим гречка, столь любимая на просторах нашей необъятной родины, это очевидная метафора на Pascal.

на тебя одинаково странно смотрят, когда ты говоришь "я ем гречку" и "я пишу на Паскале"

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что насчёт C++ и Go?

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") C++ - это Доширак, ты его заварил - все вокруг умерли, а ты один счастливый сидишь и кушаешь обжигаясь

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") а Go... овсянная каша? очень просто и полезно для желудка, если от С++ у тебя язва.

окей, всех с прошедшей неделей, поднимаю бокал за вас, пишущих на JS без страха и сомнений [pic.twitter.com/wBI9t4bDxP](http://t.co/wBI9t4bDxP)

вот краткое содержание недели [mrale.ph/blog/2015/04/1…](http://t.co/mtCaGVM1Am "http://mrale.ph/blog/2015/04/12/jsunderhood.html"), ловите меня на [mrale.ph](http://t.co/8NGUcgwQ1w "http://mrale.ph") и в основном твиттере [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov"). всем пока!

и еще, смотрите на языки программирования за пределами JS: C++, Haskell, Rust, Go, C\#, Lua, Dart, OCaml, Clojure, Agda, всёвсёвсё

это не особо-то полезно в рамках тотальной тирании JS в вебе, но чего тираны всегда боятся? ЗНАНИЙ.

знания расширяют угол обзора... кто видел Erlang, тот на колбэки смотрит косо, хоть Erlang в остальном и как-то пффффф

а когда угол обзора расширяется - то это можно и к тому языку на котором пишешь применить. вот.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") java, php, python, ruby :\)

.[@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") да, на все надо смотреть. на PHP надо смотреть, чтобы понять как не надо делать :\) \*набросил и убежал\*

на часах 11. хочу еще набросить - пока не пробило 12 и пароль не отобрали. многие думают, что в программировании главное - писать код.

мне же кажется, что в программировании главное - это хорошо подумать и ничего не написать... ненаписанный код = несломанные тесты, ляпота!

вот еще интересный вопрос: есть сериалы про агентов FBI, есть сериалы про врачей, а есть ли сериалы про программистов?

последний сериал про программистов, который я видел выглядел как-то так \(главный программист в центре \\o/\) [pic.twitter.com/DU16J3yTsH](http://t.co/DU16J3yTsH)

всё, 12:07, мой пароль превратился в тыкву. вот вам стихотворение Фернандо Пессоа напоследок [pic.twitter.com/M5RlwAJLYW](http://t.co/M5RlwAJLYW)

## Ссылки

### mrale.ph  
<a href="http://mrale.ph/irhydra/2/#gist:88ef8e9f7d8b17090777" target="_blank">http://mrale.ph/irhydra/2/#gist:88ef8e9f7d8b17090777</a>  
<a href="http://mrale.ph/irhydra/2/" target="_blank">http://mrale.ph/irhydra/2/</a>  
<a href="http://mrale.ph/blog/2013/03/28/why-asmjs-bothers-me.html" target="_blank">http://mrale.ph/blog/2013/03/28/why-asmjs-bothers-me.html</a>  
<a href="http://mrale.ph/saga/" target="_blank">http://mrale.ph/saga/</a>  
<a href="http://mrale.ph/blog/2015/04/12/jsunderhood.html" target="_blank">http://mrale.ph/blog/2015/04/12/jsunderhood.html</a>  
<a href="http://mrale.ph" target="_blank">http://mrale.ph</a>

### Другие

<a href="http://llvmweekly.org/issue/66" target="_blank">http://llvmweekly.org/issue/66</a>  
<a href="https://people.mozilla.org/~jorendorff/es6-draft.html#sec-%typedarray%.prototype" target="_blank">https://people.mozilla.org/~jorendorff/es6-draft.html#sec-%typedarray%.prototype</a>  
<a href="https://gist.github.com/mraleph/88ef8e9f7d8b17090777" target="_blank">https://gist.github.com/mraleph/88ef8e9f7d8b17090777</a>  
<a href="https://gist.github.com/mraleph/141f0ed76bd24fb28243" target="_blank">https://gist.github.com/mraleph/141f0ed76bd24fb28243</a>  
<a href="http://fantlab.ru/work65898" target="_blank">http://fantlab.ru/work65898</a>  
<a href="https://mpi-sws.org/~viktor/papers/popl2015-c11comp.pdf" target="_blank">https://mpi-sws.org/~viktor/papers/popl2015-c11comp.pdf</a>  
<a href="https://docs.google.com/document/d/1NDGA_gZJ7M7w1Bh8S0AoDyEqwDdRh4uSoTPSNn77PFk/view" target="_blank">https://docs.google.com/document/d/1NDGA_gZJ7M7w1Bh8S0AoDyEqwDdRh4uSoTPSNn77PFk/view</a>  
<a href="https://github.com/v8/v8-git-mirror/blob/ba41489da55a3484ceb5ac84c07de546578a2161/src/array.js#L1176-L1205" target="_blank">https://github.com/v8/v8-git-mirror/blob/ba41489da55a3484ceb5ac84c07de546578a2161/src/array.js#L1176-L1205</a>  
<a href="https://github.com/babel/babel/issues/1176" target="_blank">https://github.com/babel/babel/issues/1176</a>  
<a href="https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript" target="_blank">https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript</a>  
<a href="http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects" target="_blank">http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects</a>  
<a href="http://arewepythonyet.com/" target="_blank">http://arewepythonyet.com/</a>  
<a href="https://www.youtube.com/watch?v=_2xa46ytiSs" target="_blank">https://www.youtube.com/watch?v=_2xa46ytiSs</a>  
<a href="https://www.youtube.com/watch?v=foGkU6x3eSE" target="_blank">https://www.youtube.com/watch?v=foGkU6x3eSE</a>  
<a href="https://developers.google.com/v8/experiments" target="_blank">https://developers.google.com/v8/experiments</a>  
<a href="http://en.wikipedia.org/wiki/TrueNorth" target="_blank">http://en.wikipedia.org/wiki/TrueNorth</a>  
<a href="http://en.wikipedia.org/wiki/String_interning" target="_blank">http://en.wikipedia.org/wiki/String_interning</a>  
<a href="http://dl1.frz.ir/FREE/papers-we-love/new_paradigms/cognitive-computing-programming-paradigm-corelet-language.pdf" target="_blank">http://dl1.frz.ir/FREE/papers-we-love/new_paradigms/cognitive-computing-programming-paradigm-corelet-language.pdf</a>  
<a href="http://www.infoq.com/presentations/power-144-chip" target="_blank">http://www.infoq.com/presentations/power-144-chip</a>  
<a href="http://jsperf.com/es6-map-vs-object-lookup" target="_blank">http://jsperf.com/es6-map-vs-object-lookup</a>  
<a href="https://chromium.googlesource.com/chromium/src/+/master/tools/binary_size" target="_blank">https://chromium.googlesource.com/chromium/src/+/master/tools/binary_size</a>  
<a href="http://stackoverflow.com/questions/29424013/strange-javascript-performance" target="_blank">http://stackoverflow.com/questions/29424013/strange-javascript-performance</a>  
<a href="http://stackoverflow.com/questions/29424013/strange-javascript-performance/29562128#29562128" target="_blank">http://stackoverflow.com/questions/29424013/strange-javascript-performance/29562128#29562128</a>  
<a href="https://codereview.chromium.org/1077113002/" target="_blank">https://codereview.chromium.org/1077113002/</a>  
<a href="http://stefan-marr.de/papers/pldi-marr-et-al-zero-overhead-metaprogramming/" target="_blank">http://stefan-marr.de/papers/pldi-marr-et-al-zero-overhead-metaprogramming/</a>
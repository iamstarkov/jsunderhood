# mraleph

_13 апреля 2015_

## Понедельник <small>15 твитов</small>

всем привет! меня зовут Вячеслав и эту неделю я вещаю из под капота JS - здесь темно и повсюду C++... отвечаю на вопросы про V8 и перформанс

утро понедельника начинается с чтения LLVM Weekly - на прошлой неделе ничего интересного, впрочем, не случилось <a href="http://t.co/pwYE9sH0wx">llvmweekly.org/issue/66</a>

RT <a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> появились ли какие-то отпимизации в V8, связанные с defineProperty? Почему U*Array (UInt32) не содержит всех мет…

. <a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> typedarrays исторически не были array, поэтому у них другой прототип; в ES6 все методы типа map будут  <a href="https://t.co/aHzphLndYT">people.mozilla.org/~jorendorff/es…</a>

. <a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> про defineProperty: зависит от того, что именно вас интересует: сам defineProperty или проперти им созданные?

.<a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> если сам defineProperty то он как был медленный и печальный, так примерно пока и остается

.<a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> с другой стороны если определять им non-writable свойство на прототипе какого-нибудь объекта то это используется в оптимизациях

а вот демка скрытой проблемы с производительностью при использовании accessors <a href="http://t.co/csgOqPM7gA">mrale.ph/irhydra/2/#gis…</a> / <a href="https://t.co/Eh40zPeg8f">gist.github.com/mraleph/88ef8e…</a>

... смотреть надо что заинлайнилось во вкладке Source <a href="http://t.co/lZpppn1cY2">pic.twitter.com/lZpppn1cY2</a>

на работе сегодня выходной, тут в твиттере - тоже. чувствую себя героем фантастического рассказа "Позвоните!" <a href="http://t.co/FS75JrG7ne">fantlab.ru/work65898</a>

обнаружил у себя в рюкзаке распечатку статьи "Common Compiler Optimisations are Invalid in the C11 Memory Model" <a href="https://t.co/ZbinSfue8v">mpi-sws.org/~viktor/papers…</a>

казалось бы при чем тут JS? а вот при чем: <a href="https://t.co/IUSSwZcNwO">docs.google.com/document/d/1ND…</a>

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Вячеслав, немного не по теме, но всё же... Что вы думаете о реализациях виртуального дома в js? Есть ли з…

.<a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> на мой взгляд за ними есть настоящее, 

кто знает, что будет в будущем? может веб умрет, может DOM станет легковесным

.<a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> а тема у нас JS и все-все-все, так что любой вопрос по теме, даже если я на него ответа не знаю :)

## Вторник <small>78 твитов</small>

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тогда как JS стать лучше/быстрее? В чем слабые места современных движков?

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> я бы сказал, что самое слабое место современных движков это непредсказуемость производительности

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> классический пример был с Object.freeze: долгое время в V8 замороженные объекты неожиданно были значительно медленнее обычных

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> Object.freeze починили, но он хорошо подчеркивает суть - что в бенчмарках не встречается, то имеет случайную производительность

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> поэтому я считаю, что JS движки нынче должны развиваться в ширину, а не продолжать копать яму, стоя на одном месте

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> вот допустим forEach очень медленный по сравнению с обычным for-loop. почему медленный? "потому что гладиолус".

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> можно немного подробнее про ширину?)

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> или пример с accessors который я вчера твитнул - можно сделать Clash случай таким же быстрым как NoClash.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> или Object.defineProperty / Object.prototype.hasOwnProperty они не очень-то быстрые, а можно сделать быстрыми

в JS сообществе очень популярно изобретать велосипеды, вот и для меня это самый удобный способ добраться до работы <a href="http://t.co/UqqXgBfnKc">pic.twitter.com/UqqXgBfnKc</a>

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> реализация forEach внутри отличается от for-loop? Почему бы JIT не инлайнить forEach в for-loop.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> forEach реализован через for-loop <a href="https://t.co/cVodtJAkdb">github.com/v8/v8-git-mirr…</a>

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> проблема как раз в том, что никто пока не озаботился тем, чтобы forEach инлайнился и все лишнее оптимизировалось в никуда

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> я для этого как раз написал тулзу -&gt; <a href="http://t.co/pHZEWPybDb">mrale.ph/irhydra/2/</a>, там флаги и инструкции на первой странице

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Как можно посмотреть оптимизированный код в рантайме?

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть будущее у компиляции LLVM-кода под браузеры, asm.js — как нового ассемблера и js на уровне железа? ht<a href="https://t.co/W7KlmcAEM8">destroyallsoftware.com/talks/the-birt…</a>

.<a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> asm.js - весьма неполноценный. и мне кажется весьма странным решение "прятать" байткод внутри JSкода

.<a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> все мое отношение к нему было выражено 2 года назад <a href="http://t.co/Qq1paUkVvf">mrale.ph/blog/2013/03/2…</a> и почти не изменилось с тех пор.

.<a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> однако веб достаточно странная штука. тут часто побеждает популизм и политика, а не нормальные технические решения.

RT <a href="https://twitter.com/dosyara" title="Sergey Maksimov">@dosyara</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> интересно, какие термины используют англоязычные разработчики для велосипеда, костыля и всякой упячки?

.<a href="https://twitter.com/dosyara" title="Sergey Maksimov">@dosyara</a> костыль можно так и переводить "crutch". "изобретать велосипед" ~ "reinvent the wheel", все универсальное :)

.<a href="https://twitter.com/dosyara" title="Sergey Maksimov">@dosyara</a> еще близкий аналог русского "костыля", это "kludge" (a workaround or quick-and-dirty solution that is clumsy, inelegant)

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В FF Nightly реализованы типизированные объекты <a href="http://t.co/l0Gtje43ik">wiki.ecmascript.org/doku.php?id=ha…</a> Нужна ли в JS статическая типизация?

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> типизированные объекты не привносят статической типизации в язык, поэтому вопрос не совсем понятен

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> еще не совсем понятен смысл слова "нужна", кому нужна? у мощных статических систем типов есть свои преимущества.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> но если я сейчас начну о них рассуждать, то я неизбежно скачусь в рассуждения о вкусе и личных предпочтениях.

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Добавление typed objects и других типизированных структур как-то повлияет на ежедневную разработку?..

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> повлияет, если ваша ежедневная разработка требует оптимизаций на уровне object layout &amp; memory locality :)

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> в остальных случаях JS VMных собственных оптимизаций, которые случаются сами по себе, должно хватать.

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> То есть веб-разработчику не стоит заморачиваться о таких вещах, а лучше исправлять свой обычный JS код? :)

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> прежде всего нужно писать нормальный код (не пренебрегая простейшими знаниями об алгоритмах) и continuous performance tracking

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> ... а не так что фигачить код скажем год, а потом спохватиться и начать бегать вокруг него пытаясь оптимизировать

RT <a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть ли в Dart AOT компиляция при компиляции в JS? Почему?

. <a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a> Dart в JS компиляция по определению AOT, потому что она проиходит один раз во время сборки проекта.

. <a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a> если эту компиляцию делать не AOT, а "JIT" на стороне клиента то получается нужно весь Dart код посылать с зависимостями

. <a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a> выглядит не очень эффективно.

.<a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a> хотя этот подход было бы интересно попробовать и написать такой JIT, у думаю пиковую производительньсть было бы проще достичь

.<a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a> но и прогревать его пришлось бы паяльной лампой. хороший пример - это pypy.js <a href="http://t.co/XxZ2zfmnh5">arewepythonyet.com</a>

.<a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a> [впрочем у pypy.js большой overhead как раз из-за того, что они используют pypy скомпилированный emscripten]

. <a href="https://twitter.com/kanterov" title="Gleb Kanterov">@kanterov</a> [руками бы писать было дольше и сложнее, но и overhead был бы меньше]

RT <a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Rust или Go? Что тебе больше нравится и что станет мейнстримом (и станет ли)?

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> о обоих языков есть прикольные фичи и недостатки, например, у Go бедная система типов - а у Rust сильно уж замороченная.

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> я вообще к языкам программирования (за исключением русского языка) отношусь без особого фанатизма. молоток он нужен чтобы стучать

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> поэтому если стоит выбор в вакууме между Rust и Go, то я предпочту съесть еще мягких французских булок и выпить чаю

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> в будущем число языков программирования только продолжит расти поэтому понятие mainstream станет размываться

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> я думаю вместо mainstream нужно рассуждать о "самоподдерживаемости"

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> достаточен ли размер языкового community для обеспечения всех потребностей оного в велосипедах и прочих фреймворках

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> есть ли кому подхватить флаг, если разработчики компилятора попадут под автобус дружно?

.<a href="https://twitter.com/raxpost" title="Роман Роман">@raxpost</a> мне кажется и Go, и Rust хоть и имеют большие растущие community, все еще уязвимы перед оным автобусом-языконенавистником.

RT <a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что по поводу оптимизаций в V8 для apply, bind или call. Раньше видел что call быстрее, потом apply, а потом bin…

.<a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> зависит от ситуации. но bind действительно самый медленный из всех, потому что его никто не разгоняет :(

.<a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> для foo.call() были не так давно реализованы оптимизации в Crankshaft, поэтому в теории он сейчас должен быть самым быстрым

.<a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> паттерн foo.apply(x, arguments) внутри оптимизируемых функций тоже быстрый.

.<a href="https://twitter.com/GrantedN" title="Alex Grand">@GrantedN</a> в неоптимизированном случае call быстрее за счет того, что нет нужды выделять временный массив аргументов

еще случайный факт об о мне: в моем "музыка для программирования" плейлисте <a href="https://t.co/HC4sJzK4Hx">youtube.com/watch?v=_2xa46…</a> соседствует с <a href="https://t.co/o2j7IAUDAM">youtube.com/watch?v=foGkU6…</a>

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а что с иммутабельными данными в движках? Они используют преимущества неизменяемости для оптимизаций?

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> V8 не особо использует, могла бы и лучше. я уже приводил, пример с non-writable свойством на прототипе  <a href="https://t.co/zjVhLXC6mu">twitter.com/jsunderhood/st…</a>

. <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> с другой стороны если написать вот такой цикл <a href="https://t.co/VW3wBz4rdm">gist.github.com/mraleph/141f0e…</a>, то там o.x не будет вынесено за цикл, хотя могло бы.

. <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> одновременно в этом примере hidden class check будет убран - т.е. вроде как V8 понимает что объект immutable но вроде как и нет

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> числа, строки, булевы значения, замороженные объекты - больше ничего вроде нет иммутабельного

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> если объект "ускользает" из области компиляции, то компилятор обычно сдается и предполагает любые побочные эффекты

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> с другой стороны компиляторы пытаются отслеживать все это делать, escape analysis и т.д. т.е. это возможно в опр. пределах

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> как объект может оттуда ускользнуть? Ведь весь код всёравно проходит через компилятор?

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> код обычно проходит через компилятор не весь сразу (это было бы слишком долго) а "кусками" <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> плюс в современных JS VM несколько компиляторов - все начинается с тупого, который почти ничего не оптимизирует <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> а оптимизирующий компилятор приходит позже и оптимизирует только то "горячие" фрагменты  <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> в современных JS VM эти фрагменты = функции, т.е. оптимизирующий компилятор оптимизирует ф-ии отдельно друг от друга  <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> например в <a href="https://t.co/VW3wByMPOM">gist.github.com/mraleph/141f0e…</a> он придет оптимизировать foo и не сможет заинлайнить вызов bar   <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> поэтому вызов bar будет для него непрозрачен <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> поэтому если мы бы в bar передаваем что-то, то непонятно что bar  там с ним делает. <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> компиляторы не движутся в сторону оптимизации на более высоких уровнях? Вообще куда сейчас движутся компиляторы? к…

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> да это как-то давно изученная тема intraprocedural vs interprocedural analysis и interprocedural - медленно и память кушает

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> поэтому надо взвешивать стоимость и какой выхлоп получается. поэтому пока в JS мире intraprocedural + inlining работает ОК

. <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a> тот же asm.js и Strong Mode <a href="https://t.co/pFTvLGmy0R">developers.google.com/v8/experiments</a> у них ноги растут от нежелания делать interprocedural analysis

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот здесь <a href="https://t.co/PRrbihqVVA">github.com/babel/babel/is…</a> для оптимизации предлагают выносить try-catch в отдельную функцию, это правда…

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> Crankshaft не поддерживает try-catch по историческим причинам, поэтому горячим функциям это помогает быть оптимизированными.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> но у них должно быть нетривиальное тело (циклы там всякие), что бы прирост производительности был хорошо заметен

адаптивная оптимизация одной картинкой <a href="http://t.co/t3KiTwWaNO">pic.twitter.com/t3KiTwWaNO</a>

## Среда <small>51 твит</small>

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а я опять о насущном :)
Вячеслав, что вы думаете о реактивном подходе в построении сложных spa приложений…

.<a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> я думаю, что это функциональненько, и больше ничего :)

.<a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> я UI практически не делаю =&gt; нет опыта для сравнения. а когда делаю, то тяп-ляп на коленке (e.g. <a href="http://t.co/YdcYuNI7TC">mrale.ph/saga/</a> )

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Если бы это была основная архитектура, какими были бы современные ЯП? Или это не влияет?

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> насколько я знаю многие экспериментальные clockless CPU имели достаточно классические системы комманд

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> Charles Moore вон выпускает сейчас clockless CPU который по сути дела реализует Forth. ничего необычного :)

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> с другой стороны я стал сейчас искать последние новости --- оказывается IBM сделала <a href="http://t.co/P3Rw2ccJN2">en.wikipedia.org/wiki/TrueNorth</a>

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> я сомневаюсь что этот TrueNorth "a neuromorphic CMOS chip" программируется на каком-нибудь С++ или JS

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> нашел я, как они его программируют <a href="http://t.co/Df8vH3tOQn">dl1.frz.ir/FREE/papers-we…</a> вообщем это из другой реальности все.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> лучше уж посмотреть на Chuck Moore с его 144 core Forth CPU <a href="http://t.co/aZsC7BpmVL">infoq.com/presentations/…</a> это как-то ближе и понятнее

начнем утро головоломкой из разряда "и на старуху бывает проруха" <a href="http://t.co/Ca3uOLbNL9">jsperf.com/es6-map-vs-obj…</a>

... напихали в объект кучу свойств obj[keys[i]] = i и почему-то читать эти свойства быстрее c ключами из Object.keys(obj), а не из keys

RT <a href="https://twitter.com/vecmezoni" title="Alexander Inozemtsev">@vecmezoni</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> пользуешься ли ты IDE для C++? Xcode?

.<a href="https://twitter.com/vecmezoni" title="Alexander Inozemtsev">@vecmezoni</a> нет, я пишу код в Sublime Text - основная рабочая машина у меня на Linux.

никто что-то не спешит отгадывать мою головоломку, а я меж тем пью кофе из своей любимой JS-кружки <a href="http://t.co/mA61kNUbSs">pic.twitter.com/mA61kNUbSs</a>

RT <a href="https://twitter.com/23ydobemos" title="Ilya Zayats">@23ydobemos</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> о, расскажи про kinesis, как тебе?

.<a href="https://twitter.com/23ydobemos" title="Ilya Zayats">@23ydobemos</a> спас меня от боли в запястьях - пять лет использую, только радость :)

отгадка на загадку: дело в том, что obj[key] быстрее всего работает когда key - это интернализованная строка.

... массив keys содержит строки результаты конкатенации, которые в V8 не интернализованы, а objectKeys содержит интернализованные строки.

... потому что имена свойств внутри объекта V8 хранит в интернализованных виде -&gt; Object.keys(obj) возвращает массив интернализованных строк

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Что такое интернализованные строки? Без этого не понятно, откуда берется оптимизация.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> если A и B две интернализованные строки, то A === B только в том случае если A и B это один и тот же объект.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> иными словами интернализация строки - это поиск посимвольно равной ей строки в некотором глобальной таблице.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> подробнее: <a href="http://t.co/GQgeiFgqnK">en.wikipedia.org/wiki/String_in…</a>

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> некоторые реализации некотрых языков, наприер, Lua интернализуют все строки

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> V8 интернализует только некоторые, поэтому возможно ситуация что две посимвольно равные строки представлены разными объектами

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> здесь под "объектом" понимается объект уровня реализации, а не языка. из JavaScript это заметить нельзя

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Выходит, что V8 тогда не сравнивает посимвольно, а по внутреннему объекту, которому принадлежит строка?

. <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> разумеется где-то далеко внутри операции obj[key] V8 сравнивает строки посимвольно (иначе это была бы неправильная реализация)

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> но в начале, на fast path, она пробует найти ключ в словаре простым сравнением указателей.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> и вот как раз случай obj[objectKeys[i]] всегда попадает на этот fast path и никогда не идет в slowPath.

в сорцах chromium есть прикольные тулзы: вот, например, одна раскладывает бинарник на части и рисует с помощью d3 <a href="http://t.co/LK50ttKymi">pic.twitter.com/LK50ttKymi</a>

... можно кликая найти из какого файла пришла куча кода в бинарник, сама тулза здесь -&gt; <a href="https://t.co/tv1F2GsHhD">chromium.googlesource.com/chromium/src/+…</a>

RT <a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> Получается V8 копирует строки? Крайне не экономное расходование памяти.можно же владеть указате…

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> зависит от того, что вы вкладываете в понятие "копирует" и при каких условиях. допустим вы сложили две строки A + B

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> если бы V8 всегда интернила результат конкатенации ей надо было бы ее выполнить и пойти искать равную строку в таблице

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> вместо этого V8 на самом деле производит аналог rope - Const String фактически пару указателей (A, B) и не копирует ничего

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> таким образом экономится и память и время на копирование и интернинг.

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> конечно возможно такая ситуация, что вы производите много копий одной и той же строки "aaaa" + "bbbb" и храните их все

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> в этом случае интернинг бы существенно сэкономил память. но не ясно насколько это частный случай? скорее всего не очень.

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> поэтому ухудшать общий случай операции со строками - ради оптимизации частного не стоит.

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> программист может попрофилировать потребление памяти и сделать руками interning

.<a href="https://twitter.com/reklatsmasters" title="Дмитрий Цветцих">@reklatsmasters</a> вот какая-то такая логика стоит за не интернингом всех подряд строк. строковые литералы "a" и ключи всегда интернятся.

про строки (я от этих картинок даже прослезился, вспомнив как конспекты одногрупниц ксерил) <a href="http://t.co/bDzh96Kvkx">pic.twitter.com/bDzh96Kvkx</a>

RT <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> flatten-строка быстрее? Может какие-то конкретные операции? Стоит игра свеч? <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>

.<a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a> из flatten строки очевидно быстрее брать по индексу. этим чаще всего заморачиваться *не* надо - V8 сама их плющит

RT <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> после какого объема ключей деградирует производительность объекта?

.<a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a> на этот вопрос простого ответа нет - зависит от того как объект создан и что понимается под "производительностью объекта"

.<a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a> эвристики для перехода в словарное представление периодиечески меняются, поэтому конкретными цифрами заморачиваться нет смысла

RT <a href="https://twitter.com/dmitryshimkin" title="Dmitry Shimkin">@dmitryshimkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> насколько возможно и целесообразно заранее "прогревать" JIT для некого кода, который вероятно скоро будет в…

.<a href="https://twitter.com/dmitryshimkin" title="Dmitry Shimkin">@dmitryshimkin</a> прогревать можно, но для больших приложений сложно - и если у вас этот код горячий он и сам постепенно прогреется.

## Четверг <small>1 твит</small>

сегодня был самый безвопросый день - все JS программисты видимо готовятся к выходным

## Пятница <small>11 твитов</small>

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Правду пишут? <a href="https://t.co/XPSvqp14uE">twitter.com/roman01la/stat…</a>

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> да

внезапно натолкнулся на вопрос про таинственное замедление JS кода в Chrome <a href="http://t.co/Jmmgjn5dWZ">stackoverflow.com/questions/2942…</a>

... глянул на это дело в IRHydra по быстрому: оказывается это связано с тем, что сломалась одна оптимизация, которую я делал 3 года назад

... карма. вот так сделаешь оптимизацию, уйдешь в другой проект - а оптимизация все живет и живет своей жизнью и периодически ломается

... отгадка - что сломалось и как чинить, будет через час :)

добрался до написания ответа на утренний вопрос <a href="http://t.co/i2i5ofCsKH">stackoverflow.com/questions/2942…</a> и фикса этого бага <a href="https://t.co/vu1nCV2yin">codereview.chromium.org/1077113002/</a>

чем короче фикс, тем сложнее объяснить почему что-то в оптимизаторе не работает без него

выходные надвигаются, пора закоммитить что-нибудь и убежать.

не знаю как вас, а меня расстраивает, что я не могу написать [1,2,3,4].reduce(Math.max) в JS

ну т.е. я, конечно, могу написать, но толку с этого особо не будет.

## Воскресенье <small>26 твитов</small>

окей сегодня последний день моего задумчивого молчания в этом твиттере

я мог бы набросить под конец, признавшись, что я не особо-то люблю JavaScript, ну да всем это и так известно :)

тут как-то купил пельмени в магазине; вот покупные пельмени - это как готовый язык программирования, а самодельные - это когда сам написал

... хочу самодельных пельменей и свой язык программирования - но времени нет

RT <a href="https://twitter.com/aod_toxic" title="Leon Yeromin">@aod_toxic</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не встречал людей в зравом рассудке, которые его любят. Он объективно очень плох.

продолжая тему пельменей - у покупных пельменей внутри сплошной NaM (Not-a-Meat), он получается если сложить говядину с undefined.

стоит ли сделать digest из всех технических вопросов, на которые я ответил? (исключая секретные рецепты моей любимой еды)

<a href="http://t.co/VMNURsiyrq">stefan-marr.de/papers/pldi-ma…</a> &lt;- скоро все смогут писать быстрые виртуальные машины на коленке, поэтому надо рубить бабло пока эта тема горячая

я думаю если устану писать код, напишу книгу "Еда и Программирование"

вот допустим гречка, столь любимая на просторах нашей необъятной родины, это очевидная метафора на Pascal.

на тебя одинаково странно смотрят, когда ты говоришь "я ем гречку" и "я пишу на Паскале"

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а что насчёт C++ и Go?

.<a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> C++ - это Доширак, ты его заварил - все вокруг умерли, а ты один счастливый сидишь и кушаешь обжигаясь

.<a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> а Go... овсянная каша? очень просто и полезно для желудка, если от С++ у тебя язва.

окей, всех с прошедшей неделей, поднимаю бокал за вас, пишущих на JS без страха и сомнений <a href="http://t.co/wBI9t4bDxP">pic.twitter.com/wBI9t4bDxP</a>

вот краткое содержание недели <a href="http://t.co/mtCaGVM1Am">mrale.ph/blog/2015/04/1…</a>, ловите меня на <a href="http://t.co/8NGUcgwQ1w">mrale.ph</a> и в основном твиттере <a href="https://twitter.com/mraleph" title="Vyacheslav Egorov">@mraleph</a>. всем пока!

и еще, смотрите на языки программирования за пределами JS: C++, Haskell, Rust, Go, C#, Lua, Dart, OCaml, Clojure, Agda, всёвсёвсё

это не особо-то полезно в рамках тотальной тирании JS в вебе, но чего тираны всегда боятся? ЗНАНИЙ.

знания расширяют угол обзора... кто видел Erlang, тот на колбэки смотрит косо, хоть Erlang в остальном и как-то пффффф

а когда угол обзора расширяется - то это можно и к тому языку на котором пишешь применить. вот.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> java, php, python, ruby :)

.<a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> да, на все надо смотреть. на PHP надо смотреть, чтобы понять как не надо делать :) *набросил и убежал*

на часах 11. хочу еще набросить - пока не пробило 12 и пароль не отобрали. многие думают, что в программировании главное - писать код.

мне же кажется, что в программировании главное - это хорошо подумать и ничего не написать... ненаписанный код = несломанные тесты, ляпота!

вот еще интересный вопрос: есть сериалы про агентов FBI, есть сериалы про врачей, а есть ли сериалы про программистов?

последний сериал про программистов, который я видел выглядел как-то так (главный программист в центре \o/) <a href="http://t.co/DU16J3yTsH">pic.twitter.com/DU16J3yTsH</a>

## Понедельник <small>1 твит</small>

всё, 12:07, мой пароль превратился в тыкву. вот вам стихотворение Фернандо Пессоа напоследок <a href="http://t.co/M5RlwAJLYW">pic.twitter.com/M5RlwAJLYW</a>
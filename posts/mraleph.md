# mraleph

_12 апреля 2015_

## Воскресенье <small>1 твит</small>

<div class="tweet">

всем привет! меня зовут Вячеслав и эту неделю я вещаю из под капота JS - здесь темно и повсюду C++... отвечаю на вопросы про V8 и перформанс
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/584858429212258304">23:21</a>

</div>

## Понедельник <small>14 твитов</small>

<div class="tweet">

утро понедельника начинается с чтения LLVM Weekly - на прошлой неделе ничего интересного, впрочем, не случилось [llvmweekly.org/issue/66](http://t.co/pwYE9sH0wx "http://llvmweekly.org/issue/66")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585009057179762688">9:20</a>

</div>

<div class="tweet">

RT [@GrantedN](https://twitter.com/GrantedN "Alex Grand"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") появились ли какие-то отпимизации в V8, связанные с defineProperty? Почему U\*Array \(UInt32\) не содержит всех мет…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585077550956859392">13:52</a>

</div>

<div class="tweet">

. [@GrantedN](https://twitter.com/GrantedN "Alex Grand") typedarrays исторически не были array, поэтому у них другой прототип; в ES6 все методы типа map будут  [people.mozilla.org/~jorendorff/es…](https://t.co/aHzphLndYT "https://people.mozilla.org/~jorendorff/es6-draft.html#sec-%typedarray%.prototype")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585078076368879617">13:54</a>

</div>

<div class="tweet">

. [@GrantedN](https://twitter.com/GrantedN "Alex Grand") про defineProperty: зависит от того, что именно вас интересует: сам defineProperty или проперти им созданные?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585078375229878273">13:55</a>

</div>

<div class="tweet">

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") если сам defineProperty то он как был медленный и печальный, так примерно пока и остается
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585078522236035072">13:56</a>

</div>

<div class="tweet">

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") с другой стороны если определять им non-writable свойство на прототипе какого-нибудь объекта то это используется в оптимизациях
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585078802616819712">13:57</a>

</div>

<div class="tweet">

а вот демка скрытой проблемы с производительностью при использовании accessors [mrale.ph/irhydra/2/\#gis…](http://t.co/csgOqPM7gA "http://mrale.ph/irhydra/2/#gist:88ef8e9f7d8b17090777") / [gist.github.com/mraleph/88ef8e…](https://t.co/Eh40zPeg8f "https://gist.github.com/mraleph/88ef8e9f7d8b17090777")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585088192937857024">14:34</a>

</div>

<div class="tweet">

... смотреть надо что заинлайнилось во вкладке Source [pic.twitter.com/lZpppn1cY2](http://t.co/lZpppn1cY2)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585088480717500420">14:35</a>

</div>

<div class="tweet">

на работе сегодня выходной, тут в твиттере - тоже. чувствую себя героем фантастического рассказа "Позвоните!" [fantlab.ru/work65898](http://t.co/FS75JrG7ne "http://fantlab.ru/work65898")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585115093924458497">16:21</a>

</div>

<div class="tweet">

обнаружил у себя в рюкзаке распечатку статьи "Common Compiler Optimisations are Invalid in the C11 Memory Model" [mpi-sws.org/~viktor/papers…](https://t.co/ZbinSfue8v "https://mpi-sws.org/~viktor/papers/popl2015-c11comp.pdf")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585162278842081280">19:28</a>

</div>

<div class="tweet">

казалось бы при чем тут JS? а вот при чем: [docs.google.com/document/d/1ND…](https://t.co/IUSSwZcNwO "https://docs.google.com/document/d/1NDGA_gZJ7M7w1Bh8S0AoDyEqwDdRh4uSoTPSNn77PFk/view")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585162708095520769">19:30</a>

</div>

<div class="tweet">

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вячеслав, немного не по теме, но всё же... Что вы думаете о реализациях виртуального дома в js? Есть ли з…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585185217276698624">21:00</a>

</div>

<div class="tweet">

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") на мой взгляд за ними есть настоящее,   
  
кто знает, что будет в будущем? может веб умрет, может DOM станет легковесным
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585185250671726592">21:00</a>

</div>

<div class="tweet">

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") а тема у нас JS и все-все-все, так что любой вопрос по теме, даже если я на него ответа не знаю :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585185669208768514">21:01</a>

</div>

## Вторник <small>88 твитов</small>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тогда как JS стать лучше/быстрее? В чем слабые места современных движков?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585352376363651073">8:04</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") я бы сказал, что самое слабое место современных движков это непредсказуемость производительности
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585352716467085314">8:05</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") классический пример был с Object.freeze: долгое время в V8 замороженные объекты неожиданно были значительно медленнее обычных
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585353122115117056">8:07</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Object.freeze починили, но он хорошо подчеркивает суть - что в бенчмарках не встречается, то имеет случайную производительность
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585353433529589760">8:08</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") поэтому я считаю, что JS движки нынче должны развиваться в ширину, а не продолжать копать яму, стоя на одном месте
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585353784555077632">8:09</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") вот допустим forEach очень медленный по сравнению с обычным for-loop. почему медленный? "потому что гладиолус".
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585372287077081089">9:23</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") можно немного подробнее про ширину?\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585372308040245248">9:23</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") или пример с accessors который я вчера твитнул - можно сделать Clash случай таким же быстрым как NoClash.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585372716599005184">9:25</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") или Object.defineProperty / Object.prototype.hasOwnProperty они не очень-то быстрые, а можно сделать быстрыми
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585373015292178432">9:26</a>

</div>

<div class="tweet">

в JS сообществе очень популярно изобретать велосипеды, вот и для меня это самый удобный способ добраться до работы [pic.twitter.com/UqqXgBfnKc](http://t.co/UqqXgBfnKc)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585375856207515648">9:37</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") реализация forEach внутри отличается от for-loop? Почему бы JIT не инлайнить forEach в for-loop.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585382093485637632">10:02</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") forEach реализован через for-loop [github.com/v8/v8-git-mirr…](https://t.co/cVodtJAkdb "https://github.com/v8/v8-git-mirror/blob/ba41489da55a3484ceb5ac84c07de546578a2161/src/array.js#L1176-L1205")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585382174658056192">10:02</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") проблема как раз в том, что никто пока не озаботился тем, чтобы forEach инлайнился и все лишнее оптимизировалось в никуда
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585382719770783744">10:04</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") я для этого как раз написал тулзу -&gt; [mrale.ph/irhydra/2/](http://t.co/pHZEWPybDb "http://mrale.ph/irhydra/2/"), там флаги и инструкции на первой странице
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585382973274460160">10:05</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как можно посмотреть оптимизированный код в рантайме?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585382984011935745">10:05</a>

</div>

<div class="tweet">

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть будущее у компиляции LLVM-кода под браузеры, asm.js — как нового ассемблера и js на уровне железа? ht[destroyallsoftware.com/talks/the-birt…](https://t.co/W7KlmcAEM8 "https://www.destroyallsoftware.com/talks/the-birth-and-death-of-javascript")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585383152044105728">10:06</a>

</div>

<div class="tweet">

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") asm.js - весьма неполноценный. и мне кажется весьма странным решение "прятать" байткод внутри JSкода
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585383779117727744">10:09</a>

</div>

<div class="tweet">

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") все мое отношение к нему было выражено 2 года назад [mrale.ph/blog/2013/03/2…](http://t.co/Qq1paUkVvf "http://mrale.ph/blog/2013/03/28/why-asmjs-bothers-me.html") и почти не изменилось с тех пор.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585383955274268673">10:09</a>

</div>

<div class="tweet">

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") однако веб достаточно странная штука. тут часто побеждает популизм и политика, а не нормальные технические решения.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585384248804245504">10:10</a>

</div>

<div class="tweet">

RT [@dosyara](https://twitter.com/dosyara "Sergey Maksimov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") интересно, какие термины используют англоязычные разработчики для велосипеда, костыля и всякой упячки?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585387467580305409">10:23</a>

</div>

<div class="tweet">

.[@dosyara](https://twitter.com/dosyara "Sergey Maksimov") костыль можно так и переводить "crutch". "изобретать велосипед" ~ "reinvent the wheel", все универсальное :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585388423449595904">10:27</a>

</div>

<div class="tweet">

.[@dosyara](https://twitter.com/dosyara "Sergey Maksimov") еще близкий аналог русского "костыля", это "kludge" \(a workaround or quick-and-dirty solution that is clumsy, inelegant\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585388811246501888">10:29</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В FF Nightly реализованы типизированные объекты [wiki.ecmascript.org/doku.php?id=ha…](http://t.co/l0Gtje43ik "http://wiki.ecmascript.org/doku.php?id=harmony:typed_objects") Нужна ли в JS статическая типизация?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585390833127596033">10:37</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") типизированные объекты не привносят статической типизации в язык, поэтому вопрос не совсем понятен
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585391092452982784">10:38</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") еще не совсем понятен смысл слова "нужна", кому нужна? у мощных статических систем типов есть свои преимущества.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585391478245031936">10:39</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") но если я сейчас начну о них рассуждать, то я неизбежно скачусь в рассуждения о вкусе и личных предпочтениях.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585391742230335488">10:40</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Добавление typed objects и других типизированных структур как-то повлияет на ежедневную разработку?..
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585395079998758912">10:53</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") повлияет, если ваша ежедневная разработка требует оптимизаций на уровне object layout &amp; memory locality :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585395443393294336">10:55</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") в остальных случаях JS VMных собственных оптимизаций, которые случаются сами по себе, должно хватать.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585395797400952832">10:56</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") То есть веб-разработчику не стоит заморачиваться о таких вещах, а лучше исправлять свой обычный JS код? :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585396489524006912">10:59</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") прежде всего нужно писать нормальный код \(не пренебрегая простейшими знаниями об алгоритмах\) и continuous performance tracking
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585396866545807360">11:01</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") ... а не так что фигачить код скажем год, а потом спохватиться и начать бегать вокруг него пытаясь оптимизировать
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585397145806733314">11:02</a>

</div>

<div class="tweet">

RT [@kanterov](https://twitter.com/kanterov "Gleb Kanterov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть ли в Dart AOT компиляция при компиляции в JS? Почему?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585405172949590016">11:34</a>

</div>

<div class="tweet">

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") Dart в JS компиляция по определению AOT, потому что она проиходит один раз во время сборки проекта.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585405429657776129">11:35</a>

</div>

<div class="tweet">

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") если эту компиляцию делать не AOT, а "JIT" на стороне клиента то получается нужно весь Dart код посылать с зависимостями
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585405783627665408">11:36</a>

</div>

<div class="tweet">

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") выглядит не очень эффективно.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585405859263569920">11:36</a>

</div>

<div class="tweet">

.[@kanterov](https://twitter.com/kanterov "Gleb Kanterov") хотя этот подход было бы интересно попробовать и написать такой JIT, у думаю пиковую производительньсть было бы проще достичь
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585406097365868544">11:37</a>

</div>

<div class="tweet">

.[@kanterov](https://twitter.com/kanterov "Gleb Kanterov") но и прогревать его пришлось бы паяльной лампой. хороший пример - это pypy.js [arewepythonyet.com](http://t.co/XxZ2zfmnh5 "http://arewepythonyet.com/")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585406608102072322">11:39</a>

</div>

<div class="tweet">

.[@kanterov](https://twitter.com/kanterov "Gleb Kanterov") \[впрочем у pypy.js большой overhead как раз из-за того, что они используют pypy скомпилированный emscripten\]
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585406970087215104">11:41</a>

</div>

<div class="tweet">

. [@kanterov](https://twitter.com/kanterov "Gleb Kanterov") \[руками бы писать было дольше и сложнее, но и overhead был бы меньше\]
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585407217316290560">11:42</a>

</div>

<div class="tweet">

RT [@raxpost](https://twitter.com/raxpost "Роман Роман"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Rust или Go? Что тебе больше нравится и что станет мейнстримом \(и станет ли\)?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585416925972422656">12:20</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") о обоих языков есть прикольные фичи и недостатки, например, у Go бедная система типов - а у Rust сильно уж замороченная.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585417500659179520">12:23</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") я вообще к языкам программирования \(за исключением русского языка\) отношусь без особого фанатизма. молоток он нужен чтобы стучать
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585417749595303936">12:24</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") поэтому если стоит выбор в вакууме между Rust и Go, то я предпочту съесть еще мягких французских булок и выпить чаю
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585418489999024131">12:26</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") в будущем число языков программирования только продолжит расти поэтому понятие mainstream станет размываться
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585418910255738880">12:28</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") я думаю вместо mainstream нужно рассуждать о "самоподдерживаемости"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585419593604325376">12:31</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") достаточен ли размер языкового community для обеспечения всех потребностей оного в велосипедах и прочих фреймворках
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585419754275524608">12:32</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") есть ли кому подхватить флаг, если разработчики компилятора попадут под автобус дружно?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585419931220635648">12:32</a>

</div>

<div class="tweet">

.[@raxpost](https://twitter.com/raxpost "Роман Роман") мне кажется и Go, и Rust хоть и имеют большие растущие community, все еще уязвимы перед оным автобусом-языконенавистником.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585420434000195584">12:34</a>

</div>

<div class="tweet">

RT [@GrantedN](https://twitter.com/GrantedN "Alex Grand"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что по поводу оптимизаций в V8 для apply, bind или call. Раньше видел что call быстрее, потом apply, а потом bin…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585431632670236673">13:19</a>

</div>

<div class="tweet">

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") зависит от ситуации. но bind действительно самый медленный из всех, потому что его никто не разгоняет :\(
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585431640522018817">13:19</a>

</div>

<div class="tweet">

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") для foo.call\(\) были не так давно реализованы оптимизации в Crankshaft, поэтому в теории он сейчас должен быть самым быстрым
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585431910689693696">13:20</a>

</div>

<div class="tweet">

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") паттерн foo.apply\(x, arguments\) внутри оптимизируемых функций тоже быстрый.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585432038653693952">13:20</a>

</div>

<div class="tweet">

.[@GrantedN](https://twitter.com/GrantedN "Alex Grand") в неоптимизированном случае call быстрее за счет того, что нет нужды выделять временный массив аргументов
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585432515621613568">13:22</a>

</div>

<div class="tweet">

еще случайный факт об о мне: в моем "музыка для программирования" плейлисте [youtube.com/watch?v=\_2xa46…](https://t.co/HC4sJzK4Hx "https://www.youtube.com/watch?v=_2xa46ytiSs") соседствует с [youtube.com/watch?v=foGkU6…](https://t.co/o2j7IAUDAM "https://www.youtube.com/watch?v=foGkU6x3eSE")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585434816952270848">13:31</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что с иммутабельными данными в движках? Они используют преимущества неизменяемости для оптимизаций?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585434997999407104">13:32</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") V8 не особо использует, могла бы и лучше. я уже приводил, пример с non-writable свойством на прототипе  [twitter.com/jsunderhood/st…](https://t.co/zjVhLXC6mu "https://twitter.com/jsunderhood/status/585078802616819712")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585436073217634304">13:36</a>

</div>

<div class="tweet">

. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") с другой стороны если написать вот такой цикл [gist.github.com/mraleph/141f0e…](https://t.co/VW3wBz4rdm "https://gist.github.com/mraleph/141f0ed76bd24fb28243"), то там o.x не будет вынесено за цикл, хотя могло бы.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585436636206465024">13:39</a>

</div>

<div class="tweet">

. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") одновременно в этом примере hidden class check будет убран - т.е. вроде как V8 понимает что объект immutable но вроде как и нет
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585436845858807808">13:39</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") числа, строки, булевы значения, замороженные объекты - больше ничего вроде нет иммутабельного
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585437564322115585">13:42</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") если объект "ускользает" из области компиляции, то компилятор обычно сдается и предполагает любые побочные эффекты
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585437855767519232">13:43</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") с другой стороны компиляторы пытаются отслеживать все это делать, escape analysis и т.д. т.е. это возможно в опр. пределах
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585438100480008193">13:44</a>

</div>

<div class="tweet">

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") как объект может оттуда ускользнуть? Ведь весь код всёравно проходит через компилятор?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585438280365305857">13:45</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") код обычно проходит через компилятор не весь сразу \(это было бы слишком долго\) а "кусками" [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585438482593644545">13:46</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") плюс в современных JS VM несколько компиляторов - все начинается с тупого, который почти ничего не оптимизирует [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585438686365491200">13:47</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") а оптимизирующий компилятор приходит позже и оптимизирует только то "горячие" фрагменты  [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585438864275275776">13:47</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") в современных JS VM эти фрагменты = функции, т.е. оптимизирующий компилятор оптимизирует ф-ии отдельно друг от друга  [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585439161311764482">13:49</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") например в [gist.github.com/mraleph/141f0e…](https://t.co/VW3wByMPOM "https://gist.github.com/mraleph/141f0ed76bd24fb28243") он придет оптимизировать foo и не сможет заинлайнить вызов bar   [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585439464803049474">13:50</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") поэтому вызов bar будет для него непрозрачен [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585439712174833664">13:51</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") поэтому если мы бы в bar передаваем что-то, то непонятно что bar  там с ним делает. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585439847667671040">13:51</a>

</div>

<div class="tweet">

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") компиляторы не движутся в сторону оптимизации на более высоких уровнях? Вообще куда сейчас движутся компиляторы? к…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585440023606099968">13:52</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") да это как-то давно изученная тема intraprocedural vs interprocedural analysis и interprocedural - медленно и память кушает
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585440504701186048">13:54</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") поэтому надо взвешивать стоимость и какой выхлоп получается. поэтому пока в JS мире intraprocedural + inlining работает ОК
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585440875938877441">13:55</a>

</div>

<div class="tweet">

. [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") тот же asm.js и Strong Mode [developers.google.com/v8/experiments](https://t.co/pFTvLGmy0R "https://developers.google.com/v8/experiments") у них ноги растут от нежелания делать interprocedural analysis
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585441550391451648">13:58</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот здесь [github.com/babel/babel/is…](https://t.co/PRrbihqVVA "https://github.com/babel/babel/issues/1176") для оптимизации предлагают выносить try-catch в отдельную функцию, это правда…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585441871494774784">13:59</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Crankshaft не поддерживает try-catch по историческим причинам, поэтому горячим функциям это помогает быть оптимизированными.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585442072955641856">14:00</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") но у них должно быть нетривиальное тело \(циклы там всякие\), что бы прирост производительности был хорошо заметен
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585442258524233728">14:01</a>

</div>

<div class="tweet">

адаптивная оптимизация одной картинкой [pic.twitter.com/t3KiTwWaNO](http://t.co/t3KiTwWaNO)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585443020692160512">14:04</a>

</div>

<div class="tweet">

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а я опять о насущном :\)  
Вячеслав, что вы думаете о реактивном подходе в построении сложных spa приложений…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585563493132345345">22:03</a>

</div>

<div class="tweet">

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") я думаю, что это функциональненько, и больше ничего :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585563902605418497">22:04</a>

</div>

<div class="tweet">

.[@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") я UI практически не делаю =&gt; нет опыта для сравнения. а когда делаю, то тяп-ляп на коленке \(e.g. [mrale.ph/saga/](http://t.co/YdcYuNI7TC "http://mrale.ph/saga/") \)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585564472116436993">22:07</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если бы это была основная архитектура, какими были бы современные ЯП? Или это не влияет?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585570067116593152">22:29</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") насколько я знаю многие экспериментальные clockless CPU имели достаточно классические системы комманд
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585570463088308224">22:30</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Charles Moore вон выпускает сейчас clockless CPU который по сути дела реализует Forth. ничего необычного :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585570810615750656">22:32</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") с другой стороны я стал сейчас искать последние новости --- оказывается IBM сделала [en.wikipedia.org/wiki/TrueNorth](http://t.co/P3Rw2ccJN2 "http://en.wikipedia.org/wiki/TrueNorth")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585571941626556417">22:36</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") я сомневаюсь что этот TrueNorth "a neuromorphic CMOS chip" программируется на каком-нибудь С++ или JS
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585572318887411712">22:38</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") нашел я, как они его программируют [dl1.frz.ir/FREE/papers-we…](http://t.co/Df8vH3tOQn "http://dl1.frz.ir/FREE/papers-we-love/new_paradigms/cognitive-computing-programming-paradigm-corelet-language.pdf") вообщем это из другой реальности все.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585573890379882497">22:44</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") лучше уж посмотреть на Chuck Moore с его 144 core Forth CPU [infoq.com/presentations/…](http://t.co/aZsC7BpmVL "http://www.infoq.com/presentations/power-144-chip") это как-то ближе и понятнее
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585574267833704448">22:45</a>

</div>

## Среда <small>41 твит</small>

<div class="tweet">

начнем утро головоломкой из разряда "и на старуху бывает проруха" [jsperf.com/es6-map-vs-obj…](http://t.co/Ca3uOLbNL9 "http://jsperf.com/es6-map-vs-object-lookup")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585709511563993088">7:43</a>

</div>

<div class="tweet">

... напихали в объект кучу свойств obj\[keys\[i\]\] = i и почему-то читать эти свойства быстрее c ключами из Object.keys\(obj\), а не из keys
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585710907935891456">7:48</a>

</div>

<div class="tweet">

RT [@vecmezoni](https://twitter.com/vecmezoni "Alexander Inozemtsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пользуешься ли ты IDE для C++? Xcode?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585710956744990720">7:49</a>

</div>

<div class="tweet">

.[@vecmezoni](https://twitter.com/vecmezoni "Alexander Inozemtsev") нет, я пишу код в Sublime Text - основная рабочая машина у меня на Linux.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585711115440676864">7:49</a>

</div>

<div class="tweet">

никто что-то не спешит отгадывать мою головоломку, а я меж тем пью кофе из своей любимой JS-кружки [pic.twitter.com/mA61kNUbSs](http://t.co/mA61kNUbSs)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585759429003497472">11:01</a>

</div>

<div class="tweet">

RT [@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") о, расскажи про kinesis, как тебе?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585767449334784000">11:33</a>

</div>

<div class="tweet">

.[@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats") спас меня от боли в запястьях - пять лет использую, только радость :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585767838884958208">11:35</a>

</div>

<div class="tweet">

отгадка на загадку: дело в том, что obj\[key\] быстрее всего работает когда key - это интернализованная строка.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585805213082202113">14:03</a>

</div>

<div class="tweet">

... массив keys содержит строки результаты конкатенации, которые в V8 не интернализованы, а objectKeys содержит интернализованные строки.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585805502782840833">14:04</a>

</div>

<div class="tweet">

... потому что имена свойств внутри объекта V8 хранит в интернализованных виде -&gt; Object.keys\(obj\) возвращает массив интернализованных строк
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585806069903032321">14:07</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Что такое интернализованные строки? Без этого не понятно, откуда берется оптимизация.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585810594697240576">14:25</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") если A и B две интернализованные строки, то A === B только в том случае если A и B это один и тот же объект.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585811101411106817">14:27</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") иными словами интернализация строки - это поиск посимвольно равной ей строки в некотором глобальной таблице.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585811432119345153">14:28</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") подробнее: [en.wikipedia.org/wiki/String\_in…](http://t.co/GQgeiFgqnK "http://en.wikipedia.org/wiki/String_interning")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585811505834283008">14:28</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") некоторые реализации некотрых языков, наприер, Lua интернализуют все строки
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585811636595863553">14:29</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") V8 интернализует только некоторые, поэтому возможно ситуация что две посимвольно равные строки представлены разными объектами
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585811786768715777">14:29</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") здесь под "объектом" понимается объект уровня реализации, а не языка. из JavaScript это заметить нельзя
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585812094613909504">14:31</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Выходит, что V8 тогда не сравнивает посимвольно, а по внутреннему объекту, которому принадлежит строка?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585813829562540032">14:37</a>

</div>

<div class="tweet">

. [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") разумеется где-то далеко внутри операции obj\[key\] V8 сравнивает строки посимвольно \(иначе это была бы неправильная реализация\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585814091962445824">14:38</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") но в начале, на fast path, она пробует найти ключ в словаре простым сравнением указателей.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585814325144727553">14:39</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") и вот как раз случай obj\[objectKeys\[i\]\] всегда попадает на этот fast path и никогда не идет в slowPath.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585814529268916224">14:40</a>

</div>

<div class="tweet">

в сорцах chromium есть прикольные тулзы: вот, например, одна раскладывает бинарник на части и рисует с помощью d3 [pic.twitter.com/LK50ttKymi](http://t.co/LK50ttKymi)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585827870813073408">15:33</a>

</div>

<div class="tweet">

... можно кликая найти из какого файла пришла куча кода в бинарник, сама тулза здесь -&gt; [chromium.googlesource.com/chromium/src/+…](https://t.co/tv1F2GsHhD "https://chromium.googlesource.com/chromium/src/+/master/tools/binary_size")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585828162497552384">15:34</a>

</div>

<div class="tweet">

RT [@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") Получается V8 копирует строки? Крайне не экономное расходование памяти.можно же владеть указате…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585849574939566081">16:59</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") зависит от того, что вы вкладываете в понятие "копирует" и при каких условиях. допустим вы сложили две строки A + B
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585850196304781312">17:02</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") если бы V8 всегда интернила результат конкатенации ей надо было бы ее выполнить и пойти искать равную строку в таблице
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585850545677676547">17:03</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") вместо этого V8 на самом деле производит аналог rope - Const String фактически пару указателей \(A, B\) и не копирует ничего
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585850749575389184">17:04</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") таким образом экономится и память и время на копирование и интернинг.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585851001086865408">17:05</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") конечно возможно такая ситуация, что вы производите много копий одной и той же строки "aaaa" + "bbbb" и храните их все
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585851278338695168">17:06</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") в этом случае интернинг бы существенно сэкономил память. но не ясно насколько это частный случай? скорее всего не очень.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585851495205175296">17:07</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") поэтому ухудшать общий случай операции со строками - ради оптимизации частного не стоит.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585851663971385344">17:08</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") программист может попрофилировать потребление памяти и сделать руками interning
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585851862462640128">17:09</a>

</div>

<div class="tweet">

.[@reklatsmasters](https://twitter.com/reklatsmasters "Дмитрий Цветцих") вот какая-то такая логика стоит за не интернингом всех подряд строк. строковые литералы "a" и ключи всегда интернятся.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585852214704533505">17:10</a>

</div>

<div class="tweet">

про строки \(я от этих картинок даже прослезился, вспомнив как конспекты одногрупниц ксерил\) [pic.twitter.com/bDzh96Kvkx](http://t.co/bDzh96Kvkx)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585861134709829634">17:45</a>

</div>

<div class="tweet">

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") flatten-строка быстрее? Может какие-то конкретные операции? Стоит игра свеч? [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585873020993961985">18:33</a>

</div>

<div class="tweet">

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") из flatten строки очевидно быстрее брать по индексу. этим чаще всего заморачиваться \*не\* надо - V8 сама их плющит
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585873238301024256">18:33</a>

</div>

<div class="tweet">

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") после какого объема ключей деградирует производительность объекта?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585873680325947392">18:35</a>

</div>

<div class="tweet">

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") на этот вопрос простого ответа нет - зависит от того как объект создан и что понимается под "производительностью объекта"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585873837520265216">18:36</a>

</div>

<div class="tweet">

.[@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") эвристики для перехода в словарное представление периодиечески меняются, поэтому конкретными цифрами заморачиваться нет смысла
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585874118739943424">18:37</a>

</div>

<div class="tweet">

RT [@dmitryshimkin](https://twitter.com/dmitryshimkin "Dmitry Shimkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") насколько возможно и целесообразно заранее "прогревать" JIT для некого кода, который вероятно скоро будет в…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585874236880846848">18:37</a>

</div>

<div class="tweet">

.[@dmitryshimkin](https://twitter.com/dmitryshimkin "Dmitry Shimkin") прогревать можно, но для больших приложений сложно - и если у вас этот код горячий он и сам постепенно прогреется.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/585874469673107457">18:38</a>

</div>

## Четверг <small>3 твита</small>

<div class="tweet">

сегодня был самый безвопросый день - все JS программисты видимо готовятся к выходным
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586254038091575296">19:47</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Правду пишут? [twitter.com/roman01la/stat…](https://t.co/XPSvqp14uE "https://twitter.com/roman01la/status/586294394275389441")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586297300022124545">22:39</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") да
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586297385468502016">22:39</a>

</div>

## Пятница <small>9 твитов</small>

<div class="tweet">

внезапно натолкнулся на вопрос про таинственное замедление JS кода в Chrome [stackoverflow.com/questions/2942…](http://t.co/Jmmgjn5dWZ "http://stackoverflow.com/questions/29424013/strange-javascript-performance")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586448824744312833">8:41</a>

</div>

<div class="tweet">

... глянул на это дело в IRHydra по быстрому: оказывается это связано с тем, что сломалась одна оптимизация, которую я делал 3 года назад
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586449268954701824">8:42</a>

</div>

<div class="tweet">

... карма. вот так сделаешь оптимизацию, уйдешь в другой проект - а оптимизация все живет и живет своей жизнью и периодически ломается
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586449579756822528">8:44</a>

</div>

<div class="tweet">

... отгадка - что сломалось и как чинить, будет через час :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586449939825201152">8:45</a>

</div>

<div class="tweet">

добрался до написания ответа на утренний вопрос [stackoverflow.com/questions/2942…](http://t.co/i2i5ofCsKH "http://stackoverflow.com/questions/29424013/strange-javascript-performance/29562128#29562128") и фикса этого бага [codereview.chromium.org/1077113002/](https://t.co/vu1nCV2yin "https://codereview.chromium.org/1077113002/")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586514391656435712">13:01</a>

</div>

<div class="tweet">

чем короче фикс, тем сложнее объяснить почему что-то в оптимизаторе не работает без него
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586515351208329217">13:05</a>

</div>

<div class="tweet">

выходные надвигаются, пора закоммитить что-нибудь и убежать.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586572257302052864">16:51</a>

</div>

<div class="tweet">

не знаю как вас, а меня расстраивает, что я не могу написать \[1,2,3,4\].reduce\(Math.max\) в JS
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586612093190860800">19:29</a>

</div>

<div class="tweet">

ну т.е. я, конечно, могу написать, но толку с этого особо не будет.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/586612295847018497">19:30</a>

</div>

## Воскресенье <small>27 твитов</small>

<div class="tweet">

окей сегодня последний день моего задумчивого молчания в этом твиттере
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587225199801667584">12:06</a>

</div>

<div class="tweet">

я мог бы набросить под конец, признавшись, что я не особо-то люблю JavaScript, ну да всем это и так известно :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587226268829147136">12:10</a>

</div>

<div class="tweet">

тут как-то купил пельмени в магазине; вот покупные пельмени - это как готовый язык программирования, а самодельные - это когда сам написал
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587233817628401664">12:40</a>

</div>

<div class="tweet">

... хочу самодельных пельменей и свой язык программирования - но времени нет
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587234010209853441">12:41</a>

</div>

<div class="tweet">

RT [@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не встречал людей в зравом рассудке, которые его любят. Он объективно очень плох.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587238680663879681">12:59</a>

</div>

<div class="tweet">

продолжая тему пельменей - у покупных пельменей внутри сплошной NaM \(Not-a-Meat\), он получается если сложить говядину с undefined.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587262826307280896">14:35</a>

</div>

<div class="tweet">

стоит ли сделать digest из всех технических вопросов, на которые я ответил? \(исключая секретные рецепты моей любимой еды\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587266372230639616">14:49</a>

</div>

<div class="tweet">

[stefan-marr.de/papers/pldi-ma…](http://t.co/VMNURsiyrq "http://stefan-marr.de/papers/pldi-marr-et-al-zero-overhead-metaprogramming/") &lt;- скоро все смогут писать быстрые виртуальные машины на коленке, поэтому надо рубить бабло пока эта тема горячая
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587267141885374465">14:52</a>

</div>

<div class="tweet">

я думаю если устану писать код, напишу книгу "Еда и Программирование"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587270596519665664">15:06</a>

</div>

<div class="tweet">

вот допустим гречка, столь любимая на просторах нашей необъятной родины, это очевидная метафора на Pascal.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587271003920818177">15:08</a>

</div>

<div class="tweet">

на тебя одинаково странно смотрят, когда ты говоришь "я ем гречку" и "я пишу на Паскале"
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587271190575714304">15:08</a>

</div>

<div class="tweet">

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что насчёт C++ и Go?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587271475318693888">15:10</a>

</div>

<div class="tweet">

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") C++ - это Доширак, ты его заварил - все вокруг умерли, а ты один счастливый сидишь и кушаешь обжигаясь
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587271873244831744">15:11</a>

</div>

<div class="tweet">

.[@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") а Go... овсянная каша? очень просто и полезно для желудка, если от С++ у тебя язва.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587272345976451072">15:13</a>

</div>

<div class="tweet">

окей, всех с прошедшей неделей, поднимаю бокал за вас, пишущих на JS без страха и сомнений [pic.twitter.com/wBI9t4bDxP](http://t.co/wBI9t4bDxP)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587278063509106691">15:36</a>

</div>

<div class="tweet">

вот краткое содержание недели [mrale.ph/blog/2015/04/1…](http://t.co/mtCaGVM1Am "http://mrale.ph/blog/2015/04/12/jsunderhood.html"), ловите меня на [mrale.ph](http://t.co/8NGUcgwQ1w "http://mrale.ph") и в основном твиттере [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov"). всем пока!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587334589988868096">19:20</a>

</div>

<div class="tweet">

и еще, смотрите на языки программирования за пределами JS: C++, Haskell, Rust, Go, C\#, Lua, Dart, OCaml, Clojure, Agda, всёвсёвсё
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587338839573794816">19:37</a>

</div>

<div class="tweet">

это не особо-то полезно в рамках тотальной тирании JS в вебе, но чего тираны всегда боятся? ЗНАНИЙ.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587339131577065472">19:38</a>

</div>

<div class="tweet">

знания расширяют угол обзора... кто видел Erlang, тот на колбэки смотрит косо, хоть Erlang в остальном и как-то пффффф
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587339527796166656">19:40</a>

</div>

<div class="tweet">

а когда угол обзора расширяется - то это можно и к тому языку на котором пишешь применить. вот.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587339960086323201">19:42</a>

</div>

<div class="tweet">

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") java, php, python, ruby :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587340016197705728">19:42</a>

</div>

<div class="tweet">

.[@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") да, на все надо смотреть. на PHP надо смотреть, чтобы понять как не надо делать :\) \*набросил и убежал\*
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587340211098628096">19:43</a>

</div>

<div class="tweet">

на часах 11. хочу еще набросить - пока не пробило 12 и пароль не отобрали. многие думают, что в программировании главное - писать код.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587357844715999232">20:53</a>

</div>

<div class="tweet">

мне же кажется, что в программировании главное - это хорошо подумать и ничего не написать... ненаписанный код = несломанные тесты, ляпота!
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587358322371747841">20:55</a>

</div>

<div class="tweet">

вот еще интересный вопрос: есть сериалы про агентов FBI, есть сериалы про врачей, а есть ли сериалы про программистов?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587361729874677760">21:08</a>

</div>

<div class="tweet">

последний сериал про программистов, который я видел выглядел как-то так \(главный программист в центре \\o/\) [pic.twitter.com/DU16J3yTsH](http://t.co/DU16J3yTsH)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587362894683201536">21:13</a>

</div>

<div class="tweet">

всё, 12:07, мой пароль превратился в тыкву. вот вам стихотворение Фернандо Пессоа напоследок [pic.twitter.com/M5RlwAJLYW](http://t.co/M5RlwAJLYW)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587376973791498241">22:09</a>

</div>

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
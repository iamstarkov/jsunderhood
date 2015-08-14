# floatdrop

_05 июля 2015_

## Понедельник <small>49 твитов</small>

Йоханга! На этой неделе с вами <a href="https://twitter.com/floatdrop" title="Vsevolod S.">@floatdrop</a> - я занимаюсь разработкой на <a href="https://twitter.com/nodejs" title="node js">@nodejs</a> в <a href="https://twitter.com/yandex" title="Яндекс">@yandex</a> и немного фронтендом.

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> привет. расскажи про необычные кейсы использования nodejs? как долго пишешь на нем? смотришь ли на другие язы…

Кратчайший путь попасть в страну единорогов^W ES7+jsx в <a href="https://twitter.com/nodejs" title="node js">@nodejs</a> - это использовать require хук <a href="https://t.co/MJXbYbpPc6">babeljs.io/docs/usage/req…</a> Так я туда и попал.

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в проде это нормально?

RT <a href="https://twitter.com/hellbeast92" title="Александр Староверов">@hellbeast92</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в наше время, nodejs все еще больше редкость или уже нет?

RT <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> посоветуй ресурсы по nodejs, по которым а) нужно учиться с нуля б) следить за новостями в) получать инфу по Best…

"Как начать в NodeJS?" - тут нужно понимать три вещи: 1) JS - асинхронщина с callback's 2) CommonJS 3) Eventloop <a href="https://twitter.com/search?q=%23nodejsintro">#nodejsintro</a>

Про eventloop есть хороший доклад - <a href="http://t.co/twSBavXhfQ">youtube.com/watch?v=8aGhZQ…</a> (но на английском). <a href="https://twitter.com/search?q=%23nodejsintro">#nodejsintro</a>

Disclaimer: предыдущие ответы были как reply - их можно посмотреть, если кликнуть на ретвит (пардоньте, исправлюсь).

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> по первому пунту — <a href="https://t.co/dgCFOsZHMn">learn.javascript.ru/nodejs-screenc…</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кстати, об обратных вызовах, async/await — панацея?

Не уверен, что панацея, но это лучшее, что я видел для побега из callback hell. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Tip: Если вы погрязли в callback hell, то путь от туда лежит через Promise обертки, потом генераторы + <a href="https://t.co/4w1sA6xHbv">npmjs.com/package/co</a>, async/await

Доклад "Netflix JavaScript Talks - Version 7: The Evolution of JavaScript" хорошо показывает все эти ступеньки: <a href="http://t.co/kDUjkDMR8i">youtube.com/watch?v=DqMFX9…</a>

Сам я начинал вот с этого курса про NodeJS - короткие видео от <a href="https://t.co/Hvb4SejouW">youtube.com/playlist?list=…</a> <a href="https://twitter.com/iliakan" title="Ilya Kantor">@iliakan</a> - давно это было <a href="https://twitter.com/search?q=%23nodejsintro">#nodejsintro</a>

RT <a href="https://twitter.com/reklatsmasters" title="Dmitry Tsvettsikh">@reklatsmasters</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а как вы тестируете потребление памяти и профилируете на iojs?

Мы кладем приложение под танк - <a href="https://t.co/KJ9ZXMAz9Z">github.com/yandex/yandex-…</a> (up to 10k rps) и сразу становится ясно, течет оно или нет.

У нас были эксперименты с DTrace - но не полетело по разным причинам. Проще всего посмотреть heapdump через <a href="https://t.co/j9F19QOv5B">github.com/c4milo/node-we…</a>

Для серьезных разборок есть два способа - перезапустить процесс и "дебажить корку" в gdb или организовать remote debug (отключив процесс).

Пока я ищу доклад про gdb - посмотрите веселого дядьку из Yahoo - <a href="https://t.co/11kwmO7zT5">joyent.com/developers/vid…</a> (у joyent много интересных видео).

RT <a href="https://twitter.com/me_mrsum" title="Sum">@me_mrsum</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Йо! Я тут краем глаза прочел про callback hell. Как на счет машины состояний? В связке с AMD получается очень до…

Генераторы - это и есть машина состояний, но из за синтаксического сахара получается прямолинейный и читаемый код - <a href="https://t.co/4yvQ5XVAbh">babeljs.io/repl/#?experim…</a>

Похоже я перепутал mdb с gdb, но я был уверен, что и под ubuntu можно посмотреть корку - <a href="http://t.co/tOKqTqqt2I">joyent.com/developers/nod…</a> (<a href="https://t.co/CCnZ0eag0I">joyent.com/developers/vid…</a>)

RT <a href="https://twitter.com/miripiruni" title="Slava Oliyanchuk">@miripiruni</a>: <a href="https://twitter.com/search?q=%23TIL">#TIL</a> <a href="https://twitter.com/search?q=%23nodejs">#nodejs</a> <a href="http://t.co/VXj36cneyb">pic.twitter.com/VXj36cneyb</a>

Ресурсы, чтобы быть в курсе - <a href="https://twitter.com/echojs" title="Echo JS">@echojs</a> <a href="https://twitter.com/NodeJSWeekly" title="NodeJS Weekly">@NodeJSWeekly</a> <a href="https://twitter.com/JavaScriptDaily" title="JavaScript Live">@JavaScriptDaily</a> <a href="https://twitter.com/changelog" title="The Changelog">@changelog</a> плюс фолловить в twitter/github крутых чуваков <a href="https://twitter.com/search?q=%23nodejsintro">#nodejsintro</a>

RT <a href="https://twitter.com/roman_says_hi" title="Roman Kolpak">@roman_says_hi</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> список крутых чуваков еще хотелось бы узнать!

Hard to say, for example follow <a href="https://twitter.com/sindresorhus" title="Sindre Sorhus">@sindresorhus</a> and read awesome list (<a href="https://t.co/YAMmKXyXFe">github.com/sindresorhus/a…</a>). I learned a lot from his code 🐶

Есть вот такой список - <a href="http://t.co/v7x6gn1BTM">jstherightway.org/#whotofollow</a> У меня тактика такая - я подписываюсь на многих, а потом отписываюсь, как пойму, что не мое.

RT <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a>: <a href="https://twitter.com/roman_says_hi" title="Roman Kolpak">@roman_says_hi</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/ZwZPdjz901">uptodate.frontendrescue.org/#follow-cool-p…</a>, <a href="https://t.co/kskvj7Gukx">jsunderhood.ru</a>, <a href="https://t.co/HvezzzXcR9">medium.com/@dan_abramov/m…</a>. <a href="https://t.co/Li5DQA657L">twitter.com/edjafarov/list…</a>

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a> Хочу попросить рассказать как про обычные кейсы: для чего вы используете ноду? Это скорее микросервис…

Самый обычный кейс - рендеринг страниц для пользователя, чуть реже REST API (так как еще силен дух python в Я).

Иногда рендеринг переписывают с xslt и perl на NodeJS и (прости господи) BH/BEMHTML. Есть проекты, где вместо B* - angular/backbone/react.

Как не сложно понять по этой странице - <a href="https://t.co/QDnzUIQEJH">yandex.ru/jobs/vacancies…</a> зоопарк у нас еще тот, зато чем заняться найдется всем. :)

Мы медленно, но верно дрейфуем в сторону микросервисов, но сейчас есть очень монолитные части, от которых зависят все приложения.

Чтоб не получить леща — все, что опубликовано в этом твиттере не является официальной позицией Яндекса, а только моим личным видением. :D

RT <a href="https://twitter.com/MaxMykhailenko" title="Max Mykhailenko">@MaxMykhailenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Как переписывание на node сказывается на производительности?

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ещё вопросец: как вы обходите то, что eventloop может сожрать только одно ядро? Cluster, webworker-threads, по-дру…

RT <a href="https://twitter.com/xanf_ua" title="Illya Klymov">@xanf_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> 
Большой вопрос, но важный для меня. Можешь перечислить чем должен владеть человек, назовём его джуниором в js.

Когда нибудь я научусь отвечать не в reply на этом аккаунте. Видимо не сегодня :)

Есть вот список вопросов по JS, но для Front-end - <a href="https://t.co/q5zxkNMavn">github.com/h5bp/Front-end…</a> 

На собеседовании в Fb 2/3 от туда были. <a href="https://t.co/pToCLFzoGp">twitter.com/cakeinpanic/st…</a>

Вчера я узнал о стохастической оптимизации из лекции Дмитрия Ветрова - <a href="http://t.co/sXhXjsQ1s9">habrahabr.ru/company/yandex…</a> <a href="https://t.co/smJfj9x5Fz">twitter.com/iamale_ru/stat…</a>

Давайте сыграем в игру - "вот мой код год назад, а вот сейчас". Это очень интересный опыт у разработчика.

Я начну.

Год назад: <a href="https://t.co/zmBqmLQSJM">github.com/floatdrop/chnp…</a>

Сейчас:
<a href="https://t.co/onCnArasVo">github.com/floatdrop/chnp…</a>

Правила простые - разница во времени должна быть ~1 год (от полугода и дальше). Ну и должен быть виден прогресс! :) <a href="https://t.co/u7bvjRDYIh">twitter.com/dcromster/stat…</a>

У нас понедельник подходит к концу, по этому оставлю вам один коан про JS - <a href="http://t.co/k1DerGdveS">thecodelesscode.com/case/90</a> (там много классных).

RT <a href="https://twitter.com/addyosmani" title="Addy Osmani">@addyosmani</a>: Try <a href="http://t.co/IBxnopxQv5">es6katas.org</a> - learn new JS features by fixing unit tests. Includes Map, Arrows, Generators &amp; more: http://t.<a href="http://t.co/c0UAUxYhaJ">pic.twitter.com/c0UAUxYhaJ</a>

RT <a href="https://twitter.com/bessarabov" title="Ivan Bessarabov">@bessarabov</a>: Очень хороший текст про уровни разработчика <a href="http://t.co/5NKUZimz7m">mattbriggs.net/blog/2015/06/0…</a>

RT <a href="https://twitter.com/indutny" title="Fedor Indutny">@indutny</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/vlkosinov" title="Vlad Kosinov">@vlkosinov</a> свой форк npm на основе двух баз couchdb: private и public. Плюс специальный прокси. Можно было и прощ…

Самый простой способ - сделать heapdump и посмотреть что там накопилось (через <a href="https://t.co/j9F19QOv5B">github.com/c4milo/node-we…</a> например). <a href="https://t.co/7h9o4nnQ47">twitter.com/tenorak/status…</a>

## Вторник <small>29 твитов</small>

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Кстати, многие коаны переведены на русский <a href="http://t.co/yG9Qg0dhFS">thecodelesscode.com/case/90?lang=ru</a>

Многие компании поддерживают старые IE, так как его доля в трафике довольно большая. <a href="https://t.co/unUfJSHXsb">twitter.com/hellbeast92/st…</a>

Доброу утроу! Что будем делать сегодня?

Fav - пробежимся по нашему стеку
Rt - поговорим про разработку в целом

Ретвиты побеждают!

Сразу разделим программирование и разработку. Программировать обычно начинают гораздо раньше, чем разрабатывать.

Например я программировал в школе на Pascal, в универе на всем, что было в аптечке, в <a href="https://twitter.com/skbkontur" title="Контур.Сообщество">@skbkontur</a> на C#. И это не было разработкой.

Разработка начинается, когда вы несете ответственность за код и вам приходится поддерживать его. От O-сложности переходишь к сложности кода.

Пример уменьшения сложности кода - это использование YAGNI, но видео я потерял по нему, по этому вот другое - <a href="https://t.co/ifjK4RLCNN">youtube.com/watch?v=wf-BqA…</a>

YAGNI часто противопоставляют SOLID. Нужно уметь балансировать между ними, а иногда выходить с этой шкалы - <a href="http://t.co/Hu2Wli9xx7">habrahabr.ru/company/skbkon…</a>

Главное правило, к которому я пришел - ваш код должен быть "прост". Про "простой" (simple) код есть супер доклад - <a href="http://t.co/kaPxTFIIux">infoq.com/presentations/…</a>

Самый простой способ усложнить код - это не использовать сильные стороны языка. Например забыть, что JS это в функциональный язык (ООП ftw!)

Пруф - "James Coglan: Practical functional programming: pick two" <a href="http://t.co/loRk8q4HrB">2014.jsconf.eu/speakers/james…</a>

Я был студентом в Контуре. Очень сложно студенту сделать качественный скачок в разработке, ему надо помогать в этом. <a href="https://t.co/6UHCm8SS4k">twitter.com/mkazantsev/sta…</a>

В плане - есть функции первого порядка. Но раз спрашиваешь: <a href="http://t.co/IXqVHkYoH5">matt.might.net/articles/imple…</a> <a href="https://t.co/cguukPvEkl">twitter.com/chemikadze/sta…</a>

К особенностям JS можно отнести prototype-наследование и есть отличный доклад "The Better Parts" <a href="http://t.co/nW7RFHmX65">youtube.com/watch?v=bo36Mr…</a> - посмотрите.

Самый простой способ упростить код - разбить на подзадачи (см. п. 1), но не надо запихивать все в один супер-модуль. <a href="http://t.co/qKgoQsrHFr">pic.twitter.com/qKgoQsrHFr</a>

Для модулей в мире NodeJS есть npm. По слухам там есть все - от CMS (<a href="https://t.co/7jSAfWLecQ">npmjs.com/package/buckets</a>) до one-liners (<a href="https://t.co/XhqQcfUaOm">github.com/sindresorhus/m…</a>).

Как правильно разбивать задачи на модули - вопрос сложный, может быть вы подскажите. Я лишь оставлю вот эту статью - <a href="http://t.co/YsvTYOHhdB">joelonsoftware.com/articles/Leaky…</a>

А вот как взрастить в себе ответственность - тут есть проверенный способ: pet-project в open source.

При разработке N проектов, вы поймете - зачем вам тесты и документация. Через месяц контекст теряется полностью. <a href="https://t.co/NOLP1E8TW7">changelog.com/top-ten-reason…</a>

Pet-project хороший способ быть ABC - <a href="https://t.co/6ilUvMmFK8">medium.com/@davidbyttow/a…</a> - если им начинают пользоваться, то +опыт разработки. <a href="https://t.co/z6pze5vuZF">twitter.com/anton_davydov/…</a>

Наилучший pet-project (как и рабочий проект) - это тот, которым вы пользуетесь. Принцип Dogfood - <a href="http://t.co/9QRR4qSTx2">joelonsoftware.com/items/2004/04/…</a>

Про dogfooding (и не только) в хорошем видео "Meet the Makers: Ableton Developers at Work" - <a href="https://t.co/OBz58q8ywW">youtube.com/watch?v=tILlZR…</a>

У нас обед, а вам оставлю замечательное видео о запахах JS - <a href="http://t.co/sNs4eWdXhQ">elijahmanor.com/javascript-sme…</a>

Задавайте вопросы, буду рад! <a href="http://t.co/2VL4RmITVK">pic.twitter.com/2VL4RmITVK</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: Ищу фронтенд специалиста для анализа быстродействия страницы (проекта) и отчета по исправлению.
/cc <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Как ни странно - вопросов не возникло. Тогда вопрос слушателям - Какие советы по разработке вы бы дали себе несколько лет назад?

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> изучай функциональщину, пиши на языках с поддержкой системы типов. думай о бизнесе а не об инфраструктуре

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не верь на слово сеньорам, а тем более тимлидам, их знания есть локальный оптимум. Верь опыту и пр…

RT <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я бы посоветовал не бояться совершить ошибку. Меньше думать об имидже, больше о результате.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> следи за здоровьем!

## Среда <small>25 твитов</small>

Господа разработчики, поделитесь - как вы выкладываете код в продакшн? Мы вот как-то так: <a href="http://t.co/NKr0LZWmTZ">softwaremaniacs.org/blog/2007/08/1…</a> <a href="https://twitter.com/search?q=%23очемнаписатьто">#очемнаписатьто</a>

. <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a> зависит от уровня фронтендера. Вот отличный пример "за": "Mark DiMarco: User Interface Algorithms" <a href="http://t.co/h6NDEfzUk2">youtube.com/watch?v=90NsjK…</a>

RT <a href="https://twitter.com/slonoed" title="Dmitry M.">@slonoed</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у меня очень маленький продакшен, docker compose справляется

Сегодня, видимо, будет день случайных советов.

Если вы используете Express - никогда не вызывайте `next` после `res.send`. Я ставлю `return` после, иначе плавающая ошибка вам обеспечена.

. <a href="https://twitter.com/iamale_ru" title="Эль">@iamale_ru</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> так точно. Был пример из жизни про рефакторинг - вот упрощенная история: <a href="https://t.co/cw8A20Y8X8">gist.github.com/floatdrop/a5f4…</a>

Express очень гибкий (по сравнению с hapi), но в нем очень легко прострелить себе голову в большом проекте. <a href="https://t.co/blPu16K9lF">twitter.com/slonoed/status…</a>

. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> стреляют в основном из за двойного вызова `next` - который в свою очередь зовет `res.send` в не связных местах кода.

. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в koajs застрелиться сложнее - так втихушку будет переписываться this.body (если после него сделать yield next).

Преимущество генера^W koajs - flow-control в контроллере. Для Express мы свой di писали <a href="https://t.co/OT6dGwI3q7">github.com/floatdrop/expr…</a> vs <a href="https://t.co/3brT9BuqTz">gist.github.com/floatdrop/d316…</a>

Мне нравится JSON payload в <a href="http://t.co/zs4p8CmqM8">jwt.io</a> (похож на macaroons  <a href="http://t.co/4UHlcNYboT">research.google.com/pubs/pub41892.…</a>) - это удобно. <a href="https://t.co/yEHVpaSSgU">twitter.com/dcromster/stat…</a>

Удобнее `git push heroku master` я еще ничего не видел (<a href="https://t.co/4Jwh7Y2nTu">github.com/progrium/dokku</a> и <a href="http://t.co/jUx6xHoewq">thenewstack.io/docker-is-driv…</a>) <a href="https://t.co/VWTQVBx60I">twitter.com/beshkenadze/st…</a>

RT <a href="https://twitter.com/alekseykulikov_" title="Aleksey Kulikov">@alekseykulikov_</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в этом и суть, с помощью простой функции <a href="https://t.co/Gw5b4q3lXh">gist.github.com/alekseykulikov…</a> мы получаем мощь koa + инфраструктуру и …

RT <a href="https://twitter.com/alenacpp" title="Elena Sagalaeva">@alenacpp</a>: Уровни программистов: 
вы все знаете — Junior
вы поняли что ничего не знаете — Mid
вам все равно — Senior
<a href="http://t.co/Itl3OErC5T">bash.im/quote/429538</a>

RT <a href="https://twitter.com/jbrains" title="☕ J. B. Rainsberger">@jbrains</a>: Junior programmer's bookshelf: 90% APIs and programming languages; Senior programmer's bookshelf: 80% applied psychology.

Если вам нужно протестировать модуль работающий с fs и http, то mock-fs (<a href="https://t.co/kXWi3lM5Qf">github.com/tschaub/mock-fs</a>) и nock (<a href="https://t.co/kPsnld9cyb">github.com/pgte/nock</a>) в помощь.

Для валидации данных у меня всегда под рукой validator.js (<a href="https://t.co/rl3IkwykUC">github.com/chriso/validat…</a>) и joi (<a href="https://t.co/UYSCFGVpBJ">npmjs.com/package/joi</a>).

Для запросов по HTTP(s) мы, внезапно, используем got (<a href="http://t.co/ynhdHEC0QV">github.com/sindresorhus/g…</a>).

TLS и gzip лучше перекладывать на проксю, а chunked по ситуации (longpooling нельзя буфферизировать, etc...). <a href="https://t.co/GXqgVH1EMH">twitter.com/subzey/status/…</a>

У got правильная опция json (<a href="https://t.co/Di3ImPvfLu">github.com/request/reques…</a>), понятные ошибки, он минималистичный. <a href="https://t.co/BQzbHBugZ2">twitter.com/nDmitry/status…</a>

RT <a href="https://twitter.com/sindresorhus" title="Sindre Sorhus">@sindresorhus</a>: AMA - Why small focused modules <a href="https://t.co/kEpMRXMRS5">github.com/sindresorhus/a…</a>

Больше модулей хороших и разных! Для этого даже генератор есть <a href="https://t.co/TtS62hHJd9">github.com/sindresorhus/g…</a>

Есть версия и без yeoman - <a href="https://t.co/4QKBGImusM">github.com/sindresorhus/n…</a> <a href="https://t.co/BtqhaBqXvl">twitter.com/alexeyraspopov…</a>

. <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> мы yeoman используем для генерации проектов - довольно удобно.

В request гораздо больше встроенных фишек, что сказывается на его размере. Я не использую его внутри других модулей. <a href="https://t.co/I54J4BLgI4">twitter.com/ap_savin/statu…</a>

## Четверг <small>13 твитов</small>

RT <a href="https://twitter.com/Manglehaft" title="Mangle">@Manglehaft</a>: Clever, very clever <a href="http://t.co/85HbusAZX8">pic.twitter.com/85HbusAZX8</a>

RT <a href="https://twitter.com/ReactEurope" title="react-europe">@ReactEurope</a>: We're live <a href="https://t.co/WgDbIjIjwY">youtube.com/watch?v=Uclvvq…</a> <a href="https://twitter.com/search?q=%23reacteurope">#reacteurope</a>

Browserify и webpack уже классика - а я рекомендую посмотреть еще на <a href="http://t.co/v6GMOdicKP">jspm.io</a> (использует <a href="https://t.co/undAmqS8EZ">github.com/ModuleLoader/e…</a>)

Recap: Стили в JS упрощают разработку - изменения происходят в одном месте, а не в нескольких файлах. Используют они <a href="https://t.co/JDCSssrcI3">github.com/FormidableLabs…</a>

Recap: чувак написал <a href="https://t.co/0GUydDVn76">github.com/elierotenberg/…</a>

. <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a> в этом одна из главных фич jspm - он умеет это делать на лету, а умеет и bundle собрать, где все уже сделано.

. <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> они будут подключены. Посмотри <a href="http://t.co/uyQ3MaSlMv">m.youtube.com/watch?v=NpMnRi…</a> - ребята с react использую и все хорошо у них :)

. <a href="https://twitter.com/iSnifer" title="Anton Kuznetsov">@iSnifer</a> webpack для меня выстрелил, когда его начал facebook продвигать и развивать для React. До этого я webpack не понимал вообще.

RT <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у меня вопросик: товарищи фронтендеры, что вы думаете об использовании CoffeeScript в проектах? За/против. Когда м…

. <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a> imho от языка должна быть значительная польза (TS - система типов, CJS - dead code elimination). А от CS один сахар ¯\_(ツ)_/¯

. <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> ну, я со свечкой не стоял - но CS теряет позиции - это факт <a href="http://t.co/4f9eld1rkC">slideshare.net/NeilGreen1/typ…</a>, по этому я уже на него не смотрю.

RT <a href="https://twitter.com/ilyabirman" title="Ilya Birman">@ilyabirman</a>: Путин: «Иностранные фонды шарят по школам и сажают на гранты талантливых детей». Редкий случай, когда я согласен. Грант — г…

RT <a href="https://twitter.com/Kern_0" title="Арсений Максимов">@Kern_0</a>: Зацените отличные слайды от <a href="https://twitter.com/neilfeyn" title="Neil Green">@neilfeyn</a> на тему выбора между ES6/TypeScript/CoffeeScript.
<a href="http://t.co/sjIeNzgvUv">slideshare.net/NeilGreen1/typ…</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

## Пятница <small>7 твитов</small>

Для бенчмарков js кода я использую matcha (<a href="https://t.co/su9JXSVP3C">npmjs.com/package/matcha</a>) - не дает хирургическую точность, конечно. <a href="https://t.co/TZjE0vpL3P">twitter.com/iamstarkov/sta…</a>

Если нужно быстро замерить, сколько кусок кода выполняется в ms - то console.time вполне себе инструмент - <a href="https://t.co/pW1HSaKQRt">blog.mariusschulz.com/2013/11/22/mea…</a>

Коротко - бойлерплейт должен быть у команды и отвечать их требованиям, общий "на всех" делать не получится. <a href="https://t.co/SGNWcq4iWC">twitter.com/iamstarkov/sta…</a>

BEM - методология для именования классов для CSS! <a href="http://t.co/VZdDAytt1b">getbem.com</a> <a href="https://twitter.com/search?q=%23пятница">#пятница</a>

Много хороших видео по JS (некоторые я уже постил) - <a href="https://t.co/g04jwySgdo">github.com/bolshchikov/js…</a>

Я бы порекомендовал <a href="http://t.co/DQseWMESsB">getsentry.com</a> (<a href="https://t.co/dvz7xVy5oU">github.com/getsentry/rave…</a>) - слать все туда. <a href="https://t.co/XWDQnDRZmQ">twitter.com/alexfedoseev/s…</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я такую штуку составлял недавно.
<a href="https://t.co/qIbVwGM6RW">gist.github.com/beshkenadze/fe…</a>

## Суббота <small>3 твита</small>

RT <a href="https://twitter.com/changelog" title="The Changelog">@changelog</a>: GraphQL.js – A reference implementation of Facebook's GraphQL for JavaScript <a href="http://t.co/nKvXBiJmTn">chlg.co/1HDI3A3</a>

Ну выбор очевиден, я считаю - <a href="http://t.co/HwpU3DxQQw">jsforcats.com/javascript-for…</a> <a href="https://t.co/0LnTOnj3bk">twitter.com/pvlpvs/status/…</a>

. <a href="https://twitter.com/pvlpvs" title="П . П">@pvlpvs</a> <a href="https://twitter.com/beshur" title="Shu Buznik">@beshur</a> Douglas Crockford, JavaScript: The Good Parts - <a href="http://t.co/sR7nixLxPT">shop.oreilly.com/product/978059…</a>

## Воскресенье <small>4 твита</small>

"goes to" operator:

n = 5;
while (n --&gt; 0) { console.log(n); }

// 5 4 3 2 1 0

Invisible Code by Martin Kleppe at JSConf Budapest 2015 - <a href="https://t.co/3fbuqfQCuB">youtube.com/watch?v=T3xMyZ…</a>

Неделя подходит к концу - с вами был <a href="https://twitter.com/floatdrop" title="Vsevolod S.">@floatdrop</a>. Спасибо, что были с нами!

Live React: Hot Reloading with Time Travel at react-europe 2015 by <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> <a href="https://t.co/5wnJJW8sBF">youtube.com/watch?v=xsSnOQ…</a>

## Ссылки

### github.com  
<a href="https://github.com/yandex/yandex-tank" target="_blank">https://github.com/yandex/yandex-tank</a>  
<a href="https://github.com/c4milo/node-webkit-agent" target="_blank">https://github.com/c4milo/node-webkit-agent</a>  
<a href="https://github.com/sindresorhus/awesome" target="_blank">https://github.com/sindresorhus/awesome</a>  
<a href="https://github.com/h5bp/Front-end-Developer-Interview-Questions" target="_blank">https://github.com/h5bp/Front-end-Developer-Interview-Questions</a>  
<a href="https://github.com/floatdrop/chnpm/blob/193fdf0541e3c085b9f08eb241a53f7238faa662/index.js" target="_blank">https://github.com/floatdrop/chnpm/blob/193fdf0541e3c085b9f08eb241a53f7238faa662/index.js</a>  
<a href="https://github.com/floatdrop/chnpm/blob/master/index.js" target="_blank">https://github.com/floatdrop/chnpm/blob/master/index.js</a>  
<a href="https://github.com/c4milo/node-webkit-agent" target="_blank">https://github.com/c4milo/node-webkit-agent</a>  
<a href="https://github.com/sindresorhus/max-safe-integer/blob/master/index.js" target="_blank">https://github.com/sindresorhus/max-safe-integer/blob/master/index.js</a>  
<a href="https://github.com/floatdrop/express-dinja" target="_blank">https://github.com/floatdrop/express-dinja</a>  
<a href="https://github.com/progrium/dokku" target="_blank">https://github.com/progrium/dokku</a>  
<a href="https://github.com/tschaub/mock-fs" target="_blank">https://github.com/tschaub/mock-fs</a>  
<a href="https://github.com/pgte/nock" target="_blank">https://github.com/pgte/nock</a>  
<a href="https://github.com/chriso/validator.js" target="_blank">https://github.com/chriso/validator.js</a>  
<a href="http://github.com/sindresorhus/got" target="_blank">http://github.com/sindresorhus/got</a>  
<a href="https://github.com/request/request/issues/718" target="_blank">https://github.com/request/request/issues/718</a>  
<a href="https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328" target="_blank">https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328</a>  
<a href="https://github.com/sindresorhus/generator-nm" target="_blank">https://github.com/sindresorhus/generator-nm</a>  
<a href="https://github.com/sindresorhus/node-module-boilerplate" target="_blank">https://github.com/sindresorhus/node-module-boilerplate</a>  
<a href="https://github.com/ModuleLoader/es6-module-loader" target="_blank">https://github.com/ModuleLoader/es6-module-loader</a>  
<a href="https://github.com/FormidableLabs/radium" target="_blank">https://github.com/FormidableLabs/radium</a>  
<a href="https://github.com/elierotenberg/react-nexus" target="_blank">https://github.com/elierotenberg/react-nexus</a>  
<a href="https://github.com/bolshchikov/js-must-watch" target="_blank">https://github.com/bolshchikov/js-must-watch</a>  
<a href="https://github.com/getsentry/raven-node" target="_blank">https://github.com/getsentry/raven-node</a>  
### www.youtube.com  
<a href="http://www.youtube.com/watch?v=8aGhZQkoFbQ" target="_blank">http://www.youtube.com/watch?v=8aGhZQkoFbQ</a>  
<a href="http://www.youtube.com/watch?v=DqMFX91ToLw" target="_blank">http://www.youtube.com/watch?v=DqMFX91ToLw</a>  
<a href="https://www.youtube.com/playlist?list=PLsuEohlthXdkRSxJTkmTstWKHgBHsd3Dx" target="_blank">https://www.youtube.com/playlist?list=PLsuEohlthXdkRSxJTkmTstWKHgBHsd3Dx</a>  
<a href="https://www.youtube.com/watch?v=wf-BqAjZb8M" target="_blank">https://www.youtube.com/watch?v=wf-BqAjZb8M</a>  
<a href="http://www.youtube.com/watch?v=bo36MrBfTk4" target="_blank">http://www.youtube.com/watch?v=bo36MrBfTk4</a>  
<a href="https://www.youtube.com/watch?v=tILlZRLhBJE" target="_blank">https://www.youtube.com/watch?v=tILlZRLhBJE</a>  
<a href="http://www.youtube.com/watch?v=90NsjKvz9Ns" target="_blank">http://www.youtube.com/watch?v=90NsjKvz9Ns</a>  
<a href="https://www.youtube.com/watch?v=UclvvqNtNNo" target="_blank">https://www.youtube.com/watch?v=UclvvqNtNNo</a>  
<a href="https://www.youtube.com/watch?v=T3xMyZH93i8" target="_blank">https://www.youtube.com/watch?v=T3xMyZH93i8</a>  
<a href="https://www.youtube.com/watch?v=xsSnOQynTHs" target="_blank">https://www.youtube.com/watch?v=xsSnOQynTHs</a>

### Другие

<a href="https://babeljs.io/docs/usage/require/" target="_blank">https://babeljs.io/docs/usage/require/</a>  
<a href="https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=function%20*%20genme()%20%7B%0A%20%20yield%201%3B%0A%20%20yield%202%3B%0A%20%20return%20%22done%22!%0A%7D" target="_blank">https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=function%20*%20genme()%20%7B%0A%20%20yield%201%3B%0A%20%20yield%202%3B%0A%20%20return%20%22done%22!%0A%7D</a>  
<a href="https://learn.javascript.ru/nodejs-screencast" target="_blank">https://learn.javascript.ru/nodejs-screencast</a>  
<a href="https://www.npmjs.com/package/co" target="_blank">https://www.npmjs.com/package/co</a>  
<a href="https://www.npmjs.com/package/buckets" target="_blank">https://www.npmjs.com/package/buckets</a>  
<a href="https://www.npmjs.com/package/joi" target="_blank">https://www.npmjs.com/package/joi</a>  
<a href="https://www.npmjs.com/package/matcha" target="_blank">https://www.npmjs.com/package/matcha</a>  
<a href="https://www.joyent.com/developers/videos/node-js-on-the-road-sf-dav-glass" target="_blank">https://www.joyent.com/developers/videos/node-js-on-the-road-sf-dav-glass</a>  
<a href="http://www.joyent.com/developers/node/debug/mdb" target="_blank">http://www.joyent.com/developers/node/debug/mdb</a>  
<a href="https://www.joyent.com/developers/videos/nodeconfeu-2013-example-debugging-session-using-dtrace-and-mdb" target="_blank">https://www.joyent.com/developers/videos/nodeconfeu-2013-example-debugging-session-using-dtrace-and-mdb</a>  
<a href="http://jstherightway.org/#whotofollow" target="_blank">http://jstherightway.org/#whotofollow</a>  
<a href="http://uptodate.frontendrescue.org/#follow-cool-people" target="_blank">http://uptodate.frontendrescue.org/#follow-cool-people</a>  
<a href="https://jsunderhood.ru/" target="_blank">https://jsunderhood.ru/</a>  
<a href="https://medium.com/@dan_abramov/my-react-list-862227952a8c" target="_blank">https://medium.com/@dan_abramov/my-react-list-862227952a8c</a>  
<a href="https://medium.com/@davidbyttow/abc-always-be-coding-d5f8051afce2" target="_blank">https://medium.com/@davidbyttow/abc-always-be-coding-d5f8051afce2</a>  
<a href="https://yandex.ru/jobs/vacancies/dev/?cities=213" target="_blank">https://yandex.ru/jobs/vacancies/dev/?cities=213</a>  
<a href="http://habrahabr.ru/company/yandex/blog/261245/" target="_blank">http://habrahabr.ru/company/yandex/blog/261245/</a>  
<a href="http://habrahabr.ru/company/skbkontur/blog/260781/" target="_blank">http://habrahabr.ru/company/skbkontur/blog/260781/</a>  
<a href="http://thecodelesscode.com/case/90" target="_blank">http://thecodelesscode.com/case/90</a>  
<a href="http://thecodelesscode.com/case/90?lang=ru" target="_blank">http://thecodelesscode.com/case/90?lang=ru</a>  
<a href="http://mattbriggs.net/blog/2015/06/01/the-role-of-a-senior-developer/" target="_blank">http://mattbriggs.net/blog/2015/06/01/the-role-of-a-senior-developer/</a>  
<a href="http://www.infoq.com/presentations/Simple-Made-Easy" target="_blank">http://www.infoq.com/presentations/Simple-Made-Easy</a>  
<a href="http://2014.jsconf.eu/speakers/james-coglan-practical-functional-programming-pick-two.html" target="_blank">http://2014.jsconf.eu/speakers/james-coglan-practical-functional-programming-pick-two.html</a>  
<a href="http://matt.might.net/articles/implementation-of-recursive-fixed-point-y-combinator-in-javascript-for-memoization/" target="_blank">http://matt.might.net/articles/implementation-of-recursive-fixed-point-y-combinator-in-javascript-for-memoization/</a>  
<a href="http://www.joelonsoftware.com/articles/LeakyAbstractions.html" target="_blank">http://www.joelonsoftware.com/articles/LeakyAbstractions.html</a>  
<a href="http://www.joelonsoftware.com/items/2004/04/16.html" target="_blank">http://www.joelonsoftware.com/items/2004/04/16.html</a>  
<a href="https://changelog.com/top-ten-reasons-why-i-wont-use-your-open-source-project/" target="_blank">https://changelog.com/top-ten-reasons-why-i-wont-use-your-open-source-project/</a>  
<a href="http://elijahmanor.com/javascript-smells/" target="_blank">http://elijahmanor.com/javascript-smells/</a>  
<a href="http://softwaremaniacs.org/blog/2007/08/15/deb-packages-in-yandex/" target="_blank">http://softwaremaniacs.org/blog/2007/08/15/deb-packages-in-yandex/</a>  
<a href="https://gist.github.com/floatdrop/a5f4cc79d160d0f09a87" target="_blank">https://gist.github.com/floatdrop/a5f4cc79d160d0f09a87</a>  
<a href="https://gist.github.com/floatdrop/d316850e08c4eaaf29a0" target="_blank">https://gist.github.com/floatdrop/d316850e08c4eaaf29a0</a>  
<a href="https://gist.github.com/alekseykulikov/c63ac825e176fa650fb6" target="_blank">https://gist.github.com/alekseykulikov/c63ac825e176fa650fb6</a>  
<a href="https://gist.github.com/beshkenadze/fe05485f4d635886ca1a" target="_blank">https://gist.github.com/beshkenadze/fe05485f4d635886ca1a</a>  
<a href="http://research.google.com/pubs/pub41892.html" target="_blank">http://research.google.com/pubs/pub41892.html</a>  
<a href="http://thenewstack.io/docker-is-driving-a-new-breed-of-paas/" target="_blank">http://thenewstack.io/docker-is-driving-a-new-breed-of-paas/</a>  
<a href="http://bash.im/quote/429538" target="_blank">http://bash.im/quote/429538</a>  
<a href="http://m.youtube.com/watch?v=NpMnRifyGyw" target="_blank">http://m.youtube.com/watch?v=NpMnRifyGyw</a>  
<a href="http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6" target="_blank">http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6</a>  
<a href="http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6" target="_blank">http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6</a>  
<a href="https://blog.mariusschulz.com/2013/11/22/measuring-execution-times-in-javascript-with-consoletime" target="_blank">https://blog.mariusschulz.com/2013/11/22/measuring-execution-times-in-javascript-with-consoletime</a>  
<a href="http://chlg.co/1HDI3A3" target="_blank">http://chlg.co/1HDI3A3</a>  
<a href="http://jsforcats.com/javascript-for-cats.pdf" target="_blank">http://jsforcats.com/javascript-for-cats.pdf</a>  
<a href="http://shop.oreilly.com/product/9780596517748.do" target="_blank">http://shop.oreilly.com/product/9780596517748.do</a>
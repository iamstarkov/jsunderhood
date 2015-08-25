# floatdrop

_05 июля 2015_

## Понедельник <small>49 твитов</small>

Йоханга! На этой неделе с вами [@floatdrop](https://twitter.com/floatdrop "Vsevolod S.") - я занимаюсь разработкой на [@nodejs](https://twitter.com/nodejs "node js") в [@yandex](https://twitter.com/yandex "Яндекс") и немного фронтендом.

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") привет. расскажи про необычные кейсы использования nodejs? как долго пишешь на нем? смотришь ли на другие язы…

Кратчайший путь попасть в страну единорогов^W ES7+jsx в [@nodejs](https://twitter.com/nodejs "node js") - это использовать require хук [babeljs.io\/docs\/usage\/req…](https://t.co/MJXbYbpPc6 "https://babeljs.io/docs/usage/require/") Так я туда и попал.

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в проде это нормально?

RT [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в наше время, nodejs все еще больше редкость или уже нет?

RT [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") посоветуй ресурсы по nodejs, по которым а\) нужно учиться с нуля б\) следить за новостями в\) получать инфу по Best…

"Как начать в NodeJS?" - тут нужно понимать три вещи: 1\) JS - асинхронщина с callback's 2\) CommonJS 3\) Eventloop [nodejsintro](https://twitter.com/search?q=%23nodejsintro)

Про eventloop есть хороший доклад - [youtube.com\/watch?v=8aGhZQ…](http://t.co/twSBavXhfQ "http://www.youtube.com/watch?v=8aGhZQkoFbQ") \(но на английском\). [nodejsintro](https://twitter.com/search?q=%23nodejsintro)

Disclaimer: предыдущие ответы были как reply - их можно посмотреть, если кликнуть на ретвит \(пардоньте, исправлюсь\).

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") по первому пунту — [learn.javascript.ru\/nodejs-screenc…](https://t.co/dgCFOsZHMn "https://learn.javascript.ru/nodejs-screencast")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати, об обратных вызовах, async\/await — панацея?

Не уверен, что панацея, но это лучшее, что я видел для побега из callback hell. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Tip: Если вы погрязли в callback hell, то путь от туда лежит через Promise обертки, потом генераторы + [npmjs.com\/package\/co](https://t.co/4w1sA6xHbv "https://www.npmjs.com/package/co"), async\/await

Доклад "Netflix JavaScript Talks - Version 7: The Evolution of JavaScript" хорошо показывает все эти ступеньки: [youtube.com\/watch?v=DqMFX9…](http://t.co/kDUjkDMR8i "http://www.youtube.com/watch?v=DqMFX91ToLw")

Сам я начинал вот с этого курса про NodeJS - короткие видео от [youtube.com\/playlist?list=…](https://t.co/Hvb4SejouW "https://www.youtube.com/playlist?list=PLsuEohlthXdkRSxJTkmTstWKHgBHsd3Dx") [@iliakan](https://twitter.com/iliakan "Ilya Kantor") - давно это было [nodejsintro](https://twitter.com/search?q=%23nodejsintro)

RT [@reklatsmasters](https://twitter.com/reklatsmasters "Dmitry Tsvettsikh"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как вы тестируете потребление памяти и профилируете на iojs?

Мы кладем приложение под танк - [github.com\/yandex\/yandex-…](https://t.co/KJ9ZXMAz9Z "https://github.com/yandex/yandex-tank") \(up to 10k rps\) и сразу становится ясно, течет оно или нет.

У нас были эксперименты с DTrace - но не полетело по разным причинам. Проще всего посмотреть heapdump через [github.com\/c4milo\/node-we…](https://t.co/j9F19QOv5B "https://github.com/c4milo/node-webkit-agent")

Для серьезных разборок есть два способа - перезапустить процесс и "дебажить корку" в gdb или организовать remote debug \(отключив процесс\).

Пока я ищу доклад про gdb - посмотрите веселого дядьку из Yahoo - [joyent.com\/developers\/vid…](https://t.co/11kwmO7zT5 "https://www.joyent.com/developers/videos/node-js-on-the-road-sf-dav-glass") \(у joyent много интересных видео\).

RT [@me\_mrsum](https://twitter.com/me_mrsum "Sum"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Йо! Я тут краем глаза прочел про callback hell. Как на счет машины состояний? В связке с AMD получается очень до…

Генераторы - это и есть машина состояний, но из за синтаксического сахара получается прямолинейный и читаемый код - [babeljs.io\/repl\/\#?experim…](https://t.co/4yvQ5XVAbh "https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=function%20*%20genme()%20%7B%0A%20%20yield%201%3B%0A%20%20yield%202%3B%0A%20%20return%20%22done%22!%0A%7D")

Похоже я перепутал mdb с gdb, но я был уверен, что и под ubuntu можно посмотреть корку - [joyent.com\/developers\/nod…](http://t.co/tOKqTqqt2I "http://www.joyent.com/developers/node/debug/mdb") \([joyent.com\/developers\/vid…](https://t.co/CCnZ0eag0I "https://www.joyent.com/developers/videos/nodeconfeu-2013-example-debugging-session-using-dtrace-and-mdb")\)

RT [@miripiruni](https://twitter.com/miripiruni "Slava Oliyanchuk"): [TIL](https://twitter.com/search?q=%23TIL) [nodejs](https://twitter.com/search?q=%23nodejs) [pic.twitter.com\/VXj36cneyb](http://t.co/VXj36cneyb)

Ресурсы, чтобы быть в курсе - [@echojs](https://twitter.com/echojs "Echo JS") [@NodeJSWeekly](https://twitter.com/NodeJSWeekly "NodeJS Weekly") [@JavaScriptDaily](https://twitter.com/JavaScriptDaily "JavaScript Live") [@changelog](https://twitter.com/changelog "The Changelog") плюс фолловить в twitter\/github крутых чуваков [nodejsintro](https://twitter.com/search?q=%23nodejsintro)

RT [@roman\_says\_hi](https://twitter.com/roman_says_hi "Roman Kolpak"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") список крутых чуваков еще хотелось бы узнать!

Hard to say, for example follow [@sindresorhus](https://twitter.com/sindresorhus "Sindre Sorhus") and read awesome list \([github.com\/sindresorhus\/a…](https://t.co/YAMmKXyXFe "https://github.com/sindresorhus/awesome")\). I learned a lot from his code 🐶

Есть вот такой список - [jstherightway.org\/\#whotofollow](http://t.co/v7x6gn1BTM "http://jstherightway.org/#whotofollow") У меня тактика такая - я подписываюсь на многих, а потом отписываюсь, как пойму, что не мое.

RT [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон"): [@roman\_says\_hi](https://twitter.com/roman_says_hi "Roman Kolpak") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [uptodate.frontendrescue.org\/\#follow-cool-p…](http://t.co/ZwZPdjz901 "http://uptodate.frontendrescue.org/#follow-cool-people"), [jsunderhood.ru](https://t.co/kskvj7Gukx "https://jsunderhood.ru/"), [medium.com\/@dan\_abramov\/m…](https://t.co/HvezzzXcR9 "https://medium.com/@dan_abramov/my-react-list-862227952a8c"). [twitter.com\/edjafarov\/list…](https://t.co/Li5DQA657L "https://twitter.com/edjafarov/lists/dev-ua-js")

RT [@subzey](https://twitter.com/subzey "subzey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") Хочу попросить рассказать как про обычные кейсы: для чего вы используете ноду? Это скорее микросервис…

Самый обычный кейс - рендеринг страниц для пользователя, чуть реже REST API \(так как еще силен дух python в Я\).

Иногда рендеринг переписывают с xslt и perl на NodeJS и \(прости господи\) BH\/BEMHTML. Есть проекты, где вместо B\* - angular\/backbone\/react.

Как не сложно понять по этой странице - [yandex.ru\/jobs\/vacancies…](https://t.co/QDnzUIQEJH "https://yandex.ru/jobs/vacancies/dev/?cities=213") зоопарк у нас еще тот, зато чем заняться найдется всем. :\)

Мы медленно, но верно дрейфуем в сторону микросервисов, но сейчас есть очень монолитные части, от которых зависят все приложения.

Чтоб не получить леща — все, что опубликовано в этом твиттере не является официальной позицией Яндекса, а только моим личным видением. :D

RT [@MaxMykhailenko](https://twitter.com/MaxMykhailenko "Max Mykhailenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Как переписывание на node сказывается на производительности?

RT [@subzey](https://twitter.com/subzey "subzey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ещё вопросец: как вы обходите то, что eventloop может сожрать только одно ядро? Cluster, webworker-threads, по-дру…

RT [@xanf\_ua](https://twitter.com/xanf_ua "Illya Klymov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 
Большой вопрос, но важный для меня. Можешь перечислить чем должен владеть человек, назовём его джуниором в js.

Когда нибудь я научусь отвечать не в reply на этом аккаунте. Видимо не сегодня :\)

Есть вот список вопросов по JS, но для Front-end - [github.com\/h5bp\/Front-end…](https://t.co/q5zxkNMavn "https://github.com/h5bp/Front-end-Developer-Interview-Questions") 

На собеседовании в Fb 2\/3 от туда были. [twitter.com\/cakeinpanic\/st…](https://t.co/pToCLFzoGp "https://twitter.com/cakeinpanic/status/615494804831662080")

Вчера я узнал о стохастической оптимизации из лекции Дмитрия Ветрова - [habrahabr.ru\/company\/yandex…](http://t.co/sXhXjsQ1s9 "http://habrahabr.ru/company/yandex/blog/261245/") [twitter.com\/iamale\_ru\/stat…](https://t.co/smJfj9x5Fz "https://twitter.com/iamale_ru/status/615505158940794880")

Давайте сыграем в игру - "вот мой код год назад, а вот сейчас". Это очень интересный опыт у разработчика.

Я начну.

Год назад: [github.com\/floatdrop\/chnp…](https://t.co/zmBqmLQSJM "https://github.com/floatdrop/chnpm/blob/193fdf0541e3c085b9f08eb241a53f7238faa662/index.js")

Сейчас:
[github.com\/floatdrop\/chnp…](https://t.co/onCnArasVo "https://github.com/floatdrop/chnpm/blob/master/index.js")

Правила простые - разница во времени должна быть ~1 год \(от полугода и дальше\). Ну и должен быть виден прогресс! :\) [twitter.com\/dcromster\/stat…](https://t.co/u7bvjRDYIh "https://twitter.com/dcromster/status/615528313348616192")

У нас понедельник подходит к концу, по этому оставлю вам один коан про JS - [thecodelesscode.com\/case\/90](http://t.co/k1DerGdveS "http://thecodelesscode.com/case/90") \(там много классных\).

RT [@addyosmani](https://twitter.com/addyosmani "Addy Osmani"): Try [es6katas.org](http://t.co/IBxnopxQv5 "http://es6katas.org") - learn new JS features by fixing unit tests. Includes Map, Arrows, Generators &amp; more: http:\/\/t.[pic.twitter.com\/c0UAUxYhaJ](http://t.co/c0UAUxYhaJ)

RT [@bessarabov](https://twitter.com/bessarabov "Ivan Bessarabov"): Очень хороший текст про уровни разработчика [mattbriggs.net\/blog\/2015\/06\/0…](http://t.co/5NKUZimz7m "http://mattbriggs.net/blog/2015/06/01/the-role-of-a-senior-developer/")

RT [@indutny](https://twitter.com/indutny "Fedor Indutny"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@vlkosinov](https://twitter.com/vlkosinov "Vlad Kosinov") свой форк npm на основе двух баз couchdb: private и public. Плюс специальный прокси. Можно было и прощ…

Самый простой способ - сделать heapdump и посмотреть что там накопилось \(через [github.com\/c4milo\/node-we…](https://t.co/j9F19QOv5B "https://github.com/c4milo/node-webkit-agent") например\). [twitter.com\/tenorak\/status…](https://t.co/7h9o4nnQ47 "https://twitter.com/tenorak/status/615578458555592704")

## Вторник <small>29 твитов</small>

RT [@subzey](https://twitter.com/subzey "subzey"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Кстати, многие коаны переведены на русский [thecodelesscode.com\/case\/90?lang=ru](http://t.co/yG9Qg0dhFS "http://thecodelesscode.com/case/90?lang=ru")

Многие компании поддерживают старые IE, так как его доля в трафике довольно большая. [twitter.com\/hellbeast92\/st…](https://t.co/unUfJSHXsb "https://twitter.com/hellbeast92/status/615761786424291331")

Доброу утроу! Что будем делать сегодня?

Fav - пробежимся по нашему стеку
Rt - поговорим про разработку в целом

Ретвиты побеждают!

Сразу разделим программирование и разработку. Программировать обычно начинают гораздо раньше, чем разрабатывать.

Например я программировал в школе на Pascal, в универе на всем, что было в аптечке, в [@skbkontur](https://twitter.com/skbkontur "Контур.Сообщество") на C\#. И это не было разработкой.

Разработка начинается, когда вы несете ответственность за код и вам приходится поддерживать его. От O-сложности переходишь к сложности кода.

Пример уменьшения сложности кода - это использование YAGNI, но видео я потерял по нему, по этому вот другое - [youtube.com\/watch?v=wf-BqA…](https://t.co/ifjK4RLCNN "https://www.youtube.com/watch?v=wf-BqAjZb8M")

YAGNI часто противопоставляют SOLID. Нужно уметь балансировать между ними, а иногда выходить с этой шкалы - [habrahabr.ru\/company\/skbkon…](http://t.co/Hu2Wli9xx7 "http://habrahabr.ru/company/skbkontur/blog/260781/")

Главное правило, к которому я пришел - ваш код должен быть "прост". Про "простой" \(simple\) код есть супер доклад - [infoq.com\/presentations\/…](http://t.co/kaPxTFIIux "http://www.infoq.com/presentations/Simple-Made-Easy")

Самый простой способ усложнить код - это не использовать сильные стороны языка. Например забыть, что JS это в функциональный язык \(ООП ftw!\)

Пруф - "James Coglan: Practical functional programming: pick two" [2014.jsconf.eu\/speakers\/james…](http://t.co/loRk8q4HrB "http://2014.jsconf.eu/speakers/james-coglan-practical-functional-programming-pick-two.html")

Я был студентом в Контуре. Очень сложно студенту сделать качественный скачок в разработке, ему надо помогать в этом. [twitter.com\/mkazantsev\/sta…](https://t.co/6UHCm8SS4k "https://twitter.com/mkazantsev/status/615794651493064704")

В плане - есть функции первого порядка. Но раз спрашиваешь: [matt.might.net\/articles\/imple…](http://t.co/IXqVHkYoH5 "http://matt.might.net/articles/implementation-of-recursive-fixed-point-y-combinator-in-javascript-for-memoization/") [twitter.com\/chemikadze\/sta…](https://t.co/cguukPvEkl "https://twitter.com/chemikadze/status/615796609243164672")

К особенностям JS можно отнести prototype-наследование и есть отличный доклад "The Better Parts" [youtube.com\/watch?v=bo36Mr…](http://t.co/nW7RFHmX65 "http://www.youtube.com/watch?v=bo36MrBfTk4") - посмотрите.

Самый простой способ упростить код - разбить на подзадачи \(см. п. 1\), но не надо запихивать все в один супер-модуль. [pic.twitter.com\/qKgoQsrHFr](http://t.co/qKgoQsrHFr)

Для модулей в мире NodeJS есть npm. По слухам там есть все - от CMS \([npmjs.com\/package\/buckets](https://t.co/7jSAfWLecQ "https://www.npmjs.com/package/buckets")\) до one-liners \([github.com\/sindresorhus\/m…](https://t.co/XhqQcfUaOm "https://github.com/sindresorhus/max-safe-integer/blob/master/index.js")\).

Как правильно разбивать задачи на модули - вопрос сложный, может быть вы подскажите. Я лишь оставлю вот эту статью - [joelonsoftware.com\/articles\/Leaky…](http://t.co/YsvTYOHhdB "http://www.joelonsoftware.com/articles/LeakyAbstractions.html")

А вот как взрастить в себе ответственность - тут есть проверенный способ: pet-project в open source.

При разработке N проектов, вы поймете - зачем вам тесты и документация. Через месяц контекст теряется полностью. [changelog.com\/top-ten-reason…](https://t.co/NOLP1E8TW7 "https://changelog.com/top-ten-reasons-why-i-wont-use-your-open-source-project/")

Pet-project хороший способ быть ABC - [medium.com\/@davidbyttow\/a…](https://t.co/6ilUvMmFK8 "https://medium.com/@davidbyttow/abc-always-be-coding-d5f8051afce2") - если им начинают пользоваться, то +опыт разработки. [twitter.com\/anton\_davydov\/…](https://t.co/z6pze5vuZF "https://twitter.com/anton_davydov/status/615808535759171584")

Наилучший pet-project \(как и рабочий проект\) - это тот, которым вы пользуетесь. Принцип Dogfood - [joelonsoftware.com\/items\/2004\/04\/…](http://t.co/9QRR4qSTx2 "http://www.joelonsoftware.com/items/2004/04/16.html")

Про dogfooding \(и не только\) в хорошем видео "Meet the Makers: Ableton Developers at Work" - [youtube.com\/watch?v=tILlZR…](https://t.co/OBz58q8ywW "https://www.youtube.com/watch?v=tILlZRLhBJE")

У нас обед, а вам оставлю замечательное видео о запахах JS - [elijahmanor.com\/javascript-sme…](http://t.co/sNs4eWdXhQ "http://elijahmanor.com/javascript-smells/")

Задавайте вопросы, буду рад! [pic.twitter.com\/2VL4RmITVK](http://t.co/2VL4RmITVK)

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): Ищу фронтенд специалиста для анализа быстродействия страницы \(проекта\) и отчета по исправлению.
\/cc [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Как ни странно - вопросов не возникло. Тогда вопрос слушателям - Какие советы по разработке вы бы дали себе несколько лет назад?

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") изучай функциональщину, пиши на языках с поддержкой системы типов. думай о бизнесе а не об инфраструктуре

RT [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky"): [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не верь на слово сеньорам, а тем более тимлидам, их знания есть локальный оптимум. Верь опыту и пр…

RT [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я бы посоветовал не бояться совершить ошибку. Меньше думать об имидже, больше о результате.

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") следи за здоровьем!

## Среда <small>25 твитов</small>

Господа разработчики, поделитесь - как вы выкладываете код в продакшн? Мы вот как-то так: [softwaremaniacs.org\/blog\/2007\/08\/1…](http://t.co/NKr0LZWmTZ "http://softwaremaniacs.org/blog/2007/08/15/deb-packages-in-yandex/") [очемнаписатьто](https://twitter.com/search?q=%23очемнаписатьто)

. [@greybax](https://twitter.com/greybax "Aleksandr Filatov") зависит от уровня фронтендера. Вот отличный пример "за": "Mark DiMarco: User Interface Algorithms" [youtube.com\/watch?v=90NsjK…](http://t.co/h6NDEfzUk2 "http://www.youtube.com/watch?v=90NsjKvz9Ns")

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня очень маленький продакшен, docker compose справляется

Сегодня, видимо, будет день случайных советов.

Если вы используете Express - никогда не вызывайте \`next\` после \`res.send\`. Я ставлю \`return\` после, иначе плавающая ошибка вам обеспечена.

. [@iamale\_ru](https://twitter.com/iamale_ru "Эль") [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") так точно. Был пример из жизни про рефакторинг - вот упрощенная история: [gist.github.com\/floatdrop\/a5f4…](https://t.co/cw8A20Y8X8 "https://gist.github.com/floatdrop/a5f4cc79d160d0f09a87")

Express очень гибкий \(по сравнению с hapi\), но в нем очень легко прострелить себе голову в большом проекте. [twitter.com\/slonoed\/status…](https://t.co/blPu16K9lF "https://twitter.com/slonoed/status/616168542489182209")

. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") стреляют в основном из за двойного вызова \`next\` - который в свою очередь зовет \`res.send\` в не связных местах кода.

. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в koajs застрелиться сложнее - так втихушку будет переписываться this.body \(если после него сделать yield next\).

Преимущество генера^W koajs - flow-control в контроллере. Для Express мы свой di писали [github.com\/floatdrop\/expr…](https://t.co/OT6dGwI3q7 "https://github.com/floatdrop/express-dinja") vs [gist.github.com\/floatdrop\/d316…](https://t.co/3brT9BuqTz "https://gist.github.com/floatdrop/d316850e08c4eaaf29a0")

Мне нравится JSON payload в [jwt.io](http://t.co/zs4p8CmqM8 "http://jwt.io") \(похож на macaroons  [research.google.com\/pubs\/pub41892.…](http://t.co/4UHlcNYboT "http://research.google.com/pubs/pub41892.html")\) - это удобно. [twitter.com\/dcromster\/stat…](https://t.co/yEHVpaSSgU "https://twitter.com/dcromster/status/616209388458627072")

Удобнее \`git push heroku master\` я еще ничего не видел \([github.com\/progrium\/dokku](https://t.co/4Jwh7Y2nTu "https://github.com/progrium/dokku") и [thenewstack.io\/docker-is-driv…](http://t.co/jUx6xHoewq "http://thenewstack.io/docker-is-driving-a-new-breed-of-paas/")\) [twitter.com\/beshkenadze\/st…](https://t.co/VWTQVBx60I "https://twitter.com/beshkenadze/status/616214596383326208")

RT [@alekseykulikov\_](https://twitter.com/alekseykulikov_ "Aleksey Kulikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в этом и суть, с помощью простой функции [gist.github.com\/alekseykulikov…](https://t.co/Gw5b4q3lXh "https://gist.github.com/alekseykulikov/c63ac825e176fa650fb6") мы получаем мощь koa + инфраструктуру и …

RT [@alenacpp](https://twitter.com/alenacpp "Elena Sagalaeva"): Уровни программистов: 
вы все знаете — Junior
вы поняли что ничего не знаете — Mid
вам все равно — Senior
[bash.im\/quote\/429538](http://t.co/Itl3OErC5T "http://bash.im/quote/429538")

RT [@jbrains](https://twitter.com/jbrains "☕ J. B. Rainsberger"): Junior programmer's bookshelf: 90% APIs and programming languages; Senior programmer's bookshelf: 80% applied psychology.

Если вам нужно протестировать модуль работающий с fs и http, то mock-fs \([github.com\/tschaub\/mock-fs](https://t.co/kXWi3lM5Qf "https://github.com/tschaub/mock-fs")\) и nock \([github.com\/pgte\/nock](https://t.co/kPsnld9cyb "https://github.com/pgte/nock")\) в помощь.

Для валидации данных у меня всегда под рукой validator.js \([github.com\/chriso\/validat…](https://t.co/rl3IkwykUC "https://github.com/chriso/validator.js")\) и joi \([npmjs.com\/package\/joi](https://t.co/UYSCFGVpBJ "https://www.npmjs.com/package/joi")\).

Для запросов по HTTP\(s\) мы, внезапно, используем got \([github.com\/sindresorhus\/g…](http://t.co/ynhdHEC0QV "http://github.com/sindresorhus/got")\).

TLS и gzip лучше перекладывать на проксю, а chunked по ситуации \(longpooling нельзя буфферизировать, etc...\). [twitter.com\/subzey\/status\/…](https://t.co/GXqgVH1EMH "https://twitter.com/subzey/status/616306473040277504")

У got правильная опция json \([github.com\/request\/reques…](https://t.co/Di3ImPvfLu "https://github.com/request/request/issues/718")\), понятные ошибки, он минималистичный. [twitter.com\/nDmitry\/status…](https://t.co/BQzbHBugZ2 "https://twitter.com/nDmitry/status/616317235934679041")

RT [@sindresorhus](https://twitter.com/sindresorhus "Sindre Sorhus"): AMA - Why small focused modules [github.com\/sindresorhus\/a…](https://t.co/kEpMRXMRS5 "https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328")

Больше модулей хороших и разных! Для этого даже генератор есть [github.com\/sindresorhus\/g…](https://t.co/TtS62hHJd9 "https://github.com/sindresorhus/generator-nm")

Есть версия и без yeoman - [github.com\/sindresorhus\/n…](https://t.co/4QKBGImusM "https://github.com/sindresorhus/node-module-boilerplate") [twitter.com\/alexeyraspopov…](https://t.co/BtqhaBqXvl "https://twitter.com/alexeyraspopov/status/616328332553154560")

. [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") мы yeoman используем для генерации проектов - довольно удобно.

В request гораздо больше встроенных фишек, что сказывается на его размере. Я не использую его внутри других модулей. [twitter.com\/ap\_savin\/statu…](https://t.co/I54J4BLgI4 "https://twitter.com/ap_savin/status/616333891167723520")

## Четверг <small>13 твитов</small>

RT [@Manglehaft](https://twitter.com/Manglehaft "Mangle"): Clever, very clever [pic.twitter.com\/85HbusAZX8](http://t.co/85HbusAZX8)

RT [@ReactEurope](https://twitter.com/ReactEurope "react-europe"): We're live [youtube.com\/watch?v=Uclvvq…](https://t.co/WgDbIjIjwY "https://www.youtube.com/watch?v=UclvvqNtNNo") [reacteurope](https://twitter.com/search?q=%23reacteurope)

Browserify и webpack уже классика - а я рекомендую посмотреть еще на [jspm.io](http://t.co/v6GMOdicKP "http://jspm.io") \(использует [github.com\/ModuleLoader\/e…](https://t.co/undAmqS8EZ "https://github.com/ModuleLoader/es6-module-loader")\)

Recap: Стили в JS упрощают разработку - изменения происходят в одном месте, а не в нескольких файлах. Используют они [github.com\/FormidableLabs…](https://t.co/JDCSssrcI3 "https://github.com/FormidableLabs/radium")

Recap: чувак написал [github.com\/elierotenberg\/…](https://t.co/0GUydDVn76 "https://github.com/elierotenberg/react-nexus")

. [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") [@andreypopp](https://twitter.com/andreypopp "Andrey Popp") в этом одна из главных фич jspm - он умеет это делать на лету, а умеет и bundle собрать, где все уже сделано.

. [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") они будут подключены. Посмотри [m.youtube.com\/watch?v=NpMnRi…](http://t.co/uyQ3MaSlMv "http://m.youtube.com/watch?v=NpMnRifyGyw") - ребята с react использую и все хорошо у них :\)

. [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov") webpack для меня выстрелил, когда его начал facebook продвигать и развивать для React. До этого я webpack не понимал вообще.

RT [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня вопросик: товарищи фронтендеры, что вы думаете об использовании CoffeeScript в проектах? За\/против. Когда м…

. [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов") imho от языка должна быть значительная польза \(TS - система типов, CJS - dead code elimination\). А от CS один сахар ¯\\_\(ツ\)\_\/¯

. [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") ну, я со свечкой не стоял - но CS теряет позиции - это факт [slideshare.net\/NeilGreen1\/typ…](http://t.co/4f9eld1rkC "http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6"), по этому я уже на него не смотрю.

RT [@ilyabirman](https://twitter.com/ilyabirman "Ilya Birman"): Путин: «Иностранные фонды шарят по школам и сажают на гранты талантливых детей». Редкий случай, когда я согласен. Грант — г…

RT [@Kern\_0](https://twitter.com/Kern_0 "Арсений Максимов"): Зацените отличные слайды от [@neilfeyn](https://twitter.com/neilfeyn "Neil Green") на тему выбора между ES6\/TypeScript\/CoffeeScript.
[slideshare.net\/NeilGreen1\/typ…](http://t.co/sjIeNzgvUv "http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

## Пятница <small>7 твитов</small>

Для бенчмарков js кода я использую matcha \([npmjs.com\/package\/matcha](https://t.co/su9JXSVP3C "https://www.npmjs.com/package/matcha")\) - не дает хирургическую точность, конечно. [twitter.com\/iamstarkov\/sta…](https://t.co/TZjE0vpL3P "https://twitter.com/iamstarkov/status/616951527291420672")

Если нужно быстро замерить, сколько кусок кода выполняется в ms - то console.time вполне себе инструмент - [blog.mariusschulz.com\/2013\/11\/22\/mea…](https://t.co/pW1HSaKQRt "https://blog.mariusschulz.com/2013/11/22/measuring-execution-times-in-javascript-with-consoletime")

Коротко - бойлерплейт должен быть у команды и отвечать их требованиям, общий "на всех" делать не получится. [twitter.com\/iamstarkov\/sta…](https://t.co/SGNWcq4iWC "https://twitter.com/iamstarkov/status/616951423771742208")

BEM - методология для именования классов для CSS! [getbem.com](http://t.co/VZdDAytt1b "http://getbem.com") [пятница](https://twitter.com/search?q=%23пятница)

Много хороших видео по JS \(некоторые я уже постил\) - [github.com\/bolshchikov\/js…](https://t.co/g04jwySgdo "https://github.com/bolshchikov/js-must-watch")

Я бы порекомендовал [getsentry.com](http://t.co/DQseWMESsB "http://getsentry.com") \([github.com\/getsentry\/rave…](https://t.co/dvz7xVy5oU "https://github.com/getsentry/raven-node")\) - слать все туда. [twitter.com\/alexfedoseev\/s…](https://t.co/XWDQnDRZmQ "https://twitter.com/alexfedoseev/status/616863733764255744")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я такую штуку составлял недавно.
[gist.github.com\/beshkenadze\/fe…](https://t.co/qIbVwGM6RW "https://gist.github.com/beshkenadze/fe05485f4d635886ca1a")

## Суббота <small>3 твита</small>

RT [@changelog](https://twitter.com/changelog "The Changelog"): GraphQL.js – A reference implementation of Facebook's GraphQL for JavaScript [chlg.co\/1HDI3A3](http://t.co/nKvXBiJmTn "http://chlg.co/1HDI3A3")

Ну выбор очевиден, я считаю - [jsforcats.com\/javascript-for…](http://t.co/HwpU3DxQQw "http://jsforcats.com/javascript-for-cats.pdf") [twitter.com\/pvlpvs\/status\/…](https://t.co/0LnTOnj3bk "https://twitter.com/pvlpvs/status/617408701385842688")

. [@pvlpvs](https://twitter.com/pvlpvs "П . П") [@beshur](https://twitter.com/beshur "Shu Buznik") Douglas Crockford, JavaScript: The Good Parts - [shop.oreilly.com\/product\/978059…](http://t.co/sR7nixLxPT "http://shop.oreilly.com/product/9780596517748.do")

## Воскресенье <small>4 твита</small>

"goes to" operator:

n = 5;
while \(n --&gt; 0\) { console.log\(n\); }

\/\/ 5 4 3 2 1 0

Invisible Code by Martin Kleppe at JSConf Budapest 2015 - [youtube.com\/watch?v=T3xMyZ…](https://t.co/3fbuqfQCuB "https://www.youtube.com/watch?v=T3xMyZH93i8")

Неделя подходит к концу - с вами был [@floatdrop](https://twitter.com/floatdrop "Vsevolod S."). Спасибо, что были с нами!

Live React: Hot Reloading with Time Travel at react-europe 2015 by [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") [youtube.com\/watch?v=xsSnOQ…](https://t.co/5wnJJW8sBF "https://www.youtube.com/watch?v=xsSnOQynTHs")

## Ссылки

### github.com  
<a href="https://github.com/yandex/yandex-tank" target="_blank">https://github.com/yandex/yandex-tank</a>  
<a href="https://github.com/c4milo/node-webkit-agent" target="_blank">https://github.com/c4milo/node-webkit-agent</a>  
<a href="https://github.com/sindresorhus/awesome" target="_blank">https://github.com/sindresorhus/awesome</a>  
<a href="https://github.com/h5bp/Front-end-Developer-Interview-Questions" target="_blank">https://github.com/h5bp/Front-end-Developer-Interview-Questions</a>  
<a href="https://github.com/floatdrop/chnpm/blob/193fdf0541e3c085b9f08eb241a53f7238faa662/index.js" target="_blank">https://github.com/floatdrop/chnpm/blob/193fdf0541e3c085b9f08eb241a53f7238faa662/index.js</a>  
<a href="https://github.com/floatdrop/chnpm/blob/master/index.js" target="_blank">https://github.com/floatdrop/chnpm/blob/master/index.js</a>  
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
<a href="http://es6katas.org" target="_blank">http://es6katas.org</a>  
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
<a href="http://jwt.io" target="_blank">http://jwt.io</a>  
<a href="http://research.google.com/pubs/pub41892.html" target="_blank">http://research.google.com/pubs/pub41892.html</a>  
<a href="http://thenewstack.io/docker-is-driving-a-new-breed-of-paas/" target="_blank">http://thenewstack.io/docker-is-driving-a-new-breed-of-paas/</a>  
<a href="http://bash.im/quote/429538" target="_blank">http://bash.im/quote/429538</a>  
<a href="http://jspm.io" target="_blank">http://jspm.io</a>  
<a href="http://m.youtube.com/watch?v=NpMnRifyGyw" target="_blank">http://m.youtube.com/watch?v=NpMnRifyGyw</a>  
<a href="http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6" target="_blank">http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6</a>  
<a href="https://blog.mariusschulz.com/2013/11/22/measuring-execution-times-in-javascript-with-consoletime" target="_blank">https://blog.mariusschulz.com/2013/11/22/measuring-execution-times-in-javascript-with-consoletime</a>  
<a href="http://getbem.com" target="_blank">http://getbem.com</a>  
<a href="http://getsentry.com" target="_blank">http://getsentry.com</a>  
<a href="http://chlg.co/1HDI3A3" target="_blank">http://chlg.co/1HDI3A3</a>  
<a href="http://jsforcats.com/javascript-for-cats.pdf" target="_blank">http://jsforcats.com/javascript-for-cats.pdf</a>  
<a href="http://shop.oreilly.com/product/9780596517748.do" target="_blank">http://shop.oreilly.com/product/9780596517748.do</a>
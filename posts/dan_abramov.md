# dan_abramov

_28 июня 2015_

## Понедельник <small>77 твитов</small>

Привет! Меня зовут [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov"). Я веду [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на этой неделе.

Люди часто думают, что меня зовут Денис. Но я Даниил. Денис — это совсем не я.

Я активно участвую в жизни англоязычного React сообщества. В русскоязычной части индустрии я почти никого не знаю, так что будем знакомы!

На этой неделе я готовлюсь к выступлению на React Europe. Буду рассказывать, как React позволяет писать приложения, не нажимая F5.

До React я какое-то время жил с Backbone/jQuery. До этого делал нативное приложение для iPad на Xamarin iOS. До этого писал под Windows.

В детстве я мечтал собрать радио. Я нарисовал схему и купил детали в «Чип и Дип». Даже паяльник и канифоль купил. Но руки не дошли.

Я пока план тем не составлял, но сегодня пойду стричься и составлю. О чем вы хотите поговорить?

RT [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") но не потому, что ты нажимаешь CMD+R, right?

Не захожу… Теперь я только в Reactiflux Slack-e. Рекомендую: [reactiflux.com](http://t.co/0NmipPbrDe "http://www.reactiflux.com/") [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон")

Застал меня врасплох. Хм. Смотрю сериалы. Люблю вкусно покушать. Полежать на солнышке. В общем, сейчас ничем. [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton")

Там хорошие тематические каналы. Типа [#redux](https://twitter.com/search?q=%23redux) про мою новую библиотеку например. ;-\) [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон")

Для начала в React важно въехать философически. «Что это вообще такое и зачем.» Лонгрид: [jlongster.com/Removing-User-…](http://t.co/8gw0FDiXCi "http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome") [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton")

В более практичных вопросах здесь очень хорошая подборка: [github.com/enaqx/awesome-…](https://t.co/BXSxZpZphd "https://github.com/enaqx/awesome-react") [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton")

В идеале React'а не станет, и он растворится в браузере: [youtube.com/watch?v=4anAwX…](http://t.co/VxF6a18XUt "http://www.youtube.com/watch?v=4anAwXYqLG8") [@astralian](https://twitter.com/astralian "Konstantin")

Но пока он не растворился, даже авторы UIKit из iOS считают, что это не пустой хайп: [twitter.com/andy\_matuschak…](https://t.co/QPacQIgtQ3 "https://twitter.com/andy_matuschak/status/560511204867575808") [@astralian](https://twitter.com/astralian "Konstantin")

В React не нужны темплейты. В этом его сила. Если увидишь react-templates, закрой глаза и считай до десяти. [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton")

Есть и более экспериментально-интересные вещи, типа Cycle.js. Но React лидирует в категории «прагматичная инновация». [@astralian](https://twitter.com/astralian "Konstantin")

Я не делаю TDD, поэтому не могу ответить как следует. Важно, что в React-компонентах не должно быть логики [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Поэтому даже когда я пишу тесты, я пишу их не для компонентов, а для того, что ими управляет. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Если надо тестировать компонент, для меня это знак, что из него надо что-то вынести.  [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Нет. Cycle может, но он слишком сырой пока что. [@astralian](https://twitter.com/astralian "Konstantin")

Новички часто не понимают, чем силен React. Он силен констрейнтами, которые он налагает. Похожая сила есть в ФП. [@astralian](https://twitter.com/astralian "Konstantin")

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): Пользуясь случаем, прошу у  [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") прощения за то, что много месяцев звал его Денисом ¯\\\_\(ツ\)\_/¯ / [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Любая логика. Если надо тестировать какую-то логику, скорее всего это должна быть функция или внешний объект [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Да, это крайний случай, согласен. Для таких компонентов стоит писать тесты. И то я бы скорее вынес логику управления.. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Например у тебя может быть объект MaskedInputValue, который имеет acceptChar\(char, position\) и onChange. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Ты можешь в нем описать логику, как маска себя ведет, а компонентом тупо рендерить текущее значение. Тогда логику легко тестить [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Я немножко про это твитил здесь: [twitter.com/dan\_abramov/st…](https://t.co/yN5VWlL6gm "https://twitter.com/dan_abramov/status/609852006107336704") [@astralian](https://twitter.com/astralian "Konstantin")

Что вас радует и что расстраивает в JS комьюнити?

Моя позиция — хранилища должны быть pure функциями. Поэтому я написал Redux: [github.com/gaearon/redux](https://t.co/hRXgTpiKPe "https://github.com/gaearon/redux") [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Например, меня расстраивает, что люди всё ещё всерьёз создают новые библиотеки с two way data bindings.

С другой стороны, я знаю людей, которых в принципе расстраивает, что люди создают новые библиотеки, так что всё относительно

Amok пока недостаточно стабилен, чтобы о нем строго судить. Я думаю, его ниша — императивные кодбазы и быстрые прототипы. [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev")

Мне кажется это «есть время разбрасывать камни и есть время их собирать». Ищем, находим, ищем, находим. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

RT [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") радует что жсеры все еще самые харизматичные, расстраивает что все больше жавистов лезут в жс со своим самоваро…

RT [@gryzzly](https://twitter.com/gryzzly "gryzzly"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня расстраивает что нету оценки модулей/библиотек кроме рейтинга в гитхабе \(т.е. популярности\)

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня расстраивает постоянная тяга людей к уничтожению разнообразия. Все на Хром, все на Реакт, все на Babel - …

RT [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ"): [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это нормально в нашем нарциссичном обществе. Идеализация и разочарование - главное активнее. и быст…

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") радует, что комюнити развивается,  огорчает, что пока нет четкой цельности

Напротив, меня расстраивает, что люди уходят в ClojureScript из-за языка и делают там классные штуки. [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

И никто эти штуки не портирует — не потому что никак, а потому что им и так хорошо, а кроме них никто не понимает. [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

Кто знает ClojureScript?

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): Почему-то только после появления [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") захотелось зафоловить [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"). :\)

Кто знает кого-нибудь, кто знает ClojureScript?

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") все знают Соловьёва же =\)

[pic.twitter.com/D08qtfUkUp](http://t.co/D08qtfUkUp)

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я буду пробовать кложу из-за [@nikitonsky](https://twitter.com/nikitonsky "Nikita Prokopov")

Меня больше расстраивает сексизм, чем треды про него. [@Dmiterko\_Roman](https://twitter.com/Dmiterko_Roman "Рома")

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я имел ввиду [@asolovyov](https://twitter.com/asolovyov "Alexander Solovyov") =\) aka "чик-чик и в продакшин"

Расскажите о каком-нибудь одном вашем опен-сорс JS проекте. Не важно, если нету звездочек. «Зачем» и ссылка. Го?

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") очень интересует "state management". я пока не въехал в концепт stateless stores. хочется понять весь жизнен…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Переводы фронтэнд \(в том числе и JS\) статей с неанглийского на английский [frontendbabel.info](http://t.co/iTgyUVefR4 "http://frontendbabel.info/") Чтобы мир узна…

RT [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати, он проводил лекции по JS,  и говорит что язык дает мало, а архитектура много

RT [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") PromisePipe-кросс процессные стримы,отделяют логику от взаимодествия между энвми [github.com/edjafarov/Prom…](https://t.co/R6WQ5ZbQVZ "https://github.com/edjafarov/PromisePipe") http:/[pic.twitter.com/skwITTyFeh](http://t.co/skwITTyFeh)

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") клиент-сайд мокки для superagent, чтобы не ждать бекенд и не добавлять в проект мок-серверы на ноде — http[github.com/rambler-digita…](https://t.co/l8ZggpQ7y8 "https://github.com/rambler-digital-solutions/superagent-mocker")

RT [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Плагин для eslint чтобы писать js по Крокфорду [github.com/idmitriev/esli…](https://t.co/b3B3b5QEqV "https://github.com/idmitriev/eslint-plugin-better")

Самая интересная статья / доклад / лекция 2014-2015 года по вашей версии?

Расскажи. Once you go black you never go back? [@nikitonsky](https://twitter.com/nikitonsky "Nikita Prokopov")

RT [@wtfil](https://twitter.com/wtfil "Фил"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") приложение для зацикливания отдельных кусков песни \(полезно для начинающих музыкантов\)  
[github.com/wtfil/song-loo…](https://t.co/tsf4QxZiGi "https://github.com/wtfil/song-looper")

RT [@mlfrg](https://twitter.com/mlfrg "Alexey Taktarov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") Конечные поля и кольца на JS [molefrog.com/rye/](http://t.co/XsZN93WDz7 "http://molefrog.com/rye/") \(чтобы строить красивые картинки 😊 [molefrog.com/rye/demo/galoi…](http://t.co/MNghJe4k0W "http://molefrog.com/rye/demo/galois/")

Моя любимая — вот эта. «База данных шиворот навыворот.» [blog.confluent.io/2015/03/04/tur…](http://t.co/zB6WBihQlE "http://blog.confluent.io/2015/03/04/turning-the-database-inside-out-with-apache-samza/")

RT [@asolovyov](https://twitter.com/asolovyov "Alexander Solovyov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я знаю ClojureScript и знаю тех, кто знает ClojureScript. :-\)

RT [@asolovyov](https://twitter.com/asolovyov "Alexander Solovyov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") люди всегда важнее всего, имхо, но качество языка вообще % на 60-70 это коммьюнити и экосистема. А так, конечно…

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Social Coding Contract by [@searls](https://twitter.com/searls "Justin Searls") [blog.testdouble.com/posts/2014-12-…](http://t.co/SOE9SWGHIB "http://blog.testdouble.com/posts/2014-12-02-the-social-coding-contract.html")

RT [@nikitonsky](https://twitter.com/nikitonsky "Nikita Prokopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот например [tonsky.livejournal.com/284511.html](http://t.co/tkramypjZv "http://tonsky.livejournal.com/284511.html")

Что используете в основном проекте? ES5? ES6? ES6 + experimental ES7ish extensions?

RT [@andrepolischuk](https://twitter.com/andrepolischuk "Andrey Polischuk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Манипуляции со словами после числительных [github.com/andrepolischuk…](https://t.co/tz60Hnu6ms "https://github.com/andrepolischuk/numd")

RT [@aluuu](https://twitter.com/aluuu "Усиление и Манатан"): [@asolovyov](https://twitter.com/asolovyov "Alexander Solovyov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мда, хитро\) Что на счёт Elm думаете, кстати? Стали бы в тащить в проект, если человек из команды захотел…

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  
Извлечение свойств md-статей: заголовок, дата, описание, контент.  
Чтобы не писать YAML, как в jekyll.  
https://[npmjs.com/package/articl…](https://t.co/9QHs0NTf7J "https://www.npmjs.com/package/article-data")

RT [@lazzy\_panda](https://twitter.com/lazzy_panda "Dmitry Maslov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Web component для отображение github's gists на Polymer [github.com/dmaslov/github…](https://t.co/7UgD6MPq3B "https://github.com/dmaslov/github-gist")

RT [@forever\_frey](https://twitter.com/forever_frey "Forever Frey"): [@lisovskyvlad](https://twitter.com/lisovskyvlad "Влад Лисовский") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") попробуй, вдруг взлетит

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): Кто чем пользуется для отслеживания JS ошибок на проде? Сервисы? Библиотеки?  
/сс [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/sudodoki/copy-…](https://t.co/X4nbDN0iso "https://github.com/sudodoki/copy-button") - кнопка-компонент для копирования в буфер. Чтоб без флеша. Для nodeschool [github.com/nodeschool/nod…](https://t.co/ysjREselx6 "https://github.com/nodeschool/nodeschool.github.io/issues/145")

RT [@alxe\_master](https://twitter.com/alxe_master "Александр Пасынков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") gruntO оптимизатор структуры Биллд процесса [github.com/aliaksandr-pas…](https://t.co/Xy03RC5g8t "https://github.com/aliaksandr-pasynkau/grunto")

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") babel с es7

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон") по ходу все самые хорошие разработчики не работают. Я вот вышел на работу и не знаю, хорошая ли это …

Я пойду стричься, подумаю над темами на неделю. Кидайте еще, о чем хотите поговорить. Можно в личку если что-то скользкое.

## Вторник <small>124 твита</small>

Привет. Я проснулся.

Давайте сегодня поговорим про стили. BEM-именование уже стало мейнстримом, правда? А видели ли вы CSS Modules?

Например, есть мнение, что BEM — конечно, здорово, но это как неймспейсы в ES5 без модулей. А нужны-то модули. [medium.com/seek-ui-engine…](https://t.co/dplFa6lrmm "https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284")

Есть еще мнение, что CSS — это просто еще один compile target, а язык описания должен быть один — JS и компоненты. [github.com/petehunt/jsxst…](https://t.co/QauoDiC9mu "https://github.com/petehunt/jsxstyle")

Скажем, [@andreysitnik](https://twitter.com/andreysitnik "Andrey Sitnik") любит CSS. Именно как язык/синтаксис. А [@jashkenas](https://twitter.com/jashkenas "Jeremy Ashkenas") считает, что вебу не нужно три языка. [youtu.be/DspYurD75Ns?t=…](https://t.co/2gS08oT3SL "https://youtu.be/DspYurD75Ns?t=39m")

Что именно в Webpack значит require\('./something.css'\)? Идея в том, что это никак не отличается от require\('./something.coffee'\) и т.п.

Если к проекту не подключить билд-трансформу для \*.css, то это не сбилдится. Ведь таргет-язык у нас всё-таки JS.

Но можно подключить трансформу, которая превращает файл стилей в JS-модуль, кладущий эти стили в &lt;style&gt;-тэг.

Теперь require\('./something.css'\) обретает смысл — это значит «этот JS-файл зависит от того, чтобы эти стили были в head». Зависимости FTW!

Причем код не указывает, \_как именно\_ эти стили соединяются. Может быть, они выделяются при компиляции в отдельный файл. Деталь реализации.

Зато с явными зависимостями не бывает мертвых стилей, файлов, которые боишься убрать, или watch\('\*\*/\*.css'\). Потому что всё явно, как в JS.

Это простейший вариант. Более умная трансформация может возвращать объект вида { attach\(\), detach\(\) }. [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev")

RT [@suevalov](https://twitter.com/suevalov "Alexander Suevalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") переписал свой сайт с CSS Modules. Полет отличный.

RT [@morhetz](https://twitter.com/morhetz "Pavel Pertsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") webpack postcss local-scope  
bem ужасен, по-моему, потому что пытается решать не те проблемы и не теми методами

RT [@bem\_xxx](https://twitter.com/bem_xxx "БЭМ"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") БЭМ это не только лишь CSS!

RT [@dmitry\_dok](https://twitter.com/dmitry_dok "dmitry"): [@bem\_xxx](https://twitter.com/bem_xxx "БЭМ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") БЭМ это обмен файлами. БЭМ это гигабайты свежей информации. БЭМ это общение. БЭМ это рост. БЭМ это св…

RT [@suevalov](https://twitter.com/suevalov "Alexander Suevalov"): [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") изоляция на уровне сборки, простые наименования классов, все локальное, sourcemaps можно подрубить.

Конечно, лучшее в CSS Modules — это их лого. [github.com/css-modules/cs…](https://t.co/PkmczUu0lU "https://github.com/css-modules/css-modules") [pic.twitter.com/7nAR6Fzi69](http://t.co/7nAR6Fzi69)

Конечно, CSS-в-JS еще сыро. Но нельзя отмахнуться, что проблема надуманная. Семь грехов CSS: [speakerdeck.com/vjeux/react-cs…](https://t.co/82AUb01zbT "https://speakerdeck.com/vjeux/react-css-in-js") [pic.twitter.com/QkFGneJL8r](http://t.co/QkFGneJL8r)

RT [@agudulin](https://twitter.com/agudulin "Alexander Gudulin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на мотив css is awesome, надо полагать [pic.twitter.com/naWrQfYheo](http://t.co/naWrQfYheo)

Как BEM, компоненты и зависимости-в-JS дополняют друг друга: [medium.com/seek-ui-engine…](https://t.co/2N304i9tck "https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b"). Этот пост — прелюдия к CSS Modules.

RT [@morhetz](https://twitter.com/morhetz "Pavel Pertsev"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/MicheleBertoli…](https://t.co/1Wz19PUvbE "https://github.com/MicheleBertoli/css-in-js")  
колонка autoprefixer included

RT [@morhetz](https://twitter.com/morhetz "Pavel Pertsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") my bad, я отстал от жизни  
Создатель postcss-local-scope задепрекейтил его в пользу развития css modules  
https://t[github.com/markdalgleish/…](https://t.co/397l2LwP6B "https://github.com/markdalgleish/postcss-local-scope-example")

Быстрый ответ — после Webpack для меня пропала необходимость в Grunt/Gulp. В Browserify нет Hot Module Replacement :-\( [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk")

Давайте поговорим про деньги и фронтэнд. Что вы делаете, и сколько вы зарабатываете? Можно в личку или с throwaways — я размещу анонимно.

По поводу [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968") — только что открыл DM для всех, пишите.

Анонимно: спб, тимлид/разработчик, энтерпрайз + разработчик кода встраивающегося на сторонние сайты. ~=150к чистыми [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@oleg008](https://twitter.com/oleg008 "Oleg Slobodskoi"): [@suevalov](https://twitter.com/suevalov "Alexander Suevalov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а я вот считаю что мы ничего не теряем\) мы используем более гибкий язык который частично уже добавляетс…

[github.com/petehunt/webpa…](https://t.co/eelqicvjtV "https://github.com/petehunt/webpack-howto"), [christianalfoni.github.io/react-webpack-…](https://t.co/pTpwb1l8mN "https://christianalfoni.github.io/react-webpack-cookbook/") [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@dzhiriki](https://twitter.com/dzhiriki "Aleksandr Petrov") [@suevalov](https://twitter.com/suevalov "Alexander Suevalov")

Фронтэнд клиентской админки в немаленькой компании \(~200 чел. персонала, посещаемость 1м/мес\) на хитром стеке. 110к. [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Уточнение: Москва

Еще есть [survivejs.com/webpack\_react/](http://t.co/CtCuh3Y0UJ "http://survivejs.com/webpack_react/") — очень хороший ресурс. [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@dzhiriki](https://twitter.com/dzhiriki "Aleksandr Petrov") [@suevalov](https://twitter.com/suevalov "Alexander Suevalov")

Толстый клиент, компания 6 человек в Европе, 90к евро в год, 55% налоги :/ [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я сижу на зарплате 800$/мес. мне хватает. но после чата dev-ua/frontend-jobs я понял что это почти плинтус. п…

Напоминаю, что сегодня я ретвичу и публикую зарплаты фронтэндеров и фронтэндщиц. Пишите анонимно в DM.

200k рублей. Удаленка, тимлид, фронт+бек. [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@justjsdev](https://twitter.com/justjsdev "Just Some Developer"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Недавно ходил по собеседованиям с Angular+D3 и прочим js. С опытом бэкэнда и аналитики получил предложения 150 …

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") напоминает «нужна только Java», «нужен только XML». Это не будет работать, так как мы должны оптмизировать …

RT [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev"): [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему бы не взять ближайший turing-complete язык \(js\) для этого

Питер, джуниор, 60 [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

Голландия, фронтенд тимлид: 3900€/мес после налогов [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@andreypopp](https://twitter.com/andreypopp "Andrey Popp"): [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") jsx это это internal dsl, против CSS который external DSL. См. [gbracha.blogspot.cz/2014/09/a-doma…](http://t.co/SCuPQ1B8r1 "http://gbracha.blogspot.cz/2014/09/a-domain-of-shadows.html?m=1")

начинал с джуниора в 45 [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

Раз уж пошла такая пьянка, есть ли что-то, что вы бы хотели донести до своих коллег? \(Анонимно. Я удаляю DM-ы по мере получения.\)

RT [@andreypopp](https://twitter.com/andreypopp "Andrey Popp"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") скучаешь без secret?

Фронт, backbone, западный клиент, удалённо, около 1300-1500 евро брутто, по часам начисляется [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

Провинция, тимлид, только фронтенд, опыт бекенд + аналитика, 100К чистыми [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

Надо и на js уже внедрять тестирование [twitter.com/jsunderhood/st…](https://t.co/apEluqo3lJ "https://twitter.com/jsunderhood/status/613379086954663936")

Интересно поговорить кто сколько спит и какая при этом производительность труда;\) [twitter.com/jsunderhood/st…](https://t.co/apEluqo3lJ "https://twitter.com/jsunderhood/status/613379086954663936")

RT [@akrekotun](https://twitter.com/akrekotun "Alexey Krekotun"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") но чем раньше ложусь, тем меньше сплю

Расскажите, как вы организуете управление стейтом в JS-приложении. MVC? Flux? Rx? Что-то новое?

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Flux, но со Swarm.js это начинает выглядеть странно

Тимлид, фронт, реакт, бекбон, опыт фуллстека, 120. [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

Уточнение: Москва

Питер, front-end тимлид, 3000$/мес [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@zemlanin](https://twitter.com/zemlanin "Anton Verinov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Нечто flux-подобное на Rx-потоках

Frontend-архитектор. UX/UI, development management, workflow automation, fullstack, ±devops. 10 лет, Красноярск, 50к [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@knaipa](https://twitter.com/knaipa "Хунтовий Правосектан"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Винница, Фриланс - верстка + ВП. 1000

RT [@MaStep92](https://twitter.com/MaStep92 "Maxim Bordyuzha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Заметил по себе, что норма 8 часов.Если меньше, то после обеда уже зеваю и производительность хромает.

RT [@suevalov](https://twitter.com/suevalov "Alexander Suevalov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на React - Flummox, попробовал Redux. На Angular все плохо. По крайней мере так кажется после React :\)

RT [@MaStep92](https://twitter.com/MaStep92 "Maxim Bordyuzha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Не верю в рассказы, что можно спать по 4 часа и быть продуктивным\)

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ванильный Flux. FTW!

RT [@dmitruksergey](https://twitter.com/dmitruksergey "Serhii Dmytruk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сплю ~8 часов, по 3 силовых и беговых тренировки в неделю. Работается тоже хорошо :-\)

RT [@\_cloudo](https://twitter.com/_cloudo "Cloudo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ractive -&gt; ractive + flummox -&gt; react + flummox

RT [@discopalevo](https://twitter.com/discopalevo "discopalevo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") flux+immutable rx тоже есть но на 99% используется просто как EventEmmiter

RT [@dimchez](https://twitter.com/dimchez "Dmitry Demyankov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") используем React + Reflux

RT [@andreypopp](https://twitter.com/andreypopp "Andrey Popp"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") crdt можно представить как свёртку \(reduce\) операций ;\) [gsd.di.uminho.pt/members/cbm/ps…](http://t.co/SEQ5VplCdR "http://gsd.di.uminho.pt/members/cbm/ps/crdtOpsMiddleware.pdf") см. там eval\(op,…

К слову об управлении стейтом. Три недели назад я начал писать новую библиотеку. Она называется Redux. [github.com/gaearon/redux](http://t.co/Hs495FLBeQ "http://github.com/gaearon/redux")

Я не люблю изобретать велосипед, но не нашел другого пути. У меня было три цели.

Первая цель: сохранить преимущества Flux. Только экшны могут менять стейт, сторы инкапсулируют управление независимыми областями стейта.

Вторая цель: поменять Flux так, чтобы можно было перезагружать логику сторов на ходу с помощью React Hot Loader и подобных решений.

Третья цель: поменять Flux так, чтобы можно было легко написать devtools для record/replay, time travel, \(de\)hydration без участия юзера.

Я буду рассказывать про Redux в своем докладе на React Europe в июле. В этом треде готов отвечать на вопросы. \)

мск, в трудовой "верстальщик", федеральный ритейл, пилю внутренние системы на ExtJS,100к р/мес на руки с премиями [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@morhetz](https://twitter.com/morhetz "Pavel Pertsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Redux клевый по первому опыту. Но крайне жаль, что мейнтейнер Flummox'а отказался его развивать дальше. Из-за вых…

RT [@oliveroppole](https://twitter.com/oliveroppole "Oliver Oppole"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Киев, синьор фронтенд-разработчик в аутсорсинге, не тимлид. $5500 чистыми в месяц после налогов.

Они даже не содержат её. То что во Flux хранилища, в Redux — чистые функции. \(previousState, action\) =&gt; nextState [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") хранилища как data reducers — это очень хорошая штука, имхо

Я взял эту идею из Elm. [github.com/evancz/elm-arc…](https://t.co/VAfM3wu28O "https://github.com/evancz/elm-architecture-tutorial#the-basic-pattern") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а тот из Haskell. XMonad по такому же принципу построен. [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") возможно такие хранилища не стоит называть хранилищами :\)

RT [@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть какой-либо roadmap? Примерная дата 1.0?

RT [@zemlanin](https://twitter.com/zemlanin "Anton Verinov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") Я в своих pet-проектах использую rxStream.scan\(f\) для стейта. Потом подписал на это s…

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") глупость. Флакс — всего лишь паттерн. Кто мешает написать только имплементацию сторов с нужными…

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [github.com/alexeyraspopov…](https://t.co/3Wzjy6fjFs "https://github.com/alexeyraspopov/flux-stateful#immutable-pure-stores") все те же редьюсеры. У стора есть метод, которым можно напихать в него …

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я правильно понимаю, что в redux есть некий global state, содержащий все данные приложения, который использу…

Senior Frontend Engineer, Киев, 35$/час, в месяц до 6к$ [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

Да. В Redux я это делаю, парадоксально, через «лифтинг» экшнов, higher-order reducer и «анлифтинг» стейта [github.com/gaearon/redux/…](https://t.co/L2WHxGYmOl "https://github.com/gaearon/redux/issues/113#issuecomment-114049804") [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

RT [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") все ходим вокруг одного \(state,action\) -&gt;state [goo.gl/1kUAf0](https://t.co/dBfTVhH347 "https://goo.gl/1kUAf0")  demo https[goo.gl/1kUAf0](https://t.co/dBfTVhH347 "https://goo.gl/1kUAf0")

RT [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") поправочка демка тут - [goo.gl/er5j6y](http://t.co/U3Vuh6JpUr "http://goo.gl/er5j6y")

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как в redux происходит коммуникация с сервером? например во flummox за это отвечают экшены, но меня это инту…

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") и вообще весь ваш data flow — пару строчек кода :D [pic.twitter.com/RTctU4NokI](http://t.co/RTctU4NokI)

Зло — не global state, зло — mutable global state. :-\) [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") слайд взят отсюда \([alexeyraspopov.github.io/talks/what-the…](http://t.co/7ofP2FVVNf "http://alexeyraspopov.github.io/talks/what-the-flux/")\), вдруг будет интересным.

Это лучшая пареза про Flux, что я до сих пор видел — by [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [alexeyraspopov.github.io/talks/what-the…](http://t.co/jOixPk2uki "http://alexeyraspopov.github.io/talks/what-the-flux/") [pic.twitter.com/L3KIY1QPkW](http://t.co/L3KIY1QPkW)

RT [@safrankov](https://twitter.com/safrankov "Il'ya Safrankov "): Читаю [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и немного охреневаю от уровня зп у фронтендеров. Давно надо было валить с текущего места.

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") выглядит отлично, нужно поиграться с этим подходом. Спасибо

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@safrankov](https://twitter.com/safrankov "Il'ya Safrankov ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") такие же ощущения, только про технологии. Как будто все уже сменили пару версий всевозможных \*\*\*u…

Скорее нет. Смотря что ты имеешь в виду. Экшн — просто данные о том, «что случилось».  [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

Стор \(или редюсер в Redux\) никогда не должен сам диспетчить экшны — только реагировать на них. [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

С другой стороны, ты можешь сделать функцию, которая диспетчит несколько экшнов. \(Например, запрос и ответ сервера.\) [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

Потому что он не сохраняет преимуществ Flux. Нельзя сделать центральный логгинг, time travel, record/replay [@dimchez](https://twitter.com/dimchez "Dmitry Demyankov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нуб-вопрос: может ли экшен вызвать другой экшен? допускает ли это flux-way или таких коммуникаций лучше избе…

Я об это пару месяцев голову ломал, трудно в цепочке твитов объяснить. Когда сами тулзы выпущу, будет понятнее. [@Chudesnov](https://twitter.com/Chudesnov "散厦知") [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

RT [@vdv73rus](https://twitter.com/vdv73rus "Vislov Dmitry"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а ситуация когда стор ждёт другой стор \(waitFor\) нормальна или это проблема с архитектурой?

Про это хорошая дискуссия здесь: [gist.github.com/gaearon/d77ca8…](https://t.co/x9MskRHZcE "https://gist.github.com/gaearon/d77ca812015c0356654f"). Я объясняю почему с редьюсерами это не проблема. [@vdv73rus](https://twitter.com/vdv73rus "Vislov Dmitry")

RT [@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats"): Если судить по мини-опросу про зарплаты фронтенд-разработчиков в [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), то на заработки надо валить не в Европы, а в…

В Redux ты сам решаешь, что использовать для моделей. Ему всё равно. \) Хочешь — immutable, хочешь plain objects или что еще. [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov")

RT [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") довольно успешно пишу код без Flux на Morearty с иммутабельностью. Почему в redux ты не используешь Immutable…

Сигнатура — \(state, action\) =&gt; state. Ты можешь использовать всё что угодно в качестве state в своих редюсерах. [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov")

RT [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тот же time travel отлично ложится на immutable структуры данных

Я согласен. Redux делает ассампшн что, что бы ты ни использовал, оно нигде не мутируется. [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov")

По моему опыту достаточно просто использовать ES7 rest/spread syntax, чтобы не мутировать объекты/массивы. [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Уровень жизни ниже. Для того чтобы жить лучше, надо платить: за "элитную" квартиру, за машину, глот…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin") Тут холодно и темно!!! Но через 5 лет можно получить паспорт и валить на юг :-\)

Если позовут куда, расскажу \) [@kuksikus](https://twitter.com/kuksikus "R.M.")

Чтобы работало, надо { "stage": 1 } в .babelrc [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov")

Можно let { …rest, stuffIDontCareAbout } = stuff; return rest [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник")

Завершаю сегодняшний поток добрым видео. Спокойной ночи! [vimeo.com/88035957](https://t.co/M7TD3kbl68 "https://vimeo.com/88035957")

Провинция, front end \(angular\) - 40к и это еще много. [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а не было желания написать свой роутер для реакта?

Мне нравится React Router. Он еще не совсем классный, но будет классный в 1.0. [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov")

Миксины опциональные, ты можешь использовать контекст напрямую. [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov")

Роутер 1.0 будет легко "направлять" через Flux полностью, так что состояние может лежать в твоем сторе. [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov")

## Среда <small>40 твитов</small>

Киев, пусть будет Senior, не лид, Node.js/React, $3.5k - 4% [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

$3200 после налогов, React+Flux приложения для бэкенда ритэйловых сервисов [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

а можно как нить после митапа пойти не пиво пить, а взорвать косяк, да вообщем можно и до\) [twitter.com/jsunderhood/st…](https://t.co/apEluqo3lJ "https://twitter.com/jsunderhood/status/613379086954663936")

RT [@i\_told\_ya](https://twitter.com/i_told_ya "Isaev Igor"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") mvc и модели на основе [github.com/share/sharejs](https://t.co/mepRhCB9be "https://github.com/share/sharejs"), во снах снится что все переписал на flux

RT [@paulmillr](https://twitter.com/paulmillr "Paul Miller"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") “до 6к” это занятная метрика. Если считать чистые часы на почасовке, то почти всегда будет меньше 130. У многих…

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") зарелизился Nuclide от Facebook [nuclide.io](http://t.co/ylP1xYDGqg "http://nuclide.io/")

RT [@8gene](https://twitter.com/8gene "Eugene"): [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") \(1 [github.com/evancz/elm-arc…](https://t.co/ojwYDZgU3E "https://github.com/evancz/elm-architecture-tutorial/")\) \(2 [github.com/slamdata/pures…](https://t.co/mAWMuTUAM7 "https://github.com/slamdata/purescript-halogen")\)  без синтетичних су…

RT [@8gene](https://twitter.com/8gene "Eugene"): [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") типи допомагають зрозуміти що треба 2 стейт машини - для бізнес-логіки, і д…

Асинхронный action creator может вернуть просим, например, чтобы компонент имел к нему доступ. [@victor\_suzdalev](https://twitter.com/victor_suzdalev "Victor Suzdalev") [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

Я же ни из кого не вытягиваю клещами. Погугли движение [#talkpay](https://twitter.com/search?q=%23talkpay). Знать ЗП на рынке — важно. [@konenkov](https://twitter.com/konenkov "Sergey Konenkov")

RT [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон"): [@konenkov](https://twitter.com/konenkov "Sergey Konenkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да ну, узнать, чо почём, может, ты мало получаешь для своего стажа/позиции, география - вот это вот все

RT [@gryzzly](https://twitter.com/gryzzly "gryzzly"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") every berlinjs I attended, до, во время и после.

RT [@aluuu](https://twitter.com/aluuu "Усиление и Манатан"): [@8gene](https://twitter.com/8gene "Eugene") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander") [@roman01la](https://twitter.com/roman01la "Roman Liutikov") боже мой, это же Elm, все в машину! [youtube.com/watch?v=Agu6ji…](http://t.co/mzeytmiq1q "http://www.youtube.com/watch?v=Agu6jipKfYw")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@konenkov](https://twitter.com/konenkov "Sergey Konenkov") информация особенно актуальна для большого аутсорса в СНГ, где зп пытаются занизить до мини…

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон") [@konenkov](https://twitter.com/konenkov "Sergey Konenkov") вообще, пока такие данные остаются массово закрытыми, остается простор для злоупотреблений [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@sudodoki](https://twitter.com/sudodoki "Джон, просто Джон") [@konenkov](https://twitter.com/konenkov "Sergey Konenkov") сплошь и рядом вижу, как девушкам на аналогичной должности не доплачивают, например [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Кстати, про себя. В российском стартапе получал от $2300 до $2700 в месяц. Сейчас — консалтинг $100/час. [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как ты посоветуешь решать проблему постепенной прорисовки интерфейса при асинхронной загрузке разных блоков д…

RT [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") неготовность данных, спиннеры, пустые области на странице

Специальный компонент типа AsyncProps занимается резолвингом и не рендерит детей, пока они не готовы: [github.com/rackt/react-ro…](https://t.co/HS0Tx1l1jy "https://github.com/rackt/react-router/blob/master/examples/async-data/app.js") [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov")

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@victor\_suzdalev](https://twitter.com/victor_suzdalev "Victor Suzdalev") что-то я совсем запутался. мы просто пока на flummox-e, а там же экшены и экшен-криэйтеры п…

Вот хорошее объяснение разницы между Actions и Action Creators: [github.com/gaearon/redux/…](https://t.co/1vukbvhDJB "https://github.com/gaearon/redux/pull/140#issuecomment-114756152") [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin") [@victor\_suzdalev](https://twitter.com/victor_suzdalev "Victor Suzdalev")

Просто надо как-то деньги зарабатывать после ухода из компании. \) [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

Я сейчас готовлюсь к конференции React Europe. Посоветуйте, как сделать хорошо флоу рассказа? У меня нет опыта настоящих конференций.

RT [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") лайв кодинг решает! Свежайший пример: [youtube.com/watch?v=j-kj2q…](http://t.co/J9kPj8Fhza "http://www.youtube.com/watch?v=j-kj2qwJa_E")

RT [@voischev](https://twitter.com/voischev "Ваня Воищев"): Пацаны-ребяты, посоветуйте модульный/компонентный CSS фреймворк, прям список всех что знаете. Нужно для исследований.  
RT plz

RT [@kojoru](https://twitter.com/kojoru "Konstantin Yakushev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как находил клиентов для консалтинга?

Сами пишут. Потому что много видного опен-сорса. Еще полезно нетворчиться на митапах и читать лекции, ребята подкидывают работу [@kojoru](https://twitter.com/kojoru "Konstantin Yakushev")

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как в фильмах — вступление, закрутка, плато, раскрутка. Например: о себе, проблема, анализ, решение

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кроме того, старайся добавить сильные цитаты, которые могут уйти в Твиттер

RT [@harisov](https://twitter.com/harisov "Vitaly Harisov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почитай книгу «Мастерство презентации», очень хорошая.  
  
[mann-ivanov-ferber.ru/promo/presenta…](http://t.co/TTkESCpvsu "http://www.mann-ivanov-ferber.ru/promo/presentation/")

Мне комфортно два-три часа в \(будний\) день, чтобы остальное время заниматься опенсорсом. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") [@paulmillr](https://twitter.com/paulmillr "Paul Miller")

React/Flux [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@kojoru](https://twitter.com/kojoru "Konstantin Yakushev")

Одесса, фронтенд + Node.js, $2k [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

Разве Webpack теперь работает не через PostCSS? [github.com/webpack/css-lo…](https://t.co/xeVJmjlSlF "https://github.com/webpack/css-loader/commit/a78e007e206439348bf04d4c0ffd7b0324c75d26") [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

Я не очень понимаю, о чем ты. Чанки делаются одной строчкой в коде, и ты их получаешь автоматически. [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

ExtractTextPlugin — оптимизация. Она не всем нужна. И если хочешь билдить CSS отдельно сам, просто делай это :-\) [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

То есть, Webpack не заставляет тебя использовать его для CSS. Многие используют его только для JS. [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

Странно, как это может быть аргументом в пользу Browserify. [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

Для меня поддержка hot reloading достаточный плюс \) [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

## Четверг <small>29 твитов</small>

Верстка магазина и других сайтов компании. В основном только HTML/CSS, немного JS, шаблоны на PHP. Беларусь, 1300 $ [twitter.com/jsunderhood/st…](https://t.co/UK8Y0YUjpX "https://twitter.com/jsunderhood/status/613323036968787968")

RT [@dmitriyminer](https://twitter.com/dmitriyminer "Miner"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") где вы берете заказы, я как начинающий даже за бесплатно не могу найти заказ Python/Django/Bootstrap

RT [@cakeinpanic](https://twitter.com/cakeinpanic "Katerina Tort"): .[@dmitriyminer](https://twitter.com/dmitriyminer "Miner") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  upwork\(odesk\). если не справился – возвращаешь деньги, и клиент не может оставить отрицательн…

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Есть билет на React Europe \(418€\), сделай пожалуйста ретвит, может найдутся желающие.

RT [@dmitriyminer](https://twitter.com/dmitriyminer "Miner"): [@cakeinpanic](https://twitter.com/cakeinpanic "Katerina Tort") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") все хотят портфолио, а врать как-то не хочется

RT [@cakeinpanic](https://twitter.com/cakeinpanic "Katerina Tort"): [@dmitriyminer](https://twitter.com/dmitriyminer "Miner") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня написано "я молодой, но страстно желающий работать падаван". ну и тесты пройдены. нормал…

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): Finally, Atom 1.0! [twitter.com/AtomEditor/sta…](https://t.co/F0ZpSddefo "https://twitter.com/AtomEditor/status/614085665634922496")

Извините, что сегодня молчун. Готовлю слайды к React Europe. Дизайнер помогает \)

Давайте сегодня такой формат — отвечаю на вопросы про hot reloading JS-кода. От общих до сугубо технических.

Начну с пары инструментов. Есть вот Figwheel. Кажется, он офигенный. Но увы, только ClojureScript. :-\( [youtube.com/watch?v=j-kj2q…](http://t.co/fbsVeRJ3kE "http://www.youtube.com/watch?v=j-kj2qwJa_E")

Есть React Hot Loader. Он только для реакта. Это мой проект. Вот видео, с которым он запустился: [vimeo.com/100010922](http://t.co/2DsBRTW2Nk "http://vimeo.com/100010922")

Есть Amok. В отличие от Figwheel и RHL, он зависит от конкретного браузера \(Chrome\). [amokjs.com](http://t.co/E81jsGz3Nk "http://amokjs.com/")

LiveReactload использует тот же движок, что и RHL, но под Browserify: [github.com/milankinen/liv…](https://t.co/idrYKYBz6x "https://github.com/milankinen/livereactload"). К сожалению, он re-evaluat-ит все модули.

React Native Webpack Server позволяет использовать живую перезагрузку React Hot Loader внутри React Native: [github.com/mjohnston/reac…](https://t.co/Xt3XHH8YLW "https://github.com/mjohnston/react-native-webpack-server")

RT [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в каких случаях применим hot loader?

Проект должен использовать Webpack. Работает редактирование методов компонентов на ходу + модулей, у которых нет состояния [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

Конечно, он работает только с React-компонентами. [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в двух словах: по какому принципу это всё работает? Почему, например тот же flummox не полностью hot reloada…

Хот релоадинг работает в модулях, у которых нет локального стейта. Поэтому он работает для компонентов и чистых функций. [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

В Flummox вторы — классы. Из них трудно «выдирать» стейт, потом переносить в новый инстанс, как-то перерегистрировать их. [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

В Redux вместо уторов чистые функции-редюсеры, которые «собираются» композицией в одну. Эта одна функция — всё, что заменяется [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

React Hot Loader заменяет функцию render\(\), и в итоге рут-компонент получает новую чистую функцию в props, и ей пользуется. [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

RT [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как думаешь, реально браузерным вендорам договориться о нативном стандарте для перегрузки кода, типа chrom…

Чем дольше я занимаюсь hot reloading, тем больше я уверен, что это не имеет смысла. Это не дело браузера — это дело бандлера [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev")

RT [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мне кажется что произвольный код с сохранением состояния без помощи браузера не перегрузить

Пытаться сохранить локальное состояние — изначально неверный подход. Отсюда проблемы. Надо выносить состояние вне. [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev")

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev") FigWheel доказывает обратное. Но… ClojureScript. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Вынос состояния «вне» имеет другие плюсы — возможность строить крутые тулзы для logging и time travel. [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev")

Я думаю, что Webpack Hot Module Replacement + тулзы типа React Hot Loader достойно решают эту проблему. [@suxxes](https://twitter.com/suxxes "Father Frodo") [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev")

## Пятница <small>79 твитов</small>

Вы пользуетесь Browserify или Webpack? Почему?

За Browserify: [gist.github.com/substack/68f8d…](https://t.co/flciffEBa9 "https://gist.github.com/substack/68f8d502be42d5cd4942")

За Webpack: [gist.github.com/substack/68f8d…](https://t.co/IBNBzEiXaF "https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1364980")

Webpack vs Browserify на React Podcast: [reactpodcast.com/2015/06/webpac…](http://t.co/ZhSuA0wkdN "http://reactpodcast.com/2015/06/webpack-vs-browserify/")

Пит Хант называет феномен «modularity shaming» [gist.github.com/substack/68f8d…](https://t.co/dEBDVo0jrz "https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1365101")

Джеймс Лоно рефлексирует о том, как модули — контракт нашего взаимодействия как разработчиков. [jlongster.com/Modularity](http://t.co/7FIWR2fKpw "http://jlongster.com/Modularity")

Лонг, Твиттер. Лон. Автокоррект :-/

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Browserify просто потому что у нас нет задач для фич специфичных для Вебпака.

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я "не знаю” чем я пользуюсь, у меня Ember CLI - он как Тефаль думает за меня

RT [@esergeev](https://twitter.com/esergeev "Evgeny Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а чем плох подход webpack-dev-server с перезагрузкой приложения во фрейме?

Не то что бы плох. Лично для меня не продуктивен. Теряю стейт, DOM. [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@marinintim](https://twitter.com/marinintim "Tim Marinin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что есть для JS для таймтрэвела?

Я сам не знаю, буду благодарен за ссылки. Поскольку ничего не нашел — пришлось написать Redux. :-\) [@marinintim](https://twitter.com/marinintim "Tim Marinin")

RT [@MaxMykhailenko](https://twitter.com/MaxMykhailenko "Max Mykhailenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin") а замена сторов?

В Redux нет уторов, есть редюсеры — чистые функции. Вот корневой редюсер и заменяется. А стейт вне него. [@MaxMykhailenko](https://twitter.com/MaxMykhailenko "Max Mykhailenko") [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

Это класс. Реакту не хватает такого. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

RT [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") grunt+browserify на работе, webpack для себя. особой разницы нет, но webpack все же чуточку быстрей и удоб…

Я сегодня буду твитить набегами. Пачками из пяти-шести штормотвитов на темы, которые меня волновали последний год.

RT [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") webpack шустрее, удобнее, все из коробки, отличная документация, куча лоудеров и плагинов фактически настарте…

RT [@mursya\_ru](https://twitter.com/mursya_ru "Елена Джетпыспаева"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") славабогу, а то весь мой тви из монолога :\) нужно аккуратнее

RT [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk"): [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") насчет отличной документации - это шутка такая?

У вебпака документация ок \(все опции на одной странице\), но вот интро/гайдов не хватает. [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов")

RT @Ask\_11: [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") browserify, потому что привык к нему. Несколько раз пробовал webpack, но натыкался на странности API и возвращался…

That's why styles need to be incapsulated into components ;-\) [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а считается ли антипаттерном писать вместо jsx функции? вообще есть ли разница? jsx же только для ридабилити?

Ты можешь писать createElement вручную, если хочешь. JSX сильно помогает читаемости. Плюс Babel будет его оптимизировать. [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr")

RT [@andreypopp](https://twitter.com/andreypopp "Andrey Popp"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") ещё JSX статически фиксирует семантику React элементов, что позволит делать более "сильные" оптим…

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@andreypopp](https://twitter.com/andreypopp "Andrey Popp") а где про это можно подробней почитать? документация jsx? [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

[github.com/facebook/react…](https://t.co/ZOKy814rT0 "https://github.com/facebook/react/issues/3226"), [github.com/facebook/react…](https://t.co/TVcC12d1hm "https://github.com/facebook/react/issues/3228") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") [@andreypopp](https://twitter.com/andreypopp "Andrey Popp")

RT [@esergeev](https://twitter.com/esergeev "Evgeny Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") покопался с redux, начинаю понимать чем удобен hot reload. Но иногда затыкается rebuild, приходится еще раз дела…

RT [@avevlad](https://twitter.com/avevlad "AveVlad"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда в проекте был Browserify, билд был ~30 sec на cmd+s, c Webpack 1-2 sec

Раз сегодня пятница, давайте джаваскриптовый Follow Friday. Кого нужно фолловить в JS-мире?

Вот мой список: [medium.com/@dan\_abramov/m…](https://t.co/gINQm6UQiy "https://medium.com/@dan_abramov/my-react-list-862227952a8c")

RT [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov"): [@avevlad](https://twitter.com/avevlad "AveVlad") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") стоило настроить кеширование и инкрементальное обновление.

RT [@aluuu](https://twitter.com/aluuu "Усиление и Манатан"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@czaplic](https://twitter.com/czaplic "Evan Czaplicki")

RT [@talgautb](https://twitter.com/talgautb "Талга УтБ"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") начал собирать [github.com/talgautb/front…](https://t.co/3ulBu0n4xo "https://github.com/talgautb/frontender") а потом как-то остановился :\)

RT [@avevlad](https://twitter.com/avevlad "AveVlad"): [@talgautb](https://twitter.com/talgautb "Талга УтБ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/AveVlad/russia…](https://t.co/tE36C0jfM2 "https://github.com/AveVlad/russia-it-podcast")

RT [@317070](https://twitter.com/317070 "317070"): My work of the past week. [twitter.com/sedielem/statu…](https://t.co/qHs2yqvTDw "https://twitter.com/sedielem/status/613764424655073280")

RT [@notmisha](https://twitter.com/notmisha "Misha Denil"): Inceptionism live stream: [goo.gl/A9CiGa](http://t.co/iNZMWViw6o "http://goo.gl/A9CiGa") neural networks dreaming in real time.

RT [@greybax](https://twitter.com/greybax "Aleksandr Filatov"): . [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а мне вот интересно как можно распиарить например свой репозиторий на гитхабе, есть ли какие-то советы/практики…

Всё просто. Надо для начала найти комьюнити. Например, React/Ember/etc комьюнити. Люди, вокруг которых вертится экосистема. [@greybax](https://twitter.com/greybax "Aleksandr Filatov")

Надо фоловить этих людей. Читать, что и почему они используют. Создавать что-то, что им нужно. Решить их проблемы. [@greybax](https://twitter.com/greybax "Aleksandr Filatov")

Одному что-то очень сложно сделать, потому что ты не знаешь, что людям нужно. В комьюнити полезное разлетается. [@greybax](https://twitter.com/greybax "Aleksandr Filatov")

Для меня решающее значение имеет твиттер. Не было бы твиттера — про мои проекты никто бы и не знал. Это мой рупор и фидбэк. [@greybax](https://twitter.com/greybax "Aleksandr Filatov")

Да, паре ребят, которые ты видишь что ретвитят такие ссылки. Конечно, должен быть готов README, должен соблюдаться привычный стиль [@greybax](https://twitter.com/greybax "Aleksandr Filatov")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@greybax](https://twitter.com/greybax "Aleksandr Filatov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") главное решать чью-то боль, затем иметь доки и тесты. А потом щепотка маркетинга

Еще помогает писать статьи. Увеличивает доверие к тебе. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@greybax](https://twitter.com/greybax "Aleksandr Filatov")

RT [@gesterok](https://twitter.com/gesterok "Vlad Marchuk"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@greybax](https://twitter.com/greybax "Aleksandr Filatov") [medium.com/@Shapiro/strip…](https://t.co/gCWew2OMqx "https://medium.com/@Shapiro/stripe-san-francisco-and-velocity-js-37575e29a51b") вот тут [@Shapiro](https://twitter.com/Shapiro "Julian Shapiro") рассказывает как пульнуть репозиторий в стратосферу

RT [@gesterok](https://twitter.com/gesterok "Vlad Marchuk"): [@greybax](https://twitter.com/greybax "Aleksandr Filatov") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@Shapiro](https://twitter.com/Shapiro "Julian Shapiro") специально для тебя, без  SF [hacks.mozilla.org/2014/05/open-s…](https://t.co/o1ateLu259 "https://hacks.mozilla.org/2014/05/open-source-marketing-with-velocityjs/")

RT [@tchak13](https://twitter.com/tchak13 "Paul Chavard"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в последней версии ember есть все что есть в react \(virtual dom, sane actions etc…\) + router :\) [@kolybasov](https://twitter.com/kolybasov "Mykola Basov") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

React — не про virtual DOM. Это просто деталь реализации. React — про декларативные компоненты на JS. [@tchak13](https://twitter.com/tchak13 "Paul Chavard") [@kolybasov](https://twitter.com/kolybasov "Mykola Basov") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

Это позволяет делать вещи типа React Native или React Hot Loader. [@tchak13](https://twitter.com/tchak13 "Paul Chavard") [@kolybasov](https://twitter.com/kolybasov "Mykola Basov") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не поверишь, Эмбер тоже. Я в шоке от того, насколько мой код на Эмбер похож на то, что люди на Реактепишут [@tchak13](https://twitter.com/tchak13 "Paul Chavard")[@kolybasov](https://twitter.com/kolybasov "Mykola Basov")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): The Debate Around “Do We Even Need CSS Anymore?”  
[css-tricks.com/the-debate-aro…](https://t.co/ZWbX4NkSLU "https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/")

RT [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov"): [@avevlad](https://twitter.com/avevlad "AveVlad") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да. Тоже мучался, потом нашел [github.com/gulpjs/gulp/bl…](https://t.co/eUz8Ij3MJN "https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md"), теперь билды 300 ms максимум.

RT [@esergeev](https://twitter.com/esergeev "Evgeny Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") можно ли сделать, чтобы при hot reload обновлялись и source maps?

Нужно поставить звездочку в этом issue: [code.google.com/p/chromium/iss…](https://t.co/Bx4NtTH7vM "https://code.google.com/p/chromium/issues/detail?id=492902") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов") раз разрешил всякого рода вопросы, как написать hot loader поверх webpack для не-реакт? видел ответ…

[webpack.github.io/docs/hot-modul…](http://t.co/rYdyv2gX12 "http://webpack.github.io/docs/hot-module-replacement-with-webpack.html"), [webpack.github.io/docs/hot-modul…](http://t.co/32mCbc9Jyr "http://webpack.github.io/docs/hot-module-replacement.html"), [jlongster.com/Backend-Apps-w…](http://t.co/jQl4MCMmiW "http://jlongster.com/Backend-Apps-with-Webpack--Part-III") [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов")

Еще я подсматривал, как style-loader это делает для CSS [github.com/webpack/style-…](https://t.co/iaeOmb4fUD "https://github.com/webpack/style-loader/blob/2823eb4a5e6eb6594a98fe0ea34454b7f7ffca7d/index.js#L21-L32") [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk") [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов")

Сегодня большой день для фронтэнд комьюнити. Встречайте NPM 3.0 beta. [github.com/npm/npm/releas…](https://t.co/BOmbPlp68Q "https://github.com/npm/npm/releases/tag/v3.0.0")

Прощайте, имплиситные peerDependencies. Тем не менее не спешите их удалять — они не УХОДЯТ, они МЕНЯЮТСЯ. Становятся полезнее.

Вам приходили решения проблем программирования во сне?

RT [@\_toydestroyer](https://twitter.com/_toydestroyer "Sergey Toy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я так ООП понял.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, переспать проблему мне часто помогало.

У меня пару раз так было \(и получались действительно хорошие решения\), но есть риск провалиться в «не помню, я сегодня спал или нет вообще?»

RT [@icelabaratory](https://twitter.com/icelabaratory "Ivan Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Отдавая столько времени и сил opensource, когда и как успеваешь зарабатывать на жизнь?

Сейчас временный перерыв, немножко осталось накопленных. Потом восполню контрактной работой [@icelabaratory](https://twitter.com/icelabaratory "Ivan Starkov")

RT [@asktwi](https://twitter.com/asktwi "Anna"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Частенько. Но скорее в момент засыпания. Тогда или сразу бегу к компу, или записываю на утро. Держу блокнот возле …

RT [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") requirejs уже не в моде?

Думаю уже давно нет. Он очень медленный в разработке, а в продакшн приходится клеить строго одним файлом. [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

И Webpack, и Browserify \(со специальными модулями\) поддерживают разбивку на чанки. Насколько я знаю, RJS этого не умеет. [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня после бокса хорошо идёт решать проблемы, голова очищается. Если конечно в голову не словил пару раз н…

RT [@icelabaratory](https://twitter.com/icelabaratory "Ivan Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Webpack главным образом за hot-reload, огромное спасибо кстати :-\),  
плюс с browserify всегда довесок gulp g…

RT [@23ydobemos](https://twitter.com/23ydobemos "Ilya Zayats"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кучу раз просыпался и искренне удивлялся отсутствию «ночных» коммитов в репозитории

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan"), ну, Webpack я пока не пробовал, он более комплексный, чем Brwsfy/RJS, имхо. A сравнение Brwsfy …

RT [@Krivlenia](https://twitter.com/Krivlenia "Константин"): [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan") rjs очень медленный на больших проектах. Нельзя задать кастомный лоадер для js. И это…

RT [@Krivlenia](https://twitter.com/Krivlenia "Константин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan") сейчас в проекте имеем 140000 значимого кода и ветка с webpack выглядит спасением

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, однажды во сне приснились строчки моего кода где был баг, который искал неделю.

## Суббота <small>95 твитов</small>

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): .[@Krivlenia](https://twitter.com/Krivlenia "Константин") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan") читаю про Webpack. Первый вопрос: почему они хотят CSS через JS грузить? http://t.co[webpack.github.io/docs/tutorials…](http://t.co/aYp0RORTO9 "http://webpack.github.io/docs/tutorials/getting-started/#first-loader")

RT [@Krivlenia](https://twitter.com/Krivlenia "Константин"): [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan") Если ты о том,что делается require\('\*.css'\). То это удобно,ты явно видишь зависимости…

Ты можешь выделять CSS в отдельный файл плагином на этапе компиляции: [webpack.github.io/docs/styleshee…](http://t.co/ZiT3nYRZzu "http://webpack.github.io/docs/stylesheets.html#separate-css-bundle")  [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

Вовсе необязательно \*грузить\* CSS через JS. Речь о том, чтобы \*описывать\* зависимости одним языком. [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

Как именно грузится — &lt;style&gt; или выделенным CSS файлом — оптимизация, и может меняться в dev/prod. [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

К примеру, &lt;style&gt; удобнее во время разработки, потому что работает hot reloading для CSS из коробки. [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

RT [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), а как это дальше попадает в DOM? Тоже через JS? А если у тебя min+rev на images? Есть ли manifest? [@Krivlenia](https://twitter.com/Krivlenia "Константин")[@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

Webpack подразумевает, что всё это делается через него. Там есть встроенная поддержка хешей и тп. [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

Например, вот результат компиляции. В исходном коде имена нормальные. [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan") [pic.twitter.com/xvcSxyCGBu](http://t.co/xvcSxyCGBu)

Всё это полностью настраиваемо. На каждом этапе можно добавить любые дополнительные трансформации. [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

По сути, ты можешь описать любые зависимости. Вебпак не имеет каких-то особых знаний о CSS/картинках [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

Просто есть несколько официально поддерживаемых плагинов для css/files. Вместо них можно свои юзать. [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

RT [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вопрос по реакту и флаксу. Могут ли компоненты, типа попапов, хранить в себе стейт, или же его тоже лучше …

Мой rule of thumb простой. Если стейт нигде в аппе больше не понадобится — локально. Если может понадобиться, стор. [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy")

Вот плагин, который превращает require\('xyz'\) в относительный URL результата [@lancedikson](https://twitter.com/lancedikson "Denis Demchenko") [@Krivlenia](https://twitter.com/Krivlenia "Константин") [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan") [pic.twitter.com/0TZSwh0WUy](http://t.co/0TZSwh0WUy)

RT [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") а как в этом случае hot reload отрабатывает? Убивает локальный стейт?

React Hot Loader не убивает локальный стейт компонентов. В этом его фишка. \) Он делает это, проксируя все методы [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev") [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy")

RT [@drzhbe](https://twitter.com/drzhbe "Сальников Станислав"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") насколько я знаю у тебя как минимум 2 крупных опенсорс проекта \(redux, dnd\). Как распределяешь свое время между ни…

Еще React Hot Loader. :-\) Перемещаю фокус. DnD 1.0 выпущен, я занялся Redux. После конференции выпущу Redux — пересмотрю приоритеты [@drzhbe](https://twitter.com/drzhbe "Сальников Станислав")

Заниматься несколькими вещами у меня никогда не получалось. Надо доводить проекты, чтобы они какое-то время могли жить без меня. [@drzhbe](https://twitter.com/drzhbe "Сальников Станислав")

RT [@limpbrains](https://twitter.com/limpbrains "Ivan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") используешь что-нибудь для генерации и валидации форм в React?

Лично я нет, но вопрос интересный, потому что какой-то одной лидирующей либы я не знаю. Подписчики? [@limpbrains](https://twitter.com/limpbrains "Ivan")

В целом, даже если не в сторы, всё равно стейт лучше выносить наверх: [medium.com/@dan\_abramov/s…](https://t.co/9elnPjzDWZ "https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0")

RT [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy"): [@dmitruksergey](https://twitter.com/dmitruksergey "Serhii Dmytruk") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если в умном компоненте несколько попапов, то каждый должен хранить состояние в сторе?

Хороший вопрос. Либо стол знает о разных попапах, и у них есть какие-то ID для разделения состояния. [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") [@dmitruksergey](https://twitter.com/dmitruksergey "Serhii Dmytruk")

Либо ты можешь использовать Redux, в котором это решается композицией редюсеров. [gist.github.com/gaearon/d77ca8…](https://t.co/x9MskRHZcE "https://gist.github.com/gaearon/d77ca812015c0356654f") [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") [@dmitruksergey](https://twitter.com/dmitruksergey "Serhii Dmytruk")

RT [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev") [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy") Дэн, а насколько твоя реализация хот лоадера зависит от реакта? Реально ли испо…

Webpack предоставляет API, который можно использовать для любой библиотеки. [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev") [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy")

Другое дело — насколько Knockout декларативный? Можно ли просто «заменить» функцию render? [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev") [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy")

React Hot Loader работает, потому что render\(\) не имеет сайт эффектов, и можно заменить на ходу [@milk\_is\_my\_life](https://twitter.com/milk_is_my_life "Sebastyan Pereiro") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev") [@YevhenBoyarsky](https://twitter.com/YevhenBoyarsky "Yevhen Boyarskiy")

RT [@icelabaratory](https://twitter.com/icelabaratory "Ivan Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@limpbrains](https://twitter.com/limpbrains "Ivan") Недавно исследовал эту тему это [github.com/gcanti/tcomb-f…](https://t.co/dSkMLxoePe "https://github.com/gcanti/tcomb-form") выглядит как единственное что-то еще жи…

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@andreypopp](https://twitter.com/andreypopp "Andrey Popp") привет! Не хочешь провести неделю [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")? Было бы чертовски круто!

Мой любимый блог по программированию: [prog21.dadgum.com](http://t.co/0Qj0UtX8Ka "http://prog21.dadgum.com/"). А ваш?

RT [@icelabaratory](https://twitter.com/icelabaratory "Ivan Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Этот [github.com/sebmarkbage?ta…](https://t.co/SUQsCQm8d3 "https://github.com/sebmarkbage?tab=activity") каждый раз когда я чувствую что я крут, читаю его комментарии. Крутизна слетае…

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я обожаю [@2ality](https://twitter.com/2ality "The 2ality blog") за подробности и технические детали.

Мой второй любимый блог по программированию: [johndcook.com/blog/](http://t.co/2HwHwm3xpl "http://www.johndcook.com/blog/")

RT [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") твиттер заполняет всю информационную нишу. Чем пользуешься для агрегации блогов?

Раньше Google Docs, сейчас ничем. Просто захожу раз в месяц на те, которые помню. [@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov")

RT [@Sullenor](https://twitter.com/Sullenor "Литвинов Алексей"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [codewars.com](http://t.co/Wzb8D0fnO2 "http://www.codewars.com") - хорошее обучение на практике :\)

RT [@talgautb](https://twitter.com/talgautb "Талга УтБ"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Твиттер основной источник + подписки на недельный забугорный дайджест + Хабр чисто для интереса

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, он милый. Я когда Underhood вел, кидал вот это: [steve-yegge.blogspot.com](http://t.co/BpnfuZVOvJ "http://steve-yegge.blogspot.com/") и [sites.google.com/site/steveyegg…](https://t.co/pIBVPHTuAx "https://sites.google.com/site/steveyegge2/blog-rants")

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как относишься к [github.com/feross/standard](https://t.co/HmTngLgRAA "https://github.com/feross/standard") ? Меня он немного пугает. Karma на него перевели недавно, напрмер, я…

Лично я не впечатлен. Использую гораздо более «стандартный» Airbnb-стиль. [@silentroach](https://twitter.com/silentroach "Игорь")

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@silentroach](https://twitter.com/silentroach "Игорь") ничего, наши в теме: [github.com/Flet/semistand…](https://t.co/rlJFPGjaUU "https://github.com/Flet/semistandard") Я им много месяцев пользуюсь, он ближе к AirBnB, в том числе [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

По правде я не вижу смысла в отдельных стайл чекерах, если есть ESLint, и он поддерживает extend-ы конфигов. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@silentroach](https://twitter.com/silentroach "Игорь")

Например меня пару дней назад научили такой мудрости, это всё, что мне нужно. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@silentroach](https://twitter.com/silentroach "Игорь") [pic.twitter.com/N1OJY8FBTy](http://t.co/N1OJY8FBTy)

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я зашел к тебе на [github.com/gaearon/redux](https://t.co/lZScBrMl8s "https://github.com/gaearon/redux") а у тебя там всего 2 баджа. А должно быть ну хотя бы 5, а лучше 15 :[@silentroach](https://twitter.com/silentroach "Игорь")

Через полчаса я превращусь в тыкву. Что-нибудь, о чем хотите спросить напоследок?

Хаха. Я уже счет дням недели потерял. Всё из-за конференции этой. \) [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сегодня только суббота

RT [@silentroach](https://twitter.com/silentroach "Игорь"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почему flux \(и аналоги, в том числе твой\) такой сложный и расплывчатый? И ни в одном нет примеров с простейши…

Есть пример с AJAX и Redux: [github.com/emmenko/redux-…](http://t.co/gBgmrBim49 "http://github.com/emmenko/redux-react-router-async-example"). Ссылка из README есть. Официальный пример будет позже. [@silentroach](https://twitter.com/silentroach "Игорь")

Я сейчас усиленно готовлюсь к конференции React Europe, где я покажу, зачем в принципе я делал Redux. [@silentroach](https://twitter.com/silentroach "Игорь")

Поэтому сейчас он не такой документированный, как мне хотелось бы. Я займусь этим после конфы обязательно. [@silentroach](https://twitter.com/silentroach "Игорь")

По поводу общего вопроса — поясни, что ты называешь расплывчатостью. Твой вопрос тоже расплывчатый. \) [@silentroach](https://twitter.com/silentroach "Игорь")

В целом про «о чем Flux» я написал вот эту статью: [medium.com/@dan\_abramov/t…](https://t.co/f1MJKgkzHu "https://medium.com/@dan_abramov/the-case-for-flux-379b7d1982c6") [@silentroach](https://twitter.com/silentroach "Игорь")

В целом, для каждого уважающего себя Flux-фреймворка есть пример с AJAX. Просто они обычно в отдельных репах. [@silentroach](https://twitter.com/silentroach "Игорь")

Согласен, не хватает «лучших практик». В Redux я стараюсь ограничить то, что можно сделать, чтобы таких вопросов было меньше. [@silentroach](https://twitter.com/silentroach "Игорь")

Вы программируете под музыку? Под какую?

Про себя — в последнее время кручу по кругу по очереди To Pimp a Butterly \(Kendrick Lamar\) и Born to Die \(Lana Del Rey :-\)

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") конечно. Dead Kennedys, ZZ Top, the rumjacks, judas priest, Beethoven!

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") последний месяц только под это, рекомендую [soundcloud.com/podval-capella…](https://t.co/0ZQFAXukfY "https://soundcloud.com/podval-capella/sets/main")

Еще меня вот этот микс очень завораживает. [soundcloud.com/taras3000/the-…](https://t.co/xjKx5ryyOT "https://soundcloud.com/taras3000/the-sailing-away")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Rammstein, мотивирует :\)

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть хороший сервис — mixcloud. Выбираешь тег-жанр и слушаешь миксы по часу и больше

Программирование и вещества. Совместимо? Скучно?

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") виски иногда

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Отлично программируется, когда чуть-чуть пьяный. Самую малость.

То есть Ballmer Peak это не миф? [@suxxes](https://twitter.com/suxxes "Father Frodo")

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как-то писал код пьяным, дома. Утром пришлось всё переписать\) если покурить, совсем не хочется писать код

Мне тоже не хочется. А вот подумать про абстракции иногда тянет. Связи и паттерны захватывают [@kuksikus](https://twitter.com/kuksikus "R.M.")

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В добавление к музыке: не могу работать под музыку со словами, особенно если люблю и знаю слова. Сижу и вместо код…

Пока не знаю слова, меня они отвлекают. Когда я их помню, я на автомате напеваю, и они не «занимают» словесный процессор мозга [@suxxes](https://twitter.com/suxxes "Father Frodo")

RT [@cakeinpanic](https://twitter.com/cakeinpanic "Katerina Tort"): [@kuksikus](https://twitter.com/kuksikus "R.M.") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") write drunk, edit sober. Ernest Hemingway [pic.twitter.com/bfkFKTkRE3](http://t.co/bfkFKTkRE3)

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") судьбоносный вопрос: StarTrek смотрел? Кирк или Пиккар? DS9 - торт или говно? Захари Кину - новая надежда или …

Хаха. Я пока не смотрел толком. Чуть-чуть начинал только. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кофеин, совместимо\)

Десктопная картинка тред. [pic.twitter.com/KhbCy39TdH](http://t.co/KhbCy39TdH)

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [pic.twitter.com/Y3F0zGIUA5](http://t.co/Y3F0zGIUA5)

RT [@beshur](https://twitter.com/beshur "Shu Buznik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [pic.twitter.com/QFD7aHEI7F](http://t.co/QFD7aHEI7F)

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@kuksikus](https://twitter.com/kuksikus "R.M.") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") какой прекрасный субботний вещества-тред

Есть еще интересный лайфхак на эту тему, который мне показал друг. Сейчас расскажу. [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@kuksikus](https://twitter.com/kuksikus "R.M.")

RT [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@kuksikus](https://twitter.com/kuksikus "R.M.") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну если MDMA, то митинг растянется на весь день и будет самым успешным в ис…

Так вот. Берете приложение [vk.com/app2462](https://t.co/OgzyYOote3 "https://vk.com/app2462"). Запускаете во вкладках три радиостанции. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@kuksikus](https://twitter.com/kuksikus "R.M.")

Станции такие: Relax &gt; Nature Sounds, Разное &gt; Детское радио и Электроника &gt; Cliqhop IDM. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@kuksikus](https://twitter.com/kuksikus "R.M.")

Настраиваете уровни громкости, затягиваетесь и наслаждаетесь. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@kuksikus](https://twitter.com/kuksikus "R.M.")

Я думаю если свести их и записать, это будет самая модная пластинка [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@kuksikus](https://twitter.com/kuksikus "R.M.")

Думаю его тоже туда можно подмешать.. [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov") [@kuksikus](https://twitter.com/kuksikus "R.M.")

Ме нравится. В духе [vimeo.com/88035957](https://t.co/M7TD3kbl68 "https://vimeo.com/88035957") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") бтв, новую айдентику мтв тоже как будто под веществами делали  
[creativereview.co.uk/cr-blog/2015/j…](http://t.co/UnIYJ2m36o "http://www.creativereview.co.uk/cr-blog/2015/june/mtv") [pic.twitter.com/KXCSXVVKZ0](http://t.co/KXCSXVVKZ0)

RT [@mbarinov](https://twitter.com/mbarinov "Max Barinov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как тебе второй Angular?

Пока не смотрел. По блогам нравится, что есть возможность делать top down data flow и immutable модели. [@mbarinov](https://twitter.com/mbarinov "Max Barinov")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Run the Jewels — отличнейший рэп. Лана была прошлым летом :\)

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А есть еще разрабы с кератоконусом? Как выживают?

Как не надо писать комментарии на Github: [github.com/gaearon/react-…](https://t.co/RUyznc5jHn "https://github.com/gaearon/react-dnd/issues/200")

## Воскресенье <small>17 твитов</small>

RT [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") воскресный вопрос, какие хобби у программистов? Мне кажется что почти все либо музыканты, либо фотографы\)

RT [@denswor](https://twitter.com/denswor "denswor"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а кто в очках?

Курт Гёдель, доказавший, что если формальная система достаточно выразительна для арифметики, её консистентность не доказать изнутри [@denswor](https://twitter.com/denswor "denswor")

RT [@dmitruksergey](https://twitter.com/dmitruksergey "Serhii Dmytruk"): [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у меня бег и силовые.

Репетирую доклад. Выходит 50 минут. Надо 25. Как вы выбираете, что выкинуть?

Например, понятно, что демо выигрывает у просто слайдов. Но бросаться из одного демо в другое — может быть недостаточно понятно.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пет-проекты, книги и игры.

RT [@Sullenor](https://twitter.com/Sullenor "Литвинов Алексей"): [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кино, лонгборд и бас-гитара :\)

RT [@gladkih\_m](https://twitter.com/gladkih_m "Maxim Gladkih"): [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей") комиксы, стройка, бег [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Оставляю то, что складывается в историю. У каждой истории есть главная линия, а также есть ответвления. Руби ветк…

RT [@\_cloudo](https://twitter.com/_cloudo "Cloudo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") расскажи о своем пути обучения английскому? может какие-нибудь лайфхаки/советы/сервисы/методики?

Я просто Гарри Поттера прочитал всего. К седьмой книжке хочешь не хочешь выучишь [@\_cloudo](https://twitter.com/_cloudo "Cloudo")

RT [@sashakavun](https://twitter.com/sashakavun "Aleksandr Kavun"): [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") практическая стрельба, книги, бег.

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@soundinyourmind](https://twitter.com/soundinyourmind "Гранкин Андрей") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") банальные книги/музыка/игры, бокс, стрельба, пет-проекты

RT [@soider](https://twitter.com/soider "Michael Sakhnov"): [@\_cloudo](https://twitter.com/_cloudo "Cloudo") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") курсера, сериалы, skyeng

Прощаюсь с вами, спасибо всем за отличную неделю! Скоро в Париж на React Europe, буду вас вспоминать \)

Мой основной аккаунт [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov"), в основном англоязычный, но я отвечаю по-русски, если спросите по-русски. Следите за апдейтами! &lt;3

## Ссылки

### github.com  
<a href="https://github.com/enaqx/awesome-react" target="_blank">https://github.com/enaqx/awesome-react</a>  
<a href="https://github.com/gaearon/redux" target="_blank">https://github.com/gaearon/redux</a>  
<a href="https://github.com/edjafarov/PromisePipe" target="_blank">https://github.com/edjafarov/PromisePipe</a>  
<a href="https://github.com/rambler-digital-solutions/superagent-mocker" target="_blank">https://github.com/rambler-digital-solutions/superagent-mocker</a>  
<a href="https://github.com/idmitriev/eslint-plugin-better" target="_blank">https://github.com/idmitriev/eslint-plugin-better</a>  
<a href="https://github.com/wtfil/song-looper" target="_blank">https://github.com/wtfil/song-looper</a>  
<a href="https://github.com/andrepolischuk/numd" target="_blank">https://github.com/andrepolischuk/numd</a>  
<a href="https://github.com/dmaslov/github-gist" target="_blank">https://github.com/dmaslov/github-gist</a>  
<a href="https://github.com/sudodoki/copy-button" target="_blank">https://github.com/sudodoki/copy-button</a>  
<a href="https://github.com/nodeschool/nodeschool.github.io/issues/145" target="_blank">https://github.com/nodeschool/nodeschool.github.io/issues/145</a>  
<a href="https://github.com/aliaksandr-pasynkau/grunto" target="_blank">https://github.com/aliaksandr-pasynkau/grunto</a>  
<a href="https://github.com/petehunt/jsxstyle" target="_blank">https://github.com/petehunt/jsxstyle</a>  
<a href="https://github.com/css-modules/css-modules" target="_blank">https://github.com/css-modules/css-modules</a>  
<a href="https://github.com/MicheleBertoli/css-in-js" target="_blank">https://github.com/MicheleBertoli/css-in-js</a>  
<a href="https://github.com/markdalgleish/postcss-local-scope-example" target="_blank">https://github.com/markdalgleish/postcss-local-scope-example</a>  
<a href="https://github.com/petehunt/webpack-howto" target="_blank">https://github.com/petehunt/webpack-howto</a>  
<a href="http://github.com/gaearon/redux" target="_blank">http://github.com/gaearon/redux</a>  
<a href="https://github.com/evancz/elm-architecture-tutorial#the-basic-pattern" target="_blank">https://github.com/evancz/elm-architecture-tutorial#the-basic-pattern</a>  
<a href="https://github.com/alexeyraspopov/flux-stateful#immutable-pure-stores" target="_blank">https://github.com/alexeyraspopov/flux-stateful#immutable-pure-stores</a>  
<a href="https://github.com/gaearon/redux/issues/113#issuecomment-114049804" target="_blank">https://github.com/gaearon/redux/issues/113#issuecomment-114049804</a>  
<a href="https://github.com/share/sharejs" target="_blank">https://github.com/share/sharejs</a>  
<a href="https://github.com/evancz/elm-architecture-tutorial/" target="_blank">https://github.com/evancz/elm-architecture-tutorial/</a>  
<a href="https://github.com/slamdata/purescript-halogen" target="_blank">https://github.com/slamdata/purescript-halogen</a>  
<a href="https://github.com/rackt/react-router/blob/master/examples/async-data/app.js" target="_blank">https://github.com/rackt/react-router/blob/master/examples/async-data/app.js</a>  
<a href="https://github.com/gaearon/redux/pull/140#issuecomment-114756152" target="_blank">https://github.com/gaearon/redux/pull/140#issuecomment-114756152</a>  
<a href="https://github.com/webpack/css-loader/commit/a78e007e206439348bf04d4c0ffd7b0324c75d26" target="_blank">https://github.com/webpack/css-loader/commit/a78e007e206439348bf04d4c0ffd7b0324c75d26</a>  
<a href="https://github.com/milankinen/livereactload" target="_blank">https://github.com/milankinen/livereactload</a>  
<a href="https://github.com/mjohnston/react-native-webpack-server" target="_blank">https://github.com/mjohnston/react-native-webpack-server</a>  
<a href="https://github.com/facebook/react/issues/3226" target="_blank">https://github.com/facebook/react/issues/3226</a>  
<a href="https://github.com/facebook/react/issues/3228" target="_blank">https://github.com/facebook/react/issues/3228</a>  
<a href="https://github.com/talgautb/frontender" target="_blank">https://github.com/talgautb/frontender</a>  
<a href="https://github.com/AveVlad/russia-it-podcast" target="_blank">https://github.com/AveVlad/russia-it-podcast</a>  
<a href="https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md" target="_blank">https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md</a>  
<a href="https://github.com/webpack/style-loader/blob/2823eb4a5e6eb6594a98fe0ea34454b7f7ffca7d/index.js#L21-L32" target="_blank">https://github.com/webpack/style-loader/blob/2823eb4a5e6eb6594a98fe0ea34454b7f7ffca7d/index.js#L21-L32</a>  
<a href="https://github.com/npm/npm/releases/tag/v3.0.0" target="_blank">https://github.com/npm/npm/releases/tag/v3.0.0</a>  
<a href="https://github.com/gcanti/tcomb-form" target="_blank">https://github.com/gcanti/tcomb-form</a>  
<a href="https://github.com/sebmarkbage?tab=activity" target="_blank">https://github.com/sebmarkbage?tab=activity</a>  
<a href="https://github.com/feross/standard" target="_blank">https://github.com/feross/standard</a>  
<a href="https://github.com/Flet/semistandard" target="_blank">https://github.com/Flet/semistandard</a>  
<a href="http://github.com/emmenko/redux-react-router-async-example" target="_blank">http://github.com/emmenko/redux-react-router-async-example</a>  
<a href="https://github.com/gaearon/react-dnd/issues/200" target="_blank">https://github.com/gaearon/react-dnd/issues/200</a>  
### medium.com  
<a href="https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284" target="_blank">https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284</a>  
<a href="https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b" target="_blank">https://medium.com/seek-ui-engineering/block-element-modifying-your-javascript-components-d7f99fcab52b</a>  
<a href="https://medium.com/@dan_abramov/my-react-list-862227952a8c" target="_blank">https://medium.com/@dan_abramov/my-react-list-862227952a8c</a>  
<a href="https://medium.com/@Shapiro/stripe-san-francisco-and-velocity-js-37575e29a51b" target="_blank">https://medium.com/@Shapiro/stripe-san-francisco-and-velocity-js-37575e29a51b</a>  
<a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0" target="_blank">https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0</a>  
<a href="https://medium.com/@dan_abramov/the-case-for-flux-379b7d1982c6" target="_blank">https://medium.com/@dan_abramov/the-case-for-flux-379b7d1982c6</a>

### Другие

<a href="http://www.reactiflux.com/" target="_blank">http://www.reactiflux.com/</a>  
<a href="http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome" target="_blank">http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome</a>  
<a href="http://jlongster.com/Modularity" target="_blank">http://jlongster.com/Modularity</a>  
<a href="http://jlongster.com/Backend-Apps-with-Webpack--Part-III" target="_blank">http://jlongster.com/Backend-Apps-with-Webpack--Part-III</a>  
<a href="http://www.youtube.com/watch?v=4anAwXYqLG8" target="_blank">http://www.youtube.com/watch?v=4anAwXYqLG8</a>  
<a href="http://www.youtube.com/watch?v=Agu6jipKfYw" target="_blank">http://www.youtube.com/watch?v=Agu6jipKfYw</a>  
<a href="http://www.youtube.com/watch?v=j-kj2qwJa_E" target="_blank">http://www.youtube.com/watch?v=j-kj2qwJa_E</a>  
<a href="http://frontendbabel.info/" target="_blank">http://frontendbabel.info/</a>  
<a href="http://molefrog.com/rye/" target="_blank">http://molefrog.com/rye/</a>  
<a href="http://molefrog.com/rye/demo/galois/" target="_blank">http://molefrog.com/rye/demo/galois/</a>  
<a href="http://blog.confluent.io/2015/03/04/turning-the-database-inside-out-with-apache-samza/" target="_blank">http://blog.confluent.io/2015/03/04/turning-the-database-inside-out-with-apache-samza/</a>  
<a href="http://blog.testdouble.com/posts/2014-12-02-the-social-coding-contract.html" target="_blank">http://blog.testdouble.com/posts/2014-12-02-the-social-coding-contract.html</a>  
<a href="http://tonsky.livejournal.com/284511.html" target="_blank">http://tonsky.livejournal.com/284511.html</a>  
<a href="https://www.npmjs.com/package/article-data" target="_blank">https://www.npmjs.com/package/article-data</a>  
<a href="https://youtu.be/DspYurD75Ns?t=39m" target="_blank">https://youtu.be/DspYurD75Ns?t=39m</a>  
<a href="https://speakerdeck.com/vjeux/react-css-in-js" target="_blank">https://speakerdeck.com/vjeux/react-css-in-js</a>  
<a href="https://christianalfoni.github.io/react-webpack-cookbook/" target="_blank">https://christianalfoni.github.io/react-webpack-cookbook/</a>  
<a href="http://survivejs.com/webpack_react/" target="_blank">http://survivejs.com/webpack_react/</a>  
<a href="http://gbracha.blogspot.cz/2014/09/a-domain-of-shadows.html?m=1" target="_blank">http://gbracha.blogspot.cz/2014/09/a-domain-of-shadows.html?m=1</a>  
<a href="http://gsd.di.uminho.pt/members/cbm/ps/crdtOpsMiddleware.pdf" target="_blank">http://gsd.di.uminho.pt/members/cbm/ps/crdtOpsMiddleware.pdf</a>  
<a href="https://goo.gl/1kUAf0" target="_blank">https://goo.gl/1kUAf0</a>  
<a href="http://goo.gl/er5j6y" target="_blank">http://goo.gl/er5j6y</a>  
<a href="http://goo.gl/A9CiGa" target="_blank">http://goo.gl/A9CiGa</a>  
<a href="http://alexeyraspopov.github.io/talks/what-the-flux/" target="_blank">http://alexeyraspopov.github.io/talks/what-the-flux/</a>  
<a href="https://gist.github.com/gaearon/d77ca812015c0356654f" target="_blank">https://gist.github.com/gaearon/d77ca812015c0356654f</a>  
<a href="https://gist.github.com/substack/68f8d502be42d5cd4942" target="_blank">https://gist.github.com/substack/68f8d502be42d5cd4942</a>  
<a href="https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1364980" target="_blank">https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1364980</a>  
<a href="https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1365101" target="_blank">https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1365101</a>  
<a href="https://vimeo.com/88035957" target="_blank">https://vimeo.com/88035957</a>  
<a href="http://vimeo.com/100010922" target="_blank">http://vimeo.com/100010922</a>  
<a href="http://nuclide.io/" target="_blank">http://nuclide.io/</a>  
<a href="http://www.mann-ivanov-ferber.ru/promo/presentation/" target="_blank">http://www.mann-ivanov-ferber.ru/promo/presentation/</a>  
<a href="http://amokjs.com/" target="_blank">http://amokjs.com/</a>  
<a href="http://reactpodcast.com/2015/06/webpack-vs-browserify/" target="_blank">http://reactpodcast.com/2015/06/webpack-vs-browserify/</a>  
<a href="https://hacks.mozilla.org/2014/05/open-source-marketing-with-velocityjs/" target="_blank">https://hacks.mozilla.org/2014/05/open-source-marketing-with-velocityjs/</a>  
<a href="https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/" target="_blank">https://css-tricks.com/the-debate-around-do-we-even-need-css-anymore/</a>  
<a href="https://code.google.com/p/chromium/issues/detail?id=492902" target="_blank">https://code.google.com/p/chromium/issues/detail?id=492902</a>  
<a href="http://webpack.github.io/docs/hot-module-replacement-with-webpack.html" target="_blank">http://webpack.github.io/docs/hot-module-replacement-with-webpack.html</a>  
<a href="http://webpack.github.io/docs/hot-module-replacement.html" target="_blank">http://webpack.github.io/docs/hot-module-replacement.html</a>  
<a href="http://webpack.github.io/docs/tutorials/getting-started/#first-loader" target="_blank">http://webpack.github.io/docs/tutorials/getting-started/#first-loader</a>  
<a href="http://webpack.github.io/docs/stylesheets.html#separate-css-bundle" target="_blank">http://webpack.github.io/docs/stylesheets.html#separate-css-bundle</a>  
<a href="http://prog21.dadgum.com/" target="_blank">http://prog21.dadgum.com/</a>  
<a href="http://www.johndcook.com/blog/" target="_blank">http://www.johndcook.com/blog/</a>  
<a href="http://www.codewars.com" target="_blank">http://www.codewars.com</a>  
<a href="http://steve-yegge.blogspot.com/" target="_blank">http://steve-yegge.blogspot.com/</a>  
<a href="https://sites.google.com/site/steveyegge2/blog-rants" target="_blank">https://sites.google.com/site/steveyegge2/blog-rants</a>  
<a href="https://soundcloud.com/podval-capella/sets/main" target="_blank">https://soundcloud.com/podval-capella/sets/main</a>  
<a href="https://soundcloud.com/taras3000/the-sailing-away" target="_blank">https://soundcloud.com/taras3000/the-sailing-away</a>  
<a href="https://vk.com/app2462" target="_blank">https://vk.com/app2462</a>  
<a href="http://www.creativereview.co.uk/cr-blog/2015/june/mtv" target="_blank">http://www.creativereview.co.uk/cr-blog/2015/june/mtv</a>
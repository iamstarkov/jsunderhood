# dan_abramov

_28 июня 2015_

## Понедельник <small>77 твитов</small>

Привет! Меня зовут <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>. Я веду <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на этой неделе.

Люди часто думают, что меня зовут Денис. Но я Даниил. Денис — это совсем не я.

Я активно участвую в жизни англоязычного React сообщества. В русскоязычной части индустрии я почти никого не знаю, так что будем знакомы!

На этой неделе я готовлюсь к выступлению на React Europe. Буду рассказывать, как React позволяет писать приложения, не нажимая F5.

До React я какое-то время жил с Backbone/jQuery. До этого делал нативное приложение для iPad на Xamarin iOS. До этого писал под Windows.

В детстве я мечтал собрать радио. Я нарисовал схему и купил детали в «Чип и Дип». Даже паяльник и канифоль купил. Но руки не дошли.

Я пока план тем не составлял, но сегодня пойду стричься и составлю. О чем вы хотите поговорить?

RT <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но не потому, что ты нажимаешь CMD+R, right?

Не захожу… Теперь я только в Reactiflux Slack-e. Рекомендую: <a href="http://t.co/0NmipPbrDe">reactiflux.com</a> <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a>

Застал меня врасплох. Хм. Смотрю сериалы. Люблю вкусно покушать. Полежать на солнышке. В общем, сейчас ничем. <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>

Там хорошие тематические каналы. Типа <a href="https://twitter.com/search?q=%23redux">#redux</a> про мою новую библиотеку например. ;-) <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a>

Для начала в React важно въехать философически. «Что это вообще такое и зачем.» Лонгрид: <a href="http://t.co/8gw0FDiXCi">jlongster.com/Removing-User-…</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>

В более практичных вопросах здесь очень хорошая подборка: <a href="https://t.co/BXSxZpZphd">github.com/enaqx/awesome-…</a> <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>

В идеале React'а не станет, и он растворится в браузере: <a href="http://t.co/VxF6a18XUt">youtube.com/watch?v=4anAwX…</a> <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>

Но пока он не растворился, даже авторы UIKit из iOS считают, что это не пустой хайп: <a href="https://t.co/QPacQIgtQ3">twitter.com/andy_matuschak…</a> <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>

В React не нужны темплейты. В этом его сила. Если увидишь react-templates, закрой глаза и считай до десяти. <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>

Есть и более экспериментально-интересные вещи, типа Cycle.js. Но React лидирует в категории «прагматичная инновация». <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>

Я не делаю TDD, поэтому не могу ответить как следует. Важно, что в React-компонентах не должно быть логики <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Поэтому даже когда я пишу тесты, я пишу их не для компонентов, а для того, что ими управляет. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Если надо тестировать компонент, для меня это знак, что из него надо что-то вынести.  <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Нет. Cycle может, но он слишком сырой пока что. <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>

Новички часто не понимают, чем силен React. Он силен констрейнтами, которые он налагает. Похожая сила есть в ФП. <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: Пользуясь случаем, прошу у  <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> прощения за то, что много месяцев звал его Денисом ¯\_(ツ)_/¯ / <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Любая логика. Если надо тестировать какую-то логику, скорее всего это должна быть функция или внешний объект <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Да, это крайний случай, согласен. Для таких компонентов стоит писать тесты. И то я бы скорее вынес логику управления.. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Например у тебя может быть объект MaskedInputValue, который имеет acceptChar(char, position) и onChange. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Ты можешь в нем описать логику, как маска себя ведет, а компонентом тупо рендерить текущее значение. Тогда логику легко тестить <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Я немножко про это твитил здесь: <a href="https://t.co/yN5VWlL6gm">twitter.com/dan_abramov/st…</a> <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>

Что вас радует и что расстраивает в JS комьюнити?

Моя позиция — хранилища должны быть pure функциями. Поэтому я написал Redux: <a href="https://t.co/hRXgTpiKPe">github.com/gaearon/redux</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Например, меня расстраивает, что люди всё ещё всерьёз создают новые библиотеки с two way data bindings.

С другой стороны, я знаю людей, которых в принципе расстраивает, что люди создают новые библиотеки, так что всё относительно

Amok пока недостаточно стабилен, чтобы о нем строго судить. Я думаю, его ниша — императивные кодбазы и быстрые прототипы. <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>

Мне кажется это «есть время разбрасывать камни и есть время их собирать». Ищем, находим, ищем, находим. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

RT <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> радует что жсеры все еще самые харизматичные, расстраивает что все больше жавистов лезут в жс со своим самоваро…

RT <a href="https://twitter.com/gryzzly" title="gryzzly">@gryzzly</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> меня расстраивает что нету оценки модулей/библиотек кроме рейтинга в гитхабе (т.е. популярности)

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> меня расстраивает постоянная тяга людей к уничтожению разнообразия. Все на Хром, все на Реакт, все на Babel - …

RT <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a>: <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это нормально в нашем нарциссичном обществе. Идеализация и разочарование - главное активнее. и быст…

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> радует, что комюнити развивается,  огорчает, что пока нет четкой цельности

Напротив, меня расстраивает, что люди уходят в ClojureScript из-за языка и делают там классные штуки. <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

И никто эти штуки не портирует — не потому что никак, а потому что им и так хорошо, а кроме них никто не понимает. <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

Кто знает ClojureScript?

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: Почему-то только после появления <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> захотелось зафоловить <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>. :)

Кто знает кого-нибудь, кто знает ClojureScript?

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> все знают Соловьёва же =)

<a href="http://t.co/D08qtfUkUp">pic.twitter.com/D08qtfUkUp</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я буду пробовать кложу из-за <a href="https://twitter.com/nikitonsky" title="Nikita Prokopov">@nikitonsky</a>

Меня больше расстраивает сексизм, чем треды про него. <a href="https://twitter.com/Dmiterko_Roman" title="Рома">@Dmiterko_Roman</a>

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я имел ввиду <a href="https://twitter.com/asolovyov" title="Alexander Solovyov">@asolovyov</a> =) aka "чик-чик и в продакшин"

Расскажите о каком-нибудь одном вашем опен-сорс JS проекте. Не важно, если нету звездочек. «Зачем» и ссылка. Го?

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> очень интересует "state management". я пока не въехал в концепт stateless stores. хочется понять весь жизнен…

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Переводы фронтэнд (в том числе и JS) статей с неанглийского на английский <a href="http://t.co/iTgyUVefR4">frontendbabel.info</a> Чтобы мир узна…

RT <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кстати, он проводил лекции по JS,  и говорит что язык дает мало, а архитектура много

RT <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> PromisePipe-кросс процессные стримы,отделяют логику от взаимодествия между энвми <a href="https://t.co/R6WQ5ZbQVZ">github.com/edjafarov/Prom…</a> http:/<a href="http://t.co/skwITTyFeh">pic.twitter.com/skwITTyFeh</a>

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> клиент-сайд мокки для superagent, чтобы не ждать бекенд и не добавлять в проект мок-серверы на ноде — http<a href="https://t.co/l8ZggpQ7y8">github.com/rambler-digita…</a>

RT <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Плагин для eslint чтобы писать js по Крокфорду <a href="https://t.co/b3B3b5QEqV">github.com/idmitriev/esli…</a>

Самая интересная статья / доклад / лекция 2014-2015 года по вашей версии?

Расскажи. Once you go black you never go back? <a href="https://twitter.com/nikitonsky" title="Nikita Prokopov">@nikitonsky</a>

RT <a href="https://twitter.com/wtfil" title="Фил">@wtfil</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> приложение для зацикливания отдельных кусков песни (полезно для начинающих музыкантов)
<a href="https://t.co/tsf4QxZiGi">github.com/wtfil/song-loo…</a>

RT <a href="https://twitter.com/mlfrg" title="Alexey Taktarov">@mlfrg</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> Конечные поля и кольца на JS <a href="http://t.co/XsZN93WDz7">molefrog.com/rye/</a> (чтобы строить красивые картинки 😊<a href="http://t.co/MNghJe4k0W">molefrog.com/rye/demo/galoi…</a>…

Моя любимая — вот эта. «База данных шиворот навыворот.» <a href="http://t.co/zB6WBihQlE">blog.confluent.io/2015/03/04/tur…</a>

RT <a href="https://twitter.com/asolovyov" title="Alexander Solovyov">@asolovyov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я знаю ClojureScript и знаю тех, кто знает ClojureScript. :-)

RT <a href="https://twitter.com/asolovyov" title="Alexander Solovyov">@asolovyov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> люди всегда важнее всего, имхо, но качество языка вообще % на 60-70 это коммьюнити и экосистема. А так, конечно…

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Social Coding Contract by <a href="https://twitter.com/searls" title="Justin Searls">@searls</a> <a href="http://t.co/SOE9SWGHIB">blog.testdouble.com/posts/2014-12-…</a>

RT <a href="https://twitter.com/nikitonsky" title="Nikita Prokopov">@nikitonsky</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот например <a href="http://t.co/tkramypjZv">tonsky.livejournal.com/284511.html</a>

Что используете в основном проекте? ES5? ES6? ES6 + experimental ES7ish extensions?

RT <a href="https://twitter.com/andrepolischuk" title="Andrey Polischuk">@andrepolischuk</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Манипуляции со словами после числительных <a href="https://t.co/tz60Hnu6ms">github.com/andrepolischuk…</a>

RT <a href="https://twitter.com/aluuu" title="Усиление и Манатан">@aluuu</a>: <a href="https://twitter.com/asolovyov" title="Alexander Solovyov">@asolovyov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мда, хитро) Что на счёт Elm думаете, кстати? Стали бы в тащить в проект, если человек из команды захотел…

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>
Извлечение свойств md-статей: заголовок, дата, описание, контент.
Чтобы не писать YAML, как в jekyll.
https://<a href="https://t.co/9QHs0NTf7J">npmjs.com/package/articl…</a>

RT <a href="https://twitter.com/lazzy_panda" title="Dmitry Maslov">@lazzy_panda</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Web component для отображение github's gists на Polymer <a href="https://t.co/7UgD6MPq3B">github.com/dmaslov/github…</a>

RT <a href="https://twitter.com/forever_frey" title="Forever Frey">@forever_frey</a>: <a href="https://twitter.com/lisovskyvlad" title="Влад Лисовский">@lisovskyvlad</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> попробуй, вдруг взлетит

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: Кто чем пользуется для отслеживания JS ошибок на проде? Сервисы? Библиотеки?
/сс <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://t.co/X4nbDN0iso">github.com/sudodoki/copy-…</a> - кнопка-компонент для копирования в буфер. Чтоб без флеша. Для nodeschool <a href="https://t.co/ysjREselx6">github.com/nodeschool/nod…</a>

RT <a href="https://twitter.com/alxe_master" title="Александр Пасынков">@alxe_master</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> gruntO оптимизатор структуры Биллд процесса <a href="https://t.co/Xy03RC5g8t">github.com/aliaksandr-pas…</a>

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> babel с es7

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a> по ходу все самые хорошие разработчики не работают. Я вот вышел на работу и не знаю, хорошая ли это …

Я пойду стричься, подумаю над темами на неделю. Кидайте еще, о чем хотите поговорить. Можно в личку если что-то скользкое.

## Вторник <small>119 твитов</small>

Привет. Я проснулся.

Давайте сегодня поговорим про стили. BEM-именование уже стало мейнстримом, правда? А видели ли вы CSS Modules?

Например, есть мнение, что BEM — конечно, здорово, но это как неймспейсы в ES5 без модулей. А нужны-то модули. <a href="https://t.co/dplFa6lrmm">medium.com/seek-ui-engine…</a>

Есть еще мнение, что CSS — это просто еще один compile target, а язык описания должен быть один — JS и компоненты. <a href="https://t.co/QauoDiC9mu">github.com/petehunt/jsxst…</a>

Скажем, <a href="https://twitter.com/andreysitnik" title="Andrey Sitnik">@andreysitnik</a> любит CSS. Именно как язык/синтаксис. А <a href="https://twitter.com/jashkenas" title="Jeremy Ashkenas">@jashkenas</a> считает, что вебу не нужно три языка. <a href="https://t.co/2gS08oT3SL">youtu.be/DspYurD75Ns?t=…</a>

Что именно в Webpack значит require('./something.css')? Идея в том, что это никак не отличается от require('./something.coffee') и т.п.

Если к проекту не подключить билд-трансформу для *.css, то это не сбилдится. Ведь таргет-язык у нас всё-таки JS.

Но можно подключить трансформу, которая превращает файл стилей в JS-модуль, кладущий эти стили в &lt;style&gt;-тэг.

Теперь require('./something.css') обретает смысл — это значит «этот JS-файл зависит от того, чтобы эти стили были в head». Зависимости FTW!

Причем код не указывает, _как именно_ эти стили соединяются. Может быть, они выделяются при компиляции в отдельный файл. Деталь реализации.

Зато с явными зависимостями не бывает мертвых стилей, файлов, которые боишься убрать, или watch('**/*.css'). Потому что всё явно, как в JS.

Это простейший вариант. Более умная трансформация может возвращать объект вида { attach(), detach() }. <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>

RT <a href="https://twitter.com/suevalov" title="Alexander Suevalov">@suevalov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> переписал свой сайт с CSS Modules. Полет отличный.

RT <a href="https://twitter.com/morhetz" title="Pavel Pertsev">@morhetz</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> webpack postcss local-scope
bem ужасен, по-моему, потому что пытается решать не те проблемы и не теми методами

RT <a href="https://twitter.com/bem_xxx" title="БЭМ">@bem_xxx</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> БЭМ это не только лишь CSS!

RT <a href="https://twitter.com/dmitry_dok" title="dmitry">@dmitry_dok</a>: <a href="https://twitter.com/bem_xxx" title="БЭМ">@bem_xxx</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> БЭМ это обмен файлами. БЭМ это гигабайты свежей информации. БЭМ это общение. БЭМ это рост. БЭМ это св…

RT <a href="https://twitter.com/suevalov" title="Alexander Suevalov">@suevalov</a>: <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> изоляция на уровне сборки, простые наименования классов, все локальное, sourcemaps можно подрубить.

Конечно, лучшее в CSS Modules — это их лого. <a href="https://t.co/PkmczUu0lU">github.com/css-modules/cs…</a> <a href="http://t.co/7nAR6Fzi69">pic.twitter.com/7nAR6Fzi69</a>

Конечно, CSS-в-JS еще сыро. Но нельзя отмахнуться, что проблема надуманная. Семь грехов CSS: <a href="https://t.co/82AUb01zbT">speakerdeck.com/vjeux/react-cs…</a> <a href="http://t.co/QkFGneJL8r">pic.twitter.com/QkFGneJL8r</a>

RT <a href="https://twitter.com/agudulin" title="Alexander Gudulin">@agudulin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на мотив css is awesome, надо полагать <a href="http://t.co/naWrQfYheo">pic.twitter.com/naWrQfYheo</a>

Как BEM, компоненты и зависимости-в-JS дополняют друг друга: <a href="https://t.co/2N304i9tck">medium.com/seek-ui-engine…</a>. Этот пост — прелюдия к CSS Modules.

RT <a href="https://twitter.com/morhetz" title="Pavel Pertsev">@morhetz</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://t.co/1Wz19PUvbE">github.com/MicheleBertoli…</a>
колонка autoprefixer included

RT <a href="https://twitter.com/morhetz" title="Pavel Pertsev">@morhetz</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> my bad, я отстал от жизни
Создатель postcss-local-scope задепрекейтил его в пользу развития css modules
https://t<a href="https://t.co/397l2LwP6B">github.com/markdalgleish/…</a>

Быстрый ответ — после Webpack для меня пропала необходимость в Grunt/Gulp. В Browserify нет Hot Module Replacement :-( <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a>

Давайте поговорим про деньги и фронтэнд. Что вы делаете, и сколько вы зарабатываете? Можно в личку или с throwaways — я размещу анонимно.

По поводу <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a> — только что открыл DM для всех, пишите.

Анонимно: спб, тимлид/разработчик, энтерпрайз + разработчик кода встраивающегося на сторонние сайты. ~=150к чистыми <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/oleg008" title="Oleg Slobodskoi">@oleg008</a>: <a href="https://twitter.com/suevalov" title="Alexander Suevalov">@suevalov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а я вот считаю что мы ничего не теряем) мы используем более гибкий язык который частично уже добавляетс…

<a href="https://t.co/eelqicvjtV">github.com/petehunt/webpa…</a>, <a href="https://t.co/pTpwb1l8mN">christianalfoni.github.io/react-webpack-…</a> <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/dzhiriki" title="Aleksandr Petrov">@dzhiriki</a> <a href="https://twitter.com/suevalov" title="Alexander Suevalov">@suevalov</a>

Фронтэнд клиентской админки в немаленькой компании (~200 чел. персонала, посещаемость 1м/мес) на хитром стеке. 110к. <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Уточнение: Москва

Еще есть <a href="http://t.co/CtCuh3Y0UJ">survivejs.com/webpack_react/</a> — очень хороший ресурс. <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/dzhiriki" title="Aleksandr Petrov">@dzhiriki</a> <a href="https://twitter.com/suevalov" title="Alexander Suevalov">@suevalov</a>

Толстый клиент, компания 6 человек в Европе, 90к евро в год, 55% налоги :/ <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я сижу на зарплате 800$/мес. мне хватает. но после чата dev-ua/frontend-jobs я понял что это почти плинтус. п…

Напоминаю, что сегодня я ретвичу и публикую зарплаты фронтэндеров и фронтэндщиц. Пишите анонимно в DM.

200k рублей. Удаленка, тимлид, фронт+бек. <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/justjsdev" title="Just Some Developer">@justjsdev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Недавно ходил по собеседованиям с Angular+D3 и прочим js. С опытом бэкэнда и аналитики получил предложения 150 …

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> напоминает «нужна только Java», «нужен только XML». Это не будет работать, так как мы должны оптмизировать …

RT <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>: <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> почему бы не взять ближайший turing-complete язык (js) для этого

Питер, джуниор, 60 <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

Голландия, фронтенд тимлид: 3900€/мес после налогов <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a>: <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> jsx это это internal dsl, против CSS который external DSL. См. <a href="http://t.co/SCuPQ1B8r1">gbracha.blogspot.cz/2014/09/a-doma…</a>

начинал с джуниора в 45 <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

Раз уж пошла такая пьянка, есть ли что-то, что вы бы хотели донести до своих коллег? (Анонимно. Я удаляю DM-ы по мере получения.)

RT <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> скучаешь без secret?

Фронт, backbone, западный клиент, удалённо, около 1300-1500 евро брутто, по часам начисляется <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

Провинция, тимлид, только фронтенд, опыт бекенд + аналитика, 100К чистыми <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

Надо и на js уже внедрять тестирование <a href="https://t.co/apEluqo3lJ">twitter.com/jsunderhood/st…</a>

Интересно поговорить кто сколько спит и какая при этом производительность труда;) <a href="https://t.co/apEluqo3lJ">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/akrekotun" title="Alexey Krekotun">@akrekotun</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но чем раньше ложусь, тем меньше сплю

Расскажите, как вы организуете управление стейтом в JS-приложении. MVC? Flux? Rx? Что-то новое?

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Flux, но со Swarm.js это начинает выглядеть странно

Тимлид, фронт, реакт, бекбон, опыт фуллстека, 120. <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

Уточнение: Москва

Питер, front-end тимлид, 3000$/мес <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/zemlanin" title="Anton Verinov">@zemlanin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Нечто flux-подобное на Rx-потоках

Frontend-архитектор. UX/UI, development management, workflow automation, fullstack, ±devops. 10 лет, Красноярск, 50к <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/knaipa" title="Хунтовий Правосектан">@knaipa</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Винница, Фриланс - верстка + ВП. 1000

RT <a href="https://twitter.com/MaStep92" title="Maxim Bordyuzha">@MaStep92</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Заметил по себе, что норма 8 часов.Если меньше, то после обеда уже зеваю и производительность хромает.

RT <a href="https://twitter.com/suevalov" title="Alexander Suevalov">@suevalov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на React - Flummox, попробовал Redux. На Angular все плохо. По крайней мере так кажется после React :)

RT <a href="https://twitter.com/MaStep92" title="Maxim Bordyuzha">@MaStep92</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Не верю в рассказы, что можно спать по 4 часа и быть продуктивным)

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ванильный Flux. FTW!

RT <a href="https://twitter.com/dmitruksergey" title="Serhii Dmytruk">@dmitruksergey</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> сплю ~8 часов, по 3 силовых и беговых тренировки в неделю. Работается тоже хорошо :-)

RT <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ractive -&gt; ractive + flummox -&gt; react + flummox

RT <a href="https://twitter.com/discopalevo" title="discopalevo">@discopalevo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> flux+immutable rx тоже есть но на 99% используется просто как EventEmmiter

RT <a href="https://twitter.com/dimchez" title="Dmitry Demyankov">@dimchez</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> используем React + Reflux

RT <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> crdt можно представить как свёртку (reduce) операций ;) <a href="http://t.co/SEQ5VplCdR">gsd.di.uminho.pt/members/cbm/ps…</a> см. там eval(op,…

К слову об управлении стейтом. Три недели назад я начал писать новую библиотеку. Она называется Redux. <a href="http://t.co/Hs495FLBeQ">github.com/gaearon/redux</a>

Я не люблю изобретать велосипед, но не нашел другого пути. У меня было три цели.

Первая цель: сохранить преимущества Flux. Только экшны могут менять стейт, сторы инкапсулируют управление независимыми областями стейта.

Вторая цель: поменять Flux так, чтобы можно было перезагружать логику сторов на ходу с помощью React Hot Loader и подобных решений.

Третья цель: поменять Flux так, чтобы можно было легко написать devtools для record/replay, time travel, (de)hydration без участия юзера.

Я буду рассказывать про Redux в своем докладе на React Europe в июле. В этом треде готов отвечать на вопросы. )

мск, в трудовой "верстальщик", федеральный ритейл, пилю внутренние системы на ExtJS,100к р/мес на руки с премиями <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/morhetz" title="Pavel Pertsev">@morhetz</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Redux клевый по первому опыту. Но крайне жаль, что мейнтейнер Flummox'а отказался его развивать дальше. Из-за вых…

RT <a href="https://twitter.com/oliveroppole" title="Oliver Oppole">@oliveroppole</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Киев, синьор фронтенд-разработчик в аутсорсинге, не тимлид. $5500 чистыми в месяц после налогов.

Они даже не содержат её. То что во Flux хранилища, в Redux — чистые функции. (previousState, action) =&gt; nextState <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> хранилища как data reducers — это очень хорошая штука, имхо

Я взял эту идею из Elm. <a href="https://t.co/VAfM3wu28O">github.com/evancz/elm-arc…</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а тот из Haskell. XMonad по такому же принципу построен. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> возможно такие хранилища не стоит называть хранилищами :)

RT <a href="https://twitter.com/23ydobemos" title="Ilya Zayats">@23ydobemos</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть какой-либо roadmap? Примерная дата 1.0?

RT <a href="https://twitter.com/zemlanin" title="Anton Verinov">@zemlanin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> Я в своих pet-проектах использую rxStream.scan(f) для стейта. Потом подписал на это s…

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> глупость. Флакс — всего лишь паттерн. Кто мешает написать только имплементацию сторов с нужными…

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://t.co/3Wzjy6fjFs">github.com/alexeyraspopov…</a> все те же редьюсеры. У стора есть метод, которым можно напихать в него …

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я правильно понимаю, что в redux есть некий global state, содержащий все данные приложения, который использу…

Senior Frontend Engineer, Киев, 35$/час, в месяц до 6к$ <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

Да. В Redux я это делаю, парадоксально, через «лифтинг» экшнов, higher-order reducer и «анлифтинг» стейта <a href="https://t.co/L2WHxGYmOl">github.com/gaearon/redux/…</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

RT <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> все ходим вокруг одного (state,action) -&gt;state <a href="https://t.co/dBfTVhH347">goo.gl/1kUAf0</a>  demo https<a href="https://t.co/dBfTVhH347">goo.gl/1kUAf0</a>

RT <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> поправочка демка тут - <a href="http://t.co/U3Vuh6JpUr">goo.gl/er5j6y</a>

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как в redux происходит коммуникация с сервером? например во flummox за это отвечают экшены, но меня это инту…

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> и вообще весь ваш data flow — пару строчек кода :D <a href="http://t.co/RTctU4NokI">pic.twitter.com/RTctU4NokI</a>

Зло — не global state, зло — mutable global state. :-) <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> слайд взят отсюда (<a href="http://t.co/7ofP2FVVNf">alexeyraspopov.github.io/talks/what-the…</a>), вдруг будет интересным.

Это лучшая пареза про Flux, что я до сих пор видел — by <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="http://t.co/jOixPk2uki">alexeyraspopov.github.io/talks/what-the…</a> <a href="http://t.co/L3KIY1QPkW">pic.twitter.com/L3KIY1QPkW</a>

RT <a href="https://twitter.com/safrankov" title="Il'ya Safrankov ">@safrankov</a>: Читаю <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и немного охреневаю от уровня зп у фронтендеров. Давно надо было валить с текущего места.

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> выглядит отлично, нужно поиграться с этим подходом. Спасибо

RT <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>: <a href="https://twitter.com/safrankov" title="Il'ya Safrankov ">@safrankov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> такие же ощущения, только про технологии. Как будто все уже сменили пару версий всевозможных ***u…

Скорее нет. Смотря что ты имеешь в виду. Экшн — просто данные о том, «что случилось».  <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

Стор (или редюсер в Redux) никогда не должен сам диспетчить экшны — только реагировать на них. <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

С другой стороны, ты можешь сделать функцию, которая диспетчит несколько экшнов. (Например, запрос и ответ сервера.) <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

Потому что он не сохраняет преимуществ Flux. Нельзя сделать центральный логгинг, time travel, record/replay <a href="https://twitter.com/dimchez" title="Dmitry Demyankov">@dimchez</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> нуб-вопрос: может ли экшен вызвать другой экшен? допускает ли это flux-way или таких коммуникаций лучше избе…

Я об это пару месяцев голову ломал, трудно в цепочке твитов объяснить. Когда сами тулзы выпущу, будет понятнее. <a href="https://twitter.com/Chudesnov" title="散厦知">@Chudesnov</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

RT <a href="https://twitter.com/vdv73rus" title="Vislov Dmitry">@vdv73rus</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а ситуация когда стор ждёт другой стор (waitFor) нормальна или это проблема с архитектурой?

Про это хорошая дискуссия здесь: <a href="https://t.co/x9MskRHZcE">gist.github.com/gaearon/d77ca8…</a>. Я объясняю почему с редьюсерами это не проблема. <a href="https://twitter.com/vdv73rus" title="Vislov Dmitry">@vdv73rus</a>

RT <a href="https://twitter.com/23ydobemos" title="Ilya Zayats">@23ydobemos</a>: Если судить по мини-опросу про зарплаты фронтенд-разработчиков в <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>, то на заработки надо валить не в Европы, а в…

В Redux ты сам решаешь, что использовать для моделей. Ему всё равно. ) Хочешь — immutable, хочешь plain objects или что еще. <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>

RT <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> довольно успешно пишу код без Flux на Morearty с иммутабельностью. Почему в redux ты не используешь Immutable…

Сигнатура — (state, action) =&gt; state. Ты можешь использовать всё что угодно в качестве state в своих редюсерах. <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>

RT <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тот же time travel отлично ложится на immutable структуры данных

Я согласен. Redux делает ассампшн что, что бы ты ни использовал, оно нигде не мутируется. <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>

По моему опыту достаточно просто использовать ES7 rest/spread syntax, чтобы не мутировать объекты/массивы. <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/23ydobemos" title="Ilya Zayats">@23ydobemos</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Уровень жизни ниже. Для того чтобы жить лучше, надо платить: за "элитную" квартиру, за машину, глот…

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a> Тут холодно и темно!!! Но через 5 лет можно получить паспорт и валить на юг :-)

Если позовут куда, расскажу ) <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

Чтобы работало, надо { "stage": 1 } в .babelrc <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>

Можно let { …rest, stuffIDontCareAbout } = stuff; return rest <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>

Завершаю сегодняшний поток добрым видео. Спокойной ночи! <a href="https://t.co/M7TD3kbl68">vimeo.com/88035957</a>

## Среда <small>45 твитов</small>

Провинция, front end (angular) - 40к и это еще много. <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а не было желания написать свой роутер для реакта?

Мне нравится React Router. Он еще не совсем классный, но будет классный в 1.0. <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>

Миксины опциональные, ты можешь использовать контекст напрямую. <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>

Роутер 1.0 будет легко "направлять" через Flux полностью, так что состояние может лежать в твоем сторе. <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>

Киев, пусть будет Senior, не лид, Node.js/React, $3.5k - 4% <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

$3200 после налогов, React+Flux приложения для бэкенда ритэйловых сервисов <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

а можно как нить после митапа пойти не пиво пить, а взорвать косяк, да вообщем можно и до) <a href="https://t.co/apEluqo3lJ">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/i_told_ya" title="Isaev Igor">@i_told_ya</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> mvc и модели на основе <a href="https://t.co/mepRhCB9be">github.com/share/sharejs</a>, во снах снится что все переписал на flux

RT <a href="https://twitter.com/paulmillr" title="Paul Miller">@paulmillr</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> “до 6к” это занятная метрика. Если считать чистые часы на почасовке, то почти всегда будет меньше 130. У многих…

RT <a href="https://twitter.com/chicoxyzzy" title="Sergey R">@chicoxyzzy</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> зарелизился Nuclide от Facebook <a href="http://t.co/ylP1xYDGqg">nuclide.io</a>

RT <a href="https://twitter.com/8gene" title="Eugene">@8gene</a>: <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> (1 <a href="https://t.co/ojwYDZgU3E">github.com/evancz/elm-arc…</a>) (2 <a href="https://t.co/mAWMuTUAM7">github.com/slamdata/pures…</a>)  без синтетичних су…

RT <a href="https://twitter.com/8gene" title="Eugene">@8gene</a>: <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> типи допомагають зрозуміти що треба 2 стейт машини - для бізнес-логіки, і д…

Асинхронный action creator может вернуть просим, например, чтобы компонент имел к нему доступ. <a href="https://twitter.com/victor_suzdalev" title="Victor Suzdalev">@victor_suzdalev</a> <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

Я же ни из кого не вытягиваю клещами. Погугли движение <a href="https://twitter.com/search?q=%23talkpay">#talkpay</a>. Знать ЗП на рынке — важно. <a href="https://twitter.com/konenkov" title="Sergey Konenkov">@konenkov</a>

RT <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a>: <a href="https://twitter.com/konenkov" title="Sergey Konenkov">@konenkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да ну, узнать, чо почём, может, ты мало получаешь для своего стажа/позиции, география - вот это вот все

RT <a href="https://twitter.com/gryzzly" title="gryzzly">@gryzzly</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> every berlinjs I attended, до, во время и после.

RT <a href="https://twitter.com/aluuu" title="Усиление и Манатан">@aluuu</a>: <a href="https://twitter.com/8gene" title="Eugene">@8gene</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/MostovenkoA" title="Mostovenko Alexander">@MostovenkoA</a> <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> боже мой, это же Elm, все в машину! <a href="http://t.co/mzeytmiq1q">youtube.com/watch?v=Agu6ji…</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/konenkov" title="Sergey Konenkov">@konenkov</a> информация особенно актуальна для большого аутсорса в СНГ, где зп пытаются занизить до мини…

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a> <a href="https://twitter.com/konenkov" title="Sergey Konenkov">@konenkov</a> вообще, пока такие данные остаются массово закрытыми, остается простор для злоупотреблений <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/sudodoki" title="Джон, просто Джон">@sudodoki</a> <a href="https://twitter.com/konenkov" title="Sergey Konenkov">@konenkov</a> сплошь и рядом вижу, как девушкам на аналогичной должности не доплачивают, например <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Кстати, про себя. В российском стартапе получал от $2300 до $2700 в месяц. Сейчас — консалтинг $100/час. <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как ты посоветуешь решать проблему постепенной прорисовки интерфейса при асинхронной загрузке разных блоков д…

RT <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> неготовность данных, спиннеры, пустые области на странице

Специальный компонент типа AsyncProps занимается резолвингом и не рендерит детей, пока они не готовы: <a href="https://t.co/HS0Tx1l1jy">github.com/rackt/react-ro…</a> <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/victor_suzdalev" title="Victor Suzdalev">@victor_suzdalev</a> что-то я совсем запутался. мы просто пока на flummox-e, а там же экшены и экшен-криэйтеры п…

Вот хорошее объяснение разницы между Actions и Action Creators: <a href="https://t.co/1vukbvhDJB">github.com/gaearon/redux/…</a> <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a> <a href="https://twitter.com/victor_suzdalev" title="Victor Suzdalev">@victor_suzdalev</a>

Просто надо как-то деньги зарабатывать после ухода из компании. ) <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

Я сейчас готовлюсь к конференции React Europe. Посоветуйте, как сделать хорошо флоу рассказа? У меня нет опыта настоящих конференций.

RT <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> лайв кодинг решает! Свежайший пример: <a href="http://t.co/J9kPj8Fhza">youtube.com/watch?v=j-kj2q…</a>

RT <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>: Пацаны-ребяты, посоветуйте модульный/компонентный CSS фреймворк, прям список всех что знаете. Нужно для исследований.
RT plz

RT <a href="https://twitter.com/kojoru" title="Konstantin Yakushev">@kojoru</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а как находил клиентов для консалтинга?

Сами пишут. Потому что много видного опен-сорса. Еще полезно нетворчиться на митапах и читать лекции, ребята подкидывают работу <a href="https://twitter.com/kojoru" title="Konstantin Yakushev">@kojoru</a>

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как в фильмах — вступление, закрутка, плато, раскрутка. Например: о себе, проблема, анализ, решение

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кроме того, старайся добавить сильные цитаты, которые могут уйти в Твиттер

RT <a href="https://twitter.com/harisov" title="Vitaly Harisov">@harisov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> почитай книгу «Мастерство презентации», очень хорошая.

<a href="http://t.co/TTkESCpvsu">mann-ivanov-ferber.ru/promo/presenta…</a>

Мне комфортно два-три часа в (будний) день, чтобы остальное время заниматься опенсорсом. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> <a href="https://twitter.com/paulmillr" title="Paul Miller">@paulmillr</a>

React/Flux <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/kojoru" title="Konstantin Yakushev">@kojoru</a>

Одесса, фронтенд + Node.js, $2k <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

Разве Webpack теперь работает не через PostCSS? <a href="https://t.co/xeVJmjlSlF">github.com/webpack/css-lo…</a> <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

Я не очень понимаю, о чем ты. Чанки делаются одной строчкой в коде, и ты их получаешь автоматически. <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

ExtractTextPlugin — оптимизация. Она не всем нужна. И если хочешь билдить CSS отдельно сам, просто делай это :-) <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

То есть, Webpack не заставляет тебя использовать его для CSS. Многие используют его только для JS. <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

Странно, как это может быть аргументом в пользу Browserify. <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

Для меня поддержка hot reloading достаточный плюс ) <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a> <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

## Четверг <small>29 твитов</small>

Верстка магазина и других сайтов компании. В основном только HTML/CSS, немного JS, шаблоны на PHP. Беларусь, 1300 $ <a href="https://t.co/UK8Y0YUjpX">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/dmitriyminer" title="Miner">@dmitriyminer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> где вы берете заказы, я как начинающий даже за бесплатно не могу найти заказ Python/Django/Bootstrap

RT <a href="https://twitter.com/cakeinpanic" title="Katerina Tort">@cakeinpanic</a>: .<a href="https://twitter.com/dmitriyminer" title="Miner">@dmitriyminer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>  upwork(odesk). если не справился – возвращаешь деньги, и клиент не может оставить отрицательн…

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Есть билет на React Europe (418€), сделай пожалуйста ретвит, может найдутся желающие.

RT <a href="https://twitter.com/dmitriyminer" title="Miner">@dmitriyminer</a>: <a href="https://twitter.com/cakeinpanic" title="Katerina Tort">@cakeinpanic</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> все хотят портфолио, а врать как-то не хочется

RT <a href="https://twitter.com/cakeinpanic" title="Katerina Tort">@cakeinpanic</a>: <a href="https://twitter.com/dmitriyminer" title="Miner">@dmitriyminer</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у меня написано "я молодой, но страстно желающий работать падаван". ну и тесты пройдены. нормал…

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: Finally, Atom 1.0! <a href="https://t.co/F0ZpSddefo">twitter.com/AtomEditor/sta…</a>

Извините, что сегодня молчун. Готовлю слайды к React Europe. Дизайнер помогает )

Давайте сегодня такой формат — отвечаю на вопросы про hot reloading JS-кода. От общих до сугубо технических.

Начну с пары инструментов. Есть вот Figwheel. Кажется, он офигенный. Но увы, только ClojureScript. :-( <a href="http://t.co/fbsVeRJ3kE">youtube.com/watch?v=j-kj2q…</a>

Есть React Hot Loader. Он только для реакта. Это мой проект. Вот видео, с которым он запустился: <a href="http://t.co/2DsBRTW2Nk">vimeo.com/100010922</a>

Есть Amok. В отличие от Figwheel и RHL, он зависит от конкретного браузера (Chrome). <a href="http://t.co/E81jsGz3Nk">amokjs.com</a>

LiveReactload использует тот же движок, что и RHL, но под Browserify: <a href="https://t.co/idrYKYBz6x">github.com/milankinen/liv…</a>. К сожалению, он re-evaluat-ит все модули.

React Native Webpack Server позволяет использовать живую перезагрузку React Hot Loader внутри React Native: <a href="https://t.co/Xt3XHH8YLW">github.com/mjohnston/reac…</a>

RT <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в каких случаях применим hot loader?

Проект должен использовать Webpack. Работает редактирование методов компонентов на ходу + модулей, у которых нет состояния <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

Конечно, он работает только с React-компонентами. <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в двух словах: по какому принципу это всё работает? Почему, например тот же flummox не полностью hot reloada…

Хот релоадинг работает в модулях, у которых нет локального стейта. Поэтому он работает для компонентов и чистых функций. <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

В Flummox вторы — классы. Из них трудно «выдирать» стейт, потом переносить в новый инстанс, как-то перерегистрировать их. <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

В Redux вместо уторов чистые функции-редюсеры, которые «собираются» композицией в одну. Эта одна функция — всё, что заменяется <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

React Hot Loader заменяет функцию render(), и в итоге рут-компонент получает новую чистую функцию в props, и ей пользуется. <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

RT <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как думаешь, реально браузерным вендорам договориться о нативном стандарте для перегрузки кода, типа chrom…

Чем дольше я занимаюсь hot reloading, тем больше я уверен, что это не имеет смысла. Это не дело браузера — это дело бандлера <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>

RT <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мне кажется что произвольный код с сохранением состояния без помощи браузера не перегрузить

Пытаться сохранить локальное состояние — изначально неверный подход. Отсюда проблемы. Надо выносить состояние вне. <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a> FigWheel доказывает обратное. Но… ClojureScript. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Вынос состояния «вне» имеет другие плюсы — возможность строить крутые тулзы для logging и time travel. <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>

Я думаю, что Webpack Hot Module Replacement + тулзы типа React Hot Loader достойно решают эту проблему. <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/somerandstring" title="Ivan Dmitriev">@somerandstring</a>

## Пятница <small>78 твитов</small>

Вы пользуетесь Browserify или Webpack? Почему?

За Browserify: <a href="https://t.co/flciffEBa9">gist.github.com/substack/68f8d…</a>

За Webpack: <a href="https://t.co/IBNBzEiXaF">gist.github.com/substack/68f8d…</a>

Webpack vs Browserify на React Podcast: <a href="http://t.co/ZhSuA0wkdN">reactpodcast.com/2015/06/webpac…</a>

Пит Хант называет феномен «modularity shaming» <a href="https://t.co/dEBDVo0jrz">gist.github.com/substack/68f8d…</a>

Джеймс Лоно рефлексирует о том, как модули — контракт нашего взаимодействия как разработчиков. <a href="http://t.co/7FIWR2fKpw">jlongster.com/Modularity</a>

Лонг, Твиттер. Лон. Автокоррект :-/

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Browserify просто потому что у нас нет задач для фич специфичных для Вебпака.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я "не знаю” чем я пользуюсь, у меня Ember CLI - он как Тефаль думает за меня

RT <a href="https://twitter.com/esergeev" title="Evgeny Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а чем плох подход webpack-dev-server с перезагрузкой приложения во фрейме?

Не то что бы плох. Лично для меня не продуктивен. Теряю стейт, DOM. <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/marinintim" title="Tim Marinin">@marinintim</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что есть для JS для таймтрэвела?

Я сам не знаю, буду благодарен за ссылки. Поскольку ничего не нашел — пришлось написать Redux. :-) <a href="https://twitter.com/marinintim" title="Tim Marinin">@marinintim</a>

RT <a href="https://twitter.com/MaxMykhailenko" title="Max Mykhailenko">@MaxMykhailenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a> а замена сторов?

В Redux нет уторов, есть редюсеры — чистые функции. Вот корневой редюсер и заменяется. А стейт вне него. <a href="https://twitter.com/MaxMykhailenko" title="Max Mykhailenko">@MaxMykhailenko</a> <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

Это класс. Реакту не хватает такого. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

RT <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> grunt+browserify на работе, webpack для себя. особой разницы нет, но webpack все же чуточку быстрей и удоб…

Я сегодня буду твитить набегами. Пачками из пяти-шести штормотвитов на темы, которые меня волновали последний год.

RT <a href="https://twitter.com/hellbeast92" title="Александр Староверов">@hellbeast92</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> webpack шустрее, удобнее, все из коробки, отличная документация, куча лоудеров и плагинов фактически настарте…

RT <a href="https://twitter.com/mursya_ru" title="Елена Джетпыспаева">@mursya_ru</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> славабогу, а то весь мой тви из монолога :) нужно аккуратнее

RT <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a>: <a href="https://twitter.com/hellbeast92" title="Александр Староверов">@hellbeast92</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> насчет отличной документации - это шутка такая?

У вебпака документация ок (все опции на одной странице), но вот интро/гайдов не хватает. <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/hellbeast92" title="Александр Староверов">@hellbeast92</a>

RT @Ask_11: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> browserify, потому что привык к нему. Несколько раз пробовал webpack, но натыкался на странности API и возвращался…

That's why styles need to be incapsulated into components ;-) <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а считается ли антипаттерном писать вместо jsx функции? вообще есть ли разница? jsx же только для ридабилити?

Ты можешь писать createElement вручную, если хочешь. JSX сильно помогает читаемости. Плюс Babel будет его оптимизировать. <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>

RT <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a> ещё JSX статически фиксирует семантику React элементов, что позволит делать более "сильные" оптим…

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a> а где про это можно подробней почитать? документация jsx? <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

<a href="https://t.co/ZOKy814rT0">github.com/facebook/react…</a>, <a href="https://t.co/TVcC12d1hm">github.com/facebook/react…</a> <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a> <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a>

RT <a href="https://twitter.com/esergeev" title="Evgeny Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> покопался с redux, начинаю понимать чем удобен hot reload. Но иногда затыкается rebuild, приходится еще раз дела…

RT <a href="https://twitter.com/avevlad" title="AveVlad">@avevlad</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> когда в проекте был Browserify, билд был ~30 sec на cmd+s, c Webpack 1-2 sec

Раз сегодня пятница, давайте джаваскриптовый Follow Friday. Кого нужно фолловить в JS-мире?

Вот мой список: <a href="https://t.co/gINQm6UQiy">medium.com/@dan_abramov/m…</a>

RT <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>: <a href="https://twitter.com/avevlad" title="AveVlad">@avevlad</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> стоило настроить кеширование и инкрементальное обновление.

RT <a href="https://twitter.com/aluuu" title="Усиление и Манатан">@aluuu</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/czaplic" title="Evan Czaplicki">@czaplic</a>

RT <a href="https://twitter.com/talgautb" title="Талга УтБ">@talgautb</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> начал собирать <a href="https://t.co/3ulBu0n4xo">github.com/talgautb/front…</a> а потом как-то остановился :)

RT <a href="https://twitter.com/avevlad" title="AveVlad">@avevlad</a>: <a href="https://twitter.com/talgautb" title="Талга УтБ">@talgautb</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://t.co/tE36C0jfM2">github.com/AveVlad/russia…</a>

RT <a href="https://twitter.com/317070" title="317070">@317070</a>: My work of the past week. <a href="https://t.co/qHs2yqvTDw">twitter.com/sedielem/statu…</a>

RT <a href="https://twitter.com/notmisha" title="Misha Denil">@notmisha</a>: Inceptionism live stream: <a href="http://t.co/iNZMWViw6o">goo.gl/A9CiGa</a> neural networks dreaming in real time.

RT <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a>: . <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а мне вот интересно как можно распиарить например свой репозиторий на гитхабе, есть ли какие-то советы/практики…

Всё просто. Надо для начала найти комьюнити. Например, React/Ember/etc комьюнити. Люди, вокруг которых вертится экосистема. <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a>

Надо фоловить этих людей. Читать, что и почему они используют. Создавать что-то, что им нужно. Решить их проблемы. <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a>

Одному что-то очень сложно сделать, потому что ты не знаешь, что людям нужно. В комьюнити полезное разлетается. <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a>

Для меня решающее значение имеет твиттер. Не было бы твиттера — про мои проекты никто бы и не знал. Это мой рупор и фидбэк. <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a>

Да, паре ребят, которые ты видишь что ретвитят такие ссылки. Конечно, должен быть готов README, должен соблюдаться привычный стиль <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> главное решать чью-то боль, затем иметь доки и тесты. А потом щепотка маркетинга

Еще помогает писать статьи. Увеличивает доверие к тебе. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a>

RT <a href="https://twitter.com/gesterok" title="Vlad Marchuk">@gesterok</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a> <a href="https://t.co/gCWew2OMqx">medium.com/@Shapiro/strip…</a> вот тут <a href="https://twitter.com/Shapiro" title="Julian Shapiro">@Shapiro</a> рассказывает как пульнуть репозиторий в стратосферу

RT <a href="https://twitter.com/gesterok" title="Vlad Marchuk">@gesterok</a>: <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/Shapiro" title="Julian Shapiro">@Shapiro</a> специально для тебя, без  SF <a href="https://t.co/o1ateLu259">hacks.mozilla.org/2014/05/open-s…</a>

RT <a href="https://twitter.com/tchak13" title="Paul Chavard">@tchak13</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в последней версии ember есть все что есть в react (virtual dom, sane actions etc…) + router :) <a href="https://twitter.com/kolybasov" title="Mykola Basov">@kolybasov</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

React — не про virtual DOM. Это просто деталь реализации. React — про декларативные компоненты на JS. <a href="https://twitter.com/tchak13" title="Paul Chavard">@tchak13</a> <a href="https://twitter.com/kolybasov" title="Mykola Basov">@kolybasov</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

Это позволяет делать вещи типа React Native или React Hot Loader. <a href="https://twitter.com/tchak13" title="Paul Chavard">@tchak13</a> <a href="https://twitter.com/kolybasov" title="Mykola Basov">@kolybasov</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не поверишь, Эмбер тоже. Я в шоке от того, насколько мой код на Эмбер похож на то, что люди на Реактепишут <a href="https://twitter.com/tchak13" title="Paul Chavard">@tchak13</a>a href="https://twitter.com/kolybasov" title="Mykola Basov">@kolybasov</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: The Debate Around “Do We Even Need CSS Anymore?”
<a href="https://t.co/ZWbX4NkSLU">css-tricks.com/the-debate-aro…</a>

RT <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>: <a href="https://twitter.com/avevlad" title="AveVlad">@avevlad</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да. Тоже мучался, потом нашел <a href="https://t.co/eUz8Ij3MJN">github.com/gulpjs/gulp/bl…</a>, теперь билды 300 ms максимум.

RT <a href="https://twitter.com/esergeev" title="Evgeny Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> можно ли сделать, чтобы при hot reload обновлялись и source maps?

Нужно поставить звездочку в этом issue: <a href="https://t.co/Bx4NtTH7vM">code.google.com/p/chromium/iss…</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/hellbeast92" title="Александр Староверов">@hellbeast92</a> раз разрешил всякого рода вопросы, как написать hot loader поверх webpack для не-реакт? видел ответ…

<a href="http://t.co/rYdyv2gX12">webpack.github.io/docs/hot-modul…</a>, <a href="http://t.co/32mCbc9Jyr">webpack.github.io/docs/hot-modul…</a>, <a href="http://t.co/jQl4MCMmiW">jlongster.com/Backend-Apps-w…</a> <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/hellbeast92" title="Александр Староверов">@hellbeast92</a>

Еще я подсматривал, как style-loader это делает для CSS <a href="https://t.co/iaeOmb4fUD">github.com/webpack/style-…</a> <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a> <a href="https://twitter.com/hellbeast92" title="Александр Староверов">@hellbeast92</a>

Сегодня большой день для фронтэнд комьюнити. Встречайте NPM 3.0 beta. <a href="https://t.co/BOmbPlp68Q">github.com/npm/npm/releas…</a>

Прощайте, имплиситные peerDependencies. Тем не менее не спешите их удалять — они не УХОДЯТ, они МЕНЯЮТСЯ. Становятся полезнее.

Вам приходили решения проблем программирования во сне?

RT <a href="https://twitter.com/_toydestroyer" title="Sergey Toy">@_toydestroyer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я так ООП понял.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да, переспать проблему мне часто помогало.

У меня пару раз так было (и получались действительно хорошие решения), но есть риск провалиться в «не помню, я сегодня спал или нет вообще?»

RT <a href="https://twitter.com/icelabaratory" title="Ivan Starkov">@icelabaratory</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Отдавая столько времени и сил opensource, когда и как успеваешь зарабатывать на жизнь?

Сейчас временный перерыв, немножко осталось накопленных. Потом восполню контрактной работой <a href="https://twitter.com/icelabaratory" title="Ivan Starkov">@icelabaratory</a>

RT <a href="https://twitter.com/asktwi" title="Anna">@asktwi</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Частенько. Но скорее в момент засыпания. Тогда или сразу бегу к компу, или записываю на утро. Держу блокнот возле …

RT <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> requirejs уже не в моде?

Думаю уже давно нет. Он очень медленный в разработке, а в продакшн приходится клеить строго одним файлом. <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

И Webpack, и Browserify (со специальными модулями) поддерживают разбивку на чанки. Насколько я знаю, RJS этого не умеет. <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

RT <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у меня после бокса хорошо идёт решать проблемы, голова очищается. Если конечно в голову не словил пару раз н…

RT <a href="https://twitter.com/icelabaratory" title="Ivan Starkov">@icelabaratory</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Webpack главным образом за hot-reload, огромное спасибо кстати :-),
плюс с browserify всегда довесок gulp g…

RT <a href="https://twitter.com/23ydobemos" title="Ilya Zayats">@23ydobemos</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кучу раз просыпался и искренне удивлялся отсутствию «ночных» коммитов в репозитории

RT <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>, ну, Webpack я пока не пробовал, он более комплексный, чем Brwsfy/RJS, имхо. A сравнение Brwsfy …

RT <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a>: <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a> rjs очень медленный на больших проектах. Нельзя задать кастомный лоадер для js. И это…

RT <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a> сейчас в проекте имеем 140000 значимого кода и ветка с webpack выглядит спасением

## Суббота <small>82 твита</small>

RT <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да, однажды во сне приснились строчки моего кода где был баг, который искал неделю.

RT <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a>: .<a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a> читаю про Webpack. Первый вопрос: почему они хотят CSS через JS грузить? http://t.co<a href="http://t.co/aYp0RORTO9">webpack.github.io/docs/tutorials…</a>

RT <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a>: <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a> Если ты о том,что делается require('*.css'). То это удобно,ты явно видишь зависимости…

Ты можешь выделять CSS в отдельный файл плагином на этапе компиляции: <a href="http://t.co/ZiT3nYRZzu">webpack.github.io/docs/styleshee…</a>  <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

Вовсе необязательно *грузить* CSS через JS. Речь о том, чтобы *описывать* зависимости одним языком. <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

Как именно грузится — &lt;style&gt; или выделенным CSS файлом — оптимизация, и может меняться в dev/prod. <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

К примеру, &lt;style&gt; удобнее во время разработки, потому что работает hot reloading для CSS из коробки. <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

RT <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>, а как это дальше попадает в DOM? Тоже через JS? А если у тебя min+rev на images? Есть ли manifest? <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a>a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

Webpack подразумевает, что всё это делается через него. Там есть встроенная поддержка хешей и тп. <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

Например, вот результат компиляции. В исходном коде имена нормальные. <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a> <a href="http://t.co/xvcSxyCGBu">pic.twitter.com/xvcSxyCGBu</a>

Всё это полностью настраиваемо. На каждом этапе можно добавить любые дополнительные трансформации. <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

По сути, ты можешь описать любые зависимости. Вебпак не имеет каких-то особых знаний о CSS/картинках <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

Просто есть несколько официально поддерживаемых плагинов для css/files. Вместо них можно свои юзать. <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

RT <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Вопрос по реакту и флаксу. Могут ли компоненты, типа попапов, хранить в себе стейт, или же его тоже лучше …

Мой rule of thumb простой. Если стейт нигде в аппе больше не понадобится — локально. Если может понадобиться, стор. <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a>

Вот плагин, который превращает require('xyz') в относительный URL результата <a href="https://twitter.com/lancedikson" title="Denis Demchenko">@lancedikson</a> <a href="https://twitter.com/Krivlenia" title="Константин">@Krivlenia</a> <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a> <a href="http://t.co/0TZSwh0WUy">pic.twitter.com/0TZSwh0WUy</a>

RT <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a> а как в этом случае hot reload отрабатывает? Убивает локальный стейт?

React Hot Loader не убивает локальный стейт компонентов. В этом его фишка. ) Он делает это, проксируя все методы <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a> <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a>

RT <a href="https://twitter.com/drzhbe" title="Сальников Станислав">@drzhbe</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> насколько я знаю у тебя как минимум 2 крупных опенсорс проекта (redux, dnd). Как распределяешь свое время между ни…

Еще React Hot Loader. :-) Перемещаю фокус. DnD 1.0 выпущен, я занялся Redux. После конференции выпущу Redux — пересмотрю приоритеты <a href="https://twitter.com/drzhbe" title="Сальников Станислав">@drzhbe</a>

Заниматься несколькими вещами у меня никогда не получалось. Надо доводить проекты, чтобы они какое-то время могли жить без меня. <a href="https://twitter.com/drzhbe" title="Сальников Станислав">@drzhbe</a>

RT <a href="https://twitter.com/limpbrains" title="Ivan">@limpbrains</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> используешь что-нибудь для генерации и валидации форм в React?

Лично я нет, но вопрос интересный, потому что какой-то одной лидирующей либы я не знаю. Подписчики? <a href="https://twitter.com/limpbrains" title="Ivan">@limpbrains</a>

В целом, даже если не в сторы, всё равно стейт лучше выносить наверх: <a href="https://t.co/9elnPjzDWZ">medium.com/@dan_abramov/s…</a>

RT <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a>: <a href="https://twitter.com/dmitruksergey" title="Serhii Dmytruk">@dmitruksergey</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> если в умном компоненте несколько попапов, то каждый должен хранить состояние в сторе?

Хороший вопрос. Либо стол знает о разных попапах, и у них есть какие-то ID для разделения состояния. <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a> <a href="https://twitter.com/dmitruksergey" title="Serhii Dmytruk">@dmitruksergey</a>

Либо ты можешь использовать Redux, в котором это решается композицией редюсеров. <a href="https://t.co/x9MskRHZcE">gist.github.com/gaearon/d77ca8…</a> <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a> <a href="https://twitter.com/dmitruksergey" title="Serhii Dmytruk">@dmitruksergey</a>

RT <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a> <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a> Дэн, а насколько твоя реализация хот лоадера зависит от реакта? Реально ли испо…

Webpack предоставляет API, который можно использовать для любой библиотеки. <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a> <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a>

Другое дело — насколько Knockout декларативный? Можно ли просто «заменить» функцию render? <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a> <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a>

React Hot Loader работает, потому что render() не имеет сайт эффектов, и можно заменить на ходу <a href="https://twitter.com/milk_is_my_life" title="Sebastyan Pereiro">@milk_is_my_life</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a> <a href="https://twitter.com/YevhenBoyarsky" title="Yevhen Boyarskiy">@YevhenBoyarsky</a>

RT <a href="https://twitter.com/icelabaratory" title="Ivan Starkov">@icelabaratory</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/limpbrains" title="Ivan">@limpbrains</a> Недавно исследовал эту тему это <a href="https://t.co/dSkMLxoePe">github.com/gcanti/tcomb-f…</a> выглядит как единственное что-то еще жи…

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a> привет! Не хочешь провести неделю <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>? Было бы чертовски круто!

Мой любимый блог по программированию: <a href="http://t.co/0Qj0UtX8Ka">prog21.dadgum.com</a>. А ваш?

RT <a href="https://twitter.com/icelabaratory" title="Ivan Starkov">@icelabaratory</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Этот <a href="https://t.co/SUQsCQm8d3">github.com/sebmarkbage?ta…</a> каждый раз когда я чувствую что я крут, читаю его комментарии. Крутизна слетае…

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я обожаю <a href="https://twitter.com/2ality" title="The 2ality blog">@2ality</a> за подробности и технические детали.

Мой второй любимый блог по программированию: <a href="http://t.co/2HwHwm3xpl">johndcook.com/blog/</a>

RT <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> твиттер заполняет всю информационную нишу. Чем пользуешься для агрегации блогов?

Раньше Google Docs, сейчас ничем. Просто захожу раз в месяц на те, которые помню. <a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a>

RT <a href="https://twitter.com/Sullenor" title="Литвинов Алексей">@Sullenor</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/Wzb8D0fnO2">codewars.com</a> - хорошее обучение на практике :)

RT <a href="https://twitter.com/talgautb" title="Талга УтБ">@talgautb</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Твиттер основной источник + подписки на недельный забугорный дайджест + Хабр чисто для интереса

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да, он милый. Я когда Underhood вел, кидал вот это: <a href="http://t.co/BpnfuZVOvJ">steve-yegge.blogspot.com</a> и <a href="https://t.co/pIBVPHTuAx">sites.google.com/site/steveyegg…</a>

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как относишься к <a href="https://t.co/HmTngLgRAA">github.com/feross/standard</a> ? Меня он немного пугает. Karma на него перевели недавно, напрмер, я…

Лично я не впечатлен. Использую гораздо более «стандартный» Airbnb-стиль. <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> ничего, наши в теме: <a href="https://t.co/rlJFPGjaUU">github.com/Flet/semistand…</a> Я им много месяцев пользуюсь, он ближе к AirBnB, в том числе <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

По правде я не вижу смысла в отдельных стайл чекерах, если есть ESLint, и он поддерживает extend-ы конфигов. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

Например меня пару дней назад научили такой мудрости, это всё, что мне нужно. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a> <a href="http://t.co/N1OJY8FBTy">pic.twitter.com/N1OJY8FBTy</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я зашел к тебе на <a href="https://t.co/lZScBrMl8s">github.com/gaearon/redux</a> а у тебя там всего 2 баджа. А должно быть ну хотя бы 5, а лучше 15 :<a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

Через полчаса я превращусь в тыкву. Что-нибудь, о чем хотите спросить напоследок?

Хаха. Я уже счет дням недели потерял. Всё из-за конференции этой. ) <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> сегодня только суббота

RT <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> почему flux (и аналоги, в том числе твой) такой сложный и расплывчатый? И ни в одном нет примеров с простейши…

Есть пример с AJAX и Redux: <a href="http://t.co/gBgmrBim49">github.com/emmenko/redux-…</a>. Ссылка из README есть. Официальный пример будет позже. <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

Я сейчас усиленно готовлюсь к конференции React Europe, где я покажу, зачем в принципе я делал Redux. <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

Поэтому сейчас он не такой документированный, как мне хотелось бы. Я займусь этим после конфы обязательно. <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

По поводу общего вопроса — поясни, что ты называешь расплывчатостью. Твой вопрос тоже расплывчатый. ) <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

В целом про «о чем Flux» я написал вот эту статью: <a href="https://t.co/f1MJKgkzHu">medium.com/@dan_abramov/t…</a> <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

В целом, для каждого уважающего себя Flux-фреймворка есть пример с AJAX. Просто они обычно в отдельных репах. <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

Согласен, не хватает «лучших практик». В Redux я стараюсь ограничить то, что можно сделать, чтобы таких вопросов было меньше. <a href="https://twitter.com/silentroach" title="Игорь">@silentroach</a>

Вы программируете под музыку? Под какую?

Про себя — в последнее время кручу по кругу по очереди To Pimp a Butterly (Kendrick Lamar) и Born to Die (Lana Del Rey :-)

RT <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> конечно. Dead Kennedys, ZZ Top, the rumjacks, judas priest, Beethoven!

RT <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> последний месяц только под это, рекомендую <a href="https://t.co/0ZQFAXukfY">soundcloud.com/podval-capella…</a>

Еще меня вот этот микс очень завораживает. <a href="https://t.co/xjKx5ryyOT">soundcloud.com/taras3000/the-…</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Rammstein, мотивирует :)

RT <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть хороший сервис — mixcloud. Выбираешь тег-жанр и слушаешь миксы по часу и больше

Программирование и вещества. Совместимо? Скучно?

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> виски иногда

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Отлично программируется, когда чуть-чуть пьяный. Самую малость.

То есть Ballmer Peak это не миф? <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>

RT <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как-то писал код пьяным, дома. Утром пришлось всё переписать) если покурить, совсем не хочется писать код

Мне тоже не хочется. А вот подумать про абстракции иногда тянет. Связи и паттерны захватывают <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В добавление к музыке: не могу работать под музыку со словами, особенно если люблю и знаю слова. Сижу и вместо код…

Пока не знаю слова, меня они отвлекают. Когда я их помню, я на автомате напеваю, и они не «занимают» словесный процессор мозга <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>

RT <a href="https://twitter.com/cakeinpanic" title="Katerina Tort">@cakeinpanic</a>: <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> write drunk, edit sober. Ernest Hemingway <a href="http://t.co/bfkFKTkRE3">pic.twitter.com/bfkFKTkRE3</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> судьбоносный вопрос: StarTrek смотрел? Кирк или Пиккар? DS9 - торт или говно? Захари Кину - новая надежда или …

Хаха. Я пока не смотрел толком. Чуть-чуть начинал только. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кофеин, совместимо)

Десктопная картинка тред. <a href="http://t.co/KhbCy39TdH">pic.twitter.com/KhbCy39TdH</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/Y3F0zGIUA5">pic.twitter.com/Y3F0zGIUA5</a>

RT <a href="https://twitter.com/beshur" title="Shu Buznik">@beshur</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/QFD7aHEI7F">pic.twitter.com/QFD7aHEI7F</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> какой прекрасный субботний вещества-тред

## Воскресенье <small>31 твит</small>

Есть еще интересный лайфхак на эту тему, который мне показал друг. Сейчас расскажу. <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

RT <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a> <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну если MDMA, то митинг растянется на весь день и будет самым успешным в ис…

Так вот. Берете приложение <a href="https://t.co/OgzyYOote3">vk.com/app2462</a>. Запускаете во вкладках три радиостанции. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

Станции такие: Relax &gt; Nature Sounds, Разное &gt; Детское радио и Электроника &gt; Cliqhop IDM. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

Настраиваете уровни громкости, затягиваетесь и наслаждаетесь. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

Я думаю если свести их и записать, это будет самая модная пластинка <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

Думаю его тоже туда можно подмешать.. <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

Ме нравится. В духе <a href="https://t.co/M7TD3kbl68">vimeo.com/88035957</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> бтв, новую айдентику мтв тоже как будто под веществами делали
<a href="http://t.co/UnIYJ2m36o">creativereview.co.uk/cr-blog/2015/j…</a> <a href="http://t.co/KXCSXVVKZ0">pic.twitter.com/KXCSXVVKZ0</a>

RT <a href="https://twitter.com/mbarinov" title="Max Barinov">@mbarinov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как тебе второй Angular?

Пока не смотрел. По блогам нравится, что есть возможность делать top down data flow и immutable модели. <a href="https://twitter.com/mbarinov" title="Max Barinov">@mbarinov</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Run the Jewels — отличнейший рэп. Лана была прошлым летом :)

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А есть еще разрабы с кератоконусом? Как выживают?

Как не надо писать комментарии на Github: <a href="https://t.co/RUyznc5jHn">github.com/gaearon/react-…</a>

RT <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> воскресный вопрос, какие хобби у программистов? Мне кажется что почти все либо музыканты, либо фотографы)

RT <a href="https://twitter.com/denswor" title="denswor">@denswor</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а кто в очках?

Курт Гёдель, доказавший, что если формальная система достаточно выразительна для арифметики, её консистентность не доказать изнутри <a href="https://twitter.com/denswor" title="denswor">@denswor</a>

RT <a href="https://twitter.com/dmitruksergey" title="Serhii Dmytruk">@dmitruksergey</a>: <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у меня бег и силовые.

Репетирую доклад. Выходит 50 минут. Надо 25. Как вы выбираете, что выкинуть?

Например, понятно, что демо выигрывает у просто слайдов. Но бросаться из одного демо в другое — может быть недостаточно понятно.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> пет-проекты, книги и игры.

RT <a href="https://twitter.com/Sullenor" title="Литвинов Алексей">@Sullenor</a>: <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кино, лонгборд и бас-гитара :)

RT <a href="https://twitter.com/gladkih_m" title="Maxim Gladkih">@gladkih_m</a>: <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a> комиксы, стройка, бег <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Оставляю то, что складывается в историю. У каждой истории есть главная линия, а также есть ответвления. Руби ветк…

RT <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> расскажи о своем пути обучения английскому? может какие-нибудь лайфхаки/советы/сервисы/методики?

Я просто Гарри Поттера прочитал всего. К седьмой книжке хочешь не хочешь выучишь <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a>

RT <a href="https://twitter.com/sashakavun" title="Aleksandr Kavun">@sashakavun</a>: <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> практическая стрельба, книги, бег.

RT <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>: <a href="https://twitter.com/soundinyourmind" title="Гранкин Андрей">@soundinyourmind</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> банальные книги/музыка/игры, бокс, стрельба, пет-проекты

RT <a href="https://twitter.com/soider" title="Michael Sakhnov">@soider</a>: <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> курсера, сериалы, skyeng

Прощаюсь с вами, спасибо всем за отличную неделю! Скоро в Париж на React Europe, буду вас вспоминать )

Мой основной аккаунт <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>, в основном англоязычный, но я отвечаю по-русски, если спросите по-русски. Следите за апдейтами! &lt;3

## Ссылки

### gist.github.com  
<a href="https://gist.github.com/gaearon/d77ca812015c0356654f" target="_blank">https://gist.github.com/gaearon/d77ca812015c0356654f</a>  
<a href="https://gist.github.com/substack/68f8d502be42d5cd4942" target="_blank">https://gist.github.com/substack/68f8d502be42d5cd4942</a>  
<a href="https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1364980" target="_blank">https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1364980</a>  
<a href="https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1365101" target="_blank">https://gist.github.com/substack/68f8d502be42d5cd4942#comment-1365101</a>  
<a href="https://gist.github.com/gaearon/d77ca812015c0356654f" target="_blank">https://gist.github.com/gaearon/d77ca812015c0356654f</a>  
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
<a href="https://github.com/gaearon/redux" target="_blank">https://github.com/gaearon/redux</a>  
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
<a href="https://goo.gl/1kUAf0" target="_blank">https://goo.gl/1kUAf0</a>  
<a href="http://goo.gl/er5j6y" target="_blank">http://goo.gl/er5j6y</a>  
<a href="http://goo.gl/A9CiGa" target="_blank">http://goo.gl/A9CiGa</a>  
<a href="http://alexeyraspopov.github.io/talks/what-the-flux/" target="_blank">http://alexeyraspopov.github.io/talks/what-the-flux/</a>  
<a href="http://alexeyraspopov.github.io/talks/what-the-flux/" target="_blank">http://alexeyraspopov.github.io/talks/what-the-flux/</a>  
<a href="https://vimeo.com/88035957" target="_blank">https://vimeo.com/88035957</a>  
<a href="http://vimeo.com/100010922" target="_blank">http://vimeo.com/100010922</a>  
<a href="https://vimeo.com/88035957" target="_blank">https://vimeo.com/88035957</a>  
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
<a href="http://steve-yegge.blogspot.com/" target="_blank">http://steve-yegge.blogspot.com/</a>  
<a href="https://sites.google.com/site/steveyegge2/blog-rants" target="_blank">https://sites.google.com/site/steveyegge2/blog-rants</a>  
<a href="https://soundcloud.com/podval-capella/sets/main" target="_blank">https://soundcloud.com/podval-capella/sets/main</a>  
<a href="https://soundcloud.com/taras3000/the-sailing-away" target="_blank">https://soundcloud.com/taras3000/the-sailing-away</a>  
<a href="https://vk.com/app2462" target="_blank">https://vk.com/app2462</a>  
<a href="http://www.creativereview.co.uk/cr-blog/2015/june/mtv" target="_blank">http://www.creativereview.co.uk/cr-blog/2015/june/mtv</a>
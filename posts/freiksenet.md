# freiksenet

_09 августа 2015_

## Понедельник <small>112 твитов</small>

В Финляндии неожиданно началось лето, а тут начался <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>. Привет уютному чату!

Меня зовут Михаил Новиков, в интернете я везде freiksenet. Я разработчик, в основном на JS. Живу в Финляндии уже 12 лет, переехал из СПб.

Я работаю в своём стартапе, https.//reindex.io. Мы делаем BaaS для реакта на основе GraphQL. Пишем на node + hapi + rethinkdb.

Планы на неделю - поговорить о GraphQL и Relay, про жизнь и IT в Финляндии, пофлеймить про то что я не люблю - например Angular, gulp/grunt

Я мог бы поговорить про реакт, но после <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>, <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a> и <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> мне сложно что-то добавить. Реакт крутой, юзайте его :)

На выходных в английском твиттере было аж два срача - сначала про babel и использование stage 0 преобразований <a href="https://t.co/KFpmZfwiLi">mobile.twitter.com/ryanflorence/s…</a>.

Второй про то достаточно ли V8 оптимизирует "реальный код", а не только микробенчмарки. <a href="https://t.co/2qm5PBe391">mobile.twitter.com/wycats/status/…</a>

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вы начали стартап после выхода спеки по графклу или после презентации идеи графкла?

RT <a href="https://twitter.com/talgautb" title="Талга УтБ">@talgautb</a>: Ну хз, 2 основных проекта на реакте в ff что-то тормозят сильно :( может у меня что-то с компьютерами?!) <a href="https://t.co/F7SRkYUrjm">twitter.com/jsunderhood/st…</a>

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну и оффтоп: как убедить бизнес вложить деньги в подобные идеи? "БааС для такой стрёмной идеи? Этим хоть пользоват…

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как попал в программирование ? Важно ли спец. образование ?

Про babel - мы юзаем и на клиенте и на сервере, stage 1. async/await это невероятно удобно при работе с базами данных.

<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Остальное это просто удобный сахар, но очень добавляет удовольствия при написании кода, например spreadы и destructuring.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а мы плотно подсели на `stage: 0`: Class Properties (странно, если их уберут) и даже Function Bind (по началу к…

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> к слову, актуальная таблица <a href="https://t.co/NeclN2tcmo">github.com/tc39/ecma262</a>

Милый трюк с console.log и function bind в бабеле. <a href="https://t.co/jxQyUwj4TD">twitter.com/freiksenet/sta…</a>

RT <a href="https://twitter.com/arik0n" title="Sergey Belov">@arik0n</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Расскажи про скорость Реакта. Рендеринг на сервере, на клиенте, инициализация js и тп. <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

Расскажу про GraphQL и почему он нам так нравится. Меня можно назвать не модным уже именем full-stack developer или модным product developer

Я пишу фронтенд, часто я так же писал и бакенд. Как минимум я правил бакенд или пинал бакендеров, чтобы они его правили.

Очень частая история - сделал REST API, все чистенько и по спеку. Начал писать фронтенд - нужны еще эти связанные данные или это поле.

Начинаешь править бакенд, эндпоинты становятся намного менее чистыми и с кучей странных параметров. Или просто толстыми и возвращают все.

Еще веселее ситуация, когда бакенд команда отделена от команды которая делает приложения. Каждый запрос на новую фичу вызывает недовольство

В итоге хачишь workaround-ы на фронтенде и все глючит и тормозит.

Фейсбук (и например Netflix) решили что хватит это терпеть и придумали, соответственно GraphQL и Falcor.

GraphQL позволяет на сервере описать все данные, которые доступны и их связи. Клиентское приложение может одним запросом взять что ему надо.

Поменялись требования или компонент? Просто добавь или удали поле в запросе.

А бакендеры написали один ендпоинт и просто добавляют туда фичи, когда они становятся доступны.

Несколько ссылок - introduction от FB.
<a href="http://t.co/AGwC5h2izW">facebook.github.io/react/blog/201…</a>

Программный пост от нас.
<a href="https://t.co/zd3dFwXZcd">reindex.io/blog/how-faceb…</a>

Референс имплементация
<a href="https://t.co/5ng5KpH9eb">github.com/graphql/graphq…</a>

Вот только что запостил гайд, как писать простой сервер на надо юзая reference implementation.
<a href="https://t.co/fI6QbWJStA">reindex.io/blog/building-…</a>

<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> На ноде, естественно.

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: на мой вкус <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на этой неделе — огонь.

Я понял что я неправильно отвечал на вопросы. Woe on me! Можете почитать все в tweets and replies. Теперь буду старатся правильно.

RT <a href="https://twitter.com/ap_savin" title="Alexander Savin">@ap_savin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Мне наоборот так больше нра. Интересное ретвитнул - я кликнул и почитал ответы. Не интересное - не кликаю. Чище …

Все до этого по-другому делали. Вопрос к <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>. <a href="https://twitter.com/ap_savin" title="Alexander Savin">@ap_savin</a>

Это было в ответах, но вынесу сюда. Мы начали стартап почти сразу после первого talk-а на конференции про GraphQL.

Ловили GraphQL запросы из мобильных приложений FB, читали блог посты, сделали свою имплементацию до выхода спека.

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a> <a href="https://twitter.com/ap_savin" title="Alexander Savin">@ap_savin</a> ретвитить, отчасти нужно также для того, чтобы вопросы попадали в архив твоей недели

Что вы делали крутое не-веб в своей карьере? Я работал в <a href="http://t.co/RXEWySJ43S">zenrobotics.com</a>, писал код для роботов сортирующих мусор на clojure.

Если что - сортирующих мусор физически, IRL. Я не про garbage collection :D

RT <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Можно пример с позиционными и индексными ключами?

Первое сделает un-mount и mount если список поменятся. Второе скорее сделает апдейт и поменяет contents.
<a href="https://t.co/1LpPUId8km">gist.github.com/freiksenet/f96…</a> <a href="https://twitter.com/astralian" title="Konstantin">@astralian</a>

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> работал на заводе, которые авиадвижки делает, в отделе не разрушаемого контроля :)

RT <a href="https://twitter.com/Barlog_M" title="Barlog (18+)">@Barlog_M</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> удел clojure — роботы, сортирующие мусор. :)

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> там проверяются диски, в которые лопатки вставляются. Каждый около 1kk$ стоит. А проверить на дефекты их ар…

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> писал софт для TV-приставок, правда всё на тех же веб-технологиях: в приставку был встроен webkit.

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> чо бы все понимали что это такое - вот фотография :)
<a href="https://t.co/XpeVWHhTKO">instagram.com/p/y413-exPyZ/</a>

RT <a href="https://twitter.com/AndrewGurylev" title="Andrew Gurylev">@AndrewGurylev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> этот вопрос сделал мой день. НИ-ЧЕ-ГО.

RT <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> недолго работал в ГКНПЦ им.Хруничева, где Протоны собирают. Не то чтобы круто, но тогда было интересно.

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> сигнализацию проектировал для школ, судов и прочих гос.  учреждений.

RT <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как отлаживать / профилировать комплексные GrahpQL запросы?

Очень зависит от того как хранятся данные, можно например записывать все вызовы к БД сделанные одним запросом и по этому смотреть <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

RT <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на примере с блогом всё просто. А есть примеры простых решений для сложных кейсов?

RT <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> например, обновление нескольких связанных объектов. Проверка прав доступа при доступе к части данных.

Про первое - в отличии от запросов, GraphQL особо не задает то как должны делатся мутации. <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

Так что надо будет просто написать такой Mutation который правильно изменяет несколько обьектов.

Вообще GraphQL не отвечает на эти вопросы напрямую. Главная идея что ты написал свои типы данных и связал их с базой данной <a href="https://twitter.com/snejink" title="Aleksei Krasnoperov">@snejink</a>

Потом клиент уже просто этим пользуется, тебе не надо ничего менять.

Но при этом то как ты решишь у себя внутри проблему с permissions - это не то что GraphQL решает, это решает твой бакенд.

В этом прелесть GraphQL - он не навязывает как тебе все сделать, только как это показывать клиенту и как клиент это будет запрашивать.

Надеюсь нормально обьяснил, запутанно получилось.

Важно понять про GraphQL, что это не SQL. Это намного ближе к WSDL, чем к SQL, такой WSDL для хипстеров)

Это не общий язык для запросов данных. Скорее язык для описания удобных для использования RPC серверов.

Ну и язык для использования этих RPC серверов, да.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> хотя бы того же Relay – лично меня очень интересует как выглядят мутации с точки зрения компонента.

Я попробую про Relay поспекулировать, но к сожалению я тут на твоем уровне, все что знаю - из докладов. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

Они немного раскрыли тему в личных разговорах, плюс мы читали де-минифицированный код, но деталей про интересные вещи не очень много.

Итак Relay - клиентская библиотека от ФБ, должна очень круто работать с реактом и graphql.

Еще не вышла :( Базовая идея - компоненты сами описывают свои требования кусками GraphQL запросов, Relay их умеет собирать и запрашивать.

Relay обещает делать кеш, pagination (судя по всему больная проблема в ФБ), и оптимистичные модификации на клиенте.

Если про первые две вещи все в целом ясно, то про клиентские мутации известно только то, что у них будет клиентский id :)

Кеш будет сделан через уникальный id для каждого обьетка возвращаемого relay-compatible сервером. id похоже будет содержать в себе тип.

Pagination - для страничных вещей, для каждого обьекта возвращается курсор - непрозрачный id, который можно дальше передавь для листания.

Вероятно в курсоре будет хранится тип и текущая сортировка (или/и фильтр).

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://t.co/9lVZveHxc1">speakerdeck.com/laneyk/mutatio…</a> – вот здесь как обычно много слов и мало примеров кода, но в целом концепцию уловить мо…

Самый подробный набор примеров про Relay
<a href="http://t.co/QWBibXLs8E">facebook.github.io/react/blog/201…</a>

Про relay и мутации - раз у нас есть уникальный кеш, мы можем даже при мутациях которые меняют несколько обьектов обновить наше состояние.

Достаточно денормализовать данные полученные с сервера и обновить наше представление по id для каждого отдельного элемента из этих данных.

Что пока не понятно - это как именно происходит оптимистичное обновление до этого.

Спасибо <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>, забыл совсем про эту презентацию. Немного больше всего известно про мутации, чем я сказал сначала)

tl/dr - Relay заменит flux, GraphQL заменит REST и всем нам будет нирвана и полный React. :)

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что мне нравится в GraphQL – с точки зрения клиента есть один источник данных, который отдаёт именно и только т…

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в моём мире это очень укладывается в концепцию иммутабельных глобальных деревьев состояния, только тут такое же…

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и общение клиент-сервер сводится просто к синхронизации дерева.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> огромный плюс – отсутствие процессинга данных перед рендером на клиенте. данные даже хранятся в идентичных стру…

Ну вот в Relay будет какой-то процессинг, хотя бы денормализация для кеширования. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну, это чуть про другое. наверное :) я скорей про "чистые данные как чистое состояние".

Бесстыжая реклама - reindex.io будет поддерживать relay как только relay выйдет :)

RT <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> relay не заменит flux, так как не все состояние диктовано базой данных.

Возможно. Может в Relay будет возможность хранить такое состояние. <a href="https://twitter.com/vslinko" title="Vyacheslav Slinko">@vslinko</a>. В любом случае клиентское состояние это намного проще.

RT <a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не обязательно с бд. Мы пилим внутренее апи с подобной идеей. В половине случае объект смотрит не в базу, а…

Прелесть GraphQL что можно смотреть куда тебе удобно, это implementation detail <a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a>

RT <a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> только я не понял зачем fb понадобился свой формат. У нас всё отлично легло на обычный json со схемами.

Может им показалось что так удобнее писать. JSON не самый удобный формат для программирования. <a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a>

RT <a href="https://twitter.com/Barlog_M" title="Barlog (18+)">@Barlog_M</a>: Начитался <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> теперь у меня в продакшене React, Babel и WebPack. И об этом никто не знает.

Улучшаем мир, one company at a time. <a href="https://twitter.com/Barlog_M" title="Barlog (18+)">@Barlog_M</a>

RT <a href="https://twitter.com/is_ruslan" title="Ruslan  Ismagilov">@is_ruslan</a>: <a href="https://twitter.com/Barlog_M" title="Barlog (18+)">@Barlog_M</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Есть легенда, что существует разработчик, который пишет на React+Babel+Webpack и не твердит об этом з…

RT <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вопрос к сообществу: а какую либу сейчас лучше всего использовать для работы с canvas на клиенте?

RT <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>: <a href="https://twitter.com/greybax" title="Aleksandr Filatov">@greybax</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> нет. Лучше сказать "инфографику".

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="http://t.co/ADiSIf72Ri">d3js.org</a>

RT <a href="https://twitter.com/PixelsCommander" title="Denis Radin">@PixelsCommander</a>: <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Оч расплывчатый запрос. Для объектной абстракции paper.js хорош. Для игр pixi.js.

RT <a href="https://twitter.com/PixelsCommander" title="Denis Radin">@PixelsCommander</a>: <a href="https://twitter.com/xgrommx" title="Denis Stoyanov">@xgrommx</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a> Изрядно но в том же списке Paper обходит всех,а если смотреть на примеры - там даже…

Несмотря на твиттер, день прошёл продуктивно. Ребейзнул и починил бранч с аутентификацией на версию с graphql-js. А что вы сегодня сделали?

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как быстро можно перевести проект с полусотней эндпоинтов на graphql-подобное решение?

Нет пока простых решений, увы ( Вручную надо переводить. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> меня интересуют любые решение, переход руками — это нормально

Если нода - берешь graphql-js и переводишь. Начинаешь просто с того что задаешь свои типы и связи между ними. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кстати <a href="https://t.co/PxBMsiyrG4">github.com/RisingStack/gr…</a>

Я смотрел, это имхо ещё не готово. Но в целом генерить типы это правильный подход, мы так же делаем. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

Но это зависит от того что за база данных, я бы например mongoose выбросил и написал типы заново, а из sql базы генерил.

В любом случае надо генерить побочные типы, типа InputObjectType или Connection. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>

## Вторник <small>139 твитов</small>

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> GraphQL это что-то типа API Gateway <a href="http://t.co/znUrQ2ZWd6">microservices.io/patterns/apiga…</a>?

Нет, совсем не это. GraphQL на другом уровне концептуалтно, API gateway может иметь graphql endpoint. <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>

Доброе утро уютный чатик! Сегодня у нас день срачей :) По просьбе <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> я расскажу почему я не люблю Angular.

Начну издалека, люблю истории. Вот реакт многие засирают за jsx, типа html в коде, фу. И это при том что jsx это трансформ в js.

А в ангулар магический код в виде html атрибутов, который запускается чуть ли не eval, который не отдебажить и который не js, но это ок %)

Да, я про filter и иже с ними.

Реакт очень активно заставляет программиста делить все на компоненты. refы намерено имеют минимальный функционал, чтобы даже не пытались.

В ангулар туториалы предлагают писать толстые контроллеры, а интерфейс написания директив (компонентов) как будто намеренно ужасен.

Заметьте я ещё ни разу не сказал 'ангулар тормозит'. Все чисто с точки зрения программиста.

Дальше - у ангулара свои модули, своя система DI, свои тесты, свое все. Какая-то фабрика велосипедов.

DI это отдельная история, мне иногда кажется что оно в ангуларе, чтобы пугать людей и заставлять думать что раз так сложно то видимо круто.

RT <a href="https://twitter.com/a_lithium" title="Aliaksei Lithium">@a_lithium</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> хотел сказать чисто с точки зрения программиста тормозит?)

Ну что программист с ангуларом тормозит и это плохо. <a href="https://twitter.com/a_lithium" title="Aliaksei Lithium">@a_lithium</a>

Но я отдам ангулару должное, формочки в нем делать быстро и просто. В реакте до сих пор нет хорошей и простой либы для форм. :(

Но SPA в современном мире это не только формы и это ограничивает использование ангулара.

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> чем ужасен интерфейс директив? не докапываюсь мне просто реально сравнить не с чем.

Меня пугают магические заклинания restrict: 'X' с волшебными буквами :) <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я делю все фичи на компоненты и директивы мне помогают в этом.

Ты молодец и хороший программист! Я считаю что ангулар не делает достаточно чтобы продвигать такой стиль. <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> фронтенд за последние годы сильно продвинулся и логично, что angular устарел, но это не делает его плохим, а …

Ну он плохой по сравнению с текущими альтернативами. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

Прекрасный коммент про N+1 и GraphQL. <a href="http://t.co/SvaMzStGe5">reddit.com/r/reactjs/comm…</a>

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это да, но разве это не помогает проще принимать решения о том как организовать процесс и о том как писать код?

Да, но проблема в том что надо выучить как в ангуларе принимаются такие решения и потом этот опыт не переводится на другие либы <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> может так и лучше сравнивать? Например вот такие-то штуки лучше в плане модульности, биндинга, мод…

Ну я и старался на контрасте с реактом. <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

Ну я заметил что я слишком часто начинаю ответы с ну. :)

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>  ангулар же наоборот, для тех, кто не хочет и готов просто верить, учить устав и делать (:

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ни то ни другое не плохо ни хорошо. просто разные подходы. всё зависит от выбора людей.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что изображено на твоей аватарке?

Был или есть в Питере клуб, не помню названия уже. Там статуя собаки из кожи и противогаза. Голова этой статуи на аватарке. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

Мирно закончили срач про ангулар, но не волнуйтесь, у меня ещё несколько срачей запланировано на сегодня :)

RT <a href="https://twitter.com/justusebrain" title="Eugene Rodionov">@justusebrain</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> в реакте все компонентно, а в ангуларе директиву лишний раз писать не хочется, вот все и в шаблон…

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> текущий angular, это версия 2, остальное Legacy.
Ты ведь не сравниваешь chrome и ie6?

Насколько народ юзает 2.0? Мне кажется legacy не стремятся переводить на 2.0, чую как с питоном 3 и перл 6 будет :) <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>: <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> альфа-статус ничего не значит? не думаю, что 2-й ангуляр кто-то использует в продакшене <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Наброшу - а angular вообще кто-нибудь серьезный и большой использует в продакшене? Ну типа Google или Twitter :P <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

То есть кто-нибудь с миллионами пользователей. Я знаю что ангулар очень популярен в кровавом энтерпрайзе.

Самый простой троллинг ангулара - спросить почему гугл сами до сих пор его не юзают :P С реактом к ФБ такого нет, они едят свой dogfood.

RT <a href="https://twitter.com/stigmat4j" title="Антонихин Максим">@stigmat4j</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> магический фреймворк в магическом ентерпрайзе

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> Elisa использует. Но лучше бы она этого не делала :-)

Мало энтерпрайза кровавее чем элиза :) <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

Для тех кто в танке - Elisa это местный большой телеоператор. Кстати я там отдельно взятый проект таки перевел на реакт.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у Google много команд разработки, в отличии от FB.

Ну это не правда же. У ФБ очень много разных проектов. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> напиши пост о том как дёшево и сердито перебраться на реакт с ангулара. Если действительно дёшево.

Я же не упоротый :) Никак дешево ни на что не перейти. <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>

RT <a href="https://twitter.com/lane_en" title="eden lane">@lane_en</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> пруф: <a href="http://t.co/N9xIKT0iZI">img.ctrlv.in/img/15/08/04/5…</a> . Так что троллинг не обоснован

Естественно если был выбран ангулар когда-то и на нем тысячи кода, то надо пилить на нем. Перепись всего заново и с нуля редко оправдана.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> у нас есть проекты на ангуляре, для перехода надо переписывать полностью.

Я просто предлагаю взглянуть на альтернативы когда будете начинать новый проект.

RT <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я думаю, что стоит про реакт что-то плохое написать, тогда точно будет огненное шоу пуканов))

А-то. Нам js-хипстерам палец в рот не клади, отгрызем и заменин на react/babel/webpack. <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>

RT <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в случае если ваша компания решила что angular deprecated, новый код писать с ним неоправдано

Иногда для поддержки старого проекта надо писать новый код, пусть даже на deprecated технологии :( <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/RusAlexander" title="Alex Pletnev">@RusAlexander</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> пока очень похоже, что сделать angular deprecated могут только HR'ы.

RT <a href="https://twitter.com/dmzkrsk" title="dmzkrsk">@dmzkrsk</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а какой стек сейчас лучше взять для нового проекта типа-энтерпрайза (таблицы-формочки). Для фронтенд-части

RT <a href="https://twitter.com/iamale_ru" title="Я @mocaddishu">@iamale_ru</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a> Стоп, то есть реакт уже для хипстеров?

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а как же перцы которые их вместе использую якобы для скорости рендера интерфейсов?

Слышал про такое. Думаю эти проекты совмещают скорость angular-а и глубокий model-layer реакта. <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> :)

RT <a href="https://twitter.com/iamale_ru" title="Эль">@iamale_ru</a>: <a href="https://twitter.com/ilavriv" title="ilavriv">@ilavriv</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a> И про Backbone забывать не стоит

Вот кстати с backbone на реакт просто. На одном из проектов просто переписали все view как компоненты. <a href="https://twitter.com/iamale_ru" title="Я @mocaddishu">@iamale_ru</a> <a href="https://twitter.com/ilavriv" title="ilavriv">@ilavriv</a> <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>

RT <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>: <a href="https://twitter.com/iamale_ru" title="Я не Антон">@iamale_ru</a> ну, в акке <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> , "только и разговоров, что о &lt;strike&gt;море&lt;/strike&gt; React'е и о закате"

Новая тема для срача - coding style. Какое самое срачеобразующее правило в вашем coding style? У нас, например, обязательные trailing comma.

Заодно скиньте ваш .eslintrc/.jscsrc/.jshintrc etc. Вот наш. <a href="https://t.co/FB89ZycXqz">gist.github.com/freiksenet/464…</a>

Trailing comma, кстати, чтобы диффы были красивые. :)

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот наш <a href="https://t.co/qjvY5PATOY">github.com/nordnet/nordne…</a>

RT <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ставить точку с запятой после return или не ставить

Точку с запятой ставить всегда :) <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> очевидно, что spaces vs tabs

Я думал только go-любы юзают табы в современном мире <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a>: <a href="https://twitter.com/ilavriv" title="ilavriv">@ilavriv</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я вот когда-то продавливал, что не надо — типа, и так понятно. но редко встречаю любителей подобной е…

Всегда бесило что ; опциональна, нелюблю такой код. Всегда надо думать нужна она или нет. Легче всегда ставить. <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a> <a href="https://twitter.com/ilavriv" title="ilavriv">@ilavriv</a>

RT <a href="https://twitter.com/iamale_ru" title="Я @mocaddishu">@iamale_ru</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a> *brofist*
Что думаешь насчёт Standard style? (Помимо того, что там ; нет) <a href="https://t.co/bxARFKkoGH">github.com/feross/standard</a>

Что он нифига не standard. <a href="https://twitter.com/iamale_ru" title="Эль">@iamale_ru</a> <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a>

Лучший аргумент за ; это правило в standard style - 'never start a line with ( or ['. Правило, чтобы исправить что ты натворил в предыдущем.

RT <a href="https://twitter.com/igor_shubovych" title="Igor Shubovych">@igor_shubovych</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> 2 или 4 пробела

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/iamale_ru" title="Я @mocaddishu">@iamale_ru</a> <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a> вот я тоже так думаю, и <a href="https://twitter.com/sindresorhus" title="Sindresaurus">@sindresorhus</a> сделал JavaScript happiness style ❤️ XOXO https:/<a href="https://t.co/9OnQIWCaZS">github.com/sindresorhus/xo</a>

RT <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a>: <a href="https://twitter.com/igor_shubovych" title="Igor Shubovych">@igor_shubovych</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> 2 пробела и никаких табов!

Самый sensible 'общий' стиль который я видел это airbnb. Почти все по делу. <a href="https://t.co/8QIArTWXH9">github.com/airbnb/javascr…</a>

RT <a href="https://twitter.com/maksim_valiev" title="Maksim Valiev">@maksim_valiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> А как быть с тем что кто-то любит в 2 пробела отступ, кто-то в 4?

Кто СТО тот и решает :) <a href="https://twitter.com/maksim_valiev" title="Maksim Valiev">@maksim_valiev</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/maksim_valiev" title="Maksim Valiev">@maksim_valiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> Главное чтобы у всей команды было одинаково хорошее/плохое зрение?)

Естественный отбор :) :D <a href="https://twitter.com/maksim_valiev" title="Maksim Valiev">@maksim_valiev</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кстати, я вот считаю, что объявление переменных через запятую — плохо. дискасс?

Помню делал консалтинг в стартапе, где был кофескрипт и 4 пробела индент.

RT <a href="https://twitter.com/kipruss" title="Konstantin Baev">@kipruss</a>: <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ушли от этого. Одна переменная - одна строка и свой var, хоть и рябит от них иногда

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/maksim_valiev" title="Maksim Valiev">@maksim_valiev</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> решает не СТО, а тимлид.

Это ты в больно большой компании работаешь :) <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> <a href="https://twitter.com/maksim_valiev" title="Maksim Valiev">@maksim_valiev</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> по поводу кодстайла в целом – нужно почаще спрашивать себя не делаешь ли ты случаем работу UglifyJS.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> знаю лично людей, которые часто называют переменные одной буквой, помимо `i` или `e`.

Мой ко-фаундер даже на `e` ругается переодически :) А вообще, читабельные названия переменных - наше всё.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и здесь опять же React со своими `shouldComponentUpdate` и `componentDidMount` задаёт хороший тон.

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> аминь! Переменная внятно должна отвечать на вопрос "что?"

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> моё любимое – `dangerouslySetInnerHTML` <a href="https://t.co/MLnpsQkCI6">facebook.github.io/react/tips/dan…</a>

Мне кажется они намеренно, чтобы люди не юзали) <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в былые времена были и `l`, и `m`, и даже `n` во вложенных циклах-перециклах :)

В такие моменты хочется включить лимит на cyclomatic complexity. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a> кстати, есть что-нибудь живое ("babel") кроме <a href="https://t.co/qzsQISc3T0">github.com/es-analysis</a> и <a href="http://t.co/6u1B8SuhIm">eslint.org/docs/rules/com…</a>?

Не знаю, никогда не думал о том чтобы серьезно это включать, обычно такое на code review ловится. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> когда-то была забавная идея <a href="https://t.co/V3qyUn7jBr">github.com/deepsweet/dba</a>, я даже на мелких штуках пару раз юзал :)

Кстати мы очень любим code review. Мне кажется это очень помогает, чтобы код катился в легаси медленнее.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кстати, а что вы используете для документирования кода? начиная от стиля/"методологии" и заканчивая инструмента…

Хороший вопрос! Есть ли альтернатива jsdoc? <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я уже упоминал <a href="https://t.co/CU0TdI100o">github.com/codemix/babel-…</a> пока вёл свою неделю, т.е. заменить jsdoc на flow annotations + обычные …

flow как документация это хорошо, но не достаточно. Не подходит для описания API или деталей как что-то концептуально работает. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> исповедуем методу "читай код".

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот тут мужик рассказывает как писать меньше доков <a href="https://t.co/FXBWnsyJkF">youtube.com/watch?feature=…</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> code review, но это дорого.

Кривой код в продакшене - дороже. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Если код работает, то дорогой будет поддержка, но это отложенные траты.

Ну ясно что это trade off. Мы выбрали более дорогой код сейчас, чем более дорогая поддержка потом. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> цена поддержки важнее стоимости разработки. Пускай последняя и кажется выше.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> сложно обосновать заказчику эти траты, он всегда откладывает на потом.

Ну у нас мы сами заказчики. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/11bit" title="inky">@11bit</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а code style в пре-коммит/пуш хуках проверяются. Или есть менее жесткие пути?

Мы вместе с тестами проверяем стиль и соответственно на CI <a href="https://twitter.com/11bit" title="inky">@11bit</a>

RE: code review <a href="http://t.co/QQabYYDxLK">i.imgur.com/eBBAUct.jpg</a>

RT <a href="https://twitter.com/neonick" title="Nick Marchenko">@neonick</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> поговорим об организации хранения изображений? Кто как подключает SVG: файлом, в html, base64? Как можно автомати…

Помню мой кофоундер для iconic сделал webpack loader который грузил svg inline. К сожалению так и не дошли руки опенсорснуть. <a href="https://twitter.com/neonick" title="Nick Marchenko">@neonick</a>

Сейчас уже поздно, это было у одного из клиентов.

RT <a href="https://twitter.com/kqxsr" title="kqxsr">@kqxsr</a>: <a href="https://twitter.com/neonick" title="Nick Marchenko">@neonick</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Используем стеки <a href="http://t.co/lDoFbCMAD8">bit.ly/1DpROQl</a>

RT <a href="https://twitter.com/subzey" title="subzey">@subzey</a>: <a href="https://twitter.com/neonick" title="Nick Marchenko">@neonick</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Вкратце, клеим всё в виде строк в svg-icons.js, а на странице создаём элемент и в нужном месте вставляем …

RT <a href="https://twitter.com/denswor" title="denswor">@denswor</a>: <a href="https://twitter.com/neonick" title="Nick Marchenko">@neonick</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у нас <a href="https://twitter.com/mista_k" title="Vladimir Kuznetsov">@mista_k</a> сделал такое <a href="https://t.co/78WmBjflJI">github.com/mistakster/gru…</a> . пользуемся в проектах. удобно.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: Тонны плюсов в карму <a href="https://twitter.com/Denis_dp" title="Denis Sergeevich">@Denis_dp</a> за использование <a href="https://twitter.com/firefox" title="Firefox">@firefox</a> <a href="https://twitter.com/search?q=%23DevEdition">#DevEdition</a> Берите пример - в канари-версиях браузеров полно плюше…

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/neonick" title="Nick Marchenko">@neonick</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://t.co/T8M01hvWsN">github.com/webpack/url-lo…</a>

RT <a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a>: <a href="https://twitter.com/MaximSukharev" title="Maxim Sukharev">@MaximSukharev</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>  в некоторых проектах используем <a href="https://t.co/lJKOCQnbOG">github.com/christianalfon…</a>

RT <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Привет, подскажи какой js фреймворк мне лучше выбрать если я хочу сделать что-то вроде twitter meets yout…

Это в смысле vine или coub? <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a>

Нашествие любителя Ember в ответах. Все что он говорит про Эмбер я могу сказать про Реакт.

Надо брать что лучше знаешь или что больше понравилось после туториала. Ember хороший фреймворк. React для меня лучше.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Твиттер - не самое удобное средство для таких обсуждений, и я бы с удовольствием обсудил эту тему.

RT <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> кстати  вопрос к адептам реакта, почему lifecycle methods в реакт имеют такие длинные имена?

RT <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> например вместо ComponentDidMount  не было бы лучше afterMount ?

Почему нет? Точно сразу понятно что это за метод. <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a>

Экономия на длинне переменных - головная боль для читателя в будущем. Пишешь один раз, читаешь 100.

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> поэтому названия должны быть выразительные и однозначные, а не длинные/короткие

RT <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> чем afterMount не понятен? И при этом он короче. Мне просто интересно чем они руководствовались когда наз…

С префиксом component они все одинаково начинаются, удобно группировать.

## Среда <small>106 твитов</small>

Доброе утро! Сегодня у нас эмигрансткий день. Как я говорил, я в Финляндии 12 лет из 28, живу здесь всю учебу и карьеру.

Язык я знаю плохо. В IT тут не надо язык знать если ты нормальный программист, но базу знать полезно чтобы заполнять формы и читать ценники.

В Финляндии хорошо если ты любишь единение с природой и когда мало людей. Хельсинки пытается быть хоть немного городом, но фейлит.

Тут безопастно, отличное образование, хорошая медицина, очень хорошее все для размножения. Но бывает скучно, концерты сюда не приедут.

Стартапы сюда доходят медленно, разнобразие *всего* тут намного меньше чем в Мск или в Питере. Например доставка еды только щас развивается.

В принципе IT развито, есть достатчно хорошее стартап комьюнити, проходят конференции, есть местные инвесторы и не-местные знают про нас.

Налоги тут высокие, но если смотреть на все Европу, то достаточно средние для развитых стран. В Дании, например, выше. В Чехии сильно ниже.

Интересный факт, который вымораживает русских - зп тут называется до налогов, тк налоги это твое дело и твой рабодатель про них не знает.

Так что ждите получить 3к евро чистыми после названной зп в 5к.

Русские в IT и науке тут бывают (иногда) нормальные, остальные эмигранты больше любят Путина, чем самый ватный ватник в России.

Я кончил, можете задавать вопросы.

RT <a href="https://twitter.com/7rulnik" title="Valentin Semirulnik">@7rulnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не хочется разводить политосрач, но почему они тогда уезжают? :D

По тем же причинам что и все остальные - работа, семья или учеба) Почему-то эмиграция некоторых больно бьет по голове. <a href="https://twitter.com/7rulnik" title="Valentin Semirulnik">@7rulnik</a>

RT <a href="https://twitter.com/azbykov" title="Aleksandr Bykov">@azbykov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как местные относятся к it-эмигрантам?

Нейтрально. Я за 12 лет ни разу не был подвержен дискриминации :) <a href="https://twitter.com/azbykov" title="Aleksandr Bykov">@azbykov</a>

RT <a href="https://twitter.com/vecmezoni" title="Alexander Inozemtsev">@vecmezoni</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/azbykov" title="Aleksandr Bykov">@azbykov</a> а в целом к русским?

Я лично дискриминации не чувствовал. Кто сам этого хочет всегда может её себе придумать. <a href="https://twitter.com/vecmezoni" title="Alexander Inozemtsev">@vecmezoni</a> <a href="https://twitter.com/azbykov" title="Aleksandr Bykov">@azbykov</a>

Про дискриминацию, заранее отвечу - нет, тут не отминают детей просто так, как в целом, так и у русских.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну, зато открыть свой стартап можно :)

Рынок маленький очень) <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

В YC точно не возьмут :D <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

Ну и у меня тоже тащемта ;) Я про то что стартап нацеленный на финский рынок это фигня. <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a> <a href="https://twitter.com/sorgoz" title="sorgoz">@sorgoz</a>

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как раз через три недели переезжаю) самый важный вопрос: сколько нужно бабла для более-менее комфортной жизн…

Сложный вопрос, сколько ни зарабатывал, всегда хочется больше :) Самое дорогое квартира. Мы снимаем недалеко от центра, 1300€ <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

Это евро-двушка. В спальных районах можно найти за 700€. В остальном - алкоголь очень дорогой. Остальное по-моему окей. <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

Вообще, думаю одному можно достойно жить на 2000 чистыми (~3300 до налогов), вдвоем на 3000 (~4500). <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

RT <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> «достойно» включает путешествия/накопления/крупные покупки? <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

Зависит от того насколько достойно вести жизнь в остальное время) Мне сложно судить, я буржуй и не умею копить) <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a> live reload / hot reload. Hot-reload - это замена компонентов на странице без ее перезагрузки. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a>

Hot reload меня прям возвращает во времена когда я писал Common Lisp. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a> <a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a>

RT <a href="https://twitter.com/sorgoz" title="sorgoz">@sorgoz</a>: От 3000 евро до налога уже можно жить. На семью с ребенком нужно от 4100e - впрочем, все индивидуально очень <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я часто замечал, что украинцы, которые переехали в Россию, тоже «ватнее» многих. Наверняка для этого синдро…

RT <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>: <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вы аккаунтом не ошиблись? Тут, вроде, про разработку было.

Тема эмиграции это вполне про разработку) <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a> <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/verylazydreamer" title="Ziyadin Shemsedinov">@verylazydreamer</a> <a href="https://twitter.com/alex_ivantsov" title="Alexander Ivantsov">@alex_ivantsov</a> <a href="https://t.co/y5ob7MtLPJ">github.com/caspervonb/amok</a>

RT <a href="https://twitter.com/mr_skriming" title="Pasha Grekovich">@mr_skriming</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/cssunderhood" title="Верстальщик">@cssunderhood</a> а как вы думаете, нужен ли современному разработчику свой блог? Полезно это аль нет?

Если нравится писать - то пиши. Есть много способов получить репутацию и без блога, например опен сорс. <a href="https://twitter.com/mr_skriming" title="Pasha Grekovich">@mr_skriming</a> <a href="https://twitter.com/cssunderhood" title="Верстальщик">@cssunderhood</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Зато намного больше чем во многих других местах Европы. Культура потребления тут нормальная. Не Америка, но жит…

Тут хуже с потреблением чем в Германии, UK, Бенелюксе или остальной Скандинавии. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Нет :-) Задача из жизни: ты живешь в Голландии, хочешь после работы забежать в магазин купить нитки для вышивки…

В Голландии есть amazon.nl и amazon.de с доставкой за 3 евро, а не 25 :) <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Те же самые магазины есть и в Финляндии. Интернет везде работает. Но не всё можно купить там.

Сойдемся на том, что за потреблением надо ехать в США :) <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/Barlog_M" title="Barlog (18+)">@Barlog_M</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> 10 твитов можно заменить одним: “Я живу в Финляндии 12 лет, а вы все неудачники!”

Закончим с политотой, перейдем к пятиминутке ненависти. Ненавижу когда просят чтото установить глобально (типа npm install -g).

Это отличная дорога в ад из-за несовместимых версий тулзов в проектах. Есть ./node_modules/.bin и npm scripts. Только локальная установка!

Кстати npm scripts еще может заменить ненужный gulp/grunt. gulp/gruntfile это всегда каша. webpack для сборки, npm scripts для запуска.

RT <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> пример конфига в студию)

Сейчас в вебпаке вроде можно удобнее переопределять конфиги. <a href="https://t.co/AOamKLbcx7">gist.github.com/freiksenet/d46…</a> <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>

Это кстати еще до выхода babel конфиг. Старые добрые времена.

RT <a href="https://twitter.com/antonfrolovsky" title="Frant">@antonfrolovsky</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Почему же, всякие CLI нужны глобально. Да и в принципе довольно сложно запутаться в локальных/глобальных м…

Поэтому они *все* должны быть локальными. Никогда не было проблем из-за разных версий, например, karma? <a href="https://twitter.com/antonfrolovsky" title="Frant">@antonfrolovsky</a>

RT <a href="https://twitter.com/antonfrolovsky" title="Frant">@antonfrolovsky</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Если есть локальная karma то дергается именно она :) если её нету то глобальная. Не вижу сложности держать…

А зачем тогда вообще глобальная? <a href="https://twitter.com/antonfrolovsky" title="Frant">@antonfrolovsky</a>

Еще пример scripts с большим количеством вещей:
<a href="https://t.co/ecnl39wYRe">gist.github.com/freiksenet/773…</a>

Всё большое можно перенести в отдельные скрипты, либо баш либо просто js. Гарантирую что будет чище чем писaть это gulp-ом.

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> прямо чувствуется негативный или даже травматичный опыт с галпом

RT <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну как сказать, без глобального npm и bower далеко не уедешь, ну и еще без npm-check-updates. для остально…

Вот npm это исключение которое может быть глобальным. Bower кстати не нужен вообще :) <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

RT <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> эх, реальность порою бывает не такой радостной. в моем случае битва за ненужность bower все еще продолжает…

Будь мужиком, откажись от bower, блеять) <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

RT <a href="https://twitter.com/touzoku" title="マラット">@touzoku</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> а что вместо bower?

Все через npm. <a href="https://twitter.com/touzoku" title="マラット">@touzoku</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

RT <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как это? Не знает, но вычитает их с тебя?

Ты сам разбираешься с налоговой, работодатель получает только твой процент. Поэтому при обсуждении зп ты говоришь о зп до налогов. <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a> а если при этом проживаешь в другой стране, то как это происходит?

В смысле если ты не в Финляндии, а работодатель финский? Платишь налоги по законам страны проживания. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/kuksikus" title="R.M.">@kuksikus</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В России зарплату тоже до налогов указывают

Я слышал принято компенсировать налоги конвертом. Мопед не мой, я никогда не работал в России. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В Финляндии тоже есть налоги "до зарплаты". Про них никто не говорит, говорят про подходный.

О них не говорят, так как они не зависят от твоей налоговой карты и тебе они не должны быть интересны. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> указывание зарплаты до налогов считается попыткой обмануть, поэтому, как правило, так не делают.

RT <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> по-моему это индивидуально обговаривается. Плюс традиционные 13% это же не все налоги.

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я всегда обсуждала с потенциальными сотрудниками зарплату до налогов. Никто не говорил, что я обманыв…

И самое главное они не часть твоей зарплаты, тк они не часть твоего налогооблагаемого дохода. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>

RT <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> я немного запутался. Еслт мы говорим о налогам, которые платит работодатель, то будь они меньше, …

Работодатель в Финляндии платит свои налоги на зарплату сотрудников, например часть соц страховки. <a href="https://twitter.com/_sashashakun" title="Alexander">@_sashashakun</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> на определенном этапе это становится ужасно неудобным. Makefile практичнее будет.

Makefile ценен, когда есть входы и выходы. По-моему нет разницы Makefile из 100 PHONY тасков или такой же npm scripts. <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>: <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мне кажется npm scripts и Makefile это вспомогательные вещи, а не взаимозамещающие https:/<a href="https://t.co/LJZhAq7r6M">gist.github.com/playpauseandst…</a>

Различия чисто визуальные, зачем еще один тул? <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> ну JSом на многих проектах стэк не заканчивается :) и вот здесь Makefile идеален

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> и это сразу перестаёт работать на винде

Ты так говоришь, будто это что-то плохое :) <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> безумно плохо, кросс-платформенный nodejs, а ваши проекты всё ещё не работают …

Деплой будет на линуксе, разрабы на линуксе или маке, зачем старатся? <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

К тому же для Make есть cygwin. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: Давайте поговорим о дискриминации. Кто из мужчин-программистов нравится вам внешне?

Lee Byron из ФБ по-моему очень милый :) <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://t.co/RbYAx2qBu9">avatars1.githubusercontent.com/u/50130?v=3&s=…</a>

RT <a href="https://twitter.com/touzoku" title="マラット">@touzoku</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> bobuk? :-D

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> Мне нравился Пол Айриш, особенно то что он немного похож на хирурга из Nip Tuck. А потом он женился, и я обиделас…

RT <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> предлагаю слово "верстальщик" считать матерным.

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> не соглашусь, из много на рынке и это нормально, а не «матерно»

Не понимаю эту профессию, это те кто темы для вордпресс делают? <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

Не представляю что будет делать верстальщик в проекте с реактом. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

Мне кажется это отголосок прошлого, когда не было фронтенда, а были темплейты. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

RT <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тоже что и всегда. Сверстает и отдаст на имплементацию. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

Какая-то лишняя работа получается. Мне все равно переписать после этого. <a href="https://twitter.com/SilentImp" title="Тихий Бес">@SilentImp</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ну вот я например не умею верстать. Чтобы сделать продукт, мне нужен верстальщик в помощь.

Вау. Я удивлён :) Я всегда это делал сам и не ожидал что не все фронтендеры это делают. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Сейчас я не вижу смысла доучиваться. Сверстать за меня может любой коллега, я лучше сделаю что-то, что другие н…

RT <a href="https://twitter.com/WarEnek" title="WarEnek">@WarEnek</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а используешь ли в работе каким-нибудь Livereoad'ом?

Webpack + React hot loader <a href="https://twitter.com/WarEnek" title="WarEnek">@WarEnek</a>

RT <a href="https://twitter.com/ap_savin" title="Alexander Savin">@ap_savin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> На последних двух работах были версталы и js раздельно. Ваше "матерно" очень некраси…

RT <a href="https://twitter.com/vladimore" title="Waldemar">@vladimore</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> об актуальности разделения вёрстки и логики говорит активность в аккаунте <a href="https://twitter.com/cssunderhood" title="Верстальщик">@cssunderhood</a>

RT <a href="https://twitter.com/as_Crazy" title="Alexander">@as_Crazy</a>: <a href="https://twitter.com/alexeyraspopov" title="Alexey Raspopov">@alexeyraspopov</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/playpausenstop" title="Igor Davydenko">@playpausenstop</a> у нас верстальщики пишут jsx. В начале было тяжело, со временем стал…

## Четверг <small>106 твитов</small>

Доброе утро! Сегодня мы поговорим про Webpack и почему это наш выбор для сборки фронтенда.

Начну опять издалека. У фронтенд ассетов есть некая дихтомия, javascript уже давно собирается каким-то способом, а все остальное нет.

И к js модулям все привыкли, тут  миллионы решений, от того же webpack-а до require.js до browserify. Все модули на любой вкус.

С css-ом или например картинками или шрифтами все поступали более грубо. Возможно был список файлов и гулп или грунт делали над ним магию.

Очень просто было забыть что-то добавить. Оч!ень просто было налажать с путями на другие файлы из css. Очень тяжко было добалять либы с css.

webpack решает эту проблему убирая это различие между js-м с модулями и другими ассетами. CSS это такая же зависимость проекта как и js.

Шрифты, картинки, все что угодно - это зависимости и их можно require так же как javascript. Нет больше независимого списка файлов.

Дальше больше - url внутри css-a это такой же require. Можно не думать о том что ты перепутаешь путь в сервере.

В собранном css-е будет ссылка на (возможно захешированный) файл с картинкой или шрифтом. Просто отдавай весь build folder и будет счастье.

Темплейты - такие же зависимости. Просто requirе и пользуйся. Никаких магических путей в твоем коде, никаких кривых поделок типа icanhaz.

Кстати такая модель с зависимостями отлично ложится на реакт. Один компонент, один css/less файл.

Oстальные плюшки webpack-а, типа hot reload, code splitting - вишенка на торте. Главное - возможность все выражать через зависимости.

RT <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как раз вчера хотел холивар начать webpack vs browserify)

RT <a href="https://twitter.com/volyihin" title="Дима Волыхин">@volyihin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А как вы взаимодействуете с дизайнерами и верстальщиками?

Всегда верстал сам, никогда не работал с верстальщиками. Дизайнеры присылают макеты в виде картинок или подобного. <a href="https://twitter.com/volyihin" title="Дима Волыхин">@volyihin</a>

RT <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть такой БЭМ стек с возможностью выражать все через зависимости. Его не поняли и за это не любили... А тут нао…

БЭМ пугал когда он вышел. Там была простыня текста в документации на не очень прямом английском про философию. <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

Но я не спорю что БЭМ (был?) крут и имел в себе кучу правильных идей. Я в БЭМ стиле CSS/LESS всегда пишу. <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

Что я имел ввиду - авторы БЭМ не смогли его продать. В том числе из-за сложной и не очень удобной документации, ИМХО. <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

И из-за того что это все было ориентированно на русское сообщество, а на западе об этом до сих пор не очень знают. <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

RT <a href="https://twitter.com/volyihin" title="Дима Волыхин">@volyihin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> то есть ты можешь и <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и <a href="https://twitter.com/cssunderhood" title="Верстальщик">@cssunderhood</a> ))

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a> БЕГИ

Это больная тема и священная корова? <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

RT <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> оооо ща набегут боты на ключевые слова <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

RT <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но для тех кто понял он вполне себе работает

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a> просто больная

Люблю запах флейма по утрам :) <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

RT <a href="https://twitter.com/bem_xxx" title="БЭМ">@bem_xxx</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a> Пока просто лайкну. Отвечу потом.

Иногда мне кажется что аудитория jsunderhood на 90% состоит из бывших сотрудников яндекса и соответственно бывших БЭМ разработчиков.

Яндекс это как Нокия у вас? Если не работал на прямую, то как минимум заляпался через консалтинг?

У нас до развала Нокии половина IT индустрии на нее работало. Очень рад что она сдохла, народ хоть делать что-то начал свое.

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> очень смешно :-)

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: В Гугле работать - это наверное как в Макдаке? Сначала хозяюшкой на устраиваешься, потом через 3 повышения уже стажёр-разраб…

Почти так, только остаешься хозяюшкой всю карьеру, если тебя не зовут Гуйдо ван Россум или Роб Пайк :) <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а я вот не умею красиво верстать( есть какие то мануалы для тех кто уже знает что-то о CSS но в кучу собрать …

Сейчас удивительное время, когда верстать уже не так страшно как раньше, особенно если без ИЕ9. Научись flexbox и лепи) <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в точку. я уже забыл когда о чём-то таком всерьёз парился. чё-то там про flexbox ляп сюда, ляп туда, и лайаут г…

RT <a href="https://twitter.com/andexds" title="Андрей Анашкин">@andexds</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a> Дада, без flex уже не жизнь.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> щас ещё дополнительно набегут те, кто обижается на реальность "верстальщики уже почти не нужны".

Про это я вчера уже нафлеймил) <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a>: <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не ну пол беды layout, а что бы ну прям full stack. там дали диз, ты такой оп и все красиво)или fl…

Внезапно это панацея для 99% того что раньше было сложно и хачно. <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

То есть конечно есть другие вещи которые надо знать как делать. Но стало в миллионы раз проще. <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

Мне уже не снятся кошмары про двойной padding и zoom:1 <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a> "хачно" – 99% крутоты бывших CSS ниндзей и прочих джедаев.

ИМХО сейчас в стилях сейчас важнее сделать все модульно и чтобы поддерживать просто было. А с этим программисты обычно лучше справляются.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> сейчас забавная ситуация, когда верстальщиками стали вчерашние дизайнеры, а разработчиками вчерашние верстальщи…

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но остались ещё потерянные "верстальщики", которые реально и ни туда, и ни сюда. и пишут в блоги про то, как по…

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Чем ты дебажишь NodeJS приложения?

Я консервативен, я все дебажу console.log :( <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

В теории надо научится дебагерам, но пока не было проблемы которую не найти хорошим добрым логом. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А чем можно нормально дебажить ES2015-приложения на Node.js? Сумел настроить Webstorm, но всё равно не…

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Попробуй WebStorm :—) Он офигенно крут в работе с Node.js.

Не люблю IDE. Я даже с емакса еле перебрался на atom. <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Мой процесс: билдю код в ES5 с Babel в отдельную папку, добавляю соурсмапы, ставлю точки останова в сб…

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> И запускаю на отладку. Когда срабатывает точка в сбилденном коде, вебшторм показывает исходный.

RT <a href="https://twitter.com/11bit" title="inky">@11bit</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а jspm как альтернативу веб паку никто не пробовал?

Он другие assets кроме js умеет? Не могу найти с первого просмотра. <a href="https://twitter.com/11bit" title="inky">@11bit</a>

RT <a href="https://twitter.com/from_anywhere" title="Иван Метелёв">@from_anywhere</a>: А потом удивляются, откуда у них reflow ползет
<a href="https://t.co/l3ab3ZSuXp">twitter.com/jsunderhood/st…</a>

Это смотря как сделать. <a href="https://twitter.com/from_anywhere" title="Иван Метелёв">@from_anywhere</a>

RT <a href="https://twitter.com/lane_en" title="eden lane">@lane_en</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а как же <a href="https://t.co/Mh0IOjNzX0">github.com/node-inspector…</a> и аналоги ? Я им пользовался ровно один раз, но он мне здорово помог

RT <a href="https://twitter.com/11bit" title="inky">@11bit</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да, умеет цсс, шрифты и тд. Если что то не хватает, можно плагинчик дописать

RT <a href="https://twitter.com/smashercosmo" title="Vladislav Shkodin">@smashercosmo</a>: <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Вот только адски глючит, если дебажить код, пропущенный через babel/register, в отличие …

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: С емакса на атом? Но зачем? <a href="https://t.co/SLe71uUmJA">twitter.com/jsunderhood/st…</a>

Захотелось перейти, надоело чинить емакс постоянно. Еще линтер очень удобный в атоме. <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот уж загадка, Atom как-то вообще поделие непонятное. Тормозит адово, каких-то иконок-спецэффектов навертели, луч…

Зато допиливается через js и css за секунду. <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> толку, если он на проекте среднего размера загибается

Да ладно, у меня норм. У меня правда куча всего убрано, типа табов и treeview. <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>

Емакс кстати тоже не летает, если не считать вылетов в систему. <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>

RT <a href="https://twitter.com/rainrb" title="rainrb">@rainrb</a>: <a href="https://twitter.com/slonoed" title="Dmitry M.">@slonoed</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> месяц назад пробовал с ним снова поиграться — не завелось. Тормозит сильнее рубимайна.

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: На этой неделе самый чёткий <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> именно по мировозрению, адназначна!

RT <a href="https://twitter.com/medvezhopok" title="Andrew Koltsov">@medvezhopok</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а чем atom лучше sublime text?

Больше старается быть умным редактором для программирования, а не просто текстовым редактором. <a href="https://twitter.com/medvezhopok" title="Andrew Koltsov">@medvezhopok</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/veged" title="Sergey Berezhnoy">@veged</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я вроде спрашивала пару месяцев назад и его не было. Можно ссылку?

Мифические инструменты для зависимостей :) <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/veged" title="Sergey Berezhnoy">@veged</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/voischev" title="Ваня Воищев">@voischev</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это адово тупиковый спор, ведущий только в обречённость некоторых технологий. уводи тему куда-нибудь :)

Ты про так и не разгоревшийся диалог про БЕМ? <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

JSON все-таки убогий формат, жаль что мы так широко его используем.

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А yml?

Я скорее что хотелось бы формат со схемой, который бы стал массовым. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

Как-бы ты не сериализовал, рано или поздно нужна будет схема, даже для сериализации. Почему бы не начать с формата в котором она есть?

Появился у тебя datetime в json, сразу у тебя кастамный код на клиенте и на сервере чтобы правильно его (де)сериализовать.

RT <a href="https://twitter.com/dpolyakov" title="Dmitry Polyakov">@dpolyakov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> альтернативы?

Не знаю, менять профессию :) Слишком наш js мир завязан на json чтобы что-то нормально поменять. <a href="https://twitter.com/dpolyakov" title="Dmitry Polyakov">@dpolyakov</a>

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/dpolyakov" title="Dmitry Polyakov">@dpolyakov</a> transit крутая штука <a href="https://t.co/b5IVRaCiaA">github.com/cognitect/tran…</a>

Вот кстати да, transit норм, хоть и schema-less. <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/dpolyakov" title="Dmitry Polyakov">@dpolyakov</a>

В JSON многих подкупает что типа сериализации without any effort. Вообще это неправда, любая сериализация требует обработки твоих данных.

Если ты просто делаешь JSON.stringify на свои объекты, ты не сериализируешь, а блюешь своими данными наружу.

Это особенно заметная проблема в js или например в питоне, в Java или Haskell (де)сериализация обычно domain-specific.

RT <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/dpolyakov" title="Dmitry Polyakov">@dpolyakov</a> кастомные сериализаторы/десериализаторы – вещь! <a href="https://t.co/EOIoEcgSqx">github.com/cognitect/tran…</a>

Как научится хорошо делать code review? Мне повезло с коллегами, на всех прошлых работах с code review были такие, кто это делал круто.

Наверно надо быть садистом с OCD, чтобы это делать правильно. Но это реально работает. Переодически очень бесит, но код реально лучше.

У меня вот редко получается так тщательно делать code review, больно добрый может.

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> для начала настроить линтеры, чтобы не делать их работу и проверять уже код, а не код-стайл

Ну линтеры конечно у нас настроены и это очень помогает. <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/from_anywhere" title="Иван Метелёв">@from_anywhere</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> часто ревьюиться самому, ревьюиться перекрестно

RT <a href="https://twitter.com/naorunaoru" title="рома">@naorunaoru</a>: <a href="https://twitter.com/from_anywhere" title="Иван Метелёв">@from_anywhere</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> перекрестный code review: <a href="http://t.co/rqRC5qLtsf">mgoblog.com/sites/mgoblog.…</a>

RT <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а кто мешает на объекте объявить toJSON метод? или я не правильно понял

toJSON окей, а как from? <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a>

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> смотреть не на код, а на логику. “Здесь ты делаешь лишнюю работу” “А ты учел то-то?” “а у нас есть такой-то AP…

Тут много кто ответил про JSON. Я не говорю что нет решений, я говорю что надо делать решение. Схема, кастамная десереиализация.

Просто json не решает этой задачи. Надо писать свою сериатлизацию на основе json, json просто так это не решит.

RT <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> так всегда придется же, если ты хочешь скрыть какие то поля или раскрыть только какието поля, ну

В этом и поинт, стоит ли городить такое решение или просто перейти на транспорт со схемой? <a href="https://twitter.com/sevaisnotcow" title="wwwsevolod">@sevaisnotcow</a>

RT <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>: Думается мне, что <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> агитирует за JSON+Схема+Транспорт только для того, чтобы потом заявить, что и это решение говн…

## Пятница <small>207 твитов</small>

RT <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>: Давайте поговорим о дискриминации. <a href="http://t.co/reJypOKSfj">m.geektimes.ru/post/259762/</a> Знаете красивых девушек программистов?

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Да. Только большинство во фронте. Бэк так жесток, что не каждая девушка выдержит его.

Фронтендеры, эти смешные бакендеры считают свою профессию сложнее :D <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

Кстати такие заявления и есть дискриминация. "Фронтенд простой, это женское дело, настоящие мужики пилят бэк." <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Мой вопрос почему-то игнорируют. Но реально же в Европе девушек-фронтендеров мало, а бекендеры есть <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

RT <a href="https://twitter.com/markbaraban" title="Mark">@markbaraban</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> Яков Файн утверждал что бэк может каждый,  а красивый фронт в эру балованых юзеров …

Вообще я такого не замечал. Хотя бы тут знаю примерно поровну фронт и бэк. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

RT <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> некоторые компании думают, что место женщины — под столом <a href="http://t.co/ObxspcSeYb">pic.twitter.com/ObxspcSeYb</a>

"В индустрии нет сексизма! Женщины сами уходят потому что им неитересно!" <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

RT <a href="https://twitter.com/ilavriv" title="ilavriv">@ilavriv</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> співбесідував веб девів для однієї компанії у львові , рекрутер попереджала, що їхні деви не дуже добрі…

RT <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a>: <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я наивна или такой рекрутинг должен был как минимум вызвать некий резонанс? гугл ничего на …

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Это русскоязычная реклама. Я не думаю, что они 100% вызывают резонанс.

Было бы на западе - вызвало бы. В России сексизм и вообще -изм это норма. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

RT <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a>: <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Варя, но это же пиздец! У нас бы их уже линчевали в прессе

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/olyapka" title="olyapka">@olyapka</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Шок? На моей 1й работе у начальника на столе был вибратор, который угрожалось "при…

WTF. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/olyapka" title="olyapka">@olyapka</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/olyapka" title="olyapka">@olyapka</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> Серьёзно! Это был сайт Photofile.ru Это была 1я работа, я думала что везде так и ч…

Тоооооолсто :) <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/cssunderhood" title="Верстальщик">@cssunderhood</a>

С такими историями в русском IT, я не удивлен что местные порывы боротся с неявным сексизмом вызывают удивление. Явный бы побороть %)

RT <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>: <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это норма. на фб больше 100 расшариваний и НИКТО не обратил на это внимания <a href="https://t.co/WA6nz8GD2R">facebook.com/photo.php?fbid…</a>

Да какое побороть - признать что есть проблема, хотя бы.

RT <a href="https://twitter.com/nimnull" title="Yehor Nazarkin">@nimnull</a>: <a href="https://twitter.com/ilavriv" title="ilavriv">@ilavriv</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> в былые времена у меня работали 3 девушки программиста (Бэк, фронт, фуллстек) все было супер

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Ну не стоит всё загонять под одну гребёнку. Это же Авиасейлз: их кредо — эпатаж <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

Это не оправдание. Не вижу массового осуждения, наоборот как будто "хорошая шутка". <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> между эпатажем и обычным мудачеством очень тонкая грань и они её н…

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> Так о том и речь: они пошлют. А хотелось бы, чтобы их все послали.

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Ну достаточно публично отказаться от их продуктов. Я никогда их сервисом не пользовался. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a>a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

Ты молодец, а мне в ответы шлют что проблемы нет. <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

RT <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a>: Какой же занудный на этой неделе <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>. Прямо на зубах скрипит.

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> классно шутка зацепила :) Был как-то на перловой конфе - 2 девушки. Был на фронтовой: ~40%.

Тут вопрос в чем причина - в том что девушки не любят бэканд или конференции полные бэкандеров :) <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a>

RT <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>: <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> а по-моему один из лучших so far <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a>: <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Эта отвратительная тема гендерной дифференциации разработчиков, этот флейм не по делу — фу.

Я говорю о том что мне интересно. Технические топики были всю неделю, пора поговорить о не-технической части. <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

RT <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a>: <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Потому что в профессии важны профессиональные качества, а не гендерные.

А кто тут говорит обратное? Проблема именно в том что наличия яиц в индустрии бывает важнее проф качеств. <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> гендерную политику компании определяет руководитель, а не разработчики, тут индустрия ни при чем  <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a><a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

Разработчики могут голосовать ногами. Мы таки не на заводах работаем чтобы выбора не было. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

Я бы не пошел в компанию с такими руководителями. Если человек сексист то он 90% и в остальном говно. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> где вы видели, чтобы люди уходили с работы, только потому, что рядом работает человек другого пола? <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a>a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

Я имею ввиду обратную ситуацию. Не идит работать в <a href="https://twitter.com/aviasales" title="Aviasales.ru">@aviasales</a> и подобные гадюшники. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/backendsecret" title="Разработчик Бэкенда">@backendsecret</a> а также на днях случилось очень крутое, «Правила поведения на конференциях» были переведёны на русский http:<a href="http://t.co/cxMcTEKfB0">ru.confcodeofconduct.com</a>

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> насчет рекламы в <a href="https://twitter.com/aviasales" title="Aviasales.ru">@aviasales</a> думаю, что здесь стоит применить бритву Хенлона <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

Злого умысла нет, а damage is done. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/aviasales" title="Aviasales.ru">@aviasales</a> <a href="https://twitter.com/verkholantsev" title="billy shears">@verkholantsev</a> <a href="https://twitter.com/mistadikay" title="Denis Koltsov">@mistadikay</a>

В пятницу я таки порвал пуканы. Даже наезды на Яндекс и БЭМ не вызвали такой реакции. Надо к вечеру еще за геев выступить, для закрепления.

Чтобы люди поумнели? <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/aviasales" title="Aviasales.ru">@aviasales</a>

RT <a href="https://twitter.com/veged" title="Sergey Berezhnoy">@veged</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ДАЖЕ, Карл!

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> поверьте русскому человеку — у нас в крови не признавать ошибки, упереться рогом и доказывать свою правоту <a href="https://twitter.com/aviasales" title="Aviasales.ru">@aviasales</a>

Да у всех это в крови. Это не значит что надо молчать и не указывать на ошибки) <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/aviasales" title="Aviasales.ru">@aviasales</a>

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> когда коту делать нехера, он яйца вылизывает. Когда разработчик неумен, он о надуманном "сексизме" вещает …

RT <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>: Бугага. Читайте <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>. Политика, сексизм и геи. "Все, что вы хотели знать о мире frontend"

Delicious ad hominem. <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> соглашусь. <a href="https://twitter.com/aviasales" title="Aviasales.ru">@aviasales</a> вы не правы.

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> любой, поющий про сексизм может сходить в ЛЮБУЮ картинную галерею и найти хотя бы 10 художников-женщин. Об…

Самое лучшее выходит из людей. Все женщины в роддом. <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> нет там сексизма, вы чего, в Таиланде местные шлюхи сами такое предлагают за 50…

Sexism 0.0 <a href="http://t.co/41Q9rNduBY">imfdb.org/images/thumb/b…</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: Буду теперь на сайте <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> почитывать эту неделю, когда накатит настроение "А не вернуться ли в Россию?"

RT <a href="https://twitter.com/lambdadmitry" title="Ополченец Назир">@lambdadmitry</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/tishkova" title="Maria Tishkova">@tishkova</a> <a href="https://twitter.com/skygrach" title="Семён Грачёв">@skygrach</a> мудаки шлют. Спасибо за поднятую тему.

RT <a href="https://twitter.com/lambdadmitry" title="Ополченец Назир">@lambdadmitry</a>: <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> бггг, кажется, тут кто-то не различает корреляцию и причинность. А ещё там нет картин африка…

RT <a href="https://twitter.com/lambdadmitry" title="Ополченец Назир">@lambdadmitry</a>: <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> …наверное, потому, что эти чёртовы чёрные все тупые, да? Или всё-таки есть какие-то социальн…

RT <a href="https://twitter.com/lambdadmitry" title="Ополченец Назир">@lambdadmitry</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот ещё норм тема для вброса, ящетаю <a href="https://t.co/h3fsxov2fF">twitter.com/lambdadmitry/s…</a>

И правда, давайте переведем тему. <a href="https://twitter.com/lambdadmitry" title="Ополченец Назир">@lambdadmitry</a>

RT <a href="https://twitter.com/SelenIT2" title="SelenIT">@SelenIT2</a>: <a href="https://twitter.com/lambdadmitry" title="Ополченец Назир">@lambdadmitry</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а в чем именно?

Стараются удерживать рост зарплат. Самый простой способ получить больше денег - уйти на другую работу. <a href="https://twitter.com/SelenIT2" title="SelenIT">@SelenIT2</a> <a href="https://twitter.com/lambdadmitry" title="Ополченец Назир">@lambdadmitry</a>

Вообще про зп, большая проблема что они сильно зависят от того как хорошо человек выбивает себе зарплату на интервью.

Поэтому я за четкие формулы по которым высчитывают эти зарплаты и за то чтобы все зарплаты в фирме были публичными.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это связано с тем, что большинство разработчиков - интроверты и им мирские радости не очень интересны )

Это не повод этим пользоватся для экономии) В итоге все разузнают зп друг и друга и будет грустно. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Статья про формулы для зп
<a href="https://t.co/UsOaKb7AIl">open.bufferapp.com/introducing-op…</a>

Buffer вообще дальше идут, у них все публично даже наружу, не только внутри компании.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> никто и не говорит, что это хорошо. Просто в процессе участвуют 2 стороны и надо учитывать их особенности )

Ну со стороны нанимателя там будет какой-нибудь CEO или HR, у них преимущество над интровертным программистом.<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не знаю, мне никогда не было особо интересно, кто сколько получает. Мне достаточно средней цифры.

Тебе будет приятно узнать, что твой коллега с такой же должностью и опытом получает сильно больше тебя? <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Может казатся что я борюсь за права программиста, но at the end начальству выгодно чтобы люди были счастливы и не уходили из компании.

В долгой перспективе наябывать своих сотрудников вредно для компании. Прозрачность - один из способов не наябывать сотрудников.

Причем я не говорю что начальство *хочет* наебать программистов. Начальство может просто не понимать, что оно делает чтото плохое.

Я был в двух VC-backed стартапах, в обоих начальство вызывало своими действиями много фрустрации у сотрудников. Всё с лучшими побуждениями.

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> я работаю у вас уже год, отлично справляюсь, профессионально росту, считаю что достоин большей зарплаты <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Для многих это большой стресс, по разным причинам. Когда все изначально честно - все намного проще. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> спорный тезис. есть долгоживущие конторы, которые живут на дешевых уходящих студентах. есть начальники, боящиеся п…

Наверно всё это скорее о стартапах, чем о любой компании. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что такое «честно»? ))  <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Прозрачно, по формуле которую все знают и с которой все согласно. Без сделок за спиной. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> в стартапах нужно давать опцион

Вот меня (и коллег) дважды с ним практически наебали. Отлично мотивирует. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> и как рассчитать формулу? По количеству коммитов за единицу времени? Это уже проходили в Индии ))) <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> @<a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Смотри пример в статье раньше в истории. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

То есть с опционами такая же проблема как с зп. Должно быть честно и прозрачно. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/roman01la" title="Roman Liutikov">@roman01la</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> самое крутое нанимать людей на больше денег чем ты получаешь

RT <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> все равно тут тоже играет не всегда объективный человеческий фактор <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Конечно. Но лучше убрать его хотя бы на какую то часть, чем 100% рассчитывать на него. <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Должно ли выражаться в зарплате культурное совпадение? То есть банальное "более приятный человек". На бизнес эт…

Культурное совпадение это вообще хорошая тема. Что лучше, компания похожих друзей или лучше разные люди? <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

Считаем что все профи и не настолько различные чтобы постоянно сраться. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> короче, я считаю, что зарплата должна быть достаточной, чтобы разработчик о ней не думал.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Все равно ситуация со временем будет меняться, тут формулы не выведешь, только индивидуальный подход.

Я и не говорил что это просто. Это сложно и об этом надо думать а не давать это на откуп в hr. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Для стартапов это ИМХО важно. Там нужна мотивация для того чтобы все навалились и быстренько сделали.

Некоторые говорят что diversity типа не даёт стартапу застрять на одних идеях. <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> я работал в компании, где у всех разработчиков одного грейда плюс-минус одинаково. Это плохо …

Почему? <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> она еще и была низкая, а если хочешь больше - повышай грейд, что невозможно не поработав пару…

Проблема тут что она была низкая  а не одинаковая. <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> и таки да, если у вас будет супер-пупер формула, она будет всячески убивать креатив

Ну это какой-то очень притяннутый вывод. Формула для зп убивает креативность? <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> именно, потому что все будут дро**ть на эту формулу, вместо того, чтобы создавать добавочную …

Ты слишком плохо думаешь о людях :) Наоборот не будут грузится что зп меньше коллеги. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это хорошая практика, но её внедрение даже на старте существования компании требует определённых усилий со сторо…

Конечно. Но помоему оно стоит того. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а перевести на такие рельсы компанию с большим количеством работников и длинной историей может оказаться непосил…

Да, о таком надо думать заранее. Многие основатели компаний вообще не думают о таких вещах и потом начинаются проблемы. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> если сразу об этом задуматься и нанять толкового HR, который всю эту схему сможет разработать, а она чертовски н…

И разработать это только одна часть, оценивать людей по этой формуле ещё сложнее. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

RT <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>: <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> в России опционы напрямую запрещены ТК, а судиться в Делавере и британских юрисдикциях не каждый де…

Очень интересно. Почему запрещены? <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот оценка, в этом контексте, мне видится наиболее сложной частью. потому что открыть зарплаты дело-то нехитрое

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> то есть система оценки должна быть при этом относительно простой, чтобы люди её понимали и в ней не было бы тёмн…

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Потому что нет регулирующих эти понятия законов. По сути понятие опционов просто не работает в России. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Ну нет понятия это разве нелегально? <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ну, ОК, мы неверно выразились. Это не нелегально, а не работает и в суд с договором не пойдешь. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> И по большей степени все обещания опционов, даже документально подтвержденные — это вопрос доверия. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Имхо все что связано с деньгами должно быть на бумаге. <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> РВК и ФРИИ рассказывали, непрямую слова опционы нет, но попадает под то, как платить работникам ТК …

В Финл опционы это не оплата пока ты их не реализовал. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Реализовал в смысле выкупил, а не vest. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Опцион — это не деньги, а обещание возможности покупки. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Это вознаграждение. <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Опционы и акции с вестингом — суть разные вещи. <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Я знаю, говорим про опционы. stock options <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a> <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/Seleckis" title="Seleckis">@Seleckis</a> <a href="https://twitter.com/PaulColomiets" title="PaulColomiets">@PaulColomiets</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> или когда оборот у компании 1,5 млрд, а зарплатный фонд 50 млн на 1К сотрудник…

Кстати про stock options, по-моему многие переоценивают их и соглашаются на слишком большое понижение зп.

At the end, это лотерея и тебе просто дается возможность в будущем купить лотерейный билет. Даже не сам билет, просто возможность, Карл!

А при покупке этого билета за тобой еще и налоговая придет, кстати.

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вот мне это всегда казалось больше инструментом привязать работника к компании, чем каким-то поощрением.

Да, конечно. Я про то что обладатели оных придает им слишком большую цену, неоправданно большую. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну всем хочется верить, что выстрелит и что всё не напрасно)

Sunk costs fallacy и все такое :) <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

Мне теперь немного стыдно, что я разжег такой срач про сексизм. Это важная тема и я рад что поднял ее, но троллить стоило меньше.

Поговорим про менеджеров. Я нахожу модель которая (была?) в Гитхабе и есть в Valve очень привлекательной, то есть когда менеджеров нет.

Гитхаб - <a href="http://t.co/nSO2QEycHE">zachholman.com/posts/how-gith…</a>

Valve
<a href="http://t.co/XJ8YMxynJ2">valvesoftware.com/company/Valve_…</a>

Идея в том что если вы набрали себе команду талантливых, амбициозных и мотивированных людей, то ставить над ними менеджера контрпродуктивно.

Даже цель им можно не ставить - они талантливые, амбиционзные и мотивированные, они  придумают что надо сделать чтобы компании стало лучше.

Кто-то говорит что программисты аутисты для которых нужен переводчик, чтобы они поняли что клиентам надо.

По-моему проблема именно в том, что программисты не могут нормально общатся с клиентов или кастомером из-за менеджера.

RT <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> цель разговора с клиентом не нормально поговорить, а продать услугу. :)

Считай что продажа уже была совешенна и надо сделать клиенту хорошо. <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

Особенно хорошо такая модель работает в компаниях которые делают продукты, а не в консалтинге, конечно. Поэтому гитхаб и валв так хороши.

RT <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> с другой стороны, клиент деньги отдает за конечный продукт и только тогда процесс купли-продажи считается …

Ну это если продукт в коробке. Хорошие консультанты после заключения контракта стараются понять что клиенту надо. <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

RT <a href="https://twitter.com/al_yolkin" title="Herr Elkin">@al_yolkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> если клиенту дать прямой доступ к программеру, то программер толькл на него и будет работать, а убытки на вас л…

Билишь по часам и все ок. :) @al_yolkin

RT @al_yolkin: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> обячно оплата оговаривается заранее, поэтому не получится так

В Финл почти всегда консалтинг по часам/дням/неделям. <a href="https://twitter.com/al_yolkin" title="Herr Elkin">@al_yolkin</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> если над проектом работает больше одного человека, кто-то один должен поговорить с клиентом и объяснить остальны…

Или все могут поговорить с клиентом и реально понять что надо. А то будет сломанный телефон и проваленный проект :) <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

Мы уходим от темы, зря я сюда конслатинг добавил. Компании с продуктами намного интереснее, тк они продают продукт а не продаются клиенту.

Конслатинг, оговорка по фройду. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> по сути менеджер должен выяснить бизнес-цели клиента и превратить их в конкретные задачи для разработчиков.

Мне кажется менеджер всегда либо поймет либо передаст неправильно. Ну или хотя бы шанс этого выше. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

RT <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> маркетинговые исследования ведутся параллельно с разработкой продуктов и каждый клиент для них - статистич…

RT <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тут Valve например не очень хороший пример компании без менеджеров, потому что они работают с конкретной а…

Что мешает другим компания вести исследования и знать свою клиентскую базу? <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a> так все все знают, но не считают важным, доносить до тех, кто непосредственно занимается продуктом.

Ну вот от этого же мы и can't have nice things. Опять отсутствие прозрачности. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

Опять же оба стартапа развалились из-за того что до тех команды не то доносили что надо кастомерам. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a> "оба стартапа" - это какие?

Вообще оба живые, но ИМХО потенциала не достигли. <a href="http://t.co/UbXyz3ijRv">hdmessaging.com</a> <a href="http://t.co/xDuPeVfOli">zenrobotics.com</a> <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

ZR еще может и достигнет, HDm продан бездушной корпорации ) <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> под целью, я имею ввиду именно “бизнес-цель”. Она должна держаться у всех в голове, а не методы достижения

Вот да, каждый в компании должен понимать что и зачем они делают как компания. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>

Большая дискуссия про ТЗ в ответах. Ни разу не видел ТЗ который бы не устаревал дольше чем за неделю разработки.

RT <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> проблема подобных проектов в том, что аудитория слишком широкая, настолько, что достигает пределов …

Нет проектов для всех, это эго говорит когда продукт для всех :) <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

У всего должен быть target audience. <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это какие-то неправильные менеджеры и они делают неправильные ТЗ

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>  это просто глупо, хотя бы потому что так менеджер делает больше (ненужной) работы и несёт больше ответст…

Ну глупо, но происходит же такое постоянно. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Это тебе похоже очень везло с менеджерами) <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Еще я очень не люблю митинги. 99% митингов имеют слишком много участников, лог в них ведется лажово и говорит в них один человек.

А не работают при них все участники. Надо старатся быть асинхронным и не думать что твоя проблема такая сложная что ее не решить имейлом.

Зато в больших корпорация митинги позволяют бесполезному народу чувствовать себя полезным. Весь день занят на митингах, значит нужен.

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Ага, у нас как-то была проблема с перенасыщением митингами. Ну и что - провели митинг об оптимизации митингов :…

Вот вроде dilbert-esque ситуация, но как-то скорее грустно, чем смешно, тк это реальность ) <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>

RT <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> рассуждениям о корпоративных культурах можно было бы выделить отдельный день.

Я и собирался, срач про сексизм был спонтанным. <a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как и гуманность. В большинстве крупных компаний построена система, в которой не выгодно быть инициативным

RT <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ну мне кажется, в таких менеджерских проблемах больше глупости, чем какого-то злого умысла

Но это же не делает проблему которую они создают меньше. <a href="https://twitter.com/Sigiller" title="S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler">@Sigiller</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/twokul" title="Alex Navasardyan">@twokul</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мы начали с no-meetings-Wednesdays, а потом это распространилось на каждый день. часто все вопросы через чат решаю…

Несмотря на всю дикую активность в твиттере, неделя выдалась очень продуктивной. Надо наверно начать тоже активно вести :)

Надеюсь вам я тоже поднял продуктивность, а не убил её :)

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> вечер пятницы, а ты уже больше всех наотвечал и стремишься взять ачивку «больше всего написал» =) https://t.co<a href="https://t.co/NmJm8oXNmI">jsunderhood.ru/stats/</a>

Рекорды <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> мне не побить :) <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> мне пришлось замьютить на час <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>, слишком много :)

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> их легко побить - я там на выходные пропал из-за конфы. Плюс энгейджмент сильнее сейчас, тк аудито…

Но по ретвитам у тебя больше engagement, мне больше отвечают. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> неужели даже взорванные пуканы не помогли?)))

Старею, слишком быстро остыл и стало стыдно :) <a href="https://twitter.com/ZhivotvorevNik" title="Животворев Николай">@ZhivotvorevNik</a> <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>

RT <a href="https://twitter.com/Spellful" title="Соколов Виталий">@Spellful</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> правда, есть проблема. Программист не выдержит понтов клиента и выругаться на него, тогда клиент канет в лету с …

Опять программисты аутисты у вас :) Почему менеджер выдержит а программист нет? <a href="https://twitter.com/Spellful" title="Соколов Виталий">@Spellful</a>

RT <a href="https://twitter.com/likhter" title="Konstantin Likhter">@likhter</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/Spellful" title="Соколов Виталий">@Spellful</a> потому же, почему программист пишет код, а менеджер нет

Я считаю в консалтинге программист должен уметь работать с клиентами. В продукт компании он должен уметь их понимать. <a href="https://twitter.com/likhter" title="Konstantin Likhter">@likhter</a> <a href="https://twitter.com/Spellful" title="Соколов Виталий">@Spellful</a>

В просто коде нет никакой ценности, он должен решать задачу. Чтобы понять задачу надо уметь общаться с люди. <a href="https://twitter.com/likhter" title="Konstantin Likhter">@likhter</a> <a href="https://twitter.com/Spellful" title="Соколов Виталий">@Spellful</a>

RT <a href="https://twitter.com/likhter" title="Konstantin Likhter">@likhter</a>: Всё-таки <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> "прекрасен": как только человек до туда добирается, так становится единственным-человеком-с-правильным-м…

## Суббота <small>69 твитов</small>

Суббота, поговорим про опен сорс. Делает ли ваша компания опен сорс? Какое отношение начальства? Кидайте ссылки на oss вашей фирмы.

Друг работал в компании где полагалось во внерабочее время контрибьютить в их опен сорс проекты.

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> На всех работах было отрицательное. Но использование по полной.

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Именно обязывали? А почему не платили тогда?

Не обязывали, но типа через peer pressure. Все контрибьютят, а ты нет. Ты разве не любишь опен сорс? <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>

RT <a href="https://twitter.com/lunat1que" title="Stanislav K">@lunat1que</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> было три разных опыта:
- запрещали даже использование осс
- разрешали выкладывать наработки, без офиширования  …

RT <a href="https://twitter.com/lunat1que" title="Stanislav K">@lunat1que</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> 
- платили за контребьютерство в qt, но имена обскьюрили, выдавая нашу работу за кого-то другого

Последнее интересно, это как и зачем? <a href="https://twitter.com/lunat1que" title="Stanislav K">@lunat1que</a>

RT <a href="https://twitter.com/dimchez" title="Dmitry Demyankov">@dimchez</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> стараемся начать выкладывать либы на GH аккаунт компании. Но наверное не столько ради опен сорса, а как часть бре…

RT <a href="https://twitter.com/lunat1que" title="Stanislav K">@lunat1que</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мы работали на nokia, но не имели права об этом заявлять публично. И часто работали с новыми дистрибами qt.

RT <a href="https://twitter.com/lunat1que" title="Stanislav K">@lunat1que</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> qt поддерживается Nokia, нас мотивировали вносить фиксы, но в приватный репозиторий. От туда они переносили это…

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a> неужели просто нельзя это по потребности делать? Ну типа пофиксили баг, сделали пул-реквест, чтобы патч не…

Там был консалтинг и они так репутацию крутых опен сорсеров поддерживали. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>

Бывало ли такое что опен сорсили что нибудь из клиентского проекта при консалтинге? Как к этому относились клиенты?

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в Яндексе хорошо поощралось. на текущей работе до этого дойдут ещё не скоро – пока просто нейтральное неведение.

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но судя по тенденциям, или запретят, или очень всё испортят. во многом тут какие-то варварские 90-е.

Тут как минимум одна компания доплачивает за работу над опен сорсом в свободное время. <a href="http://t.co/iRfpekqNHZ">futurice.com/blog/futurice-…</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а как при консалтинге можно что-то коммитить? Я, наверное, не правильно понимаю слово "консалтинг".

Пишешь проект для клиента, появляется какая-то полезная либа. Просишь клиента окей ли это опен сорснуть. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а кто-нибудь зарабатывает на своём опен сорсе? если да, то как? у меня был единичный опыт на ощутимую сумму, пр…

Тут недавно <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> собрал деньги чтобы продолжит делать open source.  Но он звезда комьюнити, сложно с нуля так же. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> консалтинг – консультирование, а ты пишешь про контрактную работу разрабом или атусорс.

На западе консалтингом любой аутсорс/контактную работу  называют. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/AntonShevchuk" title="Anton Shevchuk">@AntonShevchuk</a>: <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> donate за тему для WordPress перевалил за 1k, это за год примерно, так что если всерьёз взяться …

RT <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> Ага, вот: <a href="https://t.co/tUDyhY8Q0M">patreon.com/reactdx</a>. Но конечно нужен community momentum.

Кстати до <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> мое представление о русскоязычном js комьюнити основывалось на редком чтении хабры и я долго думал что он из США.

Тк я думал что в русском комьюнити из ценного только серьёзные бородатые дядьки которые пилят БЭМ.

Потом  <a href="https://twitter.com/dan_abramov" title="Dan Abramov">@dan_abramov</a> провел <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>, потом  <a href="https://twitter.com/andreypopp" title="Andrey Popp">@andreypopp</a>, потом <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> и все стало казаться намного менее грустным.

Так что спасибо <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> за развеянье мифов о js в России.

RT <a href="https://twitter.com/lazeez" title="Sam Faktorovich">@lazeez</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/redcat_nsk" title="Red Cat">@redcat_nsk</a> и еще есть конторы, которые премируют сотрудников, если те преподают айтишные дисциплины в университет…

Это частая практика? У нас в универах так просто не берут преподавать. <a href="https://twitter.com/lazeez" title="Sam Faktorovich">@lazeez</a> <a href="https://twitter.com/redcat_nsk" title="Red Cat">@redcat_nsk</a>

RT <a href="https://twitter.com/lazeez" title="Sam Faktorovich">@lazeez</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/redcat_nsk" title="Red Cat">@redcat_nsk</a> за все российские вузы не скажу, в Новосибирске пойти преподавать может практически каждый желающий

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/likhter" title="Konstantin Likhter">@likhter</a> но в этом же и есть самый кайф, разве нет? <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Поговорим о плюшках которые вам даёт работодатель помимо зарплаты и акций/опций. Есть ли у вас крутые плюшки, а какие вы бы хотели?

В Финляндии с этом есть некие проблемы, налоговая старается считать это доходом, все компании делают только то что налоговая ещё позволяет.

В это входит обычно оплата телефона и домашнего интернета, медицинская страховка (без стоматологии). Бесплатные обеды уже нельзя.

Правда покупать еду в офис можно, но так мало кто делает. Кстати про еду/колу/пиво в офисе, вы за или против?

Не является ли кейтеринг в офис тайным заговором чтобы все подольше сидели в офисе?

RT <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> для меня самое важное — возможность работать вне офиса, то есть постоянно путешествовать

Надо будет завтра про удаленную работу поговорить. <a href="https://twitter.com/andrey_sitnik" title="Андрей Ситник">@andrey_sitnik</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> +1 за пиво и еду, приближенную к здоровой.

Не плохо ли это, что люди после работы остаются ещё и пить на работе? <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>

Компании то точно хорошо :) Хорошо ли для человека не иметь жизни вне работы? Мне интересно это обсудить. <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a> <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>

RT <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> самая крутая плюшка помимо зп это свобода решений и право на ошибку.

RT <a href="https://twitter.com/TheSunwave" title="Arturio">@TheSunwave</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> хотелось бы чтобы хотя бы чай с печеньками был за счёт фирмы :(

А бывает что нет? <a href="https://twitter.com/TheSunwave" title="Arturio">@TheSunwave</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а вообще, чем больше времени люди проводят в казуальном общении, тем лучше.

Для компании - лучше, однозначно. Её уверен про самих людей. <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> +1, добавлю еще возможность экспериментировать и ad-hoc команды

Про это вчера обсуждали :) <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a> <a href="https://twitter.com/Borovikov" title="Денис Боровиков">@Borovikov</a>

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> не хочешь, не оставайся? Тебя ж не принуждают уничтожать халявное пиво :)

Ну вот я не останусь и получиться что я не в коллективе. Получается выдавливание непьющих или родителей. <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>

RT <a href="https://twitter.com/RReverser" title="Ingvar Stepanyan">@RReverser</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a> Мне везет с коллегами видимо - они важная часть моей жизни и вне работы тоже.

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> чем лучше ты знаешь человека, тем меньше ты будешь с ним ссорится. Какие тут минусы для человека?

RT <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>: <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> казуальное общение имеет тенденцию затягиваться заметно за пределы рабочего дня (а хочется дома играть …

RT <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a>: <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> группка, которая не пьёт пиво по какой-либо причинам воспринимается немного изгоями и в остальное время

RT <a href="https://twitter.com/mr_mig_by" title="Alexey Migutsky">@mr_mig_by</a>: <a href="https://twitter.com/mktoid" title="Oleg Cheremisin">@mktoid</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> такое нужно лечить в зародыше. Готового рецепта не дам.

Люди тут говорят что у них чай кофе и печенья не оплачиваются компанией.

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я абсолютно за. Мне важна забота обо мне, как будто мама мне холодильник набила и не надо беспокоиться, я так л…

Тебя это не мотивирует остаться на работе дольше, дома же самой надо холодильник набить? <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Будет выбор - выберу офис с едой, даже если в другом месте предложат в 5 раз перекрыть её стоимость :-)

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Дома всегда лучше, туда все равно хочется. Но на работе приятно забыть о быте. Даже о быте похода в магазин за …

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> В России бесплатные обеды тоже доход. Но поскольку у всех один % налога, это не проблема. Вычитают из з/п 13% с…

С плоским налогом все проще :) <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> когда в офисе начинают нсть и пить уже никто не работает, так что сомневаюсь

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> муз. комната осталась в симфере — по ней скучаю, возможность вечером поиграть в офисе это бесценно. Хоть ап…

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> 4х дневную рабочую неделю со свободным графиком и не более 8 рабочих часов в день.

RT <a href="https://twitter.com/deepwalker" title="Кривушин Михаил">@deepwalker</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а в чем проблема сразу сделать опенсорсную либу, и заюзать в проекте клиента?

Ни в чем. Просто часто ценные вещи в процессе работы появляются. <a href="https://twitter.com/deepwalker" title="Кривушин Михаил">@deepwalker</a>

## Воскресенье <small>99 твитов</small>

Наш последний день вместе и похоже я таки догоню <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> по общему количеству твиттов. Сегодня я хочу поговорить про удаленную работу.

Я очень за со всех точек зрения. Работодатель получает более мотивированных сотрудников и recruitment pool размером с мир, вместо города.

Работник получает возможность работать там где ему нравится, больше времени проводить с семьей и не парится по поводу похода в офис.

При этом это все требует правильной огранизации работы. Я видел как communication ломался, когда команды были не рядом.

Я видел как удаленные люди чувствовали себя не частью команды. Как до них менее быстро доносилась информация.

Как вы решаете эти проблемы с удаленными людьми? Что за инструменты можно использовать для этого?

Основатель basecamp написали хорошую книгу про удаленку. <a href="http://t.co/Ez7SQPWOBa">37signals.com/remote/</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> тема кстати, почти напрямую пересекается с open-source. Он как раз всецело про культуру удаленной работы

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а бывает наоборот, что слишком много общения и людей вокруг - мешает

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это когда культура не сложилась

Согласен. Обсуждение как именно сделать такую культуру чтобы remote работал. <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> нужно как минимум заставить всех решать все рабочие моменты и вести дискуссии исключительно через онлайн средства к…

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> даже если ты сидишь в офисе рядом с тем, у кого есть ответ

Это кстати еще и продуктивность повысит - меньше interruptions, больше кода.  <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

Про communication - в принципе я видел как он не работал даже когда команд(а/ы) были рядом, так что дело скорее в людях а не расстоянии.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть 2 варианта: или набирать людей-носителей такой культуры или развивать ее.

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> После того, как появится эта культура, новым людям уже будет некуда деваться, придется ее принимать.

Вот вы основатель компании. Как развивать в компании ту культуру которую вы хотите? Например, культура удаленной работы.

RT <a href="https://twitter.com/7rulnik" title="Valentin Semirulnik">@7rulnik</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я читал, как-то все очевидно. Я ожидал что-то в духе кулсторек, а там: если работаешь удалённо, то не надо куда-т…

Да, она скорее старается убедить тех кто еще не убежден, чем показать решения. Как книги о том как бросить курить. <a href="https://twitter.com/7rulnik" title="Valentin Semirulnik">@7rulnik</a>

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> инструменты не имеют большого значения. Шарить информацию: и техническуую и продуктовую задача руководителя…

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Показывать людям приёмы, при которых они могут сделать это рабочим?

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> сложный вопрос, пока компания маленькая это работает, потом этим сложно управлять эффективно, а потом наобо…

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в яндексе есть соц сеть для этого, сильно помогала распространению информации и заодно лучшее место для сра…

Как именно решали чем надо делиться а чем нет? <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>

Кстати опять мы упираемся в прозрачность. ИМХО в прозрачной компании, где вся информация шерится легче сделать удаленку. <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> еще если компания новая, то легко это заложить как фундамент, а если старая, где "деды воевали" ...

Я наверно больно задрачиваюсь на прозрачность, но мне кажется многие проблемы уходят если использовать ее по полной.

Плохие компании не доверяют своим сотрудникам и думают что сотрудники это шпионы, которые все выдадут врагу. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ... Где лучшие времена и решения придуманы в кухне за пивом, то такую компанию тяжело и даже вредно менять

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это может работать если изначально так было. в компании со сложной иерархией менеджеров и руководителей обычно …

Да! И по-моему многие бы хотели чтобы работало так, но поздно. Слишком мало основателей думает о том что за культуру они хотят. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

Это все время afterthought. По-моему это должно быть одно из первых о чем ты думаешь, когда основываешь компанию. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я вот спустя год до сих пор толком не понимаю кто мой руководитель, а кто его руководитель, а кто менеджер прое…

Чувствую в голосе нотки фруструции, похоже тебе работу пора менять. <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> многие основатели пропустили некоторые ступени на своем пути.

Ну мы прям совсем в философию уходим. :) <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у нас 3\4 удалённо, а 1\4 в офисе. Топ-менеджмент в офисе.

И как работает? Что по-твоему самое важное, что помогает этому работать? <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> ну вот fb же считается идеально начинался нет? А теперь это хрен пойми что.

В чем-то у них окей, хотя бы новые интересные технологии делают постоянно. <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> я собеседовался в fb и не прошёл на определённом этапе. мнение сложилось скажем так не ос…

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> по крайней мере от собеседований осталось впечатление хаотичности и несвязанности людей и…

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> может оно и начиналось как гиковый стартап, но со стороны показалось, что сейчас это боло…

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> пока не закрылись, контроль для удалённых работников больший нужен.

Пока не закрылись? И как именно этот контроль происходит? <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> можно узнать, сколько компаний вы основали и как именно действовали? Насколько они были успешны…

Я основал одну и был в двух стартапах, в одном из них был в первых 10 сотрудниках. <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

Я видел как стартапы лажали и хочу не повторить их ошибок. Отстутствие прозрачности оба раза было главной лажей. <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>

RT <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> в этом плане да, спорить сложно :) просто у меня было идеализированное представление о fb…

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> скайп\слака, jira, почта. Митинги минимум раз в неделю на каждый проект. Контроль выполнения задач. Кнуты и п…

RT <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> отсутствие прозрачности - возможно плохо со стороны работника, однако хорошо со стороны владельца бизнеса,…

Если это ведет к тому что сотрудники теряют всю мотивацию то это не выгодно владельцу. <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>

Так же может вести к плохому пониманию целей компании у сотрудников и в итоге выполнению не той работы. <a href="https://twitter.com/svenyurgensson" title="YuryBatenko">@svenyurgensson</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что значит прозрачность?

Информация о жизни компании всегда и полно доступна всем сотрудникам. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> у нас несколько работников уходило с обманом, некоторые даже имущество прихватывали.

Страсти какие. Ну с таким полиция должна разбиратся. Не могу представить ворующего программиста в Финл. <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Нет, ты правильно делаешь, что топишь за прозрачность. Прозрачность, инспекция, адаптация — столпы Скрама, например, <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Это ты меня прям изыскано опустил :)))) <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>

Это я к тому что Скрам для меня скорее ругательное слово, я ни разу не видел хороший Скрам. Хороший Скрам это как единорог. <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>

Но я не спорю что да, многие вещи которые я говорю можно назвать agile. Просто я очень хотел НЕ говорить это слово :) <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>

RT <a href="https://twitter.com/suxxes" title="Father Frodo">@suxxes</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> У нас Asana (полная лажа, но тяжело пока поменять), Skype и Slack. Skype для митингов, Slack для ежедневного общен…

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Хороший Скрам — это работающий Скрам. Если ты видел плохие примеры, это скорее говорит о реализации, а не о самом фреймв<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Вот многие мне так говорили, но я не поверю пока не попаду в работащий Скрам. <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: А зря! Есть Манифест Аджайла, есть Скрамгайд — в них написаны основы <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> +100500. Чертовы “эффективные менеджеры” давно приватизировали и извратили методологию )

RT <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> удивительно, как непрофессионалы, подкупающие бизнес своей лояльностью повсюду гадят (

Я не спорю. Просто за годы была так извращена сама идея agile, что сейчас это скорее способ биллить за час, чем методология. <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Никто вас не будет заставлять строить Скрам, если у вас всё работает. Мне же хочется предсказуемости, <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в работе удаленщика большую роль играет разница в часовых поясах. Если разница более 4х часов очень сложно взаим…

Когда у нас был HQ в США, а девы в Финляндии, была большая проблема когда последния инфа от клиента из Филлипин приходила долго. <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

Вообще good point. Как работать с сильно разными часовыми поясами? <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: О, сколько раз мне говорили, что у них Скрам, но по факту оказывалось, что это обычный водопад с итерациями! <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

У нас это называют жопа Скрама aka "scrum, but". <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/__fro" title="Alexey Frolov">@__fro</a>

RT <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> в тяжелых случаях спасают только командировки. А так, только планирование и грамотное разделение обязанностей.

Разделение обязанностей - как это делать? Организовывать по командам в часовых поясах? Или достаточно чтобы все знали что дальше? <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: У нас тестиривщица была в Канаде. Днём мы делали фичи, ночью она их тестировала. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

Вот веселье наверно было с ответами "can not reproduce". <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Таких отписок мы себе не позволяли, а QA подробно документировала баги — у нас был работающий Скрам :) <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> это был менеджер, исчез на 2 недели, а потом оказался в игровой компании.

В полицию сдали или так все отдал? <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Но всё равно было окно в пару часов, когда мы синхронизировались. Без этого совсем сложно <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

Вот и мне кажется что какой-нибудь overlap должен быть. Даже в oss, нам отсюда сложно работать с ФБ graphql девами.<a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: Да. Был ещё опыт с фронтендером в Беркли. Он ночью подключался к нашим утренним стендапам, <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/esergeev" title="Evgeniy Sergeev">@esergeev</a>

RT <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a>: И с 12 принципами гибкой разработки: <a href="http://t.co/7PmuAPn3pt">agilemanifesto.org/principles.html</a>. А в каком виде: Скрама, Лина, Канбана — вопрос менее важный<a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Раз уж мы начали про agile - идеи в Канбане мне нравятся больше чем идеи в Скраме. По-моему короткие итерации это стрессовово и тяжело.

К тому же они заставляют держать скоуп маленьким, что не всегда возможно. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Ограничением же паралеллизма канбан добивается таких хороших вещей, как более быстрые ревью/тесты, быстрый деплой и тд. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

Тк свой ревью/деплой не получишь пока не поможешь соседу. <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>

RT <a href="https://twitter.com/gruz0" title="Alexander Gruzov">@gruz0</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/deepsweet" title=" k i r">@deepsweet</a> мы вот это используем: sococo.ru уже полтора года.

RT <a href="https://twitter.com/lunat1que" title="Stanislav K">@lunat1que</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> over-communication is the key! использовать таск менеджер по максимуму, меньше пользоваться мэилом, меньше мити…

RT <a href="https://twitter.com/Timrael" title="Timur Kozmenko">@Timrael</a>: <a href="https://twitter.com/ilnurkhalilov" title="Ilnur Khalilov">@ilnurkhalilov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> внедрили скрам, отказались от него и за год, фича за фичой вернули его обратно. Поняли необходимос…

Вот и подошла к концу наша с вами неделя. Сделаю небольшой рекап.

В понедельник мы обсуждали GraphQL и как он заменит REST api.  Мы также обсудили попутные технологии типа Relay и React.

Во вторник я рассказал про мою нелюбовь к ангулару, в среду мы говорили про Финляндию и Webpack.

В четверг про grunt, gulp, npm scripts. В пятницу у нас был разговор про сексизм и про ведение бизнеса.

В субботу мы поговорили про бонусы в компании и менеджмент и наконец сегодня про удаленную работу и немного agile.

С вами был <a href="https://twitter.com/freiksenet" title="freiksenet">@freiksenet</a>. Спасибо за то что с вами было интересно спорить.

## Ссылки

### gist.github.com  
<a href="https://gist.github.com/freiksenet/f96e02ddee7a352448d3" target="_blank">https://gist.github.com/freiksenet/f96e02ddee7a352448d3</a>  
<a href="https://gist.github.com/freiksenet/4646c7216167fd139d5d" target="_blank">https://gist.github.com/freiksenet/4646c7216167fd139d5d</a>  
<a href="https://gist.github.com/freiksenet/d461fe8928c8ad33db89" target="_blank">https://gist.github.com/freiksenet/d461fe8928c8ad33db89</a>  
<a href="https://gist.github.com/freiksenet/773747a2812c9b66507b" target="_blank">https://gist.github.com/freiksenet/773747a2812c9b66507b</a>  
<a href="https://gist.github.com/playpauseandstop/55c060e8a343a9458391" target="_blank">https://gist.github.com/playpauseandstop/55c060e8a343a9458391</a>  
### github.com  
<a href="https://github.com/tc39/ecma262" target="_blank">https://github.com/tc39/ecma262</a>  
<a href="https://github.com/graphql/graphql-js" target="_blank">https://github.com/graphql/graphql-js</a>  
<a href="https://github.com/RisingStack/graffiti" target="_blank">https://github.com/RisingStack/graffiti</a>  
<a href="https://github.com/nordnet/nordnet-next-api/blob/master/.eslintrc#L2" target="_blank">https://github.com/nordnet/nordnet-next-api/blob/master/.eslintrc#L2</a>  
<a href="https://github.com/feross/standard" target="_blank">https://github.com/feross/standard</a>  
<a href="https://github.com/sindresorhus/xo" target="_blank">https://github.com/sindresorhus/xo</a>  
<a href="https://github.com/airbnb/javascript" target="_blank">https://github.com/airbnb/javascript</a>  
<a href="https://github.com/es-analysis" target="_blank">https://github.com/es-analysis</a>  
<a href="https://github.com/deepsweet/dba" target="_blank">https://github.com/deepsweet/dba</a>  
<a href="https://github.com/codemix/babel-plugin-typecheck" target="_blank">https://github.com/codemix/babel-plugin-typecheck</a>  
<a href="https://github.com/mistakster/grunt-svg2string" target="_blank">https://github.com/mistakster/grunt-svg2string</a>  
<a href="https://github.com/webpack/url-loader" target="_blank">https://github.com/webpack/url-loader</a>  
<a href="https://github.com/christianalfoni/formsy-react" target="_blank">https://github.com/christianalfoni/formsy-react</a>  
<a href="https://github.com/caspervonb/amok" target="_blank">https://github.com/caspervonb/amok</a>  
<a href="https://github.com/node-inspector/node-inspector" target="_blank">https://github.com/node-inspector/node-inspector</a>  
<a href="https://github.com/cognitect/transit-format" target="_blank">https://github.com/cognitect/transit-format</a>  
<a href="https://github.com/cognitect/transit-js" target="_blank">https://github.com/cognitect/transit-js</a>

### Другие

<a href="https://mobile.twitter.com/ryanflorence/status/627154904302288897" target="_blank">https://mobile.twitter.com/ryanflorence/status/627154904302288897</a>  
<a href="https://mobile.twitter.com/wycats/status/627719336426274816" target="_blank">https://mobile.twitter.com/wycats/status/627719336426274816</a>  
<a href="http://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html" target="_blank">http://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html</a>  
<a href="http://facebook.github.io/react/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html" target="_blank">http://facebook.github.io/react/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html</a>  
<a href="https://facebook.github.io/react/tips/dangerously-set-inner-html.html" target="_blank">https://facebook.github.io/react/tips/dangerously-set-inner-html.html</a>  
<a href="https://www.reindex.io/blog/how-facebooks-graphql-will-change-backend-development/" target="_blank">https://www.reindex.io/blog/how-facebooks-graphql-will-change-backend-development/</a>  
<a href="https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/" target="_blank">https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/</a>  
<a href="http://www.zenrobotics.com" target="_blank">http://www.zenrobotics.com</a>  
<a href="https://instagram.com/p/y413-exPyZ/" target="_blank">https://instagram.com/p/y413-exPyZ/</a>  
<a href="https://speakerdeck.com/laneyk/mutations-in-relay" target="_blank">https://speakerdeck.com/laneyk/mutations-in-relay</a>  
<a href="http://d3js.org/" target="_blank">http://d3js.org/</a>  
<a href="http://microservices.io/patterns/apigateway.html" target="_blank">http://microservices.io/patterns/apigateway.html</a>  
<a href="http://www.reddit.com/r/reactjs/comments/3flgnu/building_a_graphql_server_with_nodejs_and_sql/ctqudkn" target="_blank">http://www.reddit.com/r/reactjs/comments/3flgnu/building_a_graphql_server_with_nodejs_and_sql/ctqudkn</a>  
<a href="http://img.ctrlv.in/img/15/08/04/55c06bb1b3815.png" target="_blank">http://img.ctrlv.in/img/15/08/04/55c06bb1b3815.png</a>  
<a href="http://eslint.org/docs/rules/complexity" target="_blank">http://eslint.org/docs/rules/complexity</a>  
<a href="https://www.youtube.com/watch?feature=player_embedded&v=z5WkDQVeYU4" target="_blank">https://www.youtube.com/watch?feature=player_embedded&v=z5WkDQVeYU4</a>  
<a href="http://i.imgur.com/eBBAUct.jpg" target="_blank">http://i.imgur.com/eBBAUct.jpg</a>  
<a href="http://bit.ly/1DpROQl" target="_blank">http://bit.ly/1DpROQl</a>  
<a href="https://avatars1.githubusercontent.com/u/50130?v=3&s=460" target="_blank">https://avatars1.githubusercontent.com/u/50130?v=3&s=460</a>  
<a href="http://mgoblog.com/sites/mgoblog.com/files/ncaa-dogs.gif" target="_blank">http://mgoblog.com/sites/mgoblog.com/files/ncaa-dogs.gif</a>  
<a href="http://m.geektimes.ru/post/259762/" target="_blank">http://m.geektimes.ru/post/259762/</a>  
<a href="https://www.facebook.com/photo.php?fbid=10200899573969802&set=a.1535737771572.47298.1778684198&type=1&permPage=1" target="_blank">https://www.facebook.com/photo.php?fbid=10200899573969802&set=a.1535737771572.47298.1778684198&type=1&permPage=1</a>  
<a href="http://ru.confcodeofconduct.com/" target="_blank">http://ru.confcodeofconduct.com/</a>  
<a href="http://www.imfdb.org/images/thumb/b/bc/T2_1501.jpg/600px-T2_1501.jpg" target="_blank">http://www.imfdb.org/images/thumb/b/bc/T2_1501.jpg/600px-T2_1501.jpg</a>  
<a href="https://open.bufferapp.com/introducing-open-salaries-at-buffer-including-our-transparent-formula-and-all-individual-salaries/" target="_blank">https://open.bufferapp.com/introducing-open-salaries-at-buffer-including-our-transparent-formula-and-all-individual-salaries/</a>  
<a href="http://zachholman.com/posts/how-github-works/" target="_blank">http://zachholman.com/posts/how-github-works/</a>  
<a href="http://www.valvesoftware.com/company/Valve_Handbook_LowRes.pdf" target="_blank">http://www.valvesoftware.com/company/Valve_Handbook_LowRes.pdf</a>  
<a href="http://hdmessaging.com/" target="_blank">http://hdmessaging.com/</a>  
<a href="http://zenrobotics.com/" target="_blank">http://zenrobotics.com/</a>  
<a href="https://jsunderhood.ru/stats/" target="_blank">https://jsunderhood.ru/stats/</a>  
<a href="http://futurice.com/blog/futurice-open-source-program-the-spice-program" target="_blank">http://futurice.com/blog/futurice-open-source-program-the-spice-program</a>  
<a href="https://www.patreon.com/reactdx" target="_blank">https://www.patreon.com/reactdx</a>  
<a href="http://37signals.com/remote/" target="_blank">http://37signals.com/remote/</a>  
<a href="http://agilemanifesto.org/principles.html" target="_blank">http://agilemanifesto.org/principles.html</a>
# freiksenet

_09 августа 2015_

## Понедельник <small>112 твитов</small>

В Финляндии неожиданно началось лето, а тут начался [@freiksenet](https://twitter.com/freiksenet "freiksenet"). Привет уютному чату!

Меня зовут Михаил Новиков, в интернете я везде freiksenet. Я разработчик, в основном на JS. Живу в Финляндии уже 12 лет, переехал из СПб.

Я работаю в своём стартапе, https.//reindex.io. Мы делаем BaaS для реакта на основе GraphQL. Пишем на node + hapi + rethinkdb.

Планы на неделю - поговорить о GraphQL и Relay, про жизнь и IT в Финляндии, пофлеймить про то что я не люблю - например Angular, gulp/grunt

Я мог бы поговорить про реакт, но после [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov"), [@andreypopp](https://twitter.com/andreypopp "Andrey Popp") и [@deepsweet](https://twitter.com/deepsweet " k i r") мне сложно что-то добавить. Реакт крутой, юзайте его :\)

На выходных в английском твиттере было аж два срача - сначала про babel и использование stage 0 преобразований [mobile.twitter.com/ryanflorence/s…](https://t.co/KFpmZfwiLi "https://mobile.twitter.com/ryanflorence/status/627154904302288897").

Второй про то достаточно ли V8 оптимизирует "реальный код", а не только микробенчмарки. [mobile.twitter.com/wycats/status/…](https://t.co/2qm5PBe391 "https://mobile.twitter.com/wycats/status/627719336426274816")

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вы начали стартап после выхода спеки по графклу или после презентации идеи графкла?

RT [@talgautb](https://twitter.com/talgautb "Талга УтБ"): Ну хз, 2 основных проекта на реакте в ff что-то тормозят сильно :\( может у меня что-то с компьютерами?!\) [twitter.com/jsunderhood/st…](https://t.co/F7SRkYUrjm "https://twitter.com/jsunderhood/status/628083712933163008")

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну и оффтоп: как убедить бизнес вложить деньги в подобные идеи? "БааС для такой стрёмной идеи? Этим хоть пользоват…

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как попал в программирование ? Важно ли спец. образование ?

Про babel - мы юзаем и на клиенте и на сервере, stage 1. async/await это невероятно удобно при работе с базами данных.

[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Остальное это просто удобный сахар, но очень добавляет удовольствия при написании кода, например spreadы и destructuring.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а мы плотно подсели на `stage: 0`: Class Properties \(странно, если их уберут\) и даже Function Bind \(по началу к…

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") к слову, актуальная таблица [github.com/tc39/ecma262](https://t.co/NeclN2tcmo "https://github.com/tc39/ecma262")

Милый трюк с console.log и function bind в бабеле. [twitter.com/freiksenet/sta…](https://t.co/jxQyUwj4TD "https://twitter.com/freiksenet/status/624842924275007488")

RT [@arik0n](https://twitter.com/arik0n "Sergey Belov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Расскажи про скорость Реакта. Рендеринг на сервере, на клиенте, инициализация js и тп. [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") [@andreypopp](https://twitter.com/andreypopp "Andrey Popp") [@deepsweet](https://twitter.com/deepsweet " k i r")

Расскажу про GraphQL и почему он нам так нравится. Меня можно назвать не модным уже именем full-stack developer или модным product developer

Я пишу фронтенд, часто я так же писал и бакенд. Как минимум я правил бакенд или пинал бакендеров, чтобы они его правили.

Очень частая история - сделал REST API, все чистенько и по спеку. Начал писать фронтенд - нужны еще эти связанные данные или это поле.

Начинаешь править бакенд, эндпоинты становятся намного менее чистыми и с кучей странных параметров. Или просто толстыми и возвращают все.

Еще веселее ситуация, когда бакенд команда отделена от команды которая делает приложения. Каждый запрос на новую фичу вызывает недовольство

В итоге хачишь workaround-ы на фронтенде и все глючит и тормозит.

Фейсбук \(и например Netflix\) решили что хватит это терпеть и придумали, соответственно GraphQL и Falcor.

GraphQL позволяет на сервере описать все данные, которые доступны и их связи. Клиентское приложение может одним запросом взять что ему надо.

Поменялись требования или компонент? Просто добавь или удали поле в запросе.

А бакендеры написали один ендпоинт и просто добавляют туда фичи, когда они становятся доступны.

Несколько ссылок - introduction от FB.  
[facebook.github.io/react/blog/201…](http://t.co/AGwC5h2izW "http://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html")

Программный пост от нас.  
[reindex.io/blog/how-faceb…](https://t.co/zd3dFwXZcd "https://www.reindex.io/blog/how-facebooks-graphql-will-change-backend-development/")

Референс имплементация  
[github.com/graphql/graphq…](https://t.co/5ng5KpH9eb "https://github.com/graphql/graphql-js")

Вот только что запостил гайд, как писать простой сервер на надо юзая reference implementation.  
[reindex.io/blog/building-…](https://t.co/fI6QbWJStA "https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/")

[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") На ноде, естественно.

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): на мой вкус [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на этой неделе — огонь.

Я понял что я неправильно отвечал на вопросы. Woe on me! Можете почитать все в tweets and replies. Теперь буду старатся правильно.

RT [@ap\_savin](https://twitter.com/ap_savin "Alexander Savin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мне наоборот так больше нра. Интересное ретвитнул - я кликнул и почитал ответы. Не интересное - не кликаю. Чище …

Все до этого по-другому делали. Вопрос к [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"). [@ap\_savin](https://twitter.com/ap_savin "Alexander Savin")

Это было в ответах, но вынесу сюда. Мы начали стартап почти сразу после первого talk-а на конференции про GraphQL.

Ловили GraphQL запросы из мобильных приложений FB, читали блог посты, сделали свою имплементацию до выхода спека.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") [@ap\_savin](https://twitter.com/ap_savin "Alexander Savin") ретвитить, отчасти нужно также для того, чтобы вопросы попадали в архив твоей недели

Что вы делали крутое не-веб в своей карьере? Я работал в [zenrobotics.com](http://t.co/RXEWySJ43S "http://www.zenrobotics.com"), писал код для роботов сортирующих мусор на clojure.

Если что - сортирующих мусор физически, IRL. Я не про garbage collection :D

RT [@astralian](https://twitter.com/astralian "Konstantin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Можно пример с позиционными и индексными ключами?

Первое сделает un-mount и mount если список поменятся. Второе скорее сделает апдейт и поменяет contents.  
[gist.github.com/freiksenet/f96…](https://t.co/1LpPUId8km "https://gist.github.com/freiksenet/f96e02ddee7a352448d3") [@astralian](https://twitter.com/astralian "Konstantin")

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") работал на заводе, которые авиадвижки делает, в отделе не разрушаемого контроля :\)

RT [@Barlog\_M](https://twitter.com/Barlog_M "Barlog (18+)"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") удел clojure — роботы, сортирующие мусор. :\)

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") там проверяются диски, в которые лопатки вставляются. Каждый около 1kk$ стоит. А проверить на дефекты их ар…

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") писал софт для TV-приставок, правда всё на тех же веб-технологиях: в приставку был встроен webkit.

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") чо бы все понимали что это такое - вот фотография :\)  
[instagram.com/p/y413-exPyZ/](https://t.co/XpeVWHhTKO "https://instagram.com/p/y413-exPyZ/")

RT [@AndrewGurylev](https://twitter.com/AndrewGurylev "Andrew Gurylev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") этот вопрос сделал мой день. НИ-ЧЕ-ГО.

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") недолго работал в ГКНПЦ им.Хруничева, где Протоны собирают. Не то чтобы круто, но тогда было интересно.

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сигнализацию проектировал для школ, судов и прочих гос.  учреждений.

RT [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как отлаживать / профилировать комплексные GrahpQL запросы?

Очень зависит от того как хранятся данные, можно например записывать все вызовы к БД сделанные одним запросом и по этому смотреть [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

RT [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на примере с блогом всё просто. А есть примеры простых решений для сложных кейсов?

RT [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") например, обновление нескольких связанных объектов. Проверка прав доступа при доступе к части данных.

Про первое - в отличии от запросов, GraphQL особо не задает то как должны делатся мутации. [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

Так что надо будет просто написать такой Mutation который правильно изменяет несколько обьектов.

Вообще GraphQL не отвечает на эти вопросы напрямую. Главная идея что ты написал свои типы данных и связал их с базой данной [@snejink](https://twitter.com/snejink "Aleksei Krasnoperov")

Потом клиент уже просто этим пользуется, тебе не надо ничего менять.

Но при этом то как ты решишь у себя внутри проблему с permissions - это не то что GraphQL решает, это решает твой бакенд.

В этом прелесть GraphQL - он не навязывает как тебе все сделать, только как это показывать клиенту и как клиент это будет запрашивать.

Надеюсь нормально обьяснил, запутанно получилось.

Важно понять про GraphQL, что это не SQL. Это намного ближе к WSDL, чем к SQL, такой WSDL для хипстеров\)

Это не общий язык для запросов данных. Скорее язык для описания удобных для использования RPC серверов.

Ну и язык для использования этих RPC серверов, да.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") хотя бы того же Relay – лично меня очень интересует как выглядят мутации с точки зрения компонента.

Я попробую про Relay поспекулировать, но к сожалению я тут на твоем уровне, все что знаю - из докладов. [@deepsweet](https://twitter.com/deepsweet " k i r")

Они немного раскрыли тему в личных разговорах, плюс мы читали де-минифицированный код, но деталей про интересные вещи не очень много.

Итак Relay - клиентская библиотека от ФБ, должна очень круто работать с реактом и graphql.

Еще не вышла :\( Базовая идея - компоненты сами описывают свои требования кусками GraphQL запросов, Relay их умеет собирать и запрашивать.

Relay обещает делать кеш, pagination \(судя по всему больная проблема в ФБ\), и оптимистичные модификации на клиенте.

Если про первые две вещи все в целом ясно, то про клиентские мутации известно только то, что у них будет клиентский id :\)

Кеш будет сделан через уникальный id для каждого обьетка возвращаемого relay-compatible сервером. id похоже будет содержать в себе тип.

Pagination - для страничных вещей, для каждого обьекта возвращается курсор - непрозрачный id, который можно дальше передавь для листания.

Вероятно в курсоре будет хранится тип и текущая сортировка \(или/и фильтр\).

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [speakerdeck.com/laneyk/mutatio…](https://t.co/9lVZveHxc1 "https://speakerdeck.com/laneyk/mutations-in-relay") – вот здесь как обычно много слов и мало примеров кода, но в целом концепцию уловить мо…

Самый подробный набор примеров про Relay  
[facebook.github.io/react/blog/201…](http://t.co/QWBibXLs8E "http://facebook.github.io/react/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html")

Про relay и мутации - раз у нас есть уникальный кеш, мы можем даже при мутациях которые меняют несколько обьектов обновить наше состояние.

Достаточно денормализовать данные полученные с сервера и обновить наше представление по id для каждого отдельного элемента из этих данных.

Что пока не понятно - это как именно происходит оптимистичное обновление до этого.

Спасибо [@deepsweet](https://twitter.com/deepsweet " k i r"), забыл совсем про эту презентацию. Немного больше всего известно про мутации, чем я сказал сначала\)

tl/dr - Relay заменит flux, GraphQL заменит REST и всем нам будет нирвана и полный React. :\)

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что мне нравится в GraphQL – с точки зрения клиента есть один источник данных, который отдаёт именно и только т…

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в моём мире это очень укладывается в концепцию иммутабельных глобальных деревьев состояния, только тут такое же…

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и общение клиент-сервер сводится просто к синхронизации дерева.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") огромный плюс – отсутствие процессинга данных перед рендером на клиенте. данные даже хранятся в идентичных стру…

Ну вот в Relay будет какой-то процессинг, хотя бы денормализация для кеширования. [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну, это чуть про другое. наверное :\) я скорей про "чистые данные как чистое состояние".

Бесстыжая реклама - reindex.io будет поддерживать relay как только relay выйдет :\)

RT [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") relay не заменит flux, так как не все состояние диктовано базой данных.

Возможно. Может в Relay будет возможность хранить такое состояние. [@vslinko](https://twitter.com/vslinko "Vyacheslav Slinko"). В любом случае клиентское состояние это намного проще.

RT [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не обязательно с бд. Мы пилим внутренее апи с подобной идеей. В половине случае объект смотрит не в базу, а…

Прелесть GraphQL что можно смотреть куда тебе удобно, это implementation detail [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev")

RT [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") только я не понял зачем fb понадобился свой формат. У нас всё отлично легло на обычный json со схемами.

Может им показалось что так удобнее писать. JSON не самый удобный формат для программирования. [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev")

RT [@Barlog\_M](https://twitter.com/Barlog_M "Barlog (18+)"): Начитался [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") теперь у меня в продакшене React, Babel и WebPack. И об этом никто не знает.

Улучшаем мир, one company at a time. [@Barlog\_M](https://twitter.com/Barlog_M "Barlog (18+)")

RT [@is\_ruslan](https://twitter.com/is_ruslan "Ruslan  Ismagilov"): [@Barlog\_M](https://twitter.com/Barlog_M "Barlog (18+)") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Есть легенда, что существует разработчик, который пишет на React+Babel+Webpack и не твердит об этом з…

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вопрос к сообществу: а какую либу сейчас лучше всего использовать для работы с canvas на клиенте?

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@greybax](https://twitter.com/greybax "Aleksandr Filatov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нет. Лучше сказать "инфографику".

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [d3js.org](http://t.co/ADiSIf72Ri "http://d3js.org/")

RT [@PixelsCommander](https://twitter.com/PixelsCommander "Denis Radin"): [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Оч расплывчатый запрос. Для объектной абстракции paper.js хорош. Для игр pixi.js.

RT [@PixelsCommander](https://twitter.com/PixelsCommander "Denis Radin"): [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev") Изрядно но в том же списке Paper обходит всех,а если смотреть на примеры - там даже…

Несмотря на твиттер, день прошёл продуктивно. Ребейзнул и починил бранч с аутентификацией на версию с graphql-js. А что вы сегодня сделали?

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как быстро можно перевести проект с полусотней эндпоинтов на graphql-подобное решение?

Нет пока простых решений, увы \( Вручную надо переводить. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") меня интересуют любые решение, переход руками — это нормально

Если нода - берешь graphql-js и переводишь. Начинаешь просто с того что задаешь свои типы и связи между ними. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати [github.com/RisingStack/gr…](https://t.co/PxBMsiyrG4 "https://github.com/RisingStack/graffiti")

Я смотрел, это имхо ещё не готово. Но в целом генерить типы это правильный подход, мы так же делаем. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

Но это зависит от того что за база данных, я бы например mongoose выбросил и написал типы заново, а из sql базы генерил.

В любом случае надо генерить побочные типы, типа InputObjectType или Connection. [@roman01la](https://twitter.com/roman01la "Roman Liutikov")

## Вторник <small>139 твитов</small>

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") GraphQL это что-то типа API Gateway [microservices.io/patterns/apiga…](http://t.co/znUrQ2ZWd6 "http://microservices.io/patterns/apigateway.html")?

Нет, совсем не это. GraphQL на другом уровне концептуалтно, API gateway может иметь graphql endpoint. [@vladimore](https://twitter.com/vladimore "Waldemar")

Доброе утро уютный чатик! Сегодня у нас день срачей :\) По просьбе [@vladimore](https://twitter.com/vladimore "Waldemar") я расскажу почему я не люблю Angular.

Начну издалека, люблю истории. Вот реакт многие засирают за jsx, типа html в коде, фу. И это при том что jsx это трансформ в js.

А в ангулар магический код в виде html атрибутов, который запускается чуть ли не eval, который не отдебажить и который не js, но это ок %\)

Да, я про filter и иже с ними.

Реакт очень активно заставляет программиста делить все на компоненты. refы намерено имеют минимальный функционал, чтобы даже не пытались.

В ангулар туториалы предлагают писать толстые контроллеры, а интерфейс написания директив \(компонентов\) как будто намеренно ужасен.

Заметьте я ещё ни разу не сказал 'ангулар тормозит'. Все чисто с точки зрения программиста.

Дальше - у ангулара свои модули, своя система DI, свои тесты, свое все. Какая-то фабрика велосипедов.

DI это отдельная история, мне иногда кажется что оно в ангуларе, чтобы пугать людей и заставлять думать что раз так сложно то видимо круто.

RT [@a\_lithium](https://twitter.com/a_lithium "Aliaksei Lithium"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") хотел сказать чисто с точки зрения программиста тормозит?\)

Ну что программист с ангуларом тормозит и это плохо. [@a\_lithium](https://twitter.com/a_lithium "Aliaksei Lithium")

Но я отдам ангулару должное, формочки в нем делать быстро и просто. В реакте до сих пор нет хорошей и простой либы для форм. :\(

Но SPA в современном мире это не только формы и это ограничивает использование ангулара.

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") чем ужасен интерфейс директив? не докапываюсь мне просто реально сравнить не с чем.

Меня пугают магические заклинания restrict: 'X' с волшебными буквами :\) [@vladimore](https://twitter.com/vladimore "Waldemar")

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я делю все фичи на компоненты и директивы мне помогают в этом.

Ты молодец и хороший программист! Я считаю что ангулар не делает достаточно чтобы продвигать такой стиль. [@vladimore](https://twitter.com/vladimore "Waldemar")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фронтенд за последние годы сильно продвинулся и логично, что angular устарел, но это не делает его плохим, а …

Ну он плохой по сравнению с текущими альтернативами. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

Прекрасный коммент про N+1 и GraphQL. [reddit.com/r/reactjs/comm…](http://t.co/SvaMzStGe5 "http://www.reddit.com/r/reactjs/comments/3flgnu/building_a_graphql_server_with_nodejs_and_sql/ctqudkn")

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это да, но разве это не помогает проще принимать решения о том как организовать процесс и о том как писать код?

Да, но проблема в том что надо выучить как в ангуларе принимаются такие решения и потом этот опыт не переводится на другие либы [@vladimore](https://twitter.com/vladimore "Waldemar")

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") может так и лучше сравнивать? Например вот такие-то штуки лучше в плане модульности, биндинга, мод…

Ну я и старался на контрасте с реактом. [@vladimore](https://twitter.com/vladimore "Waldemar") [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

Ну я заметил что я слишком часто начинаю ответы с ну. :\)

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  ангулар же наоборот, для тех, кто не хочет и готов просто верить, учить устав и делать \(:

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ни то ни другое не плохо ни хорошо. просто разные подходы. всё зависит от выбора людей.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что изображено на твоей аватарке?

Был или есть в Питере клуб, не помню названия уже. Там статуя собаки из кожи и противогаза. Голова этой статуи на аватарке. [@deepsweet](https://twitter.com/deepsweet " k i r")

Мирно закончили срач про ангулар, но не волнуйтесь, у меня ещё несколько срачей запланировано на сегодня :\)

RT [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@vladimore](https://twitter.com/vladimore "Waldemar") в реакте все компонентно, а в ангуларе директиву лишний раз писать не хочется, вот все и в шаблон…

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") текущий angular, это версия 2, остальное Legacy.  
Ты ведь не сравниваешь chrome и ie6?

Насколько народ юзает 2.0? Мне кажется legacy не стремятся переводить на 2.0, чую как с питоном 3 и перл 6 будет :\) [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") альфа-статус ничего не значит? не думаю, что 2-й ангуляр кто-то использует в продакшене [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Наброшу - а angular вообще кто-нибудь серьезный и большой использует в продакшене? Ну типа Google или Twitter :P [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

То есть кто-нибудь с миллионами пользователей. Я знаю что ангулар очень популярен в кровавом энтерпрайзе.

Самый простой троллинг ангулара - спросить почему гугл сами до сих пор его не юзают :P С реактом к ФБ такого нет, они едят свой dogfood.

RT [@stigmat4j](https://twitter.com/stigmat4j "Антонихин Максим"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") магический фреймворк в магическом ентерпрайзе

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") Elisa использует. Но лучше бы она этого не делала :-\)

Мало энтерпрайза кровавее чем элиза :\) [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

Для тех кто в танке - Elisa это местный большой телеоператор. Кстати я там отдельно взятый проект таки перевел на реакт.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у Google много команд разработки, в отличии от FB.

Ну это не правда же. У ФБ очень много разных проектов. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") напиши пост о том как дёшево и сердито перебраться на реакт с ангулара. Если действительно дёшево.

Я же не упоротый :\) Никак дешево ни на что не перейти. [@vladimore](https://twitter.com/vladimore "Waldemar")

RT [@lane\_en](https://twitter.com/lane_en "eden lane"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пруф: [img.ctrlv.in/img/15/08/04/5…](http://t.co/N9xIKT0iZI "http://img.ctrlv.in/img/15/08/04/55c06bb1b3815.png") . Так что троллинг не обоснован

Естественно если был выбран ангулар когда-то и на нем тысячи кода, то надо пилить на нем. Перепись всего заново и с нуля редко оправдана.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@vladimore](https://twitter.com/vladimore "Waldemar") у нас есть проекты на ангуляре, для перехода надо переписывать полностью.

Я просто предлагаю взглянуть на альтернативы когда будете начинать новый проект.

RT [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я думаю, что стоит про реакт что-то плохое написать, тогда точно будет огненное шоу пуканов\)\)

А-то. Нам js-хипстерам палец в рот не клади, отгрызем и заменин на react/babel/webpack. [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай")

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в случае если ваша компания решила что angular deprecated, новый код писать с ним неоправдано

Иногда для поддержки старого проекта надо писать новый код, пусть даже на deprecated технологии :\( [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пока очень похоже, что сделать angular deprecated могут только HR'ы.

RT [@dmzkrsk](https://twitter.com/dmzkrsk "dmzkrsk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а какой стек сейчас лучше взять для нового проекта типа-энтерпрайза \(таблицы-формочки\). Для фронтенд-части

RT [@iamale\_ru](https://twitter.com/iamale_ru "Я @mocaddishu"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай") Стоп, то есть реакт уже для хипстеров?

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как же перцы которые их вместе использую якобы для скорости рендера интерфейсов?

Слышал про такое. Думаю эти проекты совмещают скорость angular-а и глубокий model-layer реакта. [@vladimore](https://twitter.com/vladimore "Waldemar") :\)

RT [@iamale\_ru](https://twitter.com/iamale_ru "Эль"): [@ilavriv](https://twitter.com/ilavriv "ilavriv") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай") И про Backbone забывать не стоит

Вот кстати с backbone на реакт просто. На одном из проектов просто переписали все view как компоненты. [@iamale\_ru](https://twitter.com/iamale_ru "Я @mocaddishu") [@ilavriv](https://twitter.com/ilavriv "ilavriv") [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай")

RT [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай"): [@iamale\_ru](https://twitter.com/iamale_ru "Я не Антон") ну, в акке [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") , "только и разговоров, что о &lt;strike&gt;море&lt;/strike&gt; React'е и о закате"

Новая тема для срача - coding style. Какое самое срачеобразующее правило в вашем coding style? У нас, например, обязательные trailing comma.

Заодно скиньте ваш .eslintrc/.jscsrc/.jshintrc etc. Вот наш. [gist.github.com/freiksenet/464…](https://t.co/FB89ZycXqz "https://gist.github.com/freiksenet/4646c7216167fd139d5d")

Trailing comma, кстати, чтобы диффы были красивые. :\)

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот наш [github.com/nordnet/nordne…](https://t.co/qjvY5PATOY "https://github.com/nordnet/nordnet-next-api/blob/master/.eslintrc#L2")

RT [@naorunaoru](https://twitter.com/naorunaoru "рома"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ставить точку с запятой после return или не ставить

Точку с запятой ставить всегда :\) [@naorunaoru](https://twitter.com/naorunaoru "рома")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") очевидно, что spaces vs tabs

Я думал только go-любы юзают табы в современном мире [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@naorunaoru](https://twitter.com/naorunaoru "рома"): [@ilavriv](https://twitter.com/ilavriv "ilavriv") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я вот когда-то продавливал, что не надо — типа, и так понятно. но редко встречаю любителей подобной е…

Всегда бесило что ; опциональна, нелюблю такой код. Всегда надо думать нужна она или нет. Легче всегда ставить. [@naorunaoru](https://twitter.com/naorunaoru "рома") [@ilavriv](https://twitter.com/ilavriv "ilavriv")

RT [@iamale\_ru](https://twitter.com/iamale_ru "Я @mocaddishu"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@naorunaoru](https://twitter.com/naorunaoru "рома") \*brofist\*  
Что думаешь насчёт Standard style? \(Помимо того, что там ; нет\) [github.com/feross/standard](https://t.co/bxARFKkoGH "https://github.com/feross/standard")

Что он нифига не standard. [@iamale\_ru](https://twitter.com/iamale_ru "Эль") [@naorunaoru](https://twitter.com/naorunaoru "рома")

Лучший аргумент за ; это правило в standard style - 'never start a line with \( or \['. Правило, чтобы исправить что ты натворил в предыдущем.

RT [@igor\_shubovych](https://twitter.com/igor_shubovych "Igor Shubovych"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 2 или 4 пробела

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iamale\_ru](https://twitter.com/iamale_ru "Я @mocaddishu") [@naorunaoru](https://twitter.com/naorunaoru "рома") вот я тоже так думаю, и [@sindresorhus](https://twitter.com/sindresorhus "Sindresaurus") сделал JavaScript happiness style ❤️ XOXO https:/[github.com/sindresorhus/xo](https://t.co/9OnQIWCaZS "https://github.com/sindresorhus/xo")

RT [@naorunaoru](https://twitter.com/naorunaoru "рома"): [@igor\_shubovych](https://twitter.com/igor_shubovych "Igor Shubovych") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 2 пробела и никаких табов!

Самый sensible 'общий' стиль который я видел это airbnb. Почти все по делу. [github.com/airbnb/javascr…](https://t.co/8QIArTWXH9 "https://github.com/airbnb/javascript")

RT [@maksim\_valiev](https://twitter.com/maksim_valiev "Maksim Valiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") А как быть с тем что кто-то любит в 2 пробела отступ, кто-то в 4?

Кто СТО тот и решает :\) [@maksim\_valiev](https://twitter.com/maksim_valiev "Maksim Valiev") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@maksim\_valiev](https://twitter.com/maksim_valiev "Maksim Valiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") Главное чтобы у всей команды было одинаково хорошее/плохое зрение?\)

Естественный отбор :\) :D [@maksim\_valiev](https://twitter.com/maksim_valiev "Maksim Valiev") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@naorunaoru](https://twitter.com/naorunaoru "рома"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати, я вот считаю, что объявление переменных через запятую — плохо. дискасс?

Помню делал консалтинг в стартапе, где был кофескрипт и 4 пробела индент.

RT [@kipruss](https://twitter.com/kipruss "Konstantin Baev"): [@naorunaoru](https://twitter.com/naorunaoru "рома") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ушли от этого. Одна переменная - одна строка и свой var, хоть и рябит от них иногда

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maksim\_valiev](https://twitter.com/maksim_valiev "Maksim Valiev") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") решает не СТО, а тимлид.

Это ты в больно большой компании работаешь :\) [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") [@maksim\_valiev](https://twitter.com/maksim_valiev "Maksim Valiev") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") по поводу кодстайла в целом – нужно почаще спрашивать себя не делаешь ли ты случаем работу UglifyJS.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") знаю лично людей, которые часто называют переменные одной буквой, помимо `i` или `e`.

Мой ко-фаундер даже на `e` ругается переодически :\) А вообще, читабельные названия переменных - наше всё.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и здесь опять же React со своими `shouldComponentUpdate` и `componentDidMount` задаёт хороший тон.

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") аминь! Переменная внятно должна отвечать на вопрос "что?"

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") моё любимое – `dangerouslySetInnerHTML` [facebook.github.io/react/tips/dan…](https://t.co/MLnpsQkCI6 "https://facebook.github.io/react/tips/dangerously-set-inner-html.html")

Мне кажется они намеренно, чтобы люди не юзали\) [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@vladimore](https://twitter.com/vladimore "Waldemar") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в былые времена были и `l`, и `m`, и даже `n` во вложенных циклах-перециклах :\)

В такие моменты хочется включить лимит на cyclomatic complexity. [@deepsweet](https://twitter.com/deepsweet " k i r") [@vladimore](https://twitter.com/vladimore "Waldemar")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@vladimore](https://twitter.com/vladimore "Waldemar") кстати, есть что-нибудь живое \("babel"\) кроме [github.com/es-analysis](https://t.co/qzsQISc3T0 "https://github.com/es-analysis") и [eslint.org/docs/rules/com…](http://t.co/6u1B8SuhIm "http://eslint.org/docs/rules/complexity")?

Не знаю, никогда не думал о том чтобы серьезно это включать, обычно такое на code review ловится. [@deepsweet](https://twitter.com/deepsweet " k i r") [@vladimore](https://twitter.com/vladimore "Waldemar")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда-то была забавная идея [github.com/deepsweet/dba](https://t.co/V3qyUn7jBr "https://github.com/deepsweet/dba"), я даже на мелких штуках пару раз юзал :\)

Кстати мы очень любим code review. Мне кажется это очень помогает, чтобы код катился в легаси медленнее.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати, а что вы используете для документирования кода? начиная от стиля/"методологии" и заканчивая инструмента…

Хороший вопрос! Есть ли альтернатива jsdoc? [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я уже упоминал [github.com/codemix/babel-…](https://t.co/CU0TdI100o "https://github.com/codemix/babel-plugin-typecheck") пока вёл свою неделю, т.е. заменить jsdoc на flow annotations + обычные …

flow как документация это хорошо, но не достаточно. Не подходит для описания API или деталей как что-то концептуально работает. [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@deepsweet](https://twitter.com/deepsweet " k i r") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") исповедуем методу "читай код".

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@deepsweet](https://twitter.com/deepsweet " k i r") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот тут мужик рассказывает как писать меньше доков [youtube.com/watch?feature=…](https://t.co/FXBWnsyJkF "https://www.youtube.com/watch?feature=player_embedded&v=z5WkDQVeYU4")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") code review, но это дорого.

Кривой код в продакшене - дороже. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если код работает, то дорогой будет поддержка, но это отложенные траты.

Ну ясно что это trade off. Мы выбрали более дорогой код сейчас, чем более дорогая поддержка потом. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") цена поддержки важнее стоимости разработки. Пускай последняя и кажется выше.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сложно обосновать заказчику эти траты, он всегда откладывает на потом.

Ну у нас мы сами заказчики. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@11bit](https://twitter.com/11bit "inky"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а code style в пре-коммит/пуш хуках проверяются. Или есть менее жесткие пути?

Мы вместе с тестами проверяем стиль и соответственно на CI [@11bit](https://twitter.com/11bit "inky")

RE: code review [i.imgur.com/eBBAUct.jpg](http://t.co/QQabYYDxLK "http://i.imgur.com/eBBAUct.jpg")

RT [@neonick](https://twitter.com/neonick "Nick Marchenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") поговорим об организации хранения изображений? Кто как подключает SVG: файлом, в html, base64? Как можно автомати…

Помню мой кофоундер для iconic сделал webpack loader который грузил svg inline. К сожалению так и не дошли руки опенсорснуть. [@neonick](https://twitter.com/neonick "Nick Marchenko")

Сейчас уже поздно, это было у одного из клиентов.

RT [@kqxsr](https://twitter.com/kqxsr "kqxsr"): [@neonick](https://twitter.com/neonick "Nick Marchenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Используем стеки [bit.ly/1DpROQl](http://t.co/lDoFbCMAD8 "http://bit.ly/1DpROQl")

RT [@subzey](https://twitter.com/subzey "subzey"): [@neonick](https://twitter.com/neonick "Nick Marchenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вкратце, клеим всё в виде строк в svg-icons.js, а на странице создаём элемент и в нужном месте вставляем …

RT [@denswor](https://twitter.com/denswor "denswor"): [@neonick](https://twitter.com/neonick "Nick Marchenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у нас [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov") сделал такое [github.com/mistakster/gru…](https://t.co/78WmBjflJI "https://github.com/mistakster/grunt-svg2string") . пользуемся в проектах. удобно.

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): Тонны плюсов в карму [@Denis\_dp](https://twitter.com/Denis_dp "Denis Sergeevich") за использование [@firefox](https://twitter.com/firefox "Firefox") [#DevEdition](https://twitter.com/search?q=%23DevEdition) Берите пример - в канари-версиях браузеров полно плюше…

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@neonick](https://twitter.com/neonick "Nick Marchenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/webpack/url-lo…](https://t.co/T8M01hvWsN "https://github.com/webpack/url-loader")

RT [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov"): [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  в некоторых проектах используем [github.com/christianalfon…](https://t.co/lJKOCQnbOG "https://github.com/christianalfoni/formsy-react")

RT [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Привет, подскажи какой js фреймворк мне лучше выбрать если я хочу сделать что-то вроде twitter meets yout…

Это в смысле vine или coub? [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov")

Нашествие любителя Ember в ответах. Все что он говорит про Эмбер я могу сказать про Реакт.

Надо брать что лучше знаешь или что больше понравилось после туториала. Ember хороший фреймворк. React для меня лучше.

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Твиттер - не самое удобное средство для таких обсуждений, и я бы с удовольствием обсудил эту тему.

RT [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати  вопрос к адептам реакта, почему lifecycle methods в реакт имеют такие длинные имена?

RT [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") например вместо ComponentDidMount  не было бы лучше afterMount ?

Почему нет? Точно сразу понятно что это за метод. [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov")

Экономия на длинне переменных - головная боль для читателя в будущем. Пишешь один раз, читаешь 100.

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") поэтому названия должны быть выразительные и однозначные, а не длинные/короткие

RT [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") чем afterMount не понятен? И при этом он короче. Мне просто интересно чем они руководствовались когда наз…

С префиксом component они все одинаково начинаются, удобно группировать.

## Среда <small>106 твитов</small>

Доброе утро! Сегодня у нас эмигрансткий день. Как я говорил, я в Финляндии 12 лет из 28, живу здесь всю учебу и карьеру.

Язык я знаю плохо. В IT тут не надо язык знать если ты нормальный программист, но базу знать полезно чтобы заполнять формы и читать ценники.

В Финляндии хорошо если ты любишь единение с природой и когда мало людей. Хельсинки пытается быть хоть немного городом, но фейлит.

Тут безопастно, отличное образование, хорошая медицина, очень хорошее все для размножения. Но бывает скучно, концерты сюда не приедут.

Стартапы сюда доходят медленно, разнобразие \*всего\* тут намного меньше чем в Мск или в Питере. Например доставка еды только щас развивается.

В принципе IT развито, есть достатчно хорошее стартап комьюнити, проходят конференции, есть местные инвесторы и не-местные знают про нас.

Налоги тут высокие, но если смотреть на все Европу, то достаточно средние для развитых стран. В Дании, например, выше. В Чехии сильно ниже.

Интересный факт, который вымораживает русских - зп тут называется до налогов, тк налоги это твое дело и твой рабодатель про них не знает.

Так что ждите получить 3к евро чистыми после названной зп в 5к.

Русские в IT и науке тут бывают \(иногда\) нормальные, остальные эмигранты больше любят Путина, чем самый ватный ватник в России.

Я кончил, можете задавать вопросы.

RT [@7rulnik](https://twitter.com/7rulnik "Valentin Semirulnik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не хочется разводить политосрач, но почему они тогда уезжают? :D

По тем же причинам что и все остальные - работа, семья или учеба\) Почему-то эмиграция некоторых больно бьет по голове. [@7rulnik](https://twitter.com/7rulnik "Valentin Semirulnik")

RT [@azbykov](https://twitter.com/azbykov "Aleksandr Bykov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как местные относятся к it-эмигрантам?

Нейтрально. Я за 12 лет ни разу не был подвержен дискриминации :\) [@azbykov](https://twitter.com/azbykov "Aleksandr Bykov")

RT [@vecmezoni](https://twitter.com/vecmezoni "Alexander Inozemtsev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@azbykov](https://twitter.com/azbykov "Aleksandr Bykov") а в целом к русским?

Я лично дискриминации не чувствовал. Кто сам этого хочет всегда может её себе придумать. [@vecmezoni](https://twitter.com/vecmezoni "Alexander Inozemtsev") [@azbykov](https://twitter.com/azbykov "Aleksandr Bykov")

Про дискриминацию, заранее отвечу - нет, тут не отминают детей просто так, как в целом, так и у русских.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну, зато открыть свой стартап можно :\)

Рынок маленький очень\) [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

В YC точно не возьмут :D [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

Ну и у меня тоже тащемта ;\) Я про то что стартап нацеленный на финский рынок это фигня. [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе") [@sorgoz](https://twitter.com/sorgoz "sorgoz")

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как раз через три недели переезжаю\) самый важный вопрос: сколько нужно бабла для более-менее комфортной жизн…

Сложный вопрос, сколько ни зарабатывал, всегда хочется больше :\) Самое дорогое квартира. Мы снимаем недалеко от центра, 1300€ [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

Это евро-двушка. В спальных районах можно найти за 700€. В остальном - алкоголь очень дорогой. Остальное по-моему окей. [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

Вообще, думаю одному можно достойно жить на 2000 чистыми \(~3300 до налогов\), вдвоем на 3000 \(~4500\). [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") «достойно» включает путешествия/накопления/крупные покупки? [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

Зависит от того насколько достойно вести жизнь в остальное время\) Мне сложно судить, я буржуй и не умею копить\) [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin")

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov") live reload / hot reload. Hot-reload - это замена компонентов на странице без ее перезагрузки. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")[@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov")

Hot reload меня прям возвращает во времена когда я писал Common Lisp. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov") [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov")

RT [@sorgoz](https://twitter.com/sorgoz "sorgoz"): От 3000 евро до налога уже можно жить. На семью с ребенком нужно от 4100e - впрочем, все индивидуально очень [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я часто замечал, что украинцы, которые переехали в Россию, тоже «ватнее» многих. Наверняка для этого синдро…

RT [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай"): [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вы аккаунтом не ошиблись? Тут, вроде, про разработку было.

Тема эмиграции это вполне про разработку\) [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай") [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@verylazydreamer](https://twitter.com/verylazydreamer "Ziyadin Shemsedinov") [@alex\_ivantsov](https://twitter.com/alex_ivantsov "Alexander Ivantsov") [github.com/caspervonb/amok](https://t.co/y5ob7MtLPJ "https://github.com/caspervonb/amok")

RT [@mr\_skriming](https://twitter.com/mr_skriming "Pasha Grekovich"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") а как вы думаете, нужен ли современному разработчику свой блог? Полезно это аль нет?

Если нравится писать - то пиши. Есть много способов получить репутацию и без блога, например опен сорс. [@mr\_skriming](https://twitter.com/mr_skriming "Pasha Grekovich") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Зато намного больше чем во многих других местах Европы. Культура потребления тут нормальная. Не Америка, но жит…

Тут хуже с потреблением чем в Германии, UK, Бенелюксе или остальной Скандинавии. [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Нет :-\) Задача из жизни: ты живешь в Голландии, хочешь после работы забежать в магазин купить нитки для вышивки…

В Голландии есть amazon.nl и amazon.de с доставкой за 3 евро, а не 25 :\) [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Те же самые магазины есть и в Финляндии. Интернет везде работает. Но не всё можно купить там.

Сойдемся на том, что за потреблением надо ехать в США :\) [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@Barlog\_M](https://twitter.com/Barlog_M "Barlog (18+)"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 10 твитов можно заменить одним: “Я живу в Финляндии 12 лет, а вы все неудачники!”

Закончим с политотой, перейдем к пятиминутке ненависти. Ненавижу когда просят чтото установить глобально \(типа npm install -g\).

Это отличная дорога в ад из-за несовместимых версий тулзов в проектах. Есть ./node\_modules/.bin и npm scripts. Только локальная установка!

Кстати npm scripts еще может заменить ненужный gulp/grunt. gulp/gruntfile это всегда каша. webpack для сборки, npm scripts для запуска.

RT [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пример конфига в студию\)

Сейчас в вебпаке вроде можно удобнее переопределять конфиги. [gist.github.com/freiksenet/d46…](https://t.co/AOamKLbcx7 "https://gist.github.com/freiksenet/d461fe8928c8ad33db89") [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай")

Это кстати еще до выхода babel конфиг. Старые добрые времена.

RT [@antonfrolovsky](https://twitter.com/antonfrolovsky "Frant"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Почему же, всякие CLI нужны глобально. Да и в принципе довольно сложно запутаться в локальных/глобальных м…

Поэтому они \*все\* должны быть локальными. Никогда не было проблем из-за разных версий, например, karma? [@antonfrolovsky](https://twitter.com/antonfrolovsky "Frant")

RT [@antonfrolovsky](https://twitter.com/antonfrolovsky "Frant"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Если есть локальная karma то дергается именно она :\) если её нету то глобальная. Не вижу сложности держать…

А зачем тогда вообще глобальная? [@antonfrolovsky](https://twitter.com/antonfrolovsky "Frant")

Еще пример scripts с большим количеством вещей:  
[gist.github.com/freiksenet/773…](https://t.co/ecnl39wYRe "https://gist.github.com/freiksenet/773747a2812c9b66507b")

Всё большое можно перенести в отдельные скрипты, либо баш либо просто js. Гарантирую что будет чище чем писaть это gulp-ом.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") прямо чувствуется негативный или даже травматичный опыт с галпом

RT [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну как сказать, без глобального npm и bower далеко не уедешь, ну и еще без npm-check-updates. для остально…

Вот npm это исключение которое может быть глобальным. Bower кстати не нужен вообще :\) [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

RT [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") эх, реальность порою бывает не такой радостной. в моем случае битва за ненужность bower все еще продолжает…

Будь мужиком, откажись от bower, блеять\) [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

RT [@touzoku](https://twitter.com/touzoku "マラット"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") а что вместо bower?

Все через npm. [@touzoku](https://twitter.com/touzoku "マラット") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как это? Не знает, но вычитает их с тебя?

Ты сам разбираешься с налоговой, работодатель получает только твой процент. Поэтому при обсуждении зп ты говоришь о зп до налогов. [@kuksikus](https://twitter.com/kuksikus "R.M.")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@kuksikus](https://twitter.com/kuksikus "R.M.") а если при этом проживаешь в другой стране, то как это происходит?

В смысле если ты не в Финляндии, а работодатель финский? Платишь налоги по законам страны проживания. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@kuksikus](https://twitter.com/kuksikus "R.M.")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В России зарплату тоже до налогов указывают

Я слышал принято компенсировать налоги конвертом. Мопед не мой, я никогда не работал в России. [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@\_sashashakun](https://twitter.com/_sashashakun "Alexander") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В Финляндии тоже есть налоги "до зарплаты". Про них никто не говорит, говорят про подходный.

О них не говорят, так как они не зависят от твоей налоговой карты и тебе они не должны быть интересны. [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@\_sashashakun](https://twitter.com/_sashashakun "Alexander")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") указывание зарплаты до налогов считается попыткой обмануть, поэтому, как правило, так не делают.

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") по-моему это индивидуально обговаривается. Плюс традиционные 13% это же не все налоги.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я всегда обсуждала с потенциальными сотрудниками зарплату до налогов. Никто не говорил, что я обманыв…

И самое главное они не часть твоей зарплаты, тк они не часть твоего налогооблагаемого дохода. [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@\_sashashakun](https://twitter.com/_sashashakun "Alexander")

RT [@\_sashashakun](https://twitter.com/_sashashakun "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") я немного запутался. Еслт мы говорим о налогам, которые платит работодатель, то будь они меньше, …

Работодатель в Финляндии платит свои налоги на зарплату сотрудников, например часть соц страховки. [@\_sashashakun](https://twitter.com/_sashashakun "Alexander") [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") на определенном этапе это становится ужасно неудобным. Makefile практичнее будет.

Makefile ценен, когда есть входы и выходы. По-моему нет разницы Makefile из 100 PHONY тасков или такой же npm scripts. [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko"): [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мне кажется npm scripts и Makefile это вспомогательные вещи, а не взаимозамещающие https:/[gist.github.com/playpauseandst…](https://t.co/LJZhAq7r6M "https://gist.github.com/playpauseandstop/55c060e8a343a9458391")

Различия чисто визуальные, зачем еще один тул? [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") ну JSом на многих проектах стэк не заканчивается :\) и вот здесь Makefile идеален

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") и это сразу перестаёт работать на винде

Ты так говоришь, будто это что-то плохое :\) [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") безумно плохо, кросс-платформенный nodejs, а ваши проекты всё ещё не работают …

Деплой будет на линуксе, разрабы на линуксе или маке, зачем старатся? [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

К тому же для Make есть cygwin. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): Давайте поговорим о дискриминации. Кто из мужчин-программистов нравится вам внешне?

Lee Byron из ФБ по-моему очень милый :\) [@toivonens](https://twitter.com/toivonens "var ya; // ru") [avatars1.githubusercontent.com/u/50130?v=3&s=…](https://t.co/RbYAx2qBu9 "https://avatars1.githubusercontent.com/u/50130?v=3&s=460")

RT [@touzoku](https://twitter.com/touzoku "マラット"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") bobuk? :-D

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") Мне нравился Пол Айриш, особенно то что он немного похож на хирурга из Nip Tuck. А потом он женился, и я обиделас…

RT [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") предлагаю слово "верстальщик" считать матерным.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") не соглашусь, из много на рынке и это нормально, а не «матерно»

Не понимаю эту профессию, это те кто темы для вордпресс делают? [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

Не представляю что будет делать верстальщик в проекте с реактом. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

Мне кажется это отголосок прошлого, когда не было фронтенда, а были темплейты. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тоже что и всегда. Сверстает и отдаст на имплементацию. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

Какая-то лишняя работа получается. Мне все равно переписать после этого. [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну вот я например не умею верстать. Чтобы сделать продукт, мне нужен верстальщик в помощь.

Вау. Я удивлён :\) Я всегда это делал сам и не ожидал что не все фронтендеры это делают. [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Сейчас я не вижу смысла доучиваться. Сверстать за меня может любой коллега, я лучше сделаю что-то, что другие н…

RT [@WarEnek](https://twitter.com/WarEnek "WarEnek"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а используешь ли в работе каким-нибудь Livereoad'ом?

Webpack + React hot loader [@WarEnek](https://twitter.com/WarEnek "WarEnek")

RT [@ap\_savin](https://twitter.com/ap_savin "Alexander Savin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") На последних двух работах были версталы и js раздельно. Ваше "матерно" очень некраси…

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") об актуальности разделения вёрстки и логики говорит активность в аккаунте [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик")

RT [@as\_Crazy](https://twitter.com/as_Crazy "Alexander"): [@alexeyraspopov](https://twitter.com/alexeyraspopov "Alexey Raspopov") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@playpausenstop](https://twitter.com/playpausenstop "Igor Davydenko") у нас верстальщики пишут jsx. В начале было тяжело, со временем стал…

## Четверг <small>106 твитов</small>

Доброе утро! Сегодня мы поговорим про Webpack и почему это наш выбор для сборки фронтенда.

Начну опять издалека. У фронтенд ассетов есть некая дихтомия, javascript уже давно собирается каким-то способом, а все остальное нет.

И к js модулям все привыкли, тут  миллионы решений, от того же webpack-а до require.js до browserify. Все модули на любой вкус.

С css-ом или например картинками или шрифтами все поступали более грубо. Возможно был список файлов и гулп или грунт делали над ним магию.

Очень просто было забыть что-то добавить. Оч!ень просто было налажать с путями на другие файлы из css. Очень тяжко было добалять либы с css.

webpack решает эту проблему убирая это различие между js-м с модулями и другими ассетами. CSS это такая же зависимость проекта как и js.

Шрифты, картинки, все что угодно - это зависимости и их можно require так же как javascript. Нет больше независимого списка файлов.

Дальше больше - url внутри css-a это такой же require. Можно не думать о том что ты перепутаешь путь в сервере.

В собранном css-е будет ссылка на \(возможно захешированный\) файл с картинкой или шрифтом. Просто отдавай весь build folder и будет счастье.

Темплейты - такие же зависимости. Просто requirе и пользуйся. Никаких магических путей в твоем коде, никаких кривых поделок типа icanhaz.

Кстати такая модель с зависимостями отлично ложится на реакт. Один компонент, один css/less файл.

Oстальные плюшки webpack-а, типа hot reload, code splitting - вишенка на торте. Главное - возможность все выражать через зависимости.

RT [@markbaraban](https://twitter.com/markbaraban "Mark"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как раз вчера хотел холивар начать webpack vs browserify\)

RT [@volyihin](https://twitter.com/volyihin "Дима Волыхин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А как вы взаимодействуете с дизайнерами и верстальщиками?

Всегда верстал сам, никогда не работал с верстальщиками. Дизайнеры присылают макеты в виде картинок или подобного. [@volyihin](https://twitter.com/volyihin "Дима Волыхин")

RT [@voischev](https://twitter.com/voischev "Ваня Воищев"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть такой БЭМ стек с возможностью выражать все через зависимости. Его не поняли и за это не любили... А тут нао…

БЭМ пугал когда он вышел. Там была простыня текста в документации на не очень прямом английском про философию. [@voischev](https://twitter.com/voischev "Ваня Воищев")

Но я не спорю что БЭМ \(был?\) крут и имел в себе кучу правильных идей. Я в БЭМ стиле CSS/LESS всегда пишу. [@voischev](https://twitter.com/voischev "Ваня Воищев")

Что я имел ввиду - авторы БЭМ не смогли его продать. В том числе из-за сложной и не очень удобной документации, ИМХО. [@voischev](https://twitter.com/voischev "Ваня Воищев")

И из-за того что это все было ориентированно на русское сообщество, а на западе об этом до сих пор не очень знают. [@voischev](https://twitter.com/voischev "Ваня Воищев")

RT [@volyihin](https://twitter.com/volyihin "Дима Волыхин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") то есть ты можешь и [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") \)\)

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@voischev](https://twitter.com/voischev "Ваня Воищев") БЕГИ

Это больная тема и священная корова? [@deepsweet](https://twitter.com/deepsweet " k i r") [@voischev](https://twitter.com/voischev "Ваня Воищев")

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") оооо ща набегут боты на ключевые слова [@voischev](https://twitter.com/voischev "Ваня Воищев")

RT [@voischev](https://twitter.com/voischev "Ваня Воищев"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") но для тех кто понял он вполне себе работает

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@voischev](https://twitter.com/voischev "Ваня Воищев") просто больная

Люблю запах флейма по утрам :\) [@deepsweet](https://twitter.com/deepsweet " k i r") [@voischev](https://twitter.com/voischev "Ваня Воищев")

RT [@bem\_xxx](https://twitter.com/bem_xxx "БЭМ"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@voischev](https://twitter.com/voischev "Ваня Воищев") Пока просто лайкну. Отвечу потом.

Иногда мне кажется что аудитория jsunderhood на 90% состоит из бывших сотрудников яндекса и соответственно бывших БЭМ разработчиков.

Яндекс это как Нокия у вас? Если не работал на прямую, то как минимум заляпался через консалтинг?

У нас до развала Нокии половина IT индустрии на нее работало. Очень рад что она сдохла, народ хоть делать что-то начал свое.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") очень смешно :-\)

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): В Гугле работать - это наверное как в Макдаке? Сначала хозяюшкой на устраиваешься, потом через 3 повышения уже стажёр-разраб…

Почти так, только остаешься хозяюшкой всю карьеру, если тебя не зовут Гуйдо ван Россум или Роб Пайк :\) [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@markbaraban](https://twitter.com/markbaraban "Mark"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а я вот не умею красиво верстать\( есть какие то мануалы для тех кто уже знает что-то о CSS но в кучу собрать …

Сейчас удивительное время, когда верстать уже не так страшно как раньше, особенно если без ИЕ9. Научись flexbox и лепи\) [@markbaraban](https://twitter.com/markbaraban "Mark")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в точку. я уже забыл когда о чём-то таком всерьёз парился. чё-то там про flexbox ляп сюда, ляп туда, и лайаут г…

RT [@andexds](https://twitter.com/andexds "Андрей Анашкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@markbaraban](https://twitter.com/markbaraban "Mark") Дада, без flex уже не жизнь.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") щас ещё дополнительно набегут те, кто обижается на реальность "верстальщики уже почти не нужны".

Про это я вчера уже нафлеймил\) [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@markbaraban](https://twitter.com/markbaraban "Mark"): [@deepsweet](https://twitter.com/deepsweet " k i r") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не ну пол беды layout, а что бы ну прям full stack. там дали диз, ты такой оп и все красиво\)или fl…

Внезапно это панацея для 99% того что раньше было сложно и хачно. [@markbaraban](https://twitter.com/markbaraban "Mark") [@deepsweet](https://twitter.com/deepsweet " k i r")

То есть конечно есть другие вещи которые надо знать как делать. Но стало в миллионы раз проще. [@markbaraban](https://twitter.com/markbaraban "Mark") [@deepsweet](https://twitter.com/deepsweet " k i r")

Мне уже не снятся кошмары про двойной padding и zoom:1 [@markbaraban](https://twitter.com/markbaraban "Mark") [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@markbaraban](https://twitter.com/markbaraban "Mark") "хачно" – 99% крутоты бывших CSS ниндзей и прочих джедаев.

ИМХО сейчас в стилях сейчас важнее сделать все модульно и чтобы поддерживать просто было. А с этим программисты обычно лучше справляются.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сейчас забавная ситуация, когда верстальщиками стали вчерашние дизайнеры, а разработчиками вчерашние верстальщи…

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") но остались ещё потерянные "верстальщики", которые реально и ни туда, и ни сюда. и пишут в блоги про то, как по…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Чем ты дебажишь NodeJS приложения?

Я консервативен, я все дебажу console.log :\( [@toivonens](https://twitter.com/toivonens "var ya; // ru")

В теории надо научится дебагерам, но пока не было проблемы которую не найти хорошим добрым логом. [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А чем можно нормально дебажить ES2015-приложения на Node.js? Сумел настроить Webstorm, но всё равно не…

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Попробуй WebStorm :—\) Он офигенно крут в работе с Node.js.

Не люблю IDE. Я даже с емакса еле перебрался на atom. [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мой процесс: билдю код в ES5 с Babel в отдельную папку, добавляю соурсмапы, ставлю точки останова в сб…

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И запускаю на отладку. Когда срабатывает точка в сбилденном коде, вебшторм показывает исходный.

RT [@11bit](https://twitter.com/11bit "inky"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а jspm как альтернативу веб паку никто не пробовал?

Он другие assets кроме js умеет? Не могу найти с первого просмотра. [@11bit](https://twitter.com/11bit "inky")

RT [@from\_anywhere](https://twitter.com/from_anywhere "Иван Метелёв"): А потом удивляются, откуда у них reflow ползет  
[twitter.com/jsunderhood/st…](https://t.co/l3ab3ZSuXp "https://twitter.com/jsunderhood/status/629195944807018496")

Это смотря как сделать. [@from\_anywhere](https://twitter.com/from_anywhere "Иван Метелёв")

RT [@lane\_en](https://twitter.com/lane_en "eden lane"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как же [github.com/node-inspector…](https://t.co/Mh0IOjNzX0 "https://github.com/node-inspector/node-inspector") и аналоги ? Я им пользовался ровно один раз, но он мне здорово помог

RT [@11bit](https://twitter.com/11bit "inky"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да, умеет цсс, шрифты и тд. Если что то не хватает, можно плагинчик дописать

RT [@smashercosmo](https://twitter.com/smashercosmo "Vladislav Shkodin"): [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вот только адски глючит, если дебажить код, пропущенный через babel/register, в отличие …

RT [@rainrb](https://twitter.com/rainrb "rainrb"): С емакса на атом? Но зачем? [twitter.com/jsunderhood/st…](https://t.co/SLe71uUmJA "https://twitter.com/jsunderhood/status/629199989194027008")

Захотелось перейти, надоело чинить емакс постоянно. Еще линтер очень удобный в атоме. [@rainrb](https://twitter.com/rainrb "rainrb")

RT [@rainrb](https://twitter.com/rainrb "rainrb"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот уж загадка, Atom как-то вообще поделие непонятное. Тормозит адово, каких-то иконок-спецэффектов навертели, луч…

Зато допиливается через js и css за секунду. [@rainrb](https://twitter.com/rainrb "rainrb")

RT [@rainrb](https://twitter.com/rainrb "rainrb"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") толку, если он на проекте среднего размера загибается

Да ладно, у меня норм. У меня правда куча всего убрано, типа табов и treeview. [@rainrb](https://twitter.com/rainrb "rainrb")

Емакс кстати тоже не летает, если не считать вылетов в систему. [@rainrb](https://twitter.com/rainrb "rainrb")

RT [@rainrb](https://twitter.com/rainrb "rainrb"): [@slonoed](https://twitter.com/slonoed "Dmitry M.") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") месяц назад пробовал с ним снова поиграться — не завелось. Тормозит сильнее рубимайна.

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): На этой неделе самый чёткий [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") именно по мировозрению, адназначна!

RT [@medvezhopok](https://twitter.com/medvezhopok "Andrew Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а чем atom лучше sublime text?

Больше старается быть умным редактором для программирования, а не просто текстовым редактором. [@medvezhopok](https://twitter.com/medvezhopok "Andrew Koltsov")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@veged](https://twitter.com/veged "Sergey Berezhnoy") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@voischev](https://twitter.com/voischev "Ваня Воищев") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я вроде спрашивала пару месяцев назад и его не было. Можно ссылку?

Мифические инструменты для зависимостей :\) [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@veged](https://twitter.com/veged "Sergey Berezhnoy") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@voischev](https://twitter.com/voischev "Ваня Воищев")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это адово тупиковый спор, ведущий только в обречённость некоторых технологий. уводи тему куда-нибудь :\)

Ты про так и не разгоревшийся диалог про БЕМ? [@deepsweet](https://twitter.com/deepsweet " k i r")

JSON все-таки убогий формат, жаль что мы так широко его используем.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А yml?

Я скорее что хотелось бы формат со схемой, который бы стал массовым. [@toivonens](https://twitter.com/toivonens "var ya; // ru")

Как-бы ты не сериализовал, рано или поздно нужна будет схема, даже для сериализации. Почему бы не начать с формата в котором она есть?

Появился у тебя datetime в json, сразу у тебя кастамный код на клиенте и на сервере чтобы правильно его \(де\)сериализовать.

RT [@dpolyakov](https://twitter.com/dpolyakov "Dmitry Polyakov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") альтернативы?

Не знаю, менять профессию :\) Слишком наш js мир завязан на json чтобы что-то нормально поменять. [@dpolyakov](https://twitter.com/dpolyakov "Dmitry Polyakov")

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@dpolyakov](https://twitter.com/dpolyakov "Dmitry Polyakov") transit крутая штука [github.com/cognitect/tran…](https://t.co/b5IVRaCiaA "https://github.com/cognitect/transit-format")

Вот кстати да, transit норм, хоть и schema-less. [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@dpolyakov](https://twitter.com/dpolyakov "Dmitry Polyakov")

В JSON многих подкупает что типа сериализации without any effort. Вообще это неправда, любая сериализация требует обработки твоих данных.

Если ты просто делаешь JSON.stringify на свои объекты, ты не сериализируешь, а блюешь своими данными наружу.

Это особенно заметная проблема в js или например в питоне, в Java или Haskell \(де\)сериализация обычно domain-specific.

RT [@roman01la](https://twitter.com/roman01la "Roman Liutikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@dpolyakov](https://twitter.com/dpolyakov "Dmitry Polyakov") кастомные сериализаторы/десериализаторы – вещь! [github.com/cognitect/tran…](https://t.co/EOIoEcgSqx "https://github.com/cognitect/transit-js")

Как научится хорошо делать code review? Мне повезло с коллегами, на всех прошлых работах с code review были такие, кто это делал круто.

Наверно надо быть садистом с OCD, чтобы это делать правильно. Но это реально работает. Переодически очень бесит, но код реально лучше.

У меня вот редко получается так тщательно делать code review, больно добрый может.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для начала настроить линтеры, чтобы не делать их работу и проверять уже код, а не код-стайл

Ну линтеры конечно у нас настроены и это очень помогает. [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@from\_anywhere](https://twitter.com/from_anywhere "Иван Метелёв"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") часто ревьюиться самому, ревьюиться перекрестно

RT [@naorunaoru](https://twitter.com/naorunaoru "рома"): [@from\_anywhere](https://twitter.com/from_anywhere "Иван Метелёв") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") перекрестный code review: [mgoblog.com/sites/mgoblog.…](http://t.co/rqRC5qLtsf "http://mgoblog.com/sites/mgoblog.com/files/ncaa-dogs.gif")

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а кто мешает на объекте объявить toJSON метод? или я не правильно понял

toJSON окей, а как from? [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod")

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") смотреть не на код, а на логику. “Здесь ты делаешь лишнюю работу” “А ты учел то-то?” “а у нас есть такой-то AP…

Тут много кто ответил про JSON. Я не говорю что нет решений, я говорю что надо делать решение. Схема, кастамная десереиализация.

Просто json не решает этой задачи. Надо писать свою сериатлизацию на основе json, json просто так это не решит.

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так всегда придется же, если ты хочешь скрыть какие то поля или раскрыть только какието поля, ну

В этом и поинт, стоит ли городить такое решение или просто перейти на транспорт со схемой? [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod")

RT [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev"): Думается мне, что [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") агитирует за JSON+Схема+Транспорт только для того, чтобы потом заявить, что и это решение говн…

## Пятница <small>207 твитов</small>

RT [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда"): Давайте поговорим о дискриминации. [m.geektimes.ru/post/259762/](http://t.co/reJypOKSfj "http://m.geektimes.ru/post/259762/") Знаете красивых девушек программистов?

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда") Да. Только большинство во фронте. Бэк так жесток, что не каждая девушка выдержит его.

Фронтендеры, эти смешные бакендеры считают свою профессию сложнее :D [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда")

Кстати такие заявления и есть дискриминация. "Фронтенд простой, это женское дело, настоящие мужики пилят бэк." [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мой вопрос почему-то игнорируют. Но реально же в Европе девушек-фронтендеров мало, а бекендеры есть [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда")

RT [@markbaraban](https://twitter.com/markbaraban "Mark"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда") Яков Файн утверждал что бэк может каждый,  а красивый фронт в эру балованых юзеров …

Вообще я такого не замечал. Хотя бы тут знаю примерно поровну фронт и бэк. [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда")

RT [@skygrach](https://twitter.com/skygrach "Семён Грачёв"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") некоторые компании думают, что место женщины — под столом [pic.twitter.com/ObxspcSeYb](http://t.co/ObxspcSeYb)

"В индустрии нет сексизма! Женщины сами уходят потому что им неитересно!" [@skygrach](https://twitter.com/skygrach "Семён Грачёв")

RT [@ilavriv](https://twitter.com/ilavriv "ilavriv"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") співбесідував веб девів для однієї компанії у львові , рекрутер попереджала, що їхні деви не дуже добрі…

RT [@tishkova](https://twitter.com/tishkova "Maria Tishkova"): [@skygrach](https://twitter.com/skygrach "Семён Грачёв") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я наивна или такой рекрутинг должен был как минимум вызвать некий резонанс? гугл ничего на …

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это русскоязычная реклама. Я не думаю, что они 100% вызывают резонанс.

Было бы на западе - вызвало бы. В России сексизм и вообще -изм это норма. [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв")

RT [@tishkova](https://twitter.com/tishkova "Maria Tishkova"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Варя, но это же пиздец! У нас бы их уже линчевали в прессе

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@olyapka](https://twitter.com/olyapka "olyapka") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Шок? На моей 1й работе у начальника на столе был вибратор, который угрожалось "при…

WTF. [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@olyapka](https://twitter.com/olyapka "olyapka") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@olyapka](https://twitter.com/olyapka "olyapka") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") Серьёзно! Это был сайт Photofile.ru Это была 1я работа, я думала что везде так и ч…

Тоооооолсто :\) [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик")

С такими историями в русском IT, я не удивлен что местные порывы боротся с неявным сексизмом вызывают удивление. Явный бы побороть %\)

RT [@skygrach](https://twitter.com/skygrach "Семён Грачёв"): [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это норма. на фб больше 100 расшариваний и НИКТО не обратил на это внимания [facebook.com/photo.php?fbid…](https://t.co/WA6nz8GD2R "https://www.facebook.com/photo.php?fbid=10200899573969802&set=a.1535737771572.47298.1778684198&type=1&permPage=1")

Да какое побороть - признать что есть проблема, хотя бы.

RT [@nimnull](https://twitter.com/nimnull "Yehor Nazarkin"): [@ilavriv](https://twitter.com/ilavriv "ilavriv") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") в былые времена у меня работали 3 девушки программиста \(Бэк, фронт, фуллстек\) все было супер

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Ну не стоит всё загонять под одну гребёнку. Это же Авиасейлз: их кредо — эпатаж [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв")

Это не оправдание. Не вижу массового осуждения, наоборот как будто "хорошая шутка". [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") между эпатажем и обычным мудачеством очень тонкая грань и они её н…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") Так о том и речь: они пошлют. А хотелось бы, чтобы их все послали.

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Ну достаточно публично отказаться от их продуктов. Я никогда их сервисом не пользовался. [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@tishkova](https://twitter.com/tishkova "Maria Tishkova")[@skygrach](https://twitter.com/skygrach "Семён Грачёв")

Ты молодец, а мне в ответы шлют что проблемы нет. [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв")

RT [@verkholantsev](https://twitter.com/verkholantsev "billy shears"): Какой же занудный на этой неделе [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"). Прямо на зубах скрипит.

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда") классно шутка зацепила :\) Был как-то на перловой конфе - 2 девушки. Был на фронтовой: ~40%.

Тут вопрос в чем причина - в том что девушки не любят бэканд или конференции полные бэкандеров :\) [@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда")

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@verkholantsev](https://twitter.com/verkholantsev "billy shears") а по-моему один из лучших so far [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@verkholantsev](https://twitter.com/verkholantsev "billy shears"): [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Эта отвратительная тема гендерной дифференциации разработчиков, этот флейм не по делу — фу.

Я говорю о том что мне интересно. Технические топики были всю неделю, пора поговорить о не-технической части. [@verkholantsev](https://twitter.com/verkholantsev "billy shears") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

RT [@verkholantsev](https://twitter.com/verkholantsev "billy shears"): [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Потому что в профессии важны профессиональные качества, а не гендерные.

А кто тут говорит обратное? Проблема именно в том что наличия яиц в индустрии бывает важнее проф качеств. [@verkholantsev](https://twitter.com/verkholantsev "billy shears") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") гендерную политику компании определяет руководитель, а не разработчики, тут индустрия ни при чем  [@verkholantsev](https://twitter.com/verkholantsev "billy shears")[@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

Разработчики могут голосовать ногами. Мы таки не на заводах работаем чтобы выбора не было. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@verkholantsev](https://twitter.com/verkholantsev "billy shears") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

Я бы не пошел в компанию с такими руководителями. Если человек сексист то он 90% и в остальном говно. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@verkholantsev](https://twitter.com/verkholantsev "billy shears") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") где вы видели, чтобы люди уходили с работы, только потому, что рядом работает человек другого пола? [@verkholantsev](https://twitter.com/verkholantsev "billy shears")[@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

Я имею ввиду обратную ситуацию. Не идит работать в [@aviasales](https://twitter.com/aviasales "Aviasales.ru") и подобные гадюшники. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@verkholantsev](https://twitter.com/verkholantsev "billy shears") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда") а также на днях случилось очень крутое, «Правила поведения на конференциях» были переведёны на русский http:[ru.confcodeofconduct.com](http://t.co/cxMcTEKfB0 "http://ru.confcodeofconduct.com/")

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") насчет рекламы в [@aviasales](https://twitter.com/aviasales "Aviasales.ru") думаю, что здесь стоит применить бритву Хенлона [@verkholantsev](https://twitter.com/verkholantsev "billy shears") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

Злого умысла нет, а damage is done. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@aviasales](https://twitter.com/aviasales "Aviasales.ru") [@verkholantsev](https://twitter.com/verkholantsev "billy shears") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov")

В пятницу я таки порвал пуканы. Даже наезды на Яндекс и БЭМ не вызвали такой реакции. Надо к вечеру еще за геев выступить, для закрепления.

Чтобы люди поумнели? [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@aviasales](https://twitter.com/aviasales "Aviasales.ru")

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ДАЖЕ, Карл!

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") поверьте русскому человеку — у нас в крови не признавать ошибки, упереться рогом и доказывать свою правоту [@aviasales](https://twitter.com/aviasales "Aviasales.ru")

Да у всех это в крови. Это не значит что надо молчать и не указывать на ошибки\) [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@aviasales](https://twitter.com/aviasales "Aviasales.ru")

RT [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда коту делать нехера, он яйца вылизывает. Когда разработчик неумен, он о надуманном "сексизме" вещает …

RT [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай"): Бугага. Читайте [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"). Политика, сексизм и геи. "Все, что вы хотели знать о мире frontend"

Delicious ad hominem. [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko")

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") соглашусь. [@aviasales](https://twitter.com/aviasales "Aviasales.ru") вы не правы.

RT [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") любой, поющий про сексизм может сходить в ЛЮБУЮ картинную галерею и найти хотя бы 10 художников-женщин. Об…

Самое лучшее выходит из людей. Все женщины в роддом. [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko")

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") нет там сексизма, вы чего, в Таиланде местные шлюхи сами такое предлагают за 50…

Sexism 0.0 [imfdb.org/images/thumb/b…](http://t.co/41Q9rNduBY "http://www.imfdb.org/images/thumb/b/bc/T2_1501.jpg/600px-T2_1501.jpg") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): Буду теперь на сайте [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") почитывать эту неделю, когда накатит настроение "А не вернуться ли в Россию?"

RT [@lambdadmitry](https://twitter.com/lambdadmitry "Ополченец Назир"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@tishkova](https://twitter.com/tishkova "Maria Tishkova") [@skygrach](https://twitter.com/skygrach "Семён Грачёв") мудаки шлют. Спасибо за поднятую тему.

RT [@lambdadmitry](https://twitter.com/lambdadmitry "Ополченец Назир"): [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") бггг, кажется, тут кто-то не различает корреляцию и причинность. А ещё там нет картин африка…

RT [@lambdadmitry](https://twitter.com/lambdadmitry "Ополченец Назир"): [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") …наверное, потому, что эти чёртовы чёрные все тупые, да? Или всё-таки есть какие-то социальн…

RT [@lambdadmitry](https://twitter.com/lambdadmitry "Ополченец Назир"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот ещё норм тема для вброса, ящетаю [twitter.com/lambdadmitry/s…](https://t.co/h3fsxov2fF "https://twitter.com/lambdadmitry/status/624269976019554304")

И правда, давайте переведем тему. [@lambdadmitry](https://twitter.com/lambdadmitry "Ополченец Назир")

RT [@SelenIT2](https://twitter.com/SelenIT2 "SelenIT"): [@lambdadmitry](https://twitter.com/lambdadmitry "Ополченец Назир") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а в чем именно?

Стараются удерживать рост зарплат. Самый простой способ получить больше денег - уйти на другую работу. [@SelenIT2](https://twitter.com/SelenIT2 "SelenIT") [@lambdadmitry](https://twitter.com/lambdadmitry "Ополченец Назир")

Вообще про зп, большая проблема что они сильно зависят от того как хорошо человек выбивает себе зарплату на интервью.

Поэтому я за четкие формулы по которым высчитывают эти зарплаты и за то чтобы все зарплаты в фирме были публичными.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это связано с тем, что большинство разработчиков - интроверты и им мирские радости не очень интересны \)

Это не повод этим пользоватся для экономии\) В итоге все разузнают зп друг и друга и будет грустно. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Статья про формулы для зп  
[open.bufferapp.com/introducing-op…](https://t.co/UsOaKb7AIl "https://open.bufferapp.com/introducing-open-salaries-at-buffer-including-our-transparent-formula-and-all-individual-salaries/")

Buffer вообще дальше идут, у них все публично даже наружу, не только внутри компании.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") никто и не говорит, что это хорошо. Просто в процессе участвуют 2 стороны и надо учитывать их особенности \)

Ну со стороны нанимателя там будет какой-нибудь CEO или HR, у них преимущество над интровертным программистом.[@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не знаю, мне никогда не было особо интересно, кто сколько получает. Мне достаточно средней цифры.

Тебе будет приятно узнать, что твой коллега с такой же должностью и опытом получает сильно больше тебя? [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Может казатся что я борюсь за права программиста, но at the end начальству выгодно чтобы люди были счастливы и не уходили из компании.

В долгой перспективе наябывать своих сотрудников вредно для компании. Прозрачность - один из способов не наябывать сотрудников.

Причем я не говорю что начальство \*хочет\* наебать программистов. Начальство может просто не понимать, что оно делает чтото плохое.

Я был в двух VC-backed стартапах, в обоих начальство вызывало своими действиями много фрустрации у сотрудников. Всё с лучшими побуждениями.

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") я работаю у вас уже год, отлично справляюсь, профессионально росту, считаю что достоин большей зарплаты [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")[@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Для многих это большой стресс, по разным причинам. Когда все изначально честно - все намного проще. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") спорный тезис. есть долгоживущие конторы, которые живут на дешевых уходящих студентах. есть начальники, боящиеся п…

Наверно всё это скорее о стартапах, чем о любой компании. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin")

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что такое «честно»? \)\)  [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Прозрачно, по формуле которую все знают и с которой все согласно. Без сделок за спиной. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") в стартапах нужно давать опцион

Вот меня \(и коллег\) дважды с ним практически наебали. Отлично мотивирует. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin")

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и как рассчитать формулу? По количеству коммитов за единицу времени? Это уже проходили в Индии \)\)\) [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") @[@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Смотри пример в статье раньше в истории. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

То есть с опционами такая же проблема как с зп. Должно быть честно и прозрачно. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@roman01la](https://twitter.com/roman01la "Roman Liutikov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") самое крутое нанимать людей на больше денег чем ты получаешь

RT [@Seleckis](https://twitter.com/Seleckis "Seleckis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") все равно тут тоже играет не всегда объективный человеческий фактор [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Конечно. Но лучше убрать его хотя бы на какую то часть, чем 100% рассчитывать на него. [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Должно ли выражаться в зарплате культурное совпадение? То есть банальное "более приятный человек". На бизнес эт…

Культурное совпадение это вообще хорошая тема. Что лучше, компания похожих друзей или лучше разные люди? [@toivonens](https://twitter.com/toivonens "var ya; // ru")

Считаем что все профи и не настолько различные чтобы постоянно сраться. [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") короче, я считаю, что зарплата должна быть достаточной, чтобы разработчик о ней не думал.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Все равно ситуация со временем будет меняться, тут формулы не выведешь, только индивидуальный подход.

Я и не говорил что это просто. Это сложно и об этом надо думать а не давать это на откуп в hr. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Для стартапов это ИМХО важно. Там нужна мотивация для того чтобы все навалились и быстренько сделали.

Некоторые говорят что diversity типа не даёт стартапу застрять на одних идеях. [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") я работал в компании, где у всех разработчиков одного грейда плюс-минус одинаково. Это плохо …

Почему? [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") она еще и была низкая, а если хочешь больше - повышай грейд, что невозможно не поработав пару…

Проблема тут что она была низкая  а не одинаковая. [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@Seleckis](https://twitter.com/Seleckis "Seleckis") и таки да, если у вас будет супер-пупер формула, она будет всячески убивать креатив

Ну это какой-то очень притяннутый вывод. Формула для зп убивает креативность? [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@Seleckis](https://twitter.com/Seleckis "Seleckis")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@Seleckis](https://twitter.com/Seleckis "Seleckis") именно, потому что все будут дро\*\*ть на эту формулу, вместо того, чтобы создавать добавочную …

Ты слишком плохо думаешь о людях :\) Наоборот не будут грузится что зп меньше коллеги. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") [@Seleckis](https://twitter.com/Seleckis "Seleckis")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это хорошая практика, но её внедрение даже на старте существования компании требует определённых усилий со сторо…

Конечно. Но помоему оно стоит того. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а перевести на такие рельсы компанию с большим количеством работников и длинной историей может оказаться непосил…

Да, о таком надо думать заранее. Многие основатели компаний вообще не думают о таких вещах и потом начинаются проблемы. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если сразу об этом задуматься и нанять толкового HR, который всю эту схему сможет разработать, а она чертовски н…

И разработать это только одна часть, оценивать людей по этой формуле ещё сложнее. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

RT [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin"): [@suxxes](https://twitter.com/suxxes "Father Frodo") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") в России опционы напрямую запрещены ТК, а судиться в Делавере и британских юрисдикциях не каждый де…

Очень интересно. Почему запрещены? [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@suxxes](https://twitter.com/suxxes "Father Frodo") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот оценка, в этом контексте, мне видится наиболее сложной частью. потому что открыть зарплаты дело-то нехитрое

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") то есть система оценки должна быть при этом относительно простой, чтобы люди её понимали и в ней не было бы тёмн…

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Потому что нет регулирующих эти понятия законов. По сути понятие опционов просто не работает в России. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Ну нет понятия это разве нелегально? [@suxxes](https://twitter.com/suxxes "Father Frodo") [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну, ОК, мы неверно выразились. Это не нелегально, а не работает и в суд с договором не пойдешь. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И по большей степени все обещания опционов, даже документально подтвержденные — это вопрос доверия. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Имхо все что связано с деньгами должно быть на бумаге. [@suxxes](https://twitter.com/suxxes "Father Frodo") [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@suxxes](https://twitter.com/suxxes "Father Frodo") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") РВК и ФРИИ рассказывали, непрямую слова опционы нет, но попадает под то, как платить работникам ТК …

В Финл опционы это не оплата пока ты их не реализовал. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@suxxes](https://twitter.com/suxxes "Father Frodo") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Реализовал в смысле выкупил, а не vest. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@suxxes](https://twitter.com/suxxes "Father Frodo") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Опцион — это не деньги, а обещание возможности покупки. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Это вознаграждение. [@suxxes](https://twitter.com/suxxes "Father Frodo") [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Опционы и акции с вестингом — суть разные вещи. [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Я знаю, говорим про опционы. stock options [@suxxes](https://twitter.com/suxxes "Father Frodo") [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@Seleckis](https://twitter.com/Seleckis "Seleckis") [@PaulColomiets](https://twitter.com/PaulColomiets "PaulColomiets") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") или когда оборот у компании 1,5 млрд, а зарплатный фонд 50 млн на 1К сотрудник…

Кстати про stock options, по-моему многие переоценивают их и соглашаются на слишком большое понижение зп.

At the end, это лотерея и тебе просто дается возможность в будущем купить лотерейный билет. Даже не сам билет, просто возможность, Карл!

А при покупке этого билета за тобой еще и налоговая придет, кстати.

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот мне это всегда казалось больше инструментом привязать работника к компании, чем каким-то поощрением.

Да, конечно. Я про то что обладатели оных придает им слишком большую цену, неоправданно большую. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну всем хочется верить, что выстрелит и что всё не напрасно\)

Sunk costs fallacy и все такое :\) [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

Мне теперь немного стыдно, что я разжег такой срач про сексизм. Это важная тема и я рад что поднял ее, но троллить стоило меньше.

Поговорим про менеджеров. Я нахожу модель которая \(была?\) в Гитхабе и есть в Valve очень привлекательной, то есть когда менеджеров нет.

Гитхаб - [zachholman.com/posts/how-gith…](http://t.co/nSO2QEycHE "http://zachholman.com/posts/how-github-works/")

Valve  
[valvesoftware.com/company/Valve\_…](http://t.co/XJ8YMxynJ2 "http://www.valvesoftware.com/company/Valve_Handbook_LowRes.pdf")

Идея в том что если вы набрали себе команду талантливых, амбициозных и мотивированных людей, то ставить над ними менеджера контрпродуктивно.

Даже цель им можно не ставить - они талантливые, амбиционзные и мотивированные, они  придумают что надо сделать чтобы компании стало лучше.

Кто-то говорит что программисты аутисты для которых нужен переводчик, чтобы они поняли что клиентам надо.

По-моему проблема именно в том, что программисты не могут нормально общатся с клиентов или кастомером из-за менеджера.

RT [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") цель разговора с клиентом не нормально поговорить, а продать услугу. :\)

Считай что продажа уже была совешенна и надо сделать клиенту хорошо. [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

Особенно хорошо такая модель работает в компаниях которые делают продукты, а не в консалтинге, конечно. Поэтому гитхаб и валв так хороши.

RT [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") с другой стороны, клиент деньги отдает за конечный продукт и только тогда процесс купли-продажи считается …

Ну это если продукт в коробке. Хорошие консультанты после заключения контракта стараются понять что клиенту надо. [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

RT [@al\_yolkin](https://twitter.com/al_yolkin "Herr Elkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если клиенту дать прямой доступ к программеру, то программер толькл на него и будет работать, а убытки на вас л…

Билишь по часам и все ок. :\) @al\_yolkin

RT @al\_yolkin: [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") обячно оплата оговаривается заранее, поэтому не получится так

В Финл почти всегда консалтинг по часам/дням/неделям. [@al\_yolkin](https://twitter.com/al_yolkin "Herr Elkin")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если над проектом работает больше одного человека, кто-то один должен поговорить с клиентом и объяснить остальны…

Или все могут поговорить с клиентом и реально понять что надо. А то будет сломанный телефон и проваленный проект :\) [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

Мы уходим от темы, зря я сюда конслатинг добавил. Компании с продуктами намного интереснее, тк они продают продукт а не продаются клиенту.

Конслатинг, оговорка по фройду. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") по сути менеджер должен выяснить бизнес-цели клиента и превратить их в конкретные задачи для разработчиков.

Мне кажется менеджер всегда либо поймет либо передаст неправильно. Ну или хотя бы шанс этого выше. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

RT [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") маркетинговые исследования ведутся параллельно с разработкой продуктов и каждый клиент для них - статистич…

RT [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тут Valve например не очень хороший пример компании без менеджеров, потому что они работают с конкретной а…

Что мешает другим компания вести исследования и знать свою клиентскую базу? [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R") так все все знают, но не считают важным, доносить до тех, кто непосредственно занимается продуктом.

Ну вот от этого же мы и can't have nice things. Опять отсутствие прозрачности. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

Опять же оба стартапа развалились из-за того что до тех команды не то доносили что надо кастомерам. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R") "оба стартапа" - это какие?

Вообще оба живые, но ИМХО потенциала не достигли. [hdmessaging.com](http://t.co/UbXyz3ijRv "http://hdmessaging.com/") [zenrobotics.com](http://t.co/xDuPeVfOli "http://zenrobotics.com/") [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

ZR еще может и достигнет, HDm продан бездушной корпорации \) [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") под целью, я имею ввиду именно “бизнес-цель”. Она должна держаться у всех в голове, а не методы достижения

Вот да, каждый в компании должен понимать что и зачем они делают как компания. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler")

Большая дискуссия про ТЗ в ответах. Ни разу не видел ТЗ который бы не устаревал дольше чем за неделю разработки.

RT [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") проблема подобных проектов в том, что аудитория слишком широкая, настолько, что достигает пределов …

Нет проектов для всех, это эго говорит когда продукт для всех :\) [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

У всего должен быть target audience. [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это какие-то неправильные менеджеры и они делают неправильные ТЗ

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  это просто глупо, хотя бы потому что так менеджер делает больше \(ненужной\) работы и несёт больше ответст…

Ну глупо, но происходит же такое постоянно. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Это тебе похоже очень везло с менеджерами\) [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Еще я очень не люблю митинги. 99% митингов имеют слишком много участников, лог в них ведется лажово и говорит в них один человек.

А не работают при них все участники. Надо старатся быть асинхронным и не думать что твоя проблема такая сложная что ее не решить имейлом.

Зато в больших корпорация митинги позволяют бесполезному народу чувствовать себя полезным. Весь день занят на митингах, значит нужен.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ага, у нас как-то была проблема с перенасыщением митингами. Ну и что - провели митинг об оптимизации митингов :…

Вот вроде dilbert-esque ситуация, но как-то скорее грустно, чем смешно, тк это реальность \) [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan")

RT [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") рассуждениям о корпоративных культурах можно было бы выделить отдельный день.

Я и собирался, срач про сексизм был спонтанным. [@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как и гуманность. В большинстве крупных компаний построена система, в которой не выгодно быть инициативным

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну мне кажется, в таких менеджерских проблемах больше глупости, чем какого-то злого умысла

Но это же не делает проблему которую они создают меньше. [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@twokul](https://twitter.com/twokul "Alex Navasardyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мы начали с no-meetings-Wednesdays, а потом это распространилось на каждый день. часто все вопросы через чат решаю…

Несмотря на всю дикую активность в твиттере, неделя выдалась очень продуктивной. Надо наверно начать тоже активно вести :\)

Надеюсь вам я тоже поднял продуктивность, а не убил её :\)

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вечер пятницы, а ты уже больше всех наотвечал и стремишься взять ачивку «больше всего написал» =\) https://t.co[jsunderhood.ru/stats/](https://t.co/NmJm8oXNmI "https://jsunderhood.ru/stats/")

Рекорды [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") мне не побить :\) [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") мне пришлось замьютить на час [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), слишком много :\)

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") их легко побить - я там на выходные пропал из-за конфы. Плюс энгейджмент сильнее сейчас, тк аудито…

Но по ретвитам у тебя больше engagement, мне больше отвечают. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") неужели даже взорванные пуканы не помогли?\)\)\)

Старею, слишком быстро остыл и стало стыдно :\) [@ZhivotvorevNik](https://twitter.com/ZhivotvorevNik "Животворев Николай") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")

RT [@Spellful](https://twitter.com/Spellful "Соколов Виталий"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") правда, есть проблема. Программист не выдержит понтов клиента и выругаться на него, тогда клиент канет в лету с …

Опять программисты аутисты у вас :\) Почему менеджер выдержит а программист нет? [@Spellful](https://twitter.com/Spellful "Соколов Виталий")

RT [@likhter](https://twitter.com/likhter "Konstantin Likhter"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@Spellful](https://twitter.com/Spellful "Соколов Виталий") потому же, почему программист пишет код, а менеджер нет

Я считаю в консалтинге программист должен уметь работать с клиентами. В продукт компании он должен уметь их понимать. [@likhter](https://twitter.com/likhter "Konstantin Likhter") [@Spellful](https://twitter.com/Spellful "Соколов Виталий")

В просто коде нет никакой ценности, он должен решать задачу. Чтобы понять задачу надо уметь общаться с люди. [@likhter](https://twitter.com/likhter "Konstantin Likhter") [@Spellful](https://twitter.com/Spellful "Соколов Виталий")

RT [@likhter](https://twitter.com/likhter "Konstantin Likhter"): Всё-таки [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") "прекрасен": как только человек до туда добирается, так становится единственным-человеком-с-правильным-м…

## Суббота <small>69 твитов</small>

Суббота, поговорим про опен сорс. Делает ли ваша компания опен сорс? Какое отношение начальства? Кидайте ссылки на oss вашей фирмы.

Друг работал в компании где полагалось во внерабочее время контрибьютить в их опен сорс проекты.

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") На всех работах было отрицательное. Но использование по полной.

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Именно обязывали? А почему не платили тогда?

Не обязывали, но типа через peer pressure. Все контрибьютят, а ты нет. Ты разве не любишь опен сорс? [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov")

RT [@lunat1que](https://twitter.com/lunat1que "Stanislav K"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") было три разных опыта:  
- запрещали даже использование осс  
- разрешали выкладывать наработки, без офиширования  …

RT [@lunat1que](https://twitter.com/lunat1que "Stanislav K"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")   
- платили за контребьютерство в qt, но имена обскьюрили, выдавая нашу работу за кого-то другого

Последнее интересно, это как и зачем? [@lunat1que](https://twitter.com/lunat1que "Stanislav K")

RT [@dimchez](https://twitter.com/dimchez "Dmitry Demyankov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") стараемся начать выкладывать либы на GH аккаунт компании. Но наверное не столько ради опен сорса, а как часть бре…

RT [@lunat1que](https://twitter.com/lunat1que "Stanislav K"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мы работали на nokia, но не имели права об этом заявлять публично. И часто работали с новыми дистрибами qt.

RT [@lunat1que](https://twitter.com/lunat1que "Stanislav K"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") qt поддерживается Nokia, нас мотивировали вносить фиксы, но в приватный репозиторий. От туда они переносили это…

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov") неужели просто нельзя это по потребности делать? Ну типа пофиксили баг, сделали пул-реквест, чтобы патч не…

Там был консалтинг и они так репутацию крутых опен сорсеров поддерживали. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov")

Бывало ли такое что опен сорсили что нибудь из клиентского проекта при консалтинге? Как к этому относились клиенты?

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в Яндексе хорошо поощралось. на текущей работе до этого дойдут ещё не скоро – пока просто нейтральное неведение.

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") но судя по тенденциям, или запретят, или очень всё испортят. во многом тут какие-то варварские 90-е.

Тут как минимум одна компания доплачивает за работу над опен сорсом в свободное время. [futurice.com/blog/futurice-…](http://t.co/iRfpekqNHZ "http://futurice.com/blog/futurice-open-source-program-the-spice-program")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как при консалтинге можно что-то коммитить? Я, наверное, не правильно понимаю слово "консалтинг".

Пишешь проект для клиента, появляется какая-то полезная либа. Просишь клиента окей ли это опен сорснуть. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а кто-нибудь зарабатывает на своём опен сорсе? если да, то как? у меня был единичный опыт на ощутимую сумму, пр…

Тут недавно [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") собрал деньги чтобы продолжит делать open source.  Но он звезда комьюнити, сложно с нуля так же. [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") консалтинг – консультирование, а ты пишешь про контрактную работу разрабом или атусорс.

На западе консалтингом любой аутсорс/контактную работу  называют. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@AntonShevchuk](https://twitter.com/AntonShevchuk "Anton Shevchuk"): [@deepsweet](https://twitter.com/deepsweet " k i r") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") donate за тему для WordPress перевалил за 1k, это за год примерно, так что если всерьёз взяться …

RT [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@deepsweet](https://twitter.com/deepsweet " k i r") Ага, вот: [patreon.com/reactdx](https://t.co/tUDyhY8Q0M "https://www.patreon.com/reactdx"). Но конечно нужен community momentum.

Кстати до [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") мое представление о русскоязычном js комьюнити основывалось на редком чтении хабры и я долго думал что он из США.

Тк я думал что в русском комьюнити из ценного только серьёзные бородатые дядьки которые пилят БЭМ.

Потом  [@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") провел [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), потом  [@andreypopp](https://twitter.com/andreypopp "Andrey Popp"), потом [@deepsweet](https://twitter.com/deepsweet " k i r") и все стало казаться намного менее грустным.

Так что спасибо [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") за развеянье мифов о js в России.

RT [@lazeez](https://twitter.com/lazeez "Sam Faktorovich"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@redcat\_nsk](https://twitter.com/redcat_nsk "Red Cat") и еще есть конторы, которые премируют сотрудников, если те преподают айтишные дисциплины в университет…

Это частая практика? У нас в универах так просто не берут преподавать. [@lazeez](https://twitter.com/lazeez "Sam Faktorovich") [@redcat\_nsk](https://twitter.com/redcat_nsk "Red Cat")

RT [@lazeez](https://twitter.com/lazeez "Sam Faktorovich"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@redcat\_nsk](https://twitter.com/redcat_nsk "Red Cat") за все российские вузы не скажу, в Новосибирске пойти преподавать может практически каждый желающий

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@likhter](https://twitter.com/likhter "Konstantin Likhter") но в этом же и есть самый кайф, разве нет? [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Поговорим о плюшках которые вам даёт работодатель помимо зарплаты и акций/опций. Есть ли у вас крутые плюшки, а какие вы бы хотели?

В Финляндии с этом есть некие проблемы, налоговая старается считать это доходом, все компании делают только то что налоговая ещё позволяет.

В это входит обычно оплата телефона и домашнего интернета, медицинская страховка \(без стоматологии\). Бесплатные обеды уже нельзя.

Правда покупать еду в офис можно, но так мало кто делает. Кстати про еду/колу/пиво в офисе, вы за или против?

Не является ли кейтеринг в офис тайным заговором чтобы все подольше сидели в офисе?

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") для меня самое важное — возможность работать вне офиса, то есть постоянно путешествовать

Надо будет завтра про удаленную работу поговорить. [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник")

RT [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") +1 за пиво и еду, приближенную к здоровой.

Не плохо ли это, что люди после работы остаются ещё и пить на работе? [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky")

Компании то точно хорошо :\) Хорошо ли для человека не иметь жизни вне работы? Мне интересно это обсудить. [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky")

RT [@Borovikov](https://twitter.com/Borovikov "Денис Боровиков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") самая крутая плюшка помимо зп это свобода решений и право на ошибку.

RT [@TheSunwave](https://twitter.com/TheSunwave "Arturio"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") хотелось бы чтобы хотя бы чай с печеньками был за счёт фирмы :\(

А бывает что нет? [@TheSunwave](https://twitter.com/TheSunwave "Arturio")

RT [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а вообще, чем больше времени люди проводят в казуальном общении, тем лучше.

Для компании - лучше, однозначно. Её уверен про самих людей. [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky")

RT [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky"): [@Borovikov](https://twitter.com/Borovikov "Денис Боровиков") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") +1, добавлю еще возможность экспериментировать и ad-hoc команды

Про это вчера обсуждали :\) [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky") [@Borovikov](https://twitter.com/Borovikov "Денис Боровиков")

RT [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не хочешь, не оставайся? Тебя ж не принуждают уничтожать халявное пиво :\)

Ну вот я не останусь и получиться что я не в коллективе. Получается выдавливание непьющих или родителей. [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky")

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky") Мне везет с коллегами видимо - они важная часть моей жизни и вне работы тоже.

RT [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") чем лучше ты знаешь человека, тем меньше ты будешь с ним ссорится. Какие тут минусы для человека?

RT [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin"): [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") казуальное общение имеет тенденцию затягиваться заметно за пределы рабочего дня \(а хочется дома играть …

RT [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin"): [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") группка, которая не пьёт пиво по какой-либо причинам воспринимается немного изгоями и в остальное время

RT [@mr\_mig\_by](https://twitter.com/mr_mig_by "Alexey Migutsky"): [@mktoid](https://twitter.com/mktoid "Oleg Cheremisin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") такое нужно лечить в зародыше. Готового рецепта не дам.

Люди тут говорят что у них чай кофе и печенья не оплачиваются компанией.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я абсолютно за. Мне важна забота обо мне, как будто мама мне холодильник набила и не надо беспокоиться, я так л…

Тебя это не мотивирует остаться на работе дольше, дома же самой надо холодильник набить? [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Будет выбор - выберу офис с едой, даже если в другом месте предложат в 5 раз перекрыть её стоимость :-\)

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Дома всегда лучше, туда все равно хочется. Но на работе приятно забыть о быте. Даже о быте похода в магазин за …

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В России бесплатные обеды тоже доход. Но поскольку у всех один % налога, это не проблема. Вычитают из з/п 13% с…

С плоским налогом все проще :\) [@toivonens](https://twitter.com/toivonens "var ya; // ru")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда в офисе начинают нсть и пить уже никто не работает, так что сомневаюсь

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") муз. комната осталась в симфере — по ней скучаю, возможность вечером поиграть в офисе это бесценно. Хоть ап…

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 4х дневную рабочую неделю со свободным графиком и не более 8 рабочих часов в день.

RT [@deepwalker](https://twitter.com/deepwalker "Кривушин Михаил"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а в чем проблема сразу сделать опенсорсную либу, и заюзать в проекте клиента?

Ни в чем. Просто часто ценные вещи в процессе работы появляются. [@deepwalker](https://twitter.com/deepwalker "Кривушин Михаил")

## Воскресенье <small>99 твитов</small>

Наш последний день вместе и похоже я таки догоню [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") по общему количеству твиттов. Сегодня я хочу поговорить про удаленную работу.

Я очень за со всех точек зрения. Работодатель получает более мотивированных сотрудников и recruitment pool размером с мир, вместо города.

Работник получает возможность работать там где ему нравится, больше времени проводить с семьей и не парится по поводу похода в офис.

При этом это все требует правильной огранизации работы. Я видел как communication ломался, когда команды были не рядом.

Я видел как удаленные люди чувствовали себя не частью команды. Как до них менее быстро доносилась информация.

Как вы решаете эти проблемы с удаленными людьми? Что за инструменты можно использовать для этого?

Основатель basecamp написали хорошую книгу про удаленку. [37signals.com/remote/](http://t.co/Ez7SQPWOBa "http://37signals.com/remote/")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тема кстати, почти напрямую пересекается с open-source. Он как раз всецело про культуру удаленной работы

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а бывает наоборот, что слишком много общения и людей вокруг - мешает

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это когда культура не сложилась

Согласен. Обсуждение как именно сделать такую культуру чтобы remote работал. [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нужно как минимум заставить всех решать все рабочие моменты и вести дискуссии исключительно через онлайн средства к…

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") даже если ты сидишь в офисе рядом с тем, у кого есть ответ

Это кстати еще и продуктивность повысит - меньше interruptions, больше кода.  [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

Про communication - в принципе я видел как он не работал даже когда команд\(а/ы\) были рядом, так что дело скорее в людях а не расстоянии.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть 2 варианта: или набирать людей-носителей такой культуры или развивать ее.

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") После того, как появится эта культура, новым людям уже будет некуда деваться, придется ее принимать.

Вот вы основатель компании. Как развивать в компании ту культуру которую вы хотите? Например, культура удаленной работы.

RT [@7rulnik](https://twitter.com/7rulnik "Valentin Semirulnik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я читал, как-то все очевидно. Я ожидал что-то в духе кулсторек, а там: если работаешь удалённо, то не надо куда-т…

Да, она скорее старается убедить тех кто еще не убежден, чем показать решения. Как книги о том как бросить курить. [@7rulnik](https://twitter.com/7rulnik "Valentin Semirulnik")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") инструменты не имеют большого значения. Шарить информацию: и техническуую и продуктовую задача руководителя…

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Показывать людям приёмы, при которых они могут сделать это рабочим?

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") сложный вопрос, пока компания маленькая это работает, потом этим сложно управлять эффективно, а потом наобо…

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в яндексе есть соц сеть для этого, сильно помогала распространению информации и заодно лучшее место для сра…

Как именно решали чем надо делиться а чем нет? [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko")

Кстати опять мы упираемся в прозрачность. ИМХО в прозрачной компании, где вся информация шерится легче сделать удаленку. [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") еще если компания новая, то легко это заложить как фундамент, а если старая, где "деды воевали" ...

Я наверно больно задрачиваюсь на прозрачность, но мне кажется многие проблемы уходят если использовать ее по полной.

Плохие компании не доверяют своим сотрудникам и думают что сотрудники это шпионы, которые все выдадут врагу. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ... Где лучшие времена и решения придуманы в кухне за пивом, то такую компанию тяжело и даже вредно менять

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это может работать если изначально так было. в компании со сложной иерархией менеджеров и руководителей обычно …

Да! И по-моему многие бы хотели чтобы работало так, но поздно. Слишком мало основателей думает о том что за культуру они хотят. [@deepsweet](https://twitter.com/deepsweet " k i r")

Это все время afterthought. По-моему это должно быть одно из первых о чем ты думаешь, когда основываешь компанию. [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я вот спустя год до сих пор толком не понимаю кто мой руководитель, а кто его руководитель, а кто менеджер прое…

Чувствую в голосе нотки фруструции, похоже тебе работу пора менять. [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@deepsweet](https://twitter.com/deepsweet " k i r") многие основатели пропустили некоторые ступени на своем пути.

Ну мы прям совсем в философию уходим. :\) [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у нас 3\\4 удалённо, а 1\\4 в офисе. Топ-менеджмент в офисе.

И как работает? Что по-твоему самое важное, что помогает этому работать? [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@deepsweet](https://twitter.com/deepsweet " k i r") ну вот fb же считается идеально начинался нет? А теперь это хрен пойми что.

В чем-то у них окей, хотя бы новые интересные технологии делают постоянно. [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я собеседовался в fb и не прошёл на определённом этапе. мнение сложилось скажем так не ос…

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") по крайней мере от собеседований осталось впечатление хаотичности и несвязанности людей и…

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") может оно и начиналось как гиковый стартап, но со стороны показалось, что сейчас это боло…

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пока не закрылись, контроль для удалённых работников больший нужен.

Пока не закрылись? И как именно этот контроль происходит? [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@deepsweet](https://twitter.com/deepsweet " k i r") можно узнать, сколько компаний вы основали и как именно действовали? Насколько они были успешны…

Я основал одну и был в двух стартапах, в одном из них был в первых 10 сотрудниках. [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko") [@deepsweet](https://twitter.com/deepsweet " k i r")

Я видел как стартапы лажали и хочу не повторить их ошибок. Отстутствие прозрачности оба раза было главной лажей. [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko") [@deepsweet](https://twitter.com/deepsweet " k i r")

RT [@deepsweet](https://twitter.com/deepsweet " k i r"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") в этом плане да, спорить сложно :\) просто у меня было идеализированное представление о fb…

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") скайп\\слака, jira, почта. Митинги минимум раз в неделю на каждый проект. Контроль выполнения задач. Кнуты и п…

RT [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") отсутствие прозрачности - возможно плохо со стороны работника, однако хорошо со стороны владельца бизнеса,…

Если это ведет к тому что сотрудники теряют всю мотивацию то это не выгодно владельцу. [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko")

Так же может вести к плохому пониманию целей компании у сотрудников и в итоге выполнению не той работы. [@svenyurgensson](https://twitter.com/svenyurgensson "YuryBatenko")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что значит прозрачность?

Информация о жизни компании всегда и полно доступна всем сотрудникам. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у нас несколько работников уходило с обманом, некоторые даже имущество прихватывали.

Страсти какие. Ну с таким полиция должна разбиратся. Не могу представить ворующего программиста в Финл. [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Нет, ты правильно делаешь, что топишь за прозрачность. Прозрачность, инспекция, адаптация — столпы Скрама, например, [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Это ты меня прям изыскано опустил :\)\)\)\) [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov")

Это я к тому что Скрам для меня скорее ругательное слово, я ни разу не видел хороший Скрам. Хороший Скрам это как единорог. [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov")

Но я не спорю что да, многие вещи которые я говорю можно назвать agile. Просто я очень хотел НЕ говорить это слово :\) [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov")

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") У нас Asana \(полная лажа, но тяжело пока поменять\), Skype и Slack. Skype для митингов, Slack для ежедневного общен…

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Хороший Скрам — это работающий Скрам. Если ты видел плохие примеры, это скорее говорит о реализации, а не о самом фреймв[@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Вот многие мне так говорили, но я не поверю пока не попаду в работащий Скрам. [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): А зря! Есть Манифест Аджайла, есть Скрамгайд — в них написаны основы [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") +100500. Чертовы “эффективные менеджеры” давно приватизировали и извратили методологию \)

RT [@\_\_fro](https://twitter.com/__fro "Alexey Frolov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") удивительно, как непрофессионалы, подкупающие бизнес своей лояльностью повсюду гадят \(

Я не спорю. Просто за годы была так извращена сама идея agile, что сейчас это скорее способ биллить за час, чем методология. [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Никто вас не будет заставлять строить Скрам, если у вас всё работает. Мне же хочется предсказуемости, [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в работе удаленщика большую роль играет разница в часовых поясах. Если разница более 4х часов очень сложно взаим…

Когда у нас был HQ в США, а девы в Финляндии, была большая проблема когда последния инфа от клиента из Филлипин приходила долго. [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

Вообще good point. Как работать с сильно разными часовыми поясами? [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): О, сколько раз мне говорили, что у них Скрам, но по факту оказывалось, что это обычный водопад с итерациями! [@\_\_fro](https://twitter.com/__fro "Alexey Frolov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

У нас это называют жопа Скрама aka "scrum, but". [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@\_\_fro](https://twitter.com/__fro "Alexey Frolov")

RT [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в тяжелых случаях спасают только командировки. А так, только планирование и грамотное разделение обязанностей.

Разделение обязанностей - как это делать? Организовывать по командам в часовых поясах? Или достаточно чтобы все знали что дальше? [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): У нас тестиривщица была в Канаде. Днём мы делали фичи, ночью она их тестировала. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

Вот веселье наверно было с ответами "can not reproduce". [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Таких отписок мы себе не позволяли, а QA подробно документировала баги — у нас был работающий Скрам :\) [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это был менеджер, исчез на 2 недели, а потом оказался в игровой компании.

В полицию сдали или так все отдал? [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Но всё равно было окно в пару часов, когда мы синхронизировались. Без этого совсем сложно [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

Вот и мне кажется что какой-нибудь overlap должен быть. Даже в oss, нам отсюда сложно работать с ФБ graphql девами.[@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): Да. Был ещё опыт с фронтендером в Беркли. Он ночью подключался к нашим утренним стендапам, [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@esergeev](https://twitter.com/esergeev "Evgeniy Sergeev")

RT [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov"): И с 12 принципами гибкой разработки: [agilemanifesto.org/principles.html](http://t.co/7PmuAPn3pt "http://agilemanifesto.org/principles.html"). А в каком виде: Скрама, Лина, Канбана — вопрос менее важный[@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Раз уж мы начали про agile - идеи в Канбане мне нравятся больше чем идеи в Скраме. По-моему короткие итерации это стрессовово и тяжело.

К тому же они заставляют держать скоуп маленьким, что не всегда возможно. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Ограничением же паралеллизма канбан добивается таких хороших вещей, как более быстрые ревью/тесты, быстрый деплой и тд. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Тк свой ревью/деплой не получишь пока не поможешь соседу. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@gruz0](https://twitter.com/gruz0 "Alexander Gruzov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@deepsweet](https://twitter.com/deepsweet " k i r") мы вот это используем: sococo.ru уже полтора года.

RT [@lunat1que](https://twitter.com/lunat1que "Stanislav K"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") over-communication is the key! использовать таск менеджер по максимуму, меньше пользоваться мэилом, меньше мити…

RT [@Timrael](https://twitter.com/Timrael "Timur Kozmenko"): [@ilnurkhalilov](https://twitter.com/ilnurkhalilov "Ilnur Khalilov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") внедрили скрам, отказались от него и за год, фича за фичой вернули его обратно. Поняли необходимос…

Вот и подошла к концу наша с вами неделя. Сделаю небольшой рекап.

В понедельник мы обсуждали GraphQL и как он заменит REST api.  Мы также обсудили попутные технологии типа Relay и React.

Во вторник я рассказал про мою нелюбовь к ангулару, в среду мы говорили про Финляндию и Webpack.

В четверг про grunt, gulp, npm scripts. В пятницу у нас был разговор про сексизм и про ведение бизнеса.

В субботу мы поговорили про бонусы в компании и менеджмент и наконец сегодня про удаленную работу и немного agile.

С вами был [@freiksenet](https://twitter.com/freiksenet "freiksenet"). Спасибо за то что с вами было интересно спорить.

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
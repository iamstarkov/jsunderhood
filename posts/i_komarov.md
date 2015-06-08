# i_komarov

_05 июня 2015_

## Понедельник <small>53 твита</small>

Привет. Я <a href="https://twitter.com/i_komarov" title="Ivan Komarov">@i_komarov</a>, и эта неделя для <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> будет экспериментальной, потому что я не имею отношения ни к JS, ни к фронтенду вообще.

Я работаю в Яндексе C++-разработчиком; сначала разрабатывал веб-поиск, потом перешёл в Яндекс.Маркет. «Бекендер», в общем.

Могу поддержать разговор на такие темы: алгоритмы, оптимизация производительности, ЯП типа C++ или Rust, тестирование…

…собеседование разработчиков, немножко машинное обучение (в нём я не большой специалист, но сталкиваться приходилось).

Буду рад любым вопросам, потому что пока совершенно не представляю, что из этих тем интересно фронтенд-сообществу.

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> давай собеседования, оптимизация, тестирование

Окей, про собеседования: ИМХО, процесс собеседования в большинстве компаний — это ад, и вот почему: <a href="http://t.co/dDRifnr8Fg">sockpuppet.org/blog/2015/03/0…</a>

TL;DR Чтобы набирать хороших людей, нужны work-sample tests, но их почти никто не делает.

Вообще, в этом посте много хороших наблюдений, но про work-sample tests — на мой взгляд, ключевое.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> расскажи, что в Яндексе пишут на c++ и зачем.

На C++ пишут почти всё высоконагруженное. Поиск, Карты, Маркет и т. д. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

Зачем: во-первых, есть большая существующая кодовая база, во-вторых, при всех недостатках C++ для этой ниши он вполне ок. <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Rust + JS. какие мысли на эту тему?)

Не могу придумать осмысленный способ скомбинировать Rust и JS, если честно. :) <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>

Про оптимизацию у меня у самого вопрос: как фронтендеры профилируют программы, учитывая зоопарк браузеров/VM для JS? Всегда было интересно.

RT <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a> да легко. Нативные аддоны для Node на растении писать

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> аддоны на rust вместо c/c++ к nodejs, я думаю. servo же тоже как то инерпретирует js.

RT <a href="https://twitter.com/ALF_er" title="Illia Segeda">@ALF_er</a>: <a href="https://twitter.com/listochkin" title="Андрей Листочкин">@listochkin</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a> почему не писать их на С/С++?

Предлагают писать аддоны к node.js на Rust. Мне кажется, вполне годная идея, и не удивлюсь, если кто-то уже такое пробовал.

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а на сколько ты погружался в rust? я имею в виду по работе, или какие то pet-side проекты

По работе не погружался, написал небольшой pet project после выхода 1.0 (маршрутизатор для соревнований вроде Бегущего Города). <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>

RT <a href="https://twitter.com/dosyara" title="Sergey Maksimov">@dosyara</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Что, по-твоему, должен знать и уметь хороший фронтенд разработчик? Правда ли, что верстальщикам нельзя доверить с…

Я, если честно, не видел примеров, когда верстальщик что-то бы делал для server side, поэтому судить сложно. <a href="https://twitter.com/dosyara" title="Sergey Maksimov">@dosyara</a>

Про «что должен знать и уметь» — мне своей колокольни кажется, что должен понимать, как работает сетевой стек, от уровня IP и выше. <a href="https://twitter.com/dosyara" title="Sergey Maksimov">@dosyara</a>

RT <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я слышал у вас в <a href="https://twitter.com/yandex" title="Яндекс">@yandex</a> стили пишут на Stylus. Если ты можешь, то ответь почему не <a href="https://twitter.com/SassCSS" title="Sass">@SassCSS</a> . Есть ли какие-…

Вроде как сильно зависит от команды. Где-то вообще никаких препроцессоров не используют (в Маркете, например). <a href="https://twitter.com/denysdovhan" title="Denys Dovhan">@denysdovhan</a>

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я обычно профилирую в Хроме и/или Файрфоксе, надеясь, что в остальных всё будет похоже. Но я не профессионал в эт…

RT <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> боттлнеки профилируют. Как правило стараются делать архитектуру чтоб не тормозило. Типа как в Реакте

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> скорость работы функции не тяжело померить и даже мониторинг повесить, даже запускать в браузере

RT <a href="https://twitter.com/yuritkachenko" title="Yuri Tkachenko">@yuritkachenko</a>: <a href="https://twitter.com/edjafarov" title="Eldar Djafarov ッ">@edjafarov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> но ботлнек обычно это рендеринг, если мы про браузеры, есть ряд best practices и вообще это цела…

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> что думаешь о расте? видишь ли в нем будущее (убийцу с++ лол) и что на нем пишут в ya?

Rust вполне может взлететь лет через 5, ИМХО. В Я. ничего не пишут на нём и вряд ли будут, мы консерваторы. <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>

<a href="http://t.co/IN5M4RgYWk">radio-t.com/p/2015/05/02/p…</a> — вот тут коллега из Я. очень хорошо про конкурентные преимущества Раста рассказывает.

Когда программа гарантированно не может засегфолтиться или обратиться к уже освобождённой памяти — это очень круто.

Некоторые говорят, что если у тебя программа падает, то ты плохой программист на C++. Но что-то вокруг меня хороших-то и нет.

RT <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> какую литературу посоветуешь почитать по тестированию? интересуют не конкретные инструменты, а скорее идеология...

<a href="http://t.co/8XrrOD2nk5">shop.oreilly.com/product/978059…</a> — про тестирование мне вот эта книжка нравится. <a href="https://twitter.com/_cloudo" title="Cloudo">@_cloudo</a>

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> какие еще языки используются кроме C++, Java, Python?

Ничего особо интересно. Perl, JavaScript, где-то вроде Erlang был. <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>

RT <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Я слышал, на Я.Поиске кодят в vim-е и деплоят по ssh, то есть IDE там особо не используются. А как на других прое…

В Маркете и Поиске все изощряются кто во что горазд. Кто-то пользуется vim'ом/emacs'ом, кто-то — полноценной IDE. <a href="https://twitter.com/gxoptg_" title="Ivan Akulov">@gxoptg_</a>

Тут просят рассказать про моё увлечение биоинформатикой. Это история с грустным концом: <a href="http://t.co/1v9jX69BeM">dfyz.livejournal.com/189261.html</a>, <a href="http://t.co/VGULu4STUE">dfyz.livejournal.com/190120.html</a>

Вкратце: загорелся, прорешал 150+ задачек на (офигенном) <a href="http://t.co/7laSpRaIXr">rosalind.info</a>, но не придумал, что с этим делать дальше и куда расти.

То есть биоинформатика — это очень круто, но для человека не из отрасли не видно возможностей принести какую-то пользу.

RT <a href="https://twitter.com/two_in_one" title="Владислава Т.">@two_in_one</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> больше подробностей! Какие знания ты получил? Что нового узнал?

Много интересного узнал про структуры данных на строках (суф. деревья/массивы, FM-index и т. д.; см., например, <a href="http://t.co/lGSyUQ5qXb">csedays.ru/theory2014/tin…</a>), …

…разобрался, как устроены сырые данные у 23andme (правда, кроме того, что уже есть на их сайте, ничего полезного про свой геном не узнал), …

…приобрёл несколько полезных подписок в RSS-ридере, например homolog.us.

RT <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> есть стартапы, работающие в этой области, но их не много (

Есть, но это не совсем то. Хотелось, не меняя  работы, на досуге сделать, например, полезный патч в какой-нибудь ассемблер ДНК. <a href="https://twitter.com/oelifantiev" title="Oleg Elifantiev">@oelifantiev</a>

Вопрос: а правда, что во фронтенд-разработке повсеместно используется git? Кто-нибудь использует, скажем, hg в качестве основной VCS?

М-да, хотел набросить про то, что, ИМХО, hg логичнее и удобнее, чем git, но, судя по статистике ответов, меня просто забросают камнями.

Впрочем, моя психика непоправимо травмирована Subversion'ом, который приходится использовать на работе.

## Вторник <small>13 твитов</small>

RT <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> расскажи еще про Я. какие плюшки :) ? офис просторный? опенспейс? стулья удобные? слышал, в украине крутой офис …

Опенспейсы, но комфортные. В Мск больше места, в Екб меньше людей на единицу места. :) В Симфе, говорят, круто, но я там не был. <a href="https://twitter.com/baxxabit" title="Uladzimir Havenchyk">@baxxabit</a>

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а что скажете про Go-lang, ребята?

Я попробовал на Go что-то пописать и быстро приуныл. <a href="http://t.co/CLXmDDrcs7">yager.io/programming/go…</a> — вот тут хорошее описание проблем. <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>

Характерный пример: попробуйте отсортировать на Go массив int64. <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>

Судя по битве vim/ST/whatever, разгоревшейся в реплаях, спрашивать про тулзы опасно. Как справедливо заметили в реплаях же, ...

...чаще всего нет принципиальной разницы, что использовать, но спорить про превосходство любимого редактора/VCS/OS можно до хрипоты.

Поэтому задам более фундаментальный вопрос: как вы используете сode review? На что обращаете внимание при ревью, зачем вообще оно вам?

Я ещё не встречал двух человек, у которых взгляды на code review полностью сходились бы, поэтому интересно послушать разные мнения.

ИМХО, code review — это в первую очередь диалог «за код», а не средство отлавливать баги, как почему-то думают многие.

По опыту кажется, что code review (в отличие от тестирования) баги, кроме самых тривиальных, ловит отвратительно.

Главная польза ревью: советы вида «поговори с X, если эта фича больше не нужна, то тут можно сделать проще, а этот модуль вообще выкинуть».

Ну и в целом, всегда полезно понимать, что «ты делаешь не фигню»™. Поэтому я за code review всех коммитов, кроме «поправил опечатку в имени»

## Среда <small>30 твитов</small>

RT <a href="https://twitter.com/konenkov" title="Sergey Konenkov">@konenkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А расскажите, пожалуйста, как в яндексе мониторят сервисы?

Зависит от команды. Наши разработчики смотрят в графики на Graphite (<a href="http://t.co/xi2BlGWvqy">graphite.readthedocs.org/en/latest/over…</a>), плюс у админов (<a href="https://twitter.com/market_ops_crew" title="Админы Маркета ">@market_ops_crew</a>) свои приборы

Когда-то я научился печатать в раскладке <a href="http://t.co/VA6BpKhUf4">colemak.com</a>, и ни разу ещё об этом не пожалел. Очень рекомендую, пальцы скажут спасибо.

А кто-то использует совсем эзотерические раскладки? Скажем, <a href="http://t.co/WT4Pdgdkqd">kaufmann.no/roland/dvorak/</a> или (nightmare mode) Diktor из <a href="http://t.co/300mKwf9OF">ergosolo.ru/reviews/histor…</a>?

RT <a href="https://twitter.com/anton_davydov" title="Davy Dovanton">@anton_davydov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а в каком редакторе ты пишешь?

Как ни странно, vim. hjkl после слезания с QWERTY пользоваться будет сложно, но я, честно говоря, и до этого никогда ими не пользовался. :)

И возвращаясь к флеймоопасным темам: чего я никогда не понимал и вряд ли пойму, так это культа удалённой работы.

Многие мечтают уехать в условный Таиланд с ноутбуком и оттуда чего-то делать, но для меня это был бы скорее ночной кошмар, чем мечта.

Чего там говорить, я страдаю даже от невозможности живого общения с коллегами из Мск, хотя у нас есть отличная видео- и голосовая связь...

...а уж уехать совсем и изолироваться — это я вообще не представляю себе, как можно заставить себя дольше недели в таком режиме продержаться

То есть с технической точки зрения — абсолютно никаких проблем работать не из офиса, но психологически это было бы для меня дико некомфортно

В реплаях пишут, что повсеместная удалённая работа выгодна экономике и обществу в целом. В таком ключе я над этим ещё не думал.

Случайная подборка ссылок для тех, кому интересно, как устроены ДЦ в разных компаниях:

1) <a href="https://t.co/lzhiJYdDUI">code.facebook.com/posts/14330936…</a> — специальное решение Фейсбука для хранения миллиардов фоточек.

2) <a href="http://t.co/U3JKVLmELD">blog.serverfault.com/2015/03/05/how…</a> — как StackOverflow обновляет у себя железо.

3) <a href="http://t.co/e86BVt3t4v">habrahabr.ru/company/yandex…</a> — и немного общих слов про то, как устроен новый ДЦ Яндекса в Финляндии.

…отличное чтиво для развития комплекса собственной неполноценности (по крайней мере, на меня эти статьи производят именно такой эффект).

Самое интересное, что мне когда-либо приходилось делать с целым ДЦ, — закрыть его от продакшен-нагрузки и тестировать там нагрузочно релиз.

Ситуация была исключительная, мы так больше никогда не делали. Но это всё равно даже близко не то, что вытворяют ребята по ссылкам.

RT <a href="https://twitter.com/beshkenadze" title="Александр Бешкенадзе">@beshkenadze</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> проблема в том, что это не для всех. Надо уметь самоорганизовываться.

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> Экономически выгодно

RT <a href="https://twitter.com/amel_true" title="Andrey Melikhov">@amel_true</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> можно снимать так, чтобы дорога до работы не занимала час и приносила удовольствие, как прогулка.

RT <a href="https://twitter.com/amel_true" title="Andrey Melikhov">@amel_true</a>: <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a>  в питерский Яндекс в прошлом году (до ремонта набережной) было здорово долетать на велосипеде за 2…

RT <a href="https://twitter.com/vyazovoi" title="Paul Elms">@vyazovoi</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> да много чего, вроде общественных туалетов, кондиционеров (не люблю их), и заканчивая возможностью сидеть без фу…

RT <a href="https://twitter.com/vyazovoi" title="Paul Elms">@vyazovoi</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> ещё нравится семью видеть в течение дня, а не проводить весь день в офисе и в дороге

RT <a href="https://twitter.com/rastopyr_ua" title="Rastopyr">@rastopyr_ua</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> мне кажется для удаленной работы требуется спец. подход. бо, если вокруг не раб.окружение то работать сложно

RT <a href="https://twitter.com/dmitrytrigonis" title="Dmitry Trigonis">@dmitrytrigonis</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> нет возможности халиварить целый день и обмениваться опыта когда сидишь дома. По скайпу не то

RT <a href="https://twitter.com/sarman" title="sarman">@sarman</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> дома комфортно, создаешь комфортные условия под настроение, ту же тишину, если захочется. Наушники не вариант, это…

Поретвитил подборку мнений про плюс/минусы удалённой работы. Внезапно есть ненулевое количество людей, которым тоже удалёнка не по нраву.

RT <a href="https://twitter.com/iamstarkov" title="Vladimir Starkov">@iamstarkov</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как завещал <a href="https://twitter.com/Oatmeal" title="Matthew Inman">@Oatmeal</a> <a href="http://t.co/QV4FtdxMHG">pic.twitter.com/QV4FtdxMHG</a>

## Пятница <small>2 твита</small>

Немножко укороченная экспериментальная неделя бекенда во фронтенд-аккаунте объявляется закрытой. :) Напоминаю, что с вами был <a href="https://twitter.com/i_komarov" title="Ivan Komarov">@i_komarov</a>.

Спасибо большое за общение и вопросы, это был очень интересный и познавательный опыт.
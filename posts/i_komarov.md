# i_komarov

_05 июня 2015_

## Понедельник <small>53 твита</small>

Привет. Я [@i\_komarov](https://twitter.com/i_komarov "Ivan Komarov"), и эта неделя для [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") будет экспериментальной, потому что я не имею отношения ни к JS, ни к фронтенду вообще.

Я работаю в Яндексе C++-разработчиком; сначала разрабатывал веб-поиск, потом перешёл в Яндекс.Маркет. «Бекендер», в общем.

Могу поддержать разговор на такие темы: алгоритмы, оптимизация производительности, ЯП типа C++ или Rust, тестирование…

…собеседование разработчиков, немножко машинное обучение \(в нём я не большой специалист, но сталкиваться приходилось\).

Буду рад любым вопросам, потому что пока совершенно не представляю, что из этих тем интересно фронтенд-сообществу.

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") давай собеседования, оптимизация, тестирование

Окей, про собеседования: ИМХО, процесс собеседования в большинстве компаний — это ад, и вот почему: [sockpuppet.org/blog/2015/03/0…](http://t.co/dDRifnr8Fg "http://sockpuppet.org/blog/2015/03/06/the-hiring-post/")

TL;DR Чтобы набирать хороших людей, нужны work-sample tests, но их почти никто не делает.

Вообще, в этом посте много хороших наблюдений, но про work-sample tests — на мой взгляд, ключевое.

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") расскажи, что в Яндексе пишут на c++ и зачем.

На C++ пишут почти всё высоконагруженное. Поиск, Карты, Маркет и т. д. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

Зачем: во-первых, есть большая существующая кодовая база, во-вторых, при всех недостатках C++ для этой ниши он вполне ок. [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Rust + JS. какие мысли на эту тему?\)

Не могу придумать осмысленный способ скомбинировать Rust и JS, если честно. :\) [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr")

Про оптимизацию у меня у самого вопрос: как фронтендеры профилируют программы, учитывая зоопарк браузеров/VM для JS? Всегда было интересно.

RT [@listochkin](https://twitter.com/listochkin "Андрей Листочкин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") да легко. Нативные аддоны для Node на растении писать

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") аддоны на rust вместо c/c++ к nodejs, я думаю. servo же тоже как то инерпретирует js.

RT [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda"): [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr") почему не писать их на С/С++?

Предлагают писать аддоны к node.js на Rust. Мне кажется, вполне годная идея, и не удивлюсь, если кто-то уже такое пробовал.

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а на сколько ты погружался в rust? я имею в виду по работе, или какие то pet-side проекты

По работе не погружался, написал небольшой pet project после выхода 1.0 \(маршрутизатор для соревнований вроде Бегущего Города\). [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr")

RT [@dosyara](https://twitter.com/dosyara "Sergey Maksimov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Что, по-твоему, должен знать и уметь хороший фронтенд разработчик? Правда ли, что верстальщикам нельзя доверить с…

Я, если честно, не видел примеров, когда верстальщик что-то бы делал для server side, поэтому судить сложно. [@dosyara](https://twitter.com/dosyara "Sergey Maksimov")

Про «что должен знать и уметь» — мне своей колокольни кажется, что должен понимать, как работает сетевой стек, от уровня IP и выше. [@dosyara](https://twitter.com/dosyara "Sergey Maksimov")

RT [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я слышал у вас в [@yandex](https://twitter.com/yandex "Яндекс") стили пишут на Stylus. Если ты можешь, то ответь почему не [@SassCSS](https://twitter.com/SassCSS "Sass") . Есть ли какие-…

Вроде как сильно зависит от команды. Где-то вообще никаких препроцессоров не используют \(в Маркете, например\). [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan")

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я обычно профилирую в Хроме и/или Файрфоксе, надеясь, что в остальных всё будет похоже. Но я не профессионал в эт…

RT [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") боттлнеки профилируют. Как правило стараются делать архитектуру чтоб не тормозило. Типа как в Реакте

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") скорость работы функции не тяжело померить и даже мониторинг повесить, даже запускать в браузере

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@edjafarov](https://twitter.com/edjafarov "Eldar Djafarov ッ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") но ботлнек обычно это рендеринг, если мы про браузеры, есть ряд best practices и вообще это цела…

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что думаешь о расте? видишь ли в нем будущее \(убийцу с++ лол\) и что на нем пишут в ya?

Rust вполне может взлететь лет через 5, ИМХО. В Я. ничего не пишут на нём и вряд ли будут, мы консерваторы. [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton")

[radio-t.com/p/2015/05/02/p…](http://t.co/IN5M4RgYWk "http://www.radio-t.com/p/2015/05/02/podcast-442/") — вот тут коллега из Я. очень хорошо про конкурентные преимущества Раста рассказывает.

Когда программа гарантированно не может засегфолтиться или обратиться к уже освобождённой памяти — это очень круто.

Некоторые говорят, что если у тебя программа падает, то ты плохой программист на C++. Но что-то вокруг меня хороших-то и нет.

RT [@\_cloudo](https://twitter.com/_cloudo "Cloudo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") какую литературу посоветуешь почитать по тестированию? интересуют не конкретные инструменты, а скорее идеология...

[shop.oreilly.com/product/978059…](http://t.co/8XrrOD2nk5 "http://shop.oreilly.com/product/9780596159825.do") — про тестирование мне вот эта книжка нравится. [@\_cloudo](https://twitter.com/_cloudo "Cloudo")

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") какие еще языки используются кроме C++, Java, Python?

Ничего особо интересно. Perl, JavaScript, где-то вроде Erlang был. [@rusgautama](https://twitter.com/rusgautama "Rus Buddha")

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я слышал, на Я.Поиске кодят в vim-е и деплоят по ssh, то есть IDE там особо не используются. А как на других прое…

В Маркете и Поиске все изощряются кто во что горазд. Кто-то пользуется vim'ом/emacs'ом, кто-то — полноценной IDE. [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov")

Тут просят рассказать про моё увлечение биоинформатикой. Это история с грустным концом: [dfyz.livejournal.com/189261.html](http://t.co/1v9jX69BeM "http://dfyz.livejournal.com/189261.html"), [dfyz.livejournal.com/190120.html](http://t.co/VGULu4STUE "http://dfyz.livejournal.com/190120.html")

Вкратце: загорелся, прорешал 150+ задачек на \(офигенном\) [rosalind.info](http://t.co/7laSpRaIXr "http://rosalind.info"), но не придумал, что с этим делать дальше и куда расти.

То есть биоинформатика — это очень круто, но для человека не из отрасли не видно возможностей принести какую-то пользу.

RT [@two\_in\_one](https://twitter.com/two_in_one "Владислава Т."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") больше подробностей! Какие знания ты получил? Что нового узнал?

Много интересного узнал про структуры данных на строках \(суф. деревья/массивы, FM-index и т. д.; см., например, [csedays.ru/theory2014/tin…](http://t.co/lGSyUQ5qXb "http://www.csedays.ru/theory2014/tindexes")\), …

…разобрался, как устроены сырые данные у 23andme \(правда, кроме того, что уже есть на их сайте, ничего полезного про свой геном не узнал\), …

…приобрёл несколько полезных подписок в RSS-ридере, например homolog.us.

RT [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть стартапы, работающие в этой области, но их не много \(

Есть, но это не совсем то. Хотелось, не меняя  работы, на досуге сделать, например, полезный патч в какой-нибудь ассемблер ДНК. [@oelifantiev](https://twitter.com/oelifantiev "Oleg Elifantiev")

Вопрос: а правда, что во фронтенд-разработке повсеместно используется git? Кто-нибудь использует, скажем, hg в качестве основной VCS?

М-да, хотел набросить про то, что, ИМХО, hg логичнее и удобнее, чем git, но, судя по статистике ответов, меня просто забросают камнями.

Впрочем, моя психика непоправимо травмирована Subversion'ом, который приходится использовать на работе.

## Вторник <small>24 твита</small>

RT [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") расскажи еще про Я. какие плюшки :\) ? офис просторный? опенспейс? стулья удобные? слышал, в украине крутой офис …

Опенспейсы, но комфортные. В Мск больше места, в Екб меньше людей на единицу места. :\) В Симфе, говорят, круто, но я там не был. [@baxxabit](https://twitter.com/baxxabit "Uladzimir Havenchyk")

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а что скажете про Go-lang, ребята?

Я попробовал на Go что-то пописать и быстро приуныл. [yager.io/programming/go…](http://t.co/CLXmDDrcs7 "http://yager.io/programming/go.html") — вот тут хорошее описание проблем. [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov")

Характерный пример: попробуйте отсортировать на Go массив int64. [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov")

Судя по битве vim/ST/whatever, разгоревшейся в реплаях, спрашивать про тулзы опасно. Как справедливо заметили в реплаях же, ...

...чаще всего нет принципиальной разницы, что использовать, но спорить про превосходство любимого редактора/VCS/OS можно до хрипоты.

Поэтому задам более фундаментальный вопрос: как вы используете сode review? На что обращаете внимание при ревью, зачем вообще оно вам?

Я ещё не встречал двух человек, у которых взгляды на code review полностью сходились бы, поэтому интересно послушать разные мнения.

ИМХО, code review — это в первую очередь диалог «за код», а не средство отлавливать баги, как почему-то думают многие.

По опыту кажется, что code review \(в отличие от тестирования\) баги, кроме самых тривиальных, ловит отвратительно.

Главная польза ревью: советы вида «поговори с X, если эта фича больше не нужна, то тут можно сделать проще, а этот модуль вообще выкинуть».

Ну и в целом, всегда полезно понимать, что «ты делаешь не фигню»™. Поэтому я за code review всех коммитов, кроме «поправил опечатку в имени»

RT [@konenkov](https://twitter.com/konenkov "Sergey Konenkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А расскажите, пожалуйста, как в яндексе мониторят сервисы?

Зависит от команды. Наши разработчики смотрят в графики на Graphite \([graphite.readthedocs.org/en/latest/over…](http://t.co/xi2BlGWvqy "http://graphite.readthedocs.org/en/latest/overview.html")\), плюс у админов \([@market\_ops\_crew](https://twitter.com/market_ops_crew "Админы Маркета ")\) свои приборы

Когда-то я научился печатать в раскладке [colemak.com](http://t.co/VA6BpKhUf4 "http://colemak.com/"), и ни разу ещё об этом не пожалел. Очень рекомендую, пальцы скажут спасибо.

А кто-то использует совсем эзотерические раскладки? Скажем, [kaufmann.no/roland/dvorak/](http://t.co/WT4Pdgdkqd "http://www.kaufmann.no/roland/dvorak/") или \(nightmare mode\) Diktor из [ergosolo.ru/reviews/histor…](http://t.co/300mKwf9OF "http://ergosolo.ru/reviews/history/alternative_layouts/")?

RT [@anton\_davydov](https://twitter.com/anton_davydov "Davy Dovanton"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а в каком редакторе ты пишешь?

Как ни странно, vim. hjkl после слезания с QWERTY пользоваться будет сложно, но я, честно говоря, и до этого никогда ими не пользовался. :\)

И возвращаясь к флеймоопасным темам: чего я никогда не понимал и вряд ли пойму, так это культа удалённой работы.

Многие мечтают уехать в условный Таиланд с ноутбуком и оттуда чего-то делать, но для меня это был бы скорее ночной кошмар, чем мечта.

Чего там говорить, я страдаю даже от невозможности живого общения с коллегами из Мск, хотя у нас есть отличная видео- и голосовая связь...

...а уж уехать совсем и изолироваться — это я вообще не представляю себе, как можно заставить себя дольше недели в таком режиме продержаться

То есть с технической точки зрения — абсолютно никаких проблем работать не из офиса, но психологически это было бы для меня дико некомфортно

## Среда <small>19 твитов</small>

В реплаях пишут, что повсеместная удалённая работа выгодна экономике и обществу в целом. В таком ключе я над этим ещё не думал.

Случайная подборка ссылок для тех, кому интересно, как устроены ДЦ в разных компаниях:

1\) [code.facebook.com/posts/14330936…](https://t.co/lzhiJYdDUI "https://code.facebook.com/posts/1433093613662262/-under-the-hood-facebook-s-cold-storage-system-/") — специальное решение Фейсбука для хранения миллиардов фоточек.

2\) [blog.serverfault.com/2015/03/05/how…](http://t.co/U3JKVLmELD "http://blog.serverfault.com/2015/03/05/how-we-upgrade-a-live-data-center/") — как StackOverflow обновляет у себя железо.

3\) [habrahabr.ru/company/yandex…](http://t.co/e86BVt3t4v "http://habrahabr.ru/company/yandex/blog/258823/") — и немного общих слов про то, как устроен новый ДЦ Яндекса в Финляндии.

…отличное чтиво для развития комплекса собственной неполноценности \(по крайней мере, на меня эти статьи производят именно такой эффект\).

Самое интересное, что мне когда-либо приходилось делать с целым ДЦ, — закрыть его от продакшен-нагрузки и тестировать там нагрузочно релиз.

Ситуация была исключительная, мы так больше никогда не делали. Но это всё равно даже близко не то, что вытворяют ребята по ссылкам.

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") проблема в том, что это не для всех. Надо уметь самоорганизовываться.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Экономически выгодно

RT [@amel\_true](https://twitter.com/amel_true "Andrey Melikhov"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") можно снимать так, чтобы дорога до работы не занимала час и приносила удовольствие, как прогулка.

RT [@amel\_true](https://twitter.com/amel_true "Andrey Melikhov"): [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  в питерский Яндекс в прошлом году \(до ремонта набережной\) было здорово долетать на велосипеде за 2…

RT [@vyazovoi](https://twitter.com/vyazovoi "Paul Elms"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да много чего, вроде общественных туалетов, кондиционеров \(не люблю их\), и заканчивая возможностью сидеть без фу…

RT [@vyazovoi](https://twitter.com/vyazovoi "Paul Elms"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ещё нравится семью видеть в течение дня, а не проводить весь день в офисе и в дороге

RT [@rastopyr\_ua](https://twitter.com/rastopyr_ua "Rastopyr"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мне кажется для удаленной работы требуется спец. подход. бо, если вокруг не раб.окружение то работать сложно

RT [@dmitrytrigonis](https://twitter.com/dmitrytrigonis "Dmitry Trigonis"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") нет возможности халиварить целый день и обмениваться опыта когда сидишь дома. По скайпу не то

RT [@sarman](https://twitter.com/sarman "sarman"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") дома комфортно, создаешь комфортные условия под настроение, ту же тишину, если захочется. Наушники не вариант, это…

Поретвитил подборку мнений про плюс/минусы удалённой работы. Внезапно есть ненулевое количество людей, которым тоже удалёнка не по нраву.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как завещал [@Oatmeal](https://twitter.com/Oatmeal "Matthew Inman") [pic.twitter.com/QV4FtdxMHG](http://t.co/QV4FtdxMHG)

## Пятница <small>2 твита</small>

Немножко укороченная экспериментальная неделя бекенда во фронтенд-аккаунте объявляется закрытой. :\) Напоминаю, что с вами был [@i\_komarov](https://twitter.com/i_komarov "Ivan Komarov").

Спасибо большое за общение и вопросы, это был очень интересный и познавательный опыт.

## Ссылки

<a href="http://sockpuppet.org/blog/2015/03/06/the-hiring-post/" target="_blank">http://sockpuppet.org/blog/2015/03/06/the-hiring-post/</a>  
<a href="http://www.radio-t.com/p/2015/05/02/podcast-442/" target="_blank">http://www.radio-t.com/p/2015/05/02/podcast-442/</a>  
<a href="http://shop.oreilly.com/product/9780596159825.do" target="_blank">http://shop.oreilly.com/product/9780596159825.do</a>  
<a href="http://dfyz.livejournal.com/189261.html" target="_blank">http://dfyz.livejournal.com/189261.html</a>  
<a href="http://dfyz.livejournal.com/190120.html" target="_blank">http://dfyz.livejournal.com/190120.html</a>  
<a href="http://rosalind.info" target="_blank">http://rosalind.info</a>  
<a href="http://www.csedays.ru/theory2014/tindexes" target="_blank">http://www.csedays.ru/theory2014/tindexes</a>  
<a href="http://yager.io/programming/go.html" target="_blank">http://yager.io/programming/go.html</a>  
<a href="http://graphite.readthedocs.org/en/latest/overview.html" target="_blank">http://graphite.readthedocs.org/en/latest/overview.html</a>  
<a href="http://colemak.com/" target="_blank">http://colemak.com/</a>  
<a href="http://www.kaufmann.no/roland/dvorak/" target="_blank">http://www.kaufmann.no/roland/dvorak/</a>  
<a href="http://ergosolo.ru/reviews/history/alternative_layouts/" target="_blank">http://ergosolo.ru/reviews/history/alternative_layouts/</a>  
<a href="https://code.facebook.com/posts/1433093613662262/-under-the-hood-facebook-s-cold-storage-system-/" target="_blank">https://code.facebook.com/posts/1433093613662262/-under-the-hood-facebook-s-cold-storage-system-/</a>  
<a href="http://blog.serverfault.com/2015/03/05/how-we-upgrade-a-live-data-center/" target="_blank">http://blog.serverfault.com/2015/03/05/how-we-upgrade-a-live-data-center/</a>  
<a href="http://habrahabr.ru/company/yandex/blog/258823/" target="_blank">http://habrahabr.ru/company/yandex/blog/258823/</a>
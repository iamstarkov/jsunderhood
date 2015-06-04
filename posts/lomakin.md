# lomakin

_16 апреля 2015_

## Понедельник <small>14 твитов</small>

Всем привет! Меня зовут Александр Ломакин. Я руковожу веб-разработкой в Rambler Digital Solutions.

На этой неделе <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> веду я. Буду рассказывать про веб-разработку, менеджмент разработки и про все около этого :)

Можно задавать вопросы о разработке lenta.ru, gazeta.ru, secretmag.ru, motor.ru и вообще про то, как в RDS и Rambler&amp;Co устроена рабработка

.@matmuchrapna <a href="https://twitter.com/gladkih_m" title="Maxim Gladkih">@gladkih_m</a> <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> ссори, теперь исправлюсь :)

.<a href="https://twitter.com/Rukomoynikov" title="Maksim Rukomoynikov">@Rukomoynikov</a> в нашей CMS используем ES6. Вот небольшая подборочка нашего опенсорса :) - <a href="https://t.co/U3iBinepLE">github.com/rambler-digita…</a>

.<a href="https://twitter.com/Rukomoynikov" title="Maksim Rukomoynikov">@Rukomoynikov</a> в RDS сейчас работает около ста человек

.<a href="https://twitter.com/Rukomoynikov" title="Maksim Rukomoynikov">@Rukomoynikov</a> Backbone любим, но знаете как говорят: любовь живет три года... Пока что мы не подтверждаем это правило :)

Недавно вышел <a href="http://t.co/ohWXrcIVym">nativegrid.com</a> от Look At Media

Все бы круто, но всегда плохо относился к CMS, которые имплементируют чей-то устоявшийся процесс работы.

А как быть если хочу купить ее, а у меня все работает не так? Ну процессы, например, по другому выстроены?

Гораздо более привлекательной мне кажется идея фреймворка для редакторских систем.

Где можно собрать готовую CMS из различных UI компонентов. А на бэкэнде хранить это все как помесь структурированных и schema-free данных.

В общем к этому мы и идем у нас в компании. Изданий у нас много, запросы к "админочкам" растут в геометрической прогрессии.

И, в общем-то, это единственный вариант совладать со всем этим: тут, как говорится, и редакторы сыты, и разработчики целы.

## Вторник <small>12 твитов</small>

RT <a href="https://twitter.com/shuvalov_anton" title="Darth Shuvalov">@shuvalov_anton</a>: Продолжаю читать про React, и кажется, сейчас я скоро буду визжать как сучка. По-моему, только что взвизгнул… Вот снова…

Расскажу немного о том, как сейчас работает lenta.ru

Редактора работают в редакторской системе, которая представляет из себя Backbone-приложение, которое общается с Ruby-бэкэндом через REST API

Вся начинка аккуратненько кладется в PostgreSQL

Дальше спец. скрипт, формирует из всего многообразия связанных данных Mongo-документ, который можно достать одним запросом на самом сайте

Так что когда вы заходите на lenta.ru, вы фактически таскаете документы из коллекций в Mongo, которые к тому же покрыты жирным слоем кеша

И вообще, из всех типов проектов, над которыми мне приходилось, СМИ — это самое простое в плане архитектуры

.<a href="https://twitter.com/Stammru" title="Рустам Загиров">@Stammru</a> меньше 10. Вообще говоря, lenta.ru может работать на одной на напрягаясь особенно. Но для надежности их, конечно, больше.

В общем что мы все про Ленту? :) Как вам новые <a href="http://t.co/Btuq0eA48X">motor.ru</a> и <a href="http://t.co/D7HPKpnpZV">secretmag.ru</a>?

Кстати, вот например сегодня у нас в RDS очередной тимбилдинг среди разработчиков

Будем пить горячие напитки и и холиварить на разные темы :) Например почему Angular плохо, а за React'ом будущее

Всем привет с тимбилдинга! :) <a href="http://t.co/9s1LO8RWBK">pic.twitter.com/9s1LO8RWBK</a>

## Среда <small>29 твитов</small>

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> Angular хорош на коротких дистанциях, но я бы не стал его применять в больших и долгоиграющих продуктах. А вы как считаете?

.@_h4_ были ;)

.<a href="https://twitter.com/VasyaRomashova" title="Vasya R">@VasyaRomashova</a> женщины работают, где же еще :)

.<a href="https://twitter.com/yoksel" title="Йоксель">@yoksel</a> ты же недалеко сидишь — приходи, советуй как правильно :)

RT <a href="https://twitter.com/r3nya" title="Andrew R.">@r3nya</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а мне нравится новый дизайн мотора … Такие дела. :)

.@_h4_ я лично каждое утро съедаю по Angular разработчику :D

.<a href="https://twitter.com/yoksel" title="Йоксель">@yoksel</a> отвечу сразу про все. SVG помогает не плодить кучу спрайтов для всяких ретин и пр.

RT <a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a>: <a href="https://twitter.com/yoksel" title="Йоксель">@yoksel</a> <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> инлайновый SVG — меньше запросов к серверу, но минус в отсутствии поддержки IE8.

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> мы уже давно дружим с Backbone. Уже три года. И пока не собираемся с него резко спрыгивать :)

Про что рассказать, ребята? RT - как мы нанимаем сотрудников в RDS. FAV - про Agile.

.<a href="https://twitter.com/roman01la" title="λ [Roman Liutikov]">@roman01la</a> во время разработки не мешает. По крайней мере разработчики не жалуются :)

.<a href="https://twitter.com/yoksel" title="Йоксель">@yoksel</a> давай наводить мосты любви и дружбы! Нам очень не хватает твоей поддержки в оффлайне :)

Кажется с большим отрывом победил Agile :)

Год назад я прошел курс Certified Agile Professional <a href="http://t.co/gJGAIWfHrm">scrumtrek.ru/trainings/view…</a>

И тогда мой взгляд на многие вещи в процессе разработки очень сильно изменился

Во первых я понял, что Kanban это просто идеальный инструмент для визуализации того хаоса, который происходит обычно в проектах

Kanban позволяет визуализировать процесс доставки инкремента продукта и понять, где же все-таки затык и кто лажает

Scrum же скорее подходит для тех команд, где процесс уже отлажен и более менее стабильный velocity у команды

У нас в компании есть команды которые используют и тот и другой подход

Поэтому что-то конкретное рекомендовать сложно. Самое главное - готовность команды к осмысленному использованию тех или иных инструментов

.<a href="https://twitter.com/subzey" title="subzey">@subzey</a> разумеется используем. По умолчанию кол-во разрабов * 2. Затем корректируем по необходимости

.<a href="https://twitter.com/aod_toxic" title="Leon Yeromin">@aod_toxic</a> боюсь что PMBOK и PRINCE2 запретные слова в моем Agile мирке :)

.<a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a> там где Kanban - релизим по факту реализации фичи. Там где Скрам - по завершении спринта.

.<a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a> если проеб на стороне админов - они крайние. Если ошибка в коде - прогеры.

.<a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a> трекер задач — Jira/Trello

.<a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a> в качестве CI - TeamCity, правда пока не на всех проектах

.<a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a> откатиться легко, потому что мы держим последние n версий проекта рядышком в соседних папках :)

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> есть три варианта Capistrano (<a href="http://t.co/BGEji78r9p">capistranorb.com</a>), Fabric (<a href="http://t.co/VXUiPzuLa8">fabfile.org</a>) и наш собственный скрипт

.<a href="https://twitter.com/mbektimirov" title="Marat Bektimirov">@mbektimirov</a> пока нет, но в целом у нас есть в планах внедрение метрики test coverage не менее n% :)

## Четверг <small>37 твитов</small>

Расскажу немного о том, как мы собеседуем людей

HR служба подбирает потенциальных кандидатов, а затем одобряет их у руководителя направления (сейчас их три: Ruby, Python, Frontend)

Как правило мы проводим одно собеседование с кандидатом

Собеседование состоит из двух частей: вопросы кандидату, в том числе и технические; вопросы кандидата к нам

Технические вопросы включают в себя вопросы на знание языка и умение проектировать архитектуру приложения

Дурацких вопросов типа “почему крышка люка круглая” мы не задаем

Если есть сомнения в кандидате, то даем тестовое задание из серии написать маленький но законченный продукт

Например: написать небольшой форум с сокетами и блэкджеком; свой Pomodoro-таймер нy и в таком духе

Очень редко приглашаем на второе собеседование. Только когда совсем ничего не понятно о человеке

Как правило одного часа достаточно, чтобы составить впечатление о человеке

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> а если, допустим, у человека хороший опыт, и практический, и теоретический, но как человек он полнейший мудак?

.<a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> тогда в топку. С мудаками не готов работать, даже если они звезды мировой величины. Звезды светят, а команды делают продукты :)

RT <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> скажем, конфликтный, ленивый на рутинную работу, не пунктуальный. И это выясняется после исп. срока.

.<a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> окончание испытательного срока не барьер. Если человек превращается в мудака, мы его выпускаем в open market :)

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> у нас был один случай, когда человек откровенно срал на нормы поведения. Приходил когда угодно, забивал на работу

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> в общем этого уже достаточно

Есть классное правило: если человек не умеет - научим, не учится - вылечим, не лечится - отпустим. Это как золотое сечение в менеджменте.

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> А как вы юридически этого достигаете? Платите отступные в 5-6 зарплат или увольняете по статье?

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> как правило никто не хочет, чтобы его увольняли по статье. В моей практике всегда договаривались на плюс один оклад.

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> довольно обычная практика для многих компаний :)

RT <a href="https://twitter.com/janitor42" title="Валерий">@janitor42</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> как "лечите"?

.<a href="https://twitter.com/janitor42" title="Валерий">@janitor42</a> рассказываем, показываем как принято в компании работать. Бывает такое, что для человека в новинку бывает философия компании

RT <a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> Спасибо. В разных отраслях по разному, я 5-6 не просто так написала. Значит у разработчиков пока не…

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> теперь уже мне интересно, а где так?

.<a href="https://twitter.com/toivonens" title="var ya; // ru">@toivonens</a> <a href="https://twitter.com/rusgautama" title="Rus Buddha">@rusgautama</a> у них как правило и оклады поменьше, чем у разработчиков

Хочу поделиться «Must read!» чтивом. Надо кому? :) RT — поделиться. FAV — забить.

"45 татуировок менеджера". Обязательна к прочтению для руководителей всех мастей. Прям библия <a href="http://t.co/Y4JYi8rtDh">goo.gl/YzqUtV</a> <a href="http://t.co/Gc5aRo4nzR">pic.twitter.com/Gc5aRo4nzR</a>

"Руководство фасилитатора". Вот уж что поистине помогает собрать команду в кучку и "двигать" <a href="http://t.co/FL9Y3dCIbc">goo.gl/ruZWXT</a> <a href="http://t.co/r2BXs7CKXV">pic.twitter.com/r2BXs7CKXV</a>

"Как пасти котов". Это прям о сложностях взаимоотношений с различнами типами разработчиков <a href="http://t.co/EP1zt3wEAv">goo.gl/j4jcDj</a> <a href="http://t.co/v4HuClt5FN">pic.twitter.com/v4HuClt5FN</a>

"Проект Фениск". Книга про то, как DevOps побеждает "плесень" :) <a href="http://t.co/CCIeBMGtVI">goo.gl/2D45aQ</a> <a href="http://t.co/nzRIJENQbZ">pic.twitter.com/nzRIJENQbZ</a>

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> "Как пасти скотов"... сверху вниз есть книги, а снизу вверх? Например "Как работать с менеджером, если он мудак…

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> одно из двух: либо такого менеджера скоро "уйдут", либо не работать с ним совсем :)

"Правила Ашманова". Неплохец, к слову сказать. Тоже маст рид для управленцев в IT <a href="http://t.co/3c8rZtn4XU">goo.gl/fCkIzl</a>

RT <a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a>: <a href="https://twitter.com/jsunderhood" title="Разработчик">@jsunderhood</a> А если серьезно - есть книги "снизу вверх"?

.<a href="https://twitter.com/dcromster" title="Roman Milovskiy">@dcromster</a> честно говоря не встречал :( Но если кто посоветует, с удовольствием прочту

"Social Intelligence". А эта книга взорвала мой мозг, она про то, как современный мир меняет взаимоотношения людей <a href="http://t.co/dRElivuvts">goo.gl/xjtYHl</a>

В общем вот вам для затравочки :) Остальные книги буду со временим выкладывать у себя в аккаунте <a href="https://twitter.com/lomakin" title="Alexander Lomakin">@lomakin</a>
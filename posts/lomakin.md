# lomakin

_16 апреля 2015_

## Понедельник <small>14 твитов</small>

Всем привет! Меня зовут Александр Ломакин. Я руковожу веб-разработкой в Rambler Digital Solutions.

На этой неделе [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") веду я. Буду рассказывать про веб-разработку, менеджмент разработки и про все около этого :\)

Можно задавать вопросы о разработке lenta.ru, gazeta.ru, secretmag.ru, motor.ru и вообще про то, как в RDS и Rambler&amp;Co устроена рабработка

.@matmuchrapna [@gladkih\_m](https://twitter.com/gladkih_m "Maxim Gladkih") [@toivonens](https://twitter.com/toivonens "var ya; // ru") ссори, теперь исправлюсь :\)

.[@Rukomoynikov](https://twitter.com/Rukomoynikov "Maksim Rukomoynikov") в нашей CMS используем ES6. Вот небольшая подборочка нашего опенсорса :\) - [github.com\/rambler-digita…](https://t.co/U3iBinepLE "https://github.com/rambler-digital-solutions")

.[@Rukomoynikov](https://twitter.com/Rukomoynikov "Maksim Rukomoynikov") в RDS сейчас работает около ста человек

.[@Rukomoynikov](https://twitter.com/Rukomoynikov "Maksim Rukomoynikov") Backbone любим, но знаете как говорят: любовь живет три года... Пока что мы не подтверждаем это правило :\)

Недавно вышел [nativegrid.com](http://t.co/ohWXrcIVym "http://www.nativegrid.com") от Look At Media

Все бы круто, но всегда плохо относился к CMS, которые имплементируют чей-то устоявшийся процесс работы.

А как быть если хочу купить ее, а у меня все работает не так? Ну процессы, например, по другому выстроены?

Гораздо более привлекательной мне кажется идея фреймворка для редакторских систем.

Где можно собрать готовую CMS из различных UI компонентов. А на бэкэнде хранить это все как помесь структурированных и schema-free данных.

В общем к этому мы и идем у нас в компании. Изданий у нас много, запросы к "админочкам" растут в геометрической прогрессии.

И, в общем-то, это единственный вариант совладать со всем этим: тут, как говорится, и редакторы сыты, и разработчики целы.

## Вторник <small>12 твитов</small>

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): Продолжаю читать про React, и кажется, сейчас я скоро буду визжать как сучка. По-моему, только что взвизгнул… Вот снова…

Расскажу немного о том, как сейчас работает lenta.ru

Редактора работают в редакторской системе, которая представляет из себя Backbone-приложение, которое общается с Ruby-бэкэндом через REST API

Вся начинка аккуратненько кладется в PostgreSQL

Дальше спец. скрипт, формирует из всего многообразия связанных данных Mongo-документ, который можно достать одним запросом на самом сайте

Так что когда вы заходите на lenta.ru, вы фактически таскаете документы из коллекций в Mongo, которые к тому же покрыты жирным слоем кеша

И вообще, из всех типов проектов, над которыми мне приходилось, СМИ — это самое простое в плане архитектуры

.[@Stammru](https://twitter.com/Stammru "Рустам Загиров") меньше 10. Вообще говоря, lenta.ru может работать на одной на напрягаясь особенно. Но для надежности их, конечно, больше.

В общем что мы все про Ленту? :\) Как вам новые [motor.ru](http://t.co/Btuq0eA48X "http://motor.ru") и [secretmag.ru](http://t.co/D7HPKpnpZV "http://secretmag.ru")?

Кстати, вот например сегодня у нас в RDS очередной тимбилдинг среди разработчиков

Будем пить горячие напитки и и холиварить на разные темы :\) Например почему Angular плохо, а за React'ом будущее

Всем привет с тимбилдинга! :\) [pic.twitter.com\/9s1LO8RWBK](http://t.co/9s1LO8RWBK)

## Среда <small>29 твитов</small>

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") Angular хорош на коротких дистанциях, но я бы не стал его применять в больших и долгоиграющих продуктах. А вы как считаете?

.@\_h4\_ были ;\)

.[@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R") женщины работают, где же еще :\)

.[@yoksel](https://twitter.com/yoksel "Йоксель") ты же недалеко сидишь — приходи, советуй как правильно :\)

RT [@r3nya](https://twitter.com/r3nya "Andrew R."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а мне нравится новый дизайн мотора … Такие дела. :\)

.@\_h4\_ я лично каждое утро съедаю по Angular разработчику :D

.[@yoksel](https://twitter.com/yoksel "Йоксель") отвечу сразу про все. SVG помогает не плодить кучу спрайтов для всяких ретин и пр.

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@yoksel](https://twitter.com/yoksel "Йоксель") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") инлайновый SVG — меньше запросов к серверу, но минус в отсутствии поддержки IE8.

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") мы уже давно дружим с Backbone. Уже три года. И пока не собираемся с него резко спрыгивать :\)

Про что рассказать, ребята? RT - как мы нанимаем сотрудников в RDS. FAV - про Agile.

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") во время разработки не мешает. По крайней мере разработчики не жалуются :\)

.[@yoksel](https://twitter.com/yoksel "Йоксель") давай наводить мосты любви и дружбы! Нам очень не хватает твоей поддержки в оффлайне :\)

Кажется с большим отрывом победил Agile :\)

Год назад я прошел курс Certified Agile Professional [scrumtrek.ru\/trainings\/view…](http://t.co/gJGAIWfHrm "http://scrumtrek.ru/trainings/view/22/147/")

И тогда мой взгляд на многие вещи в процессе разработки очень сильно изменился

Во первых я понял, что Kanban это просто идеальный инструмент для визуализации того хаоса, который происходит обычно в проектах

Kanban позволяет визуализировать процесс доставки инкремента продукта и понять, где же все-таки затык и кто лажает

Scrum же скорее подходит для тех команд, где процесс уже отлажен и более менее стабильный velocity у команды

У нас в компании есть команды которые используют и тот и другой подход

Поэтому что-то конкретное рекомендовать сложно. Самое главное - готовность команды к осмысленному использованию тех или иных инструментов

.[@subzey](https://twitter.com/subzey "subzey") разумеется используем. По умолчанию кол-во разрабов \* 2. Затем корректируем по необходимости

.[@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin") боюсь что PMBOK и PRINCE2 запретные слова в моем Agile мирке :\)

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") там где Kanban - релизим по факту реализации фичи. Там где Скрам - по завершении спринта.

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") если проеб на стороне админов - они крайние. Если ошибка в коде - прогеры.

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") трекер задач — Jira\/Trello

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") в качестве CI - TeamCity, правда пока не на всех проектах

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") откатиться легко, потому что мы держим последние n версий проекта рядышком в соседних папках :\)

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") есть три варианта Capistrano \([capistranorb.com](http://t.co/BGEji78r9p "http://capistranorb.com")\), Fabric \([fabfile.org](http://t.co/VXUiPzuLa8 "http://www.fabfile.org")\) и наш собственный скрипт

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") пока нет, но в целом у нас есть в планах внедрение метрики test coverage не менее n% :\)

## Четверг <small>37 твитов</small>

Расскажу немного о том, как мы собеседуем людей

HR служба подбирает потенциальных кандидатов, а затем одобряет их у руководителя направления \(сейчас их три: Ruby, Python, Frontend\)

Как правило мы проводим одно собеседование с кандидатом

Собеседование состоит из двух частей: вопросы кандидату, в том числе и технические; вопросы кандидата к нам

Технические вопросы включают в себя вопросы на знание языка и умение проектировать архитектуру приложения

Дурацких вопросов типа “почему крышка люка круглая” мы не задаем

Если есть сомнения в кандидате, то даем тестовое задание из серии написать маленький но законченный продукт

Например: написать небольшой форум с сокетами и блэкджеком; свой Pomodoro-таймер нy и в таком духе

Очень редко приглашаем на второе собеседование. Только когда совсем ничего не понятно о человеке

Как правило одного часа достаточно, чтобы составить впечатление о человеке

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а если, допустим, у человека хороший опыт, и практический, и теоретический, но как человек он полнейший мудак?

.[@rusgautama](https://twitter.com/rusgautama "Rus Buddha") тогда в топку. С мудаками не готов работать, даже если они звезды мировой величины. Звезды светят, а команды делают продукты :\)

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") скажем, конфликтный, ленивый на рутинную работу, не пунктуальный. И это выясняется после исп. срока.

.[@rusgautama](https://twitter.com/rusgautama "Rus Buddha") окончание испытательного срока не барьер. Если человек превращается в мудака, мы его выпускаем в open market :\)

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") у нас был один случай, когда человек откровенно срал на нормы поведения. Приходил когда угодно, забивал на работу

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") в общем этого уже достаточно

Есть классное правило: если человек не умеет - научим, не учится - вылечим, не лечится - отпустим. Это как золотое сечение в менеджменте.

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") А как вы юридически этого достигаете? Платите отступные в 5-6 зарплат или увольняете по статье?

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") как правило никто не хочет, чтобы его увольняли по статье. В моей практике всегда договаривались на плюс один оклад.

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") довольно обычная практика для многих компаний :\)

RT [@janitor42](https://twitter.com/janitor42 "Валерий"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как "лечите"?

.[@janitor42](https://twitter.com/janitor42 "Валерий") рассказываем, показываем как принято в компании работать. Бывает такое, что для человека в новинку бывает философия компании

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") Спасибо. В разных отраслях по разному, я 5-6 не просто так написала. Значит у разработчиков пока не…

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") теперь уже мне интересно, а где так?

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") у них как правило и оклады поменьше, чем у разработчиков

Хочу поделиться «Must read!» чтивом. Надо кому? :\) RT — поделиться. FAV — забить.

"45 татуировок менеджера". Обязательна к прочтению для руководителей всех мастей. Прям библия [goo.gl\/YzqUtV](http://t.co/Y4JYi8rtDh "http://goo.gl/YzqUtV") [pic.twitter.com\/Gc5aRo4nzR](http://t.co/Gc5aRo4nzR)

"Руководство фасилитатора". Вот уж что поистине помогает собрать команду в кучку и "двигать" [goo.gl\/ruZWXT](http://t.co/FL9Y3dCIbc "http://goo.gl/ruZWXT") [pic.twitter.com\/r2BXs7CKXV](http://t.co/r2BXs7CKXV)

"Как пасти котов". Это прям о сложностях взаимоотношений с различнами типами разработчиков [goo.gl\/j4jcDj](http://t.co/EP1zt3wEAv "http://goo.gl/j4jcDj") [pic.twitter.com\/v4HuClt5FN](http://t.co/v4HuClt5FN)

"Проект Фениск". Книга про то, как DevOps побеждает "плесень" :\) [goo.gl\/2D45aQ](http://t.co/CCIeBMGtVI "http://goo.gl/2D45aQ") [pic.twitter.com\/nzRIJENQbZ](http://t.co/nzRIJENQbZ)

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") "Как пасти скотов"... сверху вниз есть книги, а снизу вверх? Например "Как работать с менеджером, если он мудак…

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") одно из двух: либо такого менеджера скоро "уйдут", либо не работать с ним совсем :\)

"Правила Ашманова". Неплохец, к слову сказать. Тоже маст рид для управленцев в IT [goo.gl\/fCkIzl](http://t.co/3c8rZtn4XU "http://goo.gl/fCkIzl")

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А если серьезно - есть книги "снизу вверх"?

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") честно говоря не встречал :\( Но если кто посоветует, с удовольствием прочту

"Social Intelligence". А эта книга взорвала мой мозг, она про то, как современный мир меняет взаимоотношения людей [goo.gl\/xjtYHl](http://t.co/dRElivuvts "http://goo.gl/xjtYHl")

В общем вот вам для затравочки :\) Остальные книги буду со временим выкладывать у себя в аккаунте [@lomakin](https://twitter.com/lomakin "Alexander Lomakin")

## Ссылки

### goo.gl  
<a href="http://goo.gl/YzqUtV" target="_blank">http://goo.gl/YzqUtV</a>  
<a href="http://goo.gl/ruZWXT" target="_blank">http://goo.gl/ruZWXT</a>  
<a href="http://goo.gl/j4jcDj" target="_blank">http://goo.gl/j4jcDj</a>  
<a href="http://goo.gl/2D45aQ" target="_blank">http://goo.gl/2D45aQ</a>  
<a href="http://goo.gl/fCkIzl" target="_blank">http://goo.gl/fCkIzl</a>  
<a href="http://goo.gl/xjtYHl" target="_blank">http://goo.gl/xjtYHl</a>

### Другие

<a href="https://github.com/rambler-digital-solutions" target="_blank">https://github.com/rambler-digital-solutions</a>  
<a href="http://www.nativegrid.com" target="_blank">http://www.nativegrid.com</a>  
<a href="http://motor.ru" target="_blank">http://motor.ru</a>  
<a href="http://secretmag.ru" target="_blank">http://secretmag.ru</a>  
<a href="http://scrumtrek.ru/trainings/view/22/147/" target="_blank">http://scrumtrek.ru/trainings/view/22/147/</a>  
<a href="http://capistranorb.com" target="_blank">http://capistranorb.com</a>  
<a href="http://www.fabfile.org" target="_blank">http://www.fabfile.org</a>
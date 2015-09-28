# lomakin

_16 апреля 2015_

## Понедельник <small>14 твитов</small>

<div class="tweet">

Всем привет! Меня зовут Александр Ломакин. Я руковожу веб-разработкой в Rambler Digital Solutions.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587596754524188672">12:42</a>

</div>

<div class="tweet">

На этой неделе [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") веду я. Буду рассказывать про веб-разработку, менеджмент разработки и про все около этого :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587597073001906176">12:43</a>

</div>

<div class="tweet">

Можно задавать вопросы о разработке lenta.ru, gazeta.ru, secretmag.ru, motor.ru и вообще про то, как в RDS и Rambler&amp;Co устроена рабработка
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587597671654907906">12:46</a>

</div>

<div class="tweet">

.@matmuchrapna [@gladkih\_m](https://twitter.com/gladkih_m "Maxim Gladkih") [@toivonens](https://twitter.com/toivonens "var ya; // ru") ссори, теперь исправлюсь :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587604454779854848">13:13</a>

</div>

<div class="tweet">

.[@Rukomoynikov](https://twitter.com/Rukomoynikov "Maksim Rukomoynikov") в нашей CMS используем ES6. Вот небольшая подборочка нашего опенсорса :\) - [github.com/rambler-digita…](https://t.co/U3iBinepLE "https://github.com/rambler-digital-solutions")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587604964823932928">13:15</a>

</div>

<div class="tweet">

.[@Rukomoynikov](https://twitter.com/Rukomoynikov "Maksim Rukomoynikov") в RDS сейчас работает около ста человек
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587605138317139968">13:15</a>

</div>

<div class="tweet">

.[@Rukomoynikov](https://twitter.com/Rukomoynikov "Maksim Rukomoynikov") Backbone любим, но знаете как говорят: любовь живет три года... Пока что мы не подтверждаем это правило :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587606385988411392">13:20</a>

</div>

<div class="tweet">

Недавно вышел [nativegrid.com](http://t.co/ohWXrcIVym "http://www.nativegrid.com") от Look At Media
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587609497746726913">13:33</a>

</div>

<div class="tweet">

Все бы круто, но всегда плохо относился к CMS, которые имплементируют чей-то устоявшийся процесс работы.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587609828769542144">13:34</a>

</div>

<div class="tweet">

А как быть если хочу купить ее, а у меня все работает не так? Ну процессы, например, по другому выстроены?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587609951905964032">13:35</a>

</div>

<div class="tweet">

Гораздо более привлекательной мне кажется идея фреймворка для редакторских систем.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587610256710180864">13:36</a>

</div>

<div class="tweet">

Где можно собрать готовую CMS из различных UI компонентов. А на бэкэнде хранить это все как помесь структурированных и schema-free данных.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587611014155350016">13:39</a>

</div>

<div class="tweet">

В общем к этому мы и идем у нас в компании. Изданий у нас много, запросы к "админочкам" растут в геометрической прогрессии.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587613818999726081">13:50</a>

</div>

<div class="tweet">

И, в общем-то, это единственный вариант совладать со всем этим: тут, как говорится, и редакторы сыты, и разработчики целы.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587614114333204480">13:51</a>

</div>

## Вторник <small>12 твитов</small>

<div class="tweet">

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): Продолжаю читать про React, и кажется, сейчас я скоро буду визжать как сучка. По-моему, только что взвизгнул… Вот снова…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587881974955642880">7:35</a>

</div>

<div class="tweet">

Расскажу немного о том, как сейчас работает lenta.ru
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587887977956777984">7:59</a>

</div>

<div class="tweet">

Редактора работают в редакторской системе, которая представляет из себя Backbone-приложение, которое общается с Ruby-бэкэндом через REST API
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587888742406422528">8:02</a>

</div>

<div class="tweet">

Вся начинка аккуратненько кладется в PostgreSQL
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587889014696476672">8:03</a>

</div>

<div class="tweet">

Дальше спец. скрипт, формирует из всего многообразия связанных данных Mongo-документ, который можно достать одним запросом на самом сайте
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587889503018344448">8:05</a>

</div>

<div class="tweet">

Так что когда вы заходите на lenta.ru, вы фактически таскаете документы из коллекций в Mongo, которые к тому же покрыты жирным слоем кеша
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587889872075128832">8:07</a>

</div>

<div class="tweet">

И вообще, из всех типов проектов, над которыми мне приходилось, СМИ — это самое простое в плане архитектуры
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587890554865852416">8:10</a>

</div>

<div class="tweet">

.[@Stammru](https://twitter.com/Stammru "Рустам Загиров") меньше 10. Вообще говоря, lenta.ru может работать на одной на напрягаясь особенно. Но для надежности их, конечно, больше.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587901023966081024">8:51</a>

</div>

<div class="tweet">

В общем что мы все про Ленту? :\) Как вам новые [motor.ru](http://t.co/Btuq0eA48X "http://motor.ru") и [secretmag.ru](http://t.co/D7HPKpnpZV "http://secretmag.ru")?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/587965797798170624">13:09</a>

</div>

<div class="tweet">

Кстати, вот например сегодня у нас в RDS очередной тимбилдинг среди разработчиков
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588013160654864386">16:17</a>

</div>

<div class="tweet">

Будем пить горячие напитки и и холиварить на разные темы :\) Например почему Angular плохо, а за React'ом будущее
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588013592101969921">16:18</a>

</div>

<div class="tweet">

Всем привет с тимбилдинга! :\) [pic.twitter.com/9s1LO8RWBK](http://t.co/9s1LO8RWBK)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588022140328419328">16:52</a>

</div>

## Среда <small>29 твитов</small>

<div class="tweet">

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") Angular хорош на коротких дистанциях, но я бы не стал его применять в больших и долгоиграющих продуктах. А вы как считаете?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588255173857959937">8:18</a>

</div>

<div class="tweet">

.@\_h4\_ были ;\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588255674800410624">8:20</a>

</div>

<div class="tweet">

.[@VasyaRomashova](https://twitter.com/VasyaRomashova "Vasya R") женщины работают, где же еще :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588255804668702721">8:21</a>

</div>

<div class="tweet">

.[@yoksel](https://twitter.com/yoksel "Йоксель") ты же недалеко сидишь — приходи, советуй как правильно :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588256713297555456">8:25</a>

</div>

<div class="tweet">

RT [@r3nya](https://twitter.com/r3nya "Andrew R."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а мне нравится новый дизайн мотора … Такие дела. :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588257109097218048">8:26</a>

</div>

<div class="tweet">

.@\_h4\_ я лично каждое утро съедаю по Angular разработчику :D
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588257703803359232">8:29</a>

</div>

<div class="tweet">

.[@yoksel](https://twitter.com/yoksel "Йоксель") отвечу сразу про все. SVG помогает не плодить кучу спрайтов для всяких ретин и пр.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588259802599546881">8:37</a>

</div>

<div class="tweet">

RT [@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]"): [@yoksel](https://twitter.com/yoksel "Йоксель") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") инлайновый SVG — меньше запросов к серверу, но минус в отсутствии поддержки IE8.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588259851400323073">8:37</a>

</div>

<div class="tweet">

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") мы уже давно дружим с Backbone. Уже три года. И пока не собираемся с него резко спрыгивать :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588262447267639299">8:47</a>

</div>

<div class="tweet">

Про что рассказать, ребята? RT - как мы нанимаем сотрудников в RDS. FAV - про Agile.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588264402463363072">8:55</a>

</div>

<div class="tweet">

.[@roman01la](https://twitter.com/roman01la "λ [Roman Liutikov]") во время разработки не мешает. По крайней мере разработчики не жалуются :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588271712199905282">9:24</a>

</div>

<div class="tweet">

.[@yoksel](https://twitter.com/yoksel "Йоксель") давай наводить мосты любви и дружбы! Нам очень не хватает твоей поддержки в оффлайне :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588272092510035970">9:26</a>

</div>

<div class="tweet">

Кажется с большим отрывом победил Agile :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588332981334466561">13:28</a>

</div>

<div class="tweet">

Год назад я прошел курс Certified Agile Professional [scrumtrek.ru/trainings/view…](http://t.co/gJGAIWfHrm "http://scrumtrek.ru/trainings/view/22/147/")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588344126917238784">14:12</a>

</div>

<div class="tweet">

И тогда мой взгляд на многие вещи в процессе разработки очень сильно изменился
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588344484171231232">14:13</a>

</div>

<div class="tweet">

Во первых я понял, что Kanban это просто идеальный инструмент для визуализации того хаоса, который происходит обычно в проектах
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588344705391407104">14:14</a>

</div>

<div class="tweet">

Kanban позволяет визуализировать процесс доставки инкремента продукта и понять, где же все-таки затык и кто лажает
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588345041325817856">14:16</a>

</div>

<div class="tweet">

Scrum же скорее подходит для тех команд, где процесс уже отлажен и более менее стабильный velocity у команды
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588345816366116864">14:19</a>

</div>

<div class="tweet">

У нас в компании есть команды которые используют и тот и другой подход
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588345925753577473">14:19</a>

</div>

<div class="tweet">

Поэтому что-то конкретное рекомендовать сложно. Самое главное - готовность команды к осмысленному использованию тех или иных инструментов
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588346219086409728">14:20</a>

</div>

<div class="tweet">

.[@subzey](https://twitter.com/subzey "subzey") разумеется используем. По умолчанию кол-во разрабов \* 2. Затем корректируем по необходимости
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588347894786318336">14:27</a>

</div>

<div class="tweet">

.[@aod\_toxic](https://twitter.com/aod_toxic "Leon Yeromin") боюсь что PMBOK и PRINCE2 запретные слова в моем Agile мирке :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588349076942491648">14:32</a>

</div>

<div class="tweet">

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") там где Kanban - релизим по факту реализации фичи. Там где Скрам - по завершении спринта.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588353238094721025">14:48</a>

</div>

<div class="tweet">

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") если проеб на стороне админов - они крайние. Если ошибка в коде - прогеры.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588353359259762689">14:49</a>

</div>

<div class="tweet">

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") трекер задач — Jira/Trello
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588353540067823616">14:49</a>

</div>

<div class="tweet">

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") в качестве CI - TeamCity, правда пока не на всех проектах
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588353774466531328">14:50</a>

</div>

<div class="tweet">

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") откатиться легко, потому что мы держим последние n версий проекта рядышком в соседних папках :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588354824950910976">14:54</a>

</div>

<div class="tweet">

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") есть три варианта Capistrano \([capistranorb.com](http://t.co/BGEji78r9p "http://capistranorb.com")\), Fabric \([fabfile.org](http://t.co/VXUiPzuLa8 "http://www.fabfile.org")\) и наш собственный скрипт
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588356815945146369">15:02</a>

</div>

<div class="tweet">

.[@mbektimirov](https://twitter.com/mbektimirov "Marat Bektimirov") пока нет, но в целом у нас есть в планах внедрение метрики test coverage не менее n% :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588360862076903425">15:18</a>

</div>

## Четверг <small>37 твитов</small>

<div class="tweet">

Расскажу немного о том, как мы собеседуем людей
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643536603611136">10:02</a>

</div>

<div class="tweet">

HR служба подбирает потенциальных кандидатов, а затем одобряет их у руководителя направления \(сейчас их три: Ruby, Python, Frontend\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643576357203968">10:02</a>

</div>

<div class="tweet">

Как правило мы проводим одно собеседование с кандидатом
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643609542549506">10:02</a>

</div>

<div class="tweet">

Собеседование состоит из двух частей: вопросы кандидату, в том числе и технические; вопросы кандидата к нам
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643653050093569">10:02</a>

</div>

<div class="tweet">

Технические вопросы включают в себя вопросы на знание языка и умение проектировать архитектуру приложения
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643684847120385">10:02</a>

</div>

<div class="tweet">

Дурацких вопросов типа “почему крышка люка круглая” мы не задаем
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643724793614336">10:02</a>

</div>

<div class="tweet">

Если есть сомнения в кандидате, то даем тестовое задание из серии написать маленький но законченный продукт
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643758943690753">10:03</a>

</div>

<div class="tweet">

Например: написать небольшой форум с сокетами и блэкджеком; свой Pomodoro-таймер нy и в таком духе
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643791298519040">10:03</a>

</div>

<div class="tweet">

Очень редко приглашаем на второе собеседование. Только когда совсем ничего не понятно о человеке
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588643978767110144">10:03</a>

</div>

<div class="tweet">

Как правило одного часа достаточно, чтобы составить впечатление о человеке
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588644133826338817">10:04</a>

</div>

<div class="tweet">

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а если, допустим, у человека хороший опыт, и практический, и теоретический, но как человек он полнейший мудак?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588651688447324160">10:34</a>

</div>

<div class="tweet">

.[@rusgautama](https://twitter.com/rusgautama "Rus Buddha") тогда в топку. С мудаками не готов работать, даже если они звезды мировой величины. Звезды светят, а команды делают продукты :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588651985920008192">10:35</a>

</div>

<div class="tweet">

RT [@rusgautama](https://twitter.com/rusgautama "Rus Buddha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") скажем, конфликтный, ленивый на рутинную работу, не пунктуальный. И это выясняется после исп. срока.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588652057457987584">10:36</a>

</div>

<div class="tweet">

.[@rusgautama](https://twitter.com/rusgautama "Rus Buddha") окончание испытательного срока не барьер. Если человек превращается в мудака, мы его выпускаем в open market :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588652251205472256">10:36</a>

</div>

<div class="tweet">

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") у нас был один случай, когда человек откровенно срал на нормы поведения. Приходил когда угодно, забивал на работу
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588666015824875520">11:31</a>

</div>

<div class="tweet">

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") в общем этого уже достаточно
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588666087421652992">11:31</a>

</div>

<div class="tweet">

Есть классное правило: если человек не умеет - научим, не учится - вылечим, не лечится - отпустим. Это как золотое сечение в менеджменте.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588666518990360576">11:33</a>

</div>

<div class="tweet">

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") А как вы юридически этого достигаете? Платите отступные в 5-6 зарплат или увольняете по статье?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588668061705711616">11:39</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") как правило никто не хочет, чтобы его увольняли по статье. В моей практике всегда договаривались на плюс один оклад.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588668692302540800">11:42</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") довольно обычная практика для многих компаний :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588668927640756224">11:43</a>

</div>

<div class="tweet">

RT [@janitor42](https://twitter.com/janitor42 "Валерий"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как "лечите"?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588669502868586497">11:45</a>

</div>

<div class="tweet">

.[@janitor42](https://twitter.com/janitor42 "Валерий") рассказываем, показываем как принято в компании работать. Бывает такое, что для человека в новинку бывает философия компании
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588669511601147904">11:45</a>

</div>

<div class="tweet">

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") Спасибо. В разных отраслях по разному, я 5-6 не просто так написала. Значит у разработчиков пока не…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588669707378675712">11:46</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") теперь уже мне интересно, а где так?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588669715939250176">11:46</a>

</div>

<div class="tweet">

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") [@rusgautama](https://twitter.com/rusgautama "Rus Buddha") у них как правило и оклады поменьше, чем у разработчиков
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588671085505314817">11:51</a>

</div>

<div class="tweet">

Хочу поделиться «Must read!» чтивом. Надо кому? :\) RT — поделиться. FAV — забить.
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588672628644257793">11:57</a>

</div>

<div class="tweet">

"45 татуировок менеджера". Обязательна к прочтению для руководителей всех мастей. Прям библия [goo.gl/YzqUtV](http://t.co/Y4JYi8rtDh "http://goo.gl/YzqUtV") [pic.twitter.com/Gc5aRo4nzR](http://t.co/Gc5aRo4nzR)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588715497040048128">14:48</a>

</div>

<div class="tweet">

"Руководство фасилитатора". Вот уж что поистине помогает собрать команду в кучку и "двигать" [goo.gl/ruZWXT](http://t.co/FL9Y3dCIbc "http://goo.gl/ruZWXT") [pic.twitter.com/r2BXs7CKXV](http://t.co/r2BXs7CKXV)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588716199128760320">14:50</a>

</div>

<div class="tweet">

"Как пасти котов". Это прям о сложностях взаимоотношений с различнами типами разработчиков [goo.gl/j4jcDj](http://t.co/EP1zt3wEAv "http://goo.gl/j4jcDj") [pic.twitter.com/v4HuClt5FN](http://t.co/v4HuClt5FN)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588717074643550208">14:54</a>

</div>

<div class="tweet">

"Проект Фениск". Книга про то, как DevOps побеждает "плесень" :\) [goo.gl/2D45aQ](http://t.co/CCIeBMGtVI "http://goo.gl/2D45aQ") [pic.twitter.com/nzRIJENQbZ](http://t.co/nzRIJENQbZ)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588717948610732032">14:57</a>

</div>

<div class="tweet">

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") "Как пасти скотов"... сверху вниз есть книги, а снизу вверх? Например "Как работать с менеджером, если он мудак…
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588718231227080705">14:58</a>

</div>

<div class="tweet">

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") одно из двух: либо такого менеджера скоро "уйдут", либо не работать с ним совсем :\)
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588718443903504384">14:59</a>

</div>

<div class="tweet">

"Правила Ашманова". Неплохец, к слову сказать. Тоже маст рид для управленцев в IT [goo.gl/fCkIzl](http://t.co/3c8rZtn4XU "http://goo.gl/fCkIzl")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588719178200326144">15:02</a>

</div>

<div class="tweet">

RT [@dcromster](https://twitter.com/dcromster "Roman Milovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А если серьезно - есть книги "снизу вверх"?
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588719397763690497">15:03</a>

</div>

<div class="tweet">

.[@dcromster](https://twitter.com/dcromster "Roman Milovskiy") честно говоря не встречал :\( Но если кто посоветует, с удовольствием прочту
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588719494203363329">15:03</a>

</div>

<div class="tweet">

"Social Intelligence". А эта книга взорвала мой мозг, она про то, как современный мир меняет взаимоотношения людей [goo.gl/xjtYHl](http://t.co/dRElivuvts "http://goo.gl/xjtYHl")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588720391532711936">15:07</a>

</div>

<div class="tweet">

В общем вот вам для затравочки :\) Остальные книги буду со временим выкладывать у себя в аккаунте [@lomakin](https://twitter.com/lomakin "Alexander Lomakin")
 <a class="tweet__time" href="https://twitter.com/jsunderhood/status/588720696152498176">15:08</a>

</div>

## Ссылки

### goo.gl  
<a class="url" href="http://goo.gl/YzqUtV" target="_blank">http://goo.gl/YzqUtV</a>
<a class="url" href="http://goo.gl/ruZWXT" target="_blank">http://goo.gl/ruZWXT</a>
<a class="url" href="http://goo.gl/j4jcDj" target="_blank">http://goo.gl/j4jcDj</a>
<a class="url" href="http://goo.gl/2D45aQ" target="_blank">http://goo.gl/2D45aQ</a>
<a class="url" href="http://goo.gl/fCkIzl" target="_blank">http://goo.gl/fCkIzl</a>
<a class="url" href="http://goo.gl/xjtYHl" target="_blank">http://goo.gl/xjtYHl</a>

### Другие

<a class="url" href="https://github.com/rambler-digital-solutions" target="_blank">https://github.com/rambler-digital-solutions</a>
<a class="url" href="http://www.nativegrid.com" target="_blank">http://www.nativegrid.com</a>
<a class="url" href="http://motor.ru" target="_blank">http://motor.ru</a>
<a class="url" href="http://secretmag.ru" target="_blank">http://secretmag.ru</a>
<a class="url" href="http://scrumtrek.ru/trainings/view/22/147/" target="_blank">http://scrumtrek.ru/trainings/view/22/147/</a>
<a class="url" href="http://capistranorb.com" target="_blank">http://capistranorb.com</a>
<a class="url" href="http://www.fabfile.org" target="_blank">http://www.fabfile.org</a>
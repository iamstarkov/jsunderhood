# @lomakin

_13 Apr 2015_

Всем привет! Меня зовут Александр Ломакин. Я руковожу веб-разработкой в Rambler Digital Solutions. [0][0]

На этой неделе @jsunderhood веду я. Буду рассказывать про веб-разработку, менеджмент разработки и про все около этого :) [1][1]

Можно задавать вопросы о разработке lenta.ru, gazeta.ru, secretmag.ru, motor.ru и вообще про то, как в RDS и Rambler&amp;Co устроена рабработка [2][2]

.@matmuchrapna @gladkih_m @toivonens ссори, теперь исправлюсь :) [3][3]

.@Rukomoynikov в нашей CMS используем ES6. Вот небольшая подборочка нашего опенсорса :) - https://t.co/U3iBinepLE [4][4]

.@Rukomoynikov в RDS сейчас работает около ста человек [5][5]

.@Rukomoynikov Backbone любим, но знаете как говорят: любовь живет три года... Пока что мы не подтверждаем это правило :) [6][6]

Недавно вышел http://t.co/ohWXrcIVym от Look At Media [7][7]

Все бы круто, но всегда плохо относился к CMS, которые имплементируют чей-то устоявшийся процесс работы. [8][8]

А как быть если хочу купить ее, а у меня все работает не так? Ну процессы, например, по другому выстроены? [9][9]

Гораздо более привлекательной мне кажется идея фреймворка для редакторских систем. [10][10]

Где можно собрать готовую CMS из различных UI компонентов. А на бэкэнде хранить это все как помесь структурированных и schema-free данных. [11][11]

В общем к этому мы и идем у нас в компании. Изданий у нас много, запросы к "админочкам" растут в геометрической прогрессии. [12][12]

И, в общем-то, это единственный вариант совладать со всем этим: тут, как говорится, и редакторы сыты, и разработчики целы. [13][13]

RT @shuvalov_anton: Продолжаю читать про React, и кажется, сейчас я скоро буду визжать как сучка. По-моему, только что взвизгнул… Вот снова… [14][14]

Расскажу немного о том, как сейчас работает lenta.ru [15][15]

Редактора работают в редакторской системе, которая представляет из себя Backbone-приложение, которое общается с Ruby-бэкэндом через REST API [16][16]

Вся начинка аккуратненько кладется в PostgreSQL [17][17]

Дальше спец. скрипт, формирует из всего многообразия связанных данных Mongo-документ, который можно достать одним запросом на самом сайте [18][18]

Так что когда вы заходите на lenta.ru, вы фактически таскаете документы из коллекций в Mongo, которые к тому же покрыты жирным слоем кеша [19][19]

И вообще, из всех типов проектов, над которыми мне приходилось, СМИ — это самое простое в плане архитектуры [20][20]

.@Stammru меньше 10. Вообще говоря, lenta.ru может работать на одной на напрягаясь особенно. Но для надежности их, конечно, больше. [21][21]

В общем что мы все про Ленту? :) Как вам новые http://t.co/Btuq0eA48X и http://t.co/D7HPKpnpZV? [22][22]

Кстати, вот например сегодня у нас в RDS очередной тимбилдинг среди разработчиков [23][23]

Будем пить горячие напитки и и холиварить на разные темы :) Например почему Angular плохо, а за React'ом будущее [24][24]

Всем привет с тимбилдинга! :) http://t.co/9s1LO8RWBK [25][25]

.@dcromster Angular хорош на коротких дистанциях, но я бы не стал его применять в больших и долгоиграющих продуктах. А вы как считаете? [26][26]

.@_h4_ были ;) [27][27]

.@VasyaRomashova женщины работают, где же еще :) [28][28]

.@yoksel ты же недалеко сидишь — приходи, советуй как правильно :) [29][29]

RT @r3nya: @jsunderhood а мне нравится новый дизайн мотора … Такие дела. :) [30][30]

.@_h4_ я лично каждое утро съедаю по Angular разработчику :D [31][31]

.@yoksel отвечу сразу про все. SVG помогает не плодить кучу спрайтов для всяких ретин и пр. [32][32]

RT @roman01la: @yoksel @jsunderhood инлайновый SVG — меньше запросов к серверу, но минус в отсутствии поддержки IE8. [33][33]

.@dcromster мы уже давно дружим с Backbone. Уже три года. И пока не собираемся с него резко спрыгивать :) [34][34]

Про что рассказать, ребята? RT - как мы нанимаем сотрудников в RDS. FAV - про Agile. [35][35]

.@roman01la во время разработки не мешает. По крайней мере разработчики не жалуются :) [36][36]

.@yoksel давай наводить мосты любви и дружбы! Нам очень не хватает твоей поддержки в оффлайне :) [37][37]

Кажется с большим отрывом победил Agile :) [38][38]

Год назад я прошел курс Certified Agile Professional http://t.co/gJGAIWfHrm [39][39]

И тогда мой взгляд на многие вещи в процессе разработки очень сильно изменился [40][40]

Во первых я понял, что Kanban это просто идеальный инструмент для визуализации того хаоса, который происходит обычно в проектах [41][41]

Kanban позволяет визуализировать процесс доставки инкремента продукта и понять, где же все-таки затык и кто лажает [42][42]

Scrum же скорее подходит для тех команд, где процесс уже отлажен и более менее стабильный velocity у команды [43][43]

У нас в компании есть команды которые используют и тот и другой подход [44][44]

Поэтому что-то конкретное рекомендовать сложно. Самое главное - готовность команды к осмысленному использованию тех или иных инструментов [45][45]

.@subzey разумеется используем. По умолчанию кол-во разрабов * 2. Затем корректируем по необходимости [46][46]

.@aod_toxic боюсь что PMBOK и PRINCE2 запретные слова в моем Agile мирке :) [47][47]

.@mbektimirov там где Kanban - релизим по факту реализации фичи. Там где Скрам - по завершении спринта. [48][48]

.@mbektimirov если проеб на стороне админов - они крайние. Если ошибка в коде - прогеры. [49][49]

.@mbektimirov трекер задач — Jira/Trello [50][50]

.@mbektimirov в качестве CI - TeamCity, правда пока не на всех проектах [51][51]

.@mbektimirov откатиться легко, потому что мы держим последние n версий проекта рядышком в соседних папках :) [52][52]

.@dcromster есть три варианта Capistrano (http://t.co/BGEji78r9p), Fabric (http://t.co/VXUiPzuLa8) и наш собственный скрипт [53][53]

.@mbektimirov пока нет, но в целом у нас есть в планах внедрение метрики test coverage не менее n% :) [54][54]

Расскажу немного о том, как мы собеседуем людей [55][55]

HR служба подбирает потенциальных кандидатов, а затем одобряет их у руководителя направления (сейчас их три: Ruby, Python, Frontend) [56][56]

Как правило мы проводим одно собеседование с кандидатом [57][57]

Собеседование состоит из двух частей: вопросы кандидату, в том числе и технические; вопросы кандидата к нам [58][58]

Технические вопросы включают в себя вопросы на знание языка и умение проектировать архитектуру приложения [59][59]

Дурацких вопросов типа “почему крышка люка круглая” мы не задаем [60][60]

Если есть сомнения в кандидате, то даем тестовое задание из серии написать маленький но законченный продукт [61][61]

Например: написать небольшой форум с сокетами и блэкджеком; свой Pomodoro-таймер нy и в таком духе [62][62]

Очень редко приглашаем на второе собеседование. Только когда совсем ничего не понятно о человеке [63][63]

Как правило одного часа достаточно, чтобы составить впечатление о человеке [64][64]

RT @rusgautama: @jsunderhood а если, допустим, у человека хороший опыт, и практический, и теоретический, но как человек он полнейший мудак? [65][65]

.@rusgautama тогда в топку. С мудаками не готов работать, даже если они звезды мировой величины. Звезды светят, а команды делают продукты :) [66][66]

RT @rusgautama: @jsunderhood скажем, конфликтный, ленивый на рутинную работу, не пунктуальный. И это выясняется после исп. срока. [67][67]

.@rusgautama окончание испытательного срока не барьер. Если человек превращается в мудака, мы его выпускаем в open market :) [68][68]

.@dcromster @rusgautama у нас был один случай, когда человек откровенно срал на нормы поведения. Приходил когда угодно, забивал на работу [69][69]

.@dcromster @rusgautama в общем этого уже достаточно [70][70]

Есть классное правило: если человек не умеет - научим, не учится - вылечим, не лечится - отпустим. Это как золотое сечение в менеджменте. [71][71]

RT @toivonens: @jsunderhood @rusgautama А как вы юридически этого достигаете? Платите отступные в 5-6 зарплат или увольняете по статье? [72][72]

.@toivonens @rusgautama как правило никто не хочет, чтобы его увольняли по статье. В моей практике всегда договаривались на плюс один оклад. [73][73]

.@toivonens @rusgautama довольно обычная практика для многих компаний :) [74][74]

RT @janitor42: @jsunderhood как "лечите"? [75][75]

.@janitor42 рассказываем, показываем как принято в компании работать. Бывает такое, что для человека в новинку бывает философия компании [76][76]

RT @toivonens: @jsunderhood @rusgautama Спасибо. В разных отраслях по разному, я 5-6 не просто так написала. Значит у разработчиков пока не… [77][77]

.@toivonens @rusgautama теперь уже мне интересно, а где так? [78][78]

.@toivonens @rusgautama у них как правило и оклады поменьше, чем у разработчиков [79][79]

Хочу поделиться «Must read!» чтивом. Надо кому? :) RT — поделиться. FAV — забить. [80][80]

"45 татуировок менеджера". Обязательна к прочтению для руководителей всех мастей. Прям библия http://t.co/Y4JYi8rtDh http://t.co/Gc5aRo4nzR [81][81]

"Руководство фасилитатора". Вот уж что поистине помогает собрать команду в кучку и "двигать" http://t.co/FL9Y3dCIbc http://t.co/r2BXs7CKXV [82][82]

"Как пасти котов". Это прям о сложностях взаимоотношений с различнами типами разработчиков http://t.co/EP1zt3wEAv http://t.co/v4HuClt5FN [83][83]

"Проект Фениск". Книга про то, как DevOps побеждает "плесень" :) http://t.co/CCIeBMGtVI http://t.co/nzRIJENQbZ [84][84]

RT @dcromster: @jsunderhood "Как пасти скотов"... сверху вниз есть книги, а снизу вверх? Например "Как работать с менеджером, если он мудак… [85][85]

.@dcromster одно из двух: либо такого менеджера скоро "уйдут", либо не работать с ним совсем :) [86][86]

"Правила Ашманова". Неплохец, к слову сказать. Тоже маст рид для управленцев в IT http://t.co/3c8rZtn4XU [87][87]

RT @dcromster: @jsunderhood А если серьезно - есть книги "снизу вверх"? [88][88]

.@dcromster честно говоря не встречал :( Но если кто посоветует, с удовольствием прочту [89][89]

"Social Intelligence". А эта книга взорвала мой мозг, она про то, как современный мир меняет взаимоотношения людей http://t.co/dRElivuvts [90][90]

В общем вот вам для затравочки :) Остальные книги буду со временим выкладывать у себя в аккаунте @lomakin [91][91]

[0]: https://twitter.com/jsunderhood/status/587596754524188672
[1]: https://twitter.com/jsunderhood/status/587597073001906176
[2]: https://twitter.com/jsunderhood/status/587597671654907906
[3]: https://twitter.com/jsunderhood/status/587604454779854848
[4]: https://twitter.com/jsunderhood/status/587604964823932928
[5]: https://twitter.com/jsunderhood/status/587605138317139968
[6]: https://twitter.com/jsunderhood/status/587606385988411392
[7]: https://twitter.com/jsunderhood/status/587609497746726913
[8]: https://twitter.com/jsunderhood/status/587609828769542144
[9]: https://twitter.com/jsunderhood/status/587609951905964032
[10]: https://twitter.com/jsunderhood/status/587610256710180864
[11]: https://twitter.com/jsunderhood/status/587611014155350016
[12]: https://twitter.com/jsunderhood/status/587613818999726081
[13]: https://twitter.com/jsunderhood/status/587614114333204480
[14]: https://twitter.com/jsunderhood/status/587881974955642880
[15]: https://twitter.com/jsunderhood/status/587887977956777984
[16]: https://twitter.com/jsunderhood/status/587888742406422528
[17]: https://twitter.com/jsunderhood/status/587889014696476672
[18]: https://twitter.com/jsunderhood/status/587889503018344448
[19]: https://twitter.com/jsunderhood/status/587889872075128832
[20]: https://twitter.com/jsunderhood/status/587890554865852416
[21]: https://twitter.com/jsunderhood/status/587901023966081024
[22]: https://twitter.com/jsunderhood/status/587965797798170624
[23]: https://twitter.com/jsunderhood/status/588013160654864386
[24]: https://twitter.com/jsunderhood/status/588013592101969921
[25]: https://twitter.com/jsunderhood/status/588022140328419328
[26]: https://twitter.com/jsunderhood/status/588255173857959937
[27]: https://twitter.com/jsunderhood/status/588255674800410624
[28]: https://twitter.com/jsunderhood/status/588255804668702721
[29]: https://twitter.com/jsunderhood/status/588256713297555456
[30]: https://twitter.com/jsunderhood/status/588257109097218048
[31]: https://twitter.com/jsunderhood/status/588257703803359232
[32]: https://twitter.com/jsunderhood/status/588259802599546881
[33]: https://twitter.com/jsunderhood/status/588259851400323073
[34]: https://twitter.com/jsunderhood/status/588262447267639299
[35]: https://twitter.com/jsunderhood/status/588264402463363072
[36]: https://twitter.com/jsunderhood/status/588271712199905282
[37]: https://twitter.com/jsunderhood/status/588272092510035970
[38]: https://twitter.com/jsunderhood/status/588332981334466561
[39]: https://twitter.com/jsunderhood/status/588344126917238784
[40]: https://twitter.com/jsunderhood/status/588344484171231232
[41]: https://twitter.com/jsunderhood/status/588344705391407104
[42]: https://twitter.com/jsunderhood/status/588345041325817856
[43]: https://twitter.com/jsunderhood/status/588345816366116864
[44]: https://twitter.com/jsunderhood/status/588345925753577473
[45]: https://twitter.com/jsunderhood/status/588346219086409728
[46]: https://twitter.com/jsunderhood/status/588347894786318336
[47]: https://twitter.com/jsunderhood/status/588349076942491648
[48]: https://twitter.com/jsunderhood/status/588353238094721025
[49]: https://twitter.com/jsunderhood/status/588353359259762689
[50]: https://twitter.com/jsunderhood/status/588353540067823616
[51]: https://twitter.com/jsunderhood/status/588353774466531328
[52]: https://twitter.com/jsunderhood/status/588354824950910976
[53]: https://twitter.com/jsunderhood/status/588356815945146369
[54]: https://twitter.com/jsunderhood/status/588360862076903425
[55]: https://twitter.com/jsunderhood/status/588643536603611136
[56]: https://twitter.com/jsunderhood/status/588643576357203968
[57]: https://twitter.com/jsunderhood/status/588643609542549506
[58]: https://twitter.com/jsunderhood/status/588643653050093569
[59]: https://twitter.com/jsunderhood/status/588643684847120385
[60]: https://twitter.com/jsunderhood/status/588643724793614336
[61]: https://twitter.com/jsunderhood/status/588643758943690753
[62]: https://twitter.com/jsunderhood/status/588643791298519040
[63]: https://twitter.com/jsunderhood/status/588643978767110144
[64]: https://twitter.com/jsunderhood/status/588644133826338817
[65]: https://twitter.com/jsunderhood/status/588651688447324160
[66]: https://twitter.com/jsunderhood/status/588651985920008192
[67]: https://twitter.com/jsunderhood/status/588652057457987584
[68]: https://twitter.com/jsunderhood/status/588652251205472256
[69]: https://twitter.com/jsunderhood/status/588666015824875520
[70]: https://twitter.com/jsunderhood/status/588666087421652992
[71]: https://twitter.com/jsunderhood/status/588666518990360576
[72]: https://twitter.com/jsunderhood/status/588668061705711616
[73]: https://twitter.com/jsunderhood/status/588668692302540800
[74]: https://twitter.com/jsunderhood/status/588668927640756224
[75]: https://twitter.com/jsunderhood/status/588669502868586497
[76]: https://twitter.com/jsunderhood/status/588669511601147904
[77]: https://twitter.com/jsunderhood/status/588669707378675712
[78]: https://twitter.com/jsunderhood/status/588669715939250176
[79]: https://twitter.com/jsunderhood/status/588671085505314817
[80]: https://twitter.com/jsunderhood/status/588672628644257793
[81]: https://twitter.com/jsunderhood/status/588715497040048128
[82]: https://twitter.com/jsunderhood/status/588716199128760320
[83]: https://twitter.com/jsunderhood/status/588717074643550208
[84]: https://twitter.com/jsunderhood/status/588717948610732032
[85]: https://twitter.com/jsunderhood/status/588718231227080705
[86]: https://twitter.com/jsunderhood/status/588718443903504384
[87]: https://twitter.com/jsunderhood/status/588719178200326144
[88]: https://twitter.com/jsunderhood/status/588719397763690497
[89]: https://twitter.com/jsunderhood/status/588719494203363329
[90]: https://twitter.com/jsunderhood/status/588720391532711936
[91]: https://twitter.com/jsunderhood/status/588720696152498176
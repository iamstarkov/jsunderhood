# @lomakin

_13 Apr 2015_

Всем привет! Меня зовут Александр Ломакин. Я руковожу веб-разработкой в Rambler Digital Solutions. [0][0]

На этой неделе @jsunderhood веду я. Буду рассказывать про веб-разработку, менеджмент разработки и про все около этого :) [1][1]

Можно задавать вопросы о разработке lenta.ru, gazeta.ru, secretmag.ru, motor.ru и вообще про то, как в RDS и Rambler&amp;Co устроена рабработка [2][2]

@toivonens изучаем :) [3][3]

@dcromster я затрону эти темы в течении недели, может быть пока есть какой-то особенно острый вопрос? :) [4][4]

@toivonens давай по порядку, за кем мы активно следим: [5][5]

@toivonens 1) технический блог The New York Times [6][6]

@toivonens http://t.co/212qch4PF3 [7][7]

@toivonens 2) продуктовый блог Vox Media (http://t.co/CVlLB90mn3) [8][8]

@toivonens 3) технический блог The Guardian (http://t.co/06gNM1NAmC) [9][9]

@mesilov Ruby, Rails, PostgreSQL, Mongo и самая интересная часть для JS-разработчиков - Backbone :) [10][10]

@toivonens смотрим на опыт зарубежных коллег и применяем интересные фичи в нашей CMS, на которой, к слову, работает не только lenta.ru [11][11]

.@matmuchrapna @gladkih_m @toivonens ссори, теперь исправлюсь :) [12][12]

.@Rukomoynikov в нашей CMS используем ES6. Вот небольшая подборочка нашего опенсорса :) - https://t.co/U3iBinepLE [13][13]

.@Rukomoynikov в RDS сейчас работает около ста человек [14][14]

.@Rukomoynikov Backbone любим, но знаете как говорят: любовь живет три года... Пока что мы не подтверждаем это правило :) [15][15]

Недавно вышел http://t.co/ohWXrcIVym от Look At Media [16][16]

Все бы круто, но всегда плохо относился к CMS, которые имплементируют чей-то устоявшийся процесс работы. [17][17]

А как быть если хочу купить ее, а у меня все работает не так? Ну процессы, например, по другому выстроены? [18][18]

Гораздо более привлекательной мне кажется идея фреймворка для редакторских систем. [19][19]

Где можно собрать готовую CMS из различных UI компонентов. А на бэкэнде хранить это все как помесь структурированных и schema-free данных. [20][20]

В общем к этому мы и идем у нас в компании. Изданий у нас много, запросы к "админочкам" растут в геометрической прогрессии. [21][21]

И, в общем-то, это единственный вариант совладать со всем этим: тут, как говорится, и редакторы сыты, и разработчики целы. [22][22]

RT @shuvalov_anton: Продолжаю читать про React, и кажется, сейчас я скоро буду визжать как сучка. По-моему, только что взвизгнул… Вот снова… [23][23]

Расскажу немного о том, как сейчас работает lenta.ru [24][24]

Редактора работают в редакторской системе, которая представляет из себя Backbone-приложение, которое общается с Ruby-бэкэндом через REST API [25][25]

Вся начинка аккуратненько кладется в PostgreSQL [26][26]

Дальше спец. скрипт, формирует из всего многообразия связанных данных Mongo-документ, который можно достать одним запросом на самом сайте [27][27]

Так что когда вы заходите на lenta.ru, вы фактически таскаете документы из коллекций в Mongo, которые к тому же покрыты жирным слоем кеша [28][28]

И вообще, из всех типов проектов, над которыми мне приходилось, СМИ — это самое простое в плане архитектуры [29][29]

.@Stammru меньше 10. Вообще говоря, lenta.ru может работать на одной на напрягаясь особенно. Но для надежности их, конечно, больше. [30][30]

@marinintim пока не доступен, насколько я знаю [31][31]

В общем что мы все про Ленту? :) Как вам новые http://t.co/Btuq0eA48X и http://t.co/D7HPKpnpZV? [32][32]

Кстати, вот например сегодня у нас в RDS очередной тимбилдинг среди разработчиков [33][33]

Будем пить горячие напитки и и холиварить на разные темы :) Например почему Angular плохо, а за React'ом будущее [34][34]

Всем привет с тимбилдинга! :) http://t.co/9s1LO8RWBK [35][35]

.@dcromster Angular хорош на коротких дистанциях, но я бы не стал его применять в больших и долгоиграющих продуктах. А вы как считаете? [36][36]

@Stammru да, забавная ассоциация :) [37][37]

.@_h4_ были ;) [38][38]

.@VasyaRomashova женщины работают, где же еще :) [39][39]

@lisovskyvlad @ivaravko много бегает по утрам, поэтому пиво ему претит :D [40][40]

@prbigbrother спасибо за фидбек — поправим [41][41]

@yoksel а в чем странность? И почему он не нужен на твой взгляд? [42][42]

.@yoksel ты же недалеко сидишь — приходи, советуй как правильно :) [43][43]

@Nsmolentseva в следующий раз подумаем над тем чтобы приглашать коллег со стороны. Присоединишься? :) [44][44]

RT @r3nya: @jsunderhood а мне нравится новый дизайн мотора … Такие дела. :) [45][45]

.@_h4_ я лично каждое утро съедаю по Angular разработчику :D [46][46]

.@yoksel отвечу сразу про все. SVG помогает не плодить кучу спрайтов для всяких ретин и пр. [47][47]

RT @roman01la: @yoksel @jsunderhood инлайновый SVG — меньше запросов к серверу, но минус в отсутствии поддержки IE8. [48][48]

.@dcromster мы уже давно дружим с Backbone. Уже три года. И пока не собираемся с него резко спрыгивать :) [49][49]

Про что рассказать, ребята? RT - как мы нанимаем сотрудников в RDS. FAV - про Agile. [50][50]

.@roman01la во время разработки не мешает. По крайней мере разработчики не жалуются :) [51][51]

.@yoksel давай наводить мосты любви и дружбы! Нам очень не хватает твоей поддержки в оффлайне :) [52][52]

Кажется с большим отрывом победил Agile :) [53][53]

Год назад я прошел курс Certified Agile Professional http://t.co/gJGAIWfHrm [54][54]

И тогда мой взгляд на многие вещи в процессе разработки очень сильно изменился [55][55]

Во первых я понял, что Kanban это просто идеальный инструмент для визуализации того хаоса, который происходит обычно в проектах [56][56]

Kanban позволяет визуализировать процесс доставки инкремента продукта и понять, где же все-таки затык и кто лажает [57][57]

Scrum же скорее подходит для тех команд, где процесс уже отлажен и более менее стабильный velocity у команды [58][58]

У нас в компании есть команды которые используют и тот и другой подход [59][59]

Поэтому что-то конкретное рекомендовать сложно. Самое главное - готовность команды к осмысленному использованию тех или иных инструментов [60][60]

.@subzey разумеется используем. По умолчанию кол-во разрабов * 2. Затем корректируем по необходимости [61][61]

.@aod_toxic боюсь что PMBOK и PRINCE2 запретные слова в моем Agile мирке :) [62][62]

.@mbektimirov там где Kanban - релизим по факту реализации фичи. Там где Скрам - по завершении спринта. [63][63]

.@mbektimirov если проеб на стороне админов - они крайние. Если ошибка в коде - прогеры. [64][64]

.@mbektimirov трекер задач — Jira/Trello [65][65]

.@mbektimirov в качестве CI - TeamCity, правда пока не на всех проектах [66][66]

.@mbektimirov откатиться легко, потому что мы держим последние n версий проекта рядышком в соседних папках :) [67][67]

.@dcromster есть три варианта Capistrano (http://t.co/BGEji78r9p), Fabric (http://t.co/VXUiPzuLa8) и наш собственный скрипт [68][68]

.@mbektimirov пока нет, но в целом у нас есть в планах внедрение метрики test coverage не менее n% :) [69][69]

Расскажу немного о том, как мы собеседуем людей [70][70]

HR служба подбирает потенциальных кандидатов, а затем одобряет их у руководителя направления (сейчас их три: Ruby, Python, Frontend) [71][71]

Как правило мы проводим одно собеседование с кандидатом [72][72]

Собеседование состоит из двух частей: вопросы кандидату, в том числе и технические; вопросы кандидата к нам [73][73]

Технические вопросы включают в себя вопросы на знание языка и умение проектировать архитектуру приложения [74][74]

Дурацких вопросов типа “почему крышка люка круглая” мы не задаем [75][75]

Если есть сомнения в кандидате, то даем тестовое задание из серии написать маленький но законченный продукт [76][76]

Например: написать небольшой форум с сокетами и блэкджеком; свой Pomodoro-таймер нy и в таком духе [77][77]

Очень редко приглашаем на второе собеседование. Только когда совсем ничего не понятно о человеке [78][78]

Как правило одного часа достаточно, чтобы составить впечатление о человеке [79][79]

@SilentImp просто так боюсь нет, а вот если захочешь присоединиться к нам - милости просим :) [80][80]

RT @rusgautama: @jsunderhood а если, допустим, у человека хороший опыт, и практический, и теоретический, но как человек он полнейший мудак? [81][81]

.@rusgautama тогда в топку. С мудаками не готов работать, даже если они звезды мировой величины. Звезды светят, а команды делают продукты :) [82][82]

RT @rusgautama: @jsunderhood скажем, конфликтный, ленивый на рутинную работу, не пунктуальный. И это выясняется после исп. срока. [83][83]

.@rusgautama окончание испытательного срока не барьер. Если человек превращается в мудака, мы его выпускаем в open market :) [84][84]

.@dcromster @rusgautama у нас был один случай, когда человек откровенно срал на нормы поведения. Приходил когда угодно, забивал на работу [85][85]

.@dcromster @rusgautama в общем этого уже достаточно [86][86]

Есть классное правило: если человек не умеет - научим, не учится - вылечим, не лечится - отпустим. Это как золотое сечение в менеджменте. [87][87]

RT @toivonens: @jsunderhood @rusgautama А как вы юридически этого достигаете? Платите отступные в 5-6 зарплат или увольняете по статье? [88][88]

.@toivonens @rusgautama как правило никто не хочет, чтобы его увольняли по статье. В моей практике всегда договаривались на плюс один оклад. [89][89]

.@toivonens @rusgautama довольно обычная практика для многих компаний :) [90][90]

RT @janitor42: @jsunderhood как "лечите"? [91][91]

.@janitor42 рассказываем, показываем как принято в компании работать. Бывает такое, что для человека в новинку бывает философия компании [92][92]

RT @toivonens: @jsunderhood @rusgautama Спасибо. В разных отраслях по разному, я 5-6 не просто так написала. Значит у разработчиков пока не… [93][93]

.@toivonens @rusgautama теперь уже мне интересно, а где так? [94][94]

.@toivonens @rusgautama у них как правило и оклады поменьше, чем у разработчиков [95][95]

Хочу поделиться «Must read!» чтивом. Надо кому? :) RT — поделиться. FAV — забить. [96][96]

@SilentImp какой ты легкомысленный :D [97][97]

"45 татуировок менеджера". Обязательна к прочтению для руководителей всех мастей. Прям библия http://t.co/Y4JYi8rtDh http://t.co/Gc5aRo4nzR [98][98]

"Руководство фасилитатора". Вот уж что поистине помогает собрать команду в кучку и "двигать" http://t.co/FL9Y3dCIbc http://t.co/r2BXs7CKXV [99][99]

"Как пасти котов". Это прям о сложностях взаимоотношений с различнами типами разработчиков http://t.co/EP1zt3wEAv http://t.co/v4HuClt5FN [100][100]

"Проект Фениск". Книга про то, как DevOps побеждает "плесень" :) http://t.co/CCIeBMGtVI http://t.co/nzRIJENQbZ [101][101]

RT @dcromster: @jsunderhood "Как пасти скотов"... сверху вниз есть книги, а снизу вверх? Например "Как работать с менеджером, если он мудак… [102][102]

.@dcromster одно из двух: либо такого менеджера скоро "уйдут", либо не работать с ним совсем :) [103][103]

"Правила Ашманова". Неплохец, к слову сказать. Тоже маст рид для управленцев в IT http://t.co/3c8rZtn4XU [104][104]

RT @dcromster: @jsunderhood А если серьезно - есть книги "снизу вверх"? [105][105]

.@dcromster честно говоря не встречал :( Но если кто посоветует, с удовольствием прочту [106][106]

"Social Intelligence". А эта книга взорвала мой мозг, она про то, как современный мир меняет взаимоотношения людей http://t.co/dRElivuvts [107][107]

В общем вот вам для затравочки :) Остальные книги буду со временим выкладывать у себя в аккаунте @lomakin [108][108]

@ixth @dcromster у меня она есть в списках, но ниже по приоритету [109][109]

@shuvalov_anton там есть ценные мысли. Почитай все [110][110]

@greybax ага, например здесь https://t.co/U3iBinepLE [111][111]

@greybax про уведомления по почте не понял. У нас проходят внутренние встречи, где мы делимся инфой и даем коллегам имена реп где-что брать [112][112]

[0]: https://twitter.com/jsunderhood/status/587596754524188672
[1]: https://twitter.com/jsunderhood/status/587597073001906176
[2]: https://twitter.com/jsunderhood/status/587597671654907906
[3]: https://twitter.com/jsunderhood/status/587599751362834432
[4]: https://twitter.com/jsunderhood/status/587600026085564417
[5]: https://twitter.com/jsunderhood/status/587601576698720256
[6]: https://twitter.com/jsunderhood/status/587601729836953600
[7]: https://twitter.com/jsunderhood/status/587602166514343937
[8]: https://twitter.com/jsunderhood/status/587602181441900544
[9]: https://twitter.com/jsunderhood/status/587602668190834688
[10]: https://twitter.com/jsunderhood/status/587603011909906433
[11]: https://twitter.com/jsunderhood/status/587603565507653632
[12]: https://twitter.com/jsunderhood/status/587604454779854848
[13]: https://twitter.com/jsunderhood/status/587604964823932928
[14]: https://twitter.com/jsunderhood/status/587605138317139968
[15]: https://twitter.com/jsunderhood/status/587606385988411392
[16]: https://twitter.com/jsunderhood/status/587609497746726913
[17]: https://twitter.com/jsunderhood/status/587609828769542144
[18]: https://twitter.com/jsunderhood/status/587609951905964032
[19]: https://twitter.com/jsunderhood/status/587610256710180864
[20]: https://twitter.com/jsunderhood/status/587611014155350016
[21]: https://twitter.com/jsunderhood/status/587613818999726081
[22]: https://twitter.com/jsunderhood/status/587614114333204480
[23]: https://twitter.com/jsunderhood/status/587881974955642880
[24]: https://twitter.com/jsunderhood/status/587887977956777984
[25]: https://twitter.com/jsunderhood/status/587888742406422528
[26]: https://twitter.com/jsunderhood/status/587889014696476672
[27]: https://twitter.com/jsunderhood/status/587889503018344448
[28]: https://twitter.com/jsunderhood/status/587889872075128832
[29]: https://twitter.com/jsunderhood/status/587890554865852416
[30]: https://twitter.com/jsunderhood/status/587901023966081024
[31]: https://twitter.com/jsunderhood/status/587930239298338816
[32]: https://twitter.com/jsunderhood/status/587965797798170624
[33]: https://twitter.com/jsunderhood/status/588013160654864386
[34]: https://twitter.com/jsunderhood/status/588013592101969921
[35]: https://twitter.com/jsunderhood/status/588022140328419328
[36]: https://twitter.com/jsunderhood/status/588255173857959937
[37]: https://twitter.com/jsunderhood/status/588255556479090688
[38]: https://twitter.com/jsunderhood/status/588255674800410624
[39]: https://twitter.com/jsunderhood/status/588255804668702721
[40]: https://twitter.com/jsunderhood/status/588255924940320768
[41]: https://twitter.com/jsunderhood/status/588256112501248000
[42]: https://twitter.com/jsunderhood/status/588256321499222017
[43]: https://twitter.com/jsunderhood/status/588256713297555456
[44]: https://twitter.com/jsunderhood/status/588256996920586240
[45]: https://twitter.com/jsunderhood/status/588257109097218048
[46]: https://twitter.com/jsunderhood/status/588257703803359232
[47]: https://twitter.com/jsunderhood/status/588259802599546881
[48]: https://twitter.com/jsunderhood/status/588259851400323073
[49]: https://twitter.com/jsunderhood/status/588262447267639299
[50]: https://twitter.com/jsunderhood/status/588264402463363072
[51]: https://twitter.com/jsunderhood/status/588271712199905282
[52]: https://twitter.com/jsunderhood/status/588272092510035970
[53]: https://twitter.com/jsunderhood/status/588332981334466561
[54]: https://twitter.com/jsunderhood/status/588344126917238784
[55]: https://twitter.com/jsunderhood/status/588344484171231232
[56]: https://twitter.com/jsunderhood/status/588344705391407104
[57]: https://twitter.com/jsunderhood/status/588345041325817856
[58]: https://twitter.com/jsunderhood/status/588345816366116864
[59]: https://twitter.com/jsunderhood/status/588345925753577473
[60]: https://twitter.com/jsunderhood/status/588346219086409728
[61]: https://twitter.com/jsunderhood/status/588347894786318336
[62]: https://twitter.com/jsunderhood/status/588349076942491648
[63]: https://twitter.com/jsunderhood/status/588353238094721025
[64]: https://twitter.com/jsunderhood/status/588353359259762689
[65]: https://twitter.com/jsunderhood/status/588353540067823616
[66]: https://twitter.com/jsunderhood/status/588353774466531328
[67]: https://twitter.com/jsunderhood/status/588354824950910976
[68]: https://twitter.com/jsunderhood/status/588356815945146369
[69]: https://twitter.com/jsunderhood/status/588360862076903425
[70]: https://twitter.com/jsunderhood/status/588643536603611136
[71]: https://twitter.com/jsunderhood/status/588643576357203968
[72]: https://twitter.com/jsunderhood/status/588643609542549506
[73]: https://twitter.com/jsunderhood/status/588643653050093569
[74]: https://twitter.com/jsunderhood/status/588643684847120385
[75]: https://twitter.com/jsunderhood/status/588643724793614336
[76]: https://twitter.com/jsunderhood/status/588643758943690753
[77]: https://twitter.com/jsunderhood/status/588643791298519040
[78]: https://twitter.com/jsunderhood/status/588643978767110144
[79]: https://twitter.com/jsunderhood/status/588644133826338817
[80]: https://twitter.com/jsunderhood/status/588651527121850368
[81]: https://twitter.com/jsunderhood/status/588651688447324160
[82]: https://twitter.com/jsunderhood/status/588651985920008192
[83]: https://twitter.com/jsunderhood/status/588652057457987584
[84]: https://twitter.com/jsunderhood/status/588652251205472256
[85]: https://twitter.com/jsunderhood/status/588666015824875520
[86]: https://twitter.com/jsunderhood/status/588666087421652992
[87]: https://twitter.com/jsunderhood/status/588666518990360576
[88]: https://twitter.com/jsunderhood/status/588668061705711616
[89]: https://twitter.com/jsunderhood/status/588668692302540800
[90]: https://twitter.com/jsunderhood/status/588668927640756224
[91]: https://twitter.com/jsunderhood/status/588669502868586497
[92]: https://twitter.com/jsunderhood/status/588669511601147904
[93]: https://twitter.com/jsunderhood/status/588669707378675712
[94]: https://twitter.com/jsunderhood/status/588669715939250176
[95]: https://twitter.com/jsunderhood/status/588671085505314817
[96]: https://twitter.com/jsunderhood/status/588672628644257793
[97]: https://twitter.com/jsunderhood/status/588714643197157376
[98]: https://twitter.com/jsunderhood/status/588715497040048128
[99]: https://twitter.com/jsunderhood/status/588716199128760320
[100]: https://twitter.com/jsunderhood/status/588717074643550208
[101]: https://twitter.com/jsunderhood/status/588717948610732032
[102]: https://twitter.com/jsunderhood/status/588718231227080705
[103]: https://twitter.com/jsunderhood/status/588718443903504384
[104]: https://twitter.com/jsunderhood/status/588719178200326144
[105]: https://twitter.com/jsunderhood/status/588719397763690497
[106]: https://twitter.com/jsunderhood/status/588719494203363329
[107]: https://twitter.com/jsunderhood/status/588720391532711936
[108]: https://twitter.com/jsunderhood/status/588720696152498176
[109]: https://twitter.com/jsunderhood/status/588723550099410944
[110]: https://twitter.com/jsunderhood/status/588924669950038016
[111]: https://twitter.com/jsunderhood/status/589074344455864320
[112]: https://twitter.com/jsunderhood/status/589096108258897920
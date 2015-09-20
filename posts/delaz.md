# delaz

_20 сентября 2015_

## Понедельник <small>37 твитов</small>

Доброе утро, эту неделю в эфире [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") знакомый вам по [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") Игорь Зенич [@delaz](https://twitter.com/delaz "Igor Zenich"), но уже не из [@iDeus\_team](https://twitter.com/iDeus_team "iDeus"), а [@EpamKharkiv](https://twitter.com/EpamKharkiv "Epam Kharkiv")

Сегодня мой первый день на новой работе, первый день в большой компании.

Темой сегодняшнего дня предлагаю «когда и как мы наконец перестанем писать css», собственно исчезновение верстки в том виде, как мы её знаем

Развитие производства это переход от ручной, ремесленной работы \(где «магия», вместо четких правил\) к автоматизации и унификации.

Мы 15 лет уже пишем одни и те же сайты, с одними и теми же блоками: меню, форма логина, чекаут, карусели-рюшечки и каждый раз пишем заново.

При этом желательно учитывать множество мелочей, так для HTML это проставить соответствующие WAI-ARIA атрибуты, микроданные, etc.

Для CSS - тоже: удобности, зависимости, например resize textarea, плавный скролл в iOS внутри блоков со скроллом, меню бутербродом для мабил

Безумие писать это вручную и инструменты появляются: фреймворки с готовыми элементами, наборы сниппетов, BEM, PostCSS, но мы всё ещё пишем.

Написание CSS напоминает мне ручное рисование элементов интерфейса в программах под DOS.

Меня спрашивают о смене работы, с удовольствием отвечу вечером.Щас буду подписывать NDA и дальше не уверен что смогу выйти в эфир до вечера

RT [@harisov](https://twitter.com/harisov "Vitaly Harisov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") мы не пишем заново, поскольку используем библиотеки готовых блоков:  
  
bem-components  
[ru.bem.info/libs/bem-compo…](https://t.co/nxxIVo1ZFu "https://ru.bem.info/libs/bem-components/")  
  
Чего…

.[@harisov](https://twitter.com/harisov "Vitaly Harisov") да, но в случае уникального дизайна/правок внешнего вида, эти блоки нужно будет дорабатывать.Безусловно их наличие - огромный шаг

RT [@helloilya](https://twitter.com/helloilya "Илья"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), все движется к редакторам/cms с наборами элементов на любой вкус, из которых можно собрать готовый, сверстанны…

RT [@helloilya](https://twitter.com/helloilya "Илья"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"), на западе это направление активно развивается и есть немало примеров, но не все правда успешны.

Я думаю мы скоро придём к генерации оформительского кода \(CSS как минимум\) из дизайнов, точнее это уже есть \(CSS Hat\), но будет круче.

А вообще сам набор элементов UI будет стандартизирован и будет легко скинироваться. Если провести аналогию - будет как в строительстве.

Мне нравится сравнивать построение сайтов и стройку. Где backend - это электрика, слаботочка, разводка сантехники \(вводы,трубы, но не краны\)

А Frontend - пол, гипсокартон \(HTML\), штукатурка, обои, краски \(CSS\) Но также и окна и двери \(JS\) и розетки, краны, светильники \(UI\).

В стройке всё стандартизировано, есть устоявшиеся юскейсы, популярных инструментов и материалов немного, но их хватает делать уникальное.

Когда строят дом,берут готовый материал,например кирпичи, они стандартные.Когда сайт - мы вначале делаем эти кирпичи,каждый во что горазд.

Построить уникальный дом любой формы можно из готовых кирпичей. Никто в своём уме не будет делать их вручную: замешивать раствор,обжигать их

.[@vladimore](https://twitter.com/vladimore "Waldemar") я имею в виду «типов материалов». Например сущность обои - 1, но видов обоев - тысячи, есть что подобрать.

RT [@gladkih\_m](https://twitter.com/gladkih_m "Maxim Gladkih"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не только кирпичи — блоки, кирпичи разны видов, заливают бетонную опалубку, мазанку — да куча вариантов.

.[@gladkih\_m](https://twitter.com/gladkih_m "Maxim Gladkih") А сайты делают - одна стена из кирпича, да вручную сделанного, вторая - бетонная плита, третья - мазанка, а четвёртой стены нет.

RT [@drunk\_cachalot](https://twitter.com/drunk_cachalot "Бopoдa ♆ Бoцмaнa"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@AntonShevchuk](https://twitter.com/AntonShevchuk "Anton Shevchuk") А потом приходит Джамшут \("веб-разработчик широкого профиля"\) и заклеивает окно обоями нахуй

RT [@vladimore](https://twitter.com/vladimore "Waldemar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ещё важно мотив понимать. Если не соблюдать стандарты стройки, то строение чаще убивает пользователей.

CSS это ассемблер. Сейчас мы юзаем препроцессоры, но это как писать на C++ без MFC - вроде как технологично и круто, но на самом деле - нет.

.[@toivonens](https://twitter.com/toivonens "var ya; // ru") когда я вёл [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") БЭМ был посвящён только один день. Тут я пока не поднимал и не планирую тему [#b\_](https://twitter.com/search?q=%23b_), всё уже было сказано

.[@mr\_davee\_rus](https://twitter.com/mr_davee_rus "илья [dv]") не, котельная и электрическая подстанция - это хостинг/VPS/Dedicated server.

RT [@kuzvac](https://twitter.com/kuzvac "Vasiliy Kuzmenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") avocode можете посмотреть. От тех де создателей, помогает из дизайна в верстку перенести.

/\* Ночной эфир

.[@pomidore](https://twitter.com/pomidore "Александр Лунев") [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") работу сменил после 9 лет в веб-студии,перепробовал вообще все,осознанно выбрал уходить в большую компанию.

.[@pomidore](https://twitter.com/pomidore "Александр Лунев") [@hellbeast92](https://twitter.com/hellbeast92 "Александр Староверов") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") вот тут расписывал подробней: [twitter.com/delaz/status/6…](https://t.co/ysKZIaKWhM "https://twitter.com/delaz/status/640774367899701249") считаю нет смысла повторять.Первый день ok, доволен.

RT [@pepelsbey](https://twitter.com/pepelsbey "Вадим Макеев"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@mista\_k](https://twitter.com/mista_k "Vladimir Kuznetsov"), есть такая песня у НеГрузовиков, называется «Архитектура» [vimeo.com/4881198](https://t.co/Qz6Zi3b9B6 "https://vimeo.com/4881198")

RT [@blia](https://twitter.com/blia "Розовые трусы неудач"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин") т.е. тут ты видишь у всех интерес послушать про CSS и стройку?

.[@blia](https://twitter.com/blia "Розовые трусы неудач") стройка это интересно, даже в простом ремонте квартиры, можно продумать многое для будущей расширяемости и автоматизации. [@harisov](https://twitter.com/harisov "Vitaly Harisov")

RT [@snnrman](https://twitter.com/snnrman "kyo"): Разработка софта, как профессиональный спорт, просто созданы для того, чтобы заставлять тридцатилетних мужчин чувствовать себя…

## Вторник <small>27 твитов</small>

\*/ Доброе утро.Вчера мы обсуждали «когда умрёт CSS» и сравнивали веб-разработку и стройку.

RT [@xgrommx](https://twitter.com/xgrommx "Denis Stoyanov"): [@kuzvac](https://twitter.com/kuzvac "Vasiliy Kuzmenko") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Жаль, что только под мак пока [bg-d.net/htmlblock](http://t.co/8HvLUAfB6I "http://bg-d.net/htmlblock")

RT [@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это JSunderhood, начинай с ; твит на всякий случай, а не с \*/ :\)

.[@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov") я закрывал « /\* Ночной эфир »

Шутка [@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov") про ; подтолкнула обсудить [standardjs.com](http://t.co/VHtlDumAqH "http://standardjs.com")Ваше мнение - правильно ли пропагандировать “No semicolons” как стандарт?

Существует форк, где ; наоборот обязательна: [github.com/Flet/semistand…](https://t.co/fZa3HDKwws "https://github.com/Flet/semistandard")Но звёздочек у него на порядок меньше.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") также есть альтернатива от Синдре [github.com/sindresorhus/xo](https://t.co/9OnQIWCaZS "https://github.com/sindresorhus/xo")

Мнения разделились, писать ; или нет.Google,Yandex,Node.js кодстайлы требуют писать ;Github и NPM наоборот.В реплаях разделились тоже.

RT [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov") я за. Нафиг они нужны? Ради призрачных никогда не появляющихся на практике багов?

RT [@alekseykulikov\_](https://twitter.com/alekseykulikov_ "Aleksey Kulikov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov")  "Never start a line with \( or \[", но в таких случаях начинать строку можно с void:  
  
void \[1,2,3\]…

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Проще один раз привыкнуть писать с «;», чем запоминать, где это может сломаться. [@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov")

RT [@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov"): [@sapegin](https://twitter.com/sapegin "Artem Sapegin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") поддерживаю. Этот как с закрыванием тэгов в HTML5. Многие можно не закрывать, но лучше закрыть и не думат…

Я не js-dev /\* слышны реплаи «какого ты делаешь в jsunderhood \*/, и рекомендацию чего-либо пропускаю через «а в чём польза от этого»?

С удовольствием поретвичу доводы ради чего НЕ писать ; и какой профит это даёт.

RT [@marinintim](https://twitter.com/marinintim "[object Object]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") становится невозможным писать однострочники, это заставляет лучше структурировать код.

RT [@marinintim](https://twitter.com/marinintim "[object Object]"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если человек хочет понять, почему оно так работает и пойдёт почитать, то узнает лучше инструмент, с которым он…

RT [@gusnkt](https://twitter.com/gusnkt "Nikita Gusakov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") допустим 100 строк в день, 70 с \`;\`. 0.5 cек на символ.  
70строк \* 0.5сек \* 5дней \* 4нед \* 12мес = 8400сек = 2 часа…

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Человек должен придумывать себе трудности, чтобы потом с гордостью их преодолевать.

На мой взгляд эти доводы против ; надуманны, это искусство ради искусства, развлечение, а ведь мы должны стремиться к надежной разработке.

&lt;script type="text/javascript"&gt;  
  /\*&lt;!\[CDATA\[\*/  
  // Ночной эфир

RT [@\_h4\_](https://twitter.com/_h4_ "Михаил Баранов"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ты под IE5 для мака твитишь, что ли?

RT [@amel\_true](https://twitter.com/amel_true "Andrey Melikhov"): [@delaz](https://twitter.com/delaz "Igor Zenich") [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") Yandex JavaScript CodeStyle - это только Карты, внутри Яндекса от проекта зависит.

RT [@brdt\_D](https://twitter.com/brdt_D "Dmitry"): Лол. Меня чуть в метро не пустили-У вас глаза красные!- Я программист- Это не объяснение, пройдемте.Ахахахахаха, это не об…

RT [@operatino](https://twitter.com/operatino "Robert Haritonov"): Помогите коллеге фронтендеру после тяжелой аварии [extreme.lv](http://t.co/FKlYmhTrVj "http://extreme.lv"). Надеюсь его позитивный настрой поможет пережить по…

RT [@lazeez](https://twitter.com/lazeez "Sam Faktorovich"): Ого, как я мог пропустить такой шедевр? [shipilev.net/blog/2015/volt…](http://t.co/B5VVCDyhAC "http://shipilev.net/blog/2015/voltmeter/")  
  
Применимо не только к бенчмаркам, но и ко многим инженерным акт…

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): Markup от 2гис разбирает любой БЭМ сайт на компоненты для тестирования вёрстки [github.com/2gis/makeup](https://t.co/nOIAsipPwo "https://github.com/2gis/makeup") [#FrontConfMsk](https://twitter.com/search?q=%23FrontConfMsk) htt[pic.twitter.com/haQHQqRvh2](http://t.co/haQHQqRvh2)

RT [@julia\_lanskaya](https://twitter.com/julia_lanskaya "Julia Lanskaya"): [@glebarhangelsky](https://twitter.com/glebarhangelsky "Глеб Архангельский") Простой, но, по мнению автора, действенный способ разобраться с рутиной [miumau.livejournal.com/1613742.html](http://t.co/ak3xVwYZAw "http://miumau.livejournal.com/1613742.html")

## Среда <small>83 твита</small>

/\*\]\]&gt;\*/  
  &lt;/script&gt;  
&lt;!-- Доброе утро!  
Вчера мы обсуждали [standardjs.com](http://t.co/VHtlDuEbif "http://standardjs.com") и нужно ли ставить ; в JS.  
--&gt;

В [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") я пытался создать традицию описывать «один мой рабочий день». Но в EPAM я 2 дня, ещё на адаптации, рассказывать пока нечего.

Пока что я просто изучаю внутренние сервисы и документацию, поражаюсь/восхищаюсь какие они большие и как много охватывают/объединяют в себе.

Вот тут я рассказывал про «один мой рабочий день в [@iDeus\_team](https://twitter.com/iDeus_team "iDeus")»:[twitter.com/cssunderhood/s…](https://t.co/34HMQ1Ignm "https://twitter.com/cssunderhood/status/633546207231635456")[twitter.com/cssunderhood/s…](https://t.co/DTO7Dy6CUd "https://twitter.com/cssunderhood/status/633561360853532672")[twitter.com/cssunderhood/s…](https://t.co/CqnJgHrZMT "https://twitter.com/cssunderhood/status/633562128406945792")

И даже описывал рабочие процессы:[twitter.com/cssunderhood/s…](https://t.co/i5HmFfFjUO "https://twitter.com/cssunderhood/status/633563426737008640")[twitter.com/cssunderhood/s…](https://t.co/QKwbv1Mr3K "https://twitter.com/cssunderhood/status/633566300674109440")[twitter.com/cssunderhood/s…](https://t.co/AhVtwYoxd0 "https://twitter.com/cssunderhood/status/633672460550991872")[twitter.com/cssunderhood/s…](https://t.co/aUVz9VrP57 "https://twitter.com/cssunderhood/status/633687588176588802")

.[@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") да, рассказывал в своём твиПочему ушёл: [mobile.twitter.com/delaz/status/6…](https://t.co/s7AMqaTOuK "https://mobile.twitter.com/delaz/status/640778379541782528")Почему именно в EPAM: [twitter.com/delaz/status/6…](https://t.co/SkxModvwWG "https://twitter.com/delaz/status/643529481962000385")

RT [@DaryaChu](https://twitter.com/DaryaChu "Darya Chu"): Ну с днем HR, что ль. HR   
HR - это когда ты поздравляешь всех со всеми праздниками-событиями и организуешь все. А тебя никто,…

Сегодня предлагаю обсудить автоматизацию/ускорение в рабочей системе и жизни. Решения и особенно скрипты, неожиданные открытия «так бывает?»

Напрммер знаете ли вы, что для винды существует менеджер пакетов: [chocolatey.org](https://t.co/GR8FEywLwR "https://chocolatey.org/") и можно ставить проги так:C:\\&gt; choco install 7zip

А если вам нужно обрабатывать или перекодировать видео по определенным правилам, то стоит юзать Avisynth-скрипты: [pic.twitter.com/1XqUL0HThP](http://t.co/1XqUL0HThP)

В жизни банальный пример - избавление от ручной записи данных счетчиков и оплаты коммунальных счетов. Всё должно происходить автоматически.

Делитесь своими лайфхаками в реплаях, с удовольствием ретвитну интересное в обед.

RT [@backendsecret](https://twitter.com/backendsecret "Разработчик Бэкенда"): Стек технологий Microsoft это не только разработка из под Windows, пора бы к этому привыкнуть :D

RT [@monogeeza](https://twitter.com/monogeeza "Aleksandr Sh."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") стоит упомянуть лаунчер программ \(и не только\) Alfred для Mac и его win-альтернативу Launchy.

RT [@azproduction](https://twitter.com/azproduction "Mikhail Davydov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Делать фотки whiteboard после встречи - обычное дело. ImageMagick делает еще их и читаемыми [gist.github.com/lelandbatey/86…](https://t.co/bgkWbVQrFn "https://gist.github.com/lelandbatey/8677901")

RT [@incredibletoy](https://twitter.com/incredibletoy "Графы и вероятности"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@webholt](https://twitter.com/webholt "Vlad :: gwer") У нас препод по эконометрике учил, что вместо автоматизации всегда выгоднее придумать способ с мен…

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): вместо [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") с удовольствием бы почитал @maybachunderhood — каждую неделю новый человек, заработавший себ…

RT [@vyazovoi](https://twitter.com/vyazovoi "Paul Elms"): [@azproduction](https://twitter.com/azproduction "Mikhail Davydov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") кстати, на iOS есть программа Carbo, которая позволяет фотографировать с такими эффектами

RT [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov"): [@monogeeza](https://twitter.com/monogeeza "Aleksandr Sh.") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а чем спотлайт не подходит? Помощнее альфреда будет.

RT [@zhulikgleb](https://twitter.com/zhulikgleb "gleb.zhulik"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") oh-my-zsh очень рекомендую + хорошо освоить консоль

RT [@RusAlexander](https://twitter.com/RusAlexander "Alex Pletnev"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") tmux

RT [@VovanR](https://twitter.com/VovanR "Vladimir Rodkin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") по поводу ускорения — переходите на SSD, если еще не успели!

Никто не делится примерами  автоматизации в жизни, так что опишу решения, которые юзаю сам и рекомендую другим.

Коммуналка: ваш банк должен сам брать задолженности у всех служб \(они выставляют счета ему\) и регулярными платежами списывать с вашей карты.

[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") фишка в том, чтобы вам не приходилось делать вообще никаких действий, включая логины и аппрувы. Ну а дату можно регулировать.

Вообще старайтесь максимально перевести все платежи на безнал и делать их регулярными. Так можно оптимизировать кейсы и автоматизировать их

Избавляйтесь от бессмысленного ручного труда, того что тратит ваше время и что можно автоматизировать: доставка воды, покупки в маркетах,etc

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а как это делается?

Важно не зацикливаться на 100% автоматизации, не уходить в хардкор, правило 20-80 работает и тут.Делегирование - тоже решение проблемы.

.[@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov") «прикрутил ардуино к счётчику» это как раз антипаттерн.Решайте задачу так, как бы вы решали проблему при программировании.

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я давно покупаю еду в интернете с доставкой. Очень удобно. Экономится примерно 4 часа.

Окей, пошагово коммуналка: делим задачу на сабмодули, строим абстрактные классы: заводим регулярные платежи для всего с захардкорными values

Сдаём первый спринт: проверяем что проплаты проходят. Ок, теперь время делегирования на джунов: пусть они реализуют получение реальных value

"Джуны" в данном случае - обратится к менеджерам вашего банка, пусть настроят всё.Окажется что настраивается не всё, для чего-то нет API.

API напишем,но как передавать данные? Поэтому и говорил о важности унификации, подготовить их, перевести всё заранее в JSON \(платить безнал\)

Например нам привозят домой воду, мы оплачиваем налом. Для успешной передачи данных нужно согласовать время присутствия дома, приготовить $$

Рефакторим: просим дать формат данных\(просьба платить по безнал\) и данные подключения\(счет\)Проводим платежМы передали данные,это почти API

Просим считать факт post-запроса данных \(оплату\) запросом на получение ответа \(воды\). Заполняем умолчания \(пустые бутыли за порог\) и всё!

RT [@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") таких решений единицы, не понимаю что в этом случае является плохим решением

.[@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov") решение плохо оверинжинирингом. Пусть данные собирает инспектор от организации предоставляющей услуги, и сама формирует счет

.[@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov") а если так нельзя - смотреть глазами,но передавать данные на сайт/смс, подготовить платеж,чтоб нужно было только вбить сумму

RT [@ru\_rodweb](https://twitter.com/ru_rodweb "Igor Deryabin"): .[@jsunderhood](https://twitter.com/jsunderhood "Разработчик") объявил неделю ЖКХ

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вообще ничего не понимаю. Ты уверен, что остальные в том же контексте, что и ты?

.[@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov") надеюсь да. Я попытался показать как «программировать скрипты» IRL, программировать свою жизнь.

RT [@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да я понял, в этом случае такое решение можно рассматривать как микро сервис / модуль.

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Оплачиваю коммунальные услуги тоже через интернет: мобильный, интернет, квартира, электричество… Потеря около 2% ₽…

.[@suxxes](https://twitter.com/suxxes "Father Frodo") отлично, но теперь надо сделать чтоб и эти оплаты происходили без твоего участия.  Ты не должен делать ничего, даже открывать ноут.

RT [@iamale\_ru](https://twitter.com/iamale_ru "Эль пишет код"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я серьёзно думал, что это реализуемо на практике. Зачем ты подаёшь людям ложную надежду? :^\( \(А вообще, да, год…

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") может быть лучше было самому выполнить автоматизацию, о которой говоришь и потом поделиться результатами? Мне и…

В том-то и дело что это реализуемо! У меня 100% платежей оплачивается автоматически, 90% - вообще без моего участия. [@iamale\_ru](https://twitter.com/iamale_ru "Эль пишет код") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес")

И это я живу в поселке, в городе ещё проще. Я дал вам алгоритмы, универсальные для любого ЯП \(ЖКХ\), это ж jsunderhood, ок дам готовый код.

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") вот расскажи нам пожалуйста как ты это сделал. Конкретные действия. [@iamale\_ru](https://twitter.com/iamale_ru "Enforce strict Å")

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") окей, подробно расскажу в ночном эфире, щас это будет оффтопиком.

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Буду ждать. Кстати, а оплату налогов ежеквартальную ты не автоматизировал?

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") автоматизировал. Тоже расскажу, Ок.

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Может лучше статью? Мозг пухнет от обрывков-твитов. [@SilentImp](https://twitter.com/SilentImp "Тихий Бес")

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@sapegin](https://twitter.com/sapegin "Artem Sapegin") не-не-не последнюю статью он писал три с половиной года и пока не закончил. Не надо так. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

NightAir=function\(\){try{document.execCommand\('BackgroundImageCache', false, true\)} catch\(e\){}}window.attachEvent\("onload", NightAir\);

RT [@lerarunge](https://twitter.com/lerarunge "Valeria Zimina"): Расстроена. Не могу применять физическое насилие к разработчикам, которые на вопрос «Все ли готово?» отвечают «Да, за исключ…

RT [@delaz](https://twitter.com/delaz "Igor Zenich"): Секрет успешного менеджера :\) [instagram.com/p/7YswC8Kupe/](https://t.co/45Htca6ay8 "https://instagram.com/p/7YswC8Kupe/")

RT [@veged](https://twitter.com/veged "Sergey Berezhnoy"): мои слайды [bit.ly/odessajs2015-b…](https://t.co/OlTGhTtGco "https://bit.ly/odessajs2015-bem") и код [github.com/veged/odessajs…](https://t.co/HEENuBvoss "https://github.com/veged/odessajs-bem") для [@OdessaJS](https://twitter.com/OdessaJS "OdessaJS") [#b\_](https://twitter.com/search?q=%23b_)

RT [@Kukunyaha](https://twitter.com/Kukunyaha "Сладкие булки"): Ура! У заказчика, которому мы сегодня просрали бы сроки, внезапно навернулись базы,стенды, и нет бэкапов! Так что сроки прос…

У нас сегодня тематический ночной эфир: практические кейсы автоматизации в жизни.По просьбам - начнём с ЖКХ.

RT [@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@iamale\_ru](https://twitter.com/iamale_ru "Enforce strict Å") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") вам не кажется отличной идеей для бизнеса ? все это вот автоматизировать и брать 1 пр…

.[@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov") в Украине такой сервис уже существует - [portmone.com.ua](https://t.co/DH3FTtANvn "https://www.portmone.com.ua/")Но я буду рассказывать о Pure Vanilla ЖКХ Automatization :\)

RT [@iamale\_ru](https://twitter.com/iamale_ru "Enforce strict Å"): [@krasivieglaza](https://twitter.com/krasivieglaza "Sergei Panfilov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") Просто у каждого это более-менее индивидуально, видимо. Разные банки, разные ЖКХ etc.

.[@iamale\_ru](https://twitter.com/iamale_ru "Эль пишет код") Нет, общая схема одинакова для всех: нужно превратить бумажные квитанции в электронные платежи.

Это азы, но я всё же напишу, важно понимать, что любой платеж в обычной жизни или уже имеет безнальное соответствие или может его получить.

Т.е. даже если вы покупаете буханку хлеба в киоске во дворе это можно при большом желании оплатить по безналу, спросив у продавца реквизиты.

Самый простой способ автоматизировать оплату ЖКХ - обратиться к посреднику, в Украине это portmone, в РФ пусть подскажут в реплаях.

Посредников не надо бояться, вы ведь юзаете и радуетесь jQuery? Это делегирование части проблем другому, а делегирование - всегда хорошо.

В реплаях уже предлагали делегировать на маму или жену, но это «смести мусор под ковёр». Мы будем обсуждать настоящую аатоматизацию.

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): Сейчас [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") научит вас покупать семечки у бабушек у метро по кредитной карточке.

.[@suxxes](https://twitter.com/suxxes "Father Frodo") кстати это достаточно просто и есть много вариантов. Например бабушка покупает ридер карт для смартфона \(вставляется в аудиоразъем\)

.[@suxxes](https://twitter.com/suxxes "Father Frodo") но всегда надо сохранять адекватность и open mind, просто пополните бабушке счет за телефон, это тоже безнал но на другие реквизиты

RT [@suxxes](https://twitter.com/suxxes "Father Frodo"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ИП Клавдия Никифоровна

.[@suxxes](https://twitter.com/suxxes "Father Frodo") кстати у нас да, это будет ФОП Семченкова К.Н. на 1-ой группе Единого налога и у неё есть вполне реальный счёт 2600 в налоговой.

.[@suxxes](https://twitter.com/suxxes "Father Frodo") и на этот счёт можно сделать банковский перевод. Я не дао этот пример тк не во всех странах есть упрощенная система налогообложения

Так вот, для автоматизации ЖКХ платежей проще всего принести бумажные квитанции в свой банк. Фиксированные суммы банк легко сделает повтором

А нефиксированные \(где счетчики\) - реализовать через договора «банк-предприятие». Например «за свет» банк сам запрашивает у поставщика сумму

Если договоров нет, вы все равно можете сделать автоплатеж и раз в месяц вручную менять сумму, это все равно быстрее. Или платить с авансом

А там где квитанций нет \(ЖКХ в селе, доставка воды, оплата садика...\) - запросить реквизиты или договорится платить на карту как физлицу.

В продвинутых банках всё это можно завести самому через клиент-банк. Там же можно автоматизировать оплату налогов частного предпринимателя.

## Четверг <small>73 твита</small>

RT [@mxtnr](https://twitter.com/mxtnr "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") очень не хватает возможности оплачивать проездные в метро удалённо.

.[@mxtnr](https://twitter.com/mxtnr "Alexander") в Киеве, Москве и Питере проезд в метро можно оплатить поднеся кредитку к турникету.  Ну а пополнить проездной = пополнить кредитку.

; Доброе утро!Вчера мы обсуждали автоматизацию в рабочей OS и в жизни, программирование задач, например AVS-скрипты для обработки видео.

Меня справедливо упрекают, что до сих мы не обсуждали конкретный код на JS.Я «не настоящий сварщик», но кое-что приготовил.

На прошлой работе передо мной стояла задача оптимизировать сборку на Grunt, вот результат, сборка проходит за 1 сек: [github.com/ideus-team/htm…](https://t.co/E0U5MQ5Gsu "https://github.com/ideus-team/html-framework")

Внутри LibSass+Bourbon\(с Refills,Neat и Bitters\).В истории коммитов можно увидеть как это строилось, какие были проблемы, что не получилось

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") браузеры можно указать в broweserslist, тогда не только Автопрефиксер будет их использовать \(например, ещё …

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") так же можно посмотреть а сторону stylelint — он модульный как ESLint и вводить модно прямо в браузер http:[stylelint.io](http://t.co/TROp9xIl2J "http://stylelint.io/")

RT [@brdt\_D](https://twitter.com/brdt_D "Dmitry"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") за 1 сек на SSD? или достиг результата на HDD такого? Немного удивлен просто сборке за 1 сек

.[@brdt\_D](https://twitter.com/brdt_D "Dmitry") да на SSD.До этого была сборка на Ruby Sass+Compass, уходило около 7-8 секунд.

Вчера коллеги выключили Grunt:Never \(компиляция только нового\), какие-то проблемы с ним были, надеюсь это не повлияло на быстродействие.

RT [@xwoody](https://twitter.com/xwoody "Aleks Hudochenkov"): [@sapegin](https://twitter.com/sapegin "Artem Sapegin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") отличная идея плагина! grunt-never — ничего не собирает, поэтому все очень быстро :\)

RT [@brdt\_D](https://twitter.com/brdt_D "Dmitry"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") что вообще там происходит? хочется подробностей подобной производительности сборки

Опишу как я делал эту сборку на Grunt.Вся магия крутится вокруг плагина [github.com/firstandthird/…](https://t.co/oeAYwIk4ds "https://github.com/firstandthird/load-grunt-config") \(это развитие идеи [github.com/sindresorhus/l…](https://t.co/olDogwMKT1 "https://github.com/sindresorhus/load-grunt-tasks")\)

Главные 2 вещи, что он делает:1. Выносит все таски в отдельные файлы, разгружает Gruntconfig2. Заменяет загрузчик тасков на jit-grunt!

Невероятный прирост скорости даёт именно [npmjs.com/package/jit-gr…](https://t.co/VDNPwWqIbn "https://www.npmjs.com/package/jit-grunt"), он сокращает время, необходимое Grunt, чтоб подгрузить все таски и плагины

Но кроме скорости важна читабельность и удобство поддержки. Grunt ругают за нечитабельный конфиг, load-grunt-config исправляет это.

Например так выглядит мой список задач: [github.com/ideus-team/htm…](https://t.co/JykA3XlMsW "https://github.com/ideus-team/html-framework/blob/master/dev/grunt/aliases.yaml")Сверху - задачи для сборки,Снизу - отдельные задачи по Watch

Благодаря load-grunt-config все таски и настройки к ним выносятся в отдельную папку /grunt где каждая задача - отдельный файл.

В Gruntfile у вас должны остаться только переменные настроек путей к файлам/папкам исходных/скомпилированных css/js [github.com/ideus-team/htm…](https://t.co/RXMh6nrlQA "https://github.com/ideus-team/html-framework/blob/master/dev/Gruntfile.js")

RT [@sergik\_twitt](https://twitter.com/sergik_twitt "Зверев Сергей"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Зачем это все ? Чем gulp не устроил ? За вечер можно хороший gulpfile.js сделать.

.[@sergik\_twitt](https://twitter.com/sergik_twitt "Зверев Сергей") Про это есть хорошая статья тут: [frontender.info/gulp-grunt-wha…](http://t.co/BRmu5li9Qq "http://frontender.info/gulp-grunt-whatever/")

После обеда я продолжу рассказ про сборку, опишу как переходил на LibSass и прикручивал к нему Bourbon.

RT [@iSnifer](https://twitter.com/iSnifer "Anton Kuznetsov"): Респект [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"). Оптимизировал сборку с 6-8 секунд до 300мс. Не стал использовать все, воспользовался jit-grunt и поправи…

История 98 коммитов, как я обновлял свою старую сборку Grunt на новую: [github.com/ideus-team/htm…](https://t.co/Wtw4hMNeMl "https://github.com/ideus-team/html-framework/pull/1")Каждый коммит - отдельная задача или попытка.

Многие вещи я вначале подключил, а потом отказался от них. Например Grunt умеет выполнял таски параллельно с помощью [github.com/sindresorhus/g…](https://t.co/H1VCr7D4Od "https://github.com/sindresorhus/grunt-concurrent")

Но оказалось что таски выполняются так быстро, что распараллеливание замедляет время сборки из-за секунды тратящейся на запуск нового потока

Обновляя сборку Grunt, я просто поднял новую параллельно и пошагово её дорабатывал. За основу новой был взят код из [mattbailey.io/a-beginners-gu…](http://t.co/PZQ5NINeR3 "http://mattbailey.io/a-beginners-guide-to-grunt-redux/")

Хотелось побольше плюшек при написании Sass-кода, и я решил добавить Bourbon. Очень помогли [syropia.net/journal/how-to…](http://t.co/jP45k2eo9b "http://syropia.net/journal/how-to-use-bourbon-with-gruntjs") и [webdevstudios.com/2014/10/09/wor…](http://t.co/Z69bYr5Ilu "http://webdevstudios.com/2014/10/09/wordpress-up-and-running-with-grunt-sass-bourbon-and-neat/")

Я не ожидал что мигрировать с Ruby Sass на LibSass будет так просто: [github.com/ideus-team/htm…](https://t.co/IOADYSM1jT "https://github.com/ideus-team/html-framework/commit/7ba355055461f68c141b2db873f3217e23c56b12")

LibSass это форк официального RubySass. Отличается тем что он быстрее и не требует установки Ruby. У меня разница составила 0.3sec против 1s

Я пробовал заменить Windows shell \(cmd\) на Windows Power Shell \(ps1\) для инсталла системы сборки и её запуска но тоже вернулся обратно к cmd

В Power Shell вылетала ошибка при установке optipng, из-за того что PS1 не понимала пути для выполнения консольных утилит.

А в окошке Watch сбивалась цветовая схема Power shell после вывода сообщений о неудачной компиляции.

С Windows shell долго не мог понять как сделать чтоб bat-ник не останавливался если какая-то из консольных команд внутри него была неуспешна

У меня такой командой была gem update --system. Она писала nothing to update и bat-ник завершался, не выполнив всех остальных команд дальше

Конечно можно было написать все команды в unix-style через &amp;&amp; но длиннющий однострочник же некрасиво!

Оказалось что решение - запуск команд через call, вот так: [github.com/ideus-team/htm…](https://t.co/wUoKNQJxHY "https://github.com/ideus-team/html-framework/blob/master/dev/install.cmd")

RT [@iamale\_ru](https://twitter.com/iamale_ru "Эль пишет код"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Вообще, как насчёт gulp?

.[@iamale\_ru](https://twitter.com/iamale_ru "Enforce strict Å") Хорошо изучил Grunt, теперь можно и Gulp попробовать :\) Думаю на новой работе будет повод.

var isoldIE = /\*@cc\_on!@\*/false;/\* Ночной эфир

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") поставь линукс и забудь про эти поделки

.[@kuksikus](https://twitter.com/kuksikus "R.M.") у меня MacOS второй системой и что-то за полтора года я ей вообще не проникся.

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как ты кстати автоматизировал покупки в маркетах и насколько это их удорожило/повлияло на качество товара?

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") я покупки еды не автоматизировал тк очень высокая стоимость доставки в пригород, я ж не в городе живу. Знакомые автоматизировали

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") например покупали всё через [rost.kh.ua/payment/](http://t.co/FChDPQcxlC "http://rost.kh.ua/payment/") Стоимость товаров та же, доставка по городу бесплатная при чеке от 300 грн.

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ты правда считаешь, что 10 мин/мес стоят гемороя с “автоматизацией”? Всё можно оплачивать онлайн и быстро в пару…

.[@kuksikus](https://twitter.com/kuksikus "R.M.") оплата онлайн это уже автоматизация. Но увы ей пользуется меньшинство. До сих пор толпу людей стоят в кассах банков с квитанциями

RT [@baxazar\_](https://twitter.com/baxazar_ "Sergey Veremiychuk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")  у меня с автоматизацыей платежей отлично справляется ПриватБанк. Один раз заполнил електронный бланк, ...

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И ты вчера не рассказал как ты автоматизировал квартальную отчетность.

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") В Приват24 для Бизнеса есть регулярные платежи, я завел оплату Единого Налога и ЕСВ в них, благо суммы фиксированные.

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") единый налог 5% же. Почему сумма фиксированная? Ну и с отчетностью то это не пересекается. Это чисто перевод су…

RT [@vladfrandom](https://twitter.com/vladfrandom "Vlad F. Random"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@SilentImp](https://twitter.com/SilentImp "Тихий Бес") не фиксированная, но легко вычисляется самим банком

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") у меня 2-я группа ЕН была и было фиксированно, но да наверняка и вычислять % умеет.Про отчет в налоговую я неправильно понял\(

.[@SilentImp](https://twitter.com/SilentImp "Тихий Бес") но квартальные отчеты легко делегировать бухгалтеру на удаленке за маленькие $А на будущее Приват делает автоматизацию госуслуг

RT [@dersmoll](https://twitter.com/dersmoll "Smoll"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") весь вечер пытаюсь оплатить коммуналку на [erc.megabank.net](http://t.co/EnCOW4UcbA "http://erc.megabank.net"),а он лежит.Послезавтра дедлайн.Так что тут палк…

.[@dersmoll](https://twitter.com/dersmoll "Smoll") Вот отличный пример - у тебя есть данные \(счёт\) и не работает сторонняя утилита по их обработке \(портмоне\).Оплати по реквизитам.

.[@dersmoll](https://twitter.com/dersmoll "Smoll") Просто Плажеж по Украине - Создать и вбиваешь все данные с бумажной квитанции. Портмоне делает тоже самое. Волшебства тут нет.

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") там как правило более старшее поколение. Те же Яндекс.Деньги позволяют платить за всё с прикреплённой карты и ав…

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@kuksikus](https://twitter.com/kuksikus "R.M.") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ну в сбере есть автоплатёж для всего. и его включение как-то громко называть "автоматизацией"

.[@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@kuksikus](https://twitter.com/kuksikus "R.M.") Но это автоматизация и есть! И что она легко доступна так что вы не считаете ее чем-то особенным - плюсик в карму банку

.[@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@kuksikus](https://twitter.com/kuksikus "R.M.") На удивление даже среди программеров оч много людей не умеющих и боящихся пользоваться кредитными картами и смартфонами

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@vladfrandom](https://twitter.com/vladfrandom "Vlad F. Random") Но бытовая автоматизация это хорошо. Если подходить разумно и не тратить месяц, что бы экономить час в год. [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

RT [@yustovskiy](https://twitter.com/yustovskiy "Nikita Yustovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Моя мечта об автоматизации коммуналки разбивается о возможности ЖЭКа, у нас даже счет вручную выписывают.

.[@yustovskiy](https://twitter.com/yustovskiy "Nikita Yustovskiy") у меня в пгт. точно также выписывают квитанции вручную. Я пошел в поселковый ЖЭК и попросил выдать мне реквизиты для безнала.

.[@yustovskiy](https://twitter.com/yustovskiy "Nikita Yustovskiy") блин у тебя же Крым. Но всё равно деньги в итоге уходят из ЖЭКа безналом поставщику и у ЖЭКа есть безнальные реквизиты,узнай их

.[@yustovskiy](https://twitter.com/yustovskiy "Nikita Yustovskiy") реквизиты есть как у самого ЖЭКа так и у тех кому он переводит деньги. Они конечно удивятся \(я был единственным таким\) но дадут

.[@baxazar\_](https://twitter.com/baxazar_ "Sergey Veremiychuk") не, там фишка в том что если ты вобьёшь путь к файлу в Power shell - оно не сработает, он не понимает когда в него пути вбивают.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@baxazar\_](https://twitter.com/baxazar_ "Sergey Veremiychuk") Понимает, просто не так вбивал путь :\)

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@baxazar\_](https://twitter.com/baxazar_ "Sergey Veremiychuk") да, там другой формат. Но фишка в том что установщики утилит не расчитывают что их запустят в Power shell:\(

RT [@teardrop\_lisa](https://twitter.com/teardrop_lisa "Lisa Katorgina "): На всякий случай знайте, что последняя версия апи яндекс карт не поддерживает ие7. Это знание может сэкономить вам пару …

RT [@baxazar\_](https://twitter.com/baxazar_ "Sergey Veremiychuk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а какой текстовый редактор ты используешь? У меня Саблайм, я расширил контекстное меню\(есть плагин\) и через него…

.[@baxazar\_](https://twitter.com/baxazar_ "Sergey Veremiychuk") юзаю Brackets, но на новой работе попробую Webstorm.

## Пятница <small>32 твита</small>

RT [@saratovtsev](https://twitter.com/saratovtsev "Evgeny Saratovtsev"): Сегодня пятница, а значит самое время:  
- выкатить сложный релиз  
- попробовать новую фичу в конфиге на продакшене  
- поменят…

RT [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov"): Friday… [pic.twitter.com/F48w5cnLY2](http://t.co/F48w5cnLY2)

RT [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик"): В рамках пятницы и фана: у меня есть домен [stopfridaydeploy.com](http://t.co/B1F4JfvG5u "http://stopfridaydeploy.com/") \(и .ru\) И есть идея собрать отзывов о том, почему лучше…

\*/ Доброе утро!Вчера мы обсуждали ускорение и тонкую настройку сборки Grunt.

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") может быть немножко про JavaScript поговорить?

Пятница день ссылок. В [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") я делал «День дружбы» в LinkedIn, тут предлагаю кидать в реплаи ссылки на GitHub с вашими JS-проектами.

Я буду их RT, а вы не просто добавляйте в FAV,а лайкайте звёздочкой🌠на GittHub. Нас почти 2000 человек,мы можем прокачать любой репозиторий!

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/sapegin](https://t.co/etTEZ9Pdwj "https://github.com/sapegin") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик")

RT [@iam\_aishek](https://twitter.com/iam_aishek "Alexandr Borisov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") [aishek.github.io/jquery-animate…](http://t.co/j7MpH65CUi "http://aishek.github.io/jquery-animateNumber/") до сих пор не понимаю, почему это самый популярный мой проект :\)

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/mistadikay/doob](https://t.co/lrqpbz1uRD "https://github.com/mistadikay/doob") управление глобальным стэйтом в React: data-зависимости в компонентах, инкапсуляция за…

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/yummies/yummies](https://t.co/Lc0L2zab7S "https://github.com/yummies/yummies") React+BEM \(BEMJSON в render, слои переопределения, построение компонентов на основе др…

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") еще начал делать BEM-ассерты для Chai, но никак руки не дойдут доделать [github.com/mistadikay/cha…](https://t.co/KloMFdsniE "https://github.com/mistadikay/chai-bem")

RT [@ymatuhin](https://twitter.com/ymatuhin "Юрий Матюхин"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В такие моменты даже немного стыдно, что делиться особо нечем. Разве что [github.com/autoprefixer/a…](https://t.co/EoZnLqf6XO "https://github.com/autoprefixer/autoprefixer.github.io").

RT [@MikitaLisavets](https://twitter.com/MikitaLisavets "Mikita Lisavets"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") бложик:\) [github.com/FeelEnergyCB/M…](https://t.co/j4LIBeNHU9 "https://github.com/FeelEnergyCB/MinimalistBlog")

RT [@lazzy\_panda](https://twitter.com/lazzy_panda "Dmitry Maslov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик")   
[dmaslov.github.io/github-gist](http://t.co/osjz1OzB3V "http://dmaslov.github.io/github-gist")  
[dmaslov.github.io/csv-preview/](http://t.co/O9OTqxxd2Z "http://dmaslov.github.io/csv-preview/")  
Пара веб-компонентов на polymer

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") И вот ещё свежак — генератор стайлгайдов для Реакта — [github.com/sapegin/react-…](https://t.co/bqUBlw0w5J "https://github.com/sapegin/react-styleguidist") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик")

RT [@dfilatov\_](https://twitter.com/dfilatov_ "Филатов Дмитрий"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/dfilatov/vidom](https://t.co/cykCPoPDm4 "https://github.com/dfilatov/vidom") like React but fast :\)

RT [@helloilya](https://twitter.com/helloilya "Илья"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик"), ангуляр директивы для показа прелоудеров на кнопках и формах: [github.com/helloilya/angu…](https://t.co/Pz20mdgWgA "https://github.com/helloilya/angular-promise-loader")

RT [@helloilya](https://twitter.com/helloilya "Илья"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик"), yeoman генератор для статических сайтов с разными плюшками: [github.com/helloilya/gene…](https://t.co/9dcP3Zvg6G "https://github.com/helloilya/generator-yeomify-landing")

RT [@paveldemyanenko](https://twitter.com/paveldemyanenko "xeLL"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") gulp plugin for Parker, stylesheet analysis tool [github.com/PavelDemyanenk…](https://t.co/PmQitgAPAe "https://github.com/PavelDemyanenko/gulp-parker")  
useful photoshop extensions http[github.com/PavelDemyanenk…](https://t.co/oy2sjI8ftC "https://github.com/PavelDemyanenko/photoshop-extensions")

RT [@lexich](https://twitter.com/lexich "lexich"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [github.com/lexich/redux-a…](https://t.co/btPiWvO2Wy "https://github.com/lexich/redux-api") Rest API для redux

RT [@agudulin](https://twitter.com/agudulin "Alexander Gudulin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") рандомные цитаты из adventure time: [github.com/agudulin/at-qu…](http://t.co/FrxoKmfXzD "http://github.com/agudulin/at-quotes")

RT [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") не совсем js, но может пригодиться: Atom's One Light &amp; Dark для Ubuntu [github.com/denysdovhan/on…](https://t.co/8eIq8WOdeX "https://github.com/denysdovhan/one-gnome-terminal")

RT [@denysdovhan](https://twitter.com/denysdovhan "Denys Dovhan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и вот еще Oceanic Next - крутая с Space Gray [github.com/denysdovhan/oc…](https://t.co/uQxQvPgy7v "https://github.com/denysdovhan/oceanic-next-gnome-terminal")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@pepelsbey](https://twitter.com/pepelsbey "Вадим Макеев") ну тогда [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") должен срочно об этом словаре [github.com/web-standards-…](https://t.co/ZpAspFgQbr "https://github.com/web-standards-ru/dictionary") всем рассказать

RT [@alxe\_master](https://twitter.com/alxe_master "Aliaksandr Pasynkau"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") опаздал, но для создания читаемых и поддерживаемых флоу grunt конфигов для сборки использую [github.com/aliaksandr-pas…](https://t.co/Xy03RC5g8t "https://github.com/aliaksandr-pasynkau/grunto")

Рабочая неделя подошла к концу. В эфире был [@delaz](https://twitter.com/delaz "Igor Zenich") из [@EpamKharkiv](https://twitter.com/EpamKharkiv "Epam Kharkiv").Мне было очень интересно с вами, спасибо! Надеюсь вам тоже понравилось 🔣

В понедельник мы обсуждали когда  умрёт CSS и нам больше не придётся вручную рисовать атомы интерфейса.

Во вторник дискутировали про кодстайлы Javascript и является ли хорошей или плохой практикой \(не\)писать ;

Среда была «Днём автоматизации» в OS и жизни, плавно перетекшей в День и Ночь оплаты ЖКХ :\)

В четверг разбирали case study оптимизации скорости сборки на Grunt до невероятной 1 секунды.И как удобно организовать Gruntfile и таски.

Пятница была днем ссылок на ваши интересные js-наработки на GitHub.

## Суббота <small>40 твитов</small>

RT [@iDeus\_team](https://twitter.com/iDeus_team "iDeus"): Теперь вам есть куда отправить клиента у которого кеш.  
[clearyourcache.info](http://t.co/Z5aN9Q1MDf "http://clearyourcache.info") [pic.twitter.com/20nM3Ltpin](http://t.co/20nM3Ltpin)

Сегодня прямая трансляция [#FrontTalks](https://twitter.com/search?q=%23FrontTalks) Conference 2015: [youtube.com/watch?v=mXRkFM…](https://t.co/f6Wcjj9Lya "https://www.youtube.com/watch?v=mXRkFMg4PR0")  
Большинство докладов уже закончилось, но вы можете отмотать:\)

[#FrontTalks](https://twitter.com/search?q=%23FrontTalks) закончился, как вам доклады?

RT [@adinvadim](https://twitter.com/adinvadim "Vadim"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") включил трансляцию на словах про афтапати, никогда так еще не рыдал

.[@adinvadim](https://twitter.com/adinvadim "Vadim") ну благо трансляция через YouTube, можно перемотать на начало, он же всё записывает.

RT [@kirillmadorin](https://twitter.com/kirillmadorin "Kirill Madorin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@adinvadim](https://twitter.com/adinvadim "Vadim") там только последние 4 часа

В [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") обсуждают jQuery.

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик") Людей, которые не хотят учить Яваскрипт, портит не Джейквери.

Я считаю что jQuery отличный инструмент, а призывы «давайте будем писать как-то эдак» - полезны для индустрии, но вредны для business needs.

RT [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") да отказ от jQuery в пользу чистого js - это как отказаться от экскаватора в пользу лопаты. Можно, но …

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Недавно листал слайды: автор призывал решать реальные задачи. Выпиливание Джейквери отовсюду никакую реальную зад…

RT [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov"): [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") тем, что он перестал быть нужен. С es6, dom4, cssom и fetch он просто больше не нужен.

.[@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") дело ж не в "нужности" а удобстве. Sass тоже "не нужен", можно все писать на чистом тру-css, будет"быстрее"

RT [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha"): [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") т.е. полифилы айс, а jquery не айс - и в чём логика?

RT [@pomidore](https://twitter.com/pomidore "Александр Лунев"): [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") в поддержке стандарта

.[@pomidore](https://twitter.com/pomidore "Александр Лунев") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") это просто переход на больший уровень абстракции. Раньше на ассемблере писали, потом перешли на C

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Да, давайте закидывать в сайты всё что удобно и красиво. [twitter.com/codepo8/status…](https://t.co/K00kpkurjS "https://twitter.com/codepo8/status/641781135069028352")

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Главное ведь не скорость и не размер, главное - сохранить пару символов разрабо…

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Главное решить бизнес-задачи. А это быстрая разработка, \_легка\_ и \_\_дешевая\_\_ поддержка.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Бизнес-задачи жквери не решает всё равно. То что он даёт, уже и так есть в брау…

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Решает ещё и как! На поддержку очередного паралакс-сайта на jQuery можно нанять студента за 200$

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Паралакс-сайт на jQuery - это не бизнес-задачи, это сайт-визитка :\)

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Её написание, поддержка и главное оплата - и есть бизнес задача. Поставь себя на место клиента.

RT [@pomidore](https://twitter.com/pomidore "Александр Лунев"): [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") это специфика работы в студии, видимо. Херак-херак и бизнес-задача

.[@pomidore](https://twitter.com/pomidore "Александр Лунев") [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") нет, бизнес это за что платятся деньги. Клиенту не нужен тру-Js. Ему важен результат.

RT [@serhey\_shmyg](https://twitter.com/serhey_shmyg "Serhey Shmyg"): [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") он дает 100500 плагинов. Иногда которые писать с 0 это пустая тра…

RT [@serhey\_shmyg](https://twitter.com/serhey_shmyg "Serhey Shmyg"): [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") неужто пишите свое когда например нужен колорпикер?

RT [@sergik\_twitt](https://twitter.com/sergik_twitt "Зверев Сергей"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Я все думаю, за кем я эти дурацкие паралаксы вечно переделываю.

.[@sergik\_twitt](https://twitter.com/sergik_twitt "Зверев Сергей") [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") если переделываешь - значит была причина клиенту \_заплатить деньги\_. И только так.

Я за то чтобы пробовать новое. За эксперименты, за bleeding edge, за «а давайте!»... Но не нужно давать вредные советы что это нужно всем.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это уже не bleeding edge года 4, на протяжении которых без jQuery прекрасно строятся новые сайты.

.[@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") но мир не строит одинаковые сайты одной сложности решающие одни задачи. Код вторичен. Есть классные инструменты с ужасным кодом.

Холивар должен приносит пользу. Давайте назовем дешевые варианты замены jQuery. Опустим вопрос «зачем» и «какую задачу это решает».

Точнее чем заменить jQuery и все плагины под него написанные.

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@kuksikus](https://twitter.com/kuksikus "R.M.") [@pomidore](https://twitter.com/pomidore "Александр Лунев") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") Как удобно называть "хипстерскими штуками" любые новые дост…

RT [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@kuksikus](https://twitter.com/kuksikus "R.M.") [@pomidore](https://twitter.com/pomidore "Александр Лунев") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") "Не нужны нам ваши хипстерские моторы, у нас тут кони и так…

RT [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha"): [@kuksikus](https://twitter.com/kuksikus "R.M.") [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@pomidore](https://twitter.com/pomidore "Александр Лунев") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") блин я попал в ад.. вычеркните меня из разоговора

RT [@kuksikus](https://twitter.com/kuksikus "R.M."): [@stewardtz](https://twitter.com/stewardtz "Andriy Petrusha") [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@pomidore](https://twitter.com/pomidore "Александр Лунев") [@maxmaximov](https://twitter.com/maxmaximov "Max Maximov") [@sapegin](https://twitter.com/sapegin "Artem Sapegin") ты попал в реалтность \_нормальной\_ веб-разработки. Прими это

Помните в понедельник мы ругали CSS за то что мы 15 лет рисуем интерфейсы вручную? jQuery стал тем, чем не стал CSS — дал наборы решений.

Сейчас прикрутить слайдер на сайт может человек вообще ничего не знающий про JS. А чтоб провести проводку электрику не нужно знать химию.

## Воскресенье <small>43 твита</small>

RT [@yustovskiy](https://twitter.com/yustovskiy "Nikita Yustovskiy"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Bootstrap вспомнился сразу в части готовых CSS-решений, которые используются, когда нужен более-менее приличны…

RT [@as\_Crazy](https://twitter.com/as_Crazy "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я живу в мире где реакт и его аналоги уже победили, и от таких "инженеров" которые все на jquery плагинах собира…

RT [@justusebrain](https://twitter.com/justusebrain "Eugene Rodionov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в bleeding edge Реакте или Web Components и того проще подключить готовый компонент. И делается это без ручн…

RT [@as\_Crazy](https://twitter.com/as_Crazy "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") имхо изначальная идея с готовыми компонентами несомненно правильная, просто способ "jquery плагинов" невероятно …

RT [@as\_Crazy](https://twitter.com/as_Crazy "Alexander"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а вот react со своей компонентой моделью выводит это всё на новый уровень, ну или те же web components

Добрый день, сегодня воскресенье, день оффтопик-тем, вопросов и хобби.

Давайте обсудим современный стимпак: считающиеся старыми технологии в современной жизни.Например подписка на журналы [pic.twitter.com/XX5p5u0b9l](http://t.co/XX5p5u0b9l)

А так же: бумажные книги, проводной телефон, DVD и возможно сюда можно отнести даже спутниковое тв \(для частного пользования\).

RT [@webholt](https://twitter.com/webholt "Vlad :: gwer"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мне не кажется, что стимпанк — удачное определение. Это может быть ретро, винтаж, но не стимпанк\)

Винтажные технологии кажутся нам устаревшими, но они могут быть на удивление полезны/удобны.Пользуетесь ли вы чем-то таким «ретро»? Почему?

RT [@webholt](https://twitter.com/webholt "Vlad :: gwer"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Бумажные книги — да. Техническая литература только в бумаге. Мне так удобнее.

RT [@webholt](https://twitter.com/webholt "Vlad :: gwer"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") При изучении нового языка по книге нет соблазна копипастить код. Своего рода запись языка в моторную память.

RT [@Semenov](https://twitter.com/Semenov "Вася Матрос"): [@webholt](https://twitter.com/webholt "Vlad :: gwer") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Сегодня бумажные книги — это как винил. Дорого, неудобно, но винтажно!

RT [@psyw](https://twitter.com/psyw "Максим Усачёв"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Игорь, я люблю печатные книги за их запах, за возможность чувствовать их в руках. Мне даёт это ощущение живой книги:\)

RT [@webholt](https://twitter.com/webholt "Vlad :: gwer"): [@Semenov](https://twitter.com/Semenov "Вася Матрос") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Винил у друзей дома иногда крутится. Многие вещи доставляют ни с чем не сравнимое эстетическое удовольст…

Мне очень нравятся бумажные книги и я покупаю их, в том числе новые и НЕтехнические.Но красивую книгу с классной полиграфией жалко таскать.

Хочется её электронную версию под Kindle, а бумажная книга просто украшает полку и когда-никогда берёшь её в руки порадовать себя/друзей.

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Конфликт эстетики и удобства: бумажные книги клёво держать в руках и листать, но неудобно читать.

С журналами в этом плане легче - их можно складывать, скручивать, удобно читать в дороге.Подписка мне нравится удобством и экономией на $$.

Ещё журналы по сравнения с чтением новостей/репортажей в инете имеют преимущество в эксклюзивном контенте и возможностях работы с текстом.

RT [@brdt\_D](https://twitter.com/brdt_D "Dmitry"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") есть стоящие технические журналы? Раньше Хакер, какое-то время читал. Потом понял, что однотипненько

.[@brdt\_D](https://twitter.com/brdt_D "Dmitry") «Хакер» обожал когда был студентом. Он и по прежнему хорош, просто мы изменились: у нас специализация, работа, мы читаем профильное

RT [@psyw](https://twitter.com/psyw "Максим Усачёв"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ясно, если вы говорите про "невебских звёзд",про таких мне читать неинтересно, а вот про наших, родных веб-звёзд - д…

.[@psyw](https://twitter.com/psyw "Максим Усачёв") интересно, кто-то встречал интервью с русскоязычными известными фронтендерами в глянцевых журналах? [pic.twitter.com/SHatVlRdWH](http://t.co/SHatVlRdWH)

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ручка блокнот для размышлений над решением задачи. процесс письма примерно как и прогулки помогает лучше соображ…

RT [@webholt](https://twitter.com/webholt "Vlad :: gwer"): [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Кстати, и это тоже. Только я карандаш предпочитаю.

RT [@brdt\_D](https://twitter.com/brdt_D "Dmitry"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") давайте поговорим о технической литературе, которая must have

.[@brdt\_D](https://twitter.com/brdt_D "Dmitry") Сразу назовём классику: [web-standards.ru/books/](http://t.co/ifkptBUjwQ "http://web-standards.ru/books/")

RT [@W\_art](https://twitter.com/W_art "Варт"): [@brdt\_D](https://twitter.com/brdt_D "Dmitry") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [html5rocks.com/en/tutorials/i…](http://t.co/RUN0290HIq "http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/")

RT [@burivuh](https://twitter.com/burivuh "Eugene Molodkin"): [@brdt\_D](https://twitter.com/brdt_D "Dmitry") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") если про js - блог Дмитрия Сошникова [dmitrysoshnikov.com/tag/ecma-262-3/](http://t.co/PWOEnIGw4D "http://dmitrysoshnikov.com/tag/ecma-262-3/")

RT [@burivuh](https://twitter.com/burivuh "Eugene Molodkin"): [@brdt\_D](https://twitter.com/brdt_D "Dmitry") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и Совершенный код Макконела, если не про js

RT [@brdt\_D](https://twitter.com/brdt_D "Dmitry"): [@burivuh](https://twitter.com/burivuh "Eugene Molodkin") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да. Хорошая книга. Есть еще у Мартина Фаулера книга про рефакторинг

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@webholt](https://twitter.com/webholt "Vlad :: gwer") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ещё выписываю в блокнот всё важное, когда изучаю что-то новое - так лучше запоминается

Моё время подошло к концу.Огромное спасибо за реплаи и особенно за критику.

Кому-то эта неделя запомнится холиварами про ; и jQuery,кому-то - ускорением и настройкой Grunt,кому-то - темой ЖКХ и автоматизацией.

Я надеюсь каждый смог найти что-то полезное для себя.Эти темы я выбрал не случайно, я считаю их важными для нас всех.

Как зарождаются и умирают де-факто стандарты и практики \(;,jQuery\), переход от ремесла к производству \(CSS\), ускорение и автоматизация.

Я хотел донести мысль что скрипты нужно программировать не только в работе, но и в жизни \(ЖКХ-оплата-API.life ;\)Но важны и инструменты.

Жизнь слишком короткая штука чтоб тратить её на то, что должны делать машины. Автоматизация, это и техника, бытовая техника в доме.

Купить посудомойку полезнее среднестатистического новомодного гаджета.Избавляйтесь от рутины, тратьте это время на любимых и любимое 👯🐰🌉

Хорошей новой рабочей недели и мирного неба.Bye-bye! 🙋

RT [@toivonens](https://twitter.com/toivonens "var ya; // ru"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") О! Да, подтверждаю. Вообще следую правилу "покупать то, что меняет качество жизни".

Вот и закончился сэт от [@delaz](https://twitter.com/delaz "Igor Zenich"), а наш эфир продолжается и скоро мы поприветствуем нашего нового гостя, не переключайтесь!

## Ссылки

### github.com  
<a href="https://github.com/Flet/semistandard" target="_blank">https://github.com/Flet/semistandard</a>  
<a href="https://github.com/sindresorhus/xo" target="_blank">https://github.com/sindresorhus/xo</a>  
<a href="https://github.com/2gis/makeup" target="_blank">https://github.com/2gis/makeup</a>  
<a href="https://github.com/veged/odessajs-bem" target="_blank">https://github.com/veged/odessajs-bem</a>  
<a href="https://github.com/ideus-team/html-framework" target="_blank">https://github.com/ideus-team/html-framework</a>  
<a href="https://github.com/firstandthird/load-grunt-config" target="_blank">https://github.com/firstandthird/load-grunt-config</a>  
<a href="https://github.com/sindresorhus/load-grunt-tasks" target="_blank">https://github.com/sindresorhus/load-grunt-tasks</a>  
<a href="https://github.com/ideus-team/html-framework/blob/master/dev/grunt/aliases.yaml" target="_blank">https://github.com/ideus-team/html-framework/blob/master/dev/grunt/aliases.yaml</a>  
<a href="https://github.com/ideus-team/html-framework/blob/master/dev/Gruntfile.js" target="_blank">https://github.com/ideus-team/html-framework/blob/master/dev/Gruntfile.js</a>  
<a href="https://github.com/ideus-team/html-framework/pull/1" target="_blank">https://github.com/ideus-team/html-framework/pull/1</a>  
<a href="https://github.com/sindresorhus/grunt-concurrent" target="_blank">https://github.com/sindresorhus/grunt-concurrent</a>  
<a href="https://github.com/ideus-team/html-framework/commit/7ba355055461f68c141b2db873f3217e23c56b12" target="_blank">https://github.com/ideus-team/html-framework/commit/7ba355055461f68c141b2db873f3217e23c56b12</a>  
<a href="https://github.com/ideus-team/html-framework/blob/master/dev/install.cmd" target="_blank">https://github.com/ideus-team/html-framework/blob/master/dev/install.cmd</a>  
<a href="https://github.com/sapegin" target="_blank">https://github.com/sapegin</a>  
<a href="https://github.com/mistadikay/doob" target="_blank">https://github.com/mistadikay/doob</a>  
<a href="https://github.com/yummies/yummies" target="_blank">https://github.com/yummies/yummies</a>  
<a href="https://github.com/mistadikay/chai-bem" target="_blank">https://github.com/mistadikay/chai-bem</a>  
<a href="https://github.com/autoprefixer/autoprefixer.github.io" target="_blank">https://github.com/autoprefixer/autoprefixer.github.io</a>  
<a href="https://github.com/FeelEnergyCB/MinimalistBlog" target="_blank">https://github.com/FeelEnergyCB/MinimalistBlog</a>  
<a href="https://github.com/sapegin/react-styleguidist" target="_blank">https://github.com/sapegin/react-styleguidist</a>  
<a href="https://github.com/dfilatov/vidom" target="_blank">https://github.com/dfilatov/vidom</a>  
<a href="https://github.com/helloilya/angular-promise-loader" target="_blank">https://github.com/helloilya/angular-promise-loader</a>  
<a href="https://github.com/helloilya/generator-yeomify-landing" target="_blank">https://github.com/helloilya/generator-yeomify-landing</a>  
<a href="https://github.com/PavelDemyanenko/gulp-parker" target="_blank">https://github.com/PavelDemyanenko/gulp-parker</a>  
<a href="https://github.com/PavelDemyanenko/photoshop-extensions" target="_blank">https://github.com/PavelDemyanenko/photoshop-extensions</a>  
<a href="https://github.com/lexich/redux-api" target="_blank">https://github.com/lexich/redux-api</a>  
<a href="http://github.com/agudulin/at-quotes" target="_blank">http://github.com/agudulin/at-quotes</a>  
<a href="https://github.com/denysdovhan/one-gnome-terminal" target="_blank">https://github.com/denysdovhan/one-gnome-terminal</a>  
<a href="https://github.com/denysdovhan/oceanic-next-gnome-terminal" target="_blank">https://github.com/denysdovhan/oceanic-next-gnome-terminal</a>  
<a href="https://github.com/web-standards-ru/dictionary" target="_blank">https://github.com/web-standards-ru/dictionary</a>  
<a href="https://github.com/aliaksandr-pasynkau/grunto" target="_blank">https://github.com/aliaksandr-pasynkau/grunto</a>

### Другие

<a href="https://ru.bem.info/libs/bem-components/" target="_blank">https://ru.bem.info/libs/bem-components/</a>  
<a href="https://vimeo.com/4881198" target="_blank">https://vimeo.com/4881198</a>  
<a href="http://bg-d.net/htmlblock" target="_blank">http://bg-d.net/htmlblock</a>  
<a href="http://standardjs.com" target="_blank">http://standardjs.com</a>  
<a href="http://extreme.lv" target="_blank">http://extreme.lv</a>  
<a href="http://shipilev.net/blog/2015/voltmeter/" target="_blank">http://shipilev.net/blog/2015/voltmeter/</a>  
<a href="http://miumau.livejournal.com/1613742.html" target="_blank">http://miumau.livejournal.com/1613742.html</a>  
<a href="https://mobile.twitter.com/delaz/status/640778379541782528" target="_blank">https://mobile.twitter.com/delaz/status/640778379541782528</a>  
<a href="https://chocolatey.org/" target="_blank">https://chocolatey.org/</a>  
<a href="https://gist.github.com/lelandbatey/8677901" target="_blank">https://gist.github.com/lelandbatey/8677901</a>  
<a href="https://instagram.com/p/7YswC8Kupe/" target="_blank">https://instagram.com/p/7YswC8Kupe/</a>  
<a href="https://bit.ly/odessajs2015-bem" target="_blank">https://bit.ly/odessajs2015-bem</a>  
<a href="https://www.portmone.com.ua/" target="_blank">https://www.portmone.com.ua/</a>  
<a href="http://stylelint.io/" target="_blank">http://stylelint.io/</a>  
<a href="https://www.npmjs.com/package/jit-grunt" target="_blank">https://www.npmjs.com/package/jit-grunt</a>  
<a href="http://frontender.info/gulp-grunt-whatever/" target="_blank">http://frontender.info/gulp-grunt-whatever/</a>  
<a href="http://mattbailey.io/a-beginners-guide-to-grunt-redux/" target="_blank">http://mattbailey.io/a-beginners-guide-to-grunt-redux/</a>  
<a href="http://syropia.net/journal/how-to-use-bourbon-with-gruntjs" target="_blank">http://syropia.net/journal/how-to-use-bourbon-with-gruntjs</a>  
<a href="http://webdevstudios.com/2014/10/09/wordpress-up-and-running-with-grunt-sass-bourbon-and-neat/" target="_blank">http://webdevstudios.com/2014/10/09/wordpress-up-and-running-with-grunt-sass-bourbon-and-neat/</a>  
<a href="http://rost.kh.ua/payment/" target="_blank">http://rost.kh.ua/payment/</a>  
<a href="http://erc.megabank.net" target="_blank">http://erc.megabank.net</a>  
<a href="http://stopfridaydeploy.com/" target="_blank">http://stopfridaydeploy.com/</a>  
<a href="http://aishek.github.io/jquery-animateNumber/" target="_blank">http://aishek.github.io/jquery-animateNumber/</a>  
<a href="http://dmaslov.github.io/github-gist" target="_blank">http://dmaslov.github.io/github-gist</a>  
<a href="http://dmaslov.github.io/csv-preview/" target="_blank">http://dmaslov.github.io/csv-preview/</a>  
<a href="http://clearyourcache.info" target="_blank">http://clearyourcache.info</a>  
<a href="https://www.youtube.com/watch?v=mXRkFMg4PR0" target="_blank">https://www.youtube.com/watch?v=mXRkFMg4PR0</a>  
<a href="http://web-standards.ru/books/" target="_blank">http://web-standards.ru/books/</a>  
<a href="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/" target="_blank">http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/</a>  
<a href="http://dmitrysoshnikov.com/tag/ecma-262-3/" target="_blank">http://dmitrysoshnikov.com/tag/ecma-262-3/</a>
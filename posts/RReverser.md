# RReverser

_06 сентября 2015_

## Понедельник <small>291 твит</small>

London is the capital of Great Britain, ой, то есть привет! С вами [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan") и я буду занудствовать о JS с точки зрения девтулзов :\)

Под девтулзами в данном контексте понимаются не столько браузерные, сколько парсеры, транспайлеры, линтеры и прочие чудеса техники.

Тема довольно специфическая по сравнению с Реактами и прочими, но надеюсь развеять страхи/мифы и успеть ответить на любые ваши вопросы :\)

Сам занимаюсь этим как хобби уже около 2 лет, и месяц - наконец-то в качестве основной работы.

Начнем издалека - рискую повториться, но с каких языков вы пришли в JavaScript и, собственно - зачем?\)

И на этой же ноте, так как я абсолютно недисциплинированная сова, живу в UTC+1 и завтра еще и выходной - сразу же прощаюсь. До утра!

Интересно, оказывается, намного больше пришли в JS как первый язык / из верстки чем из других \(хотя есть C++, Python, AS3, PHP, VB\(!\)\).

Вот что смущает \(хотя и не сюрприз\) - что в JS приходят больше не по любви, а "по залету" \(пришлось потому что тренд, модно, молодежно\).

Соответственно, когда приходят в язык и встречают вот это все "безобразие", что отличается от других языков, наступают на те же грабли.

Вот, кстати, как раз подтверждение моих слов. [twitter.com/arik0n/status/…](https://t.co/1dQqDdy6uc "https://twitter.com/arik0n/status/638288062284464128")

За попыткой сравнить его с другими языками и натянуть те же шаблоны, к сожалению, разработчики не видят его красоты. [twitter.com/sapegin/status…](https://t.co/O6mXm4OSbY "https://twitter.com/sapegin/status/638288173374816260")

А расскажите, какие фичи вас наиболее смущали, когда вы впервые серьезно взялись за язык? Помогли ли вам CoffeeScript / ES6?

И остались ли какие-то вещи, которые вас пугают даже в новом стандарте?

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ES6 — да, очень. Кофескрипт вспоминаю как страшный сон :-\) Но на самом деле не только ES6, но и новые апи в брауз…

Но разве не то же самое, например, в Ruby? И все же его хвалили, одновременно порицая JS. В чем же разница? [twitter.com/ALF\_er/status/…](https://t.co/IGLQLdGArz "https://twitter.com/ALF_er/status/638288751660281856")

К сожалению, правда. Хочется разобраться в этой печальной традиции. [twitter.com/sapegin/status…](https://t.co/O6mXm4OSbY "https://twitter.com/sapegin/status/638288173374816260")

У меня путь был довольно странным. Программируемые советские калькуляторы -&gt; asm -&gt; Delphi -&gt; PHP -&gt; JS. [twitter.com/andrepolischuk…](https://t.co/GqpTCBZPiE "https://twitter.com/andrepolischuk/status/638288702670770176")

А в чем сложность, если не секрет? [twitter.com/sapegin/status…](https://t.co/U1mUQvbTMm "https://twitter.com/sapegin/status/638289173758234624")

И мне как раз язык понравился своей гибкостью и в то же время минимализмом - язык который можно было легко "выучить весь" это ж мечта.

Я так подозреваю, пришел сразу в Node.js, не клиентский? [twitter.com/reklatsmasters…](https://t.co/U30sesJZMu "https://twitter.com/reklatsmasters/status/638289653414645761")

Много современных языков, где все везде по ссылке кроме примитивов. Почему же именно JS может за это не нравиться? [twitter.com/raxpost/status…](https://t.co/VOQTW4tOpZ "https://twitter.com/raxpost/status/638289740127686656")

Верстальщики не согласятся. Хотя, надо их спросить. Ребята, были ли у вас сложности с JS как первым языком? [twitter.com/alexfedoseev/s…](https://t.co/lUbCdk4RuH "https://twitter.com/alexfedoseev/status/638289775758299136")

О да, конвертация типов - всегда весело в динамически типизируемых языках :\) Но ведь для этого у нас и есть гайды. [twitter.com/gxoptg\_/status…](https://t.co/UKBbX8eX6j "https://twitter.com/gxoptg_/status/638290078859722752")

По типу == vs === и все такое.

Да я и сам не рубист, но да, насколько пробовал вникнуть - тоже по несколько способов сделать одно и то же. [twitter.com/ALF\_er/status/…](https://t.co/ldYbcantAp "https://twitter.com/ALF_er/status/638290452945498112")

Но может здесь есть рубисты, которые меня поправят / поделятся своим опытом?

А вот это уже и правда интересно. Почему обратная совместимость может смущать? Я думал скорее наоборот. [twitter.com/somerandstring…](https://t.co/n8mKvlxRRB "https://twitter.com/somerandstring/status/638290709213257729")

Так он же не меняется, пока сам не вызовешь call/apply. Или глобальный, или на обьекте \(если мы про ES5\). [twitter.com/SevInf/status/…](https://t.co/SbaNH0AmPi "https://twitter.com/SevInf/status/638290816864284672")

Ну, сейчас с этим попроще. Проект начинается как  
  
babel src --out-dir dist --watch  
  
и поехали :\) [twitter.com/sapegin/status…](https://t.co/wensuQLbgY "https://twitter.com/sapegin/status/638291050038194176")

Согласен, Rust не может не радовать идеями - предотвращает много ошибок. Но вот Go... нет, спасибо. [twitter.com/SevInf/status/…](https://t.co/0Dyeq8NOzd "https://twitter.com/SevInf/status/638291058019930116")

Геофизика - это сильно :\) Ну и не 1-в-1 же. Паять так и не учился, хотя отец пробовал научить. Как-то не зацепило. [twitter.com/amel\_true/stat…](https://t.co/IRKIvUSa68 "https://twitter.com/amel_true/status/638291821286846464")

Хорошо. Что же скрывается под словом "нормально"? Какие критерии? [twitter.com/raxpost/status…](https://t.co/2SnI8ZhBhg "https://twitter.com/raxpost/status/638291834318536704")

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@ALF\_er](https://twitter.com/ALF_er "Illia Segeda") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") в Руби больше свободы, можно любой класс переопределить, операторы и т. д.

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Мне Руби всегда казался каким-то странным и непонятным \(почти как Перл\). Только месяц назад, на новой работе, ста…

А мы вроде уже списывались об этом в предыдущих разработчиков в комментах :\) МК-52 и МК-54. [twitter.com/gxoptg\_/status…](https://t.co/A5fP4I14gd "https://twitter.com/gxoptg_/status/638292366185660416")

Вот и скажите, что это не пугает больше чем JS. [twitter.com/anton\_davydov/…](https://t.co/lsGGWrxDtS "https://twitter.com/anton_davydov/status/638292388562239488")

RT [@DmytroVoloshyn](https://twitter.com/DmytroVoloshyn "Dmytro Voloshyn"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") да всегда ощущаю путаницу со scope'ами

Но почему? Особенно в ES5 - там же язык был довольно маленький что по синтаксису что по фичах. [twitter.com/Sigiller/statu…](https://t.co/fk8RizsqTm "https://twitter.com/Sigiller/status/638292767580520448")

Ну это как раз первый кейс - анонимная функция всегда в глобальном обьекте. Все просто ведь :\) \(да, до .bind\) [twitter.com/\_h4\_/status/63…](https://t.co/YS5m7QmUf8 "https://twitter.com/_h4_/status/638292831304597504")

RT [@gunlinux](https://twitter.com/gunlinux "Vladimir, 13th"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") это синтаксический сахар, как питонист:   
Должен существовать один - и, желательно, только один - очевидный спосо…

Интересная концепция. Получается, все сводится к определенному набору правил, а не возможностям самого языка? [twitter.com/alexfedoseev/s…](https://t.co/eUiBMqaOaC "https://twitter.com/alexfedoseev/status/638293161530523648")

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Коффе это пример как не надо делать. С es6 писать приятнее и не надо на каждый чих \_. Плюс async/await это …

Разве в jQuery была такая же лапша с коллбеков? В основном ивенты вроде. [twitter.com/reklatsmasters…](https://t.co/jJVRyOhUfC "https://twitter.com/reklatsmasters/status/638293257248722944")

Суть же как раз в том, что каждую неделю различные взгляды от различных людей. [twitter.com/andrey\_sitnik/…](https://t.co/p2VvOmXYZc "https://twitter.com/andrey_sitnik/status/638293548123729920")

Здесь просто другой подход - вместо привязки контекста к ф-ции, надо смотреть на место вызова. Дальше все по маслу. [twitter.com/SevInf/status/…](https://t.co/3IZ3aIdDnK "https://twitter.com/SevInf/status/638293549138739200")

Вторую часть, честно говоря, не понял. Полей какого обьекта? [twitter.com/amel\_true/stat…](https://t.co/A9GMywdbM3 "https://twitter.com/amel_true/status/638293742068334592")

Не-не, ты не ответил на вопрос про "нормально" :\) В JS - тоже ссылки же. [twitter.com/raxpost/status…](https://t.co/NYdRD5Sxmv "https://twitter.com/raxpost/status/638294920432877569")

RT [@\_asci](https://twitter.com/_asci "asci"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а потом появляются всякие Angular

"Свои фишки" - не причина ненавидеть, будь то язык или человек. Познакомиться, изучить ближе - да, но ненавидеть?\) [twitter.com/allfayn/status…](https://t.co/NHiHfugacU "https://twitter.com/allfayn/status/638295703584919552")

А вот, кстати пропустил - Вы пришли с других языков или же это первый? Хочу понять, когда возникает неочевидность. [twitter.com/\_h4\_/status/63…](https://t.co/2SJFubJ4HV "https://twitter.com/_h4_/status/638295775500455937")

С этим, пожалуй, соглашусь. Диалекты \(Coffee-, TypeScript\) удобны как раз для тех, кто приходит с похожих языков. [twitter.com/TheSunwave/sta…](https://t.co/FJB3WkB52p "https://twitter.com/TheSunwave/status/638295912851341312")

RT [@alexfedoseev](https://twitter.com/alexfedoseev "Alex"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я бы сказал, что всё сводится к набору правил в начале изучения — и это удобно. Потом начинаешь сам копать в…

RT [@raxpost](https://twitter.com/raxpost "Роман Роман"): [@reklatsmasters](https://twitter.com/reklatsmasters "Dmitry Tsvettsikh") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я вот не понимаю жалобы на колбеки, при чем тут js? При том что асинхронный? Так это его главное …

Ну как раннего. PHP5. [twitter.com/allfayn/status…](https://t.co/dNxwIjX0ey "https://twitter.com/allfayn/status/638296506324385792")

Как сейчас ситуация? Улучшилась? Или все еще  
  
'use strict';  
'use jquery';  
  
? [twitter.com/\_asci/status/6…](https://t.co/4bhkyifLKU "https://twitter.com/_asci/status/638297033967841281")

RT [@ruGreLI](https://twitter.com/ruGreLI "GreLI"): [@\_h4\_](https://twitter.com/_h4_ "Михаил Баранов") [@SelenIT2](https://twitter.com/SelenIT2 "SelenIT") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") На входе ещё не используют this. А если используют, то не грех изучить матчасть, благо ничего зау…

Да, на беке в других языках с этим гораздо проще - хотя и поэтому же проигрывают в производительности, простаивая. [twitter.com/reklatsmasters…](https://t.co/cdWSthirdV "https://twitter.com/reklatsmasters/status/638297459077287936")

Насколько же часто надо передавать копию? Если это не immutable-like реализация, то копирование недешевая вещь. [twitter.com/raxpost/status…](https://t.co/rRkkInnNcg "https://twitter.com/raxpost/status/638297842872942592")

К сожалению, нет :\( Но, с другой стороны, появилось много недоступных ранее удобств, так что оно того стоило. [twitter.com/andrepolischuk…](https://t.co/mL5y8IUpfL "https://twitter.com/andrepolischuk/status/638297961072603136")

Я не про ревью говорил, скорее про возможность точно знать результат выполнения за счет маленького покрытия языка. [twitter.com/Sigiller/statu…](https://t.co/zx7N3biqyC "https://twitter.com/Sigiller/status/638298352023683072")

Естественно, но будем честными - промисы относительно недавнее явление, и, например, ивенты полностью не заменяют. [twitter.com/dshster/status…](https://t.co/p7MJjbCS0j "https://twitter.com/dshster/status/638298877695762432")

RT [@\_asci](https://twitter.com/_asci "asci"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") как минимум классы появились, все стараются под них обновиться

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ага. В том же C++ передавать объекты по ссылке приходится гораздо чаще, чем в JS копировать их.

Значительно дешевше копирования за счет сохранения диффов даже на больших обьектах. [twitter.com/silentroach/st…](https://t.co/zDbbJ8MHra "https://twitter.com/silentroach/status/638300143234772992")

Это да. Об этом уже вещал [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov"), когда вел аккаунт, но можем поговорить на неделе и об этом тоже. [twitter.com/Sigiller/statu…](https://t.co/oxbuHFuLu7 "https://twitter.com/Sigiller/status/638300525075824640")

Как самому себе провести ревью? Как не кодить по ночам? Читайте в моей новой книге "Никак". [twitter.com/int16h/status/…](https://t.co/oi8S2ab87c "https://twitter.com/int16h/status/638301373600149504")

Естественно. Слепо следовать тренду вообще опасно, но и изучать для понимания плюсов и кейсов стоит. [twitter.com/silentroach/st…](https://t.co/FEoeds2xrx "https://twitter.com/silentroach/status/638302301883629568")

Бенчмарки тоже надо уметь писать. Слишком уж часто судят о производительности, проверяя некорректный микробенчмарк. [twitter.com/iamstarkov/sta…](https://t.co/2cRyr42QiC "https://twitter.com/iamstarkov/status/638302498118336512")

Насчет этого все у того же [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov") есть замечательные статьи  
  
[mrale.ph/blog/2013/04/2…](http://t.co/AQ0edsuAgY "http://mrale.ph/blog/2013/04/29/performance-tuning-as-weather-forecast.html")  
  
[mrale.ph/blog/2014/02/2…](http://t.co/dpQnFZ2Dbq "http://mrale.ph/blog/2014/02/23/the-black-cat-of-microbenchmarks.html")

Рыдаю по ночам в подушку ;\( [twitter.com/dotcypress/sta…](https://t.co/skqZXthdTw "https://twitter.com/dotcypress/status/638302411535314944")

С одной стороны да, с другой сейчас все же есть гарантии на неконфликт имён. С неймспейсами это сложнее. [twitter.com/\_asci/status/6…](https://t.co/uzTaXIhA8R "https://twitter.com/_asci/status/638303788533727232")

Что же в этом плохого? Непривычно - может быть, но на результат кода не так часто влияет как кажется. [twitter.com/amel\_true/stat…](https://t.co/zbAEv3xfLs "https://twitter.com/amel_true/status/638303945253879808")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") были скорее проблемы не с языком а с тем чтобы научиться программировать и понять базовые принципы.

Ну почему же - работают, значит правильные. Хотя да, места для граблей хватает. [twitter.com/amel\_true/stat…](https://t.co/Ml5sRQvA5G "https://twitter.com/amel_true/status/638304225680863232")

Сложно конечно, особенно если по большей части сам и не читал ничего кроме чужого кода... Может кто-то подсказать? [twitter.com/meuwka/status/…](https://t.co/jxmc2Fk8na "https://twitter.com/meuwka/status/638305015128584194")

Хороший совет, кстати. [twitter.com/freiksenet\_ru/…](https://t.co/I3exA7sNMS "https://twitter.com/freiksenet_ru/status/638305014864314368")

Как-то так. [pic.twitter.com/gLkuj4bG3x](http://t.co/gLkuj4bG3x)

Ну проверен он был много где. В частности, C\#. [twitter.com/andrey\_sitnik/…](https://t.co/kBKd2ie239 "https://twitter.com/andrey_sitnik/status/638306016522838016")

Ну как-то и lodash для такого не приходилось использовать. Как впрочем и клонирование в целом, не считая defaults. [twitter.com/raxpost/status…](https://t.co/oC4l2E9uLq "https://twitter.com/raxpost/status/638306198048100352")

Ну вот писал с async/await на C\# тоже. Отличий сильно не заметил, только там Task, а там Promise. [twitter.com/andrey\_sitnik/…](https://t.co/xpf1AuKwqH "https://twitter.com/andrey_sitnik/status/638307401045831680")

Это плохо? Он и так отживает свое понемногу, стандарты побеждают. [twitter.com/andrey\_sitnik/…](https://t.co/SSGZmzrDzQ "https://twitter.com/andrey_sitnik/status/638307545220796416")

Да, были времена... [twitter.com/toivonens/stat…](https://t.co/skfxdi0uhi "https://twitter.com/toivonens/status/638307929913995264")

В JS тоже достаточно package.json. Все остальное не связано и &lt;s&gt;от лукавого&lt;/s&gt; для удобства билдов. [twitter.com/alexfedoseev/s…](https://t.co/8v2qpwPyyb "https://twitter.com/alexfedoseev/status/638308489182486528")

Проблемы с синтаксисом? Нет, не слышал. Насчет ; - да, лично я соглашусь, но есть люди, для которых это фича. [twitter.com/freiksenet\_ru/…](https://t.co/3lPhBWxVvM "https://twitter.com/freiksenet_ru/status/638308952292331520")

Никто не забывал. Он обсуждался в кулуарах \(публичных\) es-discuss, но пока осталось много вопросов без предложений. [twitter.com/andrey\_sitnik/…](https://t.co/lLNQsUcKZn "https://twitter.com/andrey_sitnik/status/638309372905582592")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") а если есть истории про то как хейтеры кофе писали угрожающие письма, то рассказывай, было бы вес…

Ну вот нет. Тот же f::g\(\) - даже не proposal, просто эксперимент. Не говоря о JSX. [twitter.com/andrey\_sitnik/…](https://t.co/ZtKZeERBDY "https://twitter.com/andrey_sitnik/status/638310253919141888")

es-discuss - не "одна группа", даже не организация. Просто mailing list, где любой \(!\) может взять участие. [twitter.com/andrey\_sitnik/…](https://t.co/Wm8pUz55ge "https://twitter.com/andrey_sitnik/status/638311149440757760")

Нельза получить фидбек без конкретного описанного синтаксиса/поведения. Та же ситуация с :: в ES. [twitter.com/andrey\_sitnik/…](https://t.co/wat0G1bfpj "https://twitter.com/andrey_sitnik/status/638311660508348416")

Sweet.js? [twitter.com/andrey\_sitnik/…](https://t.co/1VPFsRp9eT "https://twitter.com/andrey_sitnik/status/638312235920695296")

Ну уж нет. Это организованное место, где можно обсудить все что хочешь, заходи на [esdiscuss.org](https://t.co/bL9zADif9w "https://esdiscuss.org/") [twitter.com/andrey\_sitnik/…](https://t.co/WSBr37KTA6 "https://twitter.com/andrey_sitnik/status/638313178938671104")

Именно, это решаемо, но требует обсуждения - опять-таки смотри [@esdiscuss](https://twitter.com/esdiscuss "es-discuss summaries") [esdiscuss.org/topic/existent…](https://t.co/oJBGDdoeXL "https://esdiscuss.org/topic/existential-operator-null-propagation-operator") [twitter.com/andrey\_sitnik/…](https://t.co/mPgJSu9nli "https://twitter.com/andrey_sitnik/status/638314424470736896")

Туда же топик. [twitter.com/freiksenet\_ru/…](https://t.co/rKqjVOZzmh "https://twitter.com/freiksenet_ru/status/638314977988870144")

RT [@sapegin](https://twitter.com/sapegin "Artem Sapegin"): На этой неделе \(уже\) интересные [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик").

RT [@vadimpleshkov](https://twitter.com/vadimpleshkov "Вадим Плешков"): Всё таки слабоватые у дизайнеров  в [@iamspacegray](https://twitter.com/iamspacegray "Я дизайнер") холивары, конечно, «Скетч или фотошоп». Почитайте сейчас [@jsunderhood](https://twitter.com/jsunderhood "Разработчик"),…

Вот да, я ценю кофе как промежуточное решение проблемы, но слишком частое заблуждение что JS "перенял фичи" из него. [twitter.com/freiksenet\_ru/…](https://t.co/Ipw249dGvt "https://twitter.com/freiksenet_ru/status/638314140554166272")

Брендан Ейк насчет этого тоже не раз отвечал, насколько это далеко от реальности - фичи обсуждались еще в ES4, а кофе их перенял.

Да, ES4 не выстрелил, было много неорганизованности, но авторство многих фич и в кофе, и в TS и собственно ES6 идет как раз оттуда.

? Не выстрелил из-на неорганизованности между компаниями на тот момент, каждая тянула веревку в свою сторону. [twitter.com/twenty/status/…](https://t.co/mCLJ8gLmFR "https://twitter.com/twenty/status/638317333229010944")

Раз мы уже к этому так или иначе перешли - как изменилась ситуация в ES6? Пропали ли все грабли, на которые вы наступали раньше?

Естественно, под "пропали" имеется в виду не из языка как обратно-несовместимые изменения, но скорее как возможность их обходить.

И, конечно, самое интересное - что бы вы хотели видеть в следующей версии? \(как из уже предложенных фич, так и собственные предложения\)

Как там говорят "если проблему можно решить за деньги, это не проблема - это расходы". Так и тут - линтер решает. [twitter.com/andrey\_sitnik/…](https://t.co/TcXysthQWt "https://twitter.com/andrey_sitnik/status/638321516116070400")

RT [@twenty](https://twitter.com/twenty "Павел Франков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") например, любители CoffeeScript вряд ли корректно скажут, во что преобразуется этот мета-код [pic.twitter.com/6QhltQ5Afa](http://t.co/6QhltQ5Afa)

Чем именно будет отличаться новый язык от презета с линтером? Стоит ли оно фрагментации и отдельной поддержки? [twitter.com/andrey\_sitnik/…](https://t.co/8anA35aCL0 "https://twitter.com/andrey_sitnik/status/638322777620131840")

До этого был Traceur, да, и эксперименты проводились в нем \(ну и сразу в браузерах\). Что это доказывает? [twitter.com/thought\_sync/s…](https://t.co/dJvvY4IGs2 "https://twitter.com/thought_sync/status/638324111043915784")

Перепишут что? Весь веб? Все существующие приложения, которые работают и не ломаются с самых начал времен? [twitter.com/somerandstring…](https://t.co/J9zpPqnGYV "https://twitter.com/somerandstring/status/638323998477172736")

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Их же придумывали — тот же Дарт, например. Ничего так и не вышло.

Странно, первый отзыв против :: - а что с ним не так? [twitter.com/gxoptg\_/status…](https://t.co/bWCq13m6up "https://twitter.com/gxoptg_/status/638324390917238784")

RT [@gxoptg\_](https://twitter.com/gxoptg_ "Ivan Akulov"): [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") С ангуляра на реакт переключиться проще, чем внедрить новый язык в движки браузеров.

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Почти ушла проблема с this, тк даже bind теперь не нужен. async/await oчень улучшил читаемость кода на серв…

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") С мутабельностью проще и читабельнее со спредами и деструктиронгом.

Если бы :\) Я скорее за то, чтобы JS имел больше доступа до железа - взрослый язык, как-никак. [twitter.com/maxmaximov/sta…](https://t.co/41vVAcSWKy "https://twitter.com/maxmaximov/status/638325380097687557")

Кто-то пытается начать параллельный холивар :\) [twitter.com/twenty/status/…](https://t.co/sPQJP6LM3x "https://twitter.com/twenty/status/638325829412462592")

Вот это наверное обидно было :\)\) [pic.twitter.com/7Lr6E0pIVn](http://t.co/7Lr6E0pIVn)

Да, поэтому я и пытался подвести к тому, что стандарт - это лучше, чем множество форков. [twitter.com/andrey\_sitnik/…](https://t.co/tDEwECsxgP "https://twitter.com/andrey_sitnik/status/638326173756428288")

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я считаю, что сильнее всего читабельность улучшили template strings и computed properties

Почему лишнюю? Она мешает чем-то? Какие есть лучшие способы? \(как я и писал, интересно собрать предложения\) [twitter.com/dfilatov\_/stat…](https://t.co/AAHZangaNB "https://twitter.com/dfilatov_/status/638326558063730688")

А пока - лирический отступ на "чем же я занимаюсь и почему вообще вещаю о подобных вопросах".

Если говорить конкретно о JS, то я ко-мейнтейнер парсера Acorn, один из разработчиков спецификации AST для JS и JSX и член команды Бабеля.

В частности, виноват в реализации парсинга ES6 \(единственной на момент создания Бабеля\), и поэтому же интересуюсь новыми предложениями.

На этой неделе мы успеем обсудить все с этих тем, как проходят различные этапы реализации фич, можем попробовать сами реализовать плагин.

Не обещаю, что реализуем новый синтаксис, но что-то простое - вполне.

Что значит "забыть о ;"? Сейчас ты тоже можешь о них забыть :\) [twitter.com/andrey\_sitnik/…](https://t.co/dxM6FTNgAN "https://twitter.com/andrey_sitnik/status/638329214777847808")

Кстати да - в любом редакторе это давно доступно. Для саблайма - SublimeLinter например, очень рекоммендую. [twitter.com/freiksenet\_ru/…](https://t.co/y2E2cn4COe "https://twitter.com/freiksenet_ru/status/638329625819660288")

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Не надо о них забывать, а то как standard style и "no semicolons it's fine" и после него "Never start a lin…

Не совсем понял предложение из второй части, но да - онлайн-туториал и хочется попробовать организовать. [twitter.com/markbaraban/st…](https://t.co/6OKc2qvDNk "https://twitter.com/markbaraban/status/638330267564965888")

Если, конечно, будут желающие :\)

Как по мне, хорошо. Может есть другие мнения? [twitter.com/gunlinux/statu…](https://t.co/Yfnu2jxEyh "https://twitter.com/gunlinux/status/638330381503229952")

Лучше так как в Python2/3 - когда один код работает в одной версии, другой - в другой, и зоопарк надо поддеоживать? [twitter.com/11bit/status/6…](https://t.co/2HuCn5QTXH "https://twitter.com/11bit/status/638330876699406336")

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я тоже не думаю о ; и ===, я их просто всегда ставлю, как если бы == было ставить нельзя. Эт…

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Это как скобочки в лиспе, они пропадают через месяц его написания.

Очень интересная постановка вопроса. Значит ли наличие линтера в проекте то, что непременно есть проблемы? [twitter.com/andrey\_sitnik/…](https://t.co/DiMarUAoBd "https://twitter.com/andrey_sitnik/status/638332236002127872")

Это немножно другое имхо. Автопрефиксер он позволяет писать проще и меньше кода, а линтер он предотвращает ошибки. [twitter.com/andrey\_sitnik/…](https://t.co/VlPAgeSvfb "https://twitter.com/andrey_sitnik/status/638332875474141184")

А как у меня мозги скрипели, когда сидел на потоке с нейробиологией на [@AACIMP](https://twitter.com/AACIMP "AACIMP Summer School") :\) \(реклама для студентов, да :\)\). [twitter.com/GrawlCore/stat…](https://t.co/bY8bZR8G4Z "https://twitter.com/GrawlCore/status/638333014095888384")

Ну останется десяток других причин, где он нужен. [twitter.com/andrey\_sitnik/…](https://t.co/pw93wnzLN0 "https://twitter.com/andrey_sitnik/status/638333822724112384")

А это плохо? [twitter.com/rusgautama/sta…](https://t.co/h44fsI9O1H "https://twitter.com/rusgautama/status/638334446844948484")

Да вот как-то 20 лет уже как должен быть легаси, но нет. Много развития, много тулзов - но в целом тот же язык. [twitter.com/rusgautama/sta…](https://t.co/ozXQQhX0am "https://twitter.com/rusgautama/status/638335089554903040")

В JS тоже миграция довольно простая, есть даже тулзы типа codemod, которые позволяют адаптироваться к новым реалиям. [twitter.com/rusgautama/sta…](https://t.co/8NIfBBTnv0 "https://twitter.com/rusgautama/status/638335861797560320")

RT [@yuritkachenko](https://twitter.com/yuritkachenko "Yuri Tkachenko"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") собираю примеры: "проект работал, обновился Х, проект сломался", "проект Х теперь не поддерживается, пришло…

Go оттолкнул после знакомства с тредами в которых разработчики утверждали, что map/filter/reduce никому не нужны. [twitter.com/pstepchenko/st…](https://t.co/RkuJNvakrV "https://twitter.com/pstepchenko/status/638338650778931200")

При том что большинство как раз просило эту фичу и доказывало, что она существует давно уже не только в функциональных языках.

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Да, в go либо go-way либо никак. "Тебе это не нужно" - ответ на любой вопрос о фичах типа generics и функци…

[groups.google.com/forum/\#!topic/…](https://t.co/UMA68IKwE2 "https://groups.google.com/forum/#!topic/golang-nuts/RKymTuSCHS0") кажись эта, гугл ее по крайней мере нашел [twitter.com/anton\_davydov/…](https://t.co/M1NPOH9q5J "https://twitter.com/anton_davydov/status/638339828577370112")

Вот насчет этого есть пропоузалы, но... мы правда хотим этого в JS? Как же хакабельность? [twitter.com/silentroach/st…](https://t.co/N42q7OdE44 "https://twitter.com/silentroach/status/638341652810199040")

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Я не понимаю в принципе зачем приватные свойства. Это такой джавизм, зачем он в динамических языках?

Как-то второй раз спросил о собственных предложениях, но опять скатилось к срачу "все плохо и ничего не исправить".

Против кого - тебя? Как автору библиотеки мне глубоко все равно как ее будут использовать, я даю только API. [twitter.com/silentroach/st…](https://t.co/QDE590XmVL "https://twitter.com/silentroach/status/638346590051266560")

ES6 Map? [twitter.com/freiksenet\_ru/…](https://t.co/709A7iLFB3 "https://twitter.com/freiksenet_ru/status/638347066150883328")

Да нет, если человек хочет использовать недокументированный функционал - ок, но он берет ответственность на себя. [twitter.com/silentroach/st…](https://t.co/SexeizAWUQ "https://twitter.com/silentroach/status/638347403129692160")

Звучит как Typed Objects, которые дают структуры с четким набором полей и бинарных типов. [github.com/coderhaoxin/ty…](https://t.co/sx37vNKkPs "https://github.com/coderhaoxin/typed-objects") [twitter.com/freiksenet\_ru/…](https://t.co/vUmoyefsej "https://twitter.com/freiksenet_ru/status/638347815522058240")

Конечно, на такие можно просто не отвечать. На свой страх и риск. [twitter.com/silentroach/st…](https://t.co/sI4TZru8z0 "https://twitter.com/silentroach/status/638348885585436672")

Это предложение на данный момент даже никем не курируется \(переходит с рук в руки\), так что можно вполне слать PR. [twitter.com/freiksenet\_ru/…](https://t.co/5e3X58aDvM "https://twitter.com/freiksenet_ru/status/638349280722464768")

Именно. Либо все доступно, либо заканчивается срачами и форками. [twitter.com/freiksenet\_ru/…](https://t.co/1c2k53fJew "https://twitter.com/freiksenet_ru/status/638350465638531073")

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Ну все должно быть доступно\) Я юзал внутренние модули много раз и очень удобно когда они досту…

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") Не обязательно это поддерживать и документировать, но зачем закрывать если все равно найдут ка…

RT [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков"): [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") В Java через reflection приватное вполне себе юзают\)

Да, соглашения в виде подчеркивания имхо лучше чем какие-то синтаксические войны "вы закроете, а мы найдем способ". [twitter.com/silentroach/st…](https://t.co/bhox8qSI4K "https://twitter.com/silentroach/status/638352539864440833")

Object.defineProperty, не? [twitter.com/silentroach/st…](https://t.co/DdQ4n9vQMt "https://twitter.com/silentroach/status/638352683540312064")

Ну вот попадется у него кейс почистить этот кеш или сериализовать/подтянуть, что плохого-то? [twitter.com/silentroach/st…](https://t.co/1z3giewdAB "https://twitter.com/silentroach/status/638353269719494656")

Юзер вообще по документации должен ориентироваться. А то развели тут CLDD \(console-log-driven-development\). [twitter.com/silentroach/st…](https://t.co/PvNpVnoNH7 "https://twitter.com/silentroach/status/638353834461523968")

Не то что не успевает - ею просто никто не занимается. В том числе коммьюнити - пользуется и ок, зачем помогать. [twitter.com/silentroach/st…](https://t.co/TwPK7X0Zpc "https://twitter.com/silentroach/status/638355165586845696")

Приватность здесь вообще не решает. Тот же аргумент, что и за типизацию. [twitter.com/vyazovoi/statu…](https://t.co/Gk4n3HSRE5 "https://twitter.com/vyazovoi/status/638354376344645632")

Все равно новые версии выходят и меняют интерфейсы, и уже проскакивают все чаще мнения, что даже semver с этим не помогает.

RT [@de\_gis](https://twitter.com/de_gis "Igor Galtsev"): [@somerandstring](https://twitter.com/somerandstring "Ivan Dmitriev") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ой! Да кто ж в здравом уме даст денег на переписывается того,что уже работает?Бизнесу пофиг на тех…

RT [@\_h4\_](https://twitter.com/_h4_ "Михаил Баранов"): Весь этот фронтенд — какой-то Амстердам. Все укуренные и со своими велосипедами.

Они плотно связаны. Разные причины, один результат - поломка при апдейтах. Так зачем платить больше? :\) [twitter.com/silentroach/st…](https://t.co/Uc4VRobKgh "https://twitter.com/silentroach/status/638361198619193344")

Еще спрашивали про новую работу, но не уверен, какие детали интересуют.

К сожалению, нет - за опенсорс не платят, хотя мечтать конечно могу :\) [twitter.com/gxoptg\_/status…](https://t.co/8nrkZE0bFK "https://twitter.com/gxoptg_/status/638365464859668480")

Не работал почти год за счет сбережений и понимания со стороны девушки :\) Хотелось найти, где можно будет работать над подобными вещами.

Это заняло довольно много времени и поиска, так как немного есть компаний, которые что-то пилят связанное с инфраструктурой JS.

Но собственно нашел - сейчас уже месяц как работаю в CloudFlare в качестве "JavaScript Performance Engineer" \(спорный тайтл, да :\) \).

В связи с этим и как раз переехал в Лондон \(на что была подсказка в приветствии\).

Боюсь, у меня нет ни одного личного известного проекта, на котором можно было бы так накраудфандить :\) [twitter.com/7rulnik/status…](https://t.co/PHPElBShSu "https://twitter.com/7rulnik/status/638366254542286849")

CloudFlare занимается предоставлением CDN с различными плюшками в виде автоматической оптимизации, защиты от атак и скрейпинга, прочее.

Когда говорю название компании, многие пожимают плечами - "не слышал", хотя это и не удивительно для security компании.

На данный момент через наши сервера проходит около 5% всего траффика в Интернете \(что очень даже неплохо как на стартап имхо\).

Может показаться, что я делаю рекламу сервису, но на самом деле скорее делюсь впечатлениями и причинами выбора работы :\)

Если есть какие-то специфические вопросы - можно задавать тоже.

Зависит, как-то по моим кругам общения большинство идет гуглить. [twitter.com/mistadikay/sta…](https://t.co/AtvUHjDwSJ "https://twitter.com/mistadikay/status/638370653746278400")

Да, они сдвигают пиар в эту сторону - вон [nodejs.org](http://t.co/NbUSy6n2Ye "http://nodejs.org") вчера тоже начал использовать CF для ускорения. [twitter.com/as\_Crazy/statu…](https://t.co/WtimeTwh8R "https://twitter.com/as_Crazy/status/638372737099169792")

Но все-таки защита от DDoS остается основной заботой и желанием энтерпрайз-клиентов.

Но у нас твиттер не о том. Плюшка работы для меня лично как раз в обьеме интернета, который он охватывает.

Имея весь HTML/CSS/JS, которые проходят через твои сервера, можно не только делать защиту/кеш, но и автоматически оптимизировать код.

Собственно это и круто - представьте возможности, который открываются, когда вместо консольных девтулзов, "прокся" может делать все за вас.

Именно возможность работать над таким "магической прокси" не могла не захватить моё внимание. Как-то так :\)

Конечно, на лету делать такие трансформации намного сложнее, чем работать над Акорном/Бабелем, где всё статично, но и гораздо интереснее.

В частности, появляется необходимость работать с различными языками, думать о производительности \(чтобы прокся именно ускоряла ответ\) и т.д.

Но с другой стороны, появляются возможности вплоть до точечных оптимизаций/транспайлинга на лету под конкретный браузер.

Скажем, клиенту с HTTP2 можно будет отдавать JS-модули отдельными файлами для ускорения, а для старых HTTP1 конкатенировать.

Если честно, сложно определить как считать. Я писал про свой "путь" но на самом деле JS немного пробовал и до asm. [twitter.com/PazzaVlad/stat…](https://t.co/UBxKbBC08a "https://twitter.com/PazzaVlad/status/638376882518540293")

Или же другой пример: автопрефиксинг CSS только для браузеров, где это необходимо. [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник") ведь круто было бы?\)

Конечно! Я более к тому, что знание, в какой конкретный браузер попадет код, сильно расширяет возможности. [twitter.com/andrey\_sitnik/…](https://t.co/DPhgw2Uez3 "https://twitter.com/andrey_sitnik/status/638381189582209024")

Это по сути та же причина, по которой языки с собственной VM все чаще "удивительно" оказываются быстрее нативных.

Дело в том, что при комппиляции приложения общего назначения на, допустим, C++, приводит к генерации очень общего x86 кода.

А вот зная процессор, можно на старте сгенерировать код с микрооптимизациями под конкретную архитектуру, чем JVM/.NET/JS и пользуются.

То же самое с компиляциями JS/CSS под конкретную машину, разрешение экрана, возможности ОС и прочее.

Тут началась интересная независимая дискусия на тему классов vs функций как внешнего API. [twitter.com/as\_Crazy/statu…](https://t.co/yOxWZWHcih "https://twitter.com/as_Crazy/status/638364239334391808")

Ну он вообще-то и правда стартап, просто довольно успешный. Не годами же меряется, а выходом на рынок. [twitter.com/listochkin/sta…](https://t.co/gPxXaxAPF0 "https://twitter.com/listochkin/status/638387834651602944")

Статья из TechCrunch например - "enterprise startup" [techcrunch.com/video/cloudfla…](http://t.co/U7LJe9GV37 "http://techcrunch.com/video/cloudflare-2015-best-enterprise-startup-winner/518637761/") [@listochkin](https://twitter.com/listochkin "Андрей Листочкин")

Интересно, не знал про такие особенносты рынка :\) [@\_h4\_](https://twitter.com/_h4_ "Михаил Баранов") а как именно он "помог" если не секрет? [twitter.com/\_h4\_/status/63…](https://t.co/eXH8cOwtvv "https://twitter.com/_h4_/status/638388343525343233")

Ну что сказать... Спасибо надзору за пиар!\) [twitter.com/\_h4\_/status/63…](https://t.co/OSvBWdsSgb "https://twitter.com/_h4_/status/638388892031393792")

Вообще да, мы получаем очень много жалоб, в том числе из-за цензуры каждый день, но политика компании - не вмешиваться в подобные разборки.

\[b, c\].includes\(a\) например? [twitter.com/yuritkachenko/…](https://t.co/jpNK1eq3vk "https://twitter.com/yuritkachenko/status/638391691121192961")

Ну или indexOf &gt;= 0 для pre-ES6.

RT [@MaximSukharev](https://twitter.com/MaximSukharev "Maxim Sukharev"): наконец-то [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") про javascript! как бальзам на душу.

Начали с JS, перебрались к абстракциям и прототипированию... Ох уж эти холивары и джависты. [twitter.com/silentroach/st…](https://t.co/vbDAKcSGFe "https://twitter.com/silentroach/status/638392360947351552")

Конечно же нет - у них больше лет "опыта". Но они статичны и мало знают о машине, где код будет выполняться. [twitter.com/ivanenok/statu…](https://t.co/GslSVsoMoN "https://twitter.com/ivanenok/status/638392516153372672")

Собственно в этом и проблема - код компилируется на одном процессоре, а запускать будут совершенно на другом, просто совместимом.

RT [@webholt](https://twitter.com/webholt "Vlad :: gwer"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков") Нет никакой проблемы. Надо лишь однажды прочитать и уяснить, что такое «;» и когда срабатывает вос…

Кстати, по-моему, самый умный подход, слышал \(хз\), что Safari тоже кеширует сразу прекомпиленный код вместе с .js [twitter.com/jsunderhood/st…](https://t.co/v0SUScQnaE "https://twitter.com/jsunderhood/status/638399743710916608")

А тем временем - краткое содержание сериала, который идет уже пару часов и мы все еще не знаем кто отец Эмилио. [twitter.com/eden\_lane/stat…](https://t.co/MsnAvf3ITX "https://twitter.com/eden_lane/status/638399828280635392")

А точнее - нужны ли нам все-таки приватные методы в JS или нет. [twitter.com/webholt/status…](https://t.co/fQmhuSmiUG "https://twitter.com/webholt/status/638401010143219713")

Многие сейчас так считают. Поддерживать semver довольно сложно, не создавая тупиковые ветки без важных патчей. [twitter.com/ap\_savin/statu…](https://t.co/Ji0fK9BF5S "https://twitter.com/ap_savin/status/638401115252498432")

RT [@MostovenkoA](https://twitter.com/MostovenkoA "Mostovenko Alexander"): [@silentroach](https://twitter.com/silentroach "Игорь") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") какая защита когда сорсы в руках?

RT [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov"): [@ivanenok](https://twitter.com/ivanenok "Maxim S. Ivanov") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") V8 из знаний о машине использует только "какие иструкции поддерживаются" и микрооптимизации для Atom

RT [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ivanenok](https://twitter.com/ivanenok "Maxim S. Ivanov") JITы знают, потому что они наблюдают за кодом. вот эти вот все inline cache, type feedback и прочие клю…

RT [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ivanenok](https://twitter.com/ivanenok "Maxim S. Ivanov") а статическому компилятору откуда эту информацию взять? он может взять и попробовать вывести. и он, кон…

RT [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@ivanenok](https://twitter.com/ivanenok "Maxim S. Ivanov") но только это очень тяжело и затратно. надо делать whole program analysis и все такое, и точность все р…

Собственно Вячеслав говорит о том же, но уже в контексте уже рантайм-оптимизаций. [twitter.com/mraleph/status…](https://t.co/DWIOjAuMmV "https://twitter.com/mraleph/status/638405561432862721")

Синтаксис ради синтаксиса - зло. Поэтому все новые фичи в ES и проходят жесткие дискусии на тему "а зачем?" [twitter.com/yuritkachenko/…](https://t.co/W6KJbFhx35 "https://twitter.com/yuritkachenko/status/638406716045008897")

И по этой же причине API-шки \(Promise, DataView, etc.\) оставляются как можно более лаконичными - только необходимые вещи в ядре языка.

Он решает проблему: разобрать обьект сразу в переменные. А для сравнения .includes уже ее лаконично решает. [twitter.com/yuritkachenko/…](https://t.co/SJXmv60J2N "https://twitter.com/yuritkachenko/status/638408275642421248")

Ох, нет, это же вообще не то. [twitter.com/yaroshevich/st…](https://t.co/YDjrtOp9ge "https://twitter.com/yaroshevich/status/638408700311535618")

Да, [@mraleph](https://twitter.com/mraleph "Vyacheslav Egorov") всегда зазвать полезно - каждый раз помогает почувствовать себя вроде "Ничего ты не знаешь, Джон Сноу" [twitter.com/ivanenok/statu…](https://t.co/1p0xxi663X "https://twitter.com/ivanenok/status/638409668390449152")

Хм, а зачем с ним договариваться об архитектуре клиента? // И это уже правда не столько по моей теме :\) [twitter.com/me\_mrsum/statu…](https://t.co/Rs4VkuJHRJ "https://twitter.com/me_mrsum/status/638410292771340288")

Мое имхо - вряд ли - но без проблем, пишите в [esdiscuss.org](http://t.co/InQlDVhkch "http://esdiscuss.org") / шлите пулл-реквесты в [github.com/tc39/ecma262](https://t.co/0acCGQm8BW "https://github.com/tc39/ecma262") [twitter.com/yaroshevich/st…](https://t.co/l7W0ixPniH "https://twitter.com/yaroshevich/status/638410503950323712")

И кстати да, сам факт что следить и предлагать фичи ES можно прям на Github - по-моему, очень крутое достижение. [github.com/tc39/ecma262](https://t.co/0acCGQm8BW "https://github.com/tc39/ecma262")

А причём тут символы, не совсем понял? [twitter.com/yuritkachenko/…](https://t.co/Dfd5uCjn46 "https://twitter.com/yuritkachenko/status/638415347708743684")

А, я думал, речь о символах которые ES6 :\) [twitter.com/chicoxyzzy/sta…](https://t.co/VQCJ386Fww "https://twitter.com/chicoxyzzy/status/638416843837960192")

Ну в целом здесь все просто: ESNext - название из времён ES4, его использовали по сути для обозначения "нового JS со всеми плюшками".

ES2015, ES2016, ... - теперь корректные официальные названия из-за годичных выпусков.

Но как-то поздно - ES6/ES7 уже попало в обиход раньше за сам "закон", поэтому и употребляется. И это просто порядковый номер редакции спеки.

Вообще по максимуму продвигается идея, что версия ES совершенно не важна и разработчики не должны за ней следить - ну год выпуска, и что.

Так как уже даже на данный момент у вас нет разделения "этот браузер поддерживает ES5, а этот решил поддержать ES6, а тот вообще ES7".

Разделение существует только по фичам - и это единственное, что и правда важно - реализована конкретная фича или нет.

Поэтому версионность и пытаются убить все кто может - и авторы спеки, и тулзы \(в т.ч. Бабель\), и браузеры.

Да нет. По версиям \(особенно IE\) - да. Но все браузеры так или иначе вовсю имплементируют те и иные \*фичи\*. [twitter.com/unel86/status/…](https://t.co/brsuypblut "https://twitter.com/unel86/status/638419913057640448")

Вон, например, Edge уже реализовал \[под флагом\] async/await - и что, теперь говорить что он поддерживает ES7? [dev.modern.ie/platform/chang…](http://t.co/5aGriEQpzG "http://dev.modern.ie/platform/changelog/10532-pc/")

Ну вот зачем твоему коду знать, что браузер поддерживает \*весь\* ES6? \(и непонятно когда это случится хоть с одним\) [twitter.com/unel86/status/…](https://t.co/tEVDyLgI5e "https://twitter.com/unel86/status/638420707144302592")

Именно. Это работает только как рекламные слоганы "да мы! да у нас тут уже HTML6! и ES8! и CSS4! мы всё можем!" [twitter.com/SelenIT2/statu…](https://t.co/Xp6FVL6e55 "https://twitter.com/SelenIT2/status/638421242115170304")

Опять-таки - нет. 1\) Ни один браузер не поддерживает \*весь\* ES6. 2\) Твой код вряд ли использует \*весь\* ES6. [twitter.com/unel86/status/…](https://t.co/mIygRDdRx0 "https://twitter.com/unel86/status/638421449829679104")

Только фича-тесты - вот что важно, а не версии. А их можно получить, например из [featuretests.io](https://t.co/ISEKxxDf40 "https://featuretests.io/")

Кстати, там же - в [github.com/getify/es-feat…](https://t.co/gSrFAW0fPv "https://github.com/getify/es-feature-tests") - есть тулза testify которая позволит извлечь список фич, которые нужны именно твоему JS.

И дальше тебе остаётся сравнить этот список с браузером, под которым собираешься запукать код.

\("запускать" конечно же\)

А зря, можно до скончания ждать :\) Не говоря уже об ожидании, когда пропадёт последний клиент со старым браузером. [twitter.com/unel86/status/…](https://t.co/sXoyURa4xP "https://twitter.com/unel86/status/638422224857366528")

Транспайлить не так страшно :\) Можно даже разделить аудиторию по метрикам сайта и одним отдавать "почти ES6" а другим - скомпиленный ES5.

Таким образом, у современных браузеров не будет оверхеда на полифиллы/длинный синтаксис, а старые получат все равно работающий сайт.

Мы не будем озвучивать названия и версии этого браузера, мы выше этого, правда ведь?\) [twitter.com/chicoxyzzy/sta…](https://t.co/emkkY3F43D "https://twitter.com/chicoxyzzy/status/638423598663892992")

WebAssembly - тема, конечно, интересная и достойна обсуждения, но причём тут он в контексте ES6? [twitter.com/\_\_fro/status/6…](https://t.co/wzpFsXdMvd "https://twitter.com/__fro/status/638425633861861376")

Интересно было бы послушать мнения других, прежде чем отвечать самому. [twitter.com/Borovikov/stat…](https://t.co/2BuepLsf8Z "https://twitter.com/Borovikov/status/638427761154113538")

RT [@webholt](https://twitter.com/webholt "Vlad :: gwer"): [@Borovikov](https://twitter.com/Borovikov "Денис Боровиков") [@elephantum](https://twitter.com/elephantum "Сло") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А когда в прокат выходит? И какой рейтинг IMDB?

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") существует мнение, что такой код более отказоустойчив и быстрее "прогревается". лично я склонен верить

RT [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тайпскрипт хорошо, но хуже flow системой типов, сильно, но flow не готов для продакшна еще \(например не запу…

Вот с этим как раз не совсем так. Стандарт есть, но с ES6 уже не совместим. [twitter.com/chicoxyzzy/sta…](https://t.co/YKeUJrKFuK "https://twitter.com/chicoxyzzy/status/638433227171086336")

Что ж, привет, вот он я :\) [twitter.com/freiksenet\_ru/…](https://t.co/UDGKTQwYPY "https://twitter.com/freiksenet_ru/status/638433515382697985")

Да, эти эксперименты очень даже интересны. [twitter.com/chicoxyzzy/sta…](https://t.co/Pn2IkEn8r0 "https://twitter.com/chicoxyzzy/status/638433423753936897")

Был надмножеством, сейчас просто пересекаются, и это доставляет немного боли :\) [twitter.com/chicoxyzzy/sta…](https://t.co/MdnMES3set "https://twitter.com/chicoxyzzy/status/638433769775628293")

Если кратко:  
  
ConEmu - крутой терминал  
Chocolatey - типа Brew  
Putty - SSH  
Sublime - тут всё как везде [twitter.com/\_asci/status/6…](https://t.co/czxWb0cXF4 "https://twitter.com/_asci/status/638433826511941632")

Близко по синтаксису, но разная семантика. Сравни например результат  
  
function f\(\) {  
return \(\) =&gt; arguments;  
} [twitter.com/sevaisnotcow/s…](https://t.co/rj9rFSts5L "https://twitter.com/sevaisnotcow/status/638435037403303936")

Семантика важна. Мы говорим сейчас не о том, что ты используешь в своём коде, а о совместимости языков. [twitter.com/sevaisnotcow/s…](https://t.co/9FpmOVeptg "https://twitter.com/sevaisnotcow/status/638436018564243456")

RT [@Kreozot](https://twitter.com/Kreozot "Kreozot"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") О, еще кто-то кроме меня юзает Chocolatey! Крутая штука, на работе 90% софта с неё ставил.

Неа. Тайпскрипт напрямую отказался в своих issues менять, так как обратная совместимость уже не позволяет. [twitter.com/sevaisnotcow/s…](https://t.co/hLiKkkWuGa "https://twitter.com/sevaisnotcow/status/638436520534384640")

Чего ж тебе не хватает-то?\) Вообще наверное лучше привлечь сюда [@ConEmuMaximus5](https://twitter.com/ConEmuMaximus5 "Console Emulator") \(он наш\). [twitter.com/kuksikus/statu…](https://t.co/9tR1Xzo9r7 "https://twitter.com/kuksikus/status/638435739596931072")

Ага. Там еще такие были, сходу не вспомню, надо искать. Может решат поламать совместимость ради ES6 в 2.0, хз. [twitter.com/chicoxyzzy/sta…](https://t.co/d2Qa1nP1Ex "https://twitter.com/chicoxyzzy/status/638437336058097664")

Меня "заставляют" использовать на работе мак, если на то пошло :\) [twitter.com/Semenov/status…](https://t.co/tnf0Vhk4cs "https://twitter.com/Semenov/status/638437477032816640")

Ещё раз - холиварить не буду, и так за прошлую неделю как-то много было этого\) Интересуют конкретные вопросы \(вот как стэк\) - рад ответить.

Ну дали на выбор разные MacBook. Некоторые внутренние тулзы завязаны. Ну ок, работать-то могу. [twitter.com/freiksenet\_ru/…](https://t.co/NpYyZTqLhN "https://twitter.com/freiksenet_ru/status/638438207068196864")

Года полтора назад было, и то уже не помню с чем \) Если речь о npm-модулях. [twitter.com/\_asci/status/6…](https://t.co/kNP7ob8gxX "https://twitter.com/_asci/status/638438950512803840")

А нет - вспомнил - это был node-ffi, довольно специфическая вещь, хотя и крутая.

Советую почитать например [developer.rackspace.com/blog/powershel…](https://t.co/lyVKVIo25x "https://developer.rackspace.com/blog/powershell-101-from-a-linux-guy/"), неплохой обзор "PowerShell from Linux guy" [twitter.com/kuksikus/statu…](https://t.co/yn3XWd3hhL "https://twitter.com/kuksikus/status/638439762295148544")

Да, времена меняются, не стоит ограничивать себя стереотипами 5-/10-летней давности. Еще недавно и IE отставал ;\) [twitter.com/Semenov/status…](https://t.co/9zhHOBn7IZ "https://twitter.com/Semenov/status/638439374644908032")

Вдруг интересно - вот где-то так выглядит мой терминал. Все современные прелести на месте, вылазит в Quake-style. [pic.twitter.com/blXcWtnB3m](http://t.co/blXcWtnB3m)

Вкладки, подсветка синтаксиса в realtime, гит-бранчи, копипасты - всё прекрасно себе работает.

А, пропустил. Ну рабочие для основных вещей, а для шалостей можно подключить [github.com/Microsoft/IEDi…](https://t.co/sy67SoDzC9 "https://github.com/Microsoft/IEDiagnosticsAdapter") [twitter.com/\_asci/status/6…](https://t.co/xHYEtBK442 "https://twitter.com/_asci/status/638441608678109184")

Эта штука оффициальный \(!\) адаптер от Microsoft для использования Chrome DevTools + Edge. [twitter.com/jsunderhood/st…](https://t.co/oFKuLlkPdY "https://twitter.com/jsunderhood/status/638441975843299328")

Круто, не знал - пишут, что в старой Опере тоже происходило кеширование прекомпилированного JS. [twitter.com/ruGreLI/status…](https://t.co/Cuy7Wt2KZm "https://twitter.com/ruGreLI/status/638442303531712513")

Так и живём :\) [twitter.com/oneek\_ekb/stat…](https://t.co/z8p0uAtB51 "https://twitter.com/oneek_ekb/status/638444554266509312")

RT [@Chudesnov](https://twitter.com/Chudesnov "散厦知"): [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков") [@sevaisnotcow](https://twitter.com/sevaisnotcow "wwwsevolod") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") привет. w7 на работе, w10 на личном ноуте.

Спокойной ночи и до встречи завтра в немного менее активном режиме. [twitter.com/codepo8/status…](https://t.co/XxSVgT6vcL "https://twitter.com/codepo8/status/638331038188613632")

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") 10 лайков и ни одного ретвита. никто не хочет рассказать о работающем вин дев-стеке =\(

Рано я видимо попрощался - страсти про "зачем винда" не утихают. Ребята, будьте выше этого. Есть технологии, они развиваются.

Кому как не нам знать, с какой скоростью меняется мир технологий? И при этом судить по стереотипам нескольколетней давности - странно.

Никаких обид и т.д., но мне в одной компании прям на собеседовании сказали, что "раз юзаю винду, значит не дорос ещё до них".

Вот скажите, вы правда считаете, что это может служить критерием для оценки девелопера?\)

Давайте быть обьективными к технологиям, а не разводить постоянные холивары, которым место на форумах 10-летней давности.

Мне пересчитать сколько раз было "там же всё плохо", "ненормально" и т.д. от людей, которые на винде и не сидят?\) [twitter.com/gunlinux/statu…](https://t.co/UBYYlfYYRg "https://twitter.com/gunlinux/status/638470582556827648")

Об этом и говорю - конструктивные вопросы - ок, попытки разобраться - ок, оценки по опыту N-летней давности \(или вообще без него\) - не ок.

RT [@andrey\_sitnik](https://twitter.com/andrey_sitnik "Андрей Ситник"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") я уже говорил утром, что сообществу пора выработать этикет, который блокировал бы эмоциональной хейтерство

Сорри, но без комментариев, после нескольких-то часов обсуждений. Спокойной ночи всем! [twitter.com/lisovskyvlad/s…](https://t.co/vizFz3AtNY "https://twitter.com/lisovskyvlad/status/638472677758533632")

## Вторник <small>108 твитов</small>

Ох. А я так посмотрю, страсти вокруг винды всю ночь не утихали. Видимо, зацепило даже больнее за "что не нравится в JS". С добрым утром!\)

Ну да, так тоже работает. У меня в Putty просто много профилей осталось сохраненных, дело привычки. [twitter.com/yourlastfall/s…](https://t.co/IBBlZDzejA "https://twitter.com/yourlastfall/status/638476282616000512")

Фронтенд. Понимаешь, обычный фронтенд, Карл! [twitter.com/11bit/status/6…](https://t.co/Z9DlGpx6R1 "https://twitter.com/11bit/status/638532973021761536")

Хм. Ну я вчера зацепил несколько холиварные темы, может поэтому. Но могу и не писать один день для разрядки. [twitter.com/vdv73rus/statu…](https://t.co/NEhioKF4Pg "https://twitter.com/vdv73rus/status/638565630308917248")

Есть еще люди, считающие, что разработчик на винде - это подозрительно. Оок. [twitter.com/veged/status/6…](https://t.co/y9l3i9xnaX "https://twitter.com/veged/status/638562205257105408")

Думаю наоборот - интересно собрать людей с различными мнениями. Тогда и появляется креативность. [twitter.com/toivonens/stat…](https://t.co/lbDr54sFig "https://twitter.com/toivonens/status/638589553633267712")

RT [@beshkenadze](https://twitter.com/beshkenadze "Александр Бешкенадзе"): [@toivonens](https://twitter.com/toivonens "var ya; // ru") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у нас один разработчик был уволен из-за того, что отказался использовать мак.

Наконец хоть кто-то про JS. Нет, такого не будет. Цель WebAssembly - не замена JS, а дополнение. [twitter.com/\_\_fro/status/6…](https://t.co/xm0aImNMyw "https://twitter.com/__fro/status/638612947556827136")

Делаем ставки. Будет ли за 2 года JS компилироваться в WebAssembly? [twitter.com/\_\_fro/status/6…](https://t.co/nYiXrDAThC "https://twitter.com/__fro/status/638641220818980864")

И я теперь не знаю как его погасить :\( Чуваки, JS! WebAssembly! Табы или пробелы! Что угодно!\) [twitter.com/igor\_shubovych…](https://t.co/mcjXarS0zc "https://twitter.com/igor_shubovych/status/638666044970766336")

Просят рассказать про WebAssembly. Что ж, это уже получше.

Суть WebAssembly - не замена JS. Об этом говорят и сами разработчики WA, но почему-то девелоперы их не особо желают слушать.

WebAssembly - это следующий шаг в развитии таких штук как asm.js. На данный момент он и \*есть\* 1-в-1 отображением фич asm.js.

Единственный момент где он выигрывает - это то, что больше не нужно парсить текстовое представление с кучей сложных правил синтаксиса.

Вместо этого, используется бинарное представление синтаксического дерева \(AST\).

Таким образом, достигается выигрыш в скорости парсинга до 20 раз. \(Слишком многие, кстати, путают это со скоростью выполнения кода\)

Последнее совершенно неверно. Так как сами правила выполнения остаются те же от asm.js, а в случае V8 - даже виртуальная машина та же.

Ну а причины выигрыша по скорости самого asm.js те же - ручное управление памятью, чистая математика с определенными типами. Никакой магии.

Надеюсь, понятно, что пытаться туда же засунуть бизнес-логику и манипуляции с DOM бессмысленно. Вы не получите никакого профита.

RT [@blia](https://twitter.com/blia "Розовые трусы неудач"): Сильно удивлен, почему, вроде взрослым, людям не пофигу, кто какими инструментами пользуется. /Cс: [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Кстати интересный вопрос. Скорее да чем нет. Вот твит Брендана например год назад: [twitter.com/brendaneich/st…](https://t.co/5bek5L0pEk "https://twitter.com/brendaneich/status/526826278377099264") [twitter.com/subzey/status/…](https://t.co/rbwrriGEF6 "https://twitter.com/subzey/status/638679448527745026")

Кто ж не хочет. Но я так подозреваю, что придется-таки Брендану жевать свою шляпу... [twitter.com/iamstarkov/sta…](https://t.co/vf2elmorRH "https://twitter.com/iamstarkov/status/638683519405961216")

В ES7 \(2016\) очень мало попадет, в отличии от ES6, большинство фич переносится. А для \(u\)int64 сначала надо запилить Value Objects.

Вдруг что, Value Objects - это такая новая штука которая позволит определять кастомные типы примитивов с собственным поведением.

Вот Int64/Uint64, нативные Immutable Map/Set и многие другие вещи можно будет реализовать просто на этой основе.

Кстати, из интереса - кто вообще игрался с asm.js? \(компилировал ну или там пробовал писать вручную или хотя бы вникал в спеки\)

Да нет, почему же. Как раз для WebGL asm.js не особо-то нужен - там и так есть шейдеры на своем C-подобном языке. [twitter.com/iamstarkov/sta…](https://t.co/iJzXrh1qRH "https://twitter.com/iamstarkov/status/638699485649088513")

Причем шейдеры сразу же красиво распаралеливаются, чего не скажешь о JS \(даже asm.js\).

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") пробовал писать вручную ради забавы. не проникся. только совсем суровые люди это выдержат\)

Ну, я хоть не один псих. Но все же странно, что тишина в основном - все заняты работой или о нем даже не слышали?

Вы вибираете инструменты под свои задачи а не придумываете задачи под интересные технологии? Это же так.. правильно. [twitter.com/sapegin/status…](https://t.co/o8Po2LTZry "https://twitter.com/sapegin/status/638702364719976448")

Ну сейчас вот пишу на C и Python, немного приходится копаться в коде на Go, пробую Rust. Смотрю ли по сторонам? Хз.. [twitter.com/KSDaemon/statu…](https://t.co/RsaWzR6Fk9 "https://twitter.com/KSDaemon/status/638704637235871744")

Конечно важно. Иначе в JS не пришло бы много клевых штук, как с "ООП" так и с ФП \([@dan\_abramov](https://twitter.com/dan_abramov "Dan Abramov") подтвердит\). [twitter.com/KSDaemon/statu…](https://t.co/nrXtO1mYrO "https://twitter.com/KSDaemon/status/638705258751987712")

Их разрабатывают именно люди, которые смотрят по сторонам, замечают интересные концепты и следуют закону Атвуда :\)

RT [@chicoxyzzy](https://twitter.com/chicoxyzzy "Sergey R"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") расскажи про свои эксперименты про js + flow -&gt; asm.js

Собственно для чего крут asm.js:  
  
1. Вычисления.  
2.

Вроде ничего не пропустил?\)

Понятно, что в среднестатической аппликухе, которая позволяет постить и смотреть котиков, отправляя все запросы на бекенд, вычислений мало.

Но они необходимы во многих более сложных приложениях с разных сфер - e-commerce, работа с графикой, звуком, игры и так далее.

И если мы хотим, чтобы на JS можно было реализовывать все, что можно в нативщине, нам нужен способ делать эти вычисления быстро.

С этой целью и был придуман asm.js и на данный момент он оптимизируется всеми современными движками \(извини, JavaScriptCore / Safari\).

Идея была довольно простой: создать обратно-совместимое подмножество языка, и писать на нем модули со строго определенными типами.

Таким образом, в не поддерживаемых асм движках такой код будет все равно выполнятся \(и даже довольно быстро за счет подсказок JIT\).

А вот в новых движках получаем еще и крутой прирост за счет упрощенной компиляции и знания типов без "прогрева" JIT.

В общем идея крутая, и привела к возможности кросс-компайлинга кода из других языков -&gt; LLVM -&gt; asm.js с неплохим перфомансом.

Самый популярный юзкейс: вы компилируете C/C++ с помощью clang в LLVM, а его скармливаете emscripten, получая работающую быструю программу.

Конечно, код получается довольно монструозным из-за разного рантайма и прослоек, но зато легко портировать существующий код.

Думаю, все видели разные демки с тканями и т.д., поэтому вот что-то посерьезнее: чуваки портировали FFMpeg на JS. [bgrins.github.io/videoconverter…](https://t.co/lUq0m0D3wf "https://bgrins.github.io/videoconverter.js/")

Получилось 7 МБ уже gzip-нутого JS-а, что немало, но блин, оно и правда конвертирует ваши видеофайлы прям в браузере! :\)

Можно попробовать вот здесь: [video-funhouse.herokuapp.com](https://t.co/wS9IER13Kc "https://video-funhouse.herokuapp.com/") - с вебкамерой или собственной видяшкой. Даже эффекты есть. [twitter.com/\_h4\_/status/63…](https://t.co/kVZaFhWxZa "https://twitter.com/_h4_/status/638716634627219456")

Как на меня, это и правда впещатляюще. Но одна вещь меня все же удручает. Почему мы отдаем такую мощь C-шникам и не пользуемся ею сами?

Ответ прост: asm.js хоть и сабсет JS но у него свои непростые правила, и JS-никам обычно или лень или сложно их выучить. Я их не виню.

Вот например набросал модуль для вычисления расстояния между точками. Здесь важны порядок, плюсики, импорты - все. [pic.twitter.com/xo5JcZwjt0](http://t.co/xo5JcZwjt0)

Понятно, что когда видишь warnings на буквально каждой строке обычно валидного JS, желание писать вручную как-то отпадает.

Кстати, в данном случае использовал онлайн-валидатор с редактором - [anvaka.github.io/asmalidator/](http://t.co/ZTeqDibkL3 "http://anvaka.github.io/asmalidator/") - но можно проверять конечно и в консоли.

Мало того, что даже простые функции, без использования памяти, разрастаются в непонятно что, так еще и ES6 нельзя :\(

Ну и да - поскольку нет GC, вы даже не можете использовать обьекты \(в т.ч. классы и массивы\), замыкания, ничего динамического.

Но это уже детали, для начала хотелось как-то решить хотя бы проблему с синтаксисом - без этих импортов и странных кастов типов.

Обратная совместимость - это хорошо, но не тогда когда все вовсю используют TypeScript/Flow/ES6/...  
  
Зачем писать  
x|0  
  
Если можно  
  
\(x: int\)

Так же с другими моментами. Поэтому я и начал работать над конвертором привычного ES6 с типами и модулями в asm.js.

Для этого надо все еще иметь ограниченный сабсет JS, но зато с человеческим лицом и выведением очевидных типов на этапе компиляции.

Список фич, которые на данный момент получилось перевести, можно почитать тут: [rreverser.com/started-work-o…](https://t.co/lNDBUuCeDC "https://rreverser.com/started-work-on-es6-asm-js-conversion/")  
  
Пример: [pic.twitter.com/n2OhYZ8AsA](http://t.co/n2OhYZ8AsA)

Тестовый компилятор реализован \(пока\) как плагин к Babel, так что можно уже самому попробовать и поиграться.

Какой профит? Вы можете написать математическую функцию, добавить Flow/TypeScript-аннотации типов и просто export-нуть для других модулей.

Подозреваю, я вам немножко надоел, поэтому приостановлюсь и могу отвечать на вопросы.

Одно из правил - таким образом мы указываем, что переменные типа double \(именно 0.0 - не 0\) [asmjs.org/spec/latest/\#v…](http://t.co/tZNYGiv0p2 "http://asmjs.org/spec/latest/#variable-type-annotations") [twitter.com/kossnocorp/sta…](https://t.co/U6sV2WPUId "https://twitter.com/kossnocorp/status/638727629361688577")

Как и предупреждал - пишу про немножко специфические вещи, но хочу развеять страхи перед ними и показать, что не все так сложно :\) [@sapegin](https://twitter.com/sapegin "Artem Sapegin")

А в идеале, надеюсь и заинтересовать подобными темами - чем больше людей, с которыми можно о них поговорить, тем лучше.

В основном игровые движки - Unity, Unreal Engine умеют asm.js. Вот зацените игрушку: [beta.unity3d.com/jonas/DT2/](http://t.co/5PM4edD0Jm "http://beta.unity3d.com/jonas/DT2/") [twitter.com/Sigiller/statu…](https://t.co/U9YXYEZzpd "https://twitter.com/Sigiller/status/638730059424100352")

Но, кроме них, есть и графические редакторы, эмуляторы приставок, либы для сжимания - все что угодно. [github.com/kripken/emscri…](https://t.co/5jNrkGSgpe "https://github.com/kripken/emscripten/wiki/Porting-Examples-and-Demos")

Попробуй игрушку - вообще без любых плагинов шустро работает \(я их на рабочем ноуте не ставил\). Почти HL :\) [twitter.com/iamstarkov/sta…](https://t.co/WhyJsQPEW1 "https://twitter.com/iamstarkov/status/638732263593766912")

У нас тут паралельно идет обсуждение JS -&gt; WebAssembly. И я только что вспомнил, что не все так однозначно. [twitter.com/jsunderhood/st…](https://t.co/6y1UaroQsN "https://twitter.com/jsunderhood/status/638738868741783552")

Уже два года назад один активист скомпилировал SpiderMonkey в JS: [github.com/jterrace/js.js/](https://t.co/URBe6RKBBv "https://github.com/jterrace/js.js/")  
  
Да, JS-engine который работает на JS-engine.

А учитывая что довольно скоро Emscripten будет уметь WebAssembly, то можно сказать в определенном роде что да, JS можна запускать на WA :\)

Вдогонку - еще один "компилятор" js2js: [eleks.github.io/js2js/](http://t.co/hJ1GK7ulb4 "http://eleks.github.io/js2js/") Enjoy!\)

И раз уже пошла такая тема - все же видели PC-эмулятор с Linux на борту? [bellard.org/jslinux/](http://t.co/my7JklgS26 "http://bellard.org/jslinux/") - тоже asm.js

Причем там есть GCC. То есть вы можете компилировать C внутри Linux внутри x86 внутри QEMU внутри JS на телефоне... [pic.twitter.com/2H745xaJ7n](http://t.co/2H745xaJ7n)

В JS нет доступа к сокетам, к сожалению. Хотя где-то видел форк с дополнительним расширением к браузеру. [twitter.com/naorunaoru/sta…](https://t.co/w6vbzKgHWK "https://twitter.com/naorunaoru/status/638757714676613120")

Зато можно в этом же эмуляторе поднять HTTP-сервер и из него же curl-ом что-то достать!\)

Другое. Веб-сокет может общаться только с поддерживающим сервером. У него все равно есть HTTP-заголовки. [twitter.com/tommy\_diaver/s…](https://t.co/NnsO7dRQTl "https://twitter.com/tommy_diaver/status/638758759641260032")

Вас вообще не поймешь - один говорит "очень интересно", другой - "скатились, отписываюсь". Определитесь там что ли \) [twitter.com/shuvalov\_anton…](https://t.co/wUvY5A9Ohz "https://twitter.com/shuvalov_anton/status/638797486845493248")

В общем, извиняюсь за паузу - я тут переезжал между квартирами. Учитывая, что вопросов по asm.js не появилось, можно двигаться дальше.

Насколько понимаю из опроса в понедельник, все проблемы разработчиков решились с выходом ES6 и больше ничего не бесит. Как-то не по плану :\)

Ну да ладно, решились так решились, что мы, сами себе проблему не придумаем, когда ее нет.

Итак, хотите ли Вы поговорить о... нет, не о том, о чем подумали - о парсинге, транспайлинге и метапрограммировании в JS?

Ладно, все по порядку. Для начала вот [@vlkosinov](https://twitter.com/vlkosinov "Vlad Kosinov") просит рассказать о метапрограммировании. Думаю, для вечера пойдет.

Для начала возьмем реализацию попроще. Вот судя по понедельнику, очень многие уже работают с ES6. А скажите, что уже пробовал Proxy?

RT [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") когда разбирался в реакт-миксинах, зарылся в аспектно-ориентированое программирование и вспомнил про прокси

Да, это конечно отталкивает. Хотя 1\) поиграться все равно интересно 2\) транспайлить-то можно, просто неэффективно. [twitter.com/iamstarkov/sta…](https://t.co/UjYcA4vdPW "https://twitter.com/iamstarkov/status/638835568550375425")

Есть, но только для кейвордов в пропертях и все такое. А геттеры-сеттеры эмулировать, думаю, дорого и нечасто надо. [twitter.com/sevaisnotcow/s…](https://t.co/lRrwLdaGfT "https://twitter.com/sevaisnotcow/status/638838246517030916")

Вот issue на этот же вопрос из es5-shim который предлагал использовать VBScript для геттеров-сеттеров в старых IE. [github.com/es-shims/es5-s…](https://t.co/zvKDVLbPPH "https://github.com/es-shims/es5-shim/issues/91")

И, оттуда же - целая статья об этом хаке. [webreflection.blogspot.co.uk/2011/03/rewind…](http://t.co/om3CXqPqOd "http://webreflection.blogspot.co.uk/2011/03/rewind-getters-setters-for-all-ie-with.html")

Коротко о Proxy: он позволяет эмулировать любые внутренние операции на обьектах через явно заданные обработчики.

Это включает в себя всё - обращение к свойствам по имени \(чтение/запись\), удаление свойств, списки ключей для for-in / Object.keys, всё.

То есть любые операции, которые до ES6 были только внутренними отображениями синтаксиса, с помощью Proxy можно переопределить динамически.

Это открывает массу интересных возможностей \(адепты других языков сейчас скажут "скучно, у нас давно есть"\).

Парочка примеров, которые возможны с Proxy:  
  
1\) авто-логгирование  
2\) цепочка a?.b?.c? из кофискрипта  
3\) рантайм-проверка типов и структур

4\) как подсказывает [@vlkosinov](https://twitter.com/vlkosinov "Vlad Kosinov") - транзакции БД \(но можно и на любых обьектах\)  
5\) доступ к REST API без схем - api.users.rreverser.then\(...\)

И куча других возможностей, которые только приходят в голову, когда вы не ограничены только свойствами, явно определенными в рантайме.

И да, это уже метапрограммирование - Ваш код переопределяет свои возможности перед движком, а не движок ограничивает его.

Комбинируя прокси с другими возможностями языка, можно получить довольно интересные результаты.

К примеру, на MediterraneaJS я показывал, как можно с помощью Proxy+async/await красиво побороть параллельность в JS: [slideshare.net/RReverser/es6c…](http://t.co/XqwKqftOTd "http://www.slideshare.net/RReverser/es6concurrency")

Под "побороть" я имею ввиду прозрачно пробросить API, недоступные веб-воркерам \(тот же DOM\).

В результате комбинации этих фич получается вот такой код для паралельности в JS. Прозрачно, не правда ли? [pic.twitter.com/hvP10YHqty](http://t.co/hvP10YHqty)

Выглядит почти как синхронный код в главном потоке, но на самом деле все вычисления остаются в отдельном. И это благодаря Proxy.

Как и всегда, зависит для чего и как использовать. Есть хорошие юзкейсы, а есть хайп. [twitter.com/deepwalker/sta…](https://t.co/ZKyTxNtcy3 "https://twitter.com/deepwalker/status/638853027122819072")

Декораторы в "ES7" тоже есть/будут - даже лучше чем аннотации в этих ваших джавах :P [twitter.com/vlkosinov/stat…](https://t.co/NUjsciFnzo "https://twitter.com/vlkosinov/status/638851172112179200")

Нет, это разговор о транзакциях БД был. Декораторы к прокси отношения не имеют, они куда проще. [twitter.com/vlkosinov/stat…](https://t.co/b5I744Lfqw "https://twitter.com/vlkosinov/status/638855018444099584")

## Среда <small>28 твитов</small>

Пока могу вот так бросить \(это реализация "клиента"\): [gist.github.com/RReverser/81f5…](https://t.co/fDmDIgCtqh "https://gist.github.com/RReverser/81f5003e6ba8fbaaae83") [twitter.com/vlkosinov/stat…](https://t.co/YmrSiuDkFj "https://twitter.com/vlkosinov/status/638860863223537664")

На этой ноте, думаю, можно пожелать всем спокойной ночи. До завтра! [pic.twitter.com/Ji36GQo5WZ](http://t.co/Ji36GQo5WZ)

Еще один холивар развернулся. Почему JS до сих пор считают частью верстки? Он уже давно не язык для DHTML. [twitter.com/Bizi/status/63…](https://t.co/wg1XeG4lt6 "https://twitter.com/Bizi/status/639023303231991809")

Да, "опечатался". Вот только он уже давно не часть фронтэнда - фронтэнд только одно из многих применений. [twitter.com/Sigiller/statu…](https://t.co/f0slwvaXMT "https://twitter.com/Sigiller/status/639025232909586432")

Думаю, прирост будет несущественным по сравнению с основными операциями \(DOM, загрузка картинок и так дальше\). [twitter.com/artroman/statu…](https://t.co/f9G0mHjnZT "https://twitter.com/artroman/status/638982970951512064")

Так в том-то и дело, что они не синхронные - это прокси из веб-воркера, а общение между ними только асинхронно. [twitter.com/unel86/status/…](https://t.co/vZgI1luqmn "https://twitter.com/unel86/status/638960902923026432")

По-поему, такого для фронтэнда в JS-е не хватало с самого начала. Да, была попытка E4X, но это не то же самое. [twitter.com/MaximSukharev/…](https://t.co/fdyC8kCEJe "https://twitter.com/MaximSukharev/status/639030610229633025")

Насколько была бы проще жизнь, если бы с самого начала мы могли писать элементы не через императивные createElement, а прям в виде HTML.

RT [@nekrtemplar](https://twitter.com/nekrtemplar "Arthur Stolyar"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") и очень большой плюс что все данные предаются в JS, не строками. Для многих фреймворков это очень важно

Palace of Fine Arts, San Francisco \(фоткал пару лет назад\) [twitter.com/listochkin/sta…](https://t.co/oMboEPg3CA "https://twitter.com/listochkin/status/639038308799107072")

Оффтоп - если вам понравилась вчерашняя вечерняя картинка - вот нашелся ее автор \) [twitter.com/radio\_qa/statu…](https://t.co/aWxkVUIhCz "https://twitter.com/radio_qa/status/639073605494657024")

А зачем с ней что-то делать? Бандлится все с помощью browserify/webpack. [twitter.com/beshur/status/…](https://t.co/Da1dqewQZA "https://twitter.com/beshur/status/639090833782886400")

Думаю, время поговорить о синтаксисе и парсинге. С ними в JS с точки зрения разработчиков парсеров не очень, особенно начиная с ES6.

Сам синтаксис в спеках, конечно, есть, но использовать его в описанном виде непросто. Вот упрощенная диаграмка ES6: [rreverser.com/content/images…](https://t.co/zwMC4zLYYC "https://rreverser.com/content/images/2015/Aug/es_spec.svg")

Если вы откроете линку и ничего не увидите - это нормально. Надо уменьшит масштаб либо долго и нудно скроллить \(скорее и то и другое\).

Под "упрощенной" диаграмкой имеется ввиду, что некоторые связи между нодами на самом деле не отображены. И так места мало осталось.

Естественно. А то получилась бы слишком запутанной, большой и непонятной &lt;/sarcasm&gt; [twitter.com/iamstarkov/sta…](https://t.co/BL6SUiV3VA "https://twitter.com/iamstarkov/status/639143795628617728")

Как-то не подумал о таком варианте, да. [twitter.com/webholt/status…](https://t.co/h4Fp2LG4A4 "https://twitter.com/webholt/status/639145293154533377")

К примеру, не пробуя в консоли, скажите что будет в случаях ниже:  
  
return yield + 1;  
return 1 + yield;  
return 1 + \(yield\);

Про более обыденные случаи, в которых и пользователи путаются, типа  
  
var f = x =&gt; { answer: 42 };  
  
вообще молчу.

Нет ошибки - это валидный код. Потому что labeled statement с меткой answer, а внутри - числовой литерат. [twitter.com/slonoed/status…](https://t.co/Ca017jCSt8 "https://twitter.com/slonoed/status/639174059704614913")

Чтобы избежать деоптимизаций в V8. Как только arguments куда-то передается, все, вся функция наказана. [twitter.com/unel86/status/…](https://t.co/bzyO7dUJBR "https://twitter.com/unel86/status/639174421136187392")

Ладно, отвечу сам:  
  
1\) произойдет yield из генератора значения +1  
2\) SyntaxError  
3\) сумма 1 и полученного значения [twitter.com/jsunderhood/st…](https://t.co/TKdlUbTW9Z "https://twitter.com/jsunderhood/status/639148980081938432")

Под \(1\) имеется в виду не сумма, а просто значение "1".

Мало того - в различных контекстах  поведение будет разным, ибо обратная совместимость.

И если Babel, Firefox, Traceur и другие говорят вам что var yield = 1; делать нельзя - вас обманывают. Просто не реализовали спецификацию.

Так как само слово не было зарезервированым, а ломать веб никто не хочет. Вот и строят синтаксические костыли поверх старого.

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") ох, дело ещё в большей жопе, чем я думал\(

## Четверг <small>51 твит</small>

По ночам в [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") тихо, спокойно и никого в живых. А жаль :\) Продолжим наше радио утром!

.[@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") А у кого-то все как всегда... [pic.twitter.com/x6yGllPIaJ](http://t.co/x6yGllPIaJ)

RT [@Spellful](https://twitter.com/Spellful "Соколов Виталий"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov") под это дело можно поговорить о допингах и ритуалах, которые помогают продержаться пару-тройку ночей…

RT [@mistadikay](https://twitter.com/mistadikay "Denis Koltsov"): [@Spellful](https://twitter.com/Spellful "Соколов Виталий") не надо никаких допингов — нужен нормальный 8-часовой сон, здоровье не казенное [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Мудрые слова. [twitter.com/silentroach/st…](https://t.co/YxyVrUwC7X "https://twitter.com/silentroach/status/639287884818874368")

Надеюсь, понятно что в таком виде проблемы возникают не только у вас, но еще больше - в разработчиков парсеров. [twitter.com/jsunderhood/st…](https://t.co/n3HmUmTbRD "https://twitter.com/jsunderhood/status/639176178079768576")

А разработчики парсеров - это и те, кто работает в тимках браузеров, и те, кто строит отдельные тулзы.

Наиболее в данной ситуации, конечно, не повезло TypeScript. Вот мы на днях обсуждали его отклонения от ES6.

А как не отклониться, если синтаксис перекроили так, чтобы и совместимость \(почти\) не поламать, и нового как можно больше напихнуть.

Представьте, что вы с коллегой независимо развиваете два бранча одного рабочего проекта на протяжении года, а потом пробуете их смерджить.

Так что тем кто думал что я на TypeScript пытаюсь как-то "гнать" - это не так. Скорее восхищаюсь работой и сочувствую одновременно.

Некоторое время назад я даже пытался туда контрибьютить, еще не осознавая, какое месиво получается в результате "мерджа конфликтов" языков.

Или вот например экспериментировал с форком TypeScript+JSX с автокомплитом когда это еще не было трендом :\) [youtube.com/watch?v=4c2pLt…](https://t.co/4nvSZVn2TF "https://www.youtube.com/watch?v=4c2pLtHf7KQ")

Ну на простой вопрос простой ответ - а зачем мне полноценная IDE для JS? [twitter.com/palubasik/stat…](https://t.co/39wT8ZrlrY "https://twitter.com/palubasik/status/639392273344630784")

Спасибо за нее [@shuvalov\_anton](https://twitter.com/shuvalov_anton "Darth Shuvalov") и [@iamstarkov](https://twitter.com/iamstarkov "Vladimir Starkov")! Насчет вопроса - хз, наверное разработчики на других языках завидуют \) [twitter.com/vagrantjs/stat…](https://t.co/YQNulZvJVH "https://twitter.com/vagrantjs/status/639395340702105600")

Как бы мало кто из джава/дотнет/... программистов ожидал что JS настолько "выстрелит". Можно так и отвечать "Не твое, вот и бесишься".

RT [@naorunaoru](https://twitter.com/naorunaoru "рома"): [@vagrantjs](https://twitter.com/vagrantjs "Vlados Vagrant ") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") у языков с низким порогом вхождения всегда есть хейтеры, которые путают язык и говнокодеров. так вс…

В целом наверное соглашусь, как на первый язык в нем слишком много отвлекающих и непонятных моментов. [twitter.com/vagrantjs/stat…](https://t.co/b0kfL29f2T "https://twitter.com/vagrantjs/status/639398145156345856")

Изучать имхо надо на языке с минимумом синтаксического сахара, чтобы фокус был на общих концепциях, алгоритмах и т.д. а не специфике языка.

Ну конечно, в C++ нет синтаксического сахара от слова вообще, а последних стандартах особенно :\) [twitter.com/vagrantjs/stat…](https://t.co/o3XXlm0O1c "https://twitter.com/vagrantjs/status/639399592707117056")

Честно - не уверен, не сильно слежу за такими вещами. Для меня первым после МК был Pascal, вполне пойдет и Java. [twitter.com/csscoder/statu…](https://t.co/rVhTCUu2qY "https://twitter.com/csscoder/status/639399354118328320")

Прослеживается тренд, что обучать стоит на функциональных языках - но так как сам обучался не на них, сложно что-то сказать.

Вот и я о том же переживаю. Хотя опять-таки JS был не моим первым языком, поэтому сложно оценивать. [twitter.com/vagrantjs/stat…](https://t.co/VOEf7jk5Sk "https://twitter.com/vagrantjs/status/639402212930752512")

Как-то работает, и можно даже сайты уже пилить, но без пресловутой теории на этом же легко остановиться. [twitter.com/Sigiller/statu…](https://t.co/0qBGKepixk "https://twitter.com/Sigiller/status/639405518726012928")

RT [@Sigiller](https://twitter.com/Sigiller "S̳ị̴͙̣̞g̜͞i̴̥̯l͕ler"): [@freiksenet\_ru](https://twitter.com/freiksenet_ru "Михаил Новиков") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") теория о существовании чего-то кроме jQuery

Они же все сильно похожие, надо разнообразия для понимания различных подходов. [twitter.com/subzey/status/…](https://t.co/l0ml5ljtQO "https://twitter.com/subzey/status/639413660859899904")

Их и так уже дорого, поэтому каждая новая фича проходит строгий "фейс-контроль". Просто сахар ради сахара не пускают [twitter.com/gxoptg\_/status…](https://t.co/byPW9y4yo0 "https://twitter.com/gxoptg_/status/639423239953977344")

Ну началось... [twitter.com/unel86/status/…](https://t.co/0Wvd9sAJVF "https://twitter.com/unel86/status/639435049339875328")

А тем временем что-то опять громко упало \(Amazon?\), потянув за собой Slack, HipChat и других.

Кажись вернулись.

А в статусе EC2 ни слова ни апдейта.

Пока продолжу занудствовать насчет парсинга. Со вчерашней диаграмки, надеюсь, видно что использовать структуры из спеки довольно сложно.

Поэтому браузеры внутри используют собственные структуры для отображения синтаксическа, с которыми им удобно работать.

V8 например сохраняет внутри этого дерева не только синтаксис, а и различную рантайм-информацию - в частности типы данных, определенные JIT.

Но делиться не спешат, так как заявили что им удобнее держать все внутри и рефакторить в любой момент, поэтому - никаких апишек :\(

С другой стороны, Дэйв Герман из Мозиллы наоборот, несколько лет назад открыл API для расширений ФФ и подробно описал структуры данных.

Так и появился SpiderMonkey Parser API - [developer.mozilla.org/en-US/docs/Moz…](https://t.co/FFnaOB1rmN "https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API") - де-факто стандарт AST \(синт. дерева\) для 90% девтулзов, работающих с JS.

Понятно, что туда же попали структуры, специфические для Фаерфокса тех времен - типа старого формата let-переменных или E4X \(XML in JS\).

Но вот сами структуры были очень даже хороши, поэтому их взяли за основу в парсер JS в JS - Esprima. [esprima.org](http://t.co/Je9PVsHPQe "http://esprima.org/")

И пошло-поехало. Еще один чувак решил "посоревноваться" и сделал свой совместимый парсер, но в 2 раза быстрее. [marijnhaverbeke.nl/blog/acorn.html](http://t.co/1OGrFzb89Y "http://marijnhaverbeke.nl/blog/acorn.html")

\(Поправка - в момент написания статьи он еще был в 5 раз быстрее\)

А когда уже есть парсеры и документация, тулзы могут расти как грибы после дождя, что собственно и произошло.

Появились либы для обхода AST [github.com/estools/estrav…](https://t.co/86RcWYFpGD "https://github.com/estools/estraverse"), генерации кода [github.com/estools/escode…](https://t.co/y1cBvIMkAl "https://github.com/estools/escodegen"), проверки скоупов [github.com/estools/escope](https://t.co/vcyFH7wx96 "https://github.com/estools/escope").

А имея тулзы, покрывающие весь цикл - парсинг-изменение-генерация JS, уже несложно создавать и полезные вещи для конечного пользователя.

Например, всеми вами любимый и используемый \(ведь всеми? :\) \) ESLint появился как раз на их основе.

Или же чудесный рефакторинг из коммандной строки с учетом синтаксиса - больше никаких регулярок! [graspjs.com](http://t.co/z11tdV33Gp "http://www.graspjs.com/")

Или же просто красивые визуализации выполнения кода и event loop - [latentflip.com/loupe/](http://t.co/ja76ucPHDk "http://latentflip.com/loupe/").

Даже "новый" компилятор CoffeeScript - CoffeeScriptRedux - тоже решил использовать такой формат и тулзы вместо наколенных решений.

Так инженер из Мозилла, просто создав вики-страничку с доками для расширений, сам того не подозревая, создал де-факто стандарт для AST.

В общем, жыли эти тулзы себе, создавались и развивались, но тут им случился ES6... // продолжение следует :\)

Reflect - важное дополнение к Proxy, все те же методы, только на любых обьектах. [twitter.com/maxmaximov/sta…](https://t.co/OsICRI0BoE "https://twitter.com/maxmaximov/status/639528616712343553")

## Пятница <small>30 твитов</small>

В общем с ES6 была только одна простая, но существенная проблема: его никто всерьез не ожидал, особенно после фэйлов ES4.

Однако стандарт все же начал приобретать очертания. В это же время паралельно фейсбук начал пилить свой до сих пор спорный JSX.

Для этого они форкнули упомянутую выше Esprima в свой Esprima-FB, и реализовав JSX, решили далеко не ходить и заодно добавить немного ES6.

Так и получилось, что они первыми добавили новые типы нод для ES6, которых не было в стандарте версии Mozilla. Однако поддержка была слабой.

В это время я увлекся парсерами для собственных нужд - в основном парсинг бинарных данных в JS - можно смотреть [github.com/jDataView/jBin…](http://t.co/xD5byXMbX6 "http://github.com/jDataView/jBinary")

А парсинг кода показался темой похожей, но в то же время мало тронутой, так как новый стандарт уже на пороге, а поддержки ES6 нету.

Захотелось помочь, попробовал поконтрибьютить в Esprima. Не получилось - мейнтейнеры были заняты другим и противились любым изменениям :\(

Это сейчас Esprima лежит под крылом jQuery на Github, а еще меньше года назад они хостились на Google Code и issues лежали по пару лет.

В общем, так я и узнал про Acorn - шуструю, упрощенную альтернативу. Вот что из этого получилось: [github.com/marijnh/acorn/…](https://t.co/YU36hPHF6S "https://github.com/marijnh/acorn/pull/110")

Ноды, которые можно было, для совместимости взял из Esprima-FB, для других всё же пришлось придумывать новые типы и аттрибуты.

Теперь, когда уже у нас был ES6 парсер, опять-таки - ситуация для других тулзов упростилась. Так и появился 6to5 \(или же Бабель\) :\)

Если что - можно меня остановить, я и правда сильно втянулся в формат "лишь бы писать".

Пока пойду спать, и оставлю опросник - тут был предложен формат "туториал в твиттере" \(можем завтра запилить свой сахар в JS\). Что скажете?

Ок, один из вариантов. Есть еще варианты, что хотите запилить? Не стесняйтесь, можно что угодно :\) [twitter.com/silentroach/st…](https://t.co/j2BlgkXlhy "https://twitter.com/silentroach/status/639651398842511360")

В принципе, тоже вариант - сделать перегрузку функций на основании количества аргументов. Можно даже по типам :\) [twitter.com/roman01la/stat…](https://t.co/07rzSAjLZU "https://twitter.com/roman01la/status/639788195723350016")

Лучше поставить эмулятор девайса, используемый для общих приложений \(такие есть у всех\). [twitter.com/akochemasov/st…](https://t.co/lkdW4EvFQV "https://twitter.com/akochemasov/status/639801192487456768")

Это вообще простенький вариант, зато выйдет поиграться с парсингом а не только трансформацией. [twitter.com/11bit/status/6…](https://t.co/4pO7foqPVm "https://twitter.com/11bit/status/639801692096208896")

RT [@cssunderhood](https://twitter.com/cssunderhood "Верстальщик"): Оказывается есть такие, у которых Atom не тупит. Как так? [twitter.com/naorunaoru/sta…](https://t.co/DFeXSWdW7n "https://twitter.com/naorunaoru/status/639817840061751296")

В общем, попробуем таки реализовать кастомный синтаксис для слайсов - a\[2:10\] -&gt; a.slice\(2, 10\). Но наверное завтра, большинство уже спит.

А пока советую поставить Acorn и взглянуть на ESTree - современное продолжение упомянутого ранее Mozilla Parser API. [github.com/estree/estree](https://t.co/fPhadJUwFM "https://github.com/estree/estree")

Как уже говорил, новые ноды для ES6 создавались самостоятельно - сначала FB, потом я в Acorn, потом подтянулась Esprima.

И в определенный момент, конечно, начались конфликты, так как каждый реализовывал по своему видению, еще и сам ES6 менялся-развивался.

А тут Esprima из-за своего кризиса в развитии \(её автор занимается паралельно другими крутыми вещами\) как раз перешла под jQuery Foundation.

И jQuery, чтобы расшевелить дело, начала созвоны со всеми, кто работал на смежных проектах, так или иначе связанных с парсингом.

На них же и решили, что пора прекратить соревноваться в "правильности" форматов, и лучше вместе создать общую спеку из полученных наработок.

Вот так теперь на изначальной вики-страничке Parser API висит deprecation notice, а все развитие перешло в общую ESTree.

Над ней работали и продолжают работать уже все сообща - Mozilla, Esprima, Acorn, Babel и пару других заинтересованных лиц.

Понятно, что конфликты сами собой не пропали и бывали обсуждения на сотни комментов по самых глупых вопросах [github.com/estree/estree/…](https://t.co/xL31r9bFtm "https://github.com/estree/estree/pull/32")

Но как результат - теперь есть четко прописанная философия, а в комьюнити появился единый стандарт и тулзы, умеющие ES6, JSX, Flow и прочее.

Завтра продолжим, уже пытаясь добавить собственный нестандартный сахар, упомянутый выше :\) Хорошего вечера!

## Суббота <small>33 твита</small>

С ними сложно. Нет общего видения, как это должно быть, поэтому каждый делает по-своему. [github.com/estree/estree/…](https://t.co/jTheNCsWVd "https://github.com/estree/estree/issues/41") [twitter.com/veged/status/6…](https://t.co/8RZMfQQZtt "https://twitter.com/veged/status/639903856202227712")

Насчет этого - в первую очередь стоит создать папку для проекта и в ней  
  
npm i acorn ast-types escodegen [twitter.com/jsunderhood/st…](https://t.co/tXuSSlen8v "https://twitter.com/jsunderhood/status/639894382838194176")

Acorn стал расширяемым относительно недавно, поэтому API-шка пока со странностями, но зато есть возможность добавлять что-то без форка.

В первую очередь создадим плагин для синтаксиса. Для этого идем в сорцы и смотрим куда мы хотим добавить свой метод. [github.com/marijnh/acorn/…](https://t.co/E4SkLmi9gp "https://github.com/marijnh/acorn/blob/master/src/expression.js#L79")

\(Disclaimer: я плагин для этого синтаксиса еще не писал, всё пишу вместе с вами в риалтайме, поэтому возможны баги :\) \)

В первую очередь находим parseExpression. Но он покрывает выражения типа a+b,c+d \(с запятыми между ними\) как одно целое. Не интересно.

Он вызывает parseMaybeAssign, который покрывает как раз элементы - если добавим здесь, то a+b:c+d будет читаться как \(a+b\):\(c+d\) а не иначе.

По-моему, такой приоритет нашего оператора вполне интуитивен и лучше чем что-то типа \(a\)+\(b:c\)+\(d\). Поэтому здесь и остановимся.

А нет, подождите \(я же говорил, будут баги :\) \). На этом уровне мы также покроем a=b:c как \(a=b\):\(c\), что уже не очень логично. Идем ниже.

parseMaybeConditional может сработать, но a ? b : c : d получается неоднозначным - или же \(a ? b : c\) : d или a ? \(b : c\) : d.

Эта проблема - случай более общей, известной как dangling else и присуща многим языкам. [en.wikipedia.org/wiki/Dangling\_…](https://t.co/dA5ZGXL3zU "https://en.wikipedia.org/wiki/Dangling_else")

Нет, мы только выбираем уровень где хотим внедриться :\) [twitter.com/andreypopp/sta…](https://t.co/be6JDmEI3b "https://twitter.com/andreypopp/status/640142377915654144")

Думаю, на проблему dangling else мы пока можем забить \(наверное, так же говорили разработчики C и Pascal\) и будем внедряться здесь.

Код в твиттер писать проблематично и можно только по частям, поэтому лучше gist с комментами. [gist.github.com/RReverser/359a…](https://t.co/Q2iJVg1lt8 "https://gist.github.com/RReverser/359ae1f7aa901e86156f")

Подозреваю, несмотря на комментарии, некоторые моменты без документации \(да-да, знаю :\( \) могут быть непонятными. Задавайте вопросы сейчас.

Сам код и правда не сложный, там больше места заняли комменты. Проверить, что парсинг работает, можно в консоли. [pic.twitter.com/s2J8Ut2s9g](http://t.co/s2J8Ut2s9g)

Здесь мы видим структуру ESTree - типы нод, их свойства, позиции начала-конца и - да - ноду, созданную нашими собственными руками.

[xkcd.com/927/](https://t.co/ZxArCoxapt "https://xkcd.com/927/") [twitter.com/veged/status/6…](https://t.co/CxmYRhJzlT "https://twitter.com/veged/status/640149649232408576")

Жду фидбека, что у кого-то получилось прежде чем продолжать :\)

Переходим к трансформеру. Для этого и используем ast-types, хотя можно было бы и любой другой аналог типа esrecurse / estraverse.

Просто в ast-types есть удобные "фабрики" нод вместо того чтобы писать обьекты вручную в виде { type: "QuestionNode", answer: 42 }.

Вот собственно написал скрипт для транспайлинга дерева - опять-таки, не стесняйтесь задавать вопросы: [gist.github.com/RReverser/359a…](https://t.co/pQJZbkPFws "https://gist.github.com/RReverser/359ae1f7aa901e86156f#file-transform-js")

Принцип простой: 1\) регистрируем наш нестандартный тип, чтобы его можно было распознать; 2\) ищем его ноды в дереве; 3\) заменяем на вызовы.

Всё что остаётся - набросать какой-нибудь CLI, который будет читать файлы, парсить строку, трансформировать AST и генерировать код.

К примеру как-то так: [gist.github.com/RReverser/359a…](https://t.co/WKTCiU9iUl "https://gist.github.com/RReverser/359ae1f7aa901e86156f#file-index-js")  
  
Понятно, что можно развивать, добавить сорс-мапы и т.д., но в целом наш транспайлер готов.

Надеюсь, было более-менее понятно и интересно, но я ещё буду здесь для любых вопросов :\)

Ну и да, собственно как проверить транспайлер. Создайте файл test.js, в нём "var a = \[1,2,3,4\]; var b = a\[1:3\];". И запустите скрипт :\)

В test.out.js должен появиться  
  
var a = \[1,2,3,4\];  
var b = a.slice\(1, 3\);

RT [@slonoed](https://twitter.com/slonoed "Dmitry M."): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") очень нужна помощь ретвитом, ищу нормальные тулзы для i18n, чтоб могли текст забрать из кода и построить словарь …

RT [@SilentImp](https://twitter.com/SilentImp "Тихий Бес"): [@slonoed](https://twitter.com/slonoed "Dmitry M.") не уверен, что то, что ты хочешь, но [l20n.org](http://t.co/JKe0n3y68R "http://l20n.org/") [@jsunderhood](https://twitter.com/jsunderhood "Разработчик")

Это что-то новенькое. Теперь буду знать, как называть pet projects. [twitter.com/cssunderhood/s…](https://t.co/TnPFTOCZ3T "https://twitter.com/cssunderhood/status/640249963809783808")

RT [@Andre\_487](https://twitter.com/Andre_487 "Andrey Prokopyuk"): [@jsunderhood](https://twitter.com/jsunderhood "Разработчик") А я теперь буду знать, как называть хомяков. Всегда весело называть вещи не своими именами.

Ох уж эти тролли :\) [twitter.com/Andre\_487/stat…](https://t.co/3CbAtyWrkc "https://twitter.com/Andre_487/status/640269490329100288")

## Воскресенье <small>25 твитов</small>

Сегодня воскресенье и я с вами последний день, так что можем ещё включить оффтоп, пошарить интересные линки, поговорить про UK и что угодно.

С документами было просто, в этом плане переезжать значительно легче и быстрее \(~3 месяца\), чем, например в US. [twitter.com/mistadikay/sta…](https://t.co/AvngJFqcfv "https://twitter.com/mistadikay/status/640453392729440256")

А вот с поиском жилья не так просто - система сильно отличается от нашей. У нас нашёл квартиру, договорились, подписали и всё - живешь.

Здесь же проверяют кредитную историю, спрашивают предыдущих работодателей и лэндлордов за 3 года, референсы и т.д.

Понятное дело, что в только приехавших этого всего нет, поэтому много лэндлордов подозрительны и требуют оплату за 3+ месяцев вперёд.

Учитывая цены на оренду, к этому надо либо быть готовым, либо снимать только комнату, либо дольше искать. Сам сейчас пишу с AirBnb жилья :\)

Был случай, другой коллега тоже искал жилье \(чуть раньше приехал\), и написал в чат что "его оффер перебили, заплатив на 12 месяцев вперёд".

И такое бывает, да. Говорят, это в основном родители студентов из HKG/SIN, которые легко могут себе такое позволить.

Забыл упомянуть - сами квартиры где-то от 1000 фунтов в месяц за "не очень".

Самое трудное - искать жильё как раз в летне-осенний перид, когда приезжают студенты со всего мира и разбирают всё что можно.

Где-то от 400 фунтов если готовить самому и не на широкую ногу. Самому трудно оценивать, пока больше ем по кафешках. [twitter.com/lifeasecond/st…](https://t.co/nGSg0uOagy "https://twitter.com/lifeasecond/status/640457520281190400")

Сложно. Недавно минимум проживания изменился с 3х лет до 5, подозреваю, ещё вырастет на фоне кризиса с мигрантами. [twitter.com/ALF\_er/status/…](https://t.co/fXn2EwCX2Q "https://twitter.com/ALF_er/status/640459848023416833")

По квартире-еде уже ответил. Транспорт - от 120 фунтов в месяц за проезной на 1-2 зоны. [twitter.com/SilentImp/stat…](https://t.co/OkufMCUqZe "https://twitter.com/SilentImp/status/640460804798705664")

Один момент: надо учитывать зону, в которой живешь. А так полезная линка. [twitter.com/mkazantsev/sta…](https://t.co/I340OTViZc "https://twitter.com/mkazantsev/status/640461936249970688")

Да нет, здесь такого вообще не чувствуется. Половина Лондона - понаехавшие \(студенты, работники\). Много индусов. [twitter.com/ALF\_er/status/…](https://t.co/Z4z7IlZJBB "https://twitter.com/ALF_er/status/640462862167707648")

Насчет зон - я писал про 1000+ за квартиру, но на самом деле, если за больше часа езды до центра, то за 1200 знакомый снял 2-этажный дом.

Метро, поезда - по зонам, автобусы - в любой зоне "бесплатно" с любым проездным, речка и т.д. - только скидки. [twitter.com/SilentImp/stat…](https://t.co/EaFWp1fdBd "https://twitter.com/SilentImp/status/640463371754700800")

Хватает по кафешкам и торговым центрам, так чтоб на улице - только от провайдеров \(для их же клиентов\). [twitter.com/SilentImp/stat…](https://t.co/o6MEJDA76Q "https://twitter.com/SilentImp/status/640466164662018048")

С другой стороны, здесь есть тарифы с безлимитным 4G и хорошим покрытием, поэтому не критично.

Пользуюсь Three, только у них такой безлимит. Правда в этом месяце убрали 15-фунтовый тариф, безлим только за 20. [twitter.com/SilentImp/stat…](https://t.co/cTNZx7F5jV "https://twitter.com/SilentImp/status/640467066059886592")

Насчёт театров - не, пока не порешаю с квартирой, не до них :\)

Зачем? Нет у меня ни информации, ни каких-то высоких знаний, только \(иногда болезненный\) опыт :\) [twitter.com/vagrantjs/stat…](https://t.co/igtPtilsoo "https://twitter.com/vagrantjs/status/640504985193725952")

Да почему же троллю? Самоучек много. Есть рабочие проекты, есть опен-сорс. Ну и про документацию ничего не говорил. [twitter.com/vagrantjs/stat…](https://t.co/IX8RtIeY40 "https://twitter.com/vagrantjs/status/640512948859994112")

Ну что же... У меня осталось пол-воскресенья, которые я собираюсь провести уже не здесь :\)

Спасибо всем, кто выдержал до конца, был рад поболтать. С вами был [@RReverser](https://twitter.com/RReverser "Ingvar Stepanyan"). Как говорится, до новых встреч!

## Ссылки

### github.com  
<a href="https://github.com/coderhaoxin/typed-objects" target="_blank">https://github.com/coderhaoxin/typed-objects</a>  
<a href="https://github.com/tc39/ecma262" target="_blank">https://github.com/tc39/ecma262</a>  
<a href="https://github.com/getify/es-feature-tests" target="_blank">https://github.com/getify/es-feature-tests</a>  
<a href="https://github.com/Microsoft/IEDiagnosticsAdapter" target="_blank">https://github.com/Microsoft/IEDiagnosticsAdapter</a>  
<a href="https://github.com/kripken/emscripten/wiki/Porting-Examples-and-Demos" target="_blank">https://github.com/kripken/emscripten/wiki/Porting-Examples-and-Demos</a>  
<a href="https://github.com/jterrace/js.js/" target="_blank">https://github.com/jterrace/js.js/</a>  
<a href="https://github.com/es-shims/es5-shim/issues/91" target="_blank">https://github.com/es-shims/es5-shim/issues/91</a>  
<a href="https://github.com/estools/estraverse" target="_blank">https://github.com/estools/estraverse</a>  
<a href="https://github.com/estools/escodegen" target="_blank">https://github.com/estools/escodegen</a>  
<a href="https://github.com/estools/escope" target="_blank">https://github.com/estools/escope</a>  
<a href="http://github.com/jDataView/jBinary" target="_blank">http://github.com/jDataView/jBinary</a>  
<a href="https://github.com/marijnh/acorn/pull/110" target="_blank">https://github.com/marijnh/acorn/pull/110</a>  
<a href="https://github.com/estree/estree" target="_blank">https://github.com/estree/estree</a>  
<a href="https://github.com/estree/estree/pull/32" target="_blank">https://github.com/estree/estree/pull/32</a>  
<a href="https://github.com/estree/estree/issues/41" target="_blank">https://github.com/estree/estree/issues/41</a>  
<a href="https://github.com/marijnh/acorn/blob/master/src/expression.js#L79" target="_blank">https://github.com/marijnh/acorn/blob/master/src/expression.js#L79</a>

### Другие

<a href="http://mrale.ph/blog/2013/04/29/performance-tuning-as-weather-forecast.html" target="_blank">http://mrale.ph/blog/2013/04/29/performance-tuning-as-weather-forecast.html</a>  
<a href="http://mrale.ph/blog/2014/02/23/the-black-cat-of-microbenchmarks.html" target="_blank">http://mrale.ph/blog/2014/02/23/the-black-cat-of-microbenchmarks.html</a>  
<a href="https://esdiscuss.org/" target="_blank">https://esdiscuss.org/</a>  
<a href="https://esdiscuss.org/topic/existential-operator-null-propagation-operator" target="_blank">https://esdiscuss.org/topic/existential-operator-null-propagation-operator</a>  
<a href="http://esdiscuss.org" target="_blank">http://esdiscuss.org</a>  
<a href="https://groups.google.com/forum/#!topic/golang-nuts/RKymTuSCHS0" target="_blank">https://groups.google.com/forum/#!topic/golang-nuts/RKymTuSCHS0</a>  
<a href="http://nodejs.org" target="_blank">http://nodejs.org</a>  
<a href="http://techcrunch.com/video/cloudflare-2015-best-enterprise-startup-winner/518637761/" target="_blank">http://techcrunch.com/video/cloudflare-2015-best-enterprise-startup-winner/518637761/</a>  
<a href="http://dev.modern.ie/platform/changelog/10532-pc/" target="_blank">http://dev.modern.ie/platform/changelog/10532-pc/</a>  
<a href="https://featuretests.io/" target="_blank">https://featuretests.io/</a>  
<a href="https://developer.rackspace.com/blog/powershell-101-from-a-linux-guy/" target="_blank">https://developer.rackspace.com/blog/powershell-101-from-a-linux-guy/</a>  
<a href="https://bgrins.github.io/videoconverter.js/" target="_blank">https://bgrins.github.io/videoconverter.js/</a>  
<a href="https://video-funhouse.herokuapp.com/" target="_blank">https://video-funhouse.herokuapp.com/</a>  
<a href="http://anvaka.github.io/asmalidator/" target="_blank">http://anvaka.github.io/asmalidator/</a>  
<a href="https://rreverser.com/started-work-on-es6-asm-js-conversion/" target="_blank">https://rreverser.com/started-work-on-es6-asm-js-conversion/</a>  
<a href="https://rreverser.com/content/images/2015/Aug/es_spec.svg" target="_blank">https://rreverser.com/content/images/2015/Aug/es_spec.svg</a>  
<a href="http://asmjs.org/spec/latest/#variable-type-annotations" target="_blank">http://asmjs.org/spec/latest/#variable-type-annotations</a>  
<a href="http://beta.unity3d.com/jonas/DT2/" target="_blank">http://beta.unity3d.com/jonas/DT2/</a>  
<a href="http://eleks.github.io/js2js/" target="_blank">http://eleks.github.io/js2js/</a>  
<a href="http://bellard.org/jslinux/" target="_blank">http://bellard.org/jslinux/</a>  
<a href="http://webreflection.blogspot.co.uk/2011/03/rewind-getters-setters-for-all-ie-with.html" target="_blank">http://webreflection.blogspot.co.uk/2011/03/rewind-getters-setters-for-all-ie-with.html</a>  
<a href="http://www.slideshare.net/RReverser/es6concurrency" target="_blank">http://www.slideshare.net/RReverser/es6concurrency</a>  
<a href="https://gist.github.com/RReverser/81f5003e6ba8fbaaae83" target="_blank">https://gist.github.com/RReverser/81f5003e6ba8fbaaae83</a>  
<a href="https://gist.github.com/RReverser/359ae1f7aa901e86156f" target="_blank">https://gist.github.com/RReverser/359ae1f7aa901e86156f</a>  
<a href="https://gist.github.com/RReverser/359ae1f7aa901e86156f#file-transform-js" target="_blank">https://gist.github.com/RReverser/359ae1f7aa901e86156f#file-transform-js</a>  
<a href="https://gist.github.com/RReverser/359ae1f7aa901e86156f#file-index-js" target="_blank">https://gist.github.com/RReverser/359ae1f7aa901e86156f#file-index-js</a>  
<a href="https://www.youtube.com/watch?v=4c2pLtHf7KQ" target="_blank">https://www.youtube.com/watch?v=4c2pLtHf7KQ</a>  
<a href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API" target="_blank">https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API</a>  
<a href="http://esprima.org/" target="_blank">http://esprima.org/</a>  
<a href="http://marijnhaverbeke.nl/blog/acorn.html" target="_blank">http://marijnhaverbeke.nl/blog/acorn.html</a>  
<a href="http://www.graspjs.com/" target="_blank">http://www.graspjs.com/</a>  
<a href="http://latentflip.com/loupe/" target="_blank">http://latentflip.com/loupe/</a>  
<a href="https://en.wikipedia.org/wiki/Dangling_else" target="_blank">https://en.wikipedia.org/wiki/Dangling_else</a>  
<a href="https://xkcd.com/927/" target="_blank">https://xkcd.com/927/</a>  
<a href="http://l20n.org/" target="_blank">http://l20n.org/</a>
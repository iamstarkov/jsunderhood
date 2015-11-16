# jsunderhood.ru

Коллективный твиттер-аккаунт для фронтенд-разработчиков с новым автором каждую неделю

## Старт проекта

    git clone git@github.com:iamstarkov/jsunderhood.git
    cd jsunderhood
    npm install
    npm start

## Проект

* `authors.js` — список авторов
* `stats.js` — генерация 

### Дамп

* `update.js` — апдейт дампа
* `dump/index.js` — получение дампа всех авторов
* `dump/*.json` — дамп информации об авторах ('tweets', 'info', 'media', 'followers', 'mentions')
* `dump/images/` — дамп изображений авторов
* `helpers/` — хелперы

## Проект



### Сайт

* `css/` — CSS для сайта
* `layouts/` — Шаблоны для сайта
* `static/` — статические файлы для сайта
* `pages/` — маркдаун страницы на сайте

* `gulpfile.babel.js` — сборка сайта
* `webpack.config.babel.js` — конфиг для js bundling
* `package.json`, `.editorconfig`, `.eslintrc`, `.gitignore` — переносимое окружение
* `ROADMAP.md` — план развития проекта
* `README.md` — этот файл

* `migration/` — миграции для старых проектов

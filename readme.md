# Сайт Money Help

Финансовая помощь, займы

## Страницы

* [Главная](https://melentq.github.io/money-help/index)
* [Займ для бизнеса](https://melentq.github.io/money-help/entity)
* [Под ПТС](https://melentq.github.io/money-help/transport)
* [Под залог недвижимости](https://melentq.github.io/money-help/realty)
* [О компании](https://melentq.github.io/money-help/about)
* [Калькулятор](https://melentq.github.io/money-help/calculator)
* [Документы](https://melentq.github.io/money-help/documents)
* [FAQ](https://melentq.github.io/money-help/faq)
* [Контакты](https://melentq.github.io/money-help/contacts)
* [404](https://melentq.github.io/money-help/404)
* [Текстовая страница](https://melentq.github.io/money-help/policy)

## Handlebars Boilerplate

Бойлерплейт на основе связки Gulp + Webpack с поддержкой SVG спрайтов и SCSS

HTML-препроцессор, шаблонизатор - [Handlebars](https://handlebarsjs.com/)

CSS-препроцессор - [SCSS](https://sass-scss.ru/)

## Предустановленные библиотеки и плагины

* [jQuery](https://jquery.com/)
* [GSAP](https://greensock.com/gsap/)
* [Swiper](https://swiperjs.com/swiper-api)
* [lazysizes](https://afarkas.github.io/lazysizes/index.html)
* [parsley.js](https://parsleyjs.org/)
* [day.js](https://day.js.org/)
* [choices.js](https://mohistory.org/node_modules/choices.js/)
* [inputmask](https://github.com/RobinHerbots/Inputmask)
* [plyr](https://plyr.io/)
* [bootstrap-datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/)
* [body-scroll-lock](https://github.com/willmcpo/body-scroll-lock)
* [detect-it](https://www.npmjs.com/package/detect-it)

## Установка

Установить Node JS, затем выполнить команду:

```bash
npm install
```

## NPM

### В режиме разработки

```bash
npm run dev
```

### В продакшен режиме

```bash
npm run build
```

### Загрузить сборку на gh-pages

(Нужно добавить ссылку на репозиторий в package.json)

```bash
npm run ghp
```

## Использование

### Handlebars

В проекте используются [build-in-helpers](https://handlebarsjs.com/guide/builtin-helpers.html)

Основные используемые фичи шаблонизатора:

* [Partials](https://handlebarsjs.com/guide/partials.html#basic-partials)
* [#if](https://handlebarsjs.com/guide/builtin-helpers.html#if)
* [#each](https://handlebarsjs.com/guide/builtin-helpers.html#each)

Как пользоваться:

* Страницы генерируются на основе шаблонов. Шаблон хранится в папке src\partials\layouts
* Страницы, которые наследуются от шаблона, хранятся в папке pages
* В папке pages есть папка data с json-файлами. В них хранятся данные для страниц. Эти файлы принадлежат одноименным страницам, а данные в них сразу доступны для использования (попадают в контекст). Эти файлы создаются вручную
* Какие-то повторяющиеся куски разметки можно выносить в отдельные файлы - partials. Они хранятся в одноименной папке и вызываются в нужном месте

### JS

* Есть какие-то плагины из коробки, смотри внимательно
* Есть jQuery, GSAP, Swiper и пр.
* Основной файл - main.js, находится в папке js
* Есть файл src\assets\backend\backend.js, в нем прописываются, например, обработчики сабмита формы (для бекендера на PHP)
* Для пользовательских функций создал отдельную папку src\js\custom
* Объекты можно засунуть в объект window, чтобы получить к ним доступ из файла backend.js

### CSS

* SCSS
* Легко самому разобраться в структуре
* Все файлы стилей импортятся в styles.scss вручную

### Изображения и иконки

* Изображения перед заливкой на гитхаб лучше сразу оптимизировать и переводить в формат webp ([Squoosh](https://squoosh.app/))
* Иконки лучше оптимизировать через сервис [SVG.OMG](https://jakearchibald.github.io/svgomg/)
* Все svg, помещенные в папку src\img\icons сборщик автоматически собирает в инлайновый спрайт, который доступен на любой странице.
# Северное графство

Сайт питомника собак «Северное графство» (кавалер-кинг-чарльз-спаниели и пудели).

Monorepo: бэкенд на Go и фронтенд на React.

## Структура

```
.
├── backend/        # HTTP API на Go (стандартный net/http, без фреймворков)
├── frontend/       # React 19 + TypeScript + Vite + TanStack Query
└── docs/           # концепция, дизайн, макеты
    ├── concept.md
    ├── design.md
    └── mockups/
        ├── prototype.html   # кликабельный макет, открывается в браузере
        ├── assets/          # фото и шрифты макета
        └── pages/           # скриншоты страниц
```

## Документация

- [Архитектура](docs/architecture.md) — как связаны фронт и бэк, что в бэкенде есть сейчас.
- [Концепция проекта](docs/concept.md) — бренд, стиль, палитра, модель данных.
- [Дизайн сайта](docs/design.md) — карта сайта, структура страниц, дизайн-система, стек фронтенда, API-контракт.
- Кликабельный макет: [`docs/mockups/prototype.html`](docs/mockups/prototype.html) — открыть файл в браузере.
- Скриншоты страниц: [главная](docs/mockups/pages/home.jpg) · [собаки](docs/mockups/pages/dogs.jpg) ·
  [карточка собаки](docs/mockups/pages/dog.jpg) · [щенки](docs/mockups/pages/puppies.jpg) ·
  [о питомнике](docs/mockups/pages/about.jpg) · [контакты](docs/mockups/pages/contacts.jpg) ·
  [мобильная](docs/mockups/pages/mobile-home.jpg).
- Ранние эскизы настроения: [десктоп](docs/mockups/homepage-desktop.png), [мобильный](docs/mockups/homepage-mobile.png).

## Запуск

Фронтенд (нужен Node.js 20+):

```bash
cd frontend
npm install
npm run dev     # http://localhost:5173
```

Работает на моках, бэкенд для этого поднимать не нужно. Подробнее — в
[frontend/README.md](frontend/README.md).

Бэкенд (нужен Go 1.22+):

```bash
cd backend
make run        # http://localhost:8080
curl localhost:8080/api/health
```

Внимание: сейчас в репозитории нет `backend/cmd/server`, на который ссылается `make run`,
поэтому сервер пока не запускается. Подробнее — в [backend/README.md](backend/README.md)
и [docs/architecture.md](docs/architecture.md).

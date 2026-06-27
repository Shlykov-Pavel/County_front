# Северное графство

Сайт питомника собак «Северное графство» (кавалер-кинг-чарльз-спаниели и пудели).

Monorepo: бэкенд на Go и фронтенд на React.

## Структура

```
.
├── backend/        # HTTP API на Go (стандартный net/http, без фреймворков)
├── frontend/       # (планируется) React + TypeScript
└── docs/           # концепция, макеты
    ├── concept.md
    └── mockups/
```

## Документация

- [Концепция проекта](docs/concept.md) — бренд, стиль, палитра, модель данных, дорожная карта.
- Макеты: [десктоп](docs/mockups/homepage-desktop.png), [мобильный](docs/mockups/homepage-mobile.png).

## Бэкенд

Требуется Go 1.22+.

```bash
cd backend
make run        # запустить сервер на http://localhost:8080
curl localhost:8080/api/health
```

Подробнее — в [backend/README.md](backend/README.md).

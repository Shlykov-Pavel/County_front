// Package httpapi описывает HTTP-слой: роутер, обработчики и middleware.
// Используется только стандартная библиотека (net/http, роутер из Go 1.22+).
package httpapi

import (
	"log/slog"
	"net/http"
)

// API держит зависимости HTTP-слоя (логгер, позже — хранилище, сервисы).
type API struct {
	logger *slog.Logger
}

// New создаёт API с переданными зависимостями.
func New(logger *slog.Logger) *API {
	return &API{logger: logger}
}

// Routes регистрирует маршруты и возвращает http.Handler с middleware.
// В Go 1.22+ ServeMux понимает методы и шаблоны вида "GET /api/health".
func (a *API) Routes() http.Handler {
	mux := http.NewServeMux()

	mux.HandleFunc("GET /api/health", a.handleHealth)

	return a.withLogging(mux)
}

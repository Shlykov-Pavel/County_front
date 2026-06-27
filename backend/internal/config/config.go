// Package config загружает настройки приложения из переменных окружения.
package config

import (
	"fmt"
	"os"
	"time"
)

// Config — настройки приложения.
type Config struct {
	// Host:Port, на котором слушает HTTP-сервер.
	Addr string
	// Окружение: development | production.
	Env string
	// Таймауты HTTP-сервера.
	ReadTimeout     time.Duration
	WriteTimeout    time.Duration
	IdleTimeout     time.Duration
	ShutdownTimeout time.Duration
}

// Load собирает конфигурацию из переменных окружения, подставляя разумные
// значения по умолчанию. Так локальный запуск работает без настройки.
func Load() Config {
	return Config{
		Addr:            fmt.Sprintf(":%s", getEnv("PORT", "8080")),
		Env:             getEnv("APP_ENV", "development"),
		ReadTimeout:     5 * time.Second,
		WriteTimeout:    10 * time.Second,
		IdleTimeout:     120 * time.Second,
		ShutdownTimeout: 10 * time.Second,
	}
}

func getEnv(key, fallback string) string {
	if v, ok := os.LookupEnv(key); ok && v != "" {
		return v
	}
	return fallback
}

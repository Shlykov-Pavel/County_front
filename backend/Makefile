.PHONY: run build test vet tidy

# Запустить сервер локально
run:
	go run ./cmd/server

# Собрать бинарник в ./bin/server
build:
	go build -o bin/server ./cmd/server

# Прогнать тесты
test:
	go test ./...

# Статический анализ
vet:
	go vet ./...

# Привести зависимости в порядок
tidy:
	go mod tidy

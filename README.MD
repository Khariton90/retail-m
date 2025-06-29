# Retail-M

## Retail-M — веб-приложение для анализа динамики стоимости криптовалюты Bitcoin. Проект состоит из двух основных частей: серверная сторона (server) и клиентская сторона (client).

<p align="center">
  <a href="./day-500.webp" target="blank"><img src="./day-500.webp" width="400" alt="Image" /></a>
  <a href="./week-500.webp" target="blank"><img src="./week-500.webp" width="400" alt="Image" /></a>
</p>

<p align="center">
  <a href="./month-500.webp" target="blank"><img src="./month-500.webp" width="400" alt="Image" /></a>
  <a href="./year-500.webp" target="blank"><img src="./year-500.webp" width="400" alt="Image" /></a>
</p>

## 🛠️ Запуск проекта:

### Перед запуском убедитесь, что установлены Docker и Node.js.

#### Серверная часть (server):

<p>cd server # Переход в директорию серверной части</p>
<p>mv .env-example .env # Создаем конфигурационный файл `.env`</p>
<p>docker compose up -d # Поднимаем контейнеры Docker</p>

#### Затем выполняем миграцию базы данных и загрузку начальных данных:

<p>npm run db-generate # Генерация структуры БД</p>
<p>npm run db-migrate # Выполнение миграции</p>
<p>npm run db-seed # Загрузка данных c API https://min-api.cryptocompare.com/data/v2</p>
<p>npm run start:dev # Запуск приложения в режиме разработки</p>

#### Клиентская часть (client):

##### Переходим в клиентскую часть приложения:

<p>cd ../client # Переход в директории клиента</p>
<p>mv .env-example .env # Создаем конфиг-файл `.env`</p>
<p>npm install # Установка зависимостей</p>
<p>npm run dev # Запуск разработки в режиме разработчика</p>
<p>Открываем браузер и переходим по адресу http://localhost:3000, чтобы увидеть приложение в действии.</p>

### 📊 Основные возможности:

Отображение истории изменения цены биткоина.

Возможность фильтрации данных по временному диапазону.

Удобное взаимодействие с API для загрузки новых данных.

Обновление данных каждый час с API.

#### Проект готов к запуску и дальнейшей разработке!

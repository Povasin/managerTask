# Manager Task 📋

![Status: Development](https://img.shields.io/badge/Status-Development-yellow.svg)
![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![LESS](https://img.shields.io/badge/Style-LESS-1d365d)

## 📌 About
**Manager Task** — это минималистичное веб-приложение для управления задачами и контроля рабочего процесса. Проект создавался для реализации интуитивного интерфейса таск-трекера с мгновенным откликом. На текущем этапе реализован frontend-прототип с локальным хранением данных, готовится миграция на полноценный REST API backend.

## ⚙️ Техническая глубина
- **Управление состоянием:** Изолированная работа с `localStorage` для сохранения задач между сессиями.
- **Модульность:** Использование ES6-модулей (`import`/`export`) для разделения логики UI, нотификаций и обработки данных.
- **Динамический UI:** Программная анимация и манипуляция DOM (управление боковой панелью, рендеринг списков) без использования тяжелых JS-фреймворков.

## 🛠 Стек технологий
- **Frontend:** Vanilla JavaScript (ES6+), HTML5
- **Стилизация:** CSS / LESS
- **Инфраструктура:** NPM (для управления зависимостями в будущем)

## 🚀 Quick Start (Установка и запуск)

Для локального запуска приложения не требуются сложные сборщики. Используйте любой легковесный HTTP-сервер:

```bash
# 1. Клонируйте репозиторий
git clone [https://github.com/Povasin/managerTask.git](https://github.com/Povasin/managerTask.git)
cd managerTask

# 2. Запустите локальный сервер (например, через npx)
npx serve .

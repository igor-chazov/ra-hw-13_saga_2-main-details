# 13. Домашнее задание к лекции «Redux Saga»

[![Build status](https://ci.appveyor.com/api/projects/status/7p34kx68ytkd34xy?svg=true)](https://ci.appveyor.com/project/igor-chazov/ra-hw-13-saga-2-main-details) [[GithubPages](https://igor-chazov.github.io/ra-hw-13_saga_2-main-details)]

---

## 13.2 Список и детали

Напишите проект, использующий React Router и Redux Observable, который удовлетворяет следующим условиям:

1. Проект должен использовать React Router и Redux Saga
1. На главной странице показывается список услуг (редактирование не нужно, достаточно просто ссылок) - данные загружаются методом GET на http://localhost:7070/api/services
1. При переходе по ссылке (/:id/details), загружаются детали услуги - GET на http://locahost:7070/api/services/:id

При загрузке должен отображаться индикатор загрузки (что на странице списка, что на странице деталей):

![](./assets/spinner.png)

При ошибке - показываться сообщение об ошибке и кнопка "Повторить запрос", при нажатии на которой осуществляется попытка снова выполнить запрос (с индикатором загрузки и т.д.):

![](./assets/retry.png)

Готовый бэкенд расположен в каталоге `backend`.

---
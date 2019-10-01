// Сервисы

// Реализовать 2 класса-сервиса для работы с локальными хранилищами,
//  один для localStorage, второй sessionStorage.
// Каждый из сервисов должен иметь статические методы:
// получения списка элементов по ключу, ///
// получения 1 элемента по ключу и идентификатору,///
// добавление списка элементов по ключу, ///
// добавления 1 элемента в список по ключу, ///
// обновления списка по ключу,
// обновление 1 элемента в списке по ключу,
// удаления списка по ключу, ///
// удаления элемента в списке по ключу и идентификатору.///
// Продемонстрировать работу сервиса.


import localStorageService from './scripts/localStorage';

const list = ['ooo', 'aaa', [1, 2, 3], 'ttt'];

localStorageService.inputListToLocalStorage('one', list);

console.log(localStorageService.getListFromLocalStorageByKey('one'));


const list2 = [8, 'lll', 'oooo', 5, { a: 'aaa', b: 'bbb' }];

localStorageService.inputListToLocalStorage('two', list2);

console.log(localStorageService.getListFromLocalStorageByKey('two'));

localStorageService.inputElementToLocalStorageByKey('one', 26);

console.log(localStorageService.getListFromLocalStorageByKey('one'));

localStorageService.inputListToLocalStorage('two', list);

localStorageService.inputListToLocalStorage('one', list2);
localStorageService.inputElementToLocalStorageByKey('one', 26);

// localStorageService.delitListFromLocalStorageByKey('two');

// Сервисы

// Реализовать 2 класса-сервиса для работы с локальными хранилищами,
//  один для localStorage, второй sessionStorage.
// Каждый из сервисов должен иметь статические методы:
// получения списка элементов по ключу, ///
// получения 1 элемента по ключу и идентификатору,///
// добавление списка элементов по ключу, ///
// добавления 1 элемента в список по ключу, ///
// обновления списка по ключу,///
// обновление 1 элемента в списке по ключу,
// удаления списка по ключу, ///
// удаления элемента в списке по ключу и идентификатору.///
// Продемонстрировать работу сервиса.

class localStorageService {
	static addIdToElements(arrayOfElements) {
		const newList = arrayOfElements.slice(0);
		const objectFromList = {};
		newList.forEach(element => {
			const id = Date.now() * Math.random() * 100000;
			objectFromList[id] = element;
		});
		return objectFromList;
	}

	static inputList(key, list) {
		localStorage.setItem(key, JSON.stringify(list));
	}

	static inputElementByKey(key, value) {
		const list = JSON.parse(localStorage.getItem(key));
		list[Date.now() * Math.random() * 100000] = value;
		localStorage.setItem(key, JSON.stringify(list));
	}

	static getListByKey(key) {
		const localStorageList = JSON.parse(localStorage.getItem(key));
		return Object.values(localStorageList);
	}

	static getElementByKeyAndID(key, id) {
		if (!localStorage.getItem(key)) return 'Списка с таким ключем нет в localstorage';
		const localStorageList = JSON.parse(localStorage.getItem(key));
		const isID = {}.hasOwnProperty.call(localStorageList, id);
		return isID ? localStorageList[id] : 'Такого идентификатора не существует';
	}

	static updateList(key, newList) {
		localStorage.setItem(key, JSON.stringify(newList));
	}
	// ////////////////////////////////////////////////////////////
	static changeElementInObjectFromList(objectFromList, newElement, Id) {
		objectFromList[Id] = newElement;
		return objectFromList;
	}

	static updateElementByKey(key, objectFromList) {
		localStorage.setItem(key, JSON.stringify(objectFromList));
	}
	// ////////////////////////////////////////////////////////////
	// Либо другой вариант:
	static updateElementByKeyAndID(key, id, element) {
		if (!localStorage.getItem(key)) return 'Списка с таким ключем нет в localstorage';
		const localStorageList = JSON.parse(localStorage.getItem(key));
		const isID = {}.hasOwnProperty.call(localStorageList, id);
		isID ? localStorageList[id] = element : console.log('Такого идентификатора не существует');
		localStorage.setItem(key, JSON.stringify(localStorageList));
	}

	static delitListByKey(key) {
		return localStorage.removeItem(key);
	}

	static deleteElementByKeyAndID(key, id) {
		const localStorageList = JSON.parse(localStorage.getItem(key));
		const isID = {}.hasOwnProperty.call(localStorageList, id);
		if (isID) {
			delete localStorageList[id];
		}
		localStorage.setItem(key, JSON.stringify(localStorageList));
	}
}


const list = ['ooo', 'aaa', [1, 2, 3], 'ttt'];
const list2 = [8, 'lll', 'oooo', 5, { a: 'aaa', b: 'bbb' }];

const listWithId = localStorageService.addIdToElements(list);
const listWithId2 = localStorageService.addIdToElements(list2);

localStorageService.inputList('one', listWithId);
localStorageService.inputList('two', listWithId2);

console.log(localStorageService.getListByKey('one'));
console.log(localStorageService.getListByKey('two'));

localStorageService.inputElementByKey('one', 26);

console.log(localStorageService.getListByKey('one'));

// localStorageService.delitListByKey('two');

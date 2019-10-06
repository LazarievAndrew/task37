class sessionStorageService {
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
		sessionStorage.setItem(key, JSON.stringify(list));
	}

	static inputElementByKey(key, value) {
		const list = JSON.parse(localStorage.getItem(key));
		list[Date.now() * Math.random() * 100000] = value;
		sessionStorage.setItem(key, JSON.stringify(list));
	}

	static getListByKey(key) {
		const sessionStorageList = JSON.parse(sessionStorage.getItem(key));
		const list = Object.values(sessionStorageList);
		return list;
	}

	static getElementByKeyAndID(key, id) {
		if (!sessionStorage.getItem(key)) return 'Списка с таким ключем нет в sessionStorage';
		const sessionStorageList = JSON.parse(sessionStorage.getItem(key));
		const isID = {}.hasOwnProperty.call(sessionStorageList, id);
		return isID ? sessionStorageList[id] : 'Такого идентификатора не существует';
	}

	static updateList(key, newList) {
		sessionStorage.setItem(key, JSON.stringify(newList));
	}
	// ////////////////////////////////////////////////////////////
	static changeElementInObjectFromList(objectFromList, newElement, Id) {
		objectFromList[Id] = newElement;
		return objectFromList;
	}

	static updateElementByKey(key, objectFromList) {
		sessionStorage.setItem(key, JSON.stringify(objectFromList));
	}
	// ////////////////////////////////////////////////////////////
	// Либо другой вариант:
	static updateElementByKeyAndID(key, id, element) {
		if (!sessionStorage.getItem(key)) return 'Списка с таким ключем нет в sessionStorage';
		const sessionStorageList = JSON.parse(sessionStorage.getItem(key));
		const isID = {}.hasOwnProperty.call(sessionStorageList, id);
		isID ? sessionStorageList[id] = element : console.log('Такого идентификатора не существует');
		sessionStorage.setItem(key, JSON.stringify(sessionStorageList));
	}

	static delitByKey(key) {
		return sessionStorage.removeItem(key);
	}

	static deleteElementByKeyAndID(key, id) {
		const sessionStorageList = JSON.parse(sessionStorage.getItem(key));
		const isID = {}.hasOwnProperty.call(sessionStorageList, id);
		if (isID) {
			delete sessionStorageList[id];
		}
		sessionStorage.setItem(key, JSON.stringify(sessionStorageList));
	}
};

sessionStorageService.inputList('one', listWithId);
sessionStorageService.inputList('two', listWithId2);

console.log(sessionStorageService.getListByKey('one'));
console.log(sessionStorageService.getListByKey('two'));

sessionStorageService.inputElementByKey('one', 26);

console.log(sessionStorageService.getListByKey('one'));

// sessionStorageService.delitByKey('two');
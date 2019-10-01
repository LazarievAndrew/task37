import createID from './createID';

export default class localStorageService {
    static inputListToLocalStorage(key, list) {
        const newList = list.slice(0);
        const listObject = {};
        newList.forEach(element => {
            const id = createID();
            // let id = Date.now();//Не успевает обновиться значение,
            // можно использовать Date.now() * Math.random() * 100000;
            listObject[id] = element;
        });
        const value = JSON.stringify(listObject);
        localStorage.setItem(key, value);
    }

    static inputElementToLocalStorageByKey(key, value) {
        const list = JSON.parse(localStorage.getItem(key));
        list[createID()] = value;
        localStorage.setItem(key, JSON.stringify(list));
    }

    static getFromLocalStorageByKey(key) {
        const localStorageList = JSON.parse(localStorage.getItem(key));
        const list = Object.values(localStorageList);
        return list;
    }

    static getElementFromLocalStorageByKeyAndID(key, id) {
        const localStorageList = JSON.parse(localStorage.getItem(key));
        const isID = {}.hasOwnProperty.call(localStorageList, id); // eslint требует такую запись
        let element = 'Такого идентификатора не существует';
        if (isID) {
            element = localStorageList[id];
        }
        // еще один метод (вставить после JSON.parse(localStorage.getItem(key)) ///////////////////
        // const array = Object.entries(localStorageList);
        // for (let i = 0; i < array.length; i++) {
        //     let element = array[i];
        //     if (id === +element[0]) return element[1];
        // }
        // этот не работал (вставить после (const array = Object.entries(localStorageList));///////
        // array.forEach(element => {
        //     if (id === +element[0]) return element[1];
        // });
        // eslint-disable-next-line no-console
        return element;
    }

    // static updateListByKey(key, newList) {
    //     let localStorageList = JSON.parse(localStorage.getItem(key));
    //     const updatedList = Object.values(localStorageList);
    //     updatedList = newList;
    //     const listObject = {};
    //     newList.forEach(element => {
    //         const id = createID();
    //         listObject[id] = element;
    //     });
    //     const value = JSON.stringify(listObject);
    //     localStorage.setItem(key, value);
    // }

    static delitListByKey(key) {
        return localStorage.removeItem(key);
    }

    static deleteElementByKeyAndID(key, id) {
        const localStorageList = JSON.parse(localStorage.getItem(key));
        const isID = {}.hasOwnProperty.call(localStorageList, id);
        if (isID) {
            delete localStorageList[id];
        }
        return localStorage.setItem(key, JSON.stringify(localStorageList));
    }
}

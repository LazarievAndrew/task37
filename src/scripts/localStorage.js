import inputListToStorage from './inputListToStorage';
import inputElementToListInStorageByKey from './inputElementToListInStorageByKey';
import getListFromStorageByKey from './getListFromStorageByKey';
import getElementFromStorageByKeyAndID from './getElementFromStorageByKeyAndID';
import deleteElementFromStorageByKeyAndID from './deleteElementFromStorageByKeyAndID';

export default class localStorageService {
    static inputListToLocalStorage(key, list) {
        inputListToStorage(key, list);
    }

    static inputElementToLocalStorageByKey(key, value) {
        inputElementToListInStorageByKey(key, value);
    }

    static getListFromLocalStorageByKey(key) {
        return getListFromStorageByKey(key);
    }

    static getElementFromLocalStorageByKeyAndID(key, id) {
        getElementFromStorageByKeyAndID(key, id);
    }

    // static updateListByKey(key, newList) {
    //     let localStorageList = JSON.parse(localStorage.getItem(key));
    //     const updatedList = Object.values(localStorageList);
    //     updatedList = newList;
    //     const listObject = {};
    //     updatedList.forEach(element => {
    //         const id = createID();
    //         listObject[id] = element;
    //     });
    //     const value = JSON.stringify(listObject);
    //     localStorage.setItem(key, value);
    // }

    static delitListFromLocalStorageByKey(key) {
        return localStorage.removeItem(key);
    }

    static deleteElementFromLocalStorageByKeyAndID(key, id) {
        deleteElementFromStorageByKeyAndID(key, id);
    }
}

import createID from './createID';

export default function inputElementToListInStorageByKey(key, value) {
    const list = JSON.parse(localStorage.getItem(key));
    list[createID()] = value;
    localStorage.setItem(key, JSON.stringify(list));
}

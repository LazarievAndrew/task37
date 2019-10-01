
export default function deleteElementFromStorageByKeyAndID(key, id) {
    const localStorageList = JSON.parse(localStorage.getItem(key));
    const isID = {}.hasOwnProperty.call(localStorageList, id);
    if (isID) {
        delete localStorageList[id];
    }
    localStorage.setItem(key, JSON.stringify(localStorageList));
}


export default function getListFromStorageByKey(key) {
    const localStorageList = JSON.parse(localStorage.getItem(key));
    const list = Object.values(localStorageList);
    return list;
}

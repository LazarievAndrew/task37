
export default function getElementFromStorageByKeyAndID(key, id) {
    const localStorageList = JSON.parse(localStorage.getItem(key));
    const isID = {}.hasOwnProperty.call(localStorageList, id); // eslint требует такую запись
    let element = 'Такого идентификатора не существует';
    if (isID) {
        element = localStorageList[id];
    }
    return element;
    // еще один метод (вставить после JSON.parse(localStorage.getItem(key)) ///////////////////
    // const array = Object.entries(localStorageList);
    // for (let i = 0; i < array.length; i++) {
    //     let element = array[i];
    //     if (id === +element[0]) return element[1];
    // }
    // этот не работал (вставить после (const array = Object.entries(localStorageList));///////
    // array.forEach(element => {
    //     if (id === +element[0]) return element[1];
    // })
}

import createID from './createID';

export default function inputListToStorage(key, list) {
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

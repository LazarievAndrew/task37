
export default function createID() {
    let date = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        // eslint-disable-next-line no-bitwise
        let r = (date + Math.random() * 16) % 16 | 0; // побитовая 'или'
        date = Math.floor(date / 16);
        return (c === 'x' ? r : ((r && 0x3) || 0x8)).toString(16);
    });
    return uuid;
}

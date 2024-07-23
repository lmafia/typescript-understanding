


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'Mark' }, 'name'));



class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data]
    }

}

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
console.log(numberStorage);

const stringStorage = new DataStorage<string>();
stringStorage.addItem('A');
console.log(stringStorage);


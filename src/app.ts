class Thing {
    static default_size = 0;
    // static 静态成员属性和方法都是类的
    private _size: number = Thing.default_size;

    get size(): number {
        return this._size;
    }

    constructor (value?: number) {
        this.size = value;
    }


    set size(value: string | number | boolean | undefined) {
        let num = Number(value);

        // Don't allow NaN, Infinity, etc

        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }

        this._size = num;
    }
    static createNewThind = (size?: number): Thing => {
        return new Thing();

    }
}
let thing = Thing.createNewThind()
// setter  getter 不用括号, 不像是函数，像是一个属性
// thing.size = 1;
console.log(thing.size);


class Employee {
    private _fullName: string = '';

    // getter
    get fullName(): string {
        return this._fullName;
    }

    // setter
    set fullName(newName: string) {
        if (newName && newName.trim()) {
            this._fullName = newName;
        } else {
            throw Error('Invalid name provided.');
        }
    }
}

let employee = new Employee();
employee.fullName = 'John Doe'; // 设置 fullName，调用 setter
console.log(employee.fullName); // 获取 fullName，调用 getter，输出: John Doe

employee.fullName = ''; // 设置一个无效的 fullName，
console.log(employee.fullName); // 

"use strict";
class Thing {
    get size() {
        return this._size;
    }
    constructor(value) {
        // static 静态成员属性和方法都是类的
        this._size = Thing.default_size;
        this.size = value;
    }
    set size(value) {
        let num = Number(value);
        // Don't allow NaN, Infinity, etc
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
Thing.default_size = 0;
Thing.createNewThind = (size) => {
    return new Thing();
};
let thing = Thing.createNewThind();
// setter  getter 不用括号, 不像是函数，像是一个属性
// thing.size = 1;
console.log(thing.size);
class Employee {
    constructor() {
        this._fullName = '';
    }
    // getter
    get fullName() {
        return this._fullName;
    }
    // setter
    set fullName(newName) {
        if (newName && newName.trim()) {
            this._fullName = newName;
        }
        else {
            throw Error('Invalid name provided.');
        }
    }
}
let employee = new Employee();
employee.fullName = 'John Doe'; // 设置 fullName，调用 setter
console.log(employee.fullName); // 获取 fullName，调用 getter，输出: John Doe
employee.fullName = ''; // 设置一个无效的 fullName，
console.log(employee.fullName); // 

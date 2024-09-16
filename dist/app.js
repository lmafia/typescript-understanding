"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 类装饰器
function Logger(target) {
    console.log('I AM LOGGER!');
    console.log(`Class ${target.name} is being decorated.`);
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    Logger
], Person);
const persion = new Person("Mike");
function LogMethod(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    // 当方法执行会从这个方法入口执行
    descriptor.value = function (...args) {
        console.log(`Method ${propertyKey} is being called with args: ${args}`);
        return originalMethod.apply(this, args);
    };
}
class Calculator {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    LogMethod
], Calculator.prototype, "add", null);
const calc = new Calculator();
calc.add(1, 2); // Logs: Method add is being called with args: 1,2
function LogAccessor(target, propertyKey, descriptor) {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;
    descriptor.get = function () {
        console.log(`Getter for ${propertyKey} is being called.`);
        return originalGet === null || originalGet === void 0 ? void 0 : originalGet.apply(this);
    };
    descriptor.set = function (value) {
        console.log(`Setter for ${propertyKey} is being called with value: ${value}`);
        originalSet === null || originalSet === void 0 ? void 0 : originalSet.apply(this, [value]);
    };
}
class User {
    constructor() {
        this._name = '';
    }
    get name() {
        return this._name;
    }
    // @LogMethod
    set name(value) {
        this._name = value;
    }
}
__decorate([
    LogAccessor
], User.prototype, "name", null);
const user = new User();
user.name = 'Alice'; // Logs: Setter for name is being called with value: Alice
console.log(user.name); // Logs: Getter for name is being called.
function Readonly(target, propertyKey) {
    const descriptor = {
        writable: false,
        configurable: false,
        enumerable: false
    };
    Object.defineProperty(target, propertyKey, descriptor);
}
class Product {
    constructor() {
        this.name = '12313213';
    }
}
__decorate([
    Readonly
], Product.prototype, "name", void 0);
try {
    const product = new Product();
    console.log(product.name);
}
catch (e) {
    // 无法初始化了，证明初始的赋值前已经被改为只读了
    console.error(e);
}
function LogParameter(target, propertyKey, parameterIndex) {
    // Parameter 0 of greet in Mebmber is decorated.
    console.log(target);
    console.log(`Parameter ${parameterIndex} of ${propertyKey} in ${target.constructor.name} is decorated.`);
}
class Mebmber {
    greet(message) {
        console.log(message);
    }
}
__decorate([
    __param(0, LogParameter)
], Mebmber.prototype, "greet", null);
const p = new Mebmber();
p.greet('Hello, World!');
function Autobind(target, propertyKey, descriptor) {
    console.log(target);
    console.log(`propertyKey:${propertyKey}`);
    console.log(descriptor);
    const originalMethod = descriptor.value;
    const adjMethod = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjMethod;
}
class Printer {
    constructor() {
        this.message = 'This works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const printer = new Printer();
const button = document.querySelector('button');
button.addEventListener('click', printer.showMessage);

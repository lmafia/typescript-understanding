// 类装饰器
function Logger(target: Function) {
    console.log('I AM LOGGER!');
    console.log(`Class ${target.name} is being decorated.`);
}

@Logger
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const persion = new Person("Mike");


function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    // 当方法执行会从这个方法入口执行
    descriptor.value = function (...args: any[]) {
        console.log(`Method ${propertyKey} is being called with args: ${args}`);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod
    add(a: number, b: number) {
        return a + b;
    }
}

const calc = new Calculator();
calc.add(1, 2); // Logs: Method add is being called with args: 1,2


function LogAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGet = descriptor.get;
    const originalSet = descriptor.set;

    descriptor.get = function () {
        console.log(`Getter for ${propertyKey} is being called.`);
        return originalGet?.apply(this);
    };


    descriptor.set = function (value: any) {
        console.log(`Setter for ${propertyKey} is being called with value: ${value}`);
        originalSet?.apply(this, [value]);
    };
}

class User {
    private _name: string = '';

    @LogAccessor
    get name() {
        return this._name;
    }

    // @LogMethod
    set name(value: string) {
        this._name = value;
    }
}

const user = new User();
user.name = 'Alice'; // Logs: Setter for name is being called with value: Alice
console.log(user.name); // Logs: Getter for name is being called.


function Readonly(target: any, propertyKey: string) {


    const descriptor: PropertyDescriptor = {
        writable: false,
        configurable: false,
        enumerable: false
    };

    Object.defineProperty(target, propertyKey, descriptor);
}

class Product {

    @Readonly
    name: string = '12313213';
}

try {
    const product = new Product();
    console.log(product.name);

} catch (e) {
    // 无法初始化了，证明初始的赋值前已经被改为只读了
    console.error(e);
}

function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    // Parameter 0 of greet in Mebmber is decorated.
    console.log(target);

    console.log(`Parameter ${parameterIndex} of ${propertyKey} in ${target.constructor.name} is decorated.`);
}

class Mebmber {
    greet(@LogParameter message: string) {
        console.log(message);
    }
}

const p = new Mebmber();
p.greet('Hello, World!');


function Autobind(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(`propertyKey:${propertyKey}`);
    console.log(descriptor);
    const originalMethod = descriptor.value;
    const adjMethod: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjMethod;
}

class Printer {
    message = 'This works!';

    @Autobind
    showMessage() {
        console.log(this.message);

    }
}

const printer = new Printer()
const button = document.querySelector('button')!;
button.addEventListener('click', printer.showMessage)



class Person {
    // 属性定义
    name: string;
    age: number;

    // 构造函数
    constructor (name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // 方法
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// 创建类的实例
let person1 = new Person('Alice', 30);

console.log(person1.greet());
// 输出: Hello, my name is Alice and I am 30 years old.

class Student extends Person {
    major: string;

    constructor (name: string, age: number, major: string) {
        super(name, age); // 调用父类的构造函数
        this.major = major;
    }

    // 重写父类的方法
    greet() {
        // 先调用父类方法
        super.greet()
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and I study ${this.major}.`;
    }

    // 新方法
    study() {
        console.log(`${this.name} is studying ${this.major}.`);
    }
}

let student1 = new Student('Bob', 25, 'Computer Science');
console.log(student1.greet());
// 输出: Hello, my name is Bob, I am 25 years old, and I study Computer Science.
student1.study();
// 输出: Bob is studying Computer Science.
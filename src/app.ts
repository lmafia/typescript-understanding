interface Person {
    name: string;
    age?: number; // 年龄是可选的
    gender?: string; // 性别是可选的
}

// 可选属性影响匿名类和构造
let person1: Person = { name: 'Alice' };
let person2: Person = { name: 'Bob', age: 30 };
let person3: Person = { name: 'Charlie', gender: 'male' };

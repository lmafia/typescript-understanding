"use strict";
function logLength(x) {
    if (typeof x === 'string') {
        console.log(x.length); // x 在这个分支被 TypeScript 编译器识别为 string 类型
    }
    else {
        console.log(x.toFixed(2)); // x 在这个分支被 TypeScript 编译器识别为 number 类型
    }
}
logLength("hello"); // 输出: 5
logLength(3.14159); // 输出: 3.14
class Car {
    drive() {
        console.log("Driving the car");
    }
}
class Truck {
    drive() {
        console.log("Driving the truck");
    }
    loadCargo() {
        console.log("Loading cargo");
    }
}
function driveVehicle(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive(); // TypeScript 确定 vehicle 是 Car 类型
    }
    else {
        vehicle.drive(); // TypeScript 确定 vehicle 是 Truck 类型
        vehicle.loadCargo(); // TypeScript 确定 vehicle 是 Truck 类型
    }
}
driveVehicle(new Car()); // 输出: Driving the car
driveVehicle(new Truck()); // 输出: Driving the truck \n Loading cargo
// pet is Bird 和单纯的 boolean 类型不一样
// ts 可通过它来推导类型
function isBird(pet) {
    return pet.fly !== undefined;
}
function move(pet) {
    if (isBird(pet)) {
        pet.fly(); // TypeScript 确定 pet 是 Bird 类型
    }
    else {
        pet.swim(); // TypeScript 确定 pet 是 Fish 类型
    }
}
function printPersonInfo(person) {
    if ('age' in person) {
        console.log(`${person.name} is ${person.age} years old.`);
    }
    else {
        console.log(`${person.name}'s age is unknown.`);
    }
}
let person1 = { name: 'Alice', age: 30 };
let person2 = { name: 'Bob' };
printPersonInfo(person1); // 输出: Alice is 30 years old.
printPersonInfo(person2); // 输出: Bob's age is unknown.

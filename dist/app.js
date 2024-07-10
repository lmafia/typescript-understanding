"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 等同于 sum(1, 2, 3)
const printDetails = (name, age) => {
    console.log(`${name} is ${age} years old`);
};
let person = { name: 'Alice', age: 30 };
let _a = { a: 1, b: 2, c: 3 }, { a } = _a, rest = __rest(_a, ["a"]);
console.log(a);
console.log(rest);
function sumRest(...rest) {
    return rest.reduce((acc, currentValue) => acc + currentValue, 0);
}
console.log(`rest-array: ${sumRest(1, 2, 3)}`);
console.log(`rest-rest: ${sumRest(...numbers)}`);

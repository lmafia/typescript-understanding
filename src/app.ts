// Optional Chaining
interface Person {
    name?: string;
    age?: number;
}

let person: Person | null = {};

// 使用可选链操作符访问对象属性
console.log(person?.name);  // 输出 undefined，而不是抛出错误

// Nullish Coalesing
let defaultName = "Guest";
const emptyString = ''
// 空字符串也认为是 false 
console.log(emptyString || defaultName);
// ?? 只判断 null 和 undefined 所以空串不认为是空
console.log(emptyString ?? defaultName);
// 只有 undefined 或 null 
console.log(null ?? defaultName);



// 使用空值合并运算符来选择默认值
let displayName = person?.name ?? defaultName;

console.log(displayName);  // 输出 "Guest"，因为 name 是 null
console.log(person.name ?? defaultName);
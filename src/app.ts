function sum(x: number, y: number, z: number): number {
    return x + y + z;
}

const numbers: [number, number, number] = [1, 2, 3];

console.log(sum(...numbers)); // 等同于 sum(1, 2, 3)

const printDetails = (name: string, age: number) => {
    console.log(`${name} is ${age} years old`);
}

let person = { name: 'Alice', age: 30 };

let { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(a);
console.log(rest);


function sumRest(...rest: number[]): number {
    return rest.reduce(
        (acc, currentValue) =>
            acc + currentValue, 0);
}
console.log(`rest-array: ${sumRest(1, 2, 3)}`);
console.log(`rest-rest: ${sumRest(...numbers)}`);


function combine(
    input1: number | string,
    input2: number | string,
    conversion: 'as-text' | 'as-number'
): number | string {
    if (typeof input1 === 'number' && typeof input2 === 'number'
        || conversion === 'as-number') {
        return +input1 + +input2; // + 是一元操作符号
    }
    return input1.toString() + input2.toString();
}

console.log('1. combine:', combine(3, 2, 'as-number'));


console.log('2. combine:', combine('3', '2', 'as-text'));

console.log('3. combine:', combine('3', 2, 'as-number'));

console.log('3. combine:', combine(3, '2', 'as-text'));


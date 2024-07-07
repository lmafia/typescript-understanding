function combine(input1: number | string, input2: number | string): number | string {
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    return input1.toString() + input2.toString();
}

console.log('1. combine:', combine(3, 2));


console.log('2. combine:', combine('3', '2'));

console.log('3. combine:', combine('3', 2));

console.log('3. combine:', combine(3, '2'));


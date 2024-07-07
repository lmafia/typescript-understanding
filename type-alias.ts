type Combinable = number | string;
type ConversionDescriptor = 'as-text' | 'as-number';

function combine(
    input1: Combinable,
    input2: Combinable,
    conversion: ConversionDescriptor
): Combinable {
    if (typeof input1 === 'number' && typeof input2 === 'number'
        || conversion === 'as-number') {
        return +input1 + +input2;
    }
    return input1.toString() + input2.toString();
}

console.log('1. combine:', combine(3, 2, 'as-number'));


console.log('2. combine:', combine('3', '2', 'as-text'));

console.log('3. combine:', combine('3', 2, 'as-number'));

console.log('3. combine:', combine(3, '2', 'as-text'));


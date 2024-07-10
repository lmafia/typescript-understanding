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

function print(result: Combinable): void {
    console.log('Result: ' + result);
}

console.log('1. combine:', combine(3, 2, 'as-number'));

// 把 Funtion 作为变量
// let combineValue: Function;
// 声明 Funciton 变量的限制
let combineValue: (arg1: Combinable,
    arg2: Combinable,
    arg3: ConversionDescriptor) => Combinable;
combineValue = combine;


console.log('1. combineValue:', combineValue(3, 2, 'as-number'));


// combineValue = print;

console.log('2. combineValue:', combineValue(3, 2, 'as-number'));

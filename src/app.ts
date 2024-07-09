let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max'
const constVaraible = '123';

// userName = userInput; // Error: Type 'unknown' is not assignable to type 'string'.

if (typeof userInput === 'string') {
    userName = userInput;
}





// 抛出异常从不会返回任何东西
function generateError(message: string): never {
    throw { message: message }
}

generateError('An error');

// 无限循环也不会返回任何东西
function infiniteLoop(): never {
    while (true) {
        // do something indefinitely
    }
}

let unreachable: never;
// unreachable = 5; // Error: Type '5' is not assignable to type 'never'.

unreachable = generateError("Something went wrong"); // OK

unreachable = infiniteLoop(); // OK


interface ErrorContainer {
    [porp: string]: string;
}
const errorContainer: ErrorContainer = {
    email: 'Not a vail email!',
    userName: 'Must start with a captial character!'
    // etc
}

interface StringIndexed {
    [key: string]: string | number;

    // 可以定义一些已知的属性
    name: string;
    age: number;
}

const obj: StringIndexed = {
    name: "Alice",
    age: 30,
    address: "",
    city: "Wonderland"  // 允许添加额外的属性
};

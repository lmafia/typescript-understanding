function add(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(result: number): void {
    console.log('Result: ' + result);
}

// 在方法里添加回调方法
function addAndHandle(n1: number, n2: number,
    callback: (num: number) => void) {
    const result = add(n1, n2);
    callback(result);
}

addAndHandle(11, 22, printResult);

addAndHandle(11, 22, (result) => {
    console.log('Result: ' + result);
});

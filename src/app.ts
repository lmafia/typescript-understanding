function test(x: string): void;
function test(x: number): void;
function test(x: any): void {
    console.log(x); // 实现函数要兼容所有函数签名
}

test("Hello");  // 调用第一个重载，输出 "Hello"
test(123);      // 调用第二个重载，输出 123
test(true);     // 参数类型 boolean 不匹配任何重载签名，会报错

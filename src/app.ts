const names: string[] = [''];

names[0].split('');

// 内置的数组 interface 结合泛型
const nameArray: Array<string> = [''];
nameArray[0].split('');


const promise: Promise<string> =
    new Promise((resolve, reject) => {
        // setTimeout 是 js 内部的定时器, 处理函数、delay、可变参数（作为处理函数的参数）
        setTimeout((n1: number, n2: number, n3: number) => {
            console.log(n1 + n2 + n3);

            let data = 'Fetch Data From Server';
            if (data) {
                resolve(data);  // 如果成功，调用 resolve 并传递数据
            } else {
                reject(new Error('Failed to fetch data'));  // 如果失败，调用 reject 并传递错误信息
            }
        }, 1000, 1, 2, 3);
    });

promise
    .then(data => {
        console.log(data);
        return data.split(' ');
    })
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Promise rejected:", error); // 如果发生错误则输出错误信息
    });
class Department {
    name: string;

    constructor (name: string) {
        this.name = name;
    }


    // 保证了 this 永远是指向当前实例
    process(this: Department) {
        console.log(`${this.name} processing`);
    }

    // 添加了这个方法, 就允许丢失 this 的情况
    // 所以上面的写法可以在编程阶段减少错误出现
    processMissThis() {
        console.log(`${this.name} processing`);
    }
}

const accounting = new Department('Accounting')
console.log(accounting);
accounting.process();


const development = {
    // name: "Development",
    process: accounting.process,
    processMissThis: accounting.processMissThis
};

development.processMissThis();

console.log(development);

class Person {
    private readonly name: string;

    constructor (name: string) {
        this.name = name;
    }

    changeName(newName: string) {
        // 错误：Cannot assign to 'name' because it is a read-only property.
        // this.name = newName;
    }
    getName(): string {
        return this.name;
    }
}

let person = new Person('Alice');
console.log(person.getName()); // 输出: Alice

// 错误：Cannot assign to 'name' because it is a read-only property.
// person.name = 'Bob';

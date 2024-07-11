abstract class Animal {
    abstract makeSound(): void;

    move(): void {
        console.log('Moving...');
    }
}

class Dog extends Animal {
    // 一定需要实现方法
    makeSound() {
        console.log('Bark bark!');
    }
}

let dog = new Dog();
dog.makeSound(); // 输出: Bark bark!
dog.move(); // 输出: Moving...
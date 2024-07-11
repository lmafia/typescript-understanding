class Car {
    //   public(默认) 、 protect、private 
    private speed: number;

    constructor (speed: number) {
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
    }

    getSpeed() {
        return this.speed;
    }
}

let car1 = new Car(60);
car1.accelerate();
console.log(car1.getSpeed()); // 输出: 70

// 编译错误，因为 speed 是私有的属性，不能在外部访问
// console.log(car1.speed);

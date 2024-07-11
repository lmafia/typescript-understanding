interface Shape {
    color: string;
    area(): number;
}

class Circle implements Shape {
    color: string;

    constructor (color: string) {
        this.color = color;
    }

    area() {
        return Math.PI * 2; // 假设简单地返回了圆的周长
    }
}

let circle = new Circle('red');
console.log(circle.area()); // 输出: 6.283185307179586

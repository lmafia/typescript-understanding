class Factory {
    private static instance: Factory;
    private constructor () {
    }

    static getInstance(): Factory {
        if (Factory.instance) {
            console.log('factory init...');
            return Factory.instance;
        }
        Factory.instance = new Factory();
        return Factory.instance;
    }
    produce(): string {
        return "A good"
    }
}

const factory = Factory.getInstance()
const factory1 = Factory.getInstance()

console.log(factory.produce());
console.log(factory1.produce());

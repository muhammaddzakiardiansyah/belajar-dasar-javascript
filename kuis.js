class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }

    swim() {
        return `${this.name} sedang berenang!`
    }
}

class Rabbit extends Animal {
    constructor(name, age, isMammal = true) {
        super(name, age)
        this.isMammal = isMammal;
    }

    eat() {
        return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal {
    constructor(name, age, isMammal = false) {
        super(name, age)
        this.isMammal = isMammal;
    }

    fly() {
        return `${this.name} sedang terbang! ${this.swim()}`
    }
}

class Evryone extends Eagle {
    mamam() {
        return `Elang ku ${this.fly()}`
    }
}


const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4)

console.log(myRabbit.eat(), myEagle.fly())
//console.log(myEagle.mamam())

class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power
    }

    attack() {
        return this.power
    }

    defend(damage) {
        console.log(`Life remaining: ${this.life - damage}`)
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power)
    }

    drinkColacao() {
        console.log(`El poder del maya es de: ${this.power += 10}`);
        this.power += 10;
    }
}

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power)
    }

    drinkNesquik() {
        console.log(`La vida del azteca es de: ${this.life += 10}`);
        this.life += 10
    }
}

let aztec = new Aztec(70, 50)
let maya = new Maya(50, 30)

aztec.drinkNesquik()
maya.drinkColacao()

aztec.defend(maya.attack());
maya.defend(aztec.attack())
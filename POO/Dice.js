class Dice{
    constructor(dice){
        this.dice = dice
    }

    Roll(){
        let min = Math.ceil(1)
        let max = Math.floor(this.dice)
        let result = Math.floor(Math.random() * (max - min)) + min
        console.log(result)
    }
}

let d2 = new Dice(2)
d2.Roll()
let d4 = new Dice(4)
d4.Roll()
let d6 = new Dice(6)
d6.Roll()
let d8 = new Dice(8)
d8.Roll()
let d10 = new Dice(10)
d10.Roll()
let d12 = new Dice(12)
d12.Roll()
let d20 = new Dice(20)
d20.Roll()
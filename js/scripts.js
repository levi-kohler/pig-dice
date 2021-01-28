// Business Logic

function Dice(roll) {
this.roll = roll
}

Dice.prototype.rollDice = function() {
return Math.floor((Math.random() * 6) + 1);
}



// UI Logic

let roll1 = new Dice()
roll1.rollDice()
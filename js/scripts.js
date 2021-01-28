// Business Logic

function Dice(roll) {
this.roll = roll;
}

function Player(name) {
  this.name = name
  this.turnScore = 0;
  this.totalScore = 0;
}

Dice.prototype.rollDice = function() {
let dice = Math.floor((Math.random() * 6) + 1);
if (dice > 1) {
  return dice;
} else {
  return false;
}
}



// UI Logic
$(document).ready(function() {

  $("#go").click(function() {
  let roll1 = new Dice();
  let roll1loss = function() {
    let roll = roll1.rollDice();
    if (roll === false) {
      return "GAME OVER MAAAN"
    } else {
      return roll;
    }
  }
  $("#output").text(roll1loss);
  });
});
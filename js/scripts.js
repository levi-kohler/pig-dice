// Business Logic

function Dice(roll) {
  this.roll = roll;
}

function Player(name) {
  this.name = name
  this.turnScore = 0;
  this.totalScore = 0;
}

Player.prototype.addScore = function() {
  this.totalScore += score;
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
  let dice = new Dice();
  let player1 = new Player();
  let player2 = new Player();
  let player1Total = 0;
  let player2Total = 0;
  
  $("#go").click(function() {
    let roll1 = function() {
      let roll = dice.rollDice();
      if (roll === false) {
        return "GAME OVER MAAAN"
      } else {
        return player1Total += roll;
      }
    }
  $("#output").text(roll1);
  });
});
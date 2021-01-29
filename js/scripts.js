// Business Logic
let rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

function Player() {
  this.roll = 0;
  this.roundScore = 0;
  this.totalScore = 0;
}

//check if player rolled 1
Player.prototype.rollOne = function() { 
  if (this.roll === 1) {
  return this.roundScore = 0;
  } else {
  return this.roundScore += this.roll;
  }
}

//math for if the player holds
Player.prototype.hold = function () {
  this.totalScore += this.roundScore;
  this.roundScore = 0;
}

//math for checking for winner
Player.prototype.checkWin = function() {
  if (this.totalScore >= 100) {
    alert("You won!")
  }
}


// UI Logic -----------------------------------------------------------
$(document).ready(function() {
  let player1 = new Player();
  let player2 = new Player();


  
  $("button#player1roll").click(function(event) {
    player1.roll = rollDice();
    $("#diceroll1").text(player1.roll);
    player1.rollOne();
    $("#roundscore1").text(player1.roundScore);
    if (player1.roundScore === 0) {
      $("button#player1roll").hide();
      $("button#player1hold").hide();
      $("button#player2roll").show();
      $("button#player2hold").show();
      }
  });

  $("button#player1hold").click(function(event) {
    player1.hold();
    $("#totalscore1").text(player1.totalScore);
    $("#roundscore1").empty();
    $("#diceroll1").empty();
    player1.checkWin();
    $("button#player1roll").hide();
    $("button#player1hold").hide();
    $("button#player2roll").show();
    $("button#player2hold").show();
    
  });
  $("button#player2roll").click(function(event) {
    player2.roll = rollDice();
    $("#diceroll2").text(player2.roll);
    player2.rollOne()
    $("#roundscore2").text(player2.roundScore);
    if (player2.roundScore === 0) {
      $("button#player1roll").show();
      $("button#player1hold").show();
      $("button#player2roll").hide();
      $("button#player2hold").hide();
    }
  });
  $("button#player2hold").click(function(event) {
    player2.hold();
    $("#totalscore2").text(player2.totalScore);
    $("#roundscore2").empty();
    $("#diceroll2").empty();
    player2.checkWin();
    $("button#player1roll").show();
    $("button#player1hold").show();
    $("button#player2roll").hide();
    $("button#player2hold").hide();
  })
});
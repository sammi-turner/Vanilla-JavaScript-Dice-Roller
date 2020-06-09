var diceNum = 1;
var dieType = 4;
var result = 0;

function rollDice() {
  var i;
  var roll;
  result = 0;
  for (i = 0; i < diceNum; i++) {
    roll = Math.ceil(Math.random() * dieType);
    result += roll;
  }
  document.getElementById("result").innerHTML = `${result}`
}

function upNum() {
  diceNum++;
  document.getElementById("diceNum").innerHTML = `roll ${diceNum}`
}

function downNum() {
  diceNum--;
  if (diceNum < 1) {
    diceNum = 1;
  }
  document.getElementById("diceNum").innerHTML = `roll ${diceNum}`
}

function upType() {
  dieType += 2;
  if (dieType == 102) {
    dieType = 4;
  }
  if (dieType == 22) {
    dieType = 100;
  }
  if (dieType == 14) {
    dieType = 20;
  }
  document.getElementById("dieType").innerHTML = `d${dieType}`
}

function downType() {
  dieType -= 2;
  if (dieType == 98) {
    dieType = 20;
  }
  if (dieType == 18) {
    dieType = 12;
  }
  if (dieType == 2) {
    dieType = 100;
  }
  document.getElementById("dieType").innerHTML = `d${dieType}`
}

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage ="images/dice" +randomNumber1 +".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "images/dice" +randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);



if (randomNumber1 === randomNumber2) {

document.querySelector("h1").innerHTML = "Draw!";

}
else if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "Ademola wins!";

}
else{

  document.querySelector("h1").innerHTML = "Omolola  wins!";
}



/*****let dice1 = getRandom();
let image1 = "images/dice" + dice1 + ".png";

let dice2 = getRandom();
let image2 = "images/dice" + dice2 + ".png";

// update element's visual (attributes)
document.getElementsByClassName("img1")[0].setAttribute("src", image1)
document.getElementsByClassName("img2")[0].setAttribute("src", image2)
document.getElementsByTagName("h1")[0].textContent = hailWinner(dice1, dice2);

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function hailWinner(dice1, dice2) {
  if (dice1 === dice2) {
    return "It's a draw!";
  }

  if (dice1 > dice2) {
    return "Player 1 wins!";
  }

  return "Player 2 wins!"
}
****/

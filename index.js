
var randomNumber1 = 6;
var randomNumber2 = 6;

document.querySelector("button.btn").addEventListener("click", function () {


var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("div h1").textContent = "First Gambler Wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("div h1").textContent = "Second Gambler Wins!";
} else {
  document.querySelector("div h1").textContent = "Draw!";
}
});

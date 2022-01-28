// For player1 change images

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImagesource = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImagesource);

// for player2 change images

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImagesource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImagesource2);

// player 1 wins

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won";
}

// player 2 wins

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 won";
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}
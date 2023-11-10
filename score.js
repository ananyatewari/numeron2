// Iteration 8: Making scoreboard functional
var finalScore = document.getElementById("score-board");
const playAgain = document.getElementById("play-again-button");

var score = localStorage.getItem("score");

finalScore.innerHTML = score;

playAgain.addEventListener ("click", () => {
    window.location.href = "./game.html"
}) //done :D
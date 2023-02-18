var win = document.querySelector(".win");
var lose = document.querySelector(".loss");
var timerElement = document.querySelector(".timer");
var beginButton = document.querySelector(".begin-button");
var resetButton = document.querySelector(".reset-button");
var quiz = document.querySelector(".quiz-card");

var winCounter = 0;
var loseCounter = 0;
var timer;
var timerTime;
var didWin = false;
var corrAns;

function init() {
    getWins();
    getLosses();
}

function beginGame() {
    didWin = false;
    timerTime = 60;
    
    timerStart()
}

function getWins() {
    var storWin = localStorage.getItem("win");

    if (storWin === null) {
        winCounter = 0;
    }   else {
        winCounter = storWin;
    }
    // Win message
}

function win() {
    if (corrAns === 5) {
    winCounter + 1;
    }
}

function getLosses() {
    var storWin = localStorage.getItem("loss");

    if (storLoss === null) {
        winCounter = 0;
    }   else {
        loseCounter = storWin;
    }
    // Lose message
}

function lose() {
    if (corrAns < 5) {
    loseCounter = 0;
    }
}

function timerStart() {
    timer = setInterval(function() {
        timerTime - 1;
        timerElement.textContent = timerTime;
        if (timerTime >= 0) {
            if (didWin && timerTime >0) {
            // Log time as score
            // Answer win
            }
        }

        if (timerTime === 0) {
            clearInterval(timer);
            // End game
        }
    }, 1000);
}

beginButton.addEventListener("click", beginGame);
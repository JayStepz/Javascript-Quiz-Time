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

var QAs = [QA1, QA2, QA3, QA4, QA5];

const QA1 = {
    question: "Is JavaScript case-sensitive?",
    answers: {
    a: "Yes",
    b: "No",
    c: "Only variables",
    d: "Only functions"
    },
    correctAnswer: "a"
}

const QA2 = {
    question:"How do you add a comment in JavaScript?",
    answers: {
    a:"<!--Comment Here-->",
    b:"//Comment Here",
    c:"#Comment Here",
    d:"(Comment Here)",
    },
    correctAnswer: "b"
}

const QA3 = {
    question:"Which one of these is not a data type?",
    answers: {
    a:"String",
    b:"Object",
    c:"Prompt",
    d:"Boolean",
    },
    correctAnswer: "c"
}

const QA4 = {
    question:"Arrays in Javascript can be used to store:",
    answers: {
    a:"Strings and Numbers",
    b:"Other arrays",
    c:"Booleans",
    d:"All of the above",
    },
    correctAnswer: "d"
}

const QA5 = {
    question:"An if/then statement must be wrapped in one of these.",
    answers: {
    a:"()",
    b:"{}",
    c:"[]",
    d:"<>",
    },
    correctAnswer: "b"
}

/*function displayQA {
    chosenQA = QAs[Math.floor(Math.random() * QAs.length)];

    for (var i = 0; i < QAs.length; i++) {

    }
}*/

/*function scoreTable {

}*/

function init() {
    getWins();
    getLosses();
}

function beginGame() {
    didWin = false;
    timerTime = 60;
    timerStart()
    displayQA()
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
            win();
            
            }
        }

        if (timerTime === 0) {
            clearInterval(timer);
            // End game
        }
    }, 1000);
}

beginButton.addEventListener("click", beginGame);

init();
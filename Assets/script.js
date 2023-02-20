var correct = document.querySelector("correct");
var lose = document.querySelector("incorrect");
var timerElement = document.querySelector("timer");
var beginButton = document.querySelector("begin-button");
var resetButton = document.querySelector("reset-button");
var viewButton = document.querySelector("view-scores");
var quiz = document.querySelector("quiz-card");

var timer;
var timerCount;
var corrAns;

/* var QAs = [
    {
    question: "Is JavaScript case-sensitive?",
    answers: {
    a: "Yes",
    b: "No",
    c: "Only variables",
    d: "Only functions"
    },
    correctAnswer: "a"
},

{
    question:"How do you add a comment in JavaScript?",
    answers: {
    a:"<!--Comment Here-->",
    b:"//Comment Here",
    c:"#Comment Here",
    d:"(Comment Here)",
    },
    correctAnswer: "b"
},

 {
    question:"Which one of these is not a data type?",
    answers: {
    a:"String",
    b:"Object",
    c:"Prompt",
    d:"Boolean",
    },
    correctAnswer: "c"
},

{
    question:"Arrays in Javascript can be used to store:",
    answers: {
    a:"Strings and Numbers",
    b:"Other arrays",
    c:"Booleans",
    d:"All of the above",
    },
    correctAnswer: "d"
},

{
    question:"An if/then statement must be wrapped in one of these.",
    answers: {
    a:"()",
    b:"{}",
    c:"[]",
    d:"<>",
    },
    correctAnswer: "b"
}
]*/

/*function displayQA {
    var chosenQA = QAs[Math.floor(Math.random() * QAs.length)];

    for (var i = 0; i < QAs.length; i++) {

    }
}*/

function beginQuiz() {
    timerTime = 60;
    timerStart()
    displayQA()
}

function timerStart() {
    timer = setInterval(function() {
        timerCount --;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (timerCount >0) {
            // Log time as score
            }
        }

        if (timerCount === 0) {
            clearInterval(timer);
            // End game
        }
    }, 1000);
}

init();

beginButton.addEventListener("click", beginGame);
resetButton.addEventListener("click", )
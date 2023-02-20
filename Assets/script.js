var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timer = document.querySelector(".timer");
var beginButton = document.querySelector(".begin-button");
var resetButton = document.querySelector(".reset-button");
var viewButton = document.querySelector(".view-scores");
var quiz = document.querySelector(".quiz-card");
var timerCount = 3;
var count = 0;
var corrAns;

 var QAs = [
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
]



function displayQA() {
    quiz.textContent = QAs[count].question;

    QAs[count].answer.forEach(function(answer, index) {
        var button = document.createElement("button");
        quiz.appendChild(button);
        button.setAttribute(id, "a" + index);
        console.log(button);
    }); 
    //(var i = 0; i < 4; i++) {
        //var button = document.createElement("button");
        //quiz.appendChild(button);
        //button.innerHTML = "TEST";
    //}
    
    /*var chosenQA = QAs[Math.floor(Math.random() * QAs.length)];

    QAs.forEach(QAs => {
        
    }); (var i = 0; i < QAs.length; i++) {

    }*/
}

function beginQuiz() {
    timerStart()
    displayQA()
}

function timerStart() {
    timerElement = setInterval(function() {
        timerCount --;
        timer.textContent = timerCount + " seconds remaining";

        /*if (timerCount >= 0) {
            if (timerCount >0) {
            clearInterval(timerElement);
            //finQuiz();
            }
        }*/

        if (timerCount === 0) {
            clearInterval(timerElement);
            timer.textContent = "Time is up!";
            //endQuiz();
        }
    }, 1000);
}

//finQuiz();

//endQuiz();

beginButton.addEventListener("click", beginQuiz);
//resetButton.addEventListener("click", )
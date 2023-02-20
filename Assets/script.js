var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timer = document.querySelector(".timer");
var beginButton = document.querySelector(".begin-button");
var resetButton = document.querySelector(".reset-button");
var viewButton = document.querySelector(".view-scores");
var quiz = document.querySelector(".quiz-card");
var timerCount = 3;
var count = 0;
var ans;
var corrAns;
var wrongAns;

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

// For displaying the questions and answer choices after begin button click
function displayQA() {
    // Displays the question
    quiz.textContent = QAs[count].question;

    // Creates a loop to display the answer choices
    for (var i = 0; i < 4; i++) {
        // Creates each answer button
        var button = document.createElement("button");
        quiz.appendChild(button);
        
        // Assigns button ids to answer letters
        button.id = Object.keys(QAs[count].answers)[i];
        
        // Displays answer text inside the buttons
        button.textContent = QAs[count].answers[Object.keys(QAs[count].answers)[i]];
        
        // Adds click event listener to answer buttons
        button.addEventListener("click", function(event) {
            // Gets id of the clicked button
            var choiceAnswer = event.target.id;
            // Gets correct answer from current question
            var correctAnswer = QAs[count].correctAnswer;
            // Checks if correct or incorrect and displays related text
            if (choiceAnswer === correctAnswer && count < 4) {
                correct.textContent = "Correct";
                count++;
                displayQA();
            } 
            if (choiceAnswer !== correctAnswer && count < 4) {
                incorrect.textContent = "Incorrect";
                count++;
                timerCount = timerCount - 12;
                displayQA();
            }
        });
    }
}

// When Begin button is clicked
function beginQuiz() {
    // Timer starts
    timerStart()
    // First question displayed
    displayQA()
}

function resetQuiz() {
    // Clear and reset timer
    clearInterval(timerCount);
    timerCount = 3;
    timer.textContent = timerCount + " seconds remaining";

    // Clears quiz card
    quiz.textContent = "";
}

function timerStart() {
    timerElement = setInterval(function() {
        timerCount --;
        timer.textContent = timerCount + " seconds remaining";
        // If any time is left over and there is at least 1 answer...
        if (timerCount > 0 && ans > 0) {
            if (timerCount > 0) {
            clearInterval(timerElement);
            timer.textContent = "You finished!";
            finQuiz();
            }
        }
        // If there is no time left...
        if (timerCount === 0 && timerCount < 0) {
            clearInterval(timerElement);
            timer.textContent = "Time is up!";
        }
        // Disable Begin button after first click
        if (timerCount < 3) {
            beginButton.addEventListener("click", function(event) {
                event.target.disabled = true;
            });
        }
    }, 1000);
}

// For logging the score and user input
finQuiz() {
    // The score will be the time remaining
    var score = timerCount;
};

// Establishes the timer box when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    timer.textContent = timerCount + " seconds remaining";
}, false);

beginButton.addEventListener("click", beginQuiz);
resetButton.addEventListener("click", resetQuiz);
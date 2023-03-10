var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var timer = document.querySelector(".timer");
var beginButton = document.querySelector(".begin-button");
var resetButton = document.querySelector(".reset-button");
var viewButton = document.querySelector(".view-scores");
var quiz = document.querySelector(".quiz-card");
var timerCount = 60;
var count = 0;

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
            if (choiceAnswer === correctAnswer && count < 5) {
                correct.textContent = "Correct";
                count++;
                displayQA();
            } 
            if (choiceAnswer !== correctAnswer && count < 5) {
                incorrect.textContent = "Incorrect";
                count++;
                timerCount = timerCount - 12;
                displayQA();
            }
        });
    }
}

function displayScores() {
    var  initialsForm = document.createElement("form");

    initialsForm.innerHTML = '<label for="initials">Enter your initials:</label> <input type="text" id="initials" name="initials" required>';
    
    quiz.appendChild(initialsForm);
    console.log(score);
}

function viewScores() {}

// When Begin button is clicked
function beginQuiz() {
    // Timer starts
    timerStart()
    // First question displayed
    displayQA()
}

function resetQuiz() {
    // Clear and reset timer
    clearInterval(timerElement);
    timerCount = 60;
    timer.textContent = timerCount + " seconds remaining";

    // Clears quiz card
    quiz.textContent = "";

    // Clears div class "correct" and "incorrect"
    correct.textContent = "";
    incorrect.textContent = "";
}

/* function clearStorage() {
    localStorage.clear();
}*/

// For logging the score and user input
function finQuiz() {
    // Stop the timer
    clearInterval(timerElement);
    timer.textContent = "You finished!";
    quiz.textContent = "";

    // The score will be the time remaining
    var score = timerCount;

    // Log score to local storage
    localStorage.setItem("name", score);
    console.log(score);
    
    // Display Scores page
    displayScores();
};

function timerStart() {
    timerElement = setInterval(function(event) {
        // timerCount decreases by 1 each second
        timerCount --;
        // timerCount is displayed with message and kept updated
        timer.textContent = timerCount + " seconds remaining";
        // If any time is left over and all questions are answered
        if (timerCount > 0 && count === QAs.length) {
            // If the questions are answered and there is time remaining, the quiz finishes
            finQuiz();
        }
        // If there is no time left and not all the questions are answered
        if (timerCount <= 0 && count !== QAs.length) {
            // Timer stops
            clearInterval(timerElement);
            // Fail messages display
            timer.textContent = "Time is up!";
            quiz.textContent = "Click Reset Quiz and try again!";
        }
        // Disable Begin button after first click
        if (timerCount <= 60) {
            beginButton.addEventListener("click", function(event) {
                event.target.disabled = true;
            });
        }
    }, 1000);
}

// Establishes the timer box when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    timer.textContent = timerCount + " seconds remaining";
}, false);

// Enables Begin button after clicking Reset Quiz button
beginButton.addEventListener("click", function(event) {
    event.target.disabled = false;
});

// Enables Begin button function
beginButton.addEventListener("click", beginQuiz);

// Enables Reset Quiz button function
resetButton.addEventListener("click", resetQuiz);

// Enables View Scores button function
viewButton.addEventListener("click", viewScores);
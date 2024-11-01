// Question catalogue 
const questions = [
    {
    question: 'In your dream, what kind of environmenet were you in?',
        answers: [
            { text: 'A peaceful, familiar place', score: 4 },
            { text: 'A mysterious, unknown place', score: 3 },
            { text: 'A place filled with activity and people', score: 2 },
            { text: 'A calm, natural landscape', score: 1 },
        ]
}, 
{
    question: 'What were you doing?', 
    answers: [
        { text: 'Walking around exploring', score: 4}, 
        { text: 'Flying or floating above the scene', score: 3}, 
        { text: 'Running, possibly escaping from something', score: 2}, 
        { text: 'Standing still, possibly ovserving the situation', score: 2}
    ]
}

];


// Definition of Landing page variables 
const startButton = document.getElementById("start-button");
const startButtonContainer = document.getElementById("start-button-container");
const questionCard = document.getElementById("question-container");
const timerContainer = document.getElementById("timer-container");
const infoToggle = document.getElementById("info-icon");


// Wait for the DOM to finish loading before allowing to start session 
document.addEventListener("DOMContentLoaded", function () {
    /**
     * Hide Landing page layout and show Question session layout
     */
    function startSession() {
        // Hide landing page layout 
        startButtonContainer.classList.add("hidden");
        infoToggle.classList.add("hidden");
        // Show question session layout 
        questionCard.classList.remove("hidden");
        timerContainer.classList.remove("hidden");
        quitButton.classList.remove("hidden");

        showQuestions();
    }

    // Start the session 
    startButton.addEventListener("click", startSession);
});

// Definition of question session variables 
const quitButton = document.getElementById("quit-button");

const totalQuestions = questions.length;
let currentQuestionIndex = 0;

let answerButtons = document.getElementsByClassName("answer-button");
let questionText = document.getElementsByClassName("question-text");

let totalScore = 0; 

/**
 * Show (next) question, answers on answer-buttons
 * and jump to answerQuestion() once answer button is clicked 
 */
function showQuestions() {
    questionText.innerText = questions[currentQuestionIndex].question;

    for (let i = 0; i < answerButtons.length; i++) {
        console.log(questions[0].answers[0].text);
        answerButtons[i].innerText = questions[currentQuestionIndex].answers[i].text;
        
    }

    // Click event for answer-buttons 
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", answerQuestion);
    }
    
}



/**
 * Handle show next question, with a progress bar update or 
 * show feedback layout when all questions are answered
 */
function answerQuestion() {

    // Calculate score from clicked button 

    currentQuestionIndex++;
    // Show next question and update progress or show feedback: 
    if (currentQuestionIndex < totalQuestions) {
        updateProgressBar();
    } else {
        // Insert - - function to hide question session layout and display feedback layout 
    }
}


/**
 * Function to calculate progress and update progress bar 
 */
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    // calculate percentage of progress 
    let progressPercentage = ((currentQuestionIndex + 1 / totalQuestions) * 100);
    // update width of progress bar 
    progressBar.style.width = progressPercentage + "%";


    // ??? Insert here - - function to store data-score and add to final sum to determine feedback 


    showQuestions();
}


// Insert here - - function to hide question session layout and display feedback layout with corresponding feedback 


/**
 * Hide Question session layout and return to Landing page layout
 */
function quitSession() {
    // Hide question session layout
    questionCard.classList.add("hidden");
    timerContainer.classList.add("hidden");
    quitButton.classList.add("hidden");
    // Show landing page layout 
    startButtonContainer.classList.remove("hidden");
    infoToggle.classList.remove("hidden");
}

// Quit the session 
quitButton.addEventListener("click", quitSession);
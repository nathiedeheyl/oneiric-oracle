// Question catalogue 
const questions = [
    {
        
    }];

// Defined variables 
    const startButton = document.getElementById("start-button");
    const startButtonContainer = document.getElementById("start-button-container");
    const questionCard = document.getElementById("question-container");
    const timerContainer = document.getElementById("timer-container");
    const infoToggle = document.getElementById("info-icon");
    const quitButton = document.getElementById("quit-button");


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

// Question value count and progress bar update 
const totalQuestions = 7;
let currentQuestionIndex = 0;


// Insert here - - function to store data-score and add to final sum to determine feedback 


/**
 * Update progress bar to track total amount of questions answered
 */
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    // calculate percentage of progress 
    let progressPercentage = ((currentQuestionIndex + 1 / totalQuestions) * 100);
    // update width of progress bar 
    progressBar.style.width = progressPercentage + "%";
}

/**
 * Show next question and answers on answer-buttons
 */
function showQuestions() {
    let answerButtons = document.getElementsByClassName("answer-button");

    for (let i = 0; i < answerButtons.length; i++) {
        console.log(questions[0].answers[0].text);
        answerButtons[i].innerText = questions[currentQuestionIndex].answers[i].text;
    }
}



/**
 * Handle show next question, progress bar update or else 
 * show feedback layout when all questions are answered
 */
function answerQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        // Show next question and update progress: 
        showQuestions();
        updateProgressBar();
    } else {
        // Insert - - function to hide question session layout and display feedback layout 
    }
}

// Insert clickevent here and call on answerQuestion 



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
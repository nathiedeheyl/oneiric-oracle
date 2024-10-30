// Wait for the DOM to finish loading before allowing to start session 
// Collect elements to use them in functions? 

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const startButtonContainer = document.getElementById("start-button-container");
    const questionCard = document.getElementById("question-container");
    const timerContainer = document.getElementById("timer-container");
    const infoToggle = document.getElementById("info-icon");
    // const infoBox = document.getElementById("info-box");
    const quitButton = document.getElementById("quit-button");


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
    }

    // Start the session 
    startButton.addEventListener("click", startSession)

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
})

// Question value count and progress bar update 
const totalQuestions = 7;
let currentQuestionIndex = 0;

// Insert - - Connection between answer buttons and f answerQuestions 
document.addEventListener("DOMContentLoaded", function() {
    let answerButtons = document.getElementsByClassName("answer-button");

    for (let button of buttons) {}

/**
 * Update progress bar to track total amount of questions answered
 */
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    // calculate percentage of progress 
    let progressPercentage = ((currentQuestionIndex + 1 / totalQuestions) * 100)
    // update width of progress bar 
    progressBar.style.width = progressPercentage + "%";
}

/**
 * Handle show next question, progress bar update or else 
 * show feedback layout when all questions are answered
 */
function answerQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        // Insert - - show next question?? 
        // Show next question and update progress: 
        updateProgressBar();
    } else {
        // Insert - - function to hide question session layout and display feedback layout 
    }
}
// Wait for the DOM to finish loading before allowing to start session 
// Collect elements to use them in functions? 

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    const startButtonContainer = document.getElementById("start-button-container");
    const questionCard = document.getElementById("question-card");
    const timerContainer = document.getElementById("timer-container");
    const infoToggle = document.getElementById("info-icon");
    const infoBox = document.getElementById("info-box");
    const quitButton = document.getElementById("quit-button");

    // Collapsible info box 
    

    // Hide Landing page layout and show Question session layout 
    function startSession() {
        // Hide landing page
        startButtonContainer.classList.add("hidden");
        // Show question session 
        questionCard.classList.remove("hidden");
        timerContainer.classList.remove("hidden");
        quitButton.classList.remove("hidden");
    }

    // Start the session 
    startButton.addEventListener("click", startSession)
})
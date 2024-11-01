// Question catalogue 
const questions = [{
        question: 'In your dream, what kind of environmenet were you in?',
        answers: [{
                text: 'A familiar place'
            },
            {
                text: 'An unknown place'
            },
            {
                text: 'Buzzing and crowded place'
            },
            {
                text: 'Natural landscape'
            },
        ]
    },
    {
        question: 'What were you doing?',
        answers: [{
                text: 'Walking around exploring'
            },
            {
                text: 'Floating above the scene'
            },
            {
                text: 'Running, possibly escaping'
            },
            {
                text: 'Standing still and ovserving'
            }
        ]
    },
    {
        question: 'How did you feel?',
        answers: [{
                text: 'Hopeful'
            },
            {
                text: 'Confused'
            },
            {
                text: 'Anxious'
            },
            {
                text: 'Relaxed'
            }
        ]
    },
    {
        question: 'Did you interact with someone?',
        answers: [{
                text: 'A new connection'
            },
            {
                text: 'Not really'
            },
            {
                text: 'Someone I might know'
            },
            {
                text: 'A close person'
            }
        ]
    },
    {
        question: 'How was the setting?',
        answers: [{
                text: 'Bright'
            },
            {
                text: 'Foggy'
            },
            {
                text: 'Dimmed'
            },
            {
                text: 'Serene'
            }
        ]
    },
    {
        question: 'What actions happened?',
        answers: [{
                text: 'Presented solution'
            },
            {
                text: 'Unresolved events'
            },
            {
                text: 'Fast movements'
            },
            {
                text: 'Something came to end'
            }
        ]
    },
    {
        question: 'How did you feel when waking up',
        answers: [{
                text: 'Promising feeling'
            },
            {
                text: 'Unanswered questions'
            },
            {
                text: 'Heavy-hearted'
            },
            {
                text: 'Steady'
            }
        ]
    },

];

// Definition of Landing page and feedback page variables 
const startButton = document.getElementById("start-button");
const startButtonContainer = document.getElementById("start-button-container");
const questionCard = document.getElementById("question-container");
const timerContainer = document.getElementById("timer-container");
const infoToggle = document.getElementById("info-icon");

const feedbackPage = document.getElementById("feedback-section");


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

const totalQuestions = 7;
let currentQuestionIndex = 0;
const progressBar = document.getElementById("progress-bar");

let answerButtons = document.getElementsByClassName("answer-button");
let questionText = document.getElementsByClassName("question-text");

let totalScore = 0;

/**
 * Display question text and answer options,
 * by clicking on a button jump to next question
 */
function showQuestions() {
    questionText[0].innerText = questions[currentQuestionIndex].question;

    for (let i = 0; i < answerButtons.length; i++) {
        console.log(questions[0].answers[0].text);
        answerButtons[i].innerText = questions[currentQuestionIndex].answers[i].text;
    }

    // Click event for answer-buttons 
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].replaceWith(answerButtons[i].cloneNode(true));
    }
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].addEventListener("click", answerQuestion);
    }

}

/**
 * Calculate score from previously chosen answer,
 * show next question with an updated progress bar or
 * show feedback message when all questions are answered
 */
function answerQuestion(event) {

    // Calculate score from clicked button 
    let score = parseInt(event.target.getAttribute('data-value'));
    console.log(score);
    totalScore += score;
    console.log(totalScore);

    currentQuestionIndex++;
    // Show next question and update progress or show feedback: 
    if (currentQuestionIndex < totalQuestions) {
        updateProgressBar();
    } else {
        // Hide question session layout
        questionCard.classList.add("hidden");
        timerContainer.classList.add("hidden");
        // Show feedback page layout 
        feedbackPage.classList.remove("hidden");

        displayFeedback();
    }
}

/**
 * Calculate progress, update progress bar
 * and show the next question
 */
function updateProgressBar() {
    // calculate percentage of progress 
    let progressPercentage = ((currentQuestionIndex + 1 / totalQuestions) * 100);
    // update width of progress bar 
    progressBar.style.width = progressPercentage + "%";

    showQuestions();
}


/**
 * Display feedback message according to totalScore range
 */
function displayFeedback() {
    let feedbackMessage = document.getElementById("feedback-message");

    if (totalScore <= 7) {
        feedbackMessage.innerText = feedbackMessages[0].message;
    } else if (totalScore <= 14) {
        feedbackMessage.innerText = feedbackMessages[1].message;
    } else if (totalScore <= 21) {
        feedbackMessage.innerText = feedbackMessages[2].message;
    } else {
        feedbackMessage.innerText = feedbackMessages[3].message;
    }
}

/**
 * Hide Question session layout, reset the totalScore and
 * return to Landing page layout
 */
function quitSession() {
    // Hide question session layout
    questionCard.classList.add("hidden");
    timerContainer.classList.add("hidden");
    quitButton.classList.add("hidden");
    // Show landing page layout 
    startButtonContainer.classList.remove("hidden");
    infoToggle.classList.remove("hidden");
    // Hide feedback page after finishing session 
    feedbackPage.classList.add("hidden");

    // Reset totalScore and currentQuestionIndex to start over
    totalScore = 0;
    currentQuestionIndex = 0;
}

// Quit the session 
quitButton.addEventListener("click", quitSession);

// Feedback catalogue 
const feedbackMessages = [{
        message: "Your dream reflects clarity and hope. You seem to be on a path of self-discovery and purpose, where the symbols in your dreams may guide you forward. Embrace this time of promise, and let it fuel your journey."
    },
    {
        message: "Your dream brings mystery and calls for reflection. There may be questions lingering within, unresolved or deep-seated. Take this as a moment to explore your inner world and uncover what’s waiting for you there."
    },
    {
        message: "Your dream suggests a message of caution and awareness. You may be facing challenges or potential changes, and this dream is here to signal the importance of boundaries and foresight. Pay attention to the signs."
    },
    {
        message: "Your dream conveys peace and acceptance. There is a sense of calm surrounding you, with a readiness to grow and embrace your path, past and future alike. Trust this grounding energy and continue forward with grace."
    }
];
// Define questions and options
const questions = [
    {
        question: "What is the capital of Italy?",
        options: [
            { text: "Berlin", answer: false },
            { text: "Rome", answer: true },
            { text: "Madrid", answer: false },
            { text: "Paris", answer: false }
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        options: [
            { text: "Earth", answer: false },
            { text: "Jupiter", answer: true },
            { text: "Mars", answer: false },
            { text: "Saturn", answer: false }
        ]
    },
    {
        question: "Which element has the chemical symbol O?",
        options: [
            { text: "Oxygen", answer: true },
            { text: "Gold", answer: false },
            { text: "Silver", answer: false },
            { text: "Iron", answer: false }
        ]
    },
    {
        question: "What is the smallest prime number?",
        options: [
            { text: "1", answer: false },
            { text: "2", answer: true },
            { text: "3", answer: false },
            { text: "5", answer: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            { text: "Earth", answer: false },
            { text: "Mars", answer: true },
            { text: "Venus", answer: false },
            { text: "Mercury", answer: false }
        ]
    }
];

let currentQuestionIndex = 0;
const totalQuestions = questions.length;
const progressFill = document.getElementById('progress-fill');
const currentQuestionElement = document.getElementById('current-question');
const optionButtons = document.querySelectorAll('.option-btn');
const timerElement = document.getElementById('timer');
let score = 0;
let timer = 30;
let timerInterval;

function startTimer() {
    timer = 30;
    timerElement.textContent = timer;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timer--;
        timerElement.textContent = timer;
        if (timer <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = 'Time’s up!';
            disableOptions();
            setTimeout(nextQuestion, 2000); // Move to next question after 2 seconds
        }
    }, 1000);
}

function loadQuestion(index) {
    const questionData = questions[index];
    document.getElementById('question').textContent = questionData.question;
    const optionButtons = document.querySelectorAll('.option-btn');

    optionButtons.forEach((button, i) => {
        button.textContent = questionData.options[i].text;
        button.dataset.answer = questionData.options[i].answer;
    });

    currentQuestionElement.textContent = index + 1;
    progressFill.style.width = `${((index + 1) / totalQuestions) * 100}%`;

    resetOptions();
    startTimer();
}

function resetOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
        button.disabled = false;
        button.style.backgroundColor = "";
    });
}

function disableOptions() {
    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach(button => button.disabled = true);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion(currentQuestionIndex);
    } else {
        showScore();
    }
}

function showScore() {
    // Show score in a popup
    alert(`Quiz Finished! Your score: ${score} out of ${totalQuestions}`);
    
    // Optionally, also display the score on the page
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Your score: ${score} out of ${totalQuestions}`;
    scoreElement.classList.remove('hidden');
}

// Add click event to options
optionButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const isCorrect = event.target.dataset.answer === 'true';
        if (isCorrect) {
            score++;
        }
        disableOptions();
        setTimeout(nextQuestion, 2000); // Move to next question after 2 seconds
    });
});

// Initialize first question
loadQuestion(currentQuestionIndex);

document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const question = document.querySelector(".question p");
    const message = document.querySelector(".message");
    const nextButton = document.getElementById("next-button");
    const restartButton = document.getElementById("restart-button");

    const questions = [
        {
            correctAnswer: "Snake",
            options: ["Cat", "Dog", "Snake"],
            selectedAnswer: null // Added to track selected answer
        },
        {
            correctAnswer: "Carrot",
            options: ["Apple", "Banana", "Carrot"],
            selectedAnswer: null // Added to track selected answer
        },
        {
            correctAnswer: "Carbon",
            options: ["Carbon", "Gold", "Silver"],
            selectedAnswer: null // Added to track selected answer
        },
        // Add more questions here with their respective options and selectedAnswer
    ];

    let currentQuestionIndex = 0;
    let score = 0;
    let totalQuestions = questions.length;

    function loadQuestion(questionIndex) {
        const currentQuestion = questions[questionIndex];
        question.textContent = "Pick Odd One Out";

        // Update the options
        options.forEach((option, index) => {
            option.textContent = currentQuestion.options[index];
            option.style.backgroundColor = "#007acc"; // Reset option colors
        });
    }

    function validateAnswer() {
        const currentQuestion = questions[currentQuestionIndex];
        return currentQuestion.selectedAnswer !== null;
    }

    loadQuestion(currentQuestionIndex);

    options.forEach(option => {
        option.addEventListener("click", function () {
            const selectedAnswer = this.textContent;
            const currentQuestion = questions[currentQuestionIndex];
            currentQuestion.selectedAnswer = selectedAnswer; // Track selected answer
            options.forEach(opt => {
                opt.style.backgroundColor = "#007acc"; // Reset option colors
            });
            this.style.backgroundColor = "#004f80"; // Highlight selected option
        });
    });

    nextButton.addEventListener("click", function () {
        if (validateAnswer()) {
            const selectedAnswer = questions[currentQuestionIndex].selectedAnswer;
            const currentQuestion = questions[currentQuestionIndex];
            if (selectedAnswer === currentQuestion.correctAnswer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < totalQuestions) {
                loadQuestion(currentQuestionIndex);
            } else {
                question.textContent = "Quiz completed!";
                options.forEach(option => {
                    option.style.display = "none";
                });
                nextButton.style.display = "none";
                restartButton.style.display = "block";
                message.textContent = `Your Score: ${score} / ${totalQuestions}`;
            }
        } else {
            message.textContent = "Please select an answer before proceeding.";
        }
    });

    restartButton.addEventListener("click", function () {
        currentQuestionIndex = 0;
        score = 0;
        questions.forEach(question => {
            question.selectedAnswer = null; // Reset selected answers
        });
        loadQuestion(currentQuestionIndex);
        options.forEach(option => {
            option.style.display = "block";
        });
        nextButton.style.display = "block";
        restartButton.style.display = "none";
        message.textContent = "";
    });
});

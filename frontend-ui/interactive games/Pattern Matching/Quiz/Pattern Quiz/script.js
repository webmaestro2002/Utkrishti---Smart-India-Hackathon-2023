document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll(".option");
    const question = document.querySelector(".question p");
    const message = document.querySelector(".message");
    const correctPattern = "circle"; // Change this to the correct pattern

    options.forEach(option => {
        option.addEventListener("click", function () {
            const selectedPattern = this.getAttribute("data-pattern");
            if (selectedPattern === correctPattern) {
                this.style.backgroundColor = "#4CAF50"; // Green if correct
                message.textContent = "Correct!";
            } else {
                this.style.backgroundColor = "#FF5733"; // Red if incorrect
                message.textContent = "Try Again!";
            }
        });
    });

    // Reset the quiz
    function resetQuiz() {
        options.forEach(option => {
            option.style.backgroundColor = "#007acc"; // Reset colors
        });
        message.textContent = "Select an option to match the pattern.";
    }
});

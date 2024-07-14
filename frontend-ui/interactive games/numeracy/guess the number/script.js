// script.js

let minNumber = 1;
let maxNumber = 100;
let targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

const guessInput = document.getElementById("guess-input");
const checkButton = document.getElementById("check-button");
const messageElement = document.getElementById("message");
const restartButton = document.getElementById("restart-button");

checkButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restartGame);

function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < minNumber || userGuess > maxNumber) {
        showMessage("Please enter a valid number between 1 and 100.");
    } else {
        attempts++;
        if (userGuess === targetNumber) {
            showMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
            disableInput();
        } else if (userGuess < targetNumber) {
            showMessage("Try a higher number.");
        } else {
            showMessage("Try a lower number.");
        }
    }
}

function showMessage(message) {
    messageElement.textContent = message;
}

function disableInput() {
    guessInput.disabled = true;
    checkButton.disabled = true;
}

function restartGame() {
    targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    attempts = 0;
    guessInput.value = "";
    guessInput.disabled = false;
    checkButton.disabled = false;
    showMessage("Guess a number between 1 and 100.");
}

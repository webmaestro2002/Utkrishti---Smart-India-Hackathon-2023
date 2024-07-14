const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");

let score = 0;
let gameDuration = 40000; // 40 seconds in milliseconds

gameContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("circle")) {
        score++;
        updateScore();
        event.target.remove();
    }
});

function createRandomCircle() {
    const circle = document.createElement("div");
    const randomColor = getRandomColor();
    circle.className = `circle ${randomColor}`;
    const x = Math.random() * (window.innerWidth - 70);
    const y = Math.random() * (window.innerHeight - 70);
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    gameContainer.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 1500);
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function getRandomColor() {
    const circleColors = ["red", "blue", "green", "yellow"];
    return circleColors[Math.floor(Math.random() * circleColors.length)];
}

setInterval(createRandomCircle, 1000);

setTimeout(() => {
    clearInterval(interval);
    scoreElement.textContent = `Game Over! Final Score: ${score}`;
}, gameDuration);

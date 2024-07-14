document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    const resetButton = document.getElementById("reset-button");

    const patterns = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const cards = [...patterns, ...patterns]; // Duplicate patterns to create pairs
    let flippedCards = [];
    let matchedPairs = 0;

    // Shuffle the cards randomly
    shuffleArray(cards);

    // Create and render the card elements
    cards.forEach(pattern => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.pattern = pattern;
        card.textContent = pattern;
        card.addEventListener("click", flipCard);
        gameContainer.appendChild(card);
    });

    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.classList.add("flipped");
            flippedCards.push(this);

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 500);
            }
        }
    }

    function checkForMatch() {
        const [card1, card2] = flippedCards;
        if (card1.dataset.pattern === card2.dataset.pattern) {
            card1.removeEventListener("click", flipCard);
            card2.removeEventListener("click", flipCard);
            matchedPairs++;

            if (matchedPairs === patterns.length) {
                setTimeout(() => {
                    alert("Congratulations! You've matched all pairs.");
                }, 300);
            }
        } else {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
        }

        flippedCards = [];
    }

    resetButton.addEventListener("click", resetGame);

    function resetGame() {
        gameContainer.innerHTML = "";
        matchedPairs = 0;
        flippedCards = [];
        shuffleArray(cards);

        cards.forEach(pattern => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.pattern = pattern;
            card.textContent = pattern;
            card.addEventListener("click", flipCard);
            gameContainer.appendChild(card);
        });
    }

    // Fisher-Yates shuffle algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
});

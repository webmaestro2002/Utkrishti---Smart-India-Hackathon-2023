document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    const resetButton = document.getElementById("reset-button");

    const symbols = ["🌟", "🍎", "🍕", "🌈", "🎈", "🚀", "🌺", "🎁"];
    const cards = [...symbols, ...symbols]; // Duplicate symbols to create pairs
    let flippedCards = [];
    let matchedPairs = 0;

    // Shuffle the cards randomly
    shuffleArray(cards);

    // Create and render the card elements
    cards.forEach(symbol => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.textContent = symbol;
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
        if (card1.dataset.symbol === card2.dataset.symbol) {
            card1.removeEventListener("click", flipCard);
            card2.removeEventListener("click", flipCard);
            matchedPairs++;

            if (matchedPairs === symbols.length) {
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

        cards.forEach(symbol => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.dataset.symbol = symbol;
            card.textContent = symbol;
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

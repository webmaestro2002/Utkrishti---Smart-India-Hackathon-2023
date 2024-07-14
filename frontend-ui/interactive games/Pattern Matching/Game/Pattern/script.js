document.addEventListener("DOMContentLoaded", function () {
    const patternCards = document.querySelectorAll(".pattern-card");
    const objectCards = document.querySelectorAll(".object-card");
    let draggedObject = null;

    objectCards.forEach(objectCard => {
        objectCard.addEventListener("dragstart", function () {
            draggedObject = this;
        });

        objectCard.addEventListener("dragend", function () {
            draggedObject = null;
        });
    });

    patternCards.forEach(patternCard => {
        patternCard.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        patternCard.addEventListener("drop", function () {
            if (draggedObject && draggedObject.getAttribute("data-pattern") === this.getAttribute("data-pattern")) {
                this.style.backgroundColor = "#4CAF50"; // Green if matched
                this.setAttribute("draggable", "false");
                draggedObject.style.display = "none"; // Hide matched object
                checkGameComplete();
            } else {
                this.style.backgroundColor = "#FF5733"; // Red if not matched
                setTimeout(() => {
                    this.style.backgroundColor = "#007acc"; // Reset color
                }, 1000);
            }
        });
    });

    function checkGameComplete() {
        const remainingPatterns = document.querySelectorAll(".pattern-card:not([draggable='false'])");
        if (remainingPatterns.length === 0) {
            document.querySelector(".message").textContent = "Congratulations! You matched all the patterns!";
        }
    }
});

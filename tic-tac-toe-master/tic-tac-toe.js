document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    let currentPlayer = 'X';
    const gameState = Array(9).fill(null);
    const handleClick = (e) => {
        const square = e.target;
        const index = Array.from(squares).indexOf(square);
    
        // Checks if the square is already filled
        if (gameState[index] !== null) {
            return;
        }
    
        // Update the square with current player's mark
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        gameState[index] = currentPlayer;
    
        // Switch to the next player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
    squares.forEach(square => {
        // Adds the class 'square' to each div element
        square.classList.add("square");
        square.addEventListener("click", handleClick);
    });
});


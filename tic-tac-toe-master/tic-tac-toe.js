document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    const statusDiv = document.getElementById("status");
    const newGame = document.querySelector(".btn");
    const gameState = Array(9).fill(null);
    let currentPlayer = 'X';
    // Attach event listener to the New Game button
    newGame.addEventListener("click", reset);

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
    
        // Check for a winner
        if (checkWinner(currentPlayer)) {
            statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
            statusDiv.classList.add("you-won");
            squares.forEach(square => square.removeEventListener("click", handleClick)); // Disable further clicks
            return;
        }

        // Switch to the next player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    function checkWinner(player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
            [0, 4, 8], [2, 4, 6]             // Diagonal
        ];
    
        for (const pattern of winPatterns) {
            if (pattern.every(index => gameState[index] === player)) {
                return true;
            }
        }
        return false;
    }    

    function reset() {
        // Clear the game state
        gameState.fill(null);

        // Reset each square
        squares.forEach(square => {
            square.textContent = '';
            square.classList.remove('X', 'O');
            square.addEventListener("click", handleClick);
        });

        // Reset status message
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
        statusDiv.classList.remove('you-won');

        // Reset current player
        currentPlayer = 'X';
    }

    squares.forEach(square => {
        // Adds the class 'square' to each div element
        square.classList.add("square");
        square.addEventListener("mouseover", function() {
            square.classList.add("hover");
        });
        square.addEventListener("mouseout", function() {
            square.classList.remove("hover");
        });
        square.addEventListener("click", handleClick);
    });
});


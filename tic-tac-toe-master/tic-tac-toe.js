document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll("#board > div");
    squares.forEach(square => {
        // Adds the class 'square' to each div element
        square.classList.add("square");
    });
});
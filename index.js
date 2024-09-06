// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to select random numbers and display them in the boxes
function selectRandomNumbers() {
    const num1 = getRandomNumber(1, 12);
    const num2 = getRandomNumber(1, 12);

    document.getElementById('box1').textContent = num1;
    document.getElementById('box2').textContent = num2;

    // Store the numbers in the boxes as data attributes for later use
    document.getElementById('box1').setAttribute('data-number', num1);
    document.getElementById('box2').setAttribute('data-number', num2);
}

// Function to check the multiplication result
function checkMultiplication(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the numbers from the boxes' data attributes
    const num1 = parseInt(document.getElementById('box1').getAttribute('data-number'));
    const num2 = parseInt(document.getElementById('box2').getAttribute('data-number'));
    const userAnswer = parseInt(document.getElementById('answer').value);
    
    // Calculate the correct answer
    const correctAnswer = num1 * num2;
    
    // Get the result element
    const resultElement = document.getElementById('result');
    
    // Check the user's answer and display the appropriate message
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Great job!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Try again.";
        resultElement.style.color = "red";
    }
}

// Select random numbers when the page loads
window.onload = selectRandomNumbers;
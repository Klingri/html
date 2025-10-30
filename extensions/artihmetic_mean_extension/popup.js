// Ensure the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const gradesInput = document.getElementById('gradesInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');

    /**
     * Calculates the arithmetic mean of an array of numbers.
     * @param {number[]} numbers - An array of numbers.
     * @returns {number | string} The arithmetic mean, or an error message if the array is empty.
     */
    function calculateArithmeticMean(numbers) {
        if (numbers.length === 0) {
            return "No grades entered.";
        }

        // Calculate the sum of all numbers
        const sum = numbers.reduce((total, num) => total + num, 0);

        // Calculate the mean
        const mean = sum / numbers.length;

        // Return the mean rounded to two decimal places
        return mean.toFixed(2);
    }

    /**
     * Displays the result in the resultDiv, applying appropriate styling.
     * @param {string} message - The message to display.
     * @param {boolean} isError - True if the message is an error, false otherwise.
     */
    function displayResult(message, isError = false) {
        resultDiv.textContent = message;
        resultDiv.classList.remove('hidden', 'bg-blue-50', 'text-blue-800', 'border-blue-200', 'bg-red-100', 'text-red-800', 'border-red-500'); // Clear previous styles

        if (isError) {
            resultDiv.classList.add('bg-red-100', 'text-red-800', 'border-red-500'); // Error styling
        } else {
            resultDiv.classList.add('bg-blue-50', 'text-blue-800', 'border-blue-200'); // Success styling
        }
        resultDiv.classList.remove('hidden'); // Make the result div visible
    }

    // Add an event listener to the calculate button
    calculateBtn.addEventListener('click', () => {
        // Get the raw input string from the text field
        const rawGrades = gradesInput.value;

        // Split the string by commas, filter out empty strings, and trim whitespace
        const gradeStrings = rawGrades.split(',').map(s => s.trim()).filter(s => s !== '');

        // Convert string grades to numbers, filtering out non-numeric values
        const grades = gradeStrings.map(Number).filter(num => !isNaN(num));

        // Check if there are any valid grades to process
        if (grades.length === 0 && gradeStrings.length > 0) {
            displayResult("Please enter valid numbers for grades.", true);
            return;
        } else if (grades.length === 0) {
            displayResult("No grades entered. Please type some grades.", true);
            return;
        }

        // Calculate the arithmetic mean
        const mean = calculateArithmeticMean(grades);

        // Display the result to the user
        displayResult(`Arithmetic Mean: ${mean}`);
    });

    // Optional: Allow calculation on Enter key press in the input field
    gradesInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            calculateBtn.click(); // Simulate a click on the calculate button
        }
    });
});

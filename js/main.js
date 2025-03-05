// Function to check user input
function checkText() {
    const correctText = "Bloom Surprise Joy"; // The secret phrase
    const userInput = document.getElementById("userInput").value;

    // If the user input matches the correct text, redirect to video page
    if (userInput === correctText.trim()) {
        window.location.href = "video.html"; // Redirect to the video page
    } else {
        alert("Incorrect phrase. Please try again."); // Show alert for incorrect input
    }
}

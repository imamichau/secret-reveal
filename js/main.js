// Function to check user input
function checkText() {
    const correctText = "bloom surprise joy"; // The secret phrase
    const userInput = document.getElementById("userInput").value;

    // If the user input matches the correct text, redirect to video page
    if (userInput === correctText.trim().toLowerCase()) {
        window.location.href = "video.html"; // Redirect to the video page
    } else {
        alert("Incorrect words. Please try again. Try to find correct words on the postcard."); // Show alert for incorrect input
    }
}

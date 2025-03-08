function checkText() {
    const correctText = "bloom joy feel love surprise"; // The secret phrase
    const userInput = document.getElementById("userInput").value;

    // Convert both strings to arrays of words, convert to lowercase, and sort them
    const correctWords = correctText.toLowerCase().split(" ").sort();
    const userWords = userInput.toLowerCase().trim().split(/\s+/).sort();

    // Check if the arrays have the same length and contain the same words
    if (arraysEqual(correctWords, userWords)) {
        window.location.href = "video.html"; // Redirect to the video page
    } else {
        alert("Incorrect words. Please try again. Try to find the correct words on the postcard."); // Show alert for incorrect input
    }
}

// Function to compare two arrays for equality
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

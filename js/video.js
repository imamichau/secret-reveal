const video = document.getElementById('bg-video');
const soundButton = document.querySelector('.sound-button');

// Function to toggle sound on/off
function toggleSound() {
    if (video.muted) {
        video.muted = false;
        soundButton.textContent = 'Turn Sound Off'; // Change button text
    } else {
        video.muted = true;
        soundButton.textContent = 'Turn Sound On'; // Change button text
    }
}

// Check if the video is loaded and ready to play
window.onload = function() {
    video.oncanplaythrough = function() {
        console.log('Video can play through!');
        video.play(); // Play the video when it can start
    };

    video.onerror = function() {
        console.error('Error loading video');
        alert('There was an error loading the video. Please check the file path.');
    };
};

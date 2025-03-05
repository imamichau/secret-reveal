const video = document.getElementById('bg-video');
const soundButton = document.querySelector('.sound-button');
const loadingScreen = document.querySelector('.loading-screen');
const container = document.querySelector('.container');

// Function to toggle sound on/off
function toggleSound() {
    if (video.muted) {
        video.muted = false;
        soundButton.textContent = 'Turn Sound Off';
    } else {
        video.muted = true;
        soundButton.textContent = 'Turn Sound On';
    }
}

// Show the loading screen initially
loadingScreen.style.display = 'flex';

// Track video loading progress
video.addEventListener('progress', function () {
    const buffered = video.buffered; // Get buffered data info
    if (buffered.length > 0) {
        const bufferedEnd = buffered.end(buffered.length - 1); // End of the buffered range

        // If at least 5 seconds of video is buffered
        if (bufferedEnd >= 3) {
            console.log('Enough video is buffered. Showing content.');

            // Hide the loading screen
            loadingScreen.style.display = 'none';

            // Show the main content
            container.style.display = 'flex';

            // Start playing the video
            video.play().catch(function (error) {
                console.log('Autoplay failed, trying to play on user interaction');
                document.querySelector('body').addEventListener('click', function () {
                    video.play();
                });
            });

            // Remove the progress event listener to avoid further calls
            video.removeEventListener('progress', arguments.callee);
        }
    }
});

// Handle video loading errors
video.onerror = function () {
    console.error('Error loading video');
    alert('There was an error loading the video. Please check the file path.');
};
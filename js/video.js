const video = document.getElementById('bg-video');
const soundButton = document.querySelector('.sound-button');
const loadingScreen = document.querySelector('.loading-screen');
const container = document.querySelector('.container');

// Function to toggle sound on and off
function toggleSound() {
    if (video.muted) {
        video.muted = false;
        soundButton.textContent = 'Turn Sound Off';
    } else {
        video.muted = true;
        soundButton.textContent = 'Turn Sound On';
    }
}

// Show the loading screen
loadingScreen.style.display = 'flex';

// Hide the loading screen and show the content after the video has loaded
video.addEventListener('canplaythrough', function () {
    console.log('Video is ready to play.');

    // Hide the loading screen
    loadingScreen.style.display = 'none';

    //Show the content
    container.style.display = 'flex';

    // Run the video
    video.play().catch(function (error) {
        console.log('Autoplay failed, trying to play on user interaction');
        document.querySelector('body').addEventListener('click', function () {
            video.play();
        });
    });
});

// Error handling
video.onerror = function () {
    console.error('Error loading video');
    alert('There was an error loading the video. Please check the file path.');
};
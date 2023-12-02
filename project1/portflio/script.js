// Select the button and body element
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle('dark');
}

// Event listener for the dark mode toggle button
darkModeToggle.addEventListener('click', toggleDarkMode);

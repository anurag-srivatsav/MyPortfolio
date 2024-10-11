// Function to speak the mode change
function speak(message) {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
}

// Function to toggle dark mode
function toggleDarkMode(event) {
    event.preventDefault();
    const element = document.body;
    element.classList.toggle("dark-mode");

    // Store the dark mode preference in localStorage
    const isDarkMode = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));


// Announce the mode change
    if (isDarkMode) {
        speak("Activating wake-up protocol. Night vision systems online. Ready for an enhanced experience.");
    } else {
        speak("Light Mode engaged. Infusing brilliance into your journey. Welcome to the realm of innovation.");
    }
}

// Check if dark mode preference is stored and apply it on page load
document.addEventListener("DOMContentLoaded", function() {
    const darkMode = localStorage.getItem("darkMode");
    const isDarkMode = darkMode ? JSON.parse(darkMode) : false;

    const element = document.body;
    if (isDarkMode) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
});
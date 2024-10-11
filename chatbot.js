const floatingIcon = document.getElementById('floatingIcon');
const chatWindow = document.getElementById('chatWindow');
const closeButton = document.getElementById('closeButton');
 
floatingIcon.addEventListener('click', function() {
    chatWindow.style.display = chatWindow.style.display === 'none' || chatWindow.style.display === '' ? 'flex' : 'none';
    speak("Hi there! I'm Nani, ready to help. What would you like to talk about?");
});
 
closeButton.addEventListener('click', function() {
    chatWindow.style.display = 'none'; // Hide chat window on close
});
 
function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.lang = 'en-US'; // Set language
    window.speechSynthesis.speak(speech);
}
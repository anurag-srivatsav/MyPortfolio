function checkPasskey() {
    const passkey = document.getElementById("passkey").value;
    const correctPasskey = "genai"; // Change this to your passkey

    if (passkey === correctPasskey) {
        window.location.href = "pdfs.html"; // Redirect to content page
    } else {
        alert("Incorrect Passkey. Try again!");
    }
}
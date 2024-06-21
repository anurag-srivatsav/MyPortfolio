// Collapse Navbar on click
document.addEventListener('DOMContentLoaded', function() {
    var navToggler = document.querySelector('.navbar-toggler');
    var navbarNav = document.querySelector('.navbar-nav');
    navbarNav.addEventListener('click', function() {
        if (navToggler.classList.contains('collapsed')) {
            navToggler.click();
        }
    });
});
 function updateLiveTime() {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const currentTime = `${hours}:${minutes}:${seconds}`;

            const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
            const date = String(now.getDate()).padStart(2, '0');
            const year = now.getFullYear();
            const currentDate = `${date}-${month}-${year}`;

            document.getElementById('liveTime').textContent = `${currentDate} ${currentTime}`;
        }

        // Update the time every second
        setInterval(updateLiveTime, 1000);

        // Initial call to display the time immediately on load
        updateLiveTime();
document.addEventListener('DOMContentLoaded', () => {
    // Function to update the impact metrics
    function updateImpactMetrics() {
        // Simulate fetching new data
        const tonsSaved = Math.floor(Math.random() * 20000); // Randomize for demo
        const usersParticipating = Math.floor(Math.random() * 10000);
        const compostDiverted = Math.floor(Math.random() * 5000);

        // Update the DOM
        document.getElementById('tons-saved').textContent = tonsSaved.toLocaleString();
        document.getElementById('users-participating').textContent = usersParticipating.toLocaleString();
        document.getElementById('compost-diverted').textContent = compostDiverted.toLocaleString();
    }

    // Function to update the leaderboard
    function updateLeaderboard() {
        // Simulate fetching new data
        const topContributorName = "User" + Math.floor(Math.random() * 100);
        const topContributorPoints = Math.floor(Math.random() * 2000);
        const topBusinessName = "Business" + Math.floor(Math.random() * 100);
        const topBusinessPoints = Math.floor(Math.random() * 5000);

        // Update the DOM
        document.getElementById('top-contributor-name').textContent = topContributorName;
        document.getElementById('top-contributor-points').textContent = topContributorPoints.toLocaleString();
        document.getElementById('top-business-name').textContent = topBusinessName;
        document.getElementById('top-business-points').textContent = topBusinessPoints.toLocaleString();
    }

    // Call the update functions every 5 seconds
    setInterval(() => {
        updateImpactMetrics();
        updateLeaderboard();
    }, 5000); // 5000 milliseconds = 5 seconds
});







// script.js

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".book-btn");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const siteNumber = this.getAttribute("data-site");
            // Redirect to the form page or show an alert
            const confirmation = confirm(`You selected Compost Site ${siteNumber}. Would you like to proceed to the booking form?`);
            if (confirmation) {
                // Redirect to the form page (update the URL as necessary)
                window.location.href = "booknow.html"; // Replace with the actual form page
            }
        });
    });
});









document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('nav').offsetHeight;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});






// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         const offset = document.querySelector('nav').offsetHeight;
//         const elementPosition = target.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - offset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });
//     });
// });


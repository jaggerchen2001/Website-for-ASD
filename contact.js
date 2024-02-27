document.addEventListener("DOMContentLoaded", function() {
    // Select the form within the .contact div
    var form = document.querySelector('.contact form');

    // Add an event listener for the form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from actually submitting
        event.preventDefault();

        // Display the alert message
        alert("Your message has been sent, we will respond as soon as possible.");

    });
});
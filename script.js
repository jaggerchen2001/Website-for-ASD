document.addEventListener("DOMContentLoaded", function() {
    // Select all the images within the .about section
    var images = document.querySelectorAll('.about .img');

    // Add a click event listener to each image
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // First, reset the text color for all paragraphs to their default
            document.querySelectorAll('.about .text').forEach(function(p) {
                p.style.color = ""; // Reset to default color
            });

            // Change the color of the paragraph within the same figure to black
            var text = this.nextElementSibling.nextElementSibling; 
            text.style.color = "black";
        });
    });
});

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
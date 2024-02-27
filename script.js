document.addEventListener('DOMContentLoaded', function() {
    var imgs = document.querySelectorAll('.img'); // Selects all images
    var texts = document.querySelectorAll('.text'); // Selects all text paragraphs

    // Function to reset text colors
    function resetTextColors() {
        texts.forEach(function(text) {
            text.style.color = ''; // Resets to default
        });
    }

    // Loop through all images and add click event listeners
    imgs.forEach(function(img, index) {
        img.addEventListener('click', function() {
            resetTextColors(); // Reset colors on all texts
            texts[index].style.color = 'black'; // Change color of the clicked img's corresponding text
        });
    });
});

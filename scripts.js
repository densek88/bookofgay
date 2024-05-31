document.addEventListener("DOMContentLoaded", function() {
    const bookImages = document.querySelectorAll(".book");
    const imageElement = document.getElementById("randomImagePlaceholder");

    let imagePaths = [
        'images/1.png',
        'images/2.png',
        'images/3.png',
        'images/4.png',
        // Add more image paths as needed
    ];

    let currentIndex = 0;
    let displayOnLeft = true; // Flag to alternate between left and right side

    bookImages.forEach(bookImage => {
        bookImage.addEventListener("click", function() {
            // Get the current image path
            const currentImagePath = imagePaths[currentIndex];

            // Set the src of the image element
            imageElement.src = currentImagePath;

            // Get viewport dimensions
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Fixed position for left and right sides
            const leftPosition = 20; // Adjust as needed
            const rightPosition = viewportWidth - imageElement.width - 20; // Adjust as needed

            // Position the image either on the left or right side
            if (displayOnLeft) {
                imageElement.style.left = `${leftPosition}px`;
            } else {
                imageElement.style.left = `${rightPosition}px`;
            }

            // Position the image vertically at the center
            const centerY = (viewportHeight - imageElement.height) / 2;
            imageElement.style.top = `${centerY}px`;

            // Display the image
            imageElement.classList.remove("hidden");

            // Toggle the flag for next display
            displayOnLeft = !displayOnLeft;

            // Increment currentIndex for the next image, looping back to the start if necessary
            currentIndex = (currentIndex + 1) % imagePaths.length;
        });
    });
});

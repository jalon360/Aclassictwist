// aclassictwist.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const featuredDishButton = document.querySelector("#featured-dish-button");
    const cateringButton = document.querySelector("#catering-button");
    const locationDropdown = document.querySelector("#location-dropdown");

    // Event listener for featured dish button
    featuredDishButton.addEventListener("click", function () {
        alert("Enjoy our mouthwatering signature dish!");
    });

    // Event listener for catering button
    cateringButton.addEventListener("click", function () {
        window.location.href = "https://example.com/catering"; // Replace with actual catering page URL
    });

    // Event listener for location dropdown
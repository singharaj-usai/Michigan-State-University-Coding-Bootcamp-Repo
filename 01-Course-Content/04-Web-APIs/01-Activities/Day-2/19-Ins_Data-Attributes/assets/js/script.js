var imageContainer = document.querySelector(".img-container");

// Listen for any clicks within the img-container div
imageContainer.addEventListener("click", function(event) {
  var element = event.target;

  // Check if the clicked element was an image
  if (element.matches("img")) {
    // Get the current value of the image's data-state attribute
    var state = element.getAttribute("data-state");

    if (state === "still") {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      element.dataset.state = "animate";
      element.setAttribute("data-state", "animate");

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute("src", element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = "still";
      element.setAttribute("src", element.dataset.still);
    }
  }
});

// javascript to make collapse navbar when nav link or body is tapped/clicked

// Get all the dropdown menu links
const dropdownLinks = document.querySelectorAll(".navbar-nav");
const body = window.document;
const dropdownMenu = document.querySelector(".navbar-collapse");

// Attach a click event listener to each dropdown link
dropdownLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the dropdown menu
    if (dropdownMenu) {
      dropdownMenu.classList.remove("show");
    }
  });
});

function closeNavWhenBodyClicked() {
  if (dropdownMenu) {
    dropdownMenu.classList.remove("show");
  }
}

//collapse navbar when body is clicked
body.addEventListener("click", closeNavWhenBodyClicked);

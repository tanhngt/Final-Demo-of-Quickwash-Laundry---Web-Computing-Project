// === Select the scroll-to-top button from the HTML ===
const scrollBtn = document.getElementById("scrollBtn");

// === Show or hide the scroll button based on how far the user has scrolled ===
window.addEventListener("scroll", () => {
  // If the user scrolls more than 300px from the top, show the button.
  // Otherwise, hide it.
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// === Smoothly scroll the page back to the top when the button is clicked ===
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,               // Scroll back to the top of the page
    behavior: "smooth"    // Smooth scroll animation
  });
});

// === Track clicks on the Contact section (useful for debugging or analytics) ===
const contact = document.querySelector("#contact"); // Select the Contact section

// Check if the element exists before adding an event listener
if (contact) {
  contact.addEventListener("click", () => {
    console.log("Contact section clicked!"); // Log interaction to console
  });
}

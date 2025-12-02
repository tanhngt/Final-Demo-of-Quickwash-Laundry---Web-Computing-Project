const scrollBtn = document.getElementById("scrollBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const contact = document.querySelector("#contact");
if (contact) {
  contact.addEventListener("click", () => {
    console.log("Contact section clicked!");
  });
}

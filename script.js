// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "🌕";
  } else {
    darkModeToggle.textContent = "🌙";
  }
});

// Modal Functionality
const modalBtns = document.querySelectorAll(".modal-btn");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close-btn");

modalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modalId = e.target.getAttribute("data-target");
    document.querySelector(modalId).style.display = "flex";
  });
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const modalId = e.target.getAttribute("data-close");
    document.querySelector(modalId).style.display = "none";
  });
});

// AOS (Animate On Scroll)
AOS.init({
  offset: 200,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

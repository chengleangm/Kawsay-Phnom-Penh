function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("active");
}

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 120;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your reservation request has been received.");
  form.reset();
});
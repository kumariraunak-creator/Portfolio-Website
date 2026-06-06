// ======================
// Typing Animation
// ======================

const roles = [
  "Software Engineer",
  "AI/ML Enthusiast",
  "Full Stack Developer",
  "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

  const currentRole = roles[roleIndex];

  if (!isDeleting) {

    typingElement.textContent =
      currentRole.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }

  } else {

    typingElement.textContent =
      currentRole.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex++;

      if (roleIndex === roles.length) {
        roleIndex = 0;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", () => {
  if (typingElement) {
    typeEffect();
  }
});


// ======================
// Fade In Animation
// ======================

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach((section) => {

  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease";

  observer.observe(section);

});


// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('nav a').forEach(anchor => {

  anchor.addEventListener('click', function(e) {

    e.preventDefault();

    const target =
      document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });

  });

});


// ======================
// Back To Top Button
// ======================

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.background = "#38bdf8";
topBtn.style.fontSize = "18px";
topBtn.style.fontWeight = "bold";

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


// ======================
// Active Navbar Link
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + current
    ) {
      link.classList.add("active");
    }

  });

});

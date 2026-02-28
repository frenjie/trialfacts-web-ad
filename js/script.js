// Toggle mobile menu
function toggleMenu() {
  document.querySelector('.sidebar').classList.toggle('open');
}

// CTA scroll
function scrollToForm() {
  document.querySelector('#questionnaire')
    .scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll
document.querySelectorAll('.contents a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu after click
    document.querySelector('.sidebar').classList.remove('open');
  });
});

// Active link highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".contents a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

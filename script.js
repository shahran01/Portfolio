// ===== Scroll Reveal Animation =====
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(reveal => observer.observe(reveal));

// ===== Smooth Scroll on Nav Click =====
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== Dark/Light Mode Toggle =====
const toggleBtn = document.getElementById('toggle-mode');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Optional: Change button text or icon
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.innerText = "Dark Mode";
  } else {
    toggleBtn.innerText = "Light Mode";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const form = document.getElementById('contact-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  messageEl.textContent = 'Thank you! Your message has been sent.';
  form.reset();
});
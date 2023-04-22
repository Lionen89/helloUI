const lines = document.querySelectorAll('.header__burger-line');
const button = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const auth = document.querySelector('.header__auth');
const overlay = document.querySelector('.page__overlay');

button.addEventListener('click', () => {
  lines.forEach((item) => item.classList.toggle('header__burger-line_open'));
  auth.classList.toggle('header__auth_open');
  nav.classList.toggle('header__nav_open');
  overlay.classList.toggle('page__overlay_open');
});

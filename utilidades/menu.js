const btn        = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('menu-mobile');

btn.addEventListener('click', () => {
  mobileMenu.classList.toggle('scale-y-0');
  mobileMenu.classList.toggle('scale-y-100');
  mobileMenu.classList.toggle('opacity-0');
  mobileMenu.classList.toggle('opacity-100');
});
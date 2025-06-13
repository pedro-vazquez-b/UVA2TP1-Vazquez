const lightBtn = document.getElementById('light-mode-btn');
const darkBtn  = document.getElementById('dark-mode-btn');

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  darkBtn.classList.add('hidden');
  lightBtn.classList.remove('hidden');
} else {
  darkBtn.classList.remove('hidden');
  lightBtn.classList.add('hidden');
}

lightBtn.addEventListener('click', () => {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  darkBtn.classList.remove('hidden');
  lightBtn.classList.add('hidden');
});

darkBtn.addEventListener('click', () => {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  darkBtn.classList.add('hidden');
  lightBtn.classList.remove('hidden');
});

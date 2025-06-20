document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('theme-switch-input');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    if (input) input.checked = true;
  } else {
    document.body.classList.remove('dark-mode');
    if (input) input.checked = false;
  }
  if (input) {
    input.addEventListener('change', function () {
      if (input.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
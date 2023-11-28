const login = (e) => {
  e.preventDefault();
  window.location.href = 'dashboard.html';
};

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', login);

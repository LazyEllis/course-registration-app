// Index page logic for handling login
import login from './login';

const loginForm = document.getElementById('loginForm');

// Handle form submission
const handleSubmit = (e) => {
  e.preventDefault();
  const enteredStudentId = document.getElementById('student-id').value;
  const enteredPassword = document.getElementById('password').value;

  // Attempt to login
  const loggedInStudent = login(enteredStudentId, enteredPassword);

  if (loggedInStudent) {
    // Successful login, store user in local storage and redirect to dashboard
    alert('Successful login');
    localStorage.setItem('loggedInStudent', JSON.stringify(loggedInStudent));
    window.location.href = 'dashboard.html';
  } else {
    // Incorrect credentials
    alert('Incorrect student ID or password');
  }
};

loginForm.addEventListener('submit', handleSubmit);

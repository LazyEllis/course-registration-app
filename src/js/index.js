import login from './login';

const loginForm = document.getElementById('loginForm');

const handleSubmit = (e) => {
  e.preventDefault();
  const enteredStudentId = document.getElementById('student-id').value;
  const enteredPassword = document.getElementById('password').value;

  const loggedInStudent = login(enteredStudentId, enteredPassword);

  if (loggedInStudent) {
    alert('Successful login');
    localStorage.setItem('loggedInStudent', JSON.stringify(loggedInStudent));
    window.location.href = 'dashboard.html';
  } else {
    alert('Incorrect student ID or password');
  }
};

loginForm.addEventListener('submit', handleSubmit);

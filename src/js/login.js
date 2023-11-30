// Logic for handling user login
import students from './students';

// Function to authenticate and return the logged-in student
const login = (enteredStudentId, enteredPassword) => {
  const loggedInStudent = students.find(
    (student) =>
      student.studentId === enteredStudentId &&
      student.password === enteredPassword
  );

  return loggedInStudent;
};

export default login;

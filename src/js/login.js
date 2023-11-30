import students from './students';

const login = (enteredStudentId, enteredPassword) => {
  const loggedInStudent = students.find(
    (student) =>
      student.studentId === enteredStudentId &&
      student.password === enteredPassword
  );

  return loggedInStudent;
};

export default login;

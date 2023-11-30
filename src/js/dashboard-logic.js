const loggedInStudent = JSON.parse(localStorage.getItem('loggedInStudent'));

const getWelcomeMessage = () => {
  return `Welcome ${loggedInStudent.lastName} ${loggedInStudent.firstName} ${loggedInStudent.middleName}`;
};

const getPersonalDetails = () => {
  return [
    ['First Name', loggedInStudent.firstName],
    ['Last Name', loggedInStudent.lastName],
    ['Middle Name', loggedInStudent.middleName],
    ['Year', loggedInStudent.year],
    ['Faculty', loggedInStudent.faculty],
    ['Department', loggedInStudent.department],
    ['Student ID', loggedInStudent.studentId],
    ['Marital Status', loggedInStudent.maritalStatus],
    ['Nationality', loggedInStudent.nationality],
    ['Address', loggedInStudent.address],
    ['Email', loggedInStudent.email],
    ['Phone Number', loggedInStudent.phoneNumber],
  ];
};

export { getWelcomeMessage, getPersonalDetails };

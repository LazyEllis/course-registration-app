const displayCourse = (courseTitle, selectedCoursesListId) => {
  const selectedCoursesList = document.getElementById(selectedCoursesListId);
  const listItem = document.createElement('li');
  listItem.className = 'list-group-item';
  listItem.textContent = courseTitle;
  selectedCoursesList.appendChild(listItem);
};

export default displayCourse;

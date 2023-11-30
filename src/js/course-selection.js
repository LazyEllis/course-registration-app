import { renderCourseRow } from './course-renderer';
import { selectCourses } from './course-selector';
import courses from './courses';

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('courseTableBody');

  // Render course rows in the table
  courses.forEach((course) => renderCourseRow(tableBody, course));

  const submitButton = document.querySelector('.submit-button');

  // Add event listener for course selection
  submitButton.addEventListener('click', selectCourses);
});

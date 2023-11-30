import { renderCourseRow } from './course-renderer';
import { selectCourses } from './course-selector';
import courses from './courses';

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('courseTableBody');

  courses.forEach((course) => renderCourseRow(tableBody, course));

  const submitButton = document.querySelector('.submit-button');

  submitButton.addEventListener('click', selectCourses);
});

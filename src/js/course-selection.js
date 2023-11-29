import createCourseRenderer from './course-renderer';
import createCourseSelector from './course-selector';
import courses from './courses';

document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('courseTableBody');
  const { renderCourseRow } = createCourseRenderer(tableBody);

  courses.forEach((course) => renderCourseRow(course));

  const submitButton = document.querySelector('.submit-button');
  const { selectCourses } = createCourseSelector();

  submitButton.addEventListener('click', selectCourses);
});

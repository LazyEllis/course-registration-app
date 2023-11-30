import displayCourse from './selected-course-renderer';
import { getSelectedCourses, getCourseTitle } from './selected-course-manager';

document.addEventListener('DOMContentLoaded', () => {
  const selectedCoursesListId = 'selectedCoursesList';
  const storageKey = 'selectedCourses';

  const selectedCourses = getSelectedCourses(storageKey);

  selectedCourses.forEach((courseCode) => {
    const courseTitle = getCourseTitle(courseCode);
    displayCourse(courseTitle, selectedCoursesListId);
  });
});

// Manager functions for selected courses
import courses from './courses';

// Get selected courses from local storage
export const getSelectedCourses = (storageKey) => {
  return JSON.parse(localStorage.getItem(storageKey)) || [];
};

// Get course title based on course code
export const getCourseTitle = (courseCode) => {
  const selectedCourse = courses.find(
    (course) => course.courseCode === courseCode
  );
  return selectedCourse ? selectedCourse.courseTitle : 'Unknown Course';
};

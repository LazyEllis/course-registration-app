import courses from './courses';

export const getSelectedCourses = (storageKey) => {
  return JSON.parse(localStorage.getItem(storageKey)) || [];
};

export const getCourseTitle = (courseCode) => {
  const selectedCourse = courses.find(
    (course) => course.courseCode === courseCode
  );
  return selectedCourse ? selectedCourse.courseTitle : 'Unknown Course';
};

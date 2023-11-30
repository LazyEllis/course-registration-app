export const selectCourses = () => {
  const selectedCourses = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));

  alert('Courses registered successfully!');
  window.location.href = 'selected-courses.html';
};

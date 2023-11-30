export const selectCourses = () => {
  // Get selected courses from checkboxes
  const selectedCourses = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => checkbox.value);

  // Store selected courses in local storage
  localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));

  // Display success message and redirect to selected courses page
  alert('Courses registered successfully!');
  window.location.href = 'selected-courses.html';
};

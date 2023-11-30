export const renderCourseRow = (tableBody, course) => {
  const row = tableBody.insertRow();

  // Insert cells with course details
  for (const value of Object.values(course)) {
    const cell = row.insertCell();
    cell.textContent = value;
  }

  // Add checkbox for course selection
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = course.courseCode;

  // Toggle table row class based on checkbox state
  checkbox.addEventListener('change', function () {
    row.classList.toggle('table-active', this.checked);
  });

  // Append checkbox to the row
  row.appendChild(document.createElement('td')).appendChild(checkbox);
};

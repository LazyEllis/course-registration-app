export const renderCourseRow = (tableBody, course) => {
  const row = tableBody.insertRow();

  for (const value of Object.values(course)) {
    const cell = row.insertCell();
    cell.textContent = value;
  }

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.value = course.courseCode;

  checkbox.addEventListener('change', function () {
    row.classList.toggle('table-active', this.checked);
  });

  row.appendChild(document.createElement('td')).appendChild(checkbox);
};

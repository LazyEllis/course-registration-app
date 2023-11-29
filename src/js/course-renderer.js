const createCourseRenderer = (tableBody) => {
  const renderCourseRow = (course) => {
    const row = tableBody.insertRow();
    for (let i = 0; i < 4; i++) {
      const cell = row.insertCell(i);
      cell.textContent = Object.values(course)[i];
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = course.courseCode;

    checkbox.addEventListener('change', function () {
      row.classList.toggle('table-active', this.checked);
    });

    row.insertCell(4).appendChild(checkbox);
  };

  return { renderCourseRow };
};

export default createCourseRenderer;

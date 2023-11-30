const populateWelcomeMessage = (welcomeMessage) => {
  const welcomeParagraph = document.querySelector('.lead');
  welcomeParagraph.textContent = welcomeMessage;
};

const displayPersonalDetails = (personalDetails) => {
  const personalDetailsTable = document.createElement('table');
  personalDetailsTable.className =
    'table table-striped table-bordered table-hover mt-3 mb-3';

  const tableBody = document.createElement('tbody');

  personalDetails.forEach(([label, value]) => {
    const row = tableBody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.textContent = label;
    cell2.textContent = value;
  });

  personalDetailsTable.appendChild(tableBody);

  const mainContent = document.querySelector('main');
  mainContent.appendChild(personalDetailsTable);
};

export { populateWelcomeMessage, displayPersonalDetails };

// Dashboard logic and rendering
import { getWelcomeMessage, getPersonalDetails } from './dashboard-logic';
import {
  populateWelcomeMessage,
  displayPersonalDetails,
} from './dashboard-renderer';

const onDOMContentLoaded = () => {
  const welcomeMessage = getWelcomeMessage();
  const personalDetails = getPersonalDetails();

  // Populate welcome message and display personal details
  populateWelcomeMessage(welcomeMessage);
  displayPersonalDetails(personalDetails);
};

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

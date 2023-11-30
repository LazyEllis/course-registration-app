import { getWelcomeMessage, getPersonalDetails } from './dashboard-logic';
import {
  populateWelcomeMessage,
  displayPersonalDetails,
} from './dashboard-renderer';

const onDOMContentLoaded = () => {
  const welcomeMessage = getWelcomeMessage();
  const personalDetails = getPersonalDetails();

  populateWelcomeMessage(welcomeMessage);
  displayPersonalDetails(personalDetails);
};

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);

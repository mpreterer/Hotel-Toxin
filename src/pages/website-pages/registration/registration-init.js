import LoginPage from '../login/LoginPage';

const registrationSelector = document.querySelectorAll('.js-registration-main');
registrationSelector.forEach((element) => new LoginPage(element));

import LoginPage from './LoginPage';

const loginSelector = document.querySelectorAll('.js-login-page');
loginSelector.forEach((element) => new LoginPage(element));

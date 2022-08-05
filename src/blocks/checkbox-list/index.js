import CheckboxList from './CheckboxList';

const checkBoxNodes = document.querySelectorAll('.js-checkbox-list');
checkBoxNodes.forEach((element) => new CheckboxList(element));

import DropDown from './DropDown';

const dropDownsNodes = document.querySelectorAll('.js-drop-down');
dropDownsNodes.forEach((element) => new DropDown(element));

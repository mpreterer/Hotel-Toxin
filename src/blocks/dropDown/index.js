import DropDown from './DropDown';

const dropDownsNodes = document.querySelectorAll('.js-dropDown');
dropDownsNodes.forEach((element) => new DropDown(element));

import DropDown from './DropDown';
import './dropDown.scss';

const dropDownsNodes = document.querySelectorAll('.js-dropDown');
dropDownsNodes.forEach((element) => new DropDown(element));

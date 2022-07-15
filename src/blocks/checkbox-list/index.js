import CheckboxList from './CheckboxList';
import './checkbox-list.scss';

const checkBoxNodes = document.querySelectorAll('.js-checkbox-list');
checkBoxNodes.forEach((element) => new CheckboxList(element));

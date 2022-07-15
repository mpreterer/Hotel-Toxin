import TextInput from './TextInput';
import './text-input.scss';

const textInputsNodes = document.querySelectorAll('.js-text-input');
textInputsNodes.forEach((element) => new TextInput(element));

import TextInput from './TextInput';

const textInputsNodes = document.querySelectorAll('.js-text-input');
textInputsNodes.forEach((element) => new TextInput(element));

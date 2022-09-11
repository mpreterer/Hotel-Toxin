import InputMask from '../../libs/inputmask/Inputmask';

class TextInput {
  constructor(domParent) {
    this.$container = $(domParent).find('[data-masked]');

    this._init();
  }

  _init() {
    this.textInput = new InputMask({
      body: this.$container,
    });
  }
}

export default TextInput;

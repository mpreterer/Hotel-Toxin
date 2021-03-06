import 'inputmask/dist/jquery.inputmask.min';

class TextInput {
  constructor(domParent) {
    this.$container = $(domParent).find('[data-masked]');
    this._init();
  }

  _init() {
    this.$container.inputmask({
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'ДД.ММ.ГГГГ',
    });
  }
}

export default TextInput;

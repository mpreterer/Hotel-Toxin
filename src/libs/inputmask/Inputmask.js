import 'inputmask/dist/jquery.inputmask.min';

class InputMask {
  constructor(params) {
    this.$container = params.body;

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

export default InputMask;

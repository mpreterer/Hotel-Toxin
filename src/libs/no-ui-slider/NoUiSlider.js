import noUiSlider from 'nouislider';

class NoUiSlider {
  constructor(params) {
    this.container = params.body;
    this.startValue = params.start;
    this.range = params.range;
    this.minValue = params.selectorMinValue;
    this.maxValue = params.selectorMaxValue;
    this._init();
  }

  _init() {
    this.noUiSlider = noUiSlider.create(this.container, {
      start: this.startValue,
      connect: true,
      range: this.range,
    });

     this._addEvent();
  }

  _addEvent() {
    this.container.noUiSlider.on(
      'update',
      this._handleSliderUpdate.bind(this)
    );
  }

  _handleSliderUpdate(values, handle) {
    this._setRangeValue(values, handle);
  }

  _setRangeValue(values, handle) {
    const prices = [this.minValue, this.maxValue];
    prices[handle].innerHTML =
      Math.round(values[handle]).toLocaleString('ru-RU') +
      prices[handle].innerHTML.slice(-1);
  }
}

export default NoUiSlider;

import noUiSlider from 'nouislider';

class SliderRange {
  constructor(domParent) {
    this.container = domParent.querySelector('.js-slider-range');
    this._init();
  }

  _init() {
    this.minValue = this.container.querySelector('.js-slider-range__min-value');
    this.maxValue = this.container.querySelector('.js-slider-range__max-value');
    this.slider = this.container.querySelector('.js-slider-range__slider');
    this.hasSlider = this.slider !== null && this.slider !== undefined;

    this._initOptions();
  }

  _initOptions() {
    if (this.hasSlider) {
      noUiSlider.create(this.slider, {
        start: [5000, 10000],
        connect: true,
        range: {
          min: 0,
          max: 15000,
        },
      });

      this._addEvent();
    }
  }

  _addEvent() {
    this.slider.noUiSlider.on('update', this._updateValueRange.bind(this));
  }

  _updateValueRange(values, handle) {
    this._setRangeValue(values, handle);
  }

  _setRangeValue(values, handle) {
    const prices = [this.minValue, this.maxValue];
    prices[handle].innerHTML = Math.round(values[handle]).toLocaleString('ru-RU') + prices[handle].innerHTML.slice(-1);
  }
}

export default SliderRange;

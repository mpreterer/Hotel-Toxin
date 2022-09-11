import NoUiSlider from '../../libs/no-ui-slider/NoUiSlider';

class SliderRange {
  constructor(domParent) {
    this.container = domParent;
    this._init();
  }

  _init() {
    this.minValue = this.container.querySelector('.js-min-value');
    this.maxValue = this.container.querySelector('.js-max-value');
    this.slider = this.container.querySelector('.js-slider');
    this.startValues = this.container.getAttribute('data-range');
    this.rangeMaxValues = this.container.getAttribute('data-range-max');
  
    this._initOptions();
  }

  _initOptions() {
    const startValues = JSON.parse(this.startValues);
    const rangeMaxValues = JSON.parse(this.rangeMaxValues);

    this.sliderRange = new NoUiSlider({
      body: this.slider,
      start: [startValues.min, startValues.max],
      connect: true,
      range: {
        min: rangeMaxValues.min,
        max: rangeMaxValues.max,
      },
      selectorMinValue: this.minValue,
      selectorMaxValue: this.maxValue,
    });
  }
}

export default SliderRange;

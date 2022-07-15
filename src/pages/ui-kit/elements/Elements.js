import './elements.scss';
import '../../style.scss';
import '../../website-pages/search-room/search-room.scss';
import '../../website-pages/room-details/room-details.scss';
import '../../website-pages/registration/registration.scss';
import '../../website-pages/login/login.scss';

import DropDown from '../../../blocks/dropDown/DropDown';
import TextInput from '../../../blocks/text-input/TextInput';
import '../../../blocks/alone-calendar';
import CheckboxList from '../../../blocks/checkbox-list/CheckboxList';
import StarsRating from '../../../blocks/stars-rating/StarsRating';
import '../../../blocks/button-like';
import SliderRange from '../../../blocks/slider-range/SliderRange';
import Pagination from '../../../blocks/pagination/Pagination';

class Elements {
  constructor() {
    this._init();
  }

  _init() {
    const {
      dropDown,
      dropDownNoPanel,
      textFiled,
      checkboxList,
      starsRating,
      sliderRange,
      pagination,
    } = this._getElements();

    dropDown.forEach((item) => new DropDown(item, ['гость', 'гостя', 'гостей']));
    dropDownNoPanel.forEach((item) => new DropDown(item));
    textFiled.forEach((item) => new TextField(item));
    checkboxList.forEach((item) => new CheckboxList(item));
    starsRating.forEach((item) => new StarsRating(item));
    sliderRange.forEach((item) => new SliderRange(item));
    pagination.forEach((domParent) => new Pagination(domParent, {
      items: 180,
      itemsOnPage: 12,
      displayedPages: 3,
    }));
  }

  _getElements() {
    return {
      dropDown: document.querySelectorAll('[data-component-js="js-dropDown"]'),
      dropDownNoPanel: document.querySelectorAll('[data-component-js="js-dropDown-without-panel"]'),
      textFiled: document.querySelectorAll('[data-component-js="js-text-field"]'),
      checkboxList: document.querySelectorAll('[data-component-js="js-checkbox-list"]'),
      starsRating: document.querySelectorAll('[data-component-js="js-rate-buttons"]'),
      sliderRange: document.querySelectorAll('[data-component-js="js-slider-range"]'),
      pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
    };
  }
}

new Elements();

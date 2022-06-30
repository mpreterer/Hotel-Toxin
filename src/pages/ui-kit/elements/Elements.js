import './elements.scss';
import '../../style.scss';
import '../../website-pages/search-room/search-room.scss';
import '../../website-pages/room-details/room-details.scss';
import '../../website-pages/registration/Registration.scss';
import '../../website-pages/login/login.scss';

import DropDown from '../../../blocks/dropDown/dropDown';
import TextField from '../../../blocks/text-input/text-input';
import AloneCalendar from '../../../blocks/alone-calendar/alone-calendar';
import CheckboxList from '../../../blocks/checkbox-list/checkbox-list';
import StarsRating from '../../../blocks/stars-rating/stars-rating';
import ButtonLike from '../../../blocks/button-like/button-like';
import SliderRange from '../../../blocks/slider-range/slider-range';
import Pagination from '../../../blocks/pagination/pagination';

class Elements {
  constructor() {
    this._init();
  }

  _init() {
    const {
      dropDown,
      dropDownNoPanel,
      textFiled,
      aloneCalendar,
      checkboxList,
      starsRating,
      buttonLike,
      sliderRange,
      pagination,
    } = this._getElements();

    dropDown.forEach((item) => new DropDown(item, ['гость', 'гостя', 'гостей']));
    dropDownNoPanel.forEach((item) => new DropDown(item));
    textFiled.forEach((item) => new TextField(item));
    aloneCalendar.forEach((item) => new AloneCalendar(item));
    checkboxList.forEach((item) => new CheckboxList(item));
    starsRating.forEach((item) => new StarsRating(item));
    buttonLike.forEach((item) => new ButtonLike(item));
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
      aloneCalendar: document.querySelectorAll('[data-component-js="js-alone-calendar"]'),
      checkboxList: document.querySelectorAll('[data-component-js="js-checkbox-list"]'),
      starsRating: document.querySelectorAll('[data-component-js="js-rate-buttons"]'),
      buttonLike: document.querySelectorAll('.js-button-like'),
      sliderRange: document.querySelectorAll('[data-component-js="js-slider-range"]'),
      pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
    };
  }
}

new Elements();

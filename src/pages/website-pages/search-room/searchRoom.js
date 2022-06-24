import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './searchRoom.scss';
import '../../style.scss';
import '../../../blocks/button/button.scss';
import '../../../assets/scss/simplePagination.css';

import dropDown from '../../../blocks/dropDown/dropDown.js';
import SliderRange from '../../../blocks/slider-range/slider-range.js'
import '../../../blocks/alone-calendar/alone-calendar-init.js';
import '../../../blocks/alone-calendar/alone-calendar.js';
import '../../../blocks/checkbox-list/checkbox-list.js'
import '../../../blocks/checkbox-list/checkbox-list-init.js'
import '../../../blocks/room-info/room-info.js'
import '../../../blocks/room-info/room-info-init.js'
import '../../../blocks/pagination/pagination.js'
import '../../../blocks/pagination/pagination-init.js'
import '../../../blocks/stars-rating/stars-rating-init.js'
import '../../../blocks/stars-rating/stars-rating.js'
import '../../../blocks/nav-menu/nav-menu.js'

class SearchRoom {
    constructor() {
      this._init();
    }
  
    _init() {
      const { 
        dropDowns,

       } = this._get_elements();

      dropDowns.forEach((item) => new dropDown(item));
      dropDowns.forEach((item) => new SliderRange(item));
      
    }
  
    _get_elements() {
      return {
        dropDowns: document.querySelectorAll('[data-component-js="js-dropDown"]'),
      };
    }
}

export default SearchRoom;

new SearchRoom();

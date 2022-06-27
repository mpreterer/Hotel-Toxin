import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './searchRoom.scss';
import '../../style.scss';
import '../../../assets/scss/simplePagination.css';

import dropDown from '../../../blocks/dropDown/dropDown.js';
import SliderRange from '../../../blocks/slider-range/slider-range.js'
import AloneCalendar from '../../../blocks/alone-calendar/alone-calendar.js';
import CheckboxList from '../../../blocks/checkbox-list/checkbox-list.js'
import RoomInfo from '../../../blocks/room-info/room-info.js'
import Pagination from '../../../blocks/pagination/pagination.js'
import NavMenu from '../../../blocks/nav-menu/nav-menu.js'

class SearchRoom {
    constructor() {
      this._init();
    }
    
    _init() {
      const { 
        dropDowns,
        sliders,
        aloneCalendares,
        checkboxLists,
        rooms,
        pagination
       } = this._get_elements();

      new NavMenu(document);
      dropDowns.forEach((item) => new dropDown(item));
      sliders.forEach((item) => new SliderRange(item));
      aloneCalendares.forEach((item) => new AloneCalendar(item));
      checkboxLists.forEach((item) => new CheckboxList(item));
      rooms.forEach((item) => new RoomInfo(item));
      pagination.forEach((domParent) => new Pagination(domParent, {
          items: 180,
          itemsOnPage: 12,
          displayedPages: 3,
      }));
    }
  
    _get_elements() {
      return {
        dropDowns: document.querySelectorAll('[data-component-js="js-dropDown"]'),
        sliders: document.querySelectorAll('[data-component-js="js-slider"]'),
        aloneCalendares: document.querySelectorAll('[data-components-js="js-alone-calendares"]'),
        checkboxLists: document.querySelectorAll('[data-component-js="js-checkbox-lists"]'),
        rooms: document.querySelectorAll('[data-component-js="js-rooms"]'),
        pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
      };
    }
}

export default SearchRoom;

new SearchRoom();
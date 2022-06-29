import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './search-room.scss';
import '../../style.scss';
import '../../../assets/styles/simplePagination.css';

<<<<<<< HEAD
import DropDown from '../../../blocks/dropDown/DropDown';
import SliderRange from '../../../blocks/slider-range/slider-range';
import AloneCalendar from '../../../blocks/alone-calendar/alone-calendar';
import CheckboxList from '../../../blocks/checkbox-list/checkbox-list';
import RoomInfo from '../../../blocks/room-info/room-info';
import Pagination from '../../../blocks/pagination/pagination';
import NavMenu from '../../../blocks/nav-menu/nav-menu';

class SearchRoom {
  constructor() {
    this._init();
  }
=======
import DropDown from '../../../blocks/dropDown/DropDown.js';
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
      dropDowns.forEach((item) => new DropDown(item));
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
>>>>>>> d6ffc2df42e9cdc20583dc04fde4bf6679dd073a
  
  _init() {
    const {
      dropDowns,
      dropDownNoPanel,
      sliders,
      aloneCalendares,
      checkboxLists,
      rooms,
      pagination,
    } = this._getElements();

    new NavMenu(document);
    dropDowns.forEach((item) => new DropDown(item, ['гость', 'гостя', 'гостей']));
    dropDownNoPanel.forEach((item) => new DropDown(item));
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

  _getElements() {
    return {
      dropDowns: document.querySelectorAll('[data-component-js="js-dropDown"]'),
      sliders: document.querySelectorAll('[data-component-js="js-slider"]'),
      aloneCalendares: document.querySelectorAll('[data-components-js="js-alone-calendares"]'),
      checkboxLists: document.querySelectorAll('[data-component-js="js-checkbox-lists"]'),
      rooms: document.querySelectorAll('[data-component-js="js-rooms"]'),
      pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
      dropDownNoPanel: document.querySelectorAll('[data-component-js="js-dropDown-without-panel"]'),
    };
  }
}

export default SearchRoom;

new SearchRoom();

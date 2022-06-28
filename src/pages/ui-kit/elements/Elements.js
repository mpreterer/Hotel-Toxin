import './elements.scss';
import '../../style.scss';
import '../../website-pages/search-room/search-room.scss';
import '../../website-pages/room-details/room-details.scss';
import '../../website-pages/registration/Registration.scss';
import '../../website-pages/login/login.scss';

import DropDown from '../../../blocks/dropDown/DropDown';
import TextField from '../../../blocks/text-input/text-input.js';
import AloneCalendar from '../../../blocks/alone-calendar/alone-calendar';
import CheckboxList from '../../../blocks/checkbox-list/checkbox-list.js';
import StarsRating from '../../../blocks/stars-rating/stars-rating.js';
import ButtonLike from '../../../blocks/button-like/button-like.js';
import SliderRange from '../../../blocks/slider-range/slider-range.js';
import Pagination from '../../../blocks/pagination/pagination.js';

class Elements {
    constructor() {
        this._init();
    }
    
    _init() {
        const { 
            dropDown,
            textFiled,
            aloneCalendar,
            checkboxList,
            starsRating,
            buttonLike,
            sliderRange,
            pagination
         } = this._get_elements();

        dropDown.forEach((item) => new DropDown(item));
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
    
    _get_elements() {
        return {
            dropDown: document.querySelectorAll('[data-component-js="js-dropDown"]'),
            textFiled: document.querySelectorAll('[data-component-js="js-text-field"]'),
            aloneCalendar: document.querySelectorAll('[data-component-js="js-alone-calendar"]'),
            checkboxList: document.querySelectorAll('[data-component-js="js-checkbox-list"]'),
            starsRating: document.querySelectorAll('[data-component-js="js-rate-buttons"]'),
            buttonLike: document.querySelectorAll('[data-component-js="js-like-buttons"]'),
            sliderRange: document.querySelectorAll('[data-component-js="js-slider-range"]'),
            pagination: document.querySelectorAll('[data-component-js="js-pagination"]'),
        };
    }
}

new Elements();

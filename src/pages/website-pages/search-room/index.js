import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './searchRoom.scss';
import '../../style.scss';
import '../../../assets/scss/range.scss';
import '../../../blocks/calendar/calendar.scss';
import '../../../assets/scss/simplePagination.css';
import '../../../blocks/dropDown/dropDown.scss';
import '../../../blocks/filter/filter.scss';
import '../../../blocks/button/button.scss';
import '../../../blocks/footer/footer.scss';
import '../../../blocks/header/header.scss';
import '../../../blocks/slider-range/slider-range.scss';
import '../../../blocks/alone-calendar/alone-calendar.scss';
import '../../../blocks/custom-checkbox/custom-checkbox.scss'
import '../../../blocks/checkbox-double-name/checkbox-double-name.scss'
import '../../../blocks/checkbox-list/checkbox-list.scss'


import '../../../js/jquery-3.6.0.min.js';
import '../../../blocks/dropDown/dropDown.js';
import '../../../blocks/dropDown/dropDownInit.js'
import '../../../blocks/slider-range/slider-range-init.js'
import 'slick-carousel/slick/slick.min.js';
import '../../../js/jquery.simplePagination.js';
import '../../../blocks/alone-calendar/alone-calendar-init.js';
import '../../../blocks/alone-calendar/alone-calendar.js';
import '../../../blocks/checkbox-list/checkbox-list.js'
import '../../../blocks/checkbox-list/checkbox-list-init.js'

$(function(){
  $('#pagination').pagination({
      items: 57,
      itemsOnPage: 4,
      displayedPages: 3,
      edges: 1,
      prevText: '',
      nextText: ' '
  });
});

import '../../../js/count-pagination.js'

$(function(){
  $('.slider-rooms').slick({
    dots: true,
  })
});


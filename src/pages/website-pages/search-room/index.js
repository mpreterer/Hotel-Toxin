import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import './searchRoom.scss';
import '../../style.scss';
import '../../../assets/scss/range.scss';
import '../../../assets/scss/datepicker.min.scss';
import '../../../assets/scss/simplePagination.css';
import '../../../blocks/dropDown/dropDown.scss';
import '../../../blocks/filter/filter.scss';
import '../../../blocks/button/button.scss';


import '../../../js/jquery-3.6.0.min.js';
import '../../../js/datepicker.min.js';
import '../../../blocks/dropDown/dropDown.js';
import '../../../js/value.js';
import '../../../js/range.js';
import '../../../js/close.js';
import '../../../js/clear_conv.js';
import '../../../js/close__conveniences1.js';
import '../../../js/conveniences.js';
import '../../../js/close_conveniences.js';
import 'slick-carousel/slick/slick.min.js';
import '../../../js/jquery.simplePagination.js'

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

$('#date-words').datepicker({
  dateFormat: 'd MM'
})



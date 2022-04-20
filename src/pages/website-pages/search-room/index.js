import './searchRoom.scss'
import '../../style.scss'
import '../../../assets/scss/range.scss'
import '../../../assets/scss/datepicker.min.scss'


import '../../../js/jquery-3.6.0.min.js'
import '../../../js/datepicker.min.js'
import '../../../js/click.js'
import '../../../js/value.js'
import '../../../js/range.js'
import '../../../js/close.js'
import '../../../js/clear.js'
import '../../../js/clear_conv.js'
import '../../../js/close__conveniences1.js'
import '../../../js/conveniences.js'
import '../../../js/close_conveniences.js'
import '../../../js/scriptChart.js'
import 'slick-carousel/slick/slick.min.js';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'chart.js'


$(function(){
  $('.slider-rooms').slick({
    dots: true,
  })
});

$("#date-words").datepicker({
  dateFormat: 'd MM'
})
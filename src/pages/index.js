import './style.scss'
import '../blocks/filter/filter.scss'
import '../assets/scss/datepicker.min.scss'

import '../js/jquery-3.6.0.min.js'
import '../js/datepicker.min.js' 
import '../blocks/dropDown/dropDown.js'
import '../blocks/dropDown/dropDown.scss'
import '../js/clear.js'
import '../js/close.js'

$('#first_date').datepicker({ 
    onSelect: function (fd, d, picker) { 
      $("#first_date").val(fd.split("-")[0]);
      $("#second_date").val(fd.split("-")[1]);
    }
});
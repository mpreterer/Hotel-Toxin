import './roomDetails.scss'
import '../../../assets/scss/datepicker.min.scss'
import '../../../assets/scss/Chart.min.css'
import '../../../blocks/filter/filter.scss'
import '../../../blocks/dropDown/dropDown.scss'
import '../../style.scss'

import '../../../js/jquery-3.6.0.min.js'
import '../../../js/datepicker.min.js' 
import '../../../js/like.js'
import '../../../js/close.js'
import '../../../js/clear.js'
import '../../../blocks/dropDown/dropDown.js'
import '../../../js/datepicker.min.js'
import '../../../js/Chart.min.js'

let ctx = document.getElementById('myChart');
ctx.height = 120;
ctx.width = 120;

const dataDoughnut = {
    labels: ['Удовлетворительно','Хорошо','Великолепно'],
    datasets: [
        {
            backgroundColor: ['#93A3FA','#69D1CF','#FFCA9C'],
            data: [260,260,520],
        }
    ]
}

const chart = new Chart(ctx, {
    type: 'doughnut',   
    data: dataDoughnut,
    options: {
        legend: {
            display: false,
        },
        cutoutPercentage: 90,
    },
});

$('#first_date2').datepicker({ 
    onSelect: function (fd, d, picker) { 
      $("#first_date2").val(fd.split("-")[0]);
      $("#second_date2").val(fd.split("-")[1]);
    }
});
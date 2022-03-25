// $(document).ready(function(){
//     var ctx = $('#chart').get(0).getContext('2d');

//     var data = [
//         {
//             value: 260,
//             color: '#93A3FA',
//             label: 'Удовлетворительно',
//         },
//         {
//             value: 260,
//             color: '#69D1CF',
//             label: 'Хорошо'
//         },
//         {
//             value: 520,
//             color: '#FFCA9C',
//             label: 'Великолепно',
//             boxWidth: 0.5,
//         },
//     ];

//     var chart = new Chart(ctx).Doughnut(data);
// })

// // tooltipFontSize: 6,
new DonutChart(document.getElementById('myChart'), {
    data: [
      { label: 'red', value: 120, color: '#F15F5F' },
      { label: 'green', value: 250, color: '#BCE55C' },
      { label: 'blue', value: 180, color: '#B2CCFF' },
      { label: 'yellow', value: 70, color: '#FFE08C' },
    ],
    holeSize: 0.6,
    animationSpeed: 0.5,
  });
const element = document.querySelector('.datepicker-here');
const left = document.querySelector('.date_departure .datepicker-here');

document.addEventListener('click', function() {

    var date = document.querySelector('.datepicker-here').value;
    document.querySelector('.date_arrival .datepicker-here').value = date.slice(0,10);
    document.querySelector('.date_departure .datepicker-here').value = date.slice(13);
})

    

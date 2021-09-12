const date = document.querySelector('.datepicker');
var leftDate = document.querySelector('.datepicker-here.field-date-left');
var rightDate = document.querySelector('.datepicker-here.field-date-right');
var tempLeft = 0;
var tempRight = 0;


leftDate.addEventListener('click', function() {
    document.querySelector('body').addEventListener('click', function() {
        tempLeft = leftDate.value;

        leftDate.value = tempLeft.slice(0,10)
        rightDate.value = tempLeft.slice(12)
    })
})

rightDate.addEventListener('click', function() {
    document.querySelector('body').addEventListener('click', function() {
        tempRight = rightDate.value;

        leftDate.value = tempRight.slice(0,10)
        rightDate.value = tempRight.slice(12)
    })
})
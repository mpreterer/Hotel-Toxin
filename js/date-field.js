const date = document.querySelector('.datepicker');
var leftDate = document.querySelector('.datepicker-here.field-date-left');
var rightDate = document.querySelector('.datepicker-here.field-date-right');


leftDate.addEventListener('click', function() {
    let tempLeft = 0;

    tempLeft = leftDate.value;
    leftDate.value = tempLeft.slice(0,10)
    rightDate.value = tempLeft.slice(12)
})

rightDate.addEventListener('click', function() {
    let tempRight = 0;

    tempRight = rightDate.value;
    leftDate.value = tempRight.slice(0,10)
    rightDate.value = tempRight.slice(12)
})
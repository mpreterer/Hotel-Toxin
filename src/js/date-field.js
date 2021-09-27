// var dateLR = document.querySelector('.datepicker-here')
var leftDate = document.querySelector('.datepicker-here.field-date-left');
var rightDate = document.querySelector('.datepicker-here.field-date-right');

if (leftDate.value !== "" || leftDate.value !== NaN) {
    let tempdateLeft = leftDate.value;

    leftDate.value = tempdateLeft.slice(0,10);
    rightDate.value = tempdateLeft.slice(12);
} else {
    let tempdateRight = rightDate.value;

    leftDate.value = tempdateRight.slice(0,10);
    rightDate.value = tempdateRight.slice(12);
}
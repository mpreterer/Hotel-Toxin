const clear = document.querySelector('#clear');
const counterClear = document.querySelector('.counte_guests');
const gst = document.querySelector('.guests');
const dropB = document.querySelector('.dropBlock');

var coun1 = document.querySelector('#counter1');
var coun2 = document.querySelector('#counter2');
var coun3 = document.querySelector('#counter3');

gst.addEventListener('click',function() {
  if (counterClear.value === '') {
    clear.classList.add('hiden_clear');
  } else {
    clear.classList.remove('hiden_clear');
  }
})

dropB.addEventListener('click', function() {
  if (counterClear.value === '') {
    clear.classList.add('hiden_clear');
  } else {
    clear.classList.remove('hiden_clear');
      clear.addEventListener('click',function() {
        coun1.value = 0;
        coun2.value = 0;
        coun3.value = 0;

        counterClear.value = '';
        clear.classList.add('hiden_clear');
      })
  }
})
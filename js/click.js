const counter = document.querySelector('.counte_guests');

const c1 = document.querySelector('#counter1');
const c2 = document.querySelector('#counter2');
const c3 = document.querySelector('#counter3');


const plus1 = document.querySelector('.circle_drop_plus1');  
const plus2 = document.querySelector('.circle_drop_plus2');  
const plus3 = document.querySelector('.circle_drop_plus3');  

const minus1 = document.querySelector('.circle_drop_minus1');
const minus2 = document.querySelector('.circle_drop_minus2');
const minus3 = document.querySelector('.circle_drop_minus3');

var both = 0;
var old = 0;
var young = 0;

function plus(directPlus) {
  directPlus.addEventListener('click', () => {
    old += 1;
    let val1 = +counter.value.substr(0,1)

    if ( val1 === 1 || val1 === 21 )
    {
      counter.value = old + young + ' гость';
    } else if ( val1 >= 2 && val1 <= 4 || val1 >= 22 && val1 <= 24) {
      counter.value = old + young + ' гостя';
    } else {
      counter.value = old + young + ' гостей';
    }

    c1.value = old;
  })
}

function plusYoung(directPlus) {
  directPlus.addEventListener('click', () => {
    young += 1;

   if ( value === 1 || value === 21 )
    {
      counter.value = old + young + ' гость';
    } else if ( value >= 2 && value <= 4 || value >= 22 && value <= 24) {
      counter.value = old + young + ' гостя';
    } else if (both === 0) {
      counter.value = `${old + young} гостей`;
    } else {
      counter.value = `${old + young} гостей ${plusBoth(plus3)}`;
    }

    c2.value = young;
  })
}

function plusBoth(directPlus) {
  directPlus.addEventListener('click', () => {
    both += 1;
    if ( both === 1 || both === 21 ) {
      counter.value += ` ${both} младенец`;
    } else if ( both >= 2 && both <= 4 || both >= 22 && both <= 24) {
      counter.value = ` ${both} младенеца`;
    } else {
      counter.value = ` ${both} младенецев`;
    }
  })
}

plus(plus1);
plusYoung(plus2);
plusBoth(plus3);

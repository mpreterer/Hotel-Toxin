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

const clear = document.getElementById('clear');

var both = 0;
var old = 0;
var young = 0;
var strGuest = '';
var strBoth = '';

function plus(directPlus) {
  directPlus.addEventListener('click', () => {
    old += 1;

    if ( both === 0 ) {
      if ( old + young === 1 || old + young === 21 )
        {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest}`;
      } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${old + young} ${strGuest}`;
      } else {
          strGuest = 'гостей';
          counter.value = `${old + young} ${strGuest}`;
      }

    } else {
      if ( old + young === 1 || old + young === 21 )
        {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      } else {
          strGuest = 'гостей';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      }

    }

    c1.value = old;
  })
}

function minus(directMinus) {
  directMinus.addEventListener('click', () => {
    old -= 1;

    if (old<0) {
      old = 0;
    }

    if ( both === 0 ) {
      if ( old + young === 1 || old + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest}`;
      } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${old + young} ${strGuest}`;
      } else if ( old + young <= 0 ) {
          counter.value = '';
        c1.value = 0;
      } else {
          strGuest = 'гостей';
          counter.value = `${old + young} ${strGuest}`;
      }

    } else {
      if ( old + young === 1 || old + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      } else if ( old + young <= 0 ) {
          strGuest = '';
          counter.value = `${both} ${strBoth}`
          c1.value = 0;
      } else {
          strGuest = 'гостей';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      }
    }

    c1.value = old;
  })
}



function plusYoung(directPlus) {
  directPlus.addEventListener('click', () => {
    young += 1;

   if ( both === 0 ) {
     if ( old + young === 1 || old + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest}`;
     } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя';
          counter.value = `${old + young} ${strGuest}`;
     } else {
          strGuest = 'гостей';
          counter.value = `${old + young} ${strGuest}`;
     }

   } else {
      if ( old + young === 1 || old + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
     } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
     } else {
          strGuest = 'гостей';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
     }
   }

    c2.value = young;
  })
}

function minusYoung(directMinus) {
  directMinus.addEventListener('click', () => {
    young -= 1;

    if ( young < 0 ) {
      young = 0;
    }

    if ( both === 0 ) {
      if ( old + young === 1 || old + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest}`;
      } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${old + young} ${strGuest}`;
      } else if ( old + young <= 0) {
          counter.value = '';
          c2.value = 0;
      } else {
          counter.value = `${old + young} ${strGuest}`;
      }
    } else {
      if ( old + young === 1 || old + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      } else if ( old + young >= 2 && old + young <= 4 || old + young >= 22 && old + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      } else if ( old + young <= 0) {
          strGuest = '';
          counter.value = `${both} ${strBoth}`
          c2.value = 0;
      } else {
          strGuest = 'гостей'
          counter.value = `${old + young} ${strGuest} ${both} ${strBoth}`;
      }
    }

    c2.value = young;
  })
}

function plusBoth(directMinus) {
  directMinus.addEventListener('click', () => {
    both += 1;

    if ( old + young === 0 ) {
      if ( both === 1 || both === 21 ) {
        strBoth = 'младенец';
        counter.value = ` ${both} ${strBoth}`;
      } else if ( both >= 2 && both <= 4 || both >= 22 && both <= 24 ) {
        strBoth = 'младенеца';
        counter.value = ` ${both} ${strBoth}`;
      } else {
        strBoth = 'младенецев';
        counter.value = ` ${both} ${strBoth}`;
      }
    }
    else { 
      if ( both === 1 || both === 21 ) {
        strBoth = 'младенец';
        counter.value = `${old + young} ${strGuest}`;
        counter.value += ` ${both} ${strBoth}`;
      } else if ( both >= 2 && both <= 4 || both >= 22 && both <= 24 ) {
        strBoth = 'младенеца';
        counter.value = `${old + young} ${strGuest}`;
        counter.value += ` ${both} ${strBoth}`;
      } else {
        strBoth = 'младенецев';
        counter.value = `${old + young} ${strGuest}`;
        counter.value += ` ${both} ${strBoth}`;
      }
    }

    c3.value = both;
  })
}

function minusBoth(directMinus) {
  directMinus.addEventListener('click', () => {
    both -= 1;

    if ( both <= 0 ) {
      both = 0;
    }

    if ( old + young === 0 ) {
      if ( both === 1 || both === 21 ) {
        strBoth = 'младенец';
        counter.value = ` ${both} ${strBoth}`;
      } else if ( both >= 2 && both <= 4 || both >= 22 && both <= 24 ) {
        strBoth = 'младенеца';
        counter.value = ` ${both} ${strBoth}`;
      } else if ( both <= 0 ) {
        both = 0;
        strBoth = '';
        counter.value = '';
        c3.value = both;
      } else {
        strBoth = 'младенецев';
        counter.value = ` ${both} ${strBoth}`;
      }
    }

    else {
      if ( both === 1 || both === 21 ) {
        strBoth = 'младенец';
        counter.value = `${old + young} ${strGuest}`;
        counter.value += ` ${both} ${strBoth}`;
      } else if ( young + old === 0 ) {
        counter.value = `${both} ${strBoth}`;
      } else if ( both >= 2 && both <= 4 || both >= 22 && both <= 24 ) {
        strBoth = 'младенеца';
        counter.value = `${old + young} ${strGuest}`;
        counter.value += ` ${both} ${strBoth}`;
      } else if ( both <= 0 ) {
        counter.value = `${old + young} ${strGuest}`;
        c3.value = 0;
      } else {
        strBoth = 'младенецев';
        counter.value = `${old + young} ${strGuest}`;
        counter.value += ` ${both} ${strBoth}`;
      }
    }
    

    c3.value = both;
  })
}

clear.onclick = function() {
  old = 0;
  young = 0;
  both = 0;
  strGuest = '';
  strBoth = '';
}

plus(plus1);
minus(minus1);

plusYoung(plus2);
minusYoung(minus2);

plusBoth(plus3);
minusBoth(minus3)

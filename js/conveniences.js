const conv = document.querySelector('.conveniences');
const dropCon = document.querySelector('.dropBlockCon');

conv.onclick = () => {
  if ( dropCon.classList.contains('hide') ) {
    dropCon.classList.remove('hide');
  } else {
    dropCon.classList.add('hide');
  }
}





const counterCon = document.querySelector('.counte_conveniences');

const Con1 = document.querySelector('#counter1');
const Con2 = document.querySelector('#counter2');
const Con3 = document.querySelector('#counter3');

const plusCon1 = document.querySelector('.circle_con_plus1');  
const plusCon2 = document.querySelector('.circle_con_plus2');  
const plusCon3 = document.querySelector('.circle_con_plus3');  

const minusCon1 = document.querySelector('.circle_con_minus1');
const minusCon2 = document.querySelector('.circle_con_minus2');
const minusCon3 = document.querySelector('.circle_con_minus3');

var bathrooms = 0;
var bedrooms = 0;
var young = 0;
var strGuest = '';
var strBoth = '';


function plus(directPlus) {
  directPlus.addEventListener('click', () => {
    bedrooms += 1;

    if ( bathrooms === 0 ) {
      if ( bedrooms + young === 1 || bedrooms + young === 21 )
        {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest}`;
      } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${bedrooms + young} ${strGuest}`;
      } else {
          strGuest = 'гостей';
          counter.value = `${bedrooms + young} ${strGuest}`;
      }

    } else {
      if ( bedrooms + young === 1 || bedrooms + young === 21 )
        {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      } else {
          strGuest = 'гостей';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      }

    }

    Con1.value = bedrooms;
  })
}

function minus(directMinus) {
  directMinus.addEventListener('click', () => {
    bedrooms -= 1;

    if (bedrooms<0) {
      bedrooms = 0;
    }

    if ( bathrooms === 0 ) {
      if ( bedrooms + young === 1 || bedrooms + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest}`;
      } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${bedrooms + young} ${strGuest}`;
      } else if ( bedrooms + young <= 0 ) {
          counter.value = '';
        c1.value = 0;
      } else {
          strGuest = 'гостей';
          counter.value = `${bedrooms + young} ${strGuest}`;
      }

    } else {
      if ( bedrooms + young === 1 || bedrooms + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      } else if ( bedrooms + young <= 0 ) {
          strGuest = '';
          counter.value = `${bathrooms} ${strBoth}`
          c1.value = 0;
      } else {
          strGuest = 'гостей';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      }
    }

    Con1.value = bedrooms;
  })
}



function plusYoung(directPlus) {
  directPlus.addEventListener('click', () => {
    young += 1;

   if ( bathrooms === 0 ) {
     if ( bedrooms + young === 1 || bedrooms + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest}`;
     } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя';
          counter.value = `${bedrooms + young} ${strGuest}`;
     } else {
          strGuest = 'гостей';
          counter.value = `${bedrooms + young} ${strGuest}`;
     }

   } else {
      if ( bedrooms + young === 1 || bedrooms + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
     } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
     } else {
          strGuest = 'гостей';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
     }
   }

    Con2.value = young;
  })
}

function minusYoung(directMinus) {
  directMinus.addEventListener('click', () => {
    young -= 1;

    if ( young < 0 ) {
      young = 0;
    }

    if ( bathrooms === 0 ) {
      if ( bedrooms + young === 1 || bedrooms + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest}`;
      } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${bedrooms + young} ${strGuest}`;
      } else if ( bedrooms + young <= 0) {
          counter.value = '';
          c2.value = 0;
      } else {
          counter.value = `${bedrooms + young} ${strGuest}`;
      }
    } else {
      if ( bedrooms + young === 1 || bedrooms + young === 21 ) {
          strGuest = 'гость';
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      } else if ( bedrooms + young >= 2 && bedrooms + young <= 4 || bedrooms + young >= 22 && bedrooms + young <= 24) {
          strGuest = 'гостя'
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      } else if ( bedrooms + young <= 0) {
          strGuest = '';
          counter.value = `${bathrooms} ${strBoth}`
          c2.value = 0;
      } else {
          strGuest = 'гостей'
          counter.value = `${bedrooms + young} ${strGuest} ${bathrooms} ${strBoth}`;
      }
    }

    Con2.value = young;
  })
}

function plusBoth(directMinus) {
  directMinus.addEventListener('click', () => {
    bathrooms += 1;

    if ( bedrooms + young === 0 ) {
      if ( bathrooms === 1 || bathrooms === 21 ) {
        strBoth = 'младенец';
        counter.value = ` ${bathrooms} ${strBoth}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24 ) {
        strBoth = 'младенеца';
        counter.value = ` ${bathrooms} ${strBoth}`;
      } else {
        strBoth = 'младенецев';
        counter.value = ` ${bathrooms} ${strBoth}`;
      }
    }
    else { 
      if ( bathrooms === 1 || bathrooms === 21 ) {
        strBoth = 'младенец';
        counter.value = `${bedrooms + young} ${strGuest}`;
        counter.value += ` ${bathrooms} ${strBoth}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24 ) {
        strBoth = 'младенеца';
        counter.value = `${bedrooms + young} ${strGuest}`;
        counter.value += ` ${bathrooms} ${strBoth}`;
      } else {
        strBoth = 'младенецев';
        counter.value = `${bedrooms + young} ${strGuest}`;
        counter.value += ` ${bathrooms} ${strBoth}`;
      }
    }

    Con3.value = bathrooms;
  })
}

function minusBoth(directMinus) {
  directMinus.addEventListener('click', () => {
    bathrooms -= 1;

    if ( bathrooms <= 0 ) {
      bathrooms = 0;
    }

    if ( bedrooms + young === 0 ) {
      if ( bathrooms === 1 || bathrooms === 21 ) {
        strBoth = 'младенец';
        counter.value = ` ${bathrooms} ${strBoth}`;
      } else if ( young + bedrooms === 0 ) {
        counter.value = `${bathrooms} ${strBoth}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24 ) {
        strBoth = 'младенеца';
        counter.value = ` ${bathrooms} ${strBoth}`;
      } else if ( bathrooms <= 0 ) {
        bathrooms = 0;
        strBoth = '';
        counter.value = '';
        c3.value = bathrooms;
      } else {
        strBoth = 'младенецев';
        counter.value = ` ${bathrooms} ${strBoth}`;
      }
    }

    else {
      if ( bathrooms === 1 || bathrooms === 21 ) {
        strBoth = 'младенец';
        counter.value = `${bedrooms + young} ${strGuest}`;
        counter.value += ` ${bathrooms} ${strBoth}`;
      } else if ( young + bedrooms === 0 ) {
        counter.value = `${bathrooms} ${strBoth}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24 ) {
        strBoth = 'младенеца';
        counter.value = `${bedrooms + young} ${strGuest}`;
        counter.value += ` ${bathrooms} ${strBoth}`;
      } else if ( bathrooms <= 0 ) {
        counter.value = `${bedrooms + young} ${strGuest}`;
        c3.value = 0;
      } else {
        strBoth = 'младенецев';
        counter.value = `${bedrooms + young} ${strGuest}`;
        counter.value += ` ${bathrooms} ${strBoth}`;
      }
    }
    

    Con3.value = bathrooms;
  })
}

plus(plus1);
minus(minus1);

plusYoung(plus2);
minusYoung(minus2);

plusBoth(plus3);
minusBoth(minus3)

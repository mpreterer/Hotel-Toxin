const counterCon = document.querySelector('.counte_conveniences');

const Con1 = document.querySelector('#counterCon1');
const Con2 = document.querySelector('#counterCon2');
const Con3 = document.querySelector('#counterCon3');

const plusCon1 = document.querySelector('.circle_con_plus1');  
const plusCon2 = document.querySelector('.circle_con_plus2');  
const plusCon3 = document.querySelector('.circle_con_plus3');  

const minusCon1 = document.querySelector('.circle_con_minus1');
const minusCon2 = document.querySelector('.circle_con_minus2');
const minusCon3 = document.querySelector('.circle_con_minus3');

const dropBlockCon = document.querySelector('.dropBlockCon');
const apply_conv = document.querySelector('#apply_conv');

apply_conv.addEventListener('click', () => {
  if (dropBlockCon.classList.contains('hide')) {
    dropBlockCon.classList.remove('hide')
  }
  dropBlockCon.classList.add('hide')

});

var bathrooms = 0;
var bedrooms = 0;
var bed = 0;
var strSpa = '';
var strBed = '';
var strVan = '';

Con1.value = 0;
Con2.value = 0;
Con3.value = 0;




function plusBedr(directPlus) {
  directPlus.addEventListener('click', () => {
    bedrooms += 1;

    if ( bed > 0 && bathrooms > 0 ) {
      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      }

    } else if ( bed > 0 ) {

      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      }

    } else if ( bathrooms > 0) {

      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${bathrooms} ${strVan}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${bathrooms} ${strVan}`;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${bathrooms} ${strVan}`;
      }
    }

    else {
      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa}`;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa}`;
      }

    }

    Con1.value = bedrooms;
  })
}

function minusBedr(directMinus) {
  directMinus.addEventListener('click', () => {
    bedrooms -= 1;

    if (bedrooms<0) {
      bedrooms = 0;
    }

    if ( bed > 0 && bathrooms > 0 ) {
      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bedrooms <= 0 ) {
          strSpa = '';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      }

    } else if ( bed > 0 ) {

      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else if ( bedrooms <= 0 ) {
          strSpa = '';
          counterCon.value = `${bed} ${strBed}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      }

    } else if ( bathrooms > 0) {

      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${bathrooms} ${strVan}`;
      } else if ( bedrooms <= 0 ) {
          strSpa = '';
          counterCon.value = `${bathrooms} ${strVan}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${bathrooms} ${strVan}`;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${bathrooms} ${strVan}`;
      }
    }

    else {
      if ( bedrooms === 1 || bedrooms === 21 )
        {
          strSpa = 'спальня';
          counterCon.value = `${bedrooms} ${strSpa}`;
      } else if ( bedrooms >= 2 && bedrooms <= 4 || bedrooms >= 22 && bedrooms <= 24) {
          strSpa = 'спальни'
          counterCon.value = `${bedrooms} ${strSpa}`;
      } else if ( bedrooms <= 0) {
          counterCon.value = '';
          c2.value = 0;
      } else {
          strSpa = 'спален';
          counterCon.value = `${bedrooms} ${strSpa}`;
      }

    }

    Con1.value = bedrooms;
  })
}



function plusBed(directPlus) {
  directPlus.addEventListener('click', () => {
    bed += 1;

   if ( bedrooms > 0 && bathrooms > 0 ) {
      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      }

    } else if ( bedrooms > 0 ) {

      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      }

    } else if ( bathrooms > 0) {

      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      }
    }

    else {
      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bed} ${strBed}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bed} ${strBed}`;
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bed} ${strBed}`;
      }

    }

    Con2.value = bed;
  })
}

function minusBed(directMinus) {
  directMinus.addEventListener('click', () => {
    bed -= 1;

    if ( bed < 0 ) {
      bed = 0;
    }

     if ( bedrooms > 0 && bathrooms > 0 ) {
      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bed <= 0) {
        strBed = '';
        counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      }

    } else if ( bedrooms > 0 ) {

      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else if ( bed <= 0) {
        strBed = '';
        counterCon.value = `${bedrooms} ${strSpa}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      }

    } else if ( bathrooms > 0) {

      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bed <= 0) {
        strBed = '';
        counterCon.value = `${bathrooms} ${strVan}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      }
    }

    else {
      if ( bed === 1 || bed === 21 )
        {
          strBed = 'кровать';
          counterCon.value = `${bed} ${strBed}`;
      } else if ( bed >= 2 && bed <= 4 || bed >= 22 && bed <= 24) {
          strBed = 'кровати'
          counterCon.value = `${bed} ${strBed}`;
      } else if ( bed <= 0) {
        strBed = '';
        counterCon.value = '';
      } else {
          strBed = 'кроватей';
          counterCon.value = `${bed} ${strBed}`;
      }

    }

    Con2.value = bed;
  })
}

function plusBath(directPlus) {
  directPlus.addEventListener('click', () => {
    bathrooms += 1;

    if ( bed > 0 && bedrooms > 0 ) {
      if ( bathrooms === 1 || bathrooms === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      }

    } else if ( bedrooms > 0 ) {

      if ( bed === 1 || bed === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      }

    } else if ( bed > 0) {

      if ( bathrooms === 1 || bathrooms === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      }
    }

    else {
      if ( bathrooms === 1 || bathrooms === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bathrooms} ${strVan}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bathrooms} ${strVan}`;
      }

    }

    Con3.value = bathrooms;
  })
}

function minusBath(directMinus) {
  directMinus.addEventListener('click', () => {
    bathrooms -= 1;

    if ( bathrooms <= 0 ) {
      bathrooms = 0;
    }

    if ( bed > 0 && bedrooms > 0 ) {
      if ( bathrooms === 1 || bathrooms === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bathrooms <= 0) {
        strBed = '';
        counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bedrooms} ${strSpa} ${bed} ${strBed} ${bathrooms} ${strVan}`;
      }

    } else if ( bedrooms > 0 ) {

      if ( bed === 1 || bed === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      } else if ( bathrooms <= 0 ) {
        strBed = '';
        counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bedrooms} ${strSpa} ${bathrooms} ${strVan}`;
      }

    } else if ( bed > 0) {

      if ( bathrooms === 1 || bathrooms === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else if ( bathrooms <= 0 ) {
        strVan = '';
        counterCon.value = `${bed} ${strBed}`;
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bed} ${strBed} ${bathrooms} ${strVan}`;
      }
    }

    else {
      if ( bathrooms === 1 || bathrooms === 21 )
        {
          strVan = 'ванная комната';
          counterCon.value = `${bathrooms} ${strVan}`;
      } else if ( bathrooms <= 0 ) {
        strBed = '';
        counterCon.value = '';
      } else if ( bathrooms >= 2 && bathrooms <= 4 || bathrooms >= 22 && bathrooms <= 24) {
          strVan = 'ванные комнаты'
          counterCon.value = `${bathrooms} ${strVan}`;
      } else {
          strVan = 'ванных комнат';
          counterCon.value = `${bathrooms} ${strVan}`;
      }

    }
    

    Con3.value = bathrooms;
  })
}

plusBedr(plusCon1);
minusBedr(minusCon1);

plusBed(plusCon2);
minusBed(minusCon2);

plusBath(plusCon3);
minusBath(minusCon3);
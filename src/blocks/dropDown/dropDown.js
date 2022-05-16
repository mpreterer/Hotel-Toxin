const DROP_DOWN_TARGET = document.querySelector('.dropDown');
const counter = document.querySelector('.dropDown__counte-guests');

const c1 = document.querySelector('#counter1');
const c2 = document.querySelector('#counter2');
const c3 = document.querySelector('#counter3');

const plus1 = document.querySelector('.dropBlock__circle-plus1');  
const plus2 = document.querySelector('.dropBlock__circle-plus2');  
const plus3 = document.querySelector('.dropBlock__circle-plus3');  

const minus1 = document.querySelector('.dropBlock__circle-minus1');
const minus2 = document.querySelector('.dropBlock__circle-minus2');
const minus3 = document.querySelector('.dropBlock__circle-minus3');

const clear = document.getElementById('clear');

var both = 0;
var old = 0;
var young = 0;
var strGuest = '';
var strBoth = '';

var topStringFirst = 'гость';
var topStringSecond = 'гостя';
var topStringThreeth = 'гостей';


$(document).ready(function() {  

  $('.dropDown').click(function(event){

  let counterString = event.currentTarget.querySelector('.dropDown__counte-guests');

  let counterInput = event.currentTarget.querySelector('#counter1');
  let counterInput2 = event.currentTarget.querySelector('#counter2');
  let counterInput3 = event.currentTarget.querySelector('#counter3');

  let attrItem1 = event.currentTarget.querySelector('.dropBlock__block-input1');
  let attrItem2 = event.currentTarget.querySelector('.dropBlock__block-input2');
  let attrItem3 = event.currentTarget.querySelector('.dropBlock__block-input3');

  let plusAttr = attrItem1.getAttribute('count');
  let plusAttrYoung = attrItem2.getAttribute('count');


  if (event.target.className == plus1.className) {
    
      attrItem1.setAttribute('count',`${++plusAttr}`);
      console.log(plusAttr)
      
      if ( both === 0 ) {
        if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
          {
            counterString.value = `${plusAttr} ${topStringFirst}`;
        } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
            counterString.value= `${plusAttr} ${topStringSecond}`;
        } else {
            counterString.value = `${plusAttr} ${topStringThreeth}`;
        }
  
      } else {
        if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
          {
            strGuest = topStringFirst;
            currentCounter.value = `${plusAttr + young} ${strGuest} ${both} ${strBoth}`;
        } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
            strGuest = topStringSecond;
            currentCounter.value = `${plusAttr + young} ${strGuest} ${both} ${strBoth}`;
        } else {
            strGuest = topStringThreeth;
            currentCounter.value = `${plusAttr + young} ${strGuest} ${both} ${strBoth}`;
        }
  
      }
      
      counterInput.value = plusAttr;
  }

  if (event.target.className == plus2.className) {
    
    attrItem2.setAttribute('count',`${++plusAttr}`);
    
    let counterTemp = counterString.value.replace(/[^\d]/g, '');

    counterTemp++;

    if ( both === 0 ) {
      if ( attrItem1 + young === 1 || attrItem1 + young === 21 )
        {
          counterString.value = `${counterTemp} ${topStringFirst}`;
      } else if ( counterTemp + plusAttrYoung >= 2 && counterTemp + plusAttrYoung <= 4 || counterTemp + plusAttrYoung >= 22 && counterTemp + plusAttrYoung <= 24) {
          counterString.value= `${counterTemp} ${topStringSecond}`;
      } else {
          counterString.value = `${counterTemp} ${topStringThreeth}`;
      }

    } else {
      if ( attrItem1 + young === 1 || attrItem1 + young === 21 )
        {
          strGuest = topStringFirst;
          currentCounter.value = `${counterTemp + young} ${strGuest} ${both} ${strBoth}`;
      } else if ( attrItem1 + young >= 2 && attrItem1 + young <= 4 || attrItem1 + young >= 22 && attrItem1 + young <= 24) {
          strGuest = topStringSecond;
          currentCounter.value = `${counterTemp + young} ${strGuest} ${both} ${strBoth}`;
      } else {
          strGuest = topStringThreeth;
          currentCounter.value = `${counterTemp + young} ${strGuest} ${both} ${strBoth}`;
      }

    }
    
    counterInput.value = counterTemp;
}

  })
})

  

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

minus(minus1);

plusYoung(plus2);
minusYoung(minus2);

plusBoth(plus3);
minusBoth(minus3)

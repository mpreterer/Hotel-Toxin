


$(document).ready(function() {  
  const clear = document.getElementById('clear');

  var stringGuest = '';
  var stringBoth = '';

  var topStringFirst = 'гость';
  var topStringSecond = 'гостя';
  var topStringThreeth = 'гостей';

  var bottomStringFirst = 'младенец';
  var bottomStringSecond = 'младенца';
  var bottomStringThreeth = 'младенцев';

  const plus1 = document.querySelector('.dropBlock__circle-plus1');
  const plus2 = document.querySelector('.dropBlock__circle-plus2');
  const plus3 = document.querySelector('.dropBlock__circle-plus3');

  const minus1 = document.querySelector('.dropBlock__circle-minus1');
  const minus2 = document.querySelector('.dropBlock__circle-minus2');
  const minus3 = document.querySelector('.dropBlock__circle-minus3'); 

  $('.dropDown').click(function(event) {

  let counterString = event.currentTarget.querySelector('.dropDown__counte-guests');

  let counterInput = event.currentTarget.querySelector('#counter1');
  let counterInput2 = event.currentTarget.querySelector('#counter2');
  let counterInput3 = event.currentTarget.querySelector('#counter3');

  let attrItem1 = event.currentTarget.querySelector('.dropBlock__block-input1');
  let attrItem2 = event.currentTarget.querySelector('.dropBlock__block-input2');
  let attrItem3 = event.currentTarget.querySelector('.dropBlock__block-input3');

  let plusAttr = Number(attrItem1.getAttribute('count'));
  let plusAttrYoung = Number(attrItem2.getAttribute('count'));
  let plusAttrBoth = Number(attrItem3.getAttribute('count'));

  if (event.target.className == plus1.className) {

      attrItem1.setAttribute('count',`${++plusAttr}`);
      
      if ( plusAttrBoth === 0 ) {
        if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
          {
            stringGuest = topStringFirst;
            counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
        } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
            stringGuest = topStringSecond;
            counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
        } else {
            stringGuest = topStringThreeth;
            counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
        }
  
      } else {
        if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
          {
            stringGuest = topStringFirst;
            counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
        } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
            stringGuest = topStringSecond;
            counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
        } else {
            stringGuest = topStringThreeth;
            counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
        }
  
      }
      
      counterInput.value = plusAttr;
  }


  if (event.target.className == minus1.className) {

    attrItem1.setAttribute('count',`${--plusAttr}`);

    if (plusAttr <= 0) {
      attrItem1.setAttribute('count',`${0}`);
      plusAttr = Number(attrItem1.getAttribute('count'));
      
      if (plusAttrBoth == 0 && plusAttrYoung == 0) {
        counterString.value = '';
      } else if (plusAttrBoth == 0 && plusAttrYoung != 0) {
        counterString.value = `${plusAttrYoung} ${stringGuest}`;
      } else if (plusAttrBoth != 0 && plusAttrYoung == 0) {
        counterString.value = `${plusAttrBoth} ${stringBoth}`;
      } else {
        counterString.value = `${plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      }
    }
    
    else if ( plusAttrBoth === 0 && (plusAttr+plusAttrYoung != 0) ) {
      if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
        {
          stringGuest = topStringFirst;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
          stringGuest = topStringSecond;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      } else {
          stringGuest = topStringThreeth;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      }

    } else {
      if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
        {
          stringGuest = topStringFirst;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
          stringGuest = topStringSecond;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else {
          stringGuest = topStringThreeth;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      }

    }
    
    counterInput.value = plusAttr;
  }


  if (event.target.className == plus2.className) {
    
    attrItem2.setAttribute('count',`${++plusAttrYoung}`);
    
    if ( plusAttrBoth === 0 ) {
      if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
        {
        stringGuest = topStringFirst;
        counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
        stringGuest = topStringSecond;
        counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      } else {
        stringGuest = topStringThreeth;
        counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      }

    } else {
      if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
        {
        stringGuest = topStringFirst;
        counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
        stringGuest = topStringSecond;
        counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else {
        stringGuest = topStringThreeth;
        counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      }

    }
    
    counterInput2.value = plusAttrYoung;
  }

  if (event.target.className == minus2.className) {

    attrItem2.setAttribute('count',`${--plusAttrYoung}`);

    if (plusAttrYoung <= 0) {
      attrItem2.setAttribute('count',`${0}`);
      plusAttrYoung = Number(attrItem2.getAttribute('count'));
      
      if (plusAttrBoth == 0 && plusAttr == 0) {
        counterString.value = ''
      } else if (plusAttrBoth == 0 && plusAttr != 0) {
        counterString.value = `${plusAttr} ${stringGuest}`;
      } else if (plusAttrBoth != 0 && plusAttr == 0) {
        counterString.value = `${plusAttrBoth} ${stringBoth}`;
      } else {
        counterString.value = `${plusAttr} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      }
    }

    else if ( plusAttrBoth === 0 && (plusAttr+plusAttrYoung != 0) ) {
      if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
        {
          stringGuest = topStringFirst;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
          stringGuest = topStringSecond;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      } else {
          stringGuest = topStringThreeth;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      }

    } else {
      if ( plusAttr + plusAttrYoung === 1 || plusAttr + plusAttrYoung === 21 )
        {
          stringGuest = topStringFirst;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else if ( plusAttr + plusAttrYoung >= 2 && plusAttr + plusAttrYoung <= 4 || plusAttr + plusAttrYoung >= 22 && plusAttr + plusAttrYoung <= 24) {
          stringGuest = topStringSecond;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else {
          stringGuest = topStringThreeth;
          counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      }

    }
    
    counterInput2.value = plusAttrYoung;
  }

  if (event.target.className == plus3.className) {

      attrItem3.setAttribute('count',`${++plusAttrBoth}`);

      if ( plusAttr + plusAttrYoung === 0 ) {
        if ( plusAttrBoth === 1 || plusAttrBoth === 21 ) {
          stringBoth = bottomStringFirst;
          counterString.value = `${plusAttrBoth} ${stringBoth}`;
        } else if ( plusAttrBoth >= 2 && plusAttrBoth <= 4 || plusAttrBoth >= 22 && plusAttrBoth <= 24 ) {
          stringBoth = bottomStringSecond;
          counterString.value = `${plusAttrBoth} ${stringBoth}`;
        } else {
          stringBoth = bottomStringThreeth;
          counterString.value = `${plusAttrBoth} ${stringBoth}`;
        }
      }
      else { 
        if ( plusAttrBoth === 1 || plusAttrBoth === 21 ) {
          stringBoth = bottomStringFirst;
          counterString.value = `${plusAttr + plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
        } else if ( plusAttrBoth >= 2 && plusAttrBoth <= 4 || plusAttrBoth >= 22 && plusAttrBoth <= 24 ) {
          stringBoth = bottomStringSecond;
          counterString.value = `${plusAttr + plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
        } else {
          stringBoth = bottomStringThreeth;
          counterString.value = `${plusAttr + plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
        }
      }
  
      counterInput3.value = plusAttrBoth;
  }

  if (event.target.className == minus3.className) {

    attrItem3.setAttribute('count',`${--plusAttrBoth}`);

    if (plusAttrBoth <= 0) {
      attrItem3.setAttribute('count',`${0}`);
      plusAttrBoth = Number(attrItem3.getAttribute('count'));
      
      if (plusAttrYoung == 0 && plusAttr == 0) {
        counterString.value = '';
      } else if (plusAttrYoung+plusAttr == 0) {
        counterString.value = `${plusAttr} ${stringGuest}`;
      } else if (plusAttrYoung != 0 && plusAttr == 0) {
        counterString.value = `${plusAttrYoung} ${stringGuest}`;
      } else {
        counterString.value = `${plusAttr+plusAttrYoung} ${stringGuest}`;
      }
    }

    else if ( plusAttr + plusAttrYoung == 0 ) {
      if ( plusAttrBoth === 1 || plusAttrBoth === 21 ) {
        stringBoth = bottomStringFirst;
        counterString.value = `${plusAttrBoth} ${stringBoth}`;
      } else if ( plusAttrBoth >= 2 && plusAttrBoth <= 4 || plusAttrBoth >= 22 && plusAttrBoth <= 24 ) {
        stringBoth = bottomStringSecond;
        counterString.value = `${plusAttrBoth} ${stringBoth}`;
      } else {
        stringBoth = bottomStringThreeth;
        counterString.value = `${plusAttrBoth} ${stringBoth}`;
      }
    }
    else { 
      if ( plusAttrBoth === 1 || plusAttrBoth === 21 ) {
        stringBoth = bottomStringFirst;
        counterString.value = `${plusAttr + plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else if ( plusAttrBoth >= 2 && plusAttrBoth <= 4 || plusAttrBoth >= 22 && plusAttrBoth <= 24 ) {
        stringBoth = bottomStringSecond;
        counterString.value = `${plusAttr + plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      } else {
        stringBoth = bottomStringThreeth;
        counterString.value = `${plusAttr + plusAttrYoung} ${stringGuest}, ${plusAttrBoth} ${stringBoth}`;
      }
    }

    counterInput3.value = plusAttrBoth;
  }
  if (event.target.id == clear.id) {
    attrItem1.setAttribute('count',0);
    attrItem2.setAttribute('count',0);
    attrItem3.setAttribute('count',0);

    counterInput.value = 0;
    counterInput2.value = 0;
    counterInput3.value = 0;

    stringGuest = '';
    stringBoth = '';

    counterString.value = '';
  }

  })
})
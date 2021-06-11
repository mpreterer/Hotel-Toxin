  const conGuests = document.querySelector('.counte_guests');
  const c1 = document.querySelector('#counter1');
  const c2 = document.querySelector('#counter2');


  var old = 0;
  var both = 0;

  var strOld = '';
  var strYoung = '';
  var strBoth = '';

  const drop_block_row = function () {
  const btns = document.querySelectorAll('.circle_drop_item');

  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector('.counter');
      const currentValue = +inp.value;
      let newValue;

      if (direction === 'plus') {
        newValue = currentValue + 1;

      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      } inp.value = newValue;


      // Для взрослых
      if ( c1.value > 0 && direction === 'plus' ) {
          conGuests.value = '';
          strOld = 'гостя'
          old += 1;

          conGuests.value +=
          `${old} ${strOld} ${both} ${strBoth}`;
      } else if ( c1.value <= 0 ) {
          conGuests.value = '';
          old = 0;
      } else {
          conGuests.value = '';
          old -= 1;
          if ( both === 0) {
            conGuests.value += `${old} ${strOld} ${strBoth}`;
          } else {
            conGuests.value += `${old} ${strOld} ${strBoth}`;
          }
      }

      //
    })
  })

}

drop_block_row();
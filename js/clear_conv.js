const clear_con = document.querySelector('#clear_conv');
const count_conv = document.querySelector('.counte_conveniences');
const cnv = document.querySelector('.conveniences');
const dropConv = document.querySelector('.dropBlockCon');

var con1 = document.querySelector('#counterCon1');
var con2 = document.querySelector('#counterCon2');
var con3 = document.querySelector('#counterCon3');

cnv.addEventListener('click',function() {
  if (count_conv.value === '') {
    clear_con.classList.add('hiden_clear');
  } else {  
    clear_con.classList.remove('hiden_clear');
  }
})

dropConv.addEventListener('click', function() {
  if (count_conv.value === '') {
    clear_con.classList.add('hiden_clear');
  } else {
    clear_con.classList.remove('hiden_clear');

    clear_con.addEventListener('click',function() {
        con1.value = 0;
        con2.value = 0;
        con3.value = 0;

        bathrooms = 0;
        bedrooms = 0;
        bed = 0;
        strSpa = '';
        strBed = '';
        strVan = '';

        count_conv.value = '';

        clear_con.classList.add('hiden_clear');
      })
  }
})
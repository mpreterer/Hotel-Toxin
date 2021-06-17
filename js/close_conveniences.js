const conv = document.querySelector('.conveniences');
const dropCon = document.querySelector('.dropBlockCon');

conv.onclick = () => {
  if ( dropCon.classList.contains('hide') ) {
    dropCon.classList.remove('hide');
  } else {
    dropCon.classList.add('hide');
  }
}
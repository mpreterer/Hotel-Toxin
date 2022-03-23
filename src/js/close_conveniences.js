const convenience = document.querySelector('.convenience');
const dbc = document.querySelector('.drop_block_convenience');
const arrow_convenience = document.querySelector('.arrow_convenience');

convenience.onclick = () => {
  if(dbc.classList.contains('hide')) {
    dbc.classList.remove('hide');
    arrow_convenience.classList.remove('not_active');
    arrow_convenience.classList.add('active');
  } else {
    dbc.classList.add('hide');
    arrow_convenience.classList.remove('active');
    arrow_convenience.classList.add('not_active');
  }
}
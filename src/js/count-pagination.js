var pagMax = document.querySelector('.pagination-max');
var pagMin = document.querySelector('.pagination-min');

document.querySelector('#pagination').addEventListener('click', () => {
    pagMax.textContent = document.querySelector('#pagination ul li.active span').textContent * 12;
    let temp = Number(pagMax.textContent);
    pagMin.textContent = temp - 11;
})
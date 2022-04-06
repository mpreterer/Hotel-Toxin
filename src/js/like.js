
const like = document.querySelector('.fa_heart')
const like2 = document.querySelector('.fa_heart2')
const numb_like = document.querySelector('#span_heart')
const heart = document.querySelector('.heart')
const heart2 = document.querySelector('.heart_2')


heart.addEventListener('click', ({ target: t }) => {
	if (t.classList.contains('heart')) {
	  const index = [...document.querySelectorAll('.heart')].indexOf(t);
	  const count = document.querySelectorAll('.span_heart')[index];
	  const heart = document.querySelectorAll('.fa_heart')[index];
	  count.classList.toggle('active');
	  heart.classList.toggle('fill_heart');
	  count.innerText -= [ 1, -1 ][+count.classList.contains('active')];
	}
});


document.addEventListener('click', ({ target: t }) => {
	if (t.classList.contains('heart')) {
	  const index = [...document.querySelectorAll('.heart')].indexOf(t);
	  const count = document.querySelectorAll('.span_heart')[index];
	  const heart = document.querySelectorAll('.fa_heart')[index];
	  count.classList.toggle('span-heart_active');
	  heart.classList.toggle('fill_heart')
	  count.innerText -= [ 1, -1 ][+count.classList.contains('span-heart_active')];
	}
});

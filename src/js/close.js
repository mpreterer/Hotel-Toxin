const DROP_DOWN = document.querySelector('.dropDown__name');
const drop = document.getElementById('apply');
const dropBlock = document.querySelector('.dropBlock');

$(document).ready(function() {  
	$('.dropDown').click(function(event){
		if (event.target.className == DROP_DOWN.className) {
			event.currentTarget.querySelector('.dropBlock').classList.toggle('hide');
		}
	})
})
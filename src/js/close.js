const DROP_DOWN = document.querySelector('.dropDown__name');
const drop = document.getElementById('apply');
const dropBlock = document.querySelector('.dropBlock');



$(document).ready(function() {  
	$('.dropDown').click(function(event){

		let countDrop1 = Number(document.querySelector('#counter1').value);
		let countDrop2 = Number(document.querySelector('#counter2').value);
		let countDrop3 = Number(document.querySelector('#counter3').value);

		if (event.target.className == DROP_DOWN.className) {
			event.currentTarget.querySelector('.dropBlock').classList.toggle('hide');
		}
		
		if (countDrop1+countDrop2+countDrop3 == 0) {
			event.currentTarget.querySelector('#clear').classList.add('hiden_clear');
		} else {
			event.currentTarget.querySelector('#clear').classList.remove('hiden_clear');
		}
	})
})

let buttonArrival = document.querySelector('.date_arrival');
let buttonDeparture = document.querySelector('.date_departure');
let calendare = document.querySelector('.calendar');
let calendareMain = document.querySelector('.calendar_main');

buttonArrival.onclick = () => {
	if(calendareMain.classList.contains('hide') ) {
		calendare.classList.remove('hide');
		calendareMain.classList.remove('hide');
	}
	else {
		calendareMain.classList.add('hide');
		calendareMain.classList.add('hide');
	}
}

buttonDeparture.onclick = () => {
	if(calendareMain.classList.contains('hide') ) {
		calendare.classList.remove('hide');
		calendareMain.classList.remove('hide');
	}
	else {
		calendareMain.classList.add('hide');
		calendareMain.classList.add('hide');
	}
}

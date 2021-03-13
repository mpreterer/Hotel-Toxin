let outputMin = document.getElementById('minValue');
let outputMax = document.getElementById('maxValue');
let valueLeft = document.getElementById('input-left');
let valueRight = document.getElementById('input-right');

outputMin.innerHTML = valueLeft.value;
outputMax.innerHTML = valueRight.value;

valueLeft.oninput = function() {
	outputMin.innerHTML = this.value;
}

valueRight.oninput = function() {
	outputMax.innerHTML = this.value;
}









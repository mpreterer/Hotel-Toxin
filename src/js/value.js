const outputMin = document.getElementById('minValue');
const outputMax = document.getElementById('maxValue');
const valueLeft = document.getElementById('input-left');
const valueRight = document.getElementById('input-right');


outputMax.innerHTML = valueRight.value;
outputMin.innerHTML = valueLeft.value;

valueLeft.oninput = function() {
	outputMin.innerHTML = this.value;
}

valueRight.oninput = function() {
	outputMax.innerHTML = this.value;
}
const inputLeft = document.getElementById("input-left");
const inputRight = document.getElementById("input-right");
const thumbLeft = document.querySelector(".slider > .thumb.left");
const thumbRight = document.querySelector(".slider > .thumb.right");
const range = document.querySelector(".slider > .range");
const minSpanInput = document.querySelector("#minValue");
const maxSpanInput = document.querySelector("#maxValue");


function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percentLeft = ((_this.value - min) / (max - min)) * 100;

	if (parseInt(minSpanInput.textContent) > parseInt(maxSpanInput.textContent)) {
		minSpanInput.textContent = maxSpanInput.textContent;
	}

	thumbLeft.style.left = percentLeft + "%";
	range.style.left = percentLeft + "%";

	thumbRight.style.zIndex = '9'
	thumbLeft.style.zIndex = '10'
}
setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percentRight = ((_this.value - min) / (max - min)) * 100;

	if (parseInt(maxSpanInput.textContent) < parseInt(minSpanInput.textContent)) {
		maxSpanInput.textContent = minSpanInput.textContent;
	}

	thumbRight.style.right = (100 - percentRight) + "%";
	range.style.right = (100 - percentRight) + "%";

	thumbLeft.style.zIndex = '9'
	thumbRight.style.zIndex = '10'
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);


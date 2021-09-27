const head = document.querySelector('.convenience');
const dropDown = document.querySelector('.drop_block_convenience');
const dropSub = document.querySelector('.drop_item_convenience');
const block = document.querySelector('.arrow_convenience');

head.onclick = () => {
	if(dropDown.classList.contains('hide') ) {
		dropDown.classList.remove('hide')
		block.classList.remove('not_active')
		block.classList.add('active')
	}
	else {
		dropDown.classList.add('hide')
		dropSub.classList.add('hide')
		block.classList.add('not_active')
		block.classList.remove('active')
	}
}
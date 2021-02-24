const head = document.querySelector('.convenience')
const drop = document.querySelector('.drop_block_convenience')
const dropSub = document.querySelector('.drop_item_convenience')
const block = document.querySelector('.arrow_convenience')

head.onclick = () => {
	if(drop.classList.contains('hide') ) {
		drop.classList.remove('hide')
		dropSub.classList.remove('hide')
		block.classList.remove('not_active')
		block.classList.add('active')
	}
	else {
		drop.classList.add('hide')
		dropSub.classList.add('hide')
		block.classList.add('not_active')
		block.classList.remove('active')
	}
}
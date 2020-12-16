const guest = document.querySelector('.guests')
const drop = document.querySelector('.link_drop_function')
const dropBlock = document.querySelector('.dropBlock')

drop.onclick = () => {
	if(drop.style.display === 'block') {
		dropBlock.style.display = 'none'
	} else {
		dropBlock.style.display = 'block'
	}
}
const conveniences1 = document.querySelector('.conveniences1');
const dropBlockCon = document.querySelector('.dropBlockCon');

conveniences1.onclick = () => { 
    if (dropBlockCon.classList.contains('hide')) {
        dropBlockCon.classList.remove('hide');
    } else {
        dropBlockCon.classList.add('hide');
    }
}
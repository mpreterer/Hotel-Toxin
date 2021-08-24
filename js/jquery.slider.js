$(document).ready(function() {
    $('.room_in_hotel').click(function(event){
        let tarName = event.currentTarget.className;
        let rightClick = `${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .arrow_right'}`;
        let leftClick = `${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .arrow_left'}`;
        
        if (event.target.className == 'move_arrow arrow_right') {
            console.log($(`${rightClick}`))
        }
        else if (event.target.className = 'move_arrow arrow_left') {
            console.log($(`${leftClick}`))
        }
    })
})
var numForCount = 1;

$(document).ready(function(stopNumber) {    
    $('.room_in_hotel').click(function(event){
        let tarName = event.currentTarget.className;
        let targetImage = `${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .container'}`;
        
        let G = $(`${targetImage}`).css('background-image');
        // оставить чисто путь
        let G1 = G.replace('url(','').replace(')','').replace(/\"/gi, "");
        // оставить только само изображние
        let G2 = G1.split('image')[1].substr(1);
        // вырезать число для подсчета
        let i = parseInt(G2.split('_')[0]);

        if (event.target.classList.contains('arrow_right')) {
            if (numForCount === 4) {
                // вернуть изначальную юкратинку
                i -= 3;

                $(`${targetImage}`).css('background', `url(${'../image/' + i + '_room' + '.png'})`);
                // возвращаем кружок на первую позицию
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','rgba(255,255,255,0');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'no');
                
                numForCount = 1;

                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','#fff');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'yes');
                // переключение кружков (счет изображений)
            } else {
                i += 1;
               
                $(`${targetImage}`).css('background', `url(${'../image/' + i + '_room' + '.png'})`);
                // очищаем предыдущий кружок
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','rgba(255,255,255,0');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'no');
                
                numForCount += 1;
                
                // переключение кружков (счет изображений)
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','#fff');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'yes');
            }
        }
        else if (event.target.classList.contains('arrow_left')) {

            if (numForCount === 1) {
                // вернуть изначальную кратинку
                i += 3;
                
                $(`${targetImage}`).css('background', `url(${'../image/' + i + '_room' + '.png'})`)
                // очищаем предыдущий кружок
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','rgba(255,255,255,0');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'no');
                
                numForCount = 4;
                
                // переключение кружков (счет изображений)
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','#fff');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'yes');
            } else {
                i -= 1;
                
                $(`${targetImage}`).css('background', `url(${'../image/' + i + '_room' + '.png'})`)
                // переключение кружков (счет изображений)
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','rgba(255,255,255,0');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'no');
                
                numForCount -= 1;
                
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).css('background-color','#fff');
                $(`${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .circle_' + numForCount}`).attr('fill', 'yes');
            }
        }
    })
})
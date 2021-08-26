const ONE = 1;
var numForCount = 1;

$(document).ready(function(stopNumber) {
    $('.room_in_hotel').click(function(event){
        let tarName = event.currentTarget.className;
        let targetImage = `${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .container'}`;
        let images = `${'.'+tarName.slice(0, tarName.indexOf(' ')) + ' .container' + ' .images-for-room'}`;

        // Достаем путь до картинки
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
                $(`${targetImage}`).css('background', `url(${'../image/' + i + '_room' + '.png'})`)
                numForCount = 1;
                console.log(numForCount)
                
            } else {
                i += ONE;
                $(`${targetImage}`).css('background', `url(${'../image/' + i + '_room' + '.png'})`)
                numForCount += 1;

                console.log(numForCount)
                console.log(i)
            }
        }
        else if (event.target.classList.contains('arrow_left')) {
            i -= 1;
            $(`${targetImage}`).css('background', `url(${'../image/' + i + '_room' + '.png'})`)
        }
    })
})
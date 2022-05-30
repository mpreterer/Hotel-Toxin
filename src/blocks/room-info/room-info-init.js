import RoomInfo from './room-info'

document.addEventListener('DOMContentLoaded', () => {
    const rooms = document.querySelectorAll('.js-room-info');

    rooms.forEach(domParent => {
        const room = new RoomInfo(domParent);
    })
});

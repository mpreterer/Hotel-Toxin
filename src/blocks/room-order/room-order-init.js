import RoomOrder from './room-order.js';

document.addEventListener('DOMContentLoaded', () => {
    const roomOrders = document.querySelectorAll('.js-room-order');

    roomOrders.forEach(domParent => {
        const order = new RoomOrder(domParent);
    })
});
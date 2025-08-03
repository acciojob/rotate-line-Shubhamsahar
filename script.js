let angle = 0;
const line = document.getElementById('line');

setInterval(() => {
    angle += 2;
    line.style.transform = `translate(-100px, 0) rotate(${angle}deg)`;
}, 20);

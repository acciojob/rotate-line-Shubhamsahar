//your JS code here. If required.
let angle = 0;
const line = document.getElementById('line');

setInterval(() => {
    angle += 2;
    line.style.transform = `rotate(${angle}deg)`;
}, 20);


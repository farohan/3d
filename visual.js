const view = document.getElementById('box');
let x, y;

document.addEventListener('mousemove', function(e) {
    x = e.clientX;
    y = e.clientY;
    y = -y;
    view.style.transform = `translateZ(600px) rotateX(${y}deg) rotateY(${x}deg)`;
});

const choices = document.querySelector('#choices');
const box = document.querySelector('#box');

function changeSettings() {
    if (choices.value == 'City') {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set2/${i}.png`;
        }
    }
    else if (choices.value == 'Coast') {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set3/${i}.png`;
        }
    }
    else {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set/${i}.png`;
        }
    }
}

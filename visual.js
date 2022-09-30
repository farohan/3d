//Welcome to visual.js, where all the magic happens!

//The debounce function for increased speed and further optimization.
//The debounce function makes it so that a function does not 
//have to run instantly. The delay, in fact, makes operation smoother.

function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//Setting the view and x & y axes.

const view = document.getElementById('box');
let x, y;

//For each mousemove, the view will change.
//This function is put into the debounce function, so it's smooth.

document.addEventListener('mousemove', debounce(function(e) {
    x = e.clientX;
    y = e.clientY;
    y = -y;
    view.style.transform = `translateZ(600px) rotateX(${y}deg) rotateY(${x}deg)`;
}));

const choices = document.querySelector('#choices');
const box = document.querySelector('#box');

//Allows user to change view; internally, it just changes the images.

function changeSettings() {
    if (choices.value == 'Room') {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set2/${i}.png`;
        }
    }
    else if (choices.value == 'Ballroom') {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set3/${i}.png`;
        }
    }
    else if (choices.value == 'Palace') {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set4/${i}.png`;
        }
    }
    else if (choices.value == 'Space') {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set5/${i}.png`;
        }
    }
    else {
        for (let i = 0; i <= 5; i++) {
            box.children[i].children[0].src = `assets/set/${i}.png`;
        }
    }
}

const skyboxImages = document.getElementsByClassName('box-img');

//This object allows the images in the skybox to be filtered via CSS.
//That's how I get the saturation and old-fashioned look. 

const modifier = {
    name: '3-D World Modifier',
    grayscale: function() {
        for (let i = 0; i <= skyboxImages.length; i++) {
            skyboxImages[i].style.filter = 'grayscale(100%)';
        }
    },
    sepia: function() {
        for (let i = 0; i <= skyboxImages.length; i++) {
            skyboxImages[i].style.filter = 'sepia(100%)';
        }
    },
    saturate: function() {
        for (let i = 0; i <= skyboxImages.length; i++) {
            skyboxImages[i].style.filter = 'saturate(2)';
        }
    },
    resetAll: function() {
        for (let i = 0; i <= skyboxImages.length; i++) {
            skyboxImages[i].style.filter = 'none';
        }
    }
};

const music = document.getElementById('music');

//This makes the object above active.
//Though instead of using buttons, 
//which is not practical for a 3-D experience, I used keys.

window.addEventListener('keydown', function(e) {
    switch (e.key) {
        case ' ': 
            if (music.paused)
                music.play();
            else music.pause();
            break;
        case 'g': 
            modifier.grayscale();
            break;
        case 'o': 
            modifier.sepia();
            break;
        case 's': 
            modifier.saturate();
            break;
        case 'r': 
            modifier.resetAll();
    }
});

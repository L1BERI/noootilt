const container = document.querySelector('.game');
const mouse = document.querySelector('.mouse');
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
const mouseSize = mouse.offsetWidth;
let mouseX = containerWidth / 2 - mouseSize / 2;
let mouseY = containerHeight / 2 - mouseSize / 2;
let mouseDX = 4;
let mouseDY = 4;
let isMouseStopped = false;
let isPopupOpen = false;

function moveMouse() {
    if (isMouseStopped || isPopupOpen) {
        return;
    }

    let newX = mouseX + mouseDX;
    let newY = mouseY + mouseDY;

    if (newX <= 0 || newX + mouseSize >= containerWidth) {
        mouseDX = -mouseDX;
    }

    if (newY <= 0 || newY + mouseSize >= containerHeight) {
        mouseDY = -mouseDY;
    }

    mouseX += mouseDX;
    mouseY += mouseDY;

    mouse.style.left = mouseX + 'px';
    mouse.style.top = mouseY + 'px';
}

mouse.addEventListener('mouseenter', function () {
    isMouseStopped = true;
});

mouse.addEventListener('mouseleave', function () {
    isMouseStopped = false;
});



setInterval(moveMouse, 1);



mouse.addEventListener('click', function () {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerText = 'Умница, победааааа. Теперь либо заново сыграть, либо возвращайся назад';

    const button = document.createElement('button');
    button.innerText = 'Обратно';
    button.addEventListener('click', function () {
        window.location.href = 'index.html'; 
    });
    const buttonPlay = document.createElement('button');
    buttonPlay.innerText = 'Играть заново';
    buttonPlay.addEventListener('click', function () {
        popup.remove();
        isPopupOpen = false;
        overlay.remove();
    });

    popup.appendChild(button);
    popup.appendChild(buttonPlay);
    document.body.appendChild(popup);
    isPopupOpen = true;
    const overlay = document.createElement('div');
    overlay.classList.add('overlay-popup');
    document.body.appendChild(overlay);
    setTimeout(function () {
        popup.remove();
        isPopupOpen = false;
        overlay.remove();
    }, 10000); 
});
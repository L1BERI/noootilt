
//   document.addEventListener('mousemove', function(event) {
//     const background = document.querySelector('body');
//     const mouseX = event.clientX;
//     const mouseY = event.clientY;

//     const xPercent = (mouseX / window.innerWidth) * 100;
//     const yPercent = (mouseY / window.innerHeight) * 100;

//     background.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
//   });

const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 400,
    spaceBetween: 24,
    slidesPerView: 3,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button__next',
        prevEl: '.swiper-button__prev',
    },

});



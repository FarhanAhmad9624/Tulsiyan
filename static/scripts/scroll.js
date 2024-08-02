const slider = document.querySelector('.scroll-container');
const slider2 = document.querySelector('#collection-preview');

slider.addEventListener('wheel', (evt) => {

    evt.preventDefault();
    slider.scrollLeft += evt.deltaY*7;
    slider.scrollIntoView = ({behavior: 'smooth', inline: 'start'})
});



let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {;
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX); // Scroll speed
    slider.scrollLeft = scrollLeft - walk;
})

slider2.addEventListener('wheel', (evt) => {

    evt.preventDefault();
    slider2.scrollLeft += evt.deltaY*4;
    slider2.scrollIntoView = ({behavior: 'smooth', inline: 'start'})
});
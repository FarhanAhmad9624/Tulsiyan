const slider = document.querySelector('#products-deal');

slider.addEventListener('wheel', (evt) => {

    evt.preventDefault();
    slider.scrollLeft += evt.deltaY*7;
    slider.scrollIntoView = ({behavior: 'smooth', inline: 'start'})
});

// document.querySelectorAll('#products-deal-lists li').scrollIntoView

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
const slider = document.querySelector('#products-deal');

slider.addEventListener('wheel', (evt) => {
    evt.preventDefault();
    slider.scrollLeft += evt.deltaY*5;
    slider.scrollIntoView = ({behavior: 'smooth', inline: 'start'})
});

// document.querySelectorAll('#products-deal-lists li').scrollIntoView
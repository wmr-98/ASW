const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slide = document.querySelector('.carousel-slide');

let slideIndex = 0;

prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) {
        slideIndex = slide.childElementCount - 1;
    } else {
        slideIndex--;
    }
    updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
    if (slideIndex === slide.childElementCount - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    const slideWidth = slide.clientWidth;
    slide.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

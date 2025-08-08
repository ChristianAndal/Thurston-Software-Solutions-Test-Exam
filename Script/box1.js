let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function nextSlide() {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + 1) % slides.length;

    if (currentIndex !== 0) {
        const currentText = slides[currentIndex].querySelector('.text-content');
        currentText.classList.remove('pop-up');
        void currentText.offsetWidth;
        currentText.classList.add('pop-up');
    }

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function prevSlide() {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    if (currentIndex !== 0) {
        const currentText = slides[currentIndex].querySelector('.text-content');
        currentText.classList.remove('pop-up');
        void currentText.offsetWidth;
        currentText.classList.add('pop-up');
    }

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function currentSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    currentIndex = index;

    if (currentIndex !== 0) {
        const currentText = slides[currentIndex].querySelector('.text-content');
        currentText.classList.remove('pop-up');
        void currentText.offsetWidth; 
        currentText.classList.add('pop-up');
    }

    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

window.addEventListener('load', () => {
    const firstSlideText = slides[0].querySelector('.text-content');
    firstSlideText.classList.add('pop-up');
    slides[0].classList.add('active');
    dots[0].classList.add('active');


    setInterval(nextSlide, 5000); 
});

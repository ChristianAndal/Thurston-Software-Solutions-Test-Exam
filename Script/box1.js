let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to show the next slide
function nextSlide() {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Function to show the previous slide
function prevSlide() {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Function to show a specific slide when clicking a dot
function currentSlide(index) {
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

// Function to show the next slide
function nextSlide() {
    // Remove active class from the current slide
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    // Move to the next slide
    currentIndex = (currentIndex + 1) % slides.length;

    // If not the first slide, apply animation
    if (currentIndex !== 0) {
        const currentText = slides[currentIndex].querySelector('.text-content');
        currentText.classList.remove('pop-up');
        void currentText.offsetWidth; // Trigger reflow
        currentText.classList.add('pop-up');
    }

    // Show the new active slide
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Function to show the previous slide
function prevSlide() {
    // Remove active class from the current slide
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    // Move to the previous slide
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;

    // If not the first slide, apply animation
    if (currentIndex !== 0) {
        const currentText = slides[currentIndex].querySelector('.text-content');
        currentText.classList.remove('pop-up');
        void currentText.offsetWidth; // Trigger reflow
        currentText.classList.add('pop-up');
    }

    // Show the new active slide
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Function to show a specific slide when clicking a dot
function currentSlide(index) {
    // Remove active class from the current slide
    slides[currentIndex].classList.remove('active');
    dots[currentIndex].classList.remove('active');
    
    // Update the current slide index
    currentIndex = index;

    // If not the first slide, apply animation
    if (currentIndex !== 0) {
        const currentText = slides[currentIndex].querySelector('.text-content');
        currentText.classList.remove('pop-up');
        void currentText.offsetWidth; // Trigger reflow
        currentText.classList.add('pop-up');
    }

    // Show the new active slide
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

// Apply animation to the first slide when the page loads
window.addEventListener('load', () => {
    // Trigger the animation for the first slide on page load
    const firstSlideText = slides[0].querySelector('.text-content');
    firstSlideText.classList.add('pop-up');
    // Set the first slide as active
    slides[0].classList.add('active');
    dots[0].classList.add('active');

    // Set interval to change the slide every 6 seconds
    setInterval(nextSlide, 5000); // 6000 milliseconds = 6 seconds
});

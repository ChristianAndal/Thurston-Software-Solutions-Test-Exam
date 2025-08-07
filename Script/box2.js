// Function to check if an element is in view
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&  // Trigger as soon as the element is in view
        rect.bottom >= 0                    // Ensure it's not fully out of view
    );
}

// Function to trigger animation when the element is in view, only once
function handleScroll() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        // Check if the item is in the viewport and hasn't already been made visible
        if (isElementInView(item) && !item.classList.contains('visible')) {
            item.classList.add('visible');  // Add the class to trigger the animation
        }
        // If the item is out of the viewport, remove the 'visible' class to reset the animation
        else if (!isElementInView(item) && item.classList.contains('visible')) {
            item.classList.remove('visible');
        }
    });
}

// Initial scroll check to trigger the animation on page load if items are already in view
document.addEventListener("DOMContentLoaded", handleScroll);

// Listen for scroll events
window.addEventListener('scroll', handleScroll);


function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight &&  
        rect.bottom >= 0                  
    );
}

function handleScroll() {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
        if (isElementInView(item) && !item.classList.contains('visible')) {
            item.classList.add('visible'); 
        }
        else if (!isElementInView(item) && item.classList.contains('visible')) {
            item.classList.remove('visible');
        }
    });
}

document.addEventListener("DOMContentLoaded", handleScroll);

window.addEventListener('scroll', handleScroll);

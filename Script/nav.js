document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); 

        const targetClass = this.getAttribute('data-scroll');
        console.log("Scrolling to class:", targetClass); 

        const targetElement = document.querySelector(`.${targetClass}`);
        console.log("Target element:", targetElement); 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.log("Target element not found");
        }
    });
});

document.querySelectorAll('.nav-list a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Get the class name from the data-scroll attribute
        const targetClass = this.getAttribute('data-scroll');
        console.log("Scrolling to class:", targetClass); // Debug log

        // Select the first element with that class
        const targetElement = document.querySelector(`.${targetClass}`);
        console.log("Target element:", targetElement); // Debug log

        if (targetElement) {
            // Scroll to the start of the class
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.log("Target element not found");
        }
    });
});

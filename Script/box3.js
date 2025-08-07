document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    let currentIndex = 0;

    // Function to change active team member every 5 seconds
    function changeActiveMember() {
        // Remove the 'active' class from the current team member
        teamMembers[currentIndex].classList.remove('active');

        // Increment the index to the next member (looping back to 0 if at the end)
        currentIndex = (currentIndex + 1) % teamMembers.length;

        // Add the 'active' class to the next team member
        teamMembers[currentIndex].classList.add('active');
    }

    setInterval(changeActiveMember, 5000);

    // Function to check if the element is in view
    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Function to handle scroll event and add 'visible' class when element is in view
    function handleScroll() {
        // Loop through all team members and trigger the animation when one of them is in view
        let shouldAnimate = false;
        
        teamMembers.forEach((member) => {
            if (isElementInView(member)) {
                shouldAnimate = true;  // Once any team member is in view, trigger the animation
            }
        });

        // If any team member is in view, apply the 'visible' class to all team members
        if (shouldAnimate) {
            teamMembers.forEach((member) => {
                // Add the 'visible' class to each team member
                member.classList.add('visible');
            });
        }
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Initial check when the page loads
    handleScroll();
});

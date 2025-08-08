document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    let currentIndex = 0;
    let lastScrollTop = 0;  // Variable to track the last scroll position

    // Function to change active team member every 7 seconds
    function changeActiveMember() {
        // Remove the 'active' class from the current team member
        teamMembers[currentIndex].classList.remove('active');

        // Increment the index to the next member (looping back to 0 if at the end)
        currentIndex = (currentIndex + 1) % teamMembers.length;

        // Add the 'active' class to the next team member
        teamMembers[currentIndex].classList.add('active');
    }

    setInterval(changeActiveMember, 7000); // Every 7 seconds

    // Function to check if the element is in view
    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Function to handle scroll event and add 'visible' class when element is in view
    function handleScroll() {
        let shouldAnimate = false;

        // Get the current scroll position
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Trigger animation only when scrolling down and content is in view
        if (currentScrollTop > lastScrollTop) {
            // Loop through all team members and trigger the animation when one of them is in view
            teamMembers.forEach((member) => {
                if (isElementInView(member)) {
                    shouldAnimate = true;  // Once any team member is in view, trigger the animation
                }
            });

            // If any team member is in view, apply the 'visible' class to all team members
            if (shouldAnimate) {
                teamMembers.forEach((member) => {
                    // Reset animation and trigger it again by removing and adding the 'visible' class
                    member.classList.remove('visible');
                    setTimeout(() => {
                        member.classList.add('visible');
                    }, 50); // Small delay to reset the animation
                });
            }
        }

        // Update last scroll position
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    }

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Initial check when the page loads
    handleScroll();
});

let currentIndex = 0;
  const teamMembers = document.querySelectorAll('.team-member');

  function changeActiveMember() {
    // Remove the 'active' class from the current team member
    teamMembers[currentIndex].classList.remove('active');

    // Increment the index to the next member (looping back to 0 if at the end)
    currentIndex = (currentIndex + 1) % teamMembers.length;

    // Add the 'active' class to the next team member
    teamMembers[currentIndex].classList.add('active');
  }

  // Change team member every 5 seconds (5000ms)
  setInterval(changeActiveMember, 5000);



// Create an intersection observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // When element is in view, reset the animation by removing the class
            entry.target.classList.remove('pop-up'); // Remove pop-up to reset
            void entry.target.offsetWidth; // Trigger reflow to reset animation
            entry.target.classList.add('pop-up'); // Add pop-up to start animation
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// Observe each team member
teamMembers.forEach(member => {
    observer.observe(member);
});

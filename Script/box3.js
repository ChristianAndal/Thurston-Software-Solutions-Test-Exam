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

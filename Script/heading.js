
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

// Add event listener to toggle the menu
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Close menu if clicking outside
document.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
    navList.classList.remove('active');
  }
});
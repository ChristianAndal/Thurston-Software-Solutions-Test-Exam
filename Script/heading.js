
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!navList.contains(e.target) && !menuToggle.contains(e.target)) {
    navList.classList.remove('active');
  }
});

const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  document.getElementById('current-date').textContent = formattedDate;
document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    let currentIndex = 0;
    let lastScrollTop = 0;  

    function changeActiveMember() {
        teamMembers[currentIndex].classList.remove('active');

        currentIndex = (currentIndex + 1) % teamMembers.length;

        teamMembers[currentIndex].classList.add('active');
    }

    setInterval(changeActiveMember, 7000); 

    function isElementInView(element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    function handleScroll() {
        let shouldAnimate = false;

        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            teamMembers.forEach((member) => {
                if (isElementInView(member)) {
                    shouldAnimate = true;  
                }
            });

           
            if (shouldAnimate) {
                teamMembers.forEach((member) => {
                    member.classList.remove('visible');
                    setTimeout(() => {
                        member.classList.add('visible');
                    }, 50); 
                });
            }
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; 
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});

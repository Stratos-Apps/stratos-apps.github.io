const reveals = document.querySelectorAll('.reveal');

function checkScroll() {
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 50) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);
checkScroll();

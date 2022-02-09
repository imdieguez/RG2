let navBar = document.querySelector('.nav-container');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    if(lastScrollY < window.scrollY) {
        navBar.classList.add('nav-hiden');
    }else{
        navBar.classList.remove('nav-hiden')
    }
    lastScrollY = window.scrollY;
});
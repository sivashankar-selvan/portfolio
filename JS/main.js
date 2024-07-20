/*==================== toggle icon navbar ====================*/
document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-x');
        navbar.classList.toggle('active');
    };
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change');
    });

    /*==================== scroll section active link ====================*/
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    window.onscroll = () => {
        sections.forEach(section => {
            let top = window.scrollY;
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');
            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
        /*==================== sticky navbar ====================*/
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
        /*==================== remove toggle icon and navbar ====================*/
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    };
});
/*==================== scroll reveal ====================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

ScrollReveal().reveal('.home-content,heading', { delay: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });
/*==================== typed Js ====================*/

const typed = new Typed('.multiple-text', {
    strings: ['Java Developer','Frontend Developer', 'Competitive Programmer', 'AWS Cloud Practitioner'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
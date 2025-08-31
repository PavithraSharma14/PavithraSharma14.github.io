// ======================================= toggle icon navbar =======================================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    menuIcon.classList.toggle('fa-bars');
    navbar.classList.toggle('active');
}

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

// ======================================= scroll section active link =======================================

let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach( sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        };
    });


    // ======================================= sticky navbar =======================================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ======================================= remove toggle icon and navbar =======================================
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// ======================================= scroll reveal =======================================

ScrollReveal({
    distance: '80px',
    duration:2000,
    Delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contanct form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// ======================================= typed js =======================================

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer','Web Designer', 'LinkedIn Content Creator'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})
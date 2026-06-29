// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 100,
    speed: 1200,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
    nav.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    var current = '';
    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
    }
    });

    navLinks.forEach(link => {
    link.style.color = '#2c3e50';
    if (link.getAttribute('href').slice(1) === current) {
        link.style.color = '#0066cc';
    }
    });
});
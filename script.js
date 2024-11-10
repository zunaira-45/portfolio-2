let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Assuming navbar has a class of 'navbar'
let sections = document.querySelectorAll('section'); // Use querySelectorAll
let navLinks = document.querySelectorAll('header nav a'); // Use querySelectorAll

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => { // Use link instead of links
                link.classList.remove('active'); // Corrected classList
            });
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active'); // Corrected classList and selector
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
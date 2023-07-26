let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//<i class='bx bx-x' ></i>

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(navLinks => {
                navLinks.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});

ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});

const typed = new Typed('.multiple-text', {
    strings: ['ISO 9001', 'ISO 14001', 'ISO 22000', 'ISO 17025', 'ISO 27001', 'ISO 28001', 'HACCP'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const typed2 = new Typed('.multiple-text2', {
    strings: ['Pályázat írással', 'Tanácsadással'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "rollergraf1981@gmail.com",
        Password: "7012fdd2-243f-4e6f-834e-14f9bf5c0faa",
        To: 'reithauser@gmail.com',
        From: document.getElementById("email").value,
        Subject: document.getElementById("subject").value,
        Body: "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone: " + document.getElementById("phonenumber").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}
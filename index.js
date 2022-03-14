let nav = document.querySelector('.nav');
let sectionOne = document.querySelector('.me');
let sectionOneOptions = {
    rootMargin: "-70px 0px 0px 0px"
};

let sectionOneObserver = new IntersectionObserver(function(entries){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('nav-scrolled');
        } else{
            nav.classList.remove('nav-scrolled');
        }
    })
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);

//Project Popups
let image1 = document.querySelector('#popup1');
let image2 = document.querySelector('#popup2');
let image3 = document.querySelector('#popup3');
let image4 = document.querySelector('#popup4');
let close1 = document.querySelector('.close1');
let close2 = document.querySelector('.close2');
let close3 = document.querySelector('.close3');
let close4 = document.querySelector('.close4');
let background1 = document.querySelector('.bg-modal1');
let background2 = document.querySelector('.bg-modal2');
let background3 = document.querySelector('.bg-modal3');
let background4 = document.querySelector('.bg-modal4');

image1.addEventListener('click', popUp1);
image2.addEventListener('click', popUp2);
image3.addEventListener('click', popUp3);
image4.addEventListener('click', popUp4);
close1.addEventListener('click', closeModal1);
close2.addEventListener('click', closeModal2);
close3.addEventListener('click', closeModal3);
close4.addEventListener('click', closeModal4);
background1.addEventListener('click', closeModal1);
background2.addEventListener('click', closeModal2);
background3.addEventListener('click', closeModal3);
background4.addEventListener('click', closeModal4);

function popUp1(e){
    e.preventDefault();
    document.querySelector('.bg-modal1').style.display = 'flex';
}

function popUp2(e){
    e.preventDefault();
    document.querySelector('.bg-modal2').style.display = 'flex';
}

function popUp3(e){
    e.preventDefault();
    document.querySelector('.bg-modal3').style.display = 'flex';
}

function popUp4(e){
    e.preventDefault();
    document.querySelector('.bg-modal4').style.display = 'flex';
}

function closeModal1(e){
    e.preventDefault();
    document.querySelector('.bg-modal1').style.display = 'none';
}

function closeModal2(e){
    e.preventDefault();
    document.querySelector('.bg-modal2').style.display = 'none';
}

function closeModal3(e){
    e.preventDefault();
    document.querySelector('.bg-modal3').style.display = 'none';
}

function closeModal4(e){
    e.preventDefault();
    document.querySelector('.bg-modal4').style.display = 'none';
}

//Reveal.js
const navitem = document.querySelectorAll('.nav-item');

navitem.forEach((nav, i) => {
    ScrollReveal().reveal(nav, {
        delay: i * 300,
        distance: '50px',
        duration: 600,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        interval: 0,
        opacity: 0,
        origin: 'top',
        mobile: true,
        desktop: true
    })
})

ScrollReveal().reveal('.reveal', {
    delay: 600,
    distance: '50px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    reset: false,
    mobile: true,
    desktop: true
})

ScrollReveal().reveal('.projectzzz', {
    delay: 600,
    distance: '50px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'left',
    reset: false,
    mobile: true,
    desktop: true
})
/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
      navToggel = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggel) {
    navToggel.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.querySelector('#nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}

navLink.forEach(e => e.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.querySelector('#header');
    // When the scroll is greater than 50 viewport height, and scroll-header class to the header tag
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
} 
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.querySelector('#scroll-up');
    // When the scroll is greater than 200 viewport height, and show-scroll class to the scrollUp tag
    if(this.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title`,  {delay: 100})
sr.reveal(`.home__footer`,  {delay: 700})
sr.reveal(`.home__img`,  {delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,  {interval: 100, origin: 'top'})
sr.reveal(`.specs__data, .discount__animate`,  {interval: 100, origin: 'left'})
sr.reveal(`.specs__img, .discount__img`,  {origin: 'right'})
sr.reveal(`.case__img`,  {origin: 'top'})
sr.reveal(`.case__data`)
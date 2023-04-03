const logoFixed = document.querySelector('.header__fixed-logo');
const companyInfo = document.querySelector('.header__company-info');
const menu = document.querySelector('.header__menu');
const anchorLinks = document.querySelectorAll('a[href^="#"]');

const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  navigation: {
    nextEl: '.swiper__button_next',
    prevEl: '.swiper__button_prev',
  },
  pagination: {
    el: '.swiper__pagination',
    clickable: true,
  },
  keyboard: true,
});

document.addEventListener('scroll', () => {
  if(window.scrollY >= 64) {
    companyInfo.classList.add('header__company-info_hide');
    logoFixed.classList.add('header__fixed-logo_visible');
  } else {
    companyInfo.classList.remove('header__company-info_hide');
    logoFixed.classList.remove('header__fixed-logo_visible');
  }
})

anchorLinks.forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();

    const href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href);
    const menuTop = menu.getBoundingClientRect().top;
    const menuBottom = menu.getBoundingClientRect().bottom;
    const topOffset = menuBottom - menuTop;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
})

const buttonUp = document.querySelector('.button-up');

document.addEventListener('scroll', () => {
  const clientHeight = document.documentElement.clientHeight;
  if (window.scrollY > (clientHeight)) {
    buttonUp.classList.add('button-up_visible');
  } else {
    buttonUp.classList.remove('button-up_visible');
  }
})
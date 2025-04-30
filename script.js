const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  
 // area-label
  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// new Accordion('.accordion-container');

var acc = document.getElementsByClassName("faq__btn");
var i;
var active = document.getElementsByClassName('plus.active')
var plus = document.getElementsByClassName('faq__btnn')
 
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}







let burger = document.querySelector('.header-burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('header-burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
  }
);

menuLinks.forEach(function(el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header-burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  });
});



const searchBtn = document.querySelector('.header__btn');
const searchModal =  document.querySelector('.header__search');
const searchCloseBtn = document.querySelector('.header__form-close');

searchBtn.addEventListener('click', () => {
  searchModal.classList.add('header__search_opened');
});

searchCloseBtn.addEventListener('click', () => {
  searchModal.classList.remove('header__search_opened');
});


var languageOptions = document.querySelectorAll('.btn-work');

languageOptions.forEach(function(element, index) {
  element.addEventListener('click', switchLanguage);
});

function switchLanguage (event) {
  var targetElement = event.target;

  languageOptions.forEach(function(element, index) {
    element.classList.remove('active');
  });

  targetElement.classList.add('active');
}
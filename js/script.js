$(function() {
    const nextIcon = '<img src="/img/svg/slider-arrow-right.svg">';
    const prevIcon = '<img src="/img/svg/slider-arrow-left.svg">';

    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: false,
      nav: true,
      navText:[
        nextIcon,
        prevIcon,
      ]
    });
  });
  
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active')
        }
    };
}());
// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header_nav_active');
});
}());
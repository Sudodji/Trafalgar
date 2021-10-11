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
  
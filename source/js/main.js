$(document).ready(function () {

  if ($('.reviews__list').length) {
    $('.reviews__list').slick({
      slidesToShow: 3,
      infinite: true,
      prevArrow: $('.reviews__arrow--prev'),
      nextArrow: $('.reviews__arrow--next'),
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    });
  }

  if ($('.first-slider').length) {
    $('.first-slider').slick({
      slidesToShow: 1,
      infinite: true,
      dots: true,
    });
  }

  if ($('.burger').on('click', function () {
    $(this).toggleClass('burger--open');
    $('.header__menu').slideToggle();
  }));

  $('#modal').arcticmodal();

});

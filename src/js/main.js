/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

$(document).ready(function(){
  $(".banner").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false
  });

  $(".blog__partenaire-slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: true,
  });

  $(".blog__reviews-slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
  });
});




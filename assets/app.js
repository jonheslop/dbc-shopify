$(document).ready(function(){
  $('.home-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    dots: true
  });

  $('.play-button').click(function(e){
    e.preventDefault();
    this.remove();
    $('.video-container .aspect-ratio--object').remove();
  });
});

$(document).ready(function(){

  $(".menu-collapsed").click(function() {
    $(this).toggleClass("menu-expanded");
});


  $('#pic-carousel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1200,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        arrows: false,
    	 infinite: true,
  		  slidesToShow: 2,
  		  slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

  $('#sale-carousel').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
    {
    breakpoint: 1200,
      settings: {
        speed: 300,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
    breakpoint: 768,
      settings: {
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });

});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 15,
    nav:true,
    pagination: false,
    dots: false,
    width: 253,
    height: 280,
    responsive:{
        0:{
            items:1,
            stagePadding: 50
        },
        768:{
            items:3,
            stagePadding: 50
        },
        1300:{
            items:4,
            stagePadding: 0
        }
    }
  });

//   One At A Time

// Carousel Menu on Click
$(document).ready(function() {
    $(".post-filter li").click(function() {
        $(".post-filter li").removeClass('active');
        $(this).addClass('active');
    });
});
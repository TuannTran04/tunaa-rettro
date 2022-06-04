// SLICK HEADER
$(document).ready(function () {
    $('.slider_img').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        dots: true,
    });
});


// SLICK MEMBER COMMENT
$(document).ready(function(){
    $('.member_slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-right'></i></button>",
        prevArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-left'></i></button>",
    });
  });

// SLICK IMG INSTAGRAM

$(document).ready(function () {
    $('.ins_img').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: true,
        arrows: false,
        // variableWidth: true,
    });
});


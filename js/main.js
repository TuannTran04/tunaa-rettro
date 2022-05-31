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


const menu = document.querySelector('#nav-icon a');
const info = document.querySelector('.nav-info');

menu.onclick = function(e) {
    e.preventDefault();
    info.classList.toggle('nav-info_show');
}

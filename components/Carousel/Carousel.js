$(document).ready(() => {
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        dots: true,
        nextArrow: '<button><i class="fas fa-chevron-circle-right"></i></button>',
        prevArrow: '<button><i class="fas fa-chevron-circle-left"></i></button>',
    })
});
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
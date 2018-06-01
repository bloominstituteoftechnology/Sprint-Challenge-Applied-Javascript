class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        
        this.leftBtn = this.carousel.querySelector('.left-button');

        this.rightBtn = this.carousel.querySelector('.right-button');
        
        this.leftBtn = new CarouselBtn(this.leftBtn, this);
        this.rightBtn = new CarouselBtn(this.rightBtn, this);
        
        this.images = document.querySelectorAll('.carousel-image');
        this.images = Array.from(images).map(image => new Image());
        this.activeImage = images[0];
    }

    init() {
        this.activeImage;
    }
}

}

let carousels = document.querySelectorAll('.carousel');

carousels = Array.from(carousels).map(carousel => new Carousel(carousel));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
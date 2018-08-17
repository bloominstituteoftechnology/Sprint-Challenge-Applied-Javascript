class Carousel {
    constructor(element){
        this.element = elment;
        
        this.buttonLeft = document.querySelector('.left-button');

        this.buttonRight = document.querySelector('.right-button');

        this.pics = document.querySelectorAll('.carousel-img');

        this.buttonLeft.addEventListener('click', () => {
            this.shiftLeft()
        });

        this.buttonRight.addEventListener('click', () => {
            this.shiftRight()
        });
    }

    shiftLeft() {

    }

    shiftRight() {

    }
}


let carousel = document.querySelector('.carousel');

carousel = Array.from(carousel).map(carouselPic => new PicLink(carouselPic));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
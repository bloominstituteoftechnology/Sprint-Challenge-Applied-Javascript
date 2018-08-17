class Carousel {
    constructor(element){
        this.element= element;
        this.rightBtn = document.querySelector('.right-button');
        this.leftBtn = document.querySelector('.left-button');
        this.imgs = document.querySelectorAll('.carouselImg');
        this.imgs = Array.from(this.imgs).map(img => new Imgs(img));
    }

}

let carousel = document.querySelector('.carousel');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Imgs {
    constructor(elements){
        this.element= elements;
    }
}
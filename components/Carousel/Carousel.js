class Carousel {
    constructor(slideshow) {
        this.slideshow = slideshow;
        this.left = document.querySelector('.left-button');
        this.left.addEventListener('click', () => this.switchImgLeft());

        this.right = document.querySelector('.right-button');
        this.right.addEventListener('click', () => this.switchImgRight());

        this.images = document.querySelectorAll('img');
        this.index = Array.from(this.images);
    }

    switchImgLeft() {
        console.log('You clicked the left button.');
    }

    switchImgRight() {
        console.log('You clicked the right button.');
    }
}

let carousel = document.querySelector('.carousel');
carousel = Array.from(carousel).map(slideshow => new Carousel(slideshow));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
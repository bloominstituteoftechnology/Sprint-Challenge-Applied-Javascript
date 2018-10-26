class Carousel {

    constructor(element) {
        this.element = element; // div class carousel
        this.rightButton = element.querySelector('.right-button'); // div class for right button
        this.leftButton = element.querySelector('.left-button'); // div class for left button
        this.images = element.querySelectorAll('.img'); // node 4list of all images
        this.images = Array.from(this.images).map(image => new Images(image)); // array of 4 images
        this.currentIndex = 0;
        
        
        this.rightButton.addEventListener('click', () => {
            this.next();
        })

        this.leftButton.addEventListener('click', () => {
            this.previous();
        })

    }

    next() {

    }

    previous() {

    }
}

class Images {
    constructor(element) {
        this.element = element;
    }
}

let carousel = new Carousel (document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
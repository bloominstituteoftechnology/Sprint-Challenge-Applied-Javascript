class Carousel {
    constructor(element) {
        this.element = element;
        // grab left and right buttons
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');
        // grab all the images
        this.images = Array.from(this.element.querySelectorAll('img'));
        // set the initial state and display first image
        this.current = 0;
        this.length = this.images.length;
        this.displayImage(this.current);

        // activate the buttons
        this.left.addEventListener('click', () => {this.shiftLeft()});
        this.right.addEventListener('click', () => {this.shiftRight()});
    }

    // undisplay the current image and display the indicated image
    displayImage(num) {
        this.images[this.current].style = 'display: null';
        this.images[num].style = 'display: block';
        this.current = num;
    }

    // shift left in the image carousel.  Loop to the rightmost image if at beginning
    shiftLeft() {
        let num = this.current - 1;
        if (num < 0) {
            num = this.length - 1;
        }
        this.displayImage(num);
    }

    // shift right in the image carousel.  Loop to the beginning image if at the end
    shiftRight() {
        let num = this.current + 1;
        if (num >= this.length) {
            num = 0;
        }
        this.displayImage(num);
    }
}

// find the carousel element and instantiate the Carousel component object
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
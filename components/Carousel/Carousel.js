class Carousel {

    constructor(element) {
        this.element = element; // div class carousel
        this.rightButton = element.querySelector('.right-button'); // div class for right button
        this.leftButton = element.querySelector('.left-button'); // div class for left button
        this.images = element.querySelectorAll('.img'); // node 4list of all images
        this.currentIndex = 0;
        this.images[0].style.display = 'block'; // this will display the first image in the carousel

        this.rightButton.addEventListener('click', () => {
            this.next();
        })

        this.leftButton.addEventListener('click', () => {
            this.previous();
        })

    }

    next() {
        this.images[this.currentIndex].style.display = 'none'; // need to display current image to none before logic

        // If the image is the last one, we will display the first image.
        if (this.currentIndex === this.images.length-1) {
            this.currentIndex = 0;
        } else {
            this.currentIndex = this.currentIndex + 1;
        }
        this.images[this.currentIndex].style.display = 'block';
    }

    previous() {
        this.images[this.currentIndex].style.display = 'none'; // need to display current image to none before logic

        // If the image is first one, then previous will go to last image. 
        if (this.currentIndex === 0) {
            this.currentIndex = this.images.length-1;
        } else {
            this.currentIndex = this.currentIndex - 1;
        }
        this.images[this.currentIndex].style.display = 'block';
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
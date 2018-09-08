class Carousel {
    constructor(element) {
        // Reference this carousel
        this.element = element;

        // Get both the left and right carousel buttons
        this.leftBtn = document.querySelector('.carousel .left-button');
        this.rightBtn = document.querySelector('.carousel .right-button');

        // Get the carousel images
        this.images = document.querySelectorAll('.carousel img');

        // Set up a current index int
        this.currentIndex = 0;

        /**
         * Set up an overall image count int with the value of the max image count of the
         * carousel
         */
        this.imgCount = this.images.length;

        // Add click events to both of the left and right buttons
        this.leftBtn.addEventListener('click', () => {this.selectLeft();});
        this.rightBtn.addEventListener('click', () => {this.selectRight();});

        // Add a animation timeline to each of the images
        this.images.forEach(elem => {
            let tl = new TimelineLite({paused:true});
            tl.to(elem, 0.3, {left: 0 + 'px', opacity: 1, ease: Power2.easeIn});
            elem.animation = tl;
        });

        // Make the first image display by default
        this.images[0].style.display = 'block';
        // Play the first image animation
        this.images[0].animation.play();


    }

    // Selects and displays the previous image
    selectLeft() {
        // Decrease current index
        this.currentIndex--;

        // Check if at the end of the images and then loop to beginning
        if (this.currentIndex <= 0 - 1) {
            // Reset currentIndex to the last image
            this.currentIndex = 3;
        }

        // Loop though the images and set the image index to the current index
        for (let i = 0; i < this.imgCount; i++) {
            if (this.currentIndex === i) {
                // Play current image animation
                this.images[i].animation.play();
                // Set current image display to block
                this.images[i].style.display = 'block';
                
            }
            else {
                // Reverse every other image animtion
                this.images[i].animation.reverse();
                // Set every other image to display none
                this.images[i].style.display = 'none';
                
            }
        }
    }

    // Selects and displays the next image
    selectRight() {
        // Increase current index
        this.currentIndex++;

        // Check if at the end of the images and then loop to beginning
        if (this.currentIndex > this.imgCount - 1) {
            // Reset currentIndex to the first image
            this.currentIndex = 0;
        }

        // Loop though the images and set the image index to the current index
        for (let i = 0; i < this.imgCount; i++) {
            if (this.currentIndex === i) {
                // Play current image animation
                this.images[i].animation.play();
                // Set current image display to block
                this.images[i].style.display = 'block';
            }
            else {
                // Reverse every other image animtion
                this.images[i].animation.reverse();
                // Set every other image to display none
                this.images[i].style.display = 'none';
            }
        }
    }
}

// Creates a new variable carousel from the CSS class .carousel
let carousel = document.querySelector('.carousel');

// Makes a new Carousel (JS class) of carousel HTML element
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
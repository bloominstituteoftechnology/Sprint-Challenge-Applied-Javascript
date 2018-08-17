class Carousel {
    constructor(element) {
        this.element = element;

        this.leftBtn = document.querySelector('.left-button');
        this.rightBtn = document.querySelector('.right-button');

        this.images = document.querySelectorAll('.carousel img');
        this.currentIndex = 0;
        this.imgCount = this.images.length;

        this.leftBtn.addEventListener('click', () => {this.selectLeft();});
        this.rightBtn.addEventListener('click', () => {this.selectRight();});

        this.images[0].style.display = 'block';

        images.forEach( elem => {
        })
    }

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
                this.images[i].style.display = 'block';
            }
            else {
                this.images[i].style.display = 'none';
            }
        }
    }

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
                this.images[i].style.display = 'block';
            }
            else {
                this.images[i].style.display = 'none';
            }
        }
    }
}

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
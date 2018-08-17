class Carousel {
    constructor(element) {
        this.element = element;
        // Get left and right buttons from carousel element
        this.leftButton = element.querySelector('.left-button');
        this.rightButton = element.querySelector('.right-button');
        // Get all images within carousel element
        this.images = this.element.querySelectorAll('img');
        // Set default index to 0
        this.currentIndex = 0;
        // Show first image by default
        this.images[this.currentIndex].style.display = 'block';

        this.leftButton.addEventListener('click', () => {
            this.lastImage();
        })

        this.rightButton.addEventListener('click', () => {
                this.nextImage();
        })
    }
    

    lastImage() {
        // Shift index -1 on left click, wraparound if index < 0
        if ((this.currentIndex - 1) < 0) {
            this.currentIndex = this.images.length - 1;
        } else {
            this.currentIndex -= 1;
        }
        // hide all images
        this.images.forEach(function (each) {
            each.style.display = 'none';
        })
        // display image of current index
        this.images[this.currentIndex].style.display = 'block';
        let currentImg = this.images[this.currentIndex];
        TweenMax.fromTo(currentImg, 0.5, { ease: Back.easeOut, x: 1200 }, { ease: Back.easeOut, x: 0 });
    }


    nextImage() {
        // Shift index +1 on right click, wraparound if index > images.length - 1
            if ((this.currentIndex + 1) > this.images.length - 1) {
                this.currentIndex = 0;
            } else {
                this.currentIndex += 1;
            }
        
        // hide all images
        this.images.forEach(function (each) {
            each.style.display = 'none';
        })
        // display image of current index
        this.images[this.currentIndex].style.display = 'block';
        let currentImg = this.images[this.currentIndex];
        TweenMax.fromTo(currentImg, 0.5, { ease: Back.easeOut, x: -1200 }, { ease: Back.easeOut, x: 0 });
    }
}


let carousel = document.querySelectorAll('.carousel');

carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img');
        this.index = 0;

        this.leftBtn.addEventListener('click', (event) => this.previous(event));
        this.rightBtn.addEventListener('click', (event) => this.next(event));

        this.activeImage();
        this.previewCarousel();
    }

    activeImage() {
        this.images[0].classList.add('show-img');
    }

    previewCarousel() {
        const self = this;

        setInterval(function() {
            if (self.index === self.images.length) {
                clearInterval();
                self.index = 0;
                self.images[self.index].classList.add('show-img');
            }
            self.images.forEach(image => image.classList.remove('show-img'));
            self.images[self.index].classList.add('show-img');
            self.index += 1;
        }, 3000);
    }

    previous() {
        if (this.index === 0) {
            // index = 4 - 1
            this.index = this.images.length - 1;
        } else {
            // index = indexValueGreaterThanZero - 1
            this.index = this.index - 1;
        }

        // hide all images
        this.images.forEach(image => image.classList.remove('show-img'));

        // show image currently being viewed
        this.images[this.index].classList.add('show-img');
    }

    next() {
        // if index is on the last image
        if (this.index === this.images.length-1) {
            // go back to the first image
            this.index = 0;
        } else {
            // go to the next image
            this.index = this.index + 1;
        }

        // hide all images
        this.images.forEach(image => image.classList.remove('show-img'));

        // show image currently being viewed
        this.images[this.index].classList.add('show-img');
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
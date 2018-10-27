class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.carouselImages = this.carousel.querySelectorAll('img');
        this.carouselLButton = this.carousel.querySelector('.left-button');
        this.carouselRButton = this.carousel.querySelector('.right-button');
        this.carouselLButton.addEventListener('click', currentImage => this.prevImage());
        this.carouselRButton.addEventListener('click', currentImage => this.nextImage());
        this.activeImage = this.carouselImages[0];
        this.activeImageIndex = 0;
        this.displayImage(this.activeImage);
        console.log(this.carouselImages.length);
    }
    prevImage() {
        this.activeImage.style.display = 'none';
        if (this.activeImageIndex > 0) {
            this.activeImageIndex -= 1;
        } else {
            this.activeImageIndex = this.carouselImages.length - 1;
        }
        this.displayImage();
    }
    nextImage() {
        this.activeImage.style.display = 'none';
        if (this.activeImageIndex < this.carouselImages.length - 1) {
            ++this.activeImageIndex;
        } else {
            this.activeImageIndex = 0;
        }

        this.displayImage();
    }
    displayImage() {
        this.activeImage = this.carouselImages[this.activeImageIndex];
        this.activeImage.style.display = 'block';
    }
}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

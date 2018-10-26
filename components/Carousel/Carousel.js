class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.carouselImages = this.carousel.querySelectorAll('img');
        this.carouselLButton = this.carousel.querySelector('.left-button');
        this.carouselRButton = this.carousel.querySelector('.right-button');
        this.carouselLButton.addEventListener('click', () => this.prevImage(this.activeImage));
        this.carouselRButton.addEventListener('click', () => this.nextImage(this.activeImage));
        this.activeImage = this.carouselImages[0];
        this.activeImageIndex = 0;
        this.displayImage(this.activeImage);
    }
    prevImage(currentImage) {}
    nextImage(currentImage) {
        currentImage.style.display = 'none';
        this.activeImage = this.carouselImages[++this.activeImageIndex];
        this.activeImageIndex += 1;
        this.displayImage(this.activeImage);
    }
    displayImage(nextImage) {
        nextImage.style.display = 'block';
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

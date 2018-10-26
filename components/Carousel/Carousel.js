class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');

        this.photos = this.carousel.querySelectorAll('img');
        this.photos = Array.from(this.photos).map(img => new CarouselImage(img));

        this.currentIndex = this.photos[0];

        console.log(this.photos);

        this.leftButton.addEventListener('click', () => this.handleLeftClick());
        this.rightButton.addEventListener('click', () => this.handleRightClick());
    }

    // Methods

    handleLeftClick() {
        console.log('Left Button');

    }
    handleRightClick() {
        console.log('Right Button');
    }
}

class CarouselImage {
    constructor(image) {
        this.image = image;
    }

    showImage() {
        this.image.style.display = 'inline-block';
    }
}


// Initial DOM Reference
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
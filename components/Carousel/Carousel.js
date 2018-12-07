class Carousel {
    constructor(carousel){

        this.carousel = carousel;
        this.leftButton = this.carousel.querySelector('.left-button');
        this.rightButton = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelectorAll('img')

        let carouselIndex = 0;
        this.carouselIndex = carouselIndex;
        this.images[carouselIndex].style.display = 'flex';
        // this.images.forEach(image => image.style.display = 'flex');

        this.leftButton.addEventListener('click', () => this.selectLeft(carouselIndex));
        this.rightButton.addEventListener('click', () => this.selectRight(carouselIndex));
    }

    // selectLeft(index) {
    //     this.images[this.carouselIndex].style.display = 'none';
    //     if (this.carouselIndex <= 0) {this.carouselIndex = this.images.length}
    //     this.carouselIndex--;
    //     this.images[this.carouselIndex].style.display = 'flex';
    // }
    // selectRight(index) {
    //     this.images[this.carouselIndex].style.display = 'none';
    //     if (this.carouselIndex >= this.images.length-1) {this.carouselIndex = -1}
    //     this.carouselIndex++;
    //     this.images[this.carouselIndex].style.display = 'flex';
    // }

    selectLeft(index) {
        $(this.images[this.carouselIndex]).hide();
        if (this.carouselIndex <= 0) {this.carouselIndex = this.images.length}
        this.carouselIndex--;
        $(this.images[this.carouselIndex]).show('slow');
    }
    selectRight(index) {
        $(this.images[this.carouselIndex]).hide();
        if (this.carouselIndex >= this.images.length-1) {this.carouselIndex = -1}
        this.carouselIndex++;
        $(this.images[this.carouselIndex]).show('slow');
    }
}

let carousel = document.querySelector('.carousel')
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
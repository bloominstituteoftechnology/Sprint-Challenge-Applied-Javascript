class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.carouselImage = this.carousel.querySelectorAll('img');
        console.log(this.carouselImage);

        console.log(carousel);
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');

        this.leftButton.addEventListener('click', () => this.scrollLeft());
        this.rightButton.addEventListener('click', () => this.scrollRight());



    }

    scrollRight() {
        console.log('right clicked')
    };
    scrollLeft() {
        console.log('left clicked')
    };

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
class Carousel {
    constructor(carouselComponents) {
        this.carouselComponents = carouselComponents;
        this.carouselLeftButton = this.carouselComponents.querySelectorAll('.left-button')
        this.carouselRightButton = this.carouselComponents.querySelectorAll('.right-button')
        this.carouselImages = this.carouselComponents.querySelectorAll('img')
        console.log(this.carouselImages)
    }
}

let mainCarousel = document.querySelectorAll('.carousel');

mainCarousel = Array.from(mainCarousel).map( carouselComponents => new Carousel(carouselComponents))


// buttons = Array.from(buttons).map( carouselButtons)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

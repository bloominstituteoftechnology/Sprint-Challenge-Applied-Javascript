class Carousel {
    constructor(carouselComponents) {
        this.carouselComponents = carouselComponents;
        this.carouselLeftButton = this.carouselComponents.querySelector('.left-button')
        this.carouselRightButton = this.carouselComponents.querySelector('.right-button')
        this.carouselImages = this.carouselComponents.querySelectorAll('img')
        // this.carouselImages[i].style.display = 'flex';
        this.carouselRightButton.addEventListener('click', () => this.nextImage());
        this.carouselLeftButton.addEventListener('click', () => this.lastImage());
        // this.carouselImages = this.carouselComponents.querySelectorAll('img')
    }
    nextImage(){
        i++;
        if (i > 3) {i = 0};
        Array.from(this.carouselImages).forEach(image => image.style.display = 'none')
        this.carouselImages[i].style.display = 'flex'
        console.log(`displaying image ${i}`)
    }
    lastImage(){
        // debugger;
        // i--;
        (i === 0) ? i = 3 : i--;
        Array.from(this.carouselImages).forEach(image => image.style.display = 'none')
        this.carouselImages[i].style.display = 'flex'
        console.log(`displaying image ${i}`)
    }
}
let i = 0;
let mainCarousel = document.querySelector('.carousel');
mainCarousel = new Carousel(mainCarousel);
// mainCarousel = Array.from(mainCarousel).map( carouselComponents => new Carousel(carouselComponents))
mainCarousel.carouselImages[i].style.display = 'flex';


// buttons = Array.from(buttons).map( carouselButtons)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.carouselImage = carouselElement.querySelectorAll('.carousel-img');
        this.leftButton = carouselElement.querySelector('.left-button');
        this.rightButton = carouselElement.querySelector('.right-button');
        this.count = 0;
        this.leftButton.addEventListener('click', () => this.countDown() );
        this.rightButton.addEventListener('click', () => this.countUp() );
        this.carouselImage[0].style.display = 'block';

    }
    imageDisplay() {
        document.querySelectorAll('.carousel-img').forEach( item => item.style.display = 'none');
        this.carouselImage[this.count].style.display = 'block';
    }
    countUp() {
        this.count++;
        if(this.count > 3) { this.count = 0}
        this.imageDisplay();
    }
    countDown() {
        this.count--;
        if(this.count < 0) { this.count = this.carouselImage.length - 1}
        this.imageDisplay();
    }
}

// Grab grab the carousel DOM element and assign it to a variable.
let carousel = document.querySelectorAll('.carousel');
// Convert the NodeList we just created. Convert it to an Array. Then map the array into the class Carousel.
carousel = Array.from(carousel).map( item => new Carousel(item));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
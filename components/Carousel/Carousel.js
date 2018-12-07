class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.images = this.carousel.querySelectorAll('.carousel img');
        this.current = this.images[0];

        if (this.carousel.classList.contains('left-button')) {
        
        };

        else if (this.carousel.classList.contains('right-button') {

        };
        
        this.carousel.addEventListener('click', function() {

        };

        )
        
    }
}

class CarouselImg {
    constructor(imgElement) {
    this.imgElement = imgElement;
}
    selectImg() {
    this.imgElement.style.display = 'flex';
    }
    

let carousel = document.querySelectorAll('.carousel, .left-button, .right-button');
carousel.forEach(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
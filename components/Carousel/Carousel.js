class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector('.right-button');
        this.images = this.carousel.querySelector('.carousel img');

        let carouselIndex = 0;
        this.carouselIndex = carouselIndex;
        this.images.forEach( image => image.style.display = 'flex');
            
        
    

        this.leftBtn.addEventListener('click', () => selectLeft());
        this.rightBtn.addEventListener('click', () => selectRight());
    }

    selectLeft(){
        $(this.images[this.carouselIndex]).hide();
    }
}    

    
let carousel = document.querySelector('.carousel');
carousel = new Carousel (carousel);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
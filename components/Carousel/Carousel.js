class Carousel {
    constructor(element){
        this.element = element;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        const imgs = document.querySelectorAll(`.carousel img`);
    }
    prevSlide(){
        this.leftButton.addEventListener('click', () => {`function here`})
    }
    nextSlide(){
        this.rightButton.addEventListener('click', () => {`function here`})
    }
}


let carousel = document.querySelector('.carousel');
new Carousel(carousel)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
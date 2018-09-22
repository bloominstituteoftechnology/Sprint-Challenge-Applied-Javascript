

//== Carousel Component ========================================================

class Carousel {
    constructor (containerElement) {
        this.element = containerElement;
        this.position = 0;
        // Empty div of box elements. Prep boxes as frames.
        this.slides = [];
        this.element.querySelectorAll('img').forEach(slideElement => {
            this.slides.push(slideElement);
        });
        this.currentSlide = undefined;
        // Populate div with arrows and frame
        this.arrowLeft  = this.element.querySelector('.left-button' );
        this.arrowRight = this.element.querySelector('.right-button');
        // Setup event listeners
        this.arrowLeft .addEventListener('click', () => {
            this.slide(-1);
        });
        this.arrowRight.addEventListener('click', () => {
            this.slide(1);
        });
        //
        this.slide(0);
    }
    slide(direction) {
        this.position += direction;
        if(this.position < 0){ this.position += this.slides.length;}
        if(this.position >= this.slides.length){ this.position = 0;}
        //
        let oldSlide = this.currentSlide;
        this.currentSlide = this.slides[this.position];
        this.currentSlide.style.display = 'block';
        if(oldSlide){
            oldSlide.style.display = 'none';
        }
    }
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
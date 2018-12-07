class Carousel {
    constructor(el) {
        //Assign DOM elements
        this.carousel = el;
        this.left = this.carousel.querySelector('.left-button');
        this.right = this.carousel.querySelector('.right-button');
        this.slides = this.carousel.querySelectorAll('img');
        this.currentSlide = this.slides[0];
        this.currentSlideIndex = 0;
        
        //Assign Event Listeners
        this.left.addEventListener('click', () => this.moveLeft());
        this.right.addEventListener('click', () => this.moveRight());

        //Show current slide/image
        this.currentSlide.style.display = 'flex';
    }

    moveLeft() {
        //Hide all images, then display the next slide to the left/-1 index
        let exitSlide = this.currentSlide;
        let nextSlideIndex = this.currentSlideIndex - 1;
        let nextSlide = undefined;
        if(this.slides[nextSlideIndex] !== undefined) {
            this.currentSlideIndex = nextSlideIndex;
            nextSlide = this.slides[nextSlideIndex];
            this.slides.forEach(s => {
                s.style.display = 'none';
            });
            this.currentSlide = nextSlide;
            this.currentSlide.style.display = 'flex';
        } else {
            this.currentSlideIndex = this.slides.length - 1;
            nextSlide = this.slides[this.slides.length - 1];
            this.slides.forEach(s => {
                s.style.display = 'none';
            });
            this.currentSlide = nextSlide;
            this.currentSlide.style.display = 'flex';
        }
    }

    moveRight() {
        //Hide all images, then display the next slide to the right/+1 index
        let exitSlide = this.currentSlide;
        let nextSlideIndex = this.currentSlideIndex + 1;
        let nextSlide = undefined;
        if(this.slides[nextSlideIndex] !== undefined) {
            this.currentSlideIndex = nextSlideIndex;
            nextSlide = this.slides[nextSlideIndex];
            this.slides.forEach(s => {
                s.style.display = 'none';
            });
            this.currentSlide = nextSlide;
            this.currentSlide.style.display = 'flex';
        } else {
            this.currentSlideIndex = 0;
            nextSlide = this.slides[0];
            this.slides.forEach(s => {
                s.style.display = 'none';
            });
            this.currentSlide = nextSlide;
            this.currentSlide.style.display = 'flex';
        }
    }
}

let carouselDOM = document.querySelector('.carousel');
let carousel = new Carousel(carouselDOM);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
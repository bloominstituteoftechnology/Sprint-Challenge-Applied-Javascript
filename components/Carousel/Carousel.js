class Carousel {
    constructor(element) {
        this.element = element;
        this.slides = document.querySelectorAll('.carousel img');
        this.slides = Array.from(this.slides);
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.count = 0;
        this.activeSlide = this.slides[this.count];
        this.showPictures(this.activeSlide);
        this.rightButton.addEventListener('click', () => {
            this.clickRight();
        })
        this.leftButton.addEventListener('click', () => {
            this.clickLeft();
        })
    }
    showPictures(element) {
        element.style = "display: block";
    }
    hidePictures(element) {
        element.style = "display: none";
    }


    clickRight() {
        while (this.count <= 2) {
            this.hidePictures(this.activeSlide);
            this.count++;
            this.activeSlide = this.slides[this.count];
            this.showPictures(this.activeSlide);
            return this.count;
        }
        
    }
    clickLeft() {
        while (this.count > 0) {
            this.hidePictures(this.activeSlide);
            this.count--;
            this.activeSlide = this.slides[this.count];
            this.showPictures(this.activeSlide);
            return this.count;
        }
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map( carsl => new Carousel(carsl));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
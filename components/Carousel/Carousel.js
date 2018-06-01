class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.slides = carousel.getElementsByTagName('img');
        this.slides = Array.from(this.slides).map(slide => new Slide(slide));
        this.activeSlide = this.slides[0];
        this.init();
        this.left = carousel.querySelector('.left-button');
        this.left.addEventListener('click', () => this.leftButton());
        this.right = carousel.querySelector('.right-button');
        this.right.addEventListener('click', () => this.rightButton());

    }




    init() {
        this.activeSlide.displaySlide();
    }
    leftButton() {
        if (this.activeSlide === this.slides[0]) {
            this.activeSlide.hideSlide();
            // let last = this.slides[this.slides.length-1];
            this.activeSlide = this.slides[this.slides.length - 1];
            this.activeSlide.displaySlide();
        } else {
            this.activeSlide.hideSlide();
            let index = this.slides.indexOf(this.activeSlide); //?
            this.activeSlide = this.slides[index - 1];
            this.activeSlide.displaySlide();
        }
    }
    rightButton() {
        if (this.activeSlide === this.slides[this.slides.length - 1]) {
            this.activeSlide.hideSlide();
            // let last = this.slides[this.slides.length-1];
            this.activeSlide = this.slides[0];
            this.activeSlide.displaySlide();
        } else {
            this.activeSlide.hideSlide();
            let index = this.slides.indexOf(this.activeSlide); //?
            this.activeSlide = this.slides[index + 1];
            this.activeSlide.displaySlide();
        }

    }

}


class Slide {
    constructor(slide) {
        this.slide = slide;
    }

    displaySlide() {
        this.slide.style.display = 'block';
       
   
    }
    hideSlide() {
  
        this.slide.style.display = 'none';
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);


// // let carousel = $();

// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
//     2. Those buttons are gonna need some click handlers.
//     3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
//     4. Have fun!
// */
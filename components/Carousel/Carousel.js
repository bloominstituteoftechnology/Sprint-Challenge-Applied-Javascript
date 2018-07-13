class Carousel {
    constructor(element) {
    this.element = element;
    this.slides = this.element.querySelectorAll("img");
    this.slides = Array.from(this.slides);
    this.activeSlide = this.slides[0];
    console.log(this.activeSlide);
    this.buttonLeft = this.element.querySelector(".left-button");
    this.buttonLeft.addEventListener("click", )
    this.buttonRight = this.element.querySelector(".right-button");
    this.init();
    }

    init() {
        this.activeSlide.selectSlide();
    }

    updateActive(slideElement) {
        this.activeSlide = slideElement;
    }

    selectSlide() {
        this.activeSlide.style.display = null;
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

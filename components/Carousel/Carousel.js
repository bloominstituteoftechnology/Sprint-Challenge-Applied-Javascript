class Carousel {
    constructor(element) {
        this.element = element;
        this.slides = this.element.querySelectorAll(".carousel img");
        this.slides = Array.from(this.slides).map( slide => new Slides(slide, this));
        this.activeSlide = this.slides[0];
        this.init();
        this.leftArrow = this.element.querySelector(".left-button");
        this.rightArrow = this.element.querySelector(".right-button");
        this.leftArrow.addEventListener("click", () => {this.cycleLeft()});
        this.rightArrow.addEventListener("click", () => {this.cycleRight()});
    }

    init() {
        this.activeSlide.selectSlide();
    }

    updateActive (slideElement) {
        this.activeSlide.deselectSlide();
        this.activeSlide = slideElement;
    }

    getSlides(data) {
        return document.querySelectorAll(`.carousel img[data-slide="${data}"]`);
    }

    cycleLeft () {

    }

    cycleRight () {
        this.updateActive(this.activeSlide);
    }
}

class Slides {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
        this.slides = this.parent.getSlides(this.element.dataset.slide);
    }

    selectSlide () {
        this.parent.updateActive(this);
        this.element.classList.add("active-slide");
    }

    deselectSlide () {
        this.element.classList.remove("active-slide");
    }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
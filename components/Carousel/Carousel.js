class Carousels {
  constructor(element) {
    this.element = element;
    this.slides = this.element.querySelectorAll('.slides');
    console.log(this.slides);
    this.slides = Array.from(this.slides)
    this.activeSlide = this.slides[0];
    this.init();
    let leftButton = this.element.querySelector('.left-button');
    let rightButton = this.element.querySelector('.right-button');
  }

  init() {
    this.activeSlide.display = null;
  }

  updateActive(slideElement) {
    this.activeSlide.deselectSlide();
    this.activeSlide = slideElement;
  }

  getSlide(data) {
    return this.element.querySelector(`.slide[data-slide='${data}']`);
  }
}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousel).map(carousel => new Carousel(carousel));
console.log('anythig');

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

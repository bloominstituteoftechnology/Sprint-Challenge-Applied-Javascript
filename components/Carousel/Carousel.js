class Carousels {
  constructor(element) {
    this.element = element;
    this.slides = this.element.querySelectorAll('.slides');
    this.slides = Array.from(this.slides).map(slide => new Slides(slide, this));
    this.activeSlide = this.slides[2];
    this.init();
  }

  init() {
    this.activeSlide.selectSlide();
  }

  updateActive(slideElement) {
    this.activeSlide.deselectSlide();
    this.activeSlide = slideElement;
  }

  getSlide(data) {
    return this.element.querySelector(`.slide[data-slide='${data}']`);
  }
}

class Slides {
  constructor(element, parent) {
    this.element = element;
    this.parent = parent;
    this.slideItem = this.parent.getSlide(this.element.dataset.slide);
  }

  selectSlide() {
    this.element.style.display = 'block';
    console.log('wtf');
  }
}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousel).map(carousel => new Carousel(carousel))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

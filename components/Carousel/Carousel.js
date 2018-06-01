class Carousel {
  constructor(element) {
    this.element = element;
    this.leftButton = new CarouselButton(this.element.querySelector('.left-button'), 'left', this);
    this.rightButton = new CarouselButton(this.element.querySelector('.right-button'), 'right', this);
    this.slides = this.element.querySelectorAll('img');
    this.slides = Array.from(this.slides).map(slide => new CarouselSlide(slide));
    this.numSlides = this.slides.length;
    this.activeSlide = this.slides[this.slides.length - 1];
    this.init();
  }

  init() {
    this.advanceToSlide('right');
  }

  advanceToSlide(direction) {
    let index  = this.slides.indexOf(this.activeSlide);
    console.log(index);

    if (direction === 'left') {
      index--;
      if (index < 0) {
        index = this.numSlides - 1;
      }
    } else {
      index++;
      if (index === this.numSlides) {
        index = 0;
      }
    }

    this.activeSlide.hide();
    this.activeSlide = this.slides[index];
    this.activeSlide.show(direction);

    console.log('direction', direction);
  }
}

class CarouselButton {
  constructor(element, direction, parent) {
    this.element = element;
    this.direction = direction;
    this.parent = parent;

    this.element.addEventListener('click', this.onClick.bind(this));
  }

  onClick() {
    this.parent.advanceToSlide(this.direction);
    console.log('this.element clicked', this.element)
  }
}

class CarouselSlide {
  constructor(element) {
    this.element = element;
  }

  show(direction) {
    this.element.classList.add('is-showing');

    if (direction === 'left') {
      this.element.classList.remove('is-showing--right');
      this.element.classList.add('is-showing--left');
    } else {
      this.element.classList.remove('is-showing--left');
      this.element.classList.add('is-showing--right');
    }
    console.log('show', this);
  }

  hide() {
    this.element.classList.remove('is-showing');
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
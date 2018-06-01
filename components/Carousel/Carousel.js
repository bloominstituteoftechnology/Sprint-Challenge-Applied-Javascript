class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel img');
    this.slides = Array.from(this.slides);
    this.totalSlides = this.slides.length;
    this.count = 0;
    this.currentSlide = this.slides[this.count];
    this.right = document.querySelector('.right-button');
    this.right.addEventListener('click', this.moveRight.bind(this));
    this.left = document.querySelector('.left-button');
    this.left.addEventListener('click', this.moveLeft.bind(this));
    this.slides.forEach(element => this.hideImage(element));
    this.showImage(this.currentSlide);
  }
  showImage(element) {
    element.style = 'display: visible';
  }
  hideImage(element) {
    element.style = 'display: none';
  }
  moveRight() {
    this.hideImage(this.currentSlide);
    this.count++;
    if (this.count == this.totalSlides) {
      this.count = 0;
      this.currentSlide = this.slides[this.count];
    }
    this.currentSlide = this.slides[this.count];
    this.showImage(this.currentSlide);
  }
  moveLeft() {
    this.hideImage(this.currentSlide);
    this.count--;
    if (this.count == -1) {
      this.count = 3;
      this.currentSlide = this.slides[this.count];
    }
    this.currentSlide = this.slides[this.count];
    this.showImage(this.currentSlide);
  }
}

let carousel = new Carousel();
// doesn't seem to be necessary, but just in case
document.addEventListener('DOMContentLoaded', () => carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

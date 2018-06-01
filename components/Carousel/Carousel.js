class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel img');
    this.slides = Array.from(this.slides);
    this.totalSlides = this.slides.length;
    this.currentSlide = [this.slides[0], 0];
    this.right = document.querySelector('.right-button');
    this.right.addEventListener('click', this.moveRight.bind(this));
    this.left = document.querySelector('.left-button');
    this.left.addEventListener('click', this.moveLeft.bind(this));
    this.slides.forEach(element => this.hideImage(element));
    this.showImage(this.currentSlide[0]);
  }
  showImage(element) {
    element.style = 'display: visible';
  }
  hideImage(element) {
    element.style = 'display: none';
  }
  moveRight() {
    console.log('move right');
    this.slideNumber = this.currentSlide[1];
    if (this.slideNumber == this.totalSlides) {
      this.currentSlide = [this.slides[0], 0];
    }
    this.currentSlide = [
      this.currentSlide[this.slideNumber++],
      this.slideNumber++,
    ];
    this.showImage(this.currentSlide[0]);
  }
  moveLeft() {}
}

let carousel = new Carousel();
document.addEventListener('DOMContentLoaded', () => carousel);
// $(document).ready(() => carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

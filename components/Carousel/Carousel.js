class Carousel {
  constructor() {
    this.slides = document.querySelectorAll('.carousel img');
    this.slides = Array.from(this.slides);
    console.log(this.slides[0]);
    this.slides.forEach(element => this.showImage(element));
    // this.showImage(this.slides[0]);
  }
  showImage(element) {
    // Update the style of this.element to display = null
    element.style.display = 'show';
    console.log(element.style.display);
  }
  hideImage() {
    // Update the style of this.element to display = "none"
    element.style.display = 'none';
  }
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

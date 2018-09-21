class Carousel {
  constructor(carousel) {

  this.carousel = carousel;
  this.leftButton = this.carousel.querySelector('.left-button');
  this.rightButton = this.carousel.querySelector('.right-button');
  this.pictures = this.carousel.querySelectorAll('img');
  this.currentPicture = 3;
  this.leftButton.addEventListener('click', () => {
    this.pictures[this.currentPicture].style.display = 'inline';
});
  }

showPicture() {
  this.pictures[1].style.display.inline;
  // this.pictures[this.currentPicture].style.display.inline;
  

}

}
let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
// carousel = Array.from(carousel).map(item => new Carousel(carousel));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

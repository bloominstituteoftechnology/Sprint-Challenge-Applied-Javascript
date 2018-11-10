// let i = 0; // start point
// let images = [];
// let time = 3000

// // Image List
// images[0] = 

class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.lbtn = this.carousel.querySelector('.left-button');
    this.rbtn = this.carousel.querySelector('.right-button');
    this.img = this.carousel.querySelectorAll('img');
    this.currentIndex = 0;
    this.lbtn.addEventListener('click', () => {this.leftButton() })
    this.rbtn.addEventListener('click', () => {this.rightButton() })
  }

  leftButton() {

  }
  rightButton() {

  }

}

let carousel = document.querySelector('.carousel');
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
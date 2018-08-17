class Carousel {
  constructor(element) {
    this.element = element;
    this.photos = Array.from(element.querySelectorAll("img")).map( image => new Image(image)); //selecting image tags instead of a particular class or ID
  }


let carousel = document.querySelector();

    // If You've gotten this far, you're on your own! Although we will give you some hints:

    // 1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    this.imageDisplay = this.images[0]; //reference to the first index, not sure if this is what's meant
    this.buttonL = element.querySelector('.left-button');
    this.buttonR = element.querySelector('.right-button');

    // 2. You will need to grab a reference to all of the images

    // 3. Create a current index
    this.currentIndex = 0;

    // 4. Those buttons are gonna need some click handlers.
    this.buttonL.addEventListener('click', () => {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      } else {
        this.currentIndex = 3;
      }
      // needs more
    });

    this.buttonL.addEventListener('click', () => { //same event listener for the right button but with inverse functionality
      if (this.currentIndex === 3) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
      // needs more
    });

    // 5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    // 6. Have fun!

}

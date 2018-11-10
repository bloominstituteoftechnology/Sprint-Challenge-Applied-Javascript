class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.images = this.carouselElement.querySelectorAll('img');
    this.lButton = this.carouselElement.querySelector('.left-button');
    this.rButton = this.carouselElement.querySelector('.right-button');
    this.position = 0;

    this.images[0].style.display = 'block';

    // Allows top menu bar to display on top of carousel pics
    document.querySelector('.top-bar').style.zIndex = 2;

    this.lButton.addEventListener('click', this.previousImg.bind(this));
    this.rButton.addEventListener('click', this.nextImg.bind(this));

  }

  previousImg() {
    this.images.forEach(item => item.style.display = 'none');
    if (this.position === 0) this.position = this.images.length - 1;
    else this.position--;
    this.images[this.position].style.display = 'block';
  }

  nextImg() {
    this.images.forEach(item => item.style.display = 'none');
    if (this.position === this.images.length - 1) this.position = 0;
    else this.position++;
    this.images[this.position].style.display = 'block';
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

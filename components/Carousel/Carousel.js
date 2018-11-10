class Carousel {
  constructor(element) {
    this.element = element;
    this.images = Array.from(element.querySelectorAll('img'));
    this.leftBtn = this.element.querySelector('.left-button');
    this.rightBtn = this.element.querySelector('.right-button');
    this.index = 0;

    this.images[this.index].style.display = 'block';

    this.leftBtn.addEventListener('click', this.moveLeft.bind(this));
    this.rightBtn.addEventListener('click', this.moveRight.bind(this));
  }

  moveRight() {
    if(this.index === this.images.length-1) {
      this.images[this.index].style.display = 'none';
      this.index = 0;
      this.images[this.index].style.display = 'block';
    } else {
      this.images[this.index].style.display = 'none';
      this.index++
      this.images[this.index].style.display = 'block';
    }
  }

  moveLeft() {
    if(this.index === 0) {
      this.images[this.index].style.display = 'none';
      this.index = this.images.length-1;
      this.images[this.index].style.display = 'block';
    } else {
      this.images[this.index].style.display = 'none';
      this.index--
      this.images[this.index].style.display = 'block';
    }
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

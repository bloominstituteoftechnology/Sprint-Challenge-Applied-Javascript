class Carousel {
  constructor(element) {
    this.element = element;

    this.currentIndex = 0;

    this.leftBtn = document.querySelector('.left-button');
    console.log(this.leftBtn);
    this.rightBtn = document.querySelector('.right-button');

    this.images = this.element.querySelectorAll('img');
    this.images = Array.from(this.images);

    this.leftBtn.addEventListener('click', () => {
      this.moveLeft();
    });

    this.rightBtn.addEventListener('click', () => {
      this.moveRight();
    });

    this.showImg();
  }

  moveLeft() {
    // console.log('left button clicked');
    if (this.currentIndex !== 0) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.images.length - 1;
    }
    console.log(this.currentIndex);
    this.showImg('slideleft');
  }

  moveRight() {
    // console.log('right button clicked');
    if (this.currentIndex !== this.images.length - 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
    console.log(this.currentIndex);
    this.showImg('slideright');
  }

  showImg(animation) {
    // console.log('Inside showImg()');
    this.images.forEach(image => (image.style.display = 'none'));
    this.images[this.currentIndex].style.display = 'block';

    this.images.forEach(image => (image.style.animationName = null));
    this.images.forEach(image => (image.style.webkitAnimationName = null));
    this.images.forEach(image => (image.style.mozAnimationName = null));
    this.images.forEach(image => (image.style.oAnimationName = null));

    this.images[this.currentIndex].style.animationName = animation;
    this.images[this.currentIndex].style.webkitAnimationName = animation;
    this.images[this.currentIndex].style.mozAnimationName = animation;
    this.images[this.currentIndex].style.oAnimationName = animation;
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

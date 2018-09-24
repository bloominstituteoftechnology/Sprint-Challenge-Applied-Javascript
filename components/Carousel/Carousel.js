class Carousel {
  constructor(image) {
    this.carousel = document.querySelector('.carousel');
    this.images = document.querySelectorAll('.picture');
    this.image = image;
    this.left = document.querySelector('.left-button');
    this.right = document.querySelector('.right-button');
    this.total = this.images.length - 1;
    this.current = 0;
    this.left.addEventListener('click', () => this.prev());
    this.right.addEventListener('click', () => this.next());
  }

  prev() {
    (this.current === 0) ? this.current = this.total: this.current -= 1;
    let images = document.querySelectorAll('.picture');
    images.forEach(img => img.classList.add('hide'));
    this.image = images[this.current];
    this.image.classList.remove('hide');
  }
  next() {
    (this.current === this.total) ? this.current = 0: this.current += 1;
    let images = document.querySelectorAll('.picture');
    images.forEach(img => img.classList.add('hide'));
    this.image = images[this.current];
    this.image.classList.remove('hide');
  }
}

let images = document.querySelectorAll('.picture');
images = Array.from(images).map(image => new Carousel(image));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
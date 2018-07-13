class Carousel {
  constructor(container) {
    this.container = container;
    this.images = Array.from(this.container.querySelectorAll('img'));
    this.currentImage = 0;

    this.rightBtn = this.container.querySelector('.right-button');
    this.leftBtn = this.container.querySelector('.left-button');

    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);

    $(this.rightBtn).click(this.moveRight);
    $(this.leftBtn).click(this.moveLeft);

    this.displayActive();

    if (Number(this.container.dataset.timer) > 0) {
      this.autoTimer(Number(this.container.dataset.timer));
    }
  }

  autoTimer(duration) {
    setInterval(this.moveRight, duration);
  }

  displayActive() {
    this.images[this.currentImage].classList.add('active');
  }

  moveRight() {
    const previous =
      this.currentImage - 1 < 0
        ? this.images.length - 1
        : this.currentImage - 1;
    const previousSlide = this.images[previous];
    const currentSlide = this.images[this.currentImage];
    previousSlide.classList.add('prev');
    currentSlide.classList.add('right');
    setTimeout(() => previousSlide.classList.add('right'), 0);

    setTimeout(() => {
      currentSlide.classList.remove('right', 'active');
      previousSlide.classList.remove('right', 'prev');
      previousSlide.classList.add('active');
    }, 300);

    this.currentImage = previous;
  }

  moveLeft() {
    const next = (this.currentImage + 1) % this.images.length;
    const nextSlide = this.images[next];
    const currentSlide = this.images[this.currentImage];
    nextSlide.classList.add('next');
    currentSlide.classList.add('left');
    setTimeout(() => nextSlide.classList.add('left'), 0);

    setTimeout(() => {
      currentSlide.classList.remove('left', 'active');
      nextSlide.classList.remove('left', 'next');
      nextSlide.classList.add('active');
    }, 275);

    this.currentImage = next;
  }
}

let carousel = $('.carousel');

carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
2. Those buttons are gonna need some click handlers.
3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
4. Have fun!
*/

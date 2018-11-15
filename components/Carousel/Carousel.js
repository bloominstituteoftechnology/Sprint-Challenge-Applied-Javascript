class Carousel {
  constructor(container) {
    this.container = container;
    console.log(this.container);
    this.images = Array.from(this.container.querySelectorAll('img'));
    this.currentImage = 0;

    this.rightBtn = this.container.querySelector('.right-button');
    this.leftBtn = this.container.querySelector('.left-button');

    this.moveRight = this.moveRight.bind(this);
    this.moveLeft = this.moveLeft.bind(this);

    $(this.rightBtn).click(this.moveRight);
    $(this.leftBtn).click(this.moveLeft);

    this.displayActive();

    this.autoTimer(4000);
  }

  // autoTimer(duration) {
  // 	setInterval(this.moveRight, duration);
  // }

  displayActive() {
    $(this.images[this.currentImage]).css({
      display: 'block'
    });
  }

  moveRight() {
    const previous =
      this.currentImage - 1 < 0
        ? this.images.length - 1
        : this.currentImage - 1;
    const previousSlide = this.images[previous];
    const currentSlide = this.images[this.currentImage];
    previousSlide.style.display = 'block';
    previousSlide.style.position = 'absolute';
    previousSlide.style.transform = 'translateX(-100%)';
    currentSlide.style.transform = 'translateX(100%)';
    setTimeout(() => (previousSlide.style.transform = 'translateX(0)'), 0);

    setTimeout(() => {
      currentSlide.style.display = 'none';
      previousSlide.style.position = 'relative';
    }, 275);

    this.currentImage = previous;
  }

  moveLeft() {
    const next = (this.currentImage + 1) % this.images.length;
    const nextSlide = this.images[next];
    const currentSlide = this.images[this.currentImage];
    nextSlide.style.display = 'block';
    nextSlide.style.position = 'absolute';
    nextSlide.style.transform = 'translateX(100%)';
    currentSlide.style.transform = 'translateX(-100%)';
    setTimeout(() => (nextSlide.style.transform = 'translateX(0)'), 0);

    setTimeout(() => {
      currentSlide.style.display = 'none';
      nextSlide.style.position = 'relative';
    }, 275);

    this.currentImage = next;
  }
}

let carousel = $('.carousel');

carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

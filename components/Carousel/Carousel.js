class CarouselImage {
  constructor(element, position) {
    this.element = $(element);
    this.position = position;
  }
  showImage(direction) {
    this.element.show('slide', { direction: direction });
  }
  hideImage(direction) {
    this.element.hide('slide', { direction: direction });
  }
}

class CarouselLink {
  constructor(element, parent) {
    this.element = $(element);
    this.parent = parent;
    this.direction = this.getLinkDirection();
    this.element.click(() => this.getNewPosition());
  }
  getLinkDirection() {
    return this.element.hasClass('left-button') ? 'dsc' : 'asc';
  }
  getNewPosition() {
    this.direction === 'dsc'
      ? this.decrementPosition()
      : this.incrementPosition();
  }
  incrementPosition() {
    let currentPosition = this.parent.getPosition(),
      lastPosition = this.parent.images.length - 1;

    if (currentPosition === lastPosition) {
      this.parent.updateActiveImage(0, 'right');
    } else {
      currentPosition++;
      this.parent.updateActiveImage(currentPosition, 'right');
    }
  }
  decrementPosition() {
    let currentPosition = this.parent.getPosition(),
      lastPosition = this.parent.images.length - 1;

    if (currentPosition === 0) {
      this.parent.updateActiveImage(lastPosition, 'left');
    } else {
      currentPosition--;
      this.parent.updateActiveImage(currentPosition, 'left');
    }
  }
}

class Carousel {
  constructor(element) {
    this.element = $(element);
    this.leftBtn = new CarouselLink($('.left-button'), this);
    this.RightBtn = new CarouselLink($('.right-button'), this);
    this.images = this.element.find('img');
    this.images = this.images.map(
      (index, image) => new CarouselImage(image, index)
    );
    this.activeImage = this.images[0];
    this.init();
  }
  init() {
    this.activeImage.element.show();
  }
  getPosition() {
    return this.activeImage.position;
  }
  updateActiveImage(position, direction) {
    this.activeImage.hideImage(direction === 'left' ? 'left' : 'right');
    this.activeImage = this.images[position];
    this.activeImage.showImage(direction === 'left' ? 'right' : 'left');
  }
}

let carousel = $('.carousel');
carousel = new Carousel(carousel);
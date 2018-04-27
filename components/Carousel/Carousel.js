class CarouselImage {
  constructor(element){
    this.element = $(element);
  }
  showImage(){
    this.element.show();
  }
  hideImage(){
    this.element.hide();
  }
}

class CarouselLink {
  constructor(element, parent){
    this.element = $(element);
    this.parent = parent;
    this.direction = this.getLinkDirection();
    this.element.click(() => this.getNewPosition());
  }
  getLinkDirection(){
    return this.element.hasClass('left-button') ? 'dsc' : 'asc';
  }
  getNewPosition(){
    (this.direction === 'dsc') ? this.decrementPosition() : this.incrementPosition();
  }
  incrementPosition(){
    let currentPosition = this.parent.getPosition(),
        lastPosition = this.parent.carouselLength - 1;

    if(currentPosition === lastPosition){
      this.parent.updateActiveImage(0);
    } else {
      currentPosition++;
      this.parent.updateActiveImage(currentPosition);
    }
  }
  decrementPosition(){
    let currentPosition = this.parent.getPosition(),
        lastPosition = this.parent.carouselLength - 1;

    if(currentPosition === 0){
      this.parent.updateActiveImage(lastPosition);
    } else {
      currentPosition--;
      this.parent.updateActiveImage(currentPosition);
    }
  }
}

class Carousel {
  constructor(element){
    this.element = $(element);

    this.leftBtn = this.element.find('.left-button');
    this.leftBtn = new CarouselLink(this.leftBtn, this);
    this.RightBtn = this.element.find('.right-button');
    this.RightBtn = new CarouselLink(this.RightBtn, this);

    this.images = this.element.find('img');
    this.images = this.images.map((index, image) => new CarouselImage(image));
    this.carouselLength = this.images.length;

    this.activePosition = 0;
    this.activeImage = this.images[this.activePosition];

    this.init();
  }
  init(){
    this.activeImage.showImage();
  }
  getPosition(){
    return this.activePosition;
  }
  updateActiveImage(position){
    this.activeImage.hideImage();
    this.activePosition = position;
    this.activeImage = this.images[this.activePosition];
    this.activeImage.showImage();
  }
}

// Grab a reference to the carousel and use it to initlaize a new Carousel component
let carousel = $('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
2. Those buttons are gonna need some click handlers.
3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
4. Have fun!
*/
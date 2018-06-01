class CarouselImage {
    constructor(element, position){
      this.element = $(element);
      this.position = position;
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
          lastPosition = this.parent.images.length - 1;
  
      if(currentPosition === lastPosition){
        this.parent.updateActiveImage(0);
      } else {
        currentPosition++;
        this.parent.updateActiveImage(currentPosition);
      }
    }
    decrementPosition(){
      let currentPosition = this.parent.getPosition(),
          lastPosition = this.parent.images.length - 1;
  
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
      this.leftBtn = new CarouselLink($('.left-button'), this);
      this.RightBtn = new CarouselLink($('.right-button'), this);
      this.images = this.element.find('img');
      this.images = this.images.map((index, image) => new CarouselImage(image, index));
      this.activeImage = this.images[0];
      this.init();
    }
    init(){
      this.activeImage.showImage();
    }
    getPosition(){
      return this.activeImage.position;
    }
    updateActiveImage(position){
      this.activeImage.hideImage();
      this.activeImage = this.images[position];
      this.activeImage.showImage();
    }
  }
  
  let carousel = $('.carousel');
  carousel = new Carousel(carousel);
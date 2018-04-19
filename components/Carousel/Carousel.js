class Carousel {
  constructor(element){
    this.element = $(element);
    this.leftButton = this.element.find('.left-button');
    this.rightButton = this.element.find('.right-button');
    this.images = this.element.find('img');
    this.activeImage = $(this.images[0]);
    this.place = 0;
    this.rightButton.click(() => { this.clickRight() })
    this.leftButton.click(() => { this.clickLeft() });
    this.intit();
  }
  intit(){
    this.activeImage.show();
  }

  clickRight(){
    if(this.place + 1 === this.images.length){
      return;
    }
    this.place = this.place + 1;
    this.activeImage.hide();
    this.activeImage = $(this.images[this.place]);
    this.activeImage.show();
  }

  clickLeft(){
    if (this.place === 0) {
      return;
    }
    this.place = this.place - 1;
    this.activeImage.hide();
    this.activeImage = $(this.images[this.place]);
    this.activeImage.show();
  }
}

let carousel = $('.carousel');

carousel = new Carousel(carousel);
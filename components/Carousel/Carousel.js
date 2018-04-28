class Carousel {
  constructor(element){
    this.element = $(element);
    this.leftButton = this.element.find('.left-button');
    this.rightButton = this.element.find('.right-button');
    this.pics = this.element.find("img");
    this.activePic = $(this.pics[0]);
    this.place = 0;
    this.rightButton.click( () => { this.clickRight() });
    this.leftButton.click( () => { this.clickLeft() });
    this.init();

  }

  init(){
    this.activePic.show();
  }

  clickRight(){
    if(this.place + 1 === this.pics.length){
      this.place = -1;
    }
    this.place = this.place + 1;
    this.activePic.hide();
    this.activePic = $(this.pics[this.place])
    this.activePic.fadeIn();
    // TweenMax.from(this.activePic, 1, {x:800})
    console.log('click')
  }

  clickLeft(){
    if (this.place === 0) {
      this.place = this.pics.length;
    }
    this.place = this.place - 1;
    this.activePic.hide();
    this.activePic = $(this.pics[this.place])
    this.activePic.fadeIn();
    // for some reason this is hidding the left arrow after one image scrolls
    // TweenMax.from(this.activePic, 1, {x:800})
  }

}

let carousel = $(".carousel");
carousel = new Carousel(carousel)
// console.log(carousel)
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
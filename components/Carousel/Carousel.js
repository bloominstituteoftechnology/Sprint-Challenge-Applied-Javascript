class Carousel {
  constructor(car){
    this.car = car;
    //create an array of selected images by selecting the img tag, combines steps from tabs
    this.img = Array.from(this.img)this.car.querySelectorAll('.img')
    //must initialize the images
    this.current = 0
    // select buttons for CAROUSEL
    this.rightBtn = document.querySelector('.right-button')
    this.leftBtn = document.querySelector('left-button')
    //Must define actions to later move right and left even handlers
    $(this.rightBtn).click(this.moveRight);
    $(this.leftBtn).click(this.moveLeft);
    //keep account of what's acitive in the carousel
  }
  init(){
    this.image[this.currentImage].syle.display
  }
}
//display active method adds the active class


  moveRight() {

  }

  moveLeft() {

  }
}

let carousel = $('.carousel');

carousel = new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

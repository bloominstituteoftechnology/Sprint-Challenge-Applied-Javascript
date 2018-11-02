class Carousel {
  constructor(img){
    this.img = img;
    this.imgs = this.img.querySelectorAll('.carousel > img');
    this.rButton = this.img.querySelector('.right-button');
    this.lButton = this.img.querySelector('.left-button');
    this.index =
    this.rButton.addEventListener('click', () => {
      this.rightButton();
    });
    this.lButton.addEventListener('click', () => {
      this.leftButton();
    });
  }
  leftButton(){
    const lB = document.querySelector
  }
  rightButton(){
    const rB =
  }
}

let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

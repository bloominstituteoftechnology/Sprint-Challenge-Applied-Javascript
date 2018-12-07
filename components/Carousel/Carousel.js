class Carousel {
  constructor (carouselElement) {
    // assign this.carousel to DOM element
    this.carousel = carouselElement;
    // assign left and right buttons by class selector
    this.ltButton = this.carousel.querySelector(".left-button");
    this.rtButton = this.carousel.querySelector(".right-button");
    // console.log(this.ltButton);
    // set current index
    this.currIndex = 0;
    // create array of CarouselImage objects from each img type within carousel
    this.images = Array.from(this.carousel.querySelectorAll("img"))
      .map(img => new CarouselImage(img));
    // display first image
    console.log(this.images);
    this.images[this.currIndex].img.style.display = "block";
    // add event listeners to buttons:
    this.ltButton.addEventListener('click', () => this.btnClick("left"));
    this.rtButton.addEventListener('click', () => this.btnClick("right"));
  }
  
  btnClick(btn) {
    let prevIndex = this.currIndex;
    // check which button, update index accordingly:
    if (btn === "left"){
      // update this.currIndex to move one left or to end if at beginning
      if (this.currIndex === 0) {
        this.currIndex = this.images.length - 1;
      } else {
        this.currIndex --;
      }
    } else {
      // update this.currIndex to move one right or back to beginning if at end
      if (this.currIndex === this.images.length - 1) {
        this.currIndex = 0;
      } else {
        this.currIndex ++;
      }
    }
    // hide current image
    // this.images[prevIndex].img.style.removeProperty('display');
    $(this.images[prevIndex].img).toggle('slide');
    // display next image
    // this.images[this.currIndex].img.style.display = "block";
    $(this.images[this.currIndex].img).toggle('slide');
    
    // console.log(this.currIndex);
  } // btnClick
}

class CarouselImage {
  constructor (imgElement) {
    this.img = imgElement;
    this.index = this.img.dataset.index;
  }
}

let carousel = new Carousel(document.querySelector(".carousel"));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
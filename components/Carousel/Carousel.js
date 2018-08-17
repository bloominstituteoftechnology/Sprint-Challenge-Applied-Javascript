class Carousel {
    constructor(element) {
        this.element = element;
        
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');

        this.carouselImgs = document.querySelectorAll('.carousel-img');
        this.carouselImgs = Array.from(carouselImgs).map(carouselImg => new Img(carouselImg));

        
    } 

}

class Img {
    constructor(element){
      // Assign this.element to the passed in element.
      this.element = element;
    }
    selectImg(){
      // Update the style of this.element to display = null
      this.element
    }
  
  }

let carousel = document.querySelector('.carousel');
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
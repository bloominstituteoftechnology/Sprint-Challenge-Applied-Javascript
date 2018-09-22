class Carousel {
  constructor(element) {
    this.element = element;
    this.images = this.element.getElementsByTagName('img');

    // convert this.images into a real array
    this.images = Array.from(this.images);

    this.currentIndex = 0;
    this.images[this.currentIndex].style.display = 'block';

    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');
    this.leftButton.addEventListener('click', (event => {
      this.leftSelected(event);
    }));
    this.rightButton.addEventListener('click', (event => {
      this.rightSelected(event);
    }));
  }


  leftSelected() {
    // set display on all images to null
    this.images.map(image => image.style.display = 'none');

    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.images.length - 1;
    }
    console.log(this.currentIndex)
    //set current image to display
    this.images[this.currentIndex].style.display = 'block';
  }

  rightSelected() {
    // set display on all images to null
    this.images.map(image => image.style.display = 'none');

    this.currentIndex += 1;
    if (this.currentIndex > this.images.length - 1) {
      this.currentIndex = 0;
    }

    //set current image to display
    this.images[this.currentIndex].style.display = 'block';
  }


}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

// this works for automated slideshow, but I think it should be included in the component
window.setInterval(function () {
    carousels[0].rightSelected(null);
  },
  3000);




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
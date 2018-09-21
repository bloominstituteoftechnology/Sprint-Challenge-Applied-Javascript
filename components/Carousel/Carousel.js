class Carousel {
  constructor(element) {
    this.element = element;
    this.images = this.element.querySelectorAll('img');
    this.currentImage = 0;
    this.showImage(this.images[this.currentImage]);
    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');
    this.leftButton.addEventListener('click', event => this.prevImage(event));
    this.rightButton.addEventListener('click', event => this.nextImage(event));
  }

  nextImage(event) {
    const len = this.images.length;
    this.currentImage++;
    console.log(this.currentImage);
    this.currentImage = this.currentImage % len;
    this.showImage(this.images[this.currentImage]);
  }

  prevImage(event) {
    const len = this.images.length;
    this.currentImage--;
    console.log(this.currentImage);
    this.currentImage = Math.abs(this.currentImage % len);
    console.log(this.currentImage);
    this.showImage(this.images[this.currentImage]);
  }

  //   showImage(image) {
  //       this.currentImage = image;
  //       if (event.currentTarget === this.leftButton) {
  //           this.currentImage--;
  //       }
  //       else {
  //           this.currentImage++;
  //       }
  //       this.currentImage = this.currentImage % len;
  //       this.currentImage.style.display = 'block';
  //   }
  showImage(image) {
    this.images.forEach(img => (img.style.display = 'none'));
    image.style.display = 'block';
  }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
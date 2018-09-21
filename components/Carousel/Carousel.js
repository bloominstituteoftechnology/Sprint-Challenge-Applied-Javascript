const q = (selector) => {
  let elements = document.querySelectorAll(selector);
  if (elements.length == 1) {
    return elements[0];
  } else {
     return elements;
   }
}

class Carousel {
  constructor(element) {
    this.element = element;

    this.images = Array.from(this.element.querySelectorAll('img'));
    this.currentImgPos = 0;

    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');

    this.leftButton.addEventListener('click', () => this.left());
    this.rightButton.addEventListener('click', () => this.right());

    this.onlyDisplay(this.images[this.currentImgPos]);
  }
  left() {
    this.currentImgPos--;
    if (this.currentImgPos <= 0) {
      this.currentImgPos = this.images.length-1;
    }
    this.onlyDisplay(this.images[this.currentImgPos]);
  }
  right() {
    this.currentImgPos++;
    if (this.currentImgPos >= this.images.length) {
      this.currentImgPos = 0
    }
    this.onlyDisplay(this.images[this.currentImgPos]);
  }
  onlyDisplay(thisOne) {
    this.images.forEach( tag => tag.style.display = 'none' );
    thisOne.style.display = 'flex';
  }
}

// class CircularList {
//   constructor(array) {
//     if (typeof array !== 'array') return 'err';
//     this.list = array;
//     this.currentImgPos = 0;
//   }
//   next() {
//     if (this.currentImgPos >= this.list.length) {
//       this.currentImgPos = 0
//     } else {
//       this.currentImgPos++;
//     }
//     return this.list[this.currentImgPos];
//   }
//   prev() {
//     if (this.currentImgPos <= 0) {
//       this.currentImgPos = this.list.length
//     } else {
//       this.currentImgPos--;
//     }
//     return this.list[this.currentImgPos];
//   }
//   access() {
//     return this.list[this.currentImgPos];
//   }
// }



let carousel = new Carousel(document.querySelector('.carousel'));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
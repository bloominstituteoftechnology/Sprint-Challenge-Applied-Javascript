


class CircularList {
  constructor(array) {
    // if (typeof array !== 'array') return 'err';
    this.list = array;
    this.length = this.list.length;
    this.currentImgPos = 0;
    Object.assign(this, array)
  }
  next() {
    if (++this.currentImgPos >= this.length) {
      this.currentImgPos = 0
    }
    return this.getCurrent();
  }
  getNext() {
    return (this.currentImgPos + 1) >= this.length ? this.list[0] : this.list[this.currentImgPos+1]; 
  }
  prev() {
    if (--this.currentImgPos < 0) {
      this.currentImgPos = this.length-1
    }
    return this.getCurrent();
  }
  getPrev() {
    return (this.currentImgPos - 1) < 0 ? this.list[this.length-1] : this.list[this.currentImgPos-1];
  }
  getCurrent() {
    return this.list[this.currentImgPos];
  }
}


class Carousel {
  constructor(element) {
    this.element = element;

    this.circle = new CircularList(Array.from(this.element.querySelectorAll('img')));

    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');

    this.leftButton.addEventListener('click', () => this.left());
    this.rightButton.addEventListener('click', () => this.right());

    this.onlyDisplay(this.circle.getCurrent());
  }
  left() {
    this.onlyDisplay(this.circle.prev());
  }
  right() {
    this.onlyDisplay(this.circle.next());
  }
  onlyDisplay(thisOne) {
    for (let i = 0; i < this.circle.length; i++) 
      this.circle[i].style.display = 'none';
    // }
    // this.circle.list.forEach( tag => tag.style.display = 'none' );
    thisOne.style.display = 'flex';
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
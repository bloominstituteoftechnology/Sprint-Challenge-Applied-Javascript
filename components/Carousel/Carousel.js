class Carousel {
  constructor(element){
    this.element = element;

    // create a reference to left & right button classes
    this.left = element.querySelector('.left-button');
    this.right = element.querySelector('.right-button');

    // create a reference to all img
    this.images = this.element.querySelectorAll('img');

    // define defaults for carousel
    this.current = 0;
    this.currentIndex = this.images[this.current];
    this.currentIndex.style = 'display: block';

    // add event listeners for left & right button
    this.left.addEventListener( 'click', () => this.goLeft() );
    this.right.addEventListener( 'click', () => this.goRight() );
  }



  goLeft() {
    this.currentIndex.style = 'display: none';

    if(this.current === 0) {this.current = this.images.length - 1}
    else {this.current = this.current - 1}

   this.showDatImage();
  }

  goRight(){
    this.currentIndex.style = 'display: none';

    if(this.current === this.images.length - 1) {this.current = 0}
    else {this.current = this.current += 1}

    this.showDatImage();
  }

  showDatImage() {
    this.currentIndex = this.images[this.current];
    this.currentIndex.style = 'display: block';
  }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
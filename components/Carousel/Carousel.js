class Carousel {
  constructor(element) {
      this.element = element;
      this.images  = this.element.querySelectorAll('img');
      this.left    = this.element.querySelector('.left-button');
      this.right   = this.element.querySelector('.right-button');
      this.index   = 0;
      
      this.left.addEventListener('click', () => this.previousPage());
      this.right.addEventListener('click', () => this.nextPage());
  }

  previousPage() {
    this.images[this.index].classList.remove('box-left'); 
    this.images[this.index].classList.remove('box-right'); 
    if(this.index === 0) this.index = this.images.length-1;
    else this.index --;
    this.images[this.index].classList.add('box-right');
  }
 
  nextPage() {
    this.images[this.index].classList.remove('box-left'); 
    this.images[this.index].classList.remove('box-right'); 
    if(this.index === this.images.length-1) this.index = 0;
    else this.index ++;
    this.images[this.index].classList.add('box-left');
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
class Carousel {
  constructor(element) {
    this.element = element;
    this.images = Array.from(element.querySelectorAll('img'));
    this.leftBtn = this.element.querySelector('.left-button');
    this.rightBtn = this.element.querySelector('.right-button');
    this.index = 0;

    this.images[this.index].style.display = 'block';

    //Left button features(single click for previous, double click for back slide show)
    this.leftBtn.addEventListener('click', this.moveLeft.bind(this));

    //Right button features(single click for next, double click for forward slide show)
    this.rightBtn.addEventListener('click', this.moveRight.bind(this));
    this.rightBtn.addEventListener('dblclick', this.autoSlide.bind(this));

    window.addEventListener('load', this.autoSlide.bind(this))
  }

  moveRight() {
    if(this.index === this.images.length-1) {
      //Hide current image
      TweenMax.fromTo(this.images[this.index], 2, {css: {opacity: 1}}, {css:{ opacity: 0.2}})
      this.images[this.index].style.display = 'none';

      //Moves to first Image
      this.index = 0;
      this.images[this.index].style.display = 'block';
      TweenMax.fromTo(this.images[this.index], 1.5, {css: {opacity: 0.2}}, {css:{ opacity: 1}})

    } else {
      //Hide current image
      TweenMax.fromTo(this.images[this.index], 2, {css: {opacity: 1}}, {css:{ opacity: 0.2}})
      this.images[this.index].style.display = 'none';

      //Move to next Image
      this.index++;

      //Show current image
      this.images[this.index].style.display = 'block';
      TweenMax.fromTo(this.images[this.index], 1.5, {css: {opacity: 0.2}}, {css:{ opacity: 1}})
    }
  }

  moveLeft() {
    if(this.index === 0) {
      //Hide current image
      TweenMax.fromTo(this.images[this.index], 2, {css: {opacity: 1}}, {css:{ opacity: 0.2}})
      this.images[this.index].style.display = 'none';

      //Moves to last Image
      this.index = this.images.length-1;

      //Show new image
      this.images[this.index].style.display = 'block';
      TweenMax.fromTo(this.images[this.index], 2, {css: {opacity: 0.2}}, {css:{ opacity: 1}})

    } else {
      //Hide current image
      TweenMax.fromTo(this.images[this.index], 2, {css: {opacity: 1}}, {css:{ opacity: 0.2}})
      this.images[this.index].style.display = 'none';

      //Move to previous images
      this.index--;

      //Show current image
      this.images[this.index].style.display = 'block';
      TweenMax.fromTo(this.images[this.index], 2, {css: {opacity: 0.2}}, {css:{ opacity: 1}})
    }
  }

  autoSlide() {
    const slides = this.images;
    let go = true;
    let count = 0;

    //Move slide right every 1.5s
    let int = setInterval(this.moveRight.bind(this), 3000);

    //End Loop with key board
    window.addEventListener("keyup", function(event) {
        clearInterval(int);
    });
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

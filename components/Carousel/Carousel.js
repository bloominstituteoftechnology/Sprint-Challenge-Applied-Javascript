class Carousel {
  constructor(element){
    //carousel element
    this.element = element;
    //prev-next buttons
    this.prev = element.querySelector('.left-button');
    this.nex = element.querySelector('.right-button');

    //set up the slides
    this.slides = element.querySelectorAll('.slide-item');
    this.slides = Array.from(this.slides).map( slide => new Slide(slide, this));

    //setup first activeSlide and select it
    this.activeSlide = 0;
    this.init();

    //playing with continous
    this.autoSlide;

    //event listeners
    // this.prev.addEventListener('click', this.previous.bind(this));
    // this.nex.addEventListener('click', this.next.bind(this)); //no longer need click with current autoSlider
    this.prev.addEventListener('mousedown', ()=> this.startAuto('prev'));
    this.nex.addEventListener('mousedown', ()=> this.startAuto('next'));
    this.prev.addEventListener('mouseup', ()=>clearInterval(this.autoSlide));
    this.nex.addEventListener('mouseup', ()=>clearInterval(this.autoSlide));
  }

  init(){
    this.slides[this.activeSlide].select();
  }

  updateActive(newPos) {
    this.slides[this.activeSlide].deselect();
    this.activeSlide = newPos;
  }

  previous(){
      let newPos = (this.activeSlide - 1) == -1 ? this.slides.length - 1 : this.activeSlide - 1;
      this.updateActive(newPos);
      this.slides[newPos].select();
  }

  next(){
      let newPos = (this.activeSlide + 1) == this.slides.length ? 0 : this.activeSlide + 1;
      this.updateActive(newPos);
      this.slides[newPos].select();
  }

  startAuto(direction){
    if(direction == 'next'){
      this.next();
      this.autoSlide = setInterval(this.next.bind(this), 750);
    }else{
      this.previous();
      this.autoSlide = setInterval(this.previous.bind(this), 750);
    }
  }
}

class Slide {
  constructor(slide, parent) {
    this.slide = slide;
    this.carousel = parent;
  }

  select() {
    this.slide.classList.add('slide-active');
  }

  deselect() {
    this.slide.classList.remove('slide-active')
  }
}

let carousels = document.querySelectorAll('.carousel');

carousels = Array.from(carousels).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

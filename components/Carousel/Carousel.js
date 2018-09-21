class Carousel {
    constructor(element){
      this.element = element;
      this.leftArrow = document.querySelector('.left-button');
      this.rightArrow = document.querySelector('.right-button');
      this.data = this.element.dataset.pict;
      this.dataItem = document.querySelector(`.picture[data-pict='${this.data}']`);
  
      this.leftArrow.addEventListener('click', () => this.goBack())
      this.rightArrow.addEventListener('click', () => this.goForward())
  
    }
    goBack() {
      this.dataItem.classList.toggle('hide');
      if (this.data - 1 === 0) {
        this.lastPicData = 4 
      }
      else {
        this.lastPicData = this.data - 1
      }
      this.lastPic = document.querySelector( `.picture[data-pict= '${this.lastPicData}']`)
      this.lastPic.classList.toggle('hide')
    }

    goForward() {
      this.element.classList.toggle('hide');
      if (Number(this.data) + 1 === 5){
        this.nextPicData = 1;
      }
      else{
        this.nextPicData = Number(this.data) + 1;
      }

      this.nextPic = document.querySelector(`.picture[data-pict= '${this.nextPicData}']`);
      this.nextPic.classList.toggle('hide');
    }
  }
  
  let images = document.querySelectorAll('.picture')
  
  images = Array.from(images).map( image => new Carousel(image) );


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
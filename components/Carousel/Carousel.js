

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

let carousel = document.querySelector('.carousel');


class Carousel {
  constructor(props){
    this.props = props;
    this.leftBtn = this.props.querySelector('.left-button');
    this.rightBtn = this.props.querySelector('.right-button');
    this.imgs = this.props.querySelectorAll('img');

   /* MEANT FOR USE WITH IMG COMPONENT; NOT NEEDED.
    this.imgs = Array.from(this.imgs).map( item => new CarouselImage(item)); */
    
    this.currentPlace = 0;
    this.imgs[this.currentPlace].style = "display: initial";
    /* MEANT FOR USE WITH IMG COMPONENT; NOT NEEDED. 
    this.imgs[this.currentPlace].showImg() */


    this.leftBtn.addEventListener('click', () => {
        if(this.currentPlace === 0){
            this.imgs[this.currentPlace].style = "display: none";
            this.currentPlace = this.imgs.length-1;
            this.imgs[this.currentPlace].style = "display: initial";
          }
          else{
            this.imgs[this.currentPlace].style = "display: none";
              this.currentPlace -= 1;
              this.imgs[this.currentPlace].style = "display: initial";
          }
    });

    this.rightBtn.addEventListener('click', () => {
        if(this.currentPlace === this.imgs.length-1) {
            this.imgs[this.currentPlace].style = "display: none";
            this.currentPlace = 0;
            this.imgs[this.currentPlace].style = "display: initial";
          }
          else {
            this.imgs[this.currentPlace].style = "display: none";
            this.currentPlace += 1;
            this.imgs[this.currentPlace].style = "display: initial";

          }
    });

  }

  /* PREFERRED TO WRITE FUNCTION DIRECTLY INTO EVENT LISTENER; WILL CHANGE IF TIME PERMITS 
  rotateLeft(){
     if(this.currentPlace !== 0){
        this.imgs[this.currentPlace].hideImg();
        this.currentPlace -= 1;
      }
  }

  rotateRight(){
    if(this.currentPlace <= this.imgs.length) {
      this.imgs[this.currentPlace].hideImg();
      this.currentPlace += 1;
    }
  } */
}



//ENDED UP NOT USING

/* class CarouselImage {
  constructor(image){
    this.image = image;
    this.order = this.image.dataset.order;
    this.image.style = "display: none";
    }

  showImg(){
    this.image.style = "display: initial";
   
  }
  hideImg(){
    this.image.style = "display: none";
  }
} */

carousel = new Carousel(carousel);

console.log(carousel.imgs); 
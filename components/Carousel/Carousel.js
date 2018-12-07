class Carousel {
  constructor(carousel){
    this.carousel = carousel;
    console.log(this.carousel);
    this.images = this.carousel.querySelectorAll('img');
    this.index = 0;
    this.current = new CarouselImage(this.images);
    this.leftButton = this.carousel.querySelector('.left-button');
    this.rightButton = this.carousel.querySelector('.right-button');
    this.leftButton.addEventListener('click', (e) => this.displayImage(e));
    this.rightButton.addEventListener('click', (e) => this.displayImage(e));
  }
  displayImage(e){
    if(e.target.className=='right-button'){
      if(this.index<this.images.length-1){
        this.index +=1;
      }
      else{
        this.index = 0;

      }
    }
    if(e.target.className=='left-button'){
      if(this.index>0){
        this.index -=1;
      }
      else{
        this.index = this.images.length-1;
      }
    }
    this.current.displayNewImage(this.index);


  }
}

class CarouselImage{
  constructor(images){
    this.images = images;
    this.images[0].style.display = "block";


  }
  displayNewImage(index){
    Array.from(this.images).forEach(image => image.style.display = "none");
    this.images[index].style.display = "block";
  }
}

let carousel = document.querySelector('.carousel');
let carouselObject = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

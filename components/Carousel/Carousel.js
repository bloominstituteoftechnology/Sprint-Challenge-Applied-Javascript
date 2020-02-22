/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

class Carousel {
  constructor(element) {
      
      this.element = element;
      let leftbutton = document.querySelector('.left-button');
      this.leftbutton = leftbutton;
      let rightbutton = document.querySelector('.right-button');
      this.rightbutton = rightbutton;
      let carouselimages = document.querySelectorAll('.carousel img');
      this.carouselimages = carouselimages;
      let index = 0;
      this.index = index;
      this.leftbutton.addEventListener('click', (event) => {
          
          this.CarouselClickLeft(event);
      });
      this.rightbutton.addEventListener('click', (event) => {
          
          this.CarouselClickRight(event);
      });
  }
  CarouselClickLeft(event) {
      if (this.index > 0) {
          this.carouselimages[this.index].style.display = 'none';
          this.index = this.index - 1;
          this.carouselimages[this.index].style.display = 'flex';
      }
      else {
          this.carouselimages[this.index].style.display = 'flex';
      }

  }
  CarouselClickRight(event) {
      if (this.index < 3) {
          this.carouselimages[this.index].style.display = 'none';
          this.index = this.index + 1;
          this.carouselimages[this.index].style.display = 'flex';
      }
      else {
          this.carouselimages[this.index].style.display = 'flex';
      }
  }
}



let carousel = document.querySelectorAll('.carousel');

carousel = Array.from(carousel).map(link => new Carousel(link));

carousel[0].CarouselClickLeft();



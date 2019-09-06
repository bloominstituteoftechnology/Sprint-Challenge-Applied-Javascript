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
      console.log(this.element)

      // Get references to the classes we need
      this.photoBox = this.element.querySelector('.carousel');
      this.next = this.element.querySelector('.right-button');;
      this.prev = this.element.querySelector('.left-button');
      this.photos = this.element.querySelectorAll('.carousel img');

      // Initialize variables
      this.counter = 0; // Keeps track of which picture is showing
      this.totalPhotos = this.photos.length;
      this.current = this.photos[0];
      console.log(this.current)

      // Event listeners for next and previous buttons
      this.next.addEventListener('click', () => {
          console.log("Clicked!")
          this.navigate(1);
        });

      this.prev.addEventListener('click', () => {
          console.log("Clicked!")
          this.navigate(-1);
        });
  }

}

const carasol = new Carousel()
carousel;
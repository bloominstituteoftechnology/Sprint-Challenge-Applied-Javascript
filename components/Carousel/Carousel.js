class Image {
  constructor(element) {
    this.element = element;
  }
}

class Carousel {
  constructor(element) {
    this.element = element;
    // create a reference to each button
    this.left = document.querySelector('.left-button');
    this.right = document.querySelector('.right-button');

    // create reference to all images
    let images = this.element.querySelectorAll('img');
    images = Array.from(images).map((image, index) => {
      image.setAttribute('data-index', index);
      if (index === 0){ image.classList.add('current-slide')}
      return new Image(image);
    })

    // create an event listener for each button
    this.left.addEventListener('click', () => {


      // GET the current slide showing/ default is 0 index
      this.current = document.querySelector('.current-slide');
      // get the index of the current slide to change slide
      this.data = this.current.dataset.index;
      this.current.classList.remove('current-slide');


      // check if this.data is 0 to loop back to 3
      if (this.data == 0) {
        this.data = 3;
      }
      else {
        this.data =this.data - 1;
      }
      this.image = document.querySelector(`img[data-index="${this.data}"]`);
      this.image.classList.add('current-slide');
      });
    this.right.addEventListener('click', () => {
      // get the current slide on click
      this.current = document.querySelector('.current-slide');
      // get its data-index
      this.data = this.current.dataset.index;
      // remove current slide
      this.current.classList.remove('current-slide');

      if (this.data == 3) {
        this.data = 0;
      }
      else {
        this.data = Number(this.data) + 1;
        
      }

      this.image = document.querySelector(`img[data-index="${this.data}"]`);
      this.image.classList.add('current-slide');
    })
  }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

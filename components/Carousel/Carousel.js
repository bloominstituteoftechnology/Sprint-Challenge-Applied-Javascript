class Carousel {
    constructor(element) {
        this.element = element;

        this.photoBox = this.element.querySelector('.carousel');
        this.next = this.element.querySelector('.right-button');;
        this.prev = this.element.querySelector('.left-button');
        this.photos = this.element.querySelectorAll('.carousel img');

        this.counter = 0; 
        this.totalPhotos = this.photos.length;
        this.current = this.photos[0];
        console.log(this.totalPhotos)

        this.next.addEventListener('click', () => {
            console.log("Clicked next!")
            this.navigate(1);
          });
          
        this.prev.addEventListener('click', () => {
            console.log("Clicked previous!")
            this.navigate(-1);
          });
    }

    navigate(direction) {
        this.current.classList.remove('current');
        this.counter = this.counter + direction;
        console.log(this.counter)

        if (direction === -1 && this.counter < 0) { 
          this.counter = this.totalPhotos - 1; 
        }
        if (direction === 1 && !this.photos[this.counter]) { 
          this.counter = 0; 
        }
        console.log(this.counter)
        this.current = this.photos[this.counter];

        this.current.classList.add('current');
      }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel)
carousel.navigate(1);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
    constructor(element) {
        this.element = element;

        // Get references to the classes we need
        this.photoBox = this.element.querySelector('.carousel');
        this.next = this.element.querySelector('.right-button');;
        this.prev = this.element.querySelector('.left-button');
        this.photos = this.element.querySelectorAll('.carousel img');

        // Initialize variables
        this.counter = 0; // Keeps track of which picture is showing
        this.totalPhotos = this.photos.length;
        this.current = this.photos[0];
        console.log(this.totalPhotos)

        // Event listeners for next and previous buttons
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
        // Remove the current class from the displayed picture
        this.current.classList.remove('current');

        // Keeps track of which picture is currently showing
        this.counter = this.counter + direction;
        console.log(this.counter)

        // Take care of edge cases
        if (direction === -1 && this.counter < 0) { 
          this.counter = this.totalPhotos - 1; // If on the first picture and previous is clicked
        }
        if (direction === 1 && !this.photos[this.counter]) { 
          this.counter = 0; // If at the end of the carousel and next picture is clicked
        }

        console.log(this.counter)

        // Set the picture to current
        this.current = this.photos[this.counter];

        // Add the current class to the displayed picture
        this.current.classList.add('current');
      }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel)
carousel.navigate(1);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
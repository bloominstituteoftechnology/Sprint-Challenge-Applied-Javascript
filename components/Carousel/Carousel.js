class Carousel {
  constructor(cElement) {
    this.cElement = cElement;
    this.leftButton = this.cElement.querySelector(".left-button");
    this.rightButton = this.cElement.querySelector(".right-button");
    this.itemClassName = "carousel__photo";
    this.images = cElement.getElementsByClassName(this.itemClassName);
    this.timg = Array.from(this.images).length;
    this.slide = 0;
    this.moving = false;
    this.images[this.timg - 1].classList.add("prev");
    this.images[0].classList.add("active");
    this.images[1].classList.add("next");
    this.rightButton.addEventListener("click", this.moveNext);
    this.leftButton.addEventListener("click", this.movePrev);
  }
  moveNext = () => {
    console.log(this.moving);
    // Check if moving
    if (!this.moving) {
      // If it's the last slide, reset to 0, else +1
      if (this.slide === this.timg - 1) {
        this.slide = 0;
      } else {
        this.slide++;
      }
      // Move carousel to updated slide
      this.moveCarouselTo();
    }
  };
  movePrev = () => {
    // Check if moving
    if (!this.moving) {
      // If it's the first slide, set as the last slide, else -1
      if (this.slide === 0) {
        this.slide = this.timg - 1;
      } else {
        this.slide--;
      }

      // Move carousel to updated slide
      this.moveCarouselTo();
    }
  };
  disableInteraction() {
    this.moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function() {
      this.moving = false;
    }, 500);
  }
  moveCarouselTo() {
    // Check if carousel is moving, if not, allow interaction
    if (!this.moving) {
      // temporarily disable interactivity
      //this.disableInteraction();
      // Update the "old" adjacent slides with "new" ones
      let newPrevious = this.slide - 1;
      let newNext = this.slide + 1;
      let oldPrevious = this.slide - 2;
      let oldNext = this.slide + 2;
      // Test if carousel has more than three items
      console.log(this.timg);
      if (this.timg > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = this.timg - 1;
        } else if (newNext >= this.timg - 1) {
          oldNext = 0;
        }
        // Checks and updates if slide is at the beginning/end
        if (this.slide === 0) {
          newPrevious = this.timg - 1;
          oldPrevious = this.timg - 2;
          oldNext = this.slide + 1;
        } else if (this.slide === this.timg - 1) {
          newPrevious = this.slide - 1;
          newNext = 0;
          oldNext = 1;
        }
        // Now we've worked out where we are and where we're going,
        // by adding/removing classes we'll trigger the transitions.
        // Reset old next/prev elements to default classes
        this.images[oldPrevious].className = this.itemClassName;
        this.images[oldNext].className = this.itemClassName;
        // Add new classes
        this.images[newPrevious].className = this.itemClassName + " prev";
        this.images[this.slide].className = this.itemClassName + " active";
        this.images[newNext].className = this.itemClassName + " next";
      }
    }
  }
}

let carousel = document.querySelectorAll(".carousel");
console.log(carousel);
Array.from(carousel).forEach(el => new Carousel(el));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
  constructor(element) {
    this.element = element;
    console.log("carousel");

    // Create a current index
    const currentIndex = 0;

    const images = document.querySelectorAll(".carousel img");
    console.log(images);
    // display first image as default
    images[0].style.display = "block";

    const rightButton = document.querySelector(".right-button");
    console.log(rightButton);
    rightButton.addEventListener("click", () => this.slideNext());

    const leftButton = document.querySelector(".left-button");
    console.log(leftButton);
    leftButton.addEventListener("click", () => this.slideBack());
  }
  slideNext() {
    console.log("slide next clicked");
  }

  slideBack() {
    console.log("slide back clicked");
  }
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

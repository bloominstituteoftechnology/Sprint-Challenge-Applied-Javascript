class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;

    this.leftButton = this.carouselElement.querySelector(".left-button");
    this.rightButton = this.carouselElement.querySelector(".right-button");

    this.images = this.carouselElement.querySelectorAll("img");

    this.index = 0;

    this.leftButton.addEventListener("click", () => this.nextPhotoLeft());
    this.rightButton.addEventListener("click", () => this.nextPhotoRight());
  }

  nextPhotoLeft() {
    this.images.forEach(img => img.classList.remove("img-view"));
    this.index--;
    if (this.index < 0) {
      this.index = 3;
    }
    this.images[this.index].classList.add("img-view");
  }

  nextPhotoRight() {
    this.images.forEach(img => img.classList.remove("img-view"));
    this.index++;
    if (this.index > 3) {
      this.index = 0;
    }
    this.images[this.index].classList.add("img-view");
  }
}

let carousel = document
  .querySelectorAll(".carousel")
  .forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    [x] You will need to grab a reference to the carousel, and in it grab the left and right buttons
    [x] You will need to grab a reference to all of the images
    [x] Create a current index
    [x] Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

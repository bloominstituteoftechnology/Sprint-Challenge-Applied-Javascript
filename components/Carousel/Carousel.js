class Carousel {
  constructor(element) {
    this.element = element;
    this.left = document.querySelector(".left-button");
    this.right = document.querySelector(".right-button");
    this.images = document.querySelectorAll(".carousel img");
    this.currentIndex = 0;
    this.left.addEventListener("click", () => this.previousSlide());
    this.right.addEventListener("click", () => this.nextSlide());
  }

  previousSlide() {
    this.currentIndex = this.currentIndex === 0 ? 3 : this.currentIndex - 1;
    this.images.forEach(img => (img.style.display = "none"));
    this.images[this.currentIndex].style.display = "block";
    Tweenlite.from(this.images[this.currentIndex], 5, {opacity:0, right:"100px"});
  }

  nextSlide() {
    this.currentIndex = this.currentIndex === 3 ? 0 : this.currentIndex + 1;
    this.images.forEach(img => (img.style.display = "none"));
    this.images[this.currentIndex].style.display = "block";
    Tweenlite.from(this.images[this.currentIndex], 5, {opacity:0, right:"100px"});
  }
}

let carousel = document.querySelector(".carousel");
carouselObject = new Carousel(carousel);
carouselObject.images[0].style.display = "block";

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

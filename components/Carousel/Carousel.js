class Carousel {
  constructor(domElement) {
    this.domElement = domElement;

    this.leftBtn = document.querySelector(".left-button");

    this.rightBtn = document.querySelector(".right-button");

    this.images = document.querySelectorAll(".carousel-img");
    this.images = Array.from(this.images).map(
      image => new CarouselImage(image)
    );

    this.leftBtn.addEventListener("click", event => this.cycle(event));
    this.rightBtn.addEventListener("click", event => this.cycle(event));
  }
  cycle() {
    //testing to see how the method would work for one item
    console.log(this.images);
    Array.from(this.images).forEach(image => (image.style.display = "none"));

    //    this.images.forEach(image => image.selectImage());
  }
}

class CarouselImage {
  constructor(element) {
    this.element = element;
  }

  selectImage() {
    console.log(this);
    this.element.style.display = null;
  }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

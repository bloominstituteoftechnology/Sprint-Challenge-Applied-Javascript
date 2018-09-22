class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    console.log(this.carousel);
    this.imageArr = Array.from(this.carousel.querySelectorAll(".carousel img"));
    console.log(this.imageArr);
    this.leftButton = this.carousel.querySelector(".left-button");
    this.rightButton = this.carousel.querySelector(".right-button");
    let imageIndex = 1;

    this.rightButton.addEventListener("click", () => {
      this.displayImage(this.imageArr[imageIndex]);
      imageIndex++;
      if (imageIndex === this.imageArr.length) {
        imageIndex = 0;
      }
    });
    this.leftButton.addEventListener("click", () => {
      this.displayImage(this.imageArr[imageIndex]);
      imageIndex--;
      if (imageIndex < 0) {
        imageIndex = this.imageArr.length - 1;
      }
    });
  }

  displayImage(image) {
    this.imageArr.forEach(img => {
        img.style.display = "none";
    });
    image.style.display = "inline";
    image.style.zIndex = "-2";
  }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

carousel.displayImage(document.querySelector(".carousel img"));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

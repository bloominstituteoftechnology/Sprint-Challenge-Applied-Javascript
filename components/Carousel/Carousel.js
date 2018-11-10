class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = this.carousel.querySelector(".left-button");
    this.right = this.carousel.querySelector(".right-button");
    this.images = Array.from(this.carousel.querySelectorAll("img"));
    this.current = 0;
    this.images[this.current].style.display = "block";
    this.left.addEventListener("click", _ => this.leftClick());
    this.right.addEventListener("click", _ => this.rightClick());
  }
  leftClick() {
    const imgs = document.querySelectorAll("img");
    imgs.forEach(e => (e.style.display = "none"));
    if (this.current == 0) {
      this.current = this.images.length - 1;
      this.images[this.current].style.display = "block";
    } else {
      this.current--;
      this.images[this.current].style.display = "block";
    }
  }
  rightClick() {
    const imgs = document.querySelectorAll("img");
    imgs.forEach(e => (e.style.display = "none"));
    if (this.current == this.images.length - 1) {
      this.current = 0;
      this.images[this.current].style.display = "block";
    } else {
      this.current++;
      this.images[this.current].style.display = "block";
    }
  }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

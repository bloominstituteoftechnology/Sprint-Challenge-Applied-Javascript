class Carousel {
  constructor(ele) {
    this.ele = ele;
    this.leftBtn = this.ele.querySelector(".left-button");
    this.rightBtn = this.ele.querySelector(".right-button");
    this.images = this.ele.querySelectorAll("img");
    this.currentIndex = this.images[0];
    this.leftBtn.addEventListener("click", () => this.left());
    this.rightBtn.addEventListener("click", () => this.right());
    this.currentIndex.style.display = "block";
    this.i = 1;
    setInterval(() => this.right(), 5000);
  }

  left() {
    this.images.forEach(img => (img.style.display = "none"));
    if (this.i > -1) {
      this.images[this.i].style.display = "block";
      this.i -= 1;
    } else {
      this.images[3].style.display = "block";
      this.i = 1;
    }
  }

  right() {
    this.images.forEach(img => (img.style.display = "none"));
    //this.currentIndex = this.currentIndex.nextElementSibling;
    if (this.i < 4) {
      this.images[this.i].style.display = "block";
      this.i += 1;
    } else {
      this.images[0].style.display = "block";
      this.i = 1;
    }
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

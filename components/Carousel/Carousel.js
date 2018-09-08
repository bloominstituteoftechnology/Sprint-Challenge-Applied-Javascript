let current;

class Carousel {
  constructor(elem) {
    this.elem = elem;
    this.leftButton = this.elem.querySelector(".left-button");
    this.rightButton = this.elem.querySelector(".right-button");
    this.picList = this.elem.querySelectorAll("img");
    current = 1;
    this.leftButton.style.zIndex = "2";
    this.selectedPic = this.picList[current];
    this.leftButton.addEventListener("click", () => {
      this.movePicLeft();
    });
    this.rightButton.addEventListener("click", () => {
      this.movePicRight();
    });
  }

  movePicLeft() {
    TweenMax.to(this.selectedPic, 1, {
      opacity: 0
    });
    this.selectedPic.style.display = "none";
    this.selectedPic.style.opacity = "1";
    if (current === 0) {
      current = this.picList.length - 1;
    } else current--;
    this.selectedPic = this.picList[current];
    console.log(current);
    this.selectedPic.style.display = "block";
    TweenMax.from(this.selectedPic, 1, {
      opacity: 0,
      x: 1000
    });
    console.log(carousel.selectedPic);
  }

  movePicRight() {
    TweenMax.to(this.selectedPic, 1, {
      opacity: 0
    });
    this.selectedPic.style.display = "none";
    this.selectedPic.style.opacity = "";
    if (current === this.picList.length - 1) {
      current = 0;
    } else current++;
    this.selectedPic = this.picList[current];
    this.selectedPic.style.display = "block";
    TweenMax.from(this.selectedPic, 1, {
      opacity: 0,
      x: -1000
    });
  }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

carousel.movePicLeft();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

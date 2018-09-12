let current;

const setDispToNone = () => {
  carousel.lastPic.style.display = "none";
};

const setDispToBlock = () => {
  carousel.selectedPic.style.display = "block";
};

class Carousel {
  constructor(elem) {
    this.elem = elem;
    this.leftButton = this.elem.querySelector(".left-button");
    this.rightButton = this.elem.querySelector(".right-button");
    this.picList = this.elem.querySelectorAll("img");
    current = 0;
    this.leftButton.style.zIndex = "2";
    this.selectedPic = this.picList[current];
    this.lastPic;
    this.leftButton.addEventListener("click", () => {
      this.movePicLeft();
    });
    this.rightButton.addEventListener("click", () => {
      this.movePicRight();
    });
  }

  movePicLeft() {
    TweenMax.fromTo(
      this.selectedPic,
      0.5,
      { opacity: 1, x: 0 },
      { opacity: 0, x: -1000 }
    );
    TweenMax.delayedCall(0.5, setDispToNone);
    if (current === 0) {
      current = this.picList.length - 1;
    } else current--;
    this.lastPic = this.selectedPic;
    this.selectedPic = this.picList[current];
    TweenMax.delayedCall(0.51, setDispToBlock);
    TweenMax.fromTo(
      this.selectedPic,
      1,
      { opacity: 0, x: 1000 },
      { opacity: 1, x: 0, delay: 0.3 }
    );
  }

  movePicRight() {
    TweenMax.fromTo(
      this.selectedPic,
      0.5,
      { opacity: 1, x: 0 },
      { opacity: 0, x: 1000 }
    );
    TweenMax.delayedCall(0.5, setDispToNone);
    if (current === this.picList.length - 1) {
      current = 0;
    } else current++;
    this.lastPic = this.selectedPic;
    this.selectedPic = this.picList[current];
    TweenMax.delayedCall(0.51, setDispToBlock);
    TweenMax.fromTo(
      this.selectedPic,
      1,
      { opacity: 0, x: -1000 },
      { opacity: 1, x: 0, delay: 0.3 }
    );
  }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

carousel.selectedPic.style.display = "block";

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

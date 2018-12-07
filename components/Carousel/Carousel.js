// NOTE: The Carousel.js instructions gave us the choice  for fade-in or slide-in

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
    this.images.forEach(img => {
      TweenMax.to(img, 1, { opacity: 0 });
      img.classList.remove("img-view");
    });
    this.index--;
    if (this.index < 0) {
      this.index = 3;
    }
    this.images[this.index].classList.add("img-view");
    const currentImg = this.images[this.index];
    TweenMax.to(currentImg, 1, { opacity: 1 });
  }

  nextPhotoRight() {
    this.images.forEach(img => {
      TweenMax.to(img, 1, { opacity: 0 });
      img.classList.remove("img-view");
    });
    this.index++;
    if (this.index > 3) {
      this.index = 0;
    }
    this.images[this.index].classList.add("img-view");
    const currentImg = this.images[this.index];
    TweenMax.to(currentImg, 1, { opacity: 1 });
  }
}

let carousel = document
  .querySelectorAll(".carousel")
  .forEach(carousel => new Carousel(carousel));

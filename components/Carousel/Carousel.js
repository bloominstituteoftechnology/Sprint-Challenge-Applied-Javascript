class Carousel {
  constructor(element) {
    this.element = element;
    this.photos = Array.from(element.querySelectorAll("img")).map(photo => new Photo(photo));
    this.activePhoto = this.photos[0];
    this.activePhotoIndex = 0;
    this.leftButton = element.querySelector(".left-button");
    this.rightButton = element.querySelector(".right-button");
    this.leftButton.addEventListener("click", () => {
      if (this.activePhotoIndex > 0) {
        this.activePhotoIndex -= 1;
      } else {
        this.activePhotoIndex = 3;
      }
      this.activePhoto.deselectPhoto();
      this.activePhoto = this.photos[this.activePhotoIndex];
      this.activePhoto.selectPhoto();
    });
    this.rightButton.addEventListener("click", () => {
      if (this.activePhotoIndex === 3) {
        this.activePhotoIndex = 0;
      } else {
        this.activePhotoIndex += 1;
      }
      this.activePhoto.deselectPhoto();
      this.activePhoto = this.photos[this.activePhotoIndex];
      this.activePhoto.selectPhoto();
    });
    this.init();
  }

  init(){
    this.activePhoto.selectPhoto();
  }
}

class Photo {
  constructor(element) {
    this.element = element;
  }

  selectPhoto(){
    this.element.style.display = "block";
  }
  deselectPhoto(){
    this.element.style.display = "none";;
  }
}

let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

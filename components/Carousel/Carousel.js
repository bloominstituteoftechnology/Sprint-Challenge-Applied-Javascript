class Carousel {
  constructor(carousel){
    this.carousel = carousel;

    this.leftButton = this.carousel.querySelector('.left-button');
    this.rightButton = this.carousel.querySelector('.right-button');

    this.images = this.carousel.querySelectorAll('img');
    this.imageIndexes = this.getNumOfImageIndexes();
    this.selectedImageIndex = 0;
    this.selectedImage = this.images[this.selectedImageIndex];
    this.selectedImage.style.display = "flex";
    
    this.leftButton.addEventListener('click', () => this.leftButtonClick());
    this.rightButton.addEventListener('click', () => this.rightButtonClick());
  }

  getNumOfImageIndexes(){
    let imageIndexes = [];
    this.images.forEach((element, i) => imageIndexes.push(i));
    return imageIndexes;
  }

  leftButtonClick(){
    if (this.selectedImageIndex === 0){
      this.selectedImageIndex = this.imageIndexes[this.imageIndexes.length - 1];
    } else {
      this.selectedImageIndex--;
    }
    this.selectedImage.style.display = "none";
    this.selectedImage = this.images[this.selectedImageIndex]
    this.selectedImage.style.display = "flex";
  }

  rightButtonClick(){
    if (this.selectedImageIndex === this.imageIndexes.length - 1){
      this.selectedImageIndex = 0;
    } else {
      this.selectedImageIndex++;
    }
    this.selectedImage.style.display = "none";
    this.selectedImage = this.images[this.selectedImageIndex]
    this.selectedImage.style.display = "flex";
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
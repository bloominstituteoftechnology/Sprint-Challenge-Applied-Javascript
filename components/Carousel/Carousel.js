class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    // Images
    this.carouselImages = Array.from(
      document.querySelectorAll('.carousel img')
    );
    this.currentImage = this.carouselImages[0];

    // Buttons
    this.rightButton = document.querySelector('.right-button');
    this.leftButton = document.querySelector('.left-button');

    // Button Event Listeners
    this.rightButton.addEventListener('click', () => this.nextImage());
    this.leftButton.addEventListener('click', () => this.previousImage());
  }

  nextImage() {
    let nextImg;
    this.carouselImages.forEach((img, i) => {
      if (img.classList.contains('current-img')) {
        img.classList.remove('current-img');
        // if at last img go to first img
        if (this.carouselImages.length - 1 === i) {
          nextImg = this.carouselImages[0];
          // else go to next img
        } else {
          nextImg = this.carouselImages[i + 1];
        }
      }
    });

    nextImg.classList.add('current-img');
  }

  previousImage() {
    let previousImg;
    this.carouselImages.forEach((img, i) => {
      if (img.classList.contains('current-img')) {
        img.classList.remove('current-img');
        // if at first img go to last img
        if (i === 0) {
          previousImg = this.carouselImages[this.carouselImages.length - 1];
          // else go to previous img
        } else {
          previousImg = this.carouselImages[i - 1];
        }
      }
    });

    previousImg.classList.add('current-img');
  }
}

//If You've gotten this far, you're on your own! Although we will give you some hints:
// 1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
let carousels = Array.from(document.querySelectorAll('.carousel')).map(
  carousel => new Carousel(carousel)
);

// 3. Create a current index
// let currentIndex = carouselImages[0];
// currentIndex.style.display = 'block';

// 5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
// 6. Have fun!

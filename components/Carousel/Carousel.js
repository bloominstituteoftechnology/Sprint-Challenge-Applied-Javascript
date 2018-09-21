class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    // Images
    this.carouselImages = Array.from(
      document.querySelectorAll('.carousel img')
    );
    this.currentImage = this.carouselImages[0];

    console.log(this.currentImage);

    // Buttons
    this.rightButton = document.querySelector('.right-button');
    this.leftButton = document.querySelector('.left-button');

    // Button Event Listeners
    this.rightButton.addEventListener('click', () => {
      let nextImg;
      this.carouselImages.forEach((img, i) => {
        if (img.classList.contains('current-img')) {
          img.classList.remove('current-img');
          nextImg = this.carouselImages[i + 1];
          console.log(nextImg);
        }
      });

      nextImg.classList.add('current-img');
    });
  }

  getCurrentImage() {
    this.carouselImages.filter(img => img.classList.contains('current-img'));
  }

  nextImage() {
    //
  }

  previousImage() {}
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

class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    // Slider
    this.slider = document.querySelector('.slider');
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
    let nextImg, toLast;
    this.carouselImages.forEach((img, i) => {
      if (img.classList.contains('current-img')) {
        TweenMax.to(this.slider, 0.5, {
          x: '-100%'
        });
        setTimeout(() => {
          TweenMax.to(this.slider, 0, {
            x: '0%'
          });
          toLast = this.carouselImages.shift();
          this.carouselImages.push(toLast);
          this.slider.append(img);
          img.classList.remove('current-img');
          nextImg = this.carouselImages[0];
          nextImg.classList.add('current-img');
        }, 500);
      }
    });
  }

  previousImage() {
    let nextImg, fromLast;
    this.carouselImages.forEach((img, i) => {
      if (img.classList.contains('current-img')) {
        TweenMax.to(this.slider, 0.5, {
          x: '100%'
        });
        setTimeout(() => {
          TweenMax.to(this.slider, 0, {
            x: '0%'
          });
          fromLast = this.carouselImages.pop();

          this.carouselImages.unshift(fromLast);
          console.log(this.carouselImages[0]);
          this.slider.innerHTML = this.carouselImages;

          // this.slider.prepend(this.carouselImages[this.carouselImages.length]);
          console.log(this.carouselImages[this.carouselImages.length - 1]);
          img.classList.remove('current-img');
          nextImg = this.carouselImages[0];
          nextImg.classList.add('current-img');
        }, 500);
      }
    });
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

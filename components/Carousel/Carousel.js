class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.leftButton = this.carousel.querySelector('.left-button');
    this.rightButton = this.carousel.querySelector('.right-button');
    this.imgs = this.carousel.querySelectorAll('img');
    this.leftButton.addEventListener('click', () => {
      this.changeImg('left');
    });
    this.rightButton.addEventListener('click', () => {
      this.changeImg('right');
    });
    this.currentIndex = 0;
    console.log(this.currentIndex);
    this.imgs[0].style.display = 'block';
  }

  changeImg(direction) {
    console.log(direction);
    const imgs = this.carousel.querySelectorAll('img');
    imgs.forEach((img) => (img.style.display = 'none'));
    console.log(imgs.length);
    if (direction === 'right') {
      this.currentIndex === imgs.length - 1
        ? (this.currentIndex = 0)
        : (this.currentIndex = this.currentIndex + 1);
      imgs[this.currentIndex].style.display = 'block';
    } else if (direction === 'left') {
      this.currentIndex === 0
        ? (this.currentIndex = imgs.length - 1)
        : (this.currentIndex = this.currentIndex - 1);
      imgs[this.currentIndex].style.display = 'block';
    }
    console.log(this.currentIndex);
  }
}

let carousel = document.querySelector('.carousel');
console.log(carousel);
carousel = new Carousel(carousel);
console.log(carousel);
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

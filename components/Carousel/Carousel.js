var num = 0

class Carousels {
  constructor(element) {
    this.element = element;
    this.slides = document.querySelectorAll('.carousel img');
    this.slides = Array.from(this.slides)
    this.activeSlide = this.slides[num];
    this.activeSlide.style.display = 'flex';
    this.leftButton = this.element.querySelector('.left-button');
    this.rightButton = this.element.querySelector('.right-button');
    this.activateRightButton();
    this.activateLeftButton();
  }

  activateRightButton() {this.rightButton.addEventListener('click', () => {
    console.log(num);
    if (num > 3) {
      num = 0;
    }
    this.activeSlide.style.display = 'none';
    this.activeSlide = this.slides[num++];
    this.activeSlide.style.display = 'flex';
  })
}

activateLeftButton() {this.leftButton.addEventListener('click', () => {
  console.log(num);
  if (num < 0) {
    num = 3;
  }
  this.activeSlide.style.display = 'none';
  this.activeSlide = this.slides[num--];
  this.activeSlide.style.display = 'flex';
})
}

}

let carousels = document.querySelectorAll('.carousel');
carousels = Array.from(carousels).map(carousel => new Carousels(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

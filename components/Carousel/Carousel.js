class Carousel {
  constructor(element) {
    this.element = element;
    this.images = this.element.querySelectorAll(".image");
    this.images = Array.from(this.images).map(image => new CarouselImage(image));
    this.buttons = this.element.querySelectorAll(".button");
    this.buttons = Array.from(this.buttons).map(button => new Button(button, this));
    this.currentImage = this.images[0];
    this.length = this.images.length - 1;
    this.init()
  }

  init() {
    this.currentImage.select();
  }

  decreaseIndex() {
    this.i = this.images.indexOf(this.currentImage);
    if (this.i > 0) {
      this.updateActive(this.images[this.i + 1])
    } else {
      this.updateActive(this.images[this.length])
    }
  }

  increaseIndex() {
    this.i = this.images.indexOf(this.currentImage)
    if (this.i < this.length) {
      this.updateActive(this.images[this.i + 1])
    } else {
      this.updateActive(this.images[0])
    }
  }
  updateActive(newActive) {
    this.currentImage.deselect();
    this.currentImage = newActive;
    this.currentImage.select();
  }

  getTab(data) {
    return data;
  }
}

class CarouselImage {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.remove("image");
  }

  deselect() {
    this.element.classList.add("image");
  }
}

class Button {
  constructor(button, parent) {
    this.button = button;
    this.carousel = parent;
    this.direction = parent.getTab(this.button.dataset.tag);

    this.button.addEventListener('click', () => {
      if (this.direction === 0) {
        this.carousel.decreaseIndex()
      } else {
        this.carousel.increaseIndex()
      }
    })
  }
}

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(item => new Carousel(item));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
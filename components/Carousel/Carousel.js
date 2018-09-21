class Carousel {
  constructor(carousel) {
    this.carousel = carousel
    this.left = carousel.querySelector('.left-button')
    this.right = carousel.querySelector('.right-button')
    this.left.addEventListener('click', () => this.rotateLeft())
    this.right.addEventListener('click', () => this.rotateRight())
    this.images = Array.from(carousel.querySelectorAll('img'))
    this.current = 0
    this.display(this.current)
  }

  display(index) {
    console.log(this.images[index])
    this.images[index].style.display = 'block'
  }

  displayNone() {
    this.images.forEach(image => (image.style.display = 'none'))
  }

  rotateLeft() {
    this.displayNone()
    this.current =
      this.current === 0 ? this.images.length - 1 : this.current - 1
    this.display(this.current)
  }

  rotateRight() {
    this.displayNone()
    this.current =
      this.current === this.images.length - 1 ? 0 : this.current + 1
    this.display(this.current)
  }
}

let carousel = new Carousel(document.querySelector('.carousel'))

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

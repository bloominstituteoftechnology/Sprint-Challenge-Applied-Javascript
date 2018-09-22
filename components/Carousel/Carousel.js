class Carousel {
  constructor(element) {
    this.element = element;
    this.leftBtn = this.element.querySelector('.left-button')
    this.rightBtn = this.element.querySelector('.right-button')
    this.image = this.element.querySelectorAll('.carousel img')
    this.image = Array.from(this.image)
    this.image[0].style.display = 'block'
    this.rightBtn.addEventListener('click', event => this.rightShowImage(event))
    this.leftBtn.addEventListener('click', event => this.leftShowImage(event))
    this.index = 0;


  }
  leftShowImage() {
    if (this.index === 0) {
      this.index = 4
    }
    this.index--
    this.image.forEach(show => show.style.display = 'none')
    this.image[this.index].style.display = 'block'
  }
  rightShowImage() {
    if (this.index === 3) {
      this.index = -1;
    }
    this.index++
    this.image.forEach(show => show.style.display = 'none')
    this.image[this.index].style.display = 'block'
  }

}


let carousel = document.querySelector('.carousel');
// console.log(carousel)
carousel = new Carousel(carousel);
// console.log(carousel)



// /* If You've gotten this far, you're on your own! Although we will give you some hints:
//     1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
//     2. You will need to grab a reference to all of the images
//     3. Create a current index
//     4. Those buttons are gonna need some click handlers.
//     5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
//     6. Have fun!
// */
class Carousel {
  constructor(element) {
    this.element = element;

    this.leftArrow = this.element.querySelector('.left-button')
    this.rightArrow = this.element.querySelector('.right-button')
    this.images = this.element.querySelectorAll('img')

    this.indexArr = [0,1,2,3]
    this.index = 0

    this.rightArrow.addEventListener('click', () => this.scrollRight())
    this.leftArrow.addEventListener('click', () => this.scrollLeft())

  }

  scrollRight() {
    this.images.forEach( item  => item.classList.remove('carousel-inactive-right') )
    this.images[this.indexArr[this.index]].classList.remove('carousel-active-right')
    this.index++
    this.index %= 4;
    this.index == 0 ?
    this.images[3].classList.toggle('carousel-inactive-right')
    :
    this.images[this.index-1].classList.toggle('carousel-inactive-right')
    this.images[this.index].classList.add('carousel-active-right')
    console.log('ind:', this.index);
  }

  scrollLeft() {
    this.images[this.index].classList.remove('carousel-active')
    this.index--
    this.index < 0 ? this.index = 3 : this.index %= 4;
    this.images[this.index].classList.add('carousel-active')
  }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the right and left buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

// scroll() {
//     this.images[this.index].classList.remove('carousel-active')
//     event.target == this.rightArrow ? this.index++ : this.index--
//     this.index < 0 ? this.index = 3 : this.index %= 4
//     this.images[this.index].classList.add('carousel-active')
//   }

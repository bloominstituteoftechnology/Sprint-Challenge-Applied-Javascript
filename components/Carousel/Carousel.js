class Carousel {
  constructor(carouselElement){
    this.carouselElement = carouselElement;
    this.left = carouselElement.querySelector('.left-button');
    this.right = carouselElement.querySelector('.right-button');
    this.left.addEventListener('click', () => this.moveLeft());
    this.right.addEventListener('click', () => this.moveRight());
    this.images = Array.from(carouselElement.querySelectorAll('img'))
    this.currentIndex = 0;
    this.display(this.currentIndex)
  }

  display(index){
    console.log(this.images[index])
    this.images[index].style.display="block";
  }

  displayNone(){
    this.images.forEach(image => (image.style.display = 'none'))
  }

  moveLeft(){
    this.displayNone()
    if (this.currentIndex === 0){
      this.currentIndex = this.images.length - 1
    } else {
      this.currentIndex = this.currentIndex - 1
    }
    this.display(this.currentIndex);
  }

  moveRight(){
    this.displayNone()
    if (this.currentIndex === this.images.length - 1){
      this.currentIndex = 0
    } else {
      this.currentIndex = this.currentIndex + 1;
    }
    this.display(this.currentIndex);
  }



}

let carousel = document.querySelectorAll('.carousel').forEach(carouselItem => new Carousel(carouselItem));





/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

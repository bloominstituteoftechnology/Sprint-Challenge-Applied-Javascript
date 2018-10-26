class Carousel {
 constructor(element) {
    this.element = element;
    this.leftArrow = document.querySelector('.left-button');
    this.rightArrow = document.querySelector('.right-button');
    this.currentIndex = 0;
    this.images = document.querySelectorAll('img');
    this.images = Array.from(this.images); // .map(imageSlide => new ImageSlide(imageSlide))
    this.leftArrow.addEventListener('click', () => {this.revealImage()})
    this.rightArrow.addEventListener('click', () => {this.revealImage()})
}
revealImage() {
    this.images.forEach(image => image.style.display = "block");
    // console.log(this.images);
    
    }
}
// class ImageSlide {
//     constructor
// }
let carousel = document.querySelector('.carousel');
// console.log(carousel);
carousel = new Carousel(carousel);
carousel.revealImage();
// console.log(carousel.revealImage);



/* If You've gotten this far, you're on your own! Although we will give you some hints:
 [x]  1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
 [x]  2. You will need to grab a reference to all of the images
 [x]  3. Create a current index
 [x]  4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
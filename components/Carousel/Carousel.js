class Carousel {

}

// slideLeft() {

// }

// slideRight() {

// }

class CarouselImage {

}

const carousel = document.querySelector('.carousel');
const leftBtn = document.querySelector('left-button');
const rightBtn = document.querySelector('right-button');

// leftBtn.addEventListener('click', slideLeft());
// rightBtn.addEventListener('click', slideRight());

let images = document.querySelectorAll('.carousel-img');
images = Array.from(images).map(image => new CarouselImage(image));
const imagesIndex = images.length;  

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// Button listeners
nextBtn.addEventListener('click', () => {
  // Handles fast clicking bug
  if(counter >= carouselImages.length -1) return;

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

});

prevBtn.addEventListener('click', () => {
  // Handles fast clicking bug
  if(counter <= 0) return;

  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

});

// listens for the end
carouselSlide.addEventListener('transitionend', () => {
  if (carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
  }
  
});





























// const mainCarousel = document.querySelector('.carousel-container');

// function createCarousel () {

//     // Creating the Elements
//     const carousel = document.createElement('div');
//     const left = document.createElement('div');
//     const image1 = document.createElement('img');
//     const image2 = document.createElement('img');
//     const image3 = document.createElement('img');
//     const image4 = document.createElement('img');
//     const right = document.createElement('div');

//     // Adding Classlists to the Elements
//     carousel.classList.add('carousel');
//     left.classList.add('left-button');
//     right.classList.add('right-button');

//     // Adding text to the Elements
//     image1.setAttribute("src", "./assets/carousel/mountains.jpeg");
//     image2.setAttribute("src", "./assets/carousel/computer.jpeg");
//     image3.setAttribute("src", "./assets/carousel/trees.jpeg");
//     image4.setAttribute("src", "./assets/carousel/turntable.jpeg");

//     // Appending children to parent
//     carousel.appendChild(left);
//     carousel.appendChild(image1);
//     carousel.appendChild(image2);
//     carousel.appendChild(image3);
//     carousel.appendChild(image4);
//     carousel.appendChild(right);

//     return carousel;
// }

// mainCarousel.appendChild(createCarousel());
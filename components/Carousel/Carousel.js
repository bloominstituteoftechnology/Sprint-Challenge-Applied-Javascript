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


// function carousel(objects) {
//   let newCarousel = document.querySelector('.carousel-container');
//   // console.log('in carousel function');
//   const carousel = document.createElement('div');
//   const leftButton = document.createElement('div');
//   const img_one = document.createElement('img');
//   const img_two = document.createElement('img');
//   const img_three = document.createElement('img');
//   const img_four = document.createElement('img');
//   const rightButton = document.createElement('div');

//   carousel.classList.add('carousel');
//   leftButton.classList.add('left-button');
//   rightButton.classList.add('right-button');


//   let images = [
//     "./assets/carousel/mountains.jpeg",
//     './assets/carousel/computer.jpeg',
//     './assets/carousel/trees.jpeg',
//     'object./assets/carousel/turntable.jpeg'
//   ]

//   img_one.src = "./assets/carousel/mountains.jpeg";
//   img_one.alt = 'mountains image';
//   img_two.src = ("./assets/carousel/computer.jpeg");
//   img_two.alt = 'computer image';
//   img_three.src = ("./assets/carousel/trees.jpeg");
//   img_three.alt = 'trees image';
//   img_four.src = ("./assets/carousel/turntable.jpeg");
//   img_four.alt = 'turntable image';

//   carousel.appendChild(leftButton);
//   carousel.appendChild(img_one);
//   carousel.appendChild(img_two);
//   carousel.appendChild(img_three);
//   carousel.appendChild(img_four);
//   carousel.appendChild(rightButton);
//   newCarousel.appendChild(carousel);


//   return carousel;


// }
// carousel();
// let carouselScroller = (item => {
//   header.ClassList$(`.carousel`).carousel('cycle')
//   interval: 2000
// });

// images



// function carousel(index) {
//   index.forEach(item => {
//     addEventListener('click', function () {
//       `${item}`
//     });

//   })
// }

// carousel(images);



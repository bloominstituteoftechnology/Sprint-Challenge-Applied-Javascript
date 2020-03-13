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


function carousel(objects) {
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const img_one = document.createElement('img');
  const img_two = document.createElement('img');
  const img_three = document.createElement('img');
  const img_four = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  img_one.src = ("object./.assets / carousel / mountains.jpeg");
  img_one.alt = 'mountains image';
  img_two.src = ("object./.assets/carousel/computer.jpeg");
  img_two = 'computer image';
  img_three.src = ("object./.assets/carousel/trees.jpeg");
  img_three = 'trees image';
  img_four.src = ("object./.assets/carousel/turntable.jpeg")
  img_four = 'turntable image';

  carousel.appendChild(leftButton);
  carousel.appendChild(img_one);
  carousel.appendChild(img_two);
  carousel.appendChild(img_three);
  carousel.appendChild(img_four);
  carousel.appendChild(rightButton);


  return carousel;


}

let newCarousel = document.querySelector('.carousel-container');
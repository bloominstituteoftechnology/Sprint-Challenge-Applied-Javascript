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

function carouselBuilder {

  // Create Template
  const carouselCont = document.querySelector('.carousel-container');
  const carouselDiv = document.createElement('div');
  const carImg1 = document.createElement('img');
  const carImg2 = document.createElement('img');
  const carImg3 = document.createElement('img');
  const carImg4 = document.createElement('img');
  const carButt1 = document.createElement('button');
  const carButt2 = document.createElement('button');

  // Assign Classes
  carouselDiv.classList.add('carousel');
  carButt1.classList.add('left-button');
  carButt2.classList.add('right-button');

  // Add to DOM
carouselCont.appendChild(carouselDiv);
carouselDiv.appendChild(carButt1);
carouselDiv.appendChild(carImg1);
carouselDiv.appendChild(carImg2);
carouselDiv.appendChild(carImg3);
carouselDiv.appendChild(carImg4);
carouselDiv.appendChild(carButt2);

return carouselDiv;
}
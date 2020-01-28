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
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.appendChild(carsouelCreator());

function carsouelCreator() {
  const carsouelDiv = document.createElement('div');
  carsouelDiv.classList.add('carousel');

  const leftBtn = document.createElement('div');
  leftBtn.classList.add('left-button');
  carsouelDiv.appendChild(leftBtn);

  const rightBtn = document.createElement('div');
  rightBtn.classList.add('right-button');
  carsouelDiv.appendChild(rightBtn);

  const imgMountains = document.createElement('img');
  imgMountains.src = './assets/carousel/mountains.jpeg';
  carsouelDiv.appendChild(imgMountains);

  const imgComputer = document.createElement('img');
  imgComputer.src = './assets/carousel/computer.jpeg';
  carsouelDiv.appendChild(imgComputer);

  const imgTrees = document.createElement('img');
  imgTrees.src = './assets/carousel/trees.jpeg';
  carsouelDiv.appendChild(imgTrees);

  const imgTurnable = document.createElement('img');
  imgTurnable.src = './assets/carousel/turntable.jpeg';
  carsouelDiv.appendChild(imgTurnable);

  return carsouelDiv;
}

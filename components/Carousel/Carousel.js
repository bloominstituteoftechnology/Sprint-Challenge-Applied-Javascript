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

function createCarousel(){
  const carouselParent = document.querySelector('.carousel-container');
  console.log(carouselParent)
  const container = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  const img = document.createElement('img');
  container.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  const imgArr = [
    './assets/carousel/mountains.jpeg',
    './assets/carousel/computer.jpeg',
    './assets/carousel/trees.jpeg',
    './assets/carousel/turntable.jpeg'
  ]
  container.appendChild(leftButton);
  container.appendChild(img);
  container.appendChild(rightButton);
  console.log(container);
  carouselParent.appendChild(container);
  function leftButtonClick(){
    document.getElementsByTagName('img').styles.display = 'flex';
  }
  leftButton.onclick(event) = function(){
   imgArr.forEach(img =>
    img.src = Math.Floor(Math.random(imgArr))
   )
  } 
};

createCarousel();
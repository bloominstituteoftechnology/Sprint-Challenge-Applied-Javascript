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
  const container = document.createElement('div');
  const leftButton = document.createElement('div');
  const rightButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');
  const img5 = document.createElement('img');
  const imgArr = [
   {img1},
   {img2},
   {img3},
   {img4},
   {img5}
  ];
  console.log(imgArr);
  container.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  img1.src = './././assets/carousel/bones.jpg';
  img2.src = './././assets/carousel/fido.jpg';
  img3.src = './././assets/carousel/max.jpg';
  img4.src = './././assets/carousel/puppers.jpg';
  img5.src = './././assets/carousel/sir.jpg';
  container.appendChild(leftButton);
  container.appendChild(imgArr);
  container.appendChild(rightButton);
  return container
}
const carouselParent = document.querySelector('.carousel-container');
carouselParent.appendChild(createCarousel())
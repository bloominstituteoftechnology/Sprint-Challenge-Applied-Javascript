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
const carousel1 = carouselFunction();
carouselContainer.appendChild(carousel1);



function carouselFunction(){
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton = document.createElement('div');
 
  const mountainImg = document.createElement('img');
  mountainImg.src= './assets/carousel/mountains.jpeg';

  const computerImg = document.createElement('img');
  mountainImg.src= './assets/carousel/computer.jpeg';

  const treesImg = document.createElement('img');
  mountainImg.src= './assets/carousel/trees.jpeg';

  const turnTableImg = document.createElement('img');
  mountainImg.src= './assets/carousel/turntable.jpeg';

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button')

  //events listener
  leftButton.addEventListener('click',event=>{

    mountainImg.classList.add('fade-out');

  });
  rightButton.addEventListener('click',event=>{
    carousel.classList.add('fade-out');
  });


  //append children to the parent

  carousel.appendChild(leftButton);
  carousel.appendChild(mountainImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turnTableImg);
  carousel.appendChild(rightButton);

  return carousel;
}
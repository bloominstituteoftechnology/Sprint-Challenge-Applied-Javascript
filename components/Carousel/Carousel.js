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

const carouselMaker = document.querySelector('carousel-container');

function (){
  const leftButton = document.createElement('div'); 
  leftButton.classList.add('left-button');
  leftButton.textContent = 'carousel-left';
  
  const slidesDiv = document.createElement('div');
  slidesDiv.textContent = 'slides';


  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.textContent = 'carousel-right'; 


}

// Images Array

images[0] = 'assets/carousel/computer.jpeg';
images[1] = 'assets/carousel/mountains.jpeg';
images[2] = 'assets/carousel/trees.jpeg';
images[3] = 'assets/carousel/turntable.jpeg';
// implement timed shift of imgs
function shiftImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){
    i++; }  
    else {
      i = 0;
    }
    setTimeout('shiftImg()', 1000);
  }

window.onload = shiftImg;
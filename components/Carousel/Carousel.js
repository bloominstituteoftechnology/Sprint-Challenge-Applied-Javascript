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

class CreateCarousel {
  constructor(array) {
    const mainDiv = document.createElement('div');
    const btnDivL = document.createElement('div');
    const btnDivR = document.createElement('div');

    mainDiv.appendChild(btnDivL);

    array.forEach((source)=>{
      const newImage = document.createElement('img');
      newImage.src = source;
      mainDiv.appendChild(newImage);

      return newImage
    })

    mainDiv.appendChild(btnDivR);

    mainDiv.classList.add('carousel');
    btnDivL.classList.add('left-button');
    btnDivR.classList.add('right-button');

    btnDivL.textContent = 'U+1f878';
    btnDivR.textContent = 'U+1f87a';

    return mainDiv;
  }
}

const srcArray = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg']


function appendCarousel(array) {
  const carousel = new CreateCarousel(array);
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.appendChild(carousel);
}

appendCarousel(srcArray);

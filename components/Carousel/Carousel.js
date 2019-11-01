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

const carouselCont = document.querySelector('.carousel-container');

const carouselImgs = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"];

let carousel = Carousel(carouselImgs, 0);

carouselCont.appendChild(carousel);
// carouselCont.appendChild(Carousel());

function Carousel(imgs, indx){
  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const imgOne = document.createElement('img');
  const imgTwo = document.createElement('img');
  const imgThree = document.createElement('img');
  const imgFour = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.appendChild(leftButton);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  imgOne.src = imgs[indx];
  imgTwo.src = imgs[(indx + 1)%3];
  imgThree.src = imgs[(indx + 2)%3];
  imgFour.src = imgs[(indx + 3)%3];

  
  leftButton.addEventListener('click', () => {
    changeIndex(-1);
  })

  rightButton.addEventListener('click', () => {
    changeIndex(1);
  })

  return carousel;
}

const imageElements = document.querySelectorAll('.carousel-container img');
imageElements.forEach(imgEl => {
  imgEl.style.display = 'block';
})

// carousel button functionality

let i = 0;

function changeIndex(delta){
  i += delta;

  if(i === -1){
    i = 3;
  }
  if (i === 4){
    i = 0;
  }

  carouselCont.removeChild(carousel);
  carousel = Carousel(carouselImgs, i);
  carouselCont.appendChild(carousel);

  const imgEls = document.querySelectorAll('.carousel-container img');
    imgEls.forEach(imgEl => {
      imgEl.style.display = 'block';
  })
}



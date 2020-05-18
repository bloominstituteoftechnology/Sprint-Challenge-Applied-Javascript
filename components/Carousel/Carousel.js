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

function Carousel() {
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const rightButton = document.createElement('div')
  const imageOne = document.createElement('img')
  const imageTwo = document.createElement('img')
  const imageThree = document.createElement('img')
  const imageFour = document.createElement('img')

  carousel.appendChild(leftButton)
  carousel.appendChild(rightButton)
  carousel.appendChild(imageOne)
  carousel.appendChild(imageTwo)
  carousel.appendChild(imageThree)
  carousel.appendChild(imageFour)

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  leftButton.textContent = '<'
  rightButton.textContent = '>'

  imageOne.src = './assets/carousel/mountains.jpeg'
  imageTwo.src = './assets/carousel/computer.jpeg'
  imageThree.src = './assets/carousel/trees.jpeg'
  imageFour.src = './assets/carousel/turntable.jpeg'

  return carousel;
}

const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.append(Carousel());

const images = document.querySelectorAll('img');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let index = 0;
images[index].style.display = 'block';

leftButton.addEventListener('click', () => {
  images[index].style.display = 'none';
  if (index === 0) {
    index = images.length - 1
  } else {
    index--
  }
  images[index].style.display = 'block';
});

rightButton.addEventListener('click', () => {
  images[index].style.display = 'none';
  if (index === images.length - 1) {
    index = 0
  } else {
    index++
  }
  images[index].style.display = 'block';
});
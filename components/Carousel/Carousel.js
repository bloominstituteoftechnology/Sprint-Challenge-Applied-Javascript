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

// let imgSources = [
//   './assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'

// ]

function createViewer(img1, img2, img3, img4) {
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const imgOption1 = document.createElement('img')
  const imgOption2 = document.createElement('img')
  const imgOption3 = document.createElement('img')
  const imgOption4 = document.createElement('img')
  const rightButton = document.createElement('div')

  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  leftButton.textContent = '<'
  imgOption1.src = img1
  imgOption2.src = img2
  imgOption3.src = img3
  imgOption4.src = img4
  rightButton.textContent = '>'

  carousel.append(leftButton, imgOption1, imgOption2, imgOption3, imgOption4, rightButton)

  return carousel
}

const carouselComponent = createViewer('./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg')

const carouselEntryPoint = document.querySelector('carousel-container')
cardEntryPoint.appendChild(carouselComponent)

//having 1st image show as default on load
const imgSelector = document.querySelectorAll('.carousel > img')
window.addEventListener('load', (event) => {
  imgSelector[0].style.display = 'block';
})

//adding functionality to scroll through images to the right
let imgRight = document.querySelector('.right-button')
let imgLeft = document.querySelector('.left-button')

imgRight.addEventListener('click', (event) => {
  if (imgSelector[0].style.display = 'block') {
    imgSelector[0].style.display = 'none'
    imgSelector[1].style.display = "block"
  }
  if (imgSelector[1].style.display = 'block') {
    imgSelector[1].style.display = 'none'
    imgSelector[2].style.display = "block"
  }
})

imgLeft.addEventListener('click', (event) => {
  if (imgSelector[1].style.display = 'block') {
    imgSelector[0].style.display = 'block'
    imgSelector[1].style.display = "none"
  }
  if (imgSelector[1].style.display = 'block') {
    imgSelector[1].style.display = 'none'
    imgSelector[2].style.display = "block"
  }
})




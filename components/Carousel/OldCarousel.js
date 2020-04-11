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

const carouselContainer = document.querySelector('.carousel-container')

const imgList = document.querySelectorAll('img')
console.log(imgList)


const displayTheCarousel = () => {
// <div class="carousel-container"> -- Attach the carousel to this element
  // const carouselContainer = document.querySelector('.carousel-container')
/**********************************************************/ 

// Element variables
  const carousel = document.createElement('div')
  const leftButton = document.createElement('div')
  const mountains = document.createElement('img')
  const computer = document.createElement('img')
  const trees = document.createElement('img')
  const turntable = document.createElement('img')
  const rightButton = document.createElement('div')

// Source values for all the carousel images
  const imgMountains = './assets/carousel/mountains.jpeg'
  const imgComputer = './assets/carousel/computer.jpeg'
  const imgTrees = './assets/carousel/trees.jpeg'
  const imgTurntable = './assets/carousel/turntable.jpeg'

// Add property values and event listeners to the appropriate elements
  carousel.classList.add('carousel')
  leftButton.classList.add('left-button')
  mountains.setAttribute('src', imgMountains)
  computer.setAttribute('src', imgComputer)
  trees.setAttribute('src', imgTrees)
  turntable.setAttribute('src', imgTurntable)
  rightButton.classList.add('right-button')

// All of the carousel elements are to be enclosed in one div with the class of carousel
  carousel.appendChild(leftButton)
  carousel.appendChild(mountains)
  carousel.appendChild(computer)
  carousel.appendChild(trees)
  carousel.appendChild(turntable)
  carousel.appendChild(rightButton)

// Define event handlers for the buttons
  const moveLeft = () => {
    // Get a list of the images in the carousel
    // imgList.forEach(img => {
    //   console.log(img.src)
    // })
    // mountains
    imgList[1].style = 'display:block'
    console.log(imgList[1].style.display)
    // computer
    // trees
    // turntable
  }
  const moveRight = () => {
    // const imgList = carousel.querySelectorAll('img')
    if (imgList[1].style.display) {
      imgList[1].style.display = null
    }
  }

// Add click event listeners to the left and right buttons
  leftButton.addEventListener('click', moveLeft)
  rightButton.addEventListener('click', moveRight)

  carouselContainer.appendChild(carousel)
}

displayTheCarousel()


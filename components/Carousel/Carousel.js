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
const carouselSlider = document.querySelector('.carousel')


// function animation(){
//   carouselSlider.classList.toggle = 'animate__animated, animate__fadeIn'

//   console.log('Animation')
 
// }



function carousel() { 
  const carousel = document.createElement('div')
  carousel.classList = 'carousel'
   
  

  carousel.innerHTML +=`
    <div class="left-button"> < </div>
    <img  src="./assets/carousel/mountains.jpeg" />
    <img  src="./assets/carousel/computer.jpeg" />
    <img  src="./assets/carousel/trees.jpeg" />
    <img  src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  `
  return carousel

}

carouselContainer.appendChild(carousel())

const leftButton = document.querySelector('.left-button')
const rightButton = document.querySelector('.right-button')
const sliderImages = document.querySelectorAll('img')
let current = 0

function resetImages(){
  for(let i = 0; i < sliderImages.length; i++){
    
      sliderImages[i].style.display = 'none'
      
  }
  
}

// Slider Init

function startSlide() {
  resetImages()
  sliderImages[0].style.display = 'block'
 
}

function sliderLeft(){
  resetImages()
  sliderImages[current -1 ].style.display = 'block'
  current --
}

leftButton.addEventListener('click', () => {
  
  if(current === 0) {
    current = sliderImages.length
   
  }
  
  sliderLeft()
  
})



function slideright(){
  resetImages()
  
  
  sliderImages[current + 1].style.display = 'block'

 
  
  
  
  current ++
}




rightButton.addEventListener('click', () => {
  
 

  if(current === sliderImages.length - 1) {
    current = -1
  }

  slideright()
})

startSlide()




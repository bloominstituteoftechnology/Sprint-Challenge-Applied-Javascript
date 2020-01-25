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
let carouselIndex = 0


function carouselLeftButton() {
  let prevIndex = carouselIndex
  carouselIndex = carouselIndex - 1
  
  if (carouselIndex < 0) {
    carouselIndex = 3
  }
  const carouselImages = document.querySelector(".carousel").getElementsByTagName("img")
  carouselImages[prevIndex].style.display = "none"
  carouselImages[carouselIndex].style.display = "block"

}

function carouselRightButton() {
  let prevIndex = carouselIndex
  carouselIndex = carouselIndex + 1
  
  if (carouselIndex > 3) {
    carouselIndex = 0
  }
  const carouselImages = document.querySelector(".carousel").getElementsByTagName("img")
  carouselImages[prevIndex].style.display = "none"
  carouselImages[carouselIndex].style.display = "block"

}


function createCarousel() {
  const carouselDiv = createElement("div", undefined, "class", "carousel")
  const leftDiv = createElement("div", undefined, "class", "left-button")
  leftDiv.addEventListener("click", carouselLeftButton)
  const rightDiv = createElement("div", undefined, "class", "right-button")
  rightDiv.addEventListener("click", carouselRightButton)
  const imgs = ["./assets/carousel/turntable.jpeg","./assets/carousel/trees.jpeg","./assets/carousel/computer.jpeg","./assets/carousel/mountains.jpeg"]
  const imgArr = imgs.map((img, i) => {
    const imgElement = createElement("img", undefined, "src", img)
    if (i === 0) {
      imgElement.style.display = "block"
    }
    return imgElement
  })
  carouselDiv.appendChild(leftDiv)
  imgArr.forEach((img) => carouselDiv.appendChild(img))
  carouselDiv.appendChild(rightDiv)
  return carouselDiv  
}

document.querySelector(".carousel-container").appendChild(createCarousel())


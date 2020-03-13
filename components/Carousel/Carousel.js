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

let currentDisplay = 0;


createCarousel = () => {
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");

  const leftButtonDiv = document.createElement("div");
  leftButtonDiv.classList.add("left-button");
  leftButtonDiv.addEventListener("click", event => {
    images[currentDisplay].style.display = "none";
    if (currentDisplay == 0) {
      currentDisplay = images.length-1;
    } else {
      currentDisplay --
    }
    images[currentDisplay].style.display = "block"
  })

  
  carouselDiv.appendChild(leftButtonDiv);

  const carouselImg1 = document.createElement("img");
  carouselImg1.setAttribute("src", "./assets/carousel/mountains.jpeg")
  

  carouselDiv.appendChild(carouselImg1);

  const carouselImg2 = document.createElement("img");
  carouselImg2.setAttribute("src", "./assets/carousel/computer.jpeg");
  carouselDiv.appendChild(carouselImg2);

  const carouselImg3 = document.createElement("img");
  carouselImg3.setAttribute("src", "./assets/carousel/trees.jpeg")
  carouselDiv.appendChild(carouselImg3);

  const carouselImg4 = document.createElement("img");
  carouselImg4.setAttribute("src", "./assets/carousel/turntable.jpeg")
  carouselDiv.appendChild(carouselImg4);

  const rightButtonDiv = document.createElement("div");
  rightButtonDiv.classList.add("right-button");
  carouselDiv.appendChild(rightButtonDiv)
  rightButtonDiv.addEventListener("click", event => {
   // images[currentDisplay].style.display = "none";
   gsap.to(images[currentDisplay], {duration: .5, x: images[currentDisplay].width});

    if (currentDisplay == images.length-1) {
      currentDisplay = 0;
    } else {
      currentDisplay ++
    }
    
    //images[currentDisplay].style.left -= images[currentDisplay].width * 2
    images[currentDisplay].style.display = "block"
   // gsap.to(images[currentDisplay], {duration: .5, x: images[currentDisplay].width});
  })


  const images = [carouselImg1, carouselImg2, carouselImg3, carouselImg4]

  images[currentDisplay].style.display = "block"

  return carouselDiv
}

let carouselParent = document.querySelector("div.carousel-container");

carouselParent.appendChild(createCarousel());



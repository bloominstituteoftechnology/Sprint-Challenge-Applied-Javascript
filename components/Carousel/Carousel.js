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
const carDiv = document.createElement("div");
carDiv.classList.add("carousel");

const leftBtn = document.createElement("div");

const image1 = createElement("img");
image1.src = "./assets/carousel/mountains.jpeg";

const image2 = createElement("img");
image2.src = "./assets/carousel/computer.jpeg";

const image3 = createElement("img");
image3.src = "./assets/carousel/trees.jpeg";

const image4 = createElement("img");
image4.src = "./assets/carousel/turntable.jpeg";

const rightBtn = createElement("div");
rightBtn.classList.add("right-button");

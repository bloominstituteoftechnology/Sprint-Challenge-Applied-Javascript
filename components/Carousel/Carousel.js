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
// */

function CarouselComonent() {
  const carousel = document.createElement("div");
  const leftBtn = document.createElement("div");
  const rightBtn = document.createElement("div");
  const img_1 = document.createElement("img");
  const img_2 = document.createElement("img");
  const img_3 = document.createElement("img");
  const img_4 = document.createElement("img");

  // add the class names (Styles)
  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");

  // put the content
  leftBtn.textContent = "<";
  rightBtn.textContent = ">";
  // img_1.src =  ;
  // img_2.src = '';
  // img_3.src = '';
  // img_4.src = '';

  carousel.appendChild(leftBtn);
  carousel.appendChild(img_1);
  carousel.appendChild(img_2);
  carousel.appendChild(img_3);
  carousel.appendChild(img_4);
  carousel.appendChild(rightBtn);

  // toggleBtn(leftBtn);
  // toggleBtn(rightBtn);
  return carousel;
}

// function toggleBtn(btn , imgs){

//   btn.addEventListener('click',() => {
//     while(true){
//       img[dataset]
//     } .
//   })
// }
// console.log(CarouselComonent())



const carouselContainer = document.querySelector('.carousel-container').appendChild(CarouselComonent());
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

  const carousel = document.createElement('div');
  const leftButton = document.createElement('div');
  const mountainImg = document.createElement('img');
  const computerImg = document.createElement('img');
  const treesImg = document.createElement('img');
  const turntableImg = document.createElement('img');
  const rightButton = document.createElement('div');

  carousel.appendChild(leftButton);
  carousel.appendChild(mountainImg);
  carousel.appendChild(computerImg);
  carousel.appendChild(treesImg);
  carousel.appendChild(turntableImg);
  carousel.appendChild(rightButton);

  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  mountainImg.setAttribute('src', "./assets/carousel/mountains.jpeg");
  computerImg.setAttribute('src', "./assets/carousel/computer.jpeg");
  treesImg.setAttribute('src', "./assets/carousel/trees.jpeg");
  turntableImg.setAttribute('src', "./assets/carousel/turntable.jpeg");
  rightButton.classList.add('right-button');

  carouselContainer = document.querySelector('.carousel-container');

  carouselContainer.appendChild(carousel);

  imgArr = [mountainImg, computerImg, treesImg, turntableImg];


  // this doesn't work, apparently transitions don't workfor the display property, need to find a workaround
  
/*   imgArr.forEach((img) => {
    img.style.transition = "display 2s ease 2s"
    console.log(img.style);
  });
 */
  let index = 0;

  imgArr[index].style.display = "flex";

  index++; // this is necessary to make this code work and I don't know why :'(

  leftButton.addEventListener("click", () => {
    let absIndex = Math.abs(index);
    index++;
    console.log(absIndex % 4);
    imgArr.forEach((img) => img.style.display = "none");
    imgArr[absIndex % 4].style.display = "flex";
  });
  rightButton.addEventListener("click", () => {
    let absIndex = Math.abs(index);
    index++;
    console.log(absIndex % 4);
    imgArr.forEach((img) => img.style.display = "none"); 
    imgArr[absIndex % 4].style.display = "flex";
  });

  return carousel;

}

Carousel();

//Array.from(document.querySelectorAll('img')).forEach((img) => img.style.display = "flex");
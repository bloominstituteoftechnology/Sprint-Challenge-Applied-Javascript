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
// Creating Image Array:

const imgArray = [
  './assets/carousel/computer.jpeg',
  './assets/carousel/mountains.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
];

// Creating carousel Parent:

const carouselCont = document.querySelector('.carousel-container');

// Creating carousel component:

function Carousel(array) {
  // Creating variables:
 const carousel = document.createElement('div'),
  carouselLeft = document.createElement('div'),
  carouselRight = document.createElement('div');

  // Adding classes:
  carousel.classList.add('carousel');
  carouselLeft.classList.add('left-button');
  carouselRight.classList.add('right-button');

  // Appending Children:
  carousel.appendChild(carouselLeft);
  carousel.appendChild(carouselRight);

  // Creating rotating image component:
  let i = 0;
  const newImg = document.createElement('img');
  newImg.src = array[i];
  newImg.style.display = 'block';
  carousel.append(newImg);

  carouselLeft.onclick = function() {
    if(i > 0) {  
      i -= 1;
      newImg.src = array[i];
    } else {
      i = array.length - 1;
      newImg.src = array[i];
    }
  };

  carouselRight.onclick = function() {
    if(i < array.length - 1) {
      i += 1;
      newImg.src = array[i];
    } else {
      i = 0;
      newImg.src = array[i];
    }
  };
  // Adding content:
  carouselLeft.textContent = ' < ';
  carouselRight.textContent = ' > ';

  // Returning Carousel:
  console.log(carousel);
  return carousel;
}
carouselCont.append(Carousel(imgArray));

//
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
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

  // create all elements and create structure
  const carouselContainer = document.createElement('div');
  const image1 = carouselContainer.appendChild(document.createElement('img'));
  const image2 = carouselContainer.appendChild(document.createElement('img'));
  const image3 = carouselContainer.appendChild(document.createElement('img'));
  const image4 = carouselContainer.appendChild(document.createElement('img'));
  const leftButton = carouselContainer.appendChild(document.createElement('div'));
  const rightButton = carouselContainer.appendChild(document.createElement('div'));

  // set the content
  image1.src = "./assets/carousel/mountains.jpeg";
  image1.style.display = "block";
  image2.src = "./assets/carousel/computer.jpeg";
  image3.src = "./assets/carousel/trees.jpeg";
  image4.src = "./assets/carousel/turntable.jpeg";
  const imageArray = [image1, image2, image3, image4];

  // apply styles
  carouselContainer.classList.add('carousel');
  leftButton.classList.add('left-button');
  leftButton.textContent = "<";
  rightButton.classList.add('right-button');
  rightButton.textContent = ">";


  //Add functionality
  let currIndex = 0;

  const showNewImage = (photo, index) => {
    if (currIndex === index) {
      photo.style.display = "block";
    } else {
      photo.style.display = "none";
    };
  };

  //added click event listner for the left button
  leftButton.addEventListener('click', event => {
    if (currIndex === 3) {
      currIndex = 0;
    } else {
      currIndex += 1;
      imageArray.forEach(showNewImage)
    };
  });

  //added click event listner for the right button
  rightButton.addEventListener('click', event => {
    if (currIndex === 0) {
      currIndex = 3;
    } else {
      currIndex -= 1;
      imageArray.forEach(showNewImage)
    };
  });

  return carouselContainer;
};

const insertCarousel = document.querySelector('.carousel-container');
insertCarousel.appendChild(Carousel());
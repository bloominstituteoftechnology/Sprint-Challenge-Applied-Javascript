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

//Parent container element reference
const carouselContainer = document.querySelector('.carousel-container');

//Images we want to use in our carousel
const images = [
  './assets/carousel/mountains.jpeg',
  './assets/carousel/computer.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg'
]

//Current image index, changed by right & left buttons.
//Start at end of array because that's how the elements are setup on creation in our Carousel component
let imageIndex = images.length - 1;

//Append our Carousel to the container (DOM)
carouselContainer.appendChild(Carousel(images));

//Get refs to buttons 
const leftBtn = document.querySelector('.left-button');
const rightBtn = document.querySelector('.right-button');
const carouselImg = document.querySelector('.carousel img');

//When left button is clicked, decrease index value.
//If value is already 0, loop to other end so it's infinite
leftBtn.addEventListener('click', e => {
  if (imageIndex === 0) {
    imageIndex = images.length - 1;
  } else {
    imageIndex--;
  }
  changeCarouselImage();
});


//When right button is clicked, increase index value.
//If value is already 0, loop to other end so it's infinite
rightBtn.addEventListener('click', e => {
  if (imageIndex === images.length - 1) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  changeCarouselImage();
});


//function to change the carousel image based on image index.
function changeCarouselImage() {
  //NodeList of ALL carousel images in DOM, this way our imageindex will map to the correct image tag
  const showcaseImages = document.querySelectorAll('.carousel img');

  //Current image on display (has an ID of 'active')
  const currentShowcaseImg = document.getElementById('active');

  //Set our new image to display to be the one pointed to by imageIndex
  const newShowcaseImg = showcaseImages[imageIndex];

  //Clear old img ID and set new img ID so we can maintain knowledge of which image is currently being showcased
  currentShowcaseImg.id = "";
  newShowcaseImg.id = "active";

  //Transition visibility from old image to new image with greensock
  //By default all images are stacked on eachother but their opacity is 0.carousel
  //So to change what image is rendered we just transition the opacity!
  TweenLite.to(currentShowcaseImg, 1.5, { opacity: 0 });
  TweenLite.to(newShowcaseImg, 1.5, { opacity: 1 });

  //Debug
  // console.log(showcaseImages);
  // console.log(currentShowcaseImg);
  // console.log(newShowcaseImg);
}

//Carousel component, makes the required divs and buttons to get a static carousel that will be made dynamic via button events
//and code from above
function Carousel(images) {
  //Container element
  const carousel = document.createElement('div');
  carousel.className = 'carousel';

  //Left button element
  const leftBtn = document.createElement('div');
  leftBtn.className = 'left-button';

  //Without this, the left button fades away as the image fades in....
  leftBtn.style.zIndex = '1';

  carousel.appendChild(leftBtn);

  //Create and append images for each image we have supplied the Carousel function
  images.forEach(imageSrc => {
    const img = document.createElement('img');
    img.setAttribute('src', imageSrc);

    //Default set these to display block and opacity 0 so they are invisible
    //Position absolute so they stack on eachother
    img.style.display = 'block';
    img.style.position = 'absolute';
    img.style.opacity = '0';

    carousel.appendChild(img);
  })

  //Get our initial showcase image
  const showcaseImg = carousel.querySelectorAll('img')[images.length - 1];

  //Set its ID to active so we can change images later
  showcaseImg.id = "active";

  //Initial transition on page load, looks fancy
  TweenLite.to(showcaseImg, 2, { opacity: 1 });

  carousel.appendChild(showcaseImg);

  //Add right button
  const rightBtn = document.createElement('div');
  rightBtn.className = 'right-button';

  //Since only the left button has the bug, no harm in applying the fix to the right button.
  rightBtn.style.zIndex = '1';

  //Append all our elements to carousel
  carousel.appendChild(rightBtn);

  return carousel;
}






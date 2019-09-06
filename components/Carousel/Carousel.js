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

const carousel = document.querySelector('.carousel-container');

function makeCarousel(){
  // CREATE ELEMENTS
  const
    carouselMain = document.createElement('div'),
    lBtn = document.createElement('div'),
    mountains = document.createElement('img'),
    computer = document.createElement('img'),
    trees = document.createElement('img'),
    turntable = document.createElement('img'),
    rBtn = document.createElement('div');

  // ADD CLASSES
  carouselMain.classList.add('carousel');
  lBtn.classList.add('left-button');
  rBtn.classList.add('right-button');

  // ADD CONTENT
  lBtn.textContent = `\u02C2`;
  mountains.src = `./assets/carousel/mountains.jpeg`;
  computer.src = `./assets/carousel/computer.jpeg`;
  trees.src = `./assets/carousel/trees.jpeg`;
  turntable.src = `./assets/carousel/turntable.jpeg`;
  rBtn.textContent = `\u02C3`;

  // APPEND
  carouselMain.appendChild(lBtn);
  carouselMain.appendChild(mountains);
  carouselMain.appendChild(computer);
  carouselMain.appendChild(trees);
  carouselMain.appendChild(turntable);
  carouselMain.appendChild(rBtn);

  // MAKE ARRAY OF PICTURES
  const carouselImages = new Array;
  carouselImages[0] = mountains;
  carouselImages[1] = computer;
  carouselImages[2] = trees;
  carouselImages[3] = turntable;

  // EVENT LISTENERS
  
    // const slideIndex = 1;
    // showSlides(slideIndex)
  // let i= 0;
  
    do{
      lBtn.addEventListener('click', e => {
      carouselImages[i].style.display = 'flex';
      i++;
      })
    }
    while(i < carouselImages.length)
  


    // for(let i = 0; i < carouselImages.length; i++){
    
    //   if(i < carouselImages.length){
    //     lBtn.addEventListener('click', e => {
    //     carouselImages[i].style.display = 'flex';
    //     carouselImages[i].style.width = '50%'
    //     })
    //   }
    //     // return carouselImages[i + 1]; 
    //   // }else if(i = carouselImages.length){
    //   //   return carouselImages[i - 3];
    //   }
    
    
  



  // RETURN
  return carouselMain;
}

carousel.appendChild(makeCarousel());
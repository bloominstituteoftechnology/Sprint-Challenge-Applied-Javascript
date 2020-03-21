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

function carousel() {

  const carouselContainer = document.querySelector('.carousel-container');
  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');
  carouselContainer.appendChild(carouselDiv);

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');
  leftButton.addEventListener('click', () => {
    let images = document.querySelectorAll('.images');
    let imgArray = Array.from(images);
    if(imgArray[1].style.display == 'block'){
      document.images[1].style.display = 'none';
      document.images[0].style.display = 'block';
    }
  })
  carouselDiv.appendChild(leftButton);

  const imgs = ['.assets/carousel/mountains.jpeg','./assets/carousel/computer.jpeg','./assets/carousel/trees.jpeg','./assets/carousel/turntable.jpeg'];

  function img(imgarray) {
    imgarray.forEach((el) => {
      const img = document.createElement('img');
      img.src = el;
      img.classList.add('images');
      carouselDiv.appendChild(img);
      if(el === './assets/carousel/mountains.jpeg') {
        img.style.display = 'block';
      }
    });
  }
  img(imgs);

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');
  rightButton.addEventListener('click', () => {
    let images = document.querySelectorAll('images');
    let imgArray = Array.from(images);
    if(imgArray[0].style.display == 'block') {
      document.images[0].style.display = 'none';
      document.images[1].style.display = 'block';
    }
  });

  carouselDiv.appendChild(rightButton)

    return carouselDiv;

  }

  carousel();
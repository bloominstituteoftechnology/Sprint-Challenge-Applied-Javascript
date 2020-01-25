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

    //Create Carousel
    const carousel = document.createElement('div');
    const leftButton = document.createElement('div');
    const container1 = document.createElement('div');
    const img1 = document.createElement('img');
    const container2 = document.createElement('div');
    const img2 = document.createElement('img');
    const container3 = document.createElement('div');
    const img3 = document.createElement('img');
    const container4 = document.createElement('div');
    const img4 = document.createElement('img');
    const rightButton = document.createElement('div');

    //Add classList
    carousel.classList.add('carousel');
    leftButton.classList.add('left-button');
    img1.classList.add('img')
    img2.classList.add('img');
    img3.classList.add('img');
    img4.classList.add('img');
    rightButton.classList.add('right-button');

    //Add image source
    img1.src = (`${assets/carousel/mountains.jpeg}`);
    img2.src = (`${assets/carousel/computer.jpeg}`);
    img3.src = (`${cassets/carousel/trees.jpeg}`);
    img4.src = (`${assets/carousel/turntable.jpeg}`);

    //Append child
    container1.appendChild('img1');
    container2.appendChild('img2');    
    container3.appendChild('img3');    
    container4.appendChild('img4');
    carousel.appendChild('leftButton');
    carousel.appendChild('container1');
    carousel.appendChild('container2');
    carousel.appendChild('container3');
    carousel.appendChild('container4');
    carousel.appendChild('rightButton');
    const container = document.querySelector('.carousel-container');
    container.appendChild('carousel');
    
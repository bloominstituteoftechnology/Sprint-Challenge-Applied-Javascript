/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

// /* HTML:
//   <div class="carousel">
//     <div class="left-button"> < </div>
//     <img src="./assets/carousel/mountains.jpeg" />
//     <img src="./assets/carousel/computer.jpeg" />
//     <img src="./assets/carousel/trees.jpeg" />
//     <img src="./assets/carousel/turntable.jpeg" />
//     <div class="right-button"> > </div>
//   </div>
// */
// function createCarousel() { 
// //create elements
//   const carousel = document.createElement('div');
//   const leftButton = document.createElement('div');
//   const rightButton = document.createElement('div');
//   const img0 = document.createElement('img');
//   const img1 = document.createElement('img');
//   const img2 = document.createElement('img');
//   const img3 = document.createElement('img'); 
// // set classes 
// carousel.classList.add('carousel'); 
// leftButton.classList.add('left-button'); 
// rightButton.classList.add('right-button'); 

// //set content 

// img0.src = "./assets/carousel/mountains.jpeg"
// img1.src = "./assets/carousel/computer.jpeg"
// img2.src = "./assets/carousel/trees.jpeg"
// img3.src = "./assets/carousel/turntable.jpeg"

// //set structure 

// carousel.appendChild(leftButton); 
// carousel.appendChild(img0); 
// carousel.appendChild(img1); 
// carousel.appendChild(img2); 
// carousel.appendChild(img3); 
// carousel.appendChild(rightButton);  

// const imgArray = [img0, img1, img2, img3];
//   let currentIndex = 0;
//   img0.style.display = 'block';

//   // right button click event
//   rightButton.addEventListener('click', () => {
//     imgArray[currentIndex].style.display = 'none';
//     if (currentIndex === 3) currentIndex = 0;
//     else currentIndex += 1;
//     imgArray[currentIndex].style.display = 'block';
//   })

//   // left button click event
//   leftButton.addEventListener('click', () => {
//     imgArray[currentIndex].style.display = 'none';
//     if (currentIndex === 0) currentIndex = 3;
//     else currentIndex -= 1;
//     imgArray[currentIndex].style.display = 'block';
//   })

//   return carousel;
// }

// const carouselContainer = document.querySelector('.carousel-container');

// carouselContainer.appendChild(createCarousel());
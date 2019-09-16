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

function carouselMaker(){

  // create all elements
const carouselContainer = document.createElement('div');
const left =document.createElement('div');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img')
const right =document.createElement('div');

// create structure
carouselContainer.appendChild(left);
carouselContainer.appendChild(img1);
carouselContainer.appendChild(img2);
carouselContainer.appendChild(img3);
carouselContainer.appendChild(img4);
carouselContainer.appendChild(right);

// set the content
img1.src = "./assets/carousel/mountains.jpeg";
img2.src = "./assets/carousel/computer.jpeg";
img3.src = "./assets/carousel/trees.jpeg";
img4.src = "./assets/carousel/turntable.jpeg";

// apply styles
carouselContainer.classList.add('carousel');
left.classList.add('left-button');
right.classList.add('right-button');

const carouselImages = [img1, img2, img3, img4];
//------------------------>

 img1.style.display = 'inline';
 carouselImages.forEach(() => {
    right.addEventListener('click', () => {
      if(img1.style.display = 'inline'){
        img1.style.display = 'none';
        img2.style.display = 'inline'
       
      }else if ( img2.style.display = 'inline'){
        img2.style.display = 'none';
        img3.style.display = 'inline'
      
      }else if(img3.style.display = 'inline'){
        img3.style.display = 'none';
        img4.style.display = 'inline'
      }
    });
 });
//----------------------------->
//  img1.style.display = 'inline';
//  carouselImages.forEach(() => {
//     right.addEventListener('click', (event) => {
//       if(img1.style.display = 'inline'){
//         img1.style.display = 'none';
//         img2.style.display = 'inline'
//         event.stopPropagation();
//       };
//     });
//   });    
//   carouselImages.forEach(() => {
//     right.addEventListener('click', (event) => {
//        if ( img2.style.display = 'inline'){
//         img2.style.display = 'none';
//         img3.style.display = 'inline'
//         event.stopPropagation();
//       }
//     });
//   }); 

//   carouselImages.forEach(() => {
//     right.addEventListener('click', (event) => {
//        if(img3.style.display = 'inline'){
//         img3.style.display = 'none';
//         img4.style.display = 'inline'
//         event.stopPropagation();
//       }
//     });
//  });
//  carouselImages.forEach(() => {
//   right.addEventListener('click', (event) => {
//      if(img4.style.display = 'inline'){
//       img4.style.display = 'none';
//       img1.style.display = 'inline'
//       event.stopPropagation();
//     }
//   });
// });
return carouselContainer;
}
const carouselIma =document.querySelector('.carousel-container');
carouselIma.appendChild(carouselMaker())
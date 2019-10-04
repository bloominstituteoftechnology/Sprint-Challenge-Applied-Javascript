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


function Carouselfunc(data) {
//elements
const carousel1 = document.createElement('div');
const btnL = document.createElement('div');
const img = documents.createElement('img');
const btnR = document.createElement('div');


//structure of elements

carousel1.appendChild(btnL);
carousel1.appendChild(img);
carousel1.appendChild(btnR);


//class name

carousel1.classList.add('carousel');
btnL.classList.add('left-button');
btnR.classList.add('right-button');
img.classList.add('img');


return carousel1
}
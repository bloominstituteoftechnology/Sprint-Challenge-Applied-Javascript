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
let entryway = document.querySelector('.carousel-container')
const test = document.createElement('p')
entryway.append(test)  
test.textContent = "test"
function carouseller(){

  const bigDiv = document.createElement('div')
  const left = document.createElement('div')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')
  const img4 = document.createElement('img')
  const right = document.createElement('div')
  
  bigDiv.append(left, img1,img2,img3,img4,right)

  left.classList.add('left-button')
  bigDiv.classList.add('carousel')
  right.classList.add('right-button')

  img1.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80'
  img2.src = 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  img3.src = 'https://images.unsplash.com/photo-1587502537745-84b86da1204f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
  img4.src = 'https://images.unsplash.com/photo-1472715148636-92e348325950?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'

  return bigDiv
}
entryway.append(carouseller())
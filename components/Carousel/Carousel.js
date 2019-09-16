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

class Carousel {
  carousel = (function(){
    var box = document.querySelector('.carousel');
    var next = box.querySelector('.left-button');
    var prev = box.querySelector('.right-button');
    var items = box.querySelectorAll('.carousel img');
    var counter = 0;
    var amount = items.length;
    var current = items[0];

    function navigate(direction) {
      current.classList.remove('current');
      counter = counter + direction;
      if (direction === -1 && 
          counter < 0) { 
        counter = amount - 1; 
      }
      if (direction === 1 && 
          !items[counter]) { 
        counter = 0;
      }
      current = items[counter];
      current.classList.add('current');
    }
    next.addEventListener('click', function(ev) {
      navigate(1);
    });
    prev.addEventListener('click', function(ev) {
      navigate(-1);
    });
    navigate(0);
  })(); 
}


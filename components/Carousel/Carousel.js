class Carousel {

}

// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

carousel = (function(){
    var box = document.querySelector('.carousel');
    var next = box.querySelector('.left-button');
    var prev = box.querySelector('.right-button');
    var items = box.querySelectorAll('.carousel img');
    var counter = 0;
    var amount = items.length;
    var current = items[0];
    
    // current.add('active');

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
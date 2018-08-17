class Carousel {
    constructor(carousel){
        this.element = carousel;
        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.carouselImgs = document.querySelectorAll('.carousel img');
  
        this.carouselImgs = Array.from(this.carouselImgs).map( carouselImg => new CarouselImgs(carouselImg));

        this.leftButton.addEventListener('click', (e) => {
            console.log("Heard click event on left button");
            this.goLeft();
        });

        this.rightButton.addEventListener('click', (e) => {
            console.log("Heard click event on right button");
            this.goRight();
        });
    }

    goLeft() {
        console.log("Going left.");

    }

    goRight() {
        console.log("Going right.");

    }
  
    selectTab(){
      console.log(`Selecting tab ${this.element.dataset.tab}`);
      // Select all elements with the .tab class on them
      const tabs = document.querySelectorAll('.tab');
      // Iterate through the NodeList removing the .active-tab class from each element
      tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
      });
      // Add a class of ".active-tab" to this.element
      this.element.classList.add('active-tab');
  
      // Select all of the elements with the .card class on them
      const cards = document.querySelectorAll('.card');
      // Iterate through the NodeList setting the display style each one to 'none'
      cards.forEach(function(card) {
        card.style.display = "none";
      });
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class, nothing to update here
      this.cards.forEach(card => card.selectCard());
    }
  }
  
  class CarouselImgs {
    constructor(carouselImg){
      this.element = carouselImg;
    }
    
    displayCarouselImg(){
        d
        this.element.style.display = 'block';
    }
  }

let carousel = document.querySelector('.carousel');
carousel = Array.from(carousel).map( carousel => new Carousel(carousel));

carousel[0].displayCarouselImg();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
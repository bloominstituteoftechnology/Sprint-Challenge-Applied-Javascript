class Carousel {
  constructor(element) {
    this.element = element;
    this.slides = document.querySelectorAll(".carousel img");
    this.slideArray = Array.from(this.slides);

    this.total = this.slideArray.length;
    console.log(this.total);
    this.counter = 0;
    this.leftButton = document.querySelector(".left-button");
    this.rightButton = document.querySelector(".right-button");

    this.leftButton.addEventListener("click", () => {
      --this.counter;
      this.toggle();
      return this.counter;
    });

    this.rightButton.addEventListener("click", () => {
      ++this.counter;
      toggle();

      return this.counter;
    });

    this.currentImg = this.slideArray[this.counter];
    console.log(this.toggle);

    this.toggle = this.currentImg.toggleClass('show');
    
      }

    
  }

  

  

  
  




let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

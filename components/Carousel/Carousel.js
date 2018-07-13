class Carousel {
    constructor(element){
        this.element = element;
        this.images = document.querySelectorAll(".slide-image");
        this.images = Array.from(this.images).map(image => {
            return new SlideImage(image);
        });
        this.activeImg = this.images[0];
        this.init();

        this.rightButton = this.element.querySelector(".right-button");
        this.leftButton = this.element.querySelector(".left-button");
    }

    init() { 
        this.activeImg.select();
      }

    updateActive(newActive) {
        this.activeImg.deselect();
        this.activeImg = newActive;
      }

    getImg(data) {
        return this.element.querySelector(`.slide-image[data-tab="${data}"]`);
      }
      
    
}

    class SlideImage {
        constructor(element){
            this.element = element;
        }
        select() {
            this.element.style.display = "block";
          }
        
        deselect() {
            this.element.style.display = "none";
          }
    }

let carousel = document.querySelectorAll(".carousel");
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
class Carousel {
    constructor(element) {
      this.element = element;
      this.images = Array.from(element.querySelectorAll("img")).map(image => new Image(image));
      // grab a reference to the carousel, and in it grab the laft and right buttons 
      this.currentImage = this.images[0];
      // Create a current index
      this.currentImageIndex = 0;
      this.lButton = element.querySelector(".left-button");
      this.rButton = element.querySelector(".right-button");
      // click handler
      this.lButton.addEventListener("click", () => {
        if (this.currentImageIndex > 0) {
          this.currentImageIndex -= 1;
        } else {
          this.currentImageIndex = 3;
        }
        this.currentImage.deselectimage();
        this.currentImage = this.images[this.currentImageIndex];
        this.currentImage.selectimage();
      });

      // click handler
      this.rButton.addEventListener("click", () => {
        if (this.currentImageIndex === 3) {
          this.currentImageIndex = 0;
        } else {
          this.currentImageIndex += 1;
        }
        this.currentImage.deselectimage();
        this.currentImage = this.images[this.currentImageIndex];
        this.currentImage.selectimage();
      });
      this.currentImage.selectimage();
    }
  }
  
  class Image {
    constructor(element) {
      this.element = element;
    }
  
    selectimage(){
      this.element.style.display = "block";
    }
    deselectimage(){
      this.element.style.display = "none";;
    }
  }
  
  const carousel = document.querySelector(".carousel");
  
  carousel = new Carousel(carousel);
  
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons // DONE
    2. You will need to grab a reference to all of the images // DONE
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
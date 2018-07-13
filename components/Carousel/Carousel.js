class Carousel {
    constructor(element){
        this.element = element;
        this.images = document.querySelectorAll(".slide-image");
        this.images = Array.from(this.images).map(image => {
            return new SlideImage(image);
        });
        this.activeImg = this.images[0];
        this.init();

        this.rightButton = document.querySelector(".right-button").addEventListener("click", () => {

        });
       
        this.leftButton = document.querySelector(".left-button").addEventListener("click", () => {
            
        });
    }

    init() { 
        this.activeImg.select();
      }
    
    previousImage(data) {      
        this.activeImg.deselect();

        let lastIndex = this.images.length - 1;
            if(data < 0) {
            data = lastIndex;
            }

            this.activeImg = this.images[data];
            if(this.images[data] === undefined) {
                    
            this.activeImg = this.images[lastIndex];
                    
            this.activeImg.select();
                   
        return data;
    }
                
        this.activeImg.select();
        return data -= 1;
    }

    nextImage(data) {
        this.activeImg.select();
        this.activeImg = this.images[data];

            if(this.images[data] === undefined) {
                this.activeImg = this.images[0];
                data = 1;
                this.activeImg.select();

                return data;
            }

        this.activeImg.select();
        return data += 1;
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
class Carousel {
    constructor(carouselBanana){
      this.carouselBanana = carouselBanana;
      this.imgItem = this.carouselBanana.querySelectorAll("img");
      this.num = 0;
      this.activeImg = this.imgItem[`${this.num}`];

      this.leftBtn = this.carouselBanana.querySelector(".left-button");
      this.rightBtn = this.carouselBanana.querySelector(".right-button")
      
      this.activeImg.style.display = "block";
  
      this.rightBtn.addEventListener("click",()=> this.right())
      this.leftBtn.addEventListener("click",()=> this.left())
    }
    // metthods
    right() {
        this.imgItem[this.num].style.display = "none";
        
        this.num = this.num + 1;

        if (this.num > 3) {
            this.num = 0;
        }
        this.imgItem[this.num].style.display = "block";
        
    }
  
    left() {
        this.imgItem[this.num].style.display = "none";
        
        this.num = this.num - 1;

        if (this.num < 1) {
            this.num = 3;
        }
        this.imgItem[this.num].style.display = "block";
    }
  }
  
  let carousel = new Carousel(document.querySelector(".carousel"));
  
  
  
  /* If You've gotten this far, you're on your own! Although we will give you some hints:
      1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
      2. You will need to grab a reference to all of the images
      3. Create a current index
      4. Those buttons are gonna need some click handlers.
      5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
      6. Have fun!
  */
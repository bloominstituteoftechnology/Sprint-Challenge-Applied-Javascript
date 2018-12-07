class Carousel {
    constructor(carouselBanana){
      this.carouselBanana = carouselBanana;
      this.imgItem = this.carouselBanana.querySelectorAll("img");
      this.activeImg = this.imgItem[0];
      this.leftBtn = this.carouselBanana.querySelector(".left-button");
      this.rightBtn = this.carouselBanana.querySelector(".right-button")
      console.log(this.carouselBanana)
      // activate current slide and deactivate others
      this.img = Array.from(this.imgItem).forEach(item=>item.classList.remove("img--is--active"))
      console.log(this.img)
      this.activeImg.classList.add('img--is--active');
  
    //   this.data = this.img.dataset.slide;
    //   console.log(this.data)
  
      this.rightBtn.addEventListener("click",()=> this.right())
      this.leftBtn.addEventListener("click",()=> this.left())
    }
    // metthods
    right() {
        // let img = document.querySelectorAll("img");
        // Array.from(img).forEach(item)
  
    }
  
    left() {
        
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
class Carousel {
  constructor(element) {
    this.element = element;
    this.buttons = this.element.querySelectorAll(".left-button, .right-button");
    this.images = Array.from(this.element.querySelectorAll(".images img")).map(image => new Image(image));
    this.activeImg = this.images[0];
    console.log(this.activeImg);
    this.init();
  }

  init(){
    this.activeImg.selectImg();
  }
  scroll(direction){
    // Deselect the current img and select the current img using whatever animation you deem fit
    if(direction === "left"){
      this.
    }
    else{

    }
  }
}


// Button class sends update commands to the parent if button is clicked
class CarouselButton {
  constructor(element, parent){
    this.element = element;
    this.parent = parent;
    this.element.addEventListener("click", () => { this.btnClick(); })
  }

  btnClick(){
    if(this.element.classList.contains("left-button")){
      this.parent.scroll("left");
    }
    else{
      this.parent.scroll("right");
    }
  }
}

// Image Class, controls whether image is visible or not
class Image {
  constructor(element){
    this.element = element;
    this.element.style.display = "none";
  }

  selectImg(){
    this.element.style.display = "flex";
  }

  desectImg(){
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

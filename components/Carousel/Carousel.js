class Carousel {
  constructor(element) {
    this.element = element;

    this.buttons = Array.from(this.element.querySelectorAll(".left-button, .right-button")).map(button => new CarouselButton(button, this));

    this.images = Array.from(this.element.querySelectorAll(".images img")).map(image => new Image(image));

    this.activeImg = this.images[0];

    this.imgIndex = 0;

    this.init();
  }

  init(){
    this.activeImg.selectImg();
  }
  scroll(direction){
    // Deselect the current img and select the current img using whatever animation you deem fit
    if(direction === "left"){
      // Cycle through one item to the left, if we're at the first image, cycle through to last image in array
      this.imgIndex - 1 >= 0 ? this.imgIndex-- : this.imgIndex = this.images.length - 1;
      this.activeImg.deselectImg();
      this.activeImg = this.images[this.imgIndex];
      this.activeImg.selectImg();

    }
    else{
      // If we are at the last image, cycle through to the first image
      this.imgIndex + 1 < this.images.length ? this.imgIndex++ : this.imgIndex = 0;
      this.activeImg.deselectImg();
      this.activeImg = this.images[this.imgIndex];
      this.activeImg.selectImg();
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
    // this.element.style.display = "none";
    this.element.classList.add("fade-out");
  }

  selectImg(){
    // this.element.style.display = "flex";
    this.element.classList.remove("fade-out");
  }

  deselectImg(){
    // this.element.style.display = "none";
    this.element.classList.add("fade-out");
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

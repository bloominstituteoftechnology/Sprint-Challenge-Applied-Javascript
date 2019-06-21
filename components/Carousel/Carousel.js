class Carousel {
  constructor(element) {
    this.element = element;
    this.prev = this.element.querySelector(".left-button");
    this.next = this.element.querySelector(".right-button");
    this.pics = this.element.querySelectorAll("img");
    this.index = 0;
    this.prev.addEventListener("click", () => this.picShift());
    this.next.addEventListener("click", () => this.picShift());
  }
}

picShift() {

}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

class Carousel {
constructor(element){
    this.element = element;
    this.carousel = this.element.querySelector(".carousel");
}

init(){
    this.activeButton.selectButton();
}
}

let carousel = $();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
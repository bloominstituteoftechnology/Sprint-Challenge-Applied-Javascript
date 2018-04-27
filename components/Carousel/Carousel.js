// ==== S-T-R-E-T-C-HHH ==== //
class CarouselImage {
    constructor(element) {
        this.element = $(element);
    }
    activeImage() {
        this.element.
  }
    hideImage() {

    }
}


class Carousel {
    constructor(element) {
        this.element = $(element);
        this.img = this.element.find("img");
        this.leftButton = this.element.find(".left-button");
        this.rightButton = this.element.find(".right-button");
        this.leftButton.click(() =>
            this.imageLeft()
        );
    }

}


// ==== Map Carousel ==== //


let carousel = $(".carousel");
carousel = carousel.map((index, item) =>
    new Carousel(item)
);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
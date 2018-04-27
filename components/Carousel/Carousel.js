class CarouselBtn {
    constructor(element) {
        this.element = $(element)
    }
}

class Carousel {
    constructor(element) {
        this.element = $(element);
        this.leftButton = element.find(".left-button");
        this.rightButton = element.find(".right-button");
        // this.leftButton = new CarouselBtn(this.leftButton, "left");
        // this.rightButton = new CarouselBtn(this.rightButton, "right");
        this.images = element.find("img");
        this.leftButton.click(() => {this.back()});
        this.rightButton.click(() => {this.forward()});
        this.currentImage = $(this.images[0]);
        this.index = 0;
        this.init();
    }
    init() {
        this.currentImage.show();
    }
    back() {
        this.index = this.index === 0 ? this.images.length-1 : this.index-1;
        this.currentImage.hide();
        this.currentImage = $(this.images[this.index]);
        this.currentImage.show();
    }
    forward() {
        this.index = this.index === this.images.length-1 ? 0 : this.index+1;
        this.currentImage.hide();
        this.currentImage = $(this.images[this.index]);
        this.currentImage.show();
    }
}

let carousel = $(".carousel")
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this component using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
// ==== S-T-R-E-T-C-HHH ==== //
class CarouselImage {
    constructor(element) {
        this.element = $(element);
    }
    showImage() {
        this.element.show();
    }
    hideImage() {
        this.element.hide();
    }
}

class Carousel {
    constructor(element) {
        this.element = $(element);
        this.image = this.element.find("img");
        this.image = this.image.map((index, image) =>
            new CarouselImage(image)
        );
        this.leftButton = this.element.find(".left-button");
        this.rightButton = this.element.find(".right-button");
        this.activeImg = this.image[0];
        this.init();
        this.leftButton.click(() => {
            this.activeImg.hideImage();
            this.activeImg =
        });
        this.rightButton.click(() => {
            this.imageRight();
        });
    }
    init() {
        this.activeImg.showImage();
    }

    imageRight() {
        this.activeImg.hideImage();
        if (this.index === this.image.length - 1) {
            this.index = 0
        };
        this.activeImg = this.image[this.index + 1];
        this.activeImg.showImage();
    }

}


// ==== Map Carousel ==== //


let carousel = $(".carousel");
carousel = carousel.map((index, item) =>
    new Carousel(item)
);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
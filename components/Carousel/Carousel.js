// ==== S-T-R-E-T-C-HHH ==== //
class Carousel {
    constructor(element) {
        this.element = $(element);
        this.leftButton = this.element.find(".left-button");
        this.rightButton = this.element.find(".right-button");
        this.images = this.element.find("img");
        this.activeImg = $(this.images[0]);
        this.imgIndex = 0;
        this.leftButton.click(() => {
            this.imageLeft()
        });
        this.rightButton.click(() => {
            this.imageRight()
        });
        this.init();
    }
    init() {
        this.activeImg.show();
    }

    imageLeft() {
        if (this.imgIndex === 0) {
            this.imgIndex = this.images.length;
        };
        this.imgIndex = this.imgIndex - 1;
        this.activeImg.hide();
        this.activeImg = $(this.images[this.imgIndex]);
        this.activeImg.show();
    }
    imageRight() {
        if (this.imgIndex === this.images.length - 1) {
            this.imgIndex = -1;
        };
        this.imgIndex = this.imgIndex + 1;
        this.activeImg.hide();
        this.activeImg = $(this.images[this.imgIndex]);
        this.activeImg.show();
    }
}


// ==== Map Carousel ==== //


let carousel = $(".carousel");
carouselOne = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
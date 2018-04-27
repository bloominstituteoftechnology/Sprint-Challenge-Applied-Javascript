class Carousels {
    constructor(element) {
        this.element = $(element);
        this.imgs = this.element.find("img");
        this.imgs = this.imgs.map((_, img) => $(img));
        this.imgIndex = 0;
        this.activeImg = this.imgs[this.imgIndex];
        this.init();
        // Button and Event Listener Setup
        this.leftButton = $(".carousel .left-button");
        this.rightButton = $(".carousel .right-button");
        this.rightButton.click(this.clickRight.bind(this));
        this.leftButton.click(this.clickLeft.bind(this));
    }
    init() {
        this.activeImg.show();
    }
    clickRight() {
        // this.activeImg.hide();
        this.activeImg.animate({width:'toggle'},300);
        if (this.imgIndex === this.imgs.length - 1) {
            this.imgIndex = 0;
        } else {
            this.imgIndex++;
        }
        this.activeImg = this.imgs[this.imgIndex];
        this.activeImg.animate({width:'toggle'},150);
    }
    clickLeft() {
        this.activeImg.animate({width:'toggle'},300);
        if (this.imgIndex === 0) {
            this.imgIndex = this.imgs.length - 1;
        } else {
            this.imgIndex--;
        }
        this.activeImg = this.imgs[this.imgIndex];
        this.activeImg.animate({width:'toggle'},150);
    }
}

let carousel = $(".carousel");
carousel = new Carousels(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
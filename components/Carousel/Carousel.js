class Carousel {
    constructor(element) {
        this.element = element;
        this.images = this.element.querySelectorAll("img");
        this.images = Array.from(this.images).map(img => new Image(img, this));
        this.activeImg = this.images[0];
        console.log(this.activeImg);
        this.leftBtn = this.element.querySelector(".left-button");
        this.rightBtn = this.element.querySelector(".right-button");
        this.init();
    }

    init() {
        this.activeImg.selectImg();
    }

    updateActive(imgElement) {
        this.activeImg.deselectImg();
        this.activeImg = imgElement;
    }

    getImage(data) {

    }

}

class Image {
    constructor(element, parent) {
        this.element = element;
        this.parent = parent;
    }

    selectImg() {

    }
}

// let carousel = $();
let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);
console.log(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/

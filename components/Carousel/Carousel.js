class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');

        this.images = this.element.querySelectorAll('img');
        this.images = Array.from(this.images).map(n => new CarouselImage(n));

        this.hideAll();
        this.images[0].show();
        this.imageIndex = 0;

        this.leftButton.addEventListener('click', e => this.shiftLeft(e));
        this.rightButton.addEventListener('click', e => this.shiftRight(e));

    }

    shiftLeft() {
        this.imageIndex -= 1;
        if (this.imageIndex < 0) { this.imageIndex = this.images.length - 1}
        this.hideAll();
        this.images[this.imageIndex].show();
    }

    shiftRight() {
        this.imageIndex += 1;
        if (this.imageIndex >= this.images.length) { this.imageIndex = 0 }
        this.hideAll();
        this.images[this.imageIndex].show();
    }

    hideAll() {
        this.images.forEach(n => n.hide());
    }

}

class CarouselImage {
    constructor(element) {
        this.element = element;
    }
    show(){
        this.element.style.display = null;
    }
    hide(){
        this.element.style.display = 'none';
    }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
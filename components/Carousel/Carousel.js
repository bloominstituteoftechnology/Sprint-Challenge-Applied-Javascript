class CarouselButton {
    constructor (element, parent){
        this.element = $(element);
        this.parent = parent;

        this.element.click(() => { parent.updateActive(this.element.data('crsl')) });
    }
}

class CarouselImage {
    constructor (element, parent) {
        this.element = $(element);
        this.parent = parent;
    }
    showImage() {
        this.element.show();
    }
    
    hideImage() {
        this.element.hide();
    }
}

class Carousel {
    constructor (element){
        this.element = $(element);

        this.buttons = $('.carousel .btn');
        this.buttons = this.buttons.map( (i, button) => new CarouselButton(button, this) );

        this.images = $('.carousel img');
        this.images = this.images.map( (i, image) => new CarouselImage(image, this) );

        this.activeImageIndex = 0;
        
        this.activeImage = this.images[this.activeImageIndex];

        this.init();
    }

    init() {
        this.activeImage.showImage();
    }

    loopImageIndex(num){
        if (this.activeImageIndex + num < 0) {
            this.activeImageIndex = this.images.length - 1;
        } else if (this.activeImageIndex + num > this.images.length - 1) {
            this.activeImageIndex = 0;
        } else {
            this.activeImageIndex += num;
        }
    }

    updateActive(buttonElement){
        this.activeImage.hideImage();
        if (buttonElement === 'rightButton') {
            this.loopImageIndex(1);
            this.activeImage = this.images[this.activeImageIndex];
            this.activeImage.showImage();
        } else {
            this.loopImageIndex(-1);
            this.activeImage = this.images[this.activeImageIndex];
            this.activeImage.showImage();
        }
      }
}

let carousel = $('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt using jQuery. We would like to see as much done as possible using jQuery
    4. Have fun!
*/
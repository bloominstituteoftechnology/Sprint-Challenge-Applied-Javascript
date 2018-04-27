class Carousel {
    constructor(element) {
        this.element = $(element);

        this.leftButton = element.find(".left-button");
        this.leftButton.click(() => {this.back()});

        this.rightButton = element.find(".right-button");
        this.rightButton.click(() => {this.forward()});

        this.images = element.find("img");
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
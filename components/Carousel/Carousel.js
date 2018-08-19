class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = element.querySelector('.left-button');
        this.leftButton.style.zIndex = 2;
        this.rightButton = element.querySelector('.right-button');
        this.rightButton.style.zIndex = 2;
        this.images = element.querySelectorAll('img');
        this.index = 0;
        this.images[this.index].style.display = 'block';
        this.leftButton.addEventListener('click',
            () => {this.left()});
        this.rightButton.addEventListener('click',
            () => {this.right()});
    }

    left() {
        const previousImage = this.images[this.index];
        previousImage.style.zIndex = 1;
        this.index = (this.index === 0) ? this.images.length -1 : this.index - 1;
        this.images[this.index].style.display = 'block';
        TweenMax.to(previousImage, .5, {x: 1200});
        setTimeout(() => (previousImage.style.zIndex = 0, previousImage.style.display = 'none', TweenMax.set(previousImage, {x: 0})), 500);
    };
    right() {
        const previousImage  = this.images[this.index];
        previousImage.style.zIndex = 0;
        this.index = (this.index === this.images.length -1) ? 0 : this.index + 1;
        this.images[this.index].style.display = 'block';
        this.images[this.index].style.zIndex = 1;
        TweenMax.from(this.images[this.index], .5, {x: 1200});
        setTimeout(() => previousImage.style.display = 'none', 500);
    };
}

let carousel = new Carousel(document.querySelector('.carousel'));
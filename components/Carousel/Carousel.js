class Carousel {
    constructor (element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.imgContainer = this.element.querySelector('.carousel-imgs');
        this.imgCount = this.imgContainer.querySelectorAll('img').length;

        this.imgContainer.style.width = `${this.imgCount} * 100}%`;
        this.index = 0;

        this.leftButton.addEventListener('click', _ => this.scroll(-1));
        this.rightButton.addEventListener('click', _ => this.scroll(+1));
    }

    scroll(increment) {
        this.index += increment;
        this.index = this.index % this.imgCount;
        if (this.index < 0) {
            this.index += this.imgCount;
        }
        
        let position = (this.index === 0) ? '0%' : `-${this.index * 100}%`;
        TweenLite.to(this.imgContainer, 0.4, { left: position });
    }
}

let carousel = new Carousel(document.querySelector('.carousel'));

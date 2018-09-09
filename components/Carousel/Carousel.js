class Carousel {
    constructor(el) {
        this.el = el;
        this.rightButton = document.querySelector('.right-button');
        this.leftButton = document.querySelector('.left-button');
        this.count = 0
        this.rightButton.addEventListener('click', () => this.rightClick());
        this.leftButton.addEventListener('click', () => this.leftClick());
    }
    start() {
        const images = document.querySelectorAll('.carousel img');
        images[0].classList.add('show');
    }
    rightClick() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach((img) => {
            img.classList.remove('show');
        })
        if (this.count < images.length - 1) {
            this.count += 1;
            images[this.count].classList.add('show');
        } else {
            this.count = 0;
            images[this.count].classList.add('show');
        }
    }
    leftClick() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach((img) => {
            img.classList.remove('show');
        })
        if (this.count > 0) {
            this.count -= 1;
            images[this.count].classList.add('show');
        } else {
            this.count = images.length - 1;
            images[this.count].classList.add('show');
        }
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);
carousel.start()
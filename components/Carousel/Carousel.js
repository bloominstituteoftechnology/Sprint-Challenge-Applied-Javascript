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
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.style.display = "none";
        })
        images[0].style.display = "block";
    }
    rightClick() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach((img) => {
            img.style.display = "none";
        })
        if (this.count < images.length - 1) {
            this.count += 1;
            images[this.count].style.display = "block";
        } else {
            this.count = 0;
            images[this.count].style.display = "block";
        }
    }
    leftClick() {
        const images = document.querySelectorAll('.carousel img');
        images.forEach((img) => {
            img.style.display = "none";
        })
        if (this.count > 0) {
            this.count -= 1;
            images[this.count].style.display = "block";
        } else {
            this.count = images.length - 1;
            images[this.count].style.display = "block";
        }
    }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel();
carousel.start()
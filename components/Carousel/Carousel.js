class Carousel {
    constructor(element) {
        this.element = element;
        this.imgs = element.querySelectorAll('img');
        this.leftBtn = element.querySelector('.left-button');
        this.rightBtn = element.querySelector('.right-button');
        this.current = 0;

        this.leftBtn.addEventListener('click', () => {this.selectImg(-1)})
        this.rightBtn.addEventListener('click', () => {this.selectImg(1)})

        this.imgs[0].classList.add('img-active');
    }
    selectImg(direction) {
        this.imgs.forEach(img => img.classList.remove('img-active'));
        this.current += direction;
        if (direction === -1 && this.current < 0) {
            this.current = this.imgs.length -1;
        }
        if (direction === 1 && !this.imgs[this.current]) {
            this.current = 0;
        }
        this.imgs[this.current].classList.add('img-active');
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(item => new Carousel(item));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
class Carousel {
    constructor(element) {
        this.element = element;

        this.img = this.element.querySelectorAll('img');
        this.img = Array.from(this.img);

        this.rightButton = this.element.querySelector('.right-button');
        this.leftButton = this.element.querySelector('.left-button');

        this.rightButton.addEventListener('click', () => this.current());
        this.leftButton.addEventListener('click', () => this.previous());
        this.init();
    }
    init() {
        this.img[0].classList.add('showImg');
    }

    current() {
        let currentSlide = 0;
        for (let i = 0; i < 4; i++) {
            if (this.img[i].classList.contains('showImg')) {
                this.img[i].classList.remove('showImg');
                currentSlide = i;
            }
        }
        if (currentSlide > 2) {
            currentSlide = 0;
            this.img[0].classList.add('showImg');
        } else {
            this.img[currentSlide + 1].classList.add('showImg');
        }
    }

    previous() {
        let previousSlide = 0;
        for (let i = 0; i < 4; i++) {
            if (this.img[i].classList.contains('showImg')) {
                this.img[i].classList.remove('showImg');
                previousSlide = i;
            }
        }
        console.log(previousSlide);
        if (previousSlide <= 0) {
            previousSlide = 3;
            this.img[3].classList.add('showImg');
        } else {
            this.img[previousSlide - 1].classList.add('showImg');
        }
    }

}

// START HERE: create a reference 

let carousel = document.querySelectorAll('.carousel');
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. Those buttons are gonna need some click handlers.
    3. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    4. Have fun!
*/
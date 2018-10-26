
class Carousel {
    constructor(element) {
        this.element = element;
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');
        this.image = this.element.querySelectorAll('img');
        this.image = Array.from(this.image);
        this.index = 0;
        this.current = this.image[`${this.index}`];


        this.right.addEventListener('click', () => this.shiftRight());
        this.left.addEventListener('click', () => this.shiftLeft());
    }

    shiftRight() {
        this.current.classList.toggle('active');
        this.index++
        if (this.index > this.image.length -1 ) {
            this.index = 0;
        }
        this.current = this.image[`${this.index}`];
        this.current.classList.toggle('active');
    }

    shiftLeft() {
        this.current.classList.toggle('active')
        this.index--;
        if (this.index < 0) {
            this.index = this.image.length-1
        }
        this.current = this.image[`${this.index}`];
        this.current.classList.toggle('active')
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
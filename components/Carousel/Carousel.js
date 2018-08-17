class Carousel {
    constructor(element) {
        this.element = element;

        this.left = this.element.querySelector('.left-button');
        this.left.addEventListener('click', () => {this.selectLeft()});

        this.right = this.element.querySelector('.right-button');
        this.right.addEventListener('click', () => {this.selectRight()});

        this.imgs = this.element.querySelectorAll('.carousel-img');
        Array.from(this.imgs);

        this.position = 0;

        this.showing = this.imgs[this.position].classList.add('show');
    } 

    selectLeft() {
        this.imgs.forEach(function(img) {
            img.classList.remove('show');
        })

        if (this.position === 0) {
        this.position = 3;
        } else {
        this.position = this.position - 1;
        }

        this.showing = this.imgs[this.position].classList.add('show');
    }

    selectRight() {
        this.imgs.forEach(function(img) {
            img.classList.remove('show');
        })

        if (this.position === 3) {
        this.position = 0;
        } else {
        this.position = this.position + 1;
        }

        this.showing = this.imgs[this.position].classList.add('show');
    }

}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel); 




/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
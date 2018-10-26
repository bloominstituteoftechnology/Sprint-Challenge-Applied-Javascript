class Carousel {
    constructor(element) {
        this.element = element;

        this.leftButton = document.querySelector('.left-button');
        this.rightButton = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel img');
        this.index = Array.from(this.images).length - 1;

        this.leftButton.addEventListener('click', () => {
            this.cycleLeft();
        })

        this.rightButton.addEventListener('click', () => {
            this.cycleRight();
        })
    }

    cycleLeft () {
        if (this.index  === 3) {
            this.images[3].style.display = 'none';
            this.index = 2;
            this.images[2].style.display = 'inline';
        } else if (this.index  === 2) {
            this.images[2].style.display = 'none';
            this.index = 1;
            this.images[1].style.display = 'inline';
        } else if (this.index  === 1) {
            this.images[1].style.display = 'none';
            this.index = 0;
            this.images[0].style.display = 'inline';
        } else {
            this.images[0].style.display = 'none';
            this.index = 3;
            this.images[3].style.display = 'inline';
        }
    }

    cycleRight() {
        if (this.index  === 3) {
            this.images[3].style.display = 'none';
            this.index = 0;
            this.images[0].style.display = 'inline';
        } else if (this.index  === 0) {
            this.images[0].style.display = 'none';
            this.index = 1;
            this.images[1].style.display = 'inline';
        } else if (this.index  === 1) {
            this.images[1].style.display = 'none';
            this.index = 2;
            this.images[2].style.display = 'inline';
        } else {
            this.images[2].style.display = 'none';
            this.index = 3;
            this.images[3].style.display = 'inline';
        }
    }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/